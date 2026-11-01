import assert from 'node:assert/strict';
import { test } from 'node:test';
import { build, createServer, preview, resolveConfig } from 'vite';

test('local-only Vite listeners and no synthetic key in shipped bundle', async () => {
  const sentinel = 'SYNTHETIC_SECURITY_PROBE_NOT_A_REAL_KEY_20261101';
  const previous = process.env.GEMINI_API_KEY;
  process.env.GEMINI_API_KEY = sentinel;
  try {
    const config = await resolveConfig({}, 'serve');
    assert.equal(config.server.host, '127.0.0.1');
    assert.equal(config.define['process.env.GEMINI_API_KEY'], JSON.stringify(sentinel));
    assert.equal(config.define['process.env.API_KEY'], JSON.stringify(sentinel));
    const server = await createServer({ server: { port: 0 }, logLevel: 'error' });
    try {
      await server.listen();
      const address = server.httpServer.address();
      assert.equal(address.address, '127.0.0.1');
      assert.equal((await fetch(`http://127.0.0.1:${address.port}/`)).status, 200);
    } finally { await server.close(); }
    const result = await build({ build: { write: false }, logLevel: 'error' });
    for (const output of (Array.isArray(result) ? result : [result])) {
      for (const file of output.output) {
        const content = file.type === 'chunk' ? file.code : String(file.source);
        assert.equal(content.includes(sentinel), false, `synthetic key reached ${file.fileName}`);
      }
    }
    const previewServer = await preview({ preview: { port: 0 }, logLevel: 'error' });
    try {
      const address = previewServer.httpServer.address();
      assert.equal(address.address, '127.0.0.1');
      assert.equal((await fetch(`http://127.0.0.1:${address.port}/`)).status, 200);
    } finally {
      await new Promise((resolve, reject) => previewServer.httpServer.close(error => error ? reject(error) : resolve()));
    }
  } finally {
    if (previous === undefined) delete process.env.GEMINI_API_KEY;
    else process.env.GEMINI_API_KEY = previous;
  }
});