(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/packages/nextra-theme-blog/dist/components/cusdis.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Comments": (()=>Comments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@0.0.0-experimental-e993439-20250328_react@19.1.0/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/hooks/use-mounted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const Comments = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    const { appId, host: t1 } = t0;
    const host = t1 === void 0 ? "https://cusdis.com" : t1;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"])();
    let t2;
    let t3;
    if ($[0] !== resolvedTheme) {
        t2 = ()=>{
            ;
            try {
                if (window.CUSDIS) {
                    window.CUSDIS.setTheme(resolvedTheme);
                }
            } catch (t42) {
                const error = t42;
                console.error(error);
            }
        };
        t3 = [
            resolvedTheme
        ];
        $[0] = resolvedTheme;
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!appId) {
        console.warn("[nextra/cusdis] `appId` is required");
        return null;
    }
    if (!mounted) {
        return null;
    }
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            marginTop: "4rem"
        };
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("script", {
            async: true,
            src: "https://cusdis.com/js/cusdis.es.js"
        });
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    let t6;
    if ($[5] !== appId || $[6] !== host || $[7] !== pathname || $[8] !== resolvedTheme) {
        t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: t4,
            id: "cusdis_thread",
            "data-host": host,
            "data-app-id": appId,
            "data-page-id": pathname,
            "data-page-url": pathname,
            "data-page-title": document.title,
            "data-theme": resolvedTheme,
            children: t5
        });
        $[5] = appId;
        $[6] = host;
        $[7] = pathname;
        $[8] = resolvedTheme;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
};
_s(Comments, "XV+85BbI+MZ2OCXa8ztG7RBWICA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$hooks$2f$use$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMounted"]
    ];
});
_c = Comments;
;
var _c;
__turbopack_context__.k.register(_c, "Comments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=packages_nextra-theme-blog_dist_components_cusdis_c4bb8623.js.map