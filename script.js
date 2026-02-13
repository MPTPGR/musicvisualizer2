 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/styles.css b/styles.css
new file mode 100644
index 0000000000000000000000000000000000000000..52f6575c60c6d1d738f7acf0559f02f07bf5fe48
--- /dev/null
+++ b/styles.css
@@ -0,0 +1,111 @@
+:root {
+  color-scheme: dark;
+}
+
+* {
+  box-sizing: border-box;
+}
+
+body {
+  margin: 0;
+  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
+  background: radial-gradient(circle at 20% 0%, #26114d, #09070f 65%);
+  color: #f6edff;
+}
+
+.app {
+  display: grid;
+  grid-template-columns: minmax(300px, 420px) 1fr;
+  gap: 1rem;
+  min-height: 100vh;
+  padding: 1rem;
+}
+
+.controls {
+  background: rgba(18, 13, 31, 0.8);
+  border: 1px solid rgba(194, 119, 255, 0.4);
+  border-radius: 14px;
+  padding: 1rem;
+  backdrop-filter: blur(3px);
+}
+
+h1 {
+  margin-top: 0;
+  font-size: 1.35rem;
+}
+
+.control-row {
+  display: grid;
+  gap: 0.35rem;
+  margin-bottom: 0.9rem;
+}
+
+input,
+select,
+button,
+a {
+  font: inherit;
+}
+
+input[type='url'],
+select,
+input[type='file'] {
+  width: 100%;
+  padding: 0.55rem;
+  border: 1px solid rgba(164, 116, 255, 0.5);
+  background: #140e24;
+  color: #fef7ff;
+  border-radius: 8px;
+}
+
+button,
+#saveLink {
+  background: linear-gradient(120deg, #7f31ff, #d33eff);
+  border: none;
+  border-radius: 999px;
+  color: white;
+  padding: 0.5rem 0.95rem;
+  cursor: pointer;
+  text-decoration: none;
+  display: inline-block;
+}
+
+.actions {
+  display: flex;
+  gap: 0.55rem;
+  flex-wrap: wrap;
+  align-items: center;
+}
+
+.status {
+  min-height: 1.6em;
+  font-size: 0.95rem;
+  color: #f5c5ff;
+}
+
+#audio {
+  width: 100%;
+}
+
+.canvas-wrap {
+  border-radius: 14px;
+  overflow: hidden;
+  border: 1px solid rgba(180, 95, 255, 0.5);
+  background: #05020d;
+}
+
+#visualizer {
+  width: 100%;
+  height: 100%;
+  display: block;
+}
+
+@media (max-width: 980px) {
+  .app {
+    grid-template-columns: 1fr;
+  }
+
+  .canvas-wrap {
+    min-height: 55vh;
+  }
+}
 
EOF
)
