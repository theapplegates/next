const CHUNK_PUBLIC_PATH = "transform.js";
const runtime = require("./build/chunks/[turbopack]_runtime.js");
runtime.loadChunk("build/chunks/packages_nextra-theme-blog_postcss_config_mjs_transform_ts_b0710480._.js");
runtime.loadChunk("build/chunks/[root-of-the-server]__663a2c36._.js");
runtime.getOrInstantiateRuntimeModule("[turbopack-node]/globals.ts [postcss] (ecmascript)", CHUNK_PUBLIC_PATH);
runtime.getOrInstantiateRuntimeModule("[turbopack-node]/ipc/evaluate.ts/evaluate.js { INNER => \"[project]/packages/nextra-theme-blog/postcss.config.mjs/transform.ts { CONFIG => \\\"[project]/packages/nextra-theme-blog/postcss.config.mjs [postcss] (ecmascript)\\\" } [postcss] (ecmascript)\", RUNTIME => \"[turbopack-node]/ipc/evaluate.ts [postcss] (ecmascript)\" } [postcss] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[turbopack-node]/ipc/evaluate.ts/evaluate.js { INNER => \"[project]/packages/nextra-theme-blog/postcss.config.mjs/transform.ts { CONFIG => \\\"[project]/packages/nextra-theme-blog/postcss.config.mjs [postcss] (ecmascript)\\\" } [postcss] (ecmascript)\", RUNTIME => \"[turbopack-node]/ipc/evaluate.ts [postcss] (ecmascript)\" } [postcss] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
