import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";
export default defineConfig({
  esbuild: { jsx: "automatic" },
  plugins: [
    {
      name: "offline-core",
      closeBundle() {
        const walk = (dir) =>
          fs
            .readdirSync(dir, { withFileTypes: true })
            .flatMap((e) =>
              e.isDirectory()
                ? walk(path.join(dir, e.name))
                : [path.join(dir, e.name)],
            );
        const files = walk("dist").map(
          (f) => "/" + f.replaceAll("\\", "/").replace(/^dist\//, ""),
        );
        const version = "mana-" + Date.now();
        fs.writeFileSync(
          "dist/sw.js",
          `const CACHE=${JSON.stringify(version)};const CORE=${JSON.stringify(["/", ...files])};
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mana-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;if(event.request.mode==='navigate'){event.respondWith(caches.match('/index.html').then(cached=>cached||fetch(event.request)));return}event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)))});`,
        );
      },
    },
  ],
});
