# Vite更新と開発待受の限定（2026-11-01）

Vite6.4.1を6.4.5へ固定し、dev serverのhostを0.0.0.0から127.0.0.1へ限定。Vite6.4.5のpreviewはserver.hostを継承する。LAN共有を再開する必要がある場合は明示的に見直す。公開本番サイトのhosting設定は変更しない。

同じbuild経路に残った指摘は既存親制約内のnpm updateで解決。Babel/browser-target/PostCSS等を更新し、override・React runtime更新・一括最新版更新なし。Node22.23.4はVite/React pluginのengine条件に適合。

npm ci --ignore-scripts、npm run build、npm test成功。npm testはfresh build後、actual dev/previewの127.0.0.1 listenerとHTTP200を検証。追加in-memory buildはwrite:false、合成GEMINIキーがconfig.defineの両名へ反映されたことをassertし、生成Rollup outputにその合成値がないことを確認する。実.env/秘密値は閲覧しない。source参照のファイル名確認では関連名はconfig/READMEのみだった。

合成試験の範囲は現在のRollup出力。過去の配信bundle、publicコピー資産全体、実秘密の漏えい有無、稼働中listener/firewall到達は未認定。defineの既存式は残っており、将来その参照を追加する場合はsecretをclientへ渡さない設計に変更する必要がある。npm auditは2026-11-01の更新直後0件（将来の安全保証ではない）。

実装Sol low。gpt-6-astra/high独立reviewとhosted状態はPR本文へ記録。マージ/本番配備未実施。反映前に承認を得て既存手順を使う。復旧は旧artifactを優先。旧lockへの復帰は脆弱性を戻し、旧hostへの復帰はLAN待受を戻すため、安易に一括revertして安全復旧としない。既存別作業checkoutは未変更。

公式候補情報: https://registry.npmjs.org/vite/6.4.5 。検証日2026-11-01 JST。TLS/証明書検証設定は変更しない。