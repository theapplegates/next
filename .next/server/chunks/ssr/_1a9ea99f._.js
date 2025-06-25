module.exports = {

"[project]/packages/nextra-theme-blog/dist/components/layout.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer),
    "Layout": (()=>Layout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@0.0.0-experimental-e993439-20250328_react@19.1.0/node_modules/react-compiler-runtime/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next-themes/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$view$2d$transitions$40$0$2e$3$2e$4_next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_react$2d$dom$40$19$2e$1$2e$_ligsyow7lmy4sxvn6ww5pgs3ta$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-view-transitions@0.3.4_next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_react-dom@19.1._ligsyow7lmy4sxvn6ww5pgs3ta/node_modules/next-view-transitions/dist/index.js [app-rsc] (ecmascript)");
;
;
;
;
const defaultChildren = `CC BY-NC 4.0 ${/* @__PURE__ */ new Date().getFullYear()} \xA9 Shu Ding.`;
const Footer = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(2);
    const { children: t1 } = t0;
    const children = t1 === void 0 ? defaultChildren : t1;
    let t2;
    if ($[0] !== children) {
        t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("small", {
            className: "x:mt-32 x:block",
            "data-pagefind-ignore": "all",
            children
        });
        $[0] = children;
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    return t2;
};
const Layout = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(6);
    const { children, nextThemes, banner } = t0;
    let t1;
    if ($[0] !== children) {
        t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("article", {
            className: "x:container x:px-4 x:prose x:max-md:prose-sm x:dark:prose-invert",
            dir: "ltr",
            "data-pagefind-body": true,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$view$2d$transitions$40$0$2e$3$2e$4_next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_react$2d$dom$40$19$2e$1$2e$_ligsyow7lmy4sxvn6ww5pgs3ta$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewTransitions"], {
                children
            })
        });
        $[0] = children;
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== banner || $[3] !== nextThemes || $[4] !== t1) {
        t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$themes$40$0$2e$4$2e$6_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            attribute: "class",
            ...nextThemes,
            children: [
                banner,
                t1
            ]
        });
        $[2] = banner;
        $[3] = nextThemes;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
;
}}),
"[project]/packages/nextra/dist/client/normalize-pages.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "normalizePages": (()=>normalizePages)
});
"use no memo";
const DEFAULT_PAGE_THEME = {
    breadcrumb: true,
    collapsed: void 0,
    footer: true,
    layout: "default",
    navbar: true,
    pagination: true,
    sidebar: true,
    timestamp: true,
    toc: true,
    typesetting: "default"
};
function extendMeta(_meta = {}, fallback, metadata = {}) {
    const theme = {
        ...fallback.theme,
        ..._meta.theme,
        ...metadata.theme
    };
    return {
        ...fallback,
        ..._meta,
        display: metadata.display || _meta.display || fallback.display,
        theme
    };
}
function findFirstRoute(items) {
    for (const item of items){
        if (item.route) return item.route;
        if (item.children) {
            const route = findFirstRoute(item.children);
            if (route) return route;
        }
    }
}
function normalizePages({ list, route, /** @default '' */ docsRoot = "", /** @default DEFAULT_PAGE_THEME */ pageThemeContext = DEFAULT_PAGE_THEME }) {
    const underCurrentDocsRoot = route.startsWith(docsRoot);
    const directories = [];
    const docsDirectories = [];
    const flatDocsDirectories = [];
    const topLevelNavbarItems = [];
    const firstItem = list[0];
    const meta = "data" in firstItem ? firstItem.data : {};
    const items = "data" in firstItem ? list.slice(1) : list;
    const fallbackMeta = meta["*"] || {};
    let activeType = fallbackMeta.type;
    let activeIndex = 0;
    let activeThemeContext = {
        ...pageThemeContext,
        ...fallbackMeta.theme
    };
    let activePath = [];
    for (const currentItem of items){
        const extendedMeta = extendMeta(meta[currentItem.name], fallbackMeta, currentItem.frontMatter);
        const { display, type = "doc" } = extendedMeta;
        const extendedPageThemeContext = {
            ...pageThemeContext,
            ...extendedMeta.theme
        };
        const normalizedChildren = "children" in currentItem && normalizePages({
            list: currentItem.children,
            route,
            docsRoot: type === "page" || type === "menu" ? currentItem.route : docsRoot,
            underCurrentDocsRoot,
            pageThemeContext: extendedPageThemeContext
        });
        const getItem = ()=>({
                ...currentItem,
                type,
                ..."title" in currentItem && {
                    title: currentItem.title
                },
                ...display && {
                    display
                },
                ...normalizedChildren && {
                    children: []
                }
            });
        const item = getItem();
        const docsItem = getItem();
        if ("children" in docsItem) {
            const { collapsed } = extendedMeta.theme;
            if (typeof collapsed === "boolean") {
                docsItem.theme = {
                    collapsed
                };
            }
        }
        const pageItem = getItem();
        docsItem.isUnderCurrentDocsTree = underCurrentDocsRoot;
        if (type === "separator") {
            item.isUnderCurrentDocsTree = underCurrentDocsRoot;
        }
        if (currentItem.route === route) {
            activePath = [
                item
            ];
            activeType = type;
            activeThemeContext = {
                ...activeThemeContext,
                ...extendedPageThemeContext
            };
            switch(type){
                case "page":
                case "menu":
                    activeIndex = topLevelNavbarItems.length;
                    break;
                case "doc":
                    activeIndex = flatDocsDirectories.length;
            }
        }
        const isHidden = display === "hidden";
        if (normalizedChildren) {
            if (// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- fixme
            normalizedChildren.activeIndex !== void 0 && normalizedChildren.activeType !== void 0) {
                activeThemeContext = normalizedChildren.activeThemeContext;
                activeType = normalizedChildren.activeType;
                if (isHidden) {
                    continue;
                }
                activePath = [
                    item,
                    // Do not include folder which shows only his children
                    ...normalizedChildren.activePath.filter((item2)=>item2.display !== "children")
                ];
                switch(activeType){
                    case "page":
                    case "menu":
                        activeIndex = topLevelNavbarItems.length + normalizedChildren.activeIndex;
                        break;
                    case "doc":
                        activeIndex = flatDocsDirectories.length + normalizedChildren.activeIndex;
                        break;
                }
                if ("frontMatter" in currentItem && type === "doc") {
                    activeIndex++;
                }
            }
            switch(type){
                case "page":
                case "menu":
                    pageItem.children.push(...normalizedChildren.directories);
                    docsDirectories.push(...normalizedChildren.docsDirectories);
                    if (normalizedChildren.flatDocsDirectories.length) {
                        const route2 = findFirstRoute(normalizedChildren.flatDocsDirectories);
                        if (route2) pageItem.firstChildRoute = route2;
                        topLevelNavbarItems.push(pageItem);
                    } else if ("frontMatter" in pageItem) {
                        topLevelNavbarItems.push(pageItem);
                    }
                    break;
                case "doc":
                    docsItem.children.push(...normalizedChildren.docsDirectories);
                    if ("frontMatter" in item && display !== "children") {
                        flatDocsDirectories.push(docsItem);
                    }
            }
            flatDocsDirectories.push(...normalizedChildren.flatDocsDirectories);
            item.children.push(...normalizedChildren.directories);
        } else {
            if (isHidden) {
                continue;
            }
            switch(type){
                case "page":
                case "menu":
                    topLevelNavbarItems.push(pageItem);
                    break;
                case "doc":
                    {
                        const withHrefProp = "href" in item;
                        if (!withHrefProp) {
                            flatDocsDirectories.push(docsItem);
                        }
                    }
            }
        }
        if (isHidden) {
            continue;
        }
        if (type === "doc" && display === "children") {
            if (docsItem.children) {
                directories.push(...docsItem.children);
                docsDirectories.push(...docsItem.children);
            }
        } else {
            directories.push(item);
        }
        switch(type){
            case "page":
            case "menu":
                docsDirectories.push(pageItem);
                break;
            case "doc":
                if (display !== "children") {
                    docsDirectories.push(docsItem);
                }
                break;
            case "separator":
                docsDirectories.push(item);
        }
    }
    const activeMetadata = activePath.at(-1)?.frontMatter;
    const result = {
        activeType,
        activeIndex,
        activeThemeContext,
        activeMetadata,
        activePath,
        directories,
        docsDirectories: docsDirectories.filter((item)=>item.isUnderCurrentDocsTree),
        flatDocsDirectories,
        topLevelNavbarItems
    };
    return result;
}
;
}}),
"[project]/packages/nextra-theme-blog/dist/components/navbar-link.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NavbarLink": (()=>NavbarLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NavbarLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavbarLink() from the server but NavbarLink is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra-theme-blog/dist/components/navbar-link.js <module evaluation>", "NavbarLink");
}}),
"[project]/packages/nextra-theme-blog/dist/components/navbar-link.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NavbarLink": (()=>NavbarLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NavbarLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavbarLink() from the server but NavbarLink is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra-theme-blog/dist/components/navbar-link.js", "NavbarLink");
}}),
"[project]/packages/nextra-theme-blog/dist/components/navbar-link.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$navbar$2d$link$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/navbar-link.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$navbar$2d$link$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/navbar-link.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$navbar$2d$link$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/packages/nextra-theme-blog/dist/components/navbar.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Navbar": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@0.0.0-experimental-e993439-20250328_react@19.1.0/node_modules/react-compiler-runtime/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$normalize$2d$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/normalize-pages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$navbar$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/navbar-link.js [app-rsc] (ecmascript)");
;
;
;
;
const Navbar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(9);
    const { children, pageMap } = t0;
    let t1;
    let t2;
    let t3;
    if ($[0] !== pageMap) {
        const { topLevelNavbarItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$normalize$2d$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizePages"])({
            list: pageMap,
            route: "/"
        });
        t1 = "x:mb-8 x:flex x:items-center x:gap-3 x:justify-end";
        t2 = "all";
        t3 = topLevelNavbarItems.map(_temp);
        $[0] = pageMap;
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== children || $[5] !== t1 || $[6] !== t2 || $[7] !== t3) {
        t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("header", {
            className: t1,
            "data-pagefind-ignore": t2,
            children: [
                t3,
                children
            ]
        });
        $[4] = children;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
};
function _temp(nav) {
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$navbar$2d$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NavbarLink"], {
        href: nav.route,
        children: nav.title
    }, nav.route);
}
;
}}),
"[project]/packages/nextra-theme-blog/dist/components/theme-switch.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeSwitch": (()=>ThemeSwitch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ThemeSwitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeSwitch() from the server but ThemeSwitch is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra-theme-blog/dist/components/theme-switch.js <module evaluation>", "ThemeSwitch");
}}),
"[project]/packages/nextra-theme-blog/dist/components/theme-switch.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeSwitch": (()=>ThemeSwitch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ThemeSwitch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeSwitch() from the server but ThemeSwitch is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra-theme-blog/dist/components/theme-switch.js", "ThemeSwitch");
}}),
"[project]/packages/nextra-theme-blog/dist/components/theme-switch.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$theme$2d$switch$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/theme-switch.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$theme$2d$switch$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/theme-switch.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$theme$2d$switch$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/packages/nextra/dist/client/icons/x.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ReactComponent": (()=>SvgX)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@0.0.0-experimental-e993439-20250328_react@19.1.0/node_modules/react-compiler-runtime/dist/index.js [app-rsc] (ecmascript)");
;
;
const SvgX = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(3);
    let t0;
    if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        });
        $[0] = t0;
    } else {
        t0 = $[0];
    }
    let t1;
    if ($[1] !== props) {
        t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("svg", {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            ...props,
            children: t0
        });
        $[1] = props;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
;
}}),
"[project]/packages/nextra/dist/client/icons/x.js [app-rsc] (ecmascript) <export ReactComponent as XIcon>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "XIcon": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReactComponent"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/icons/x.js [app-rsc] (ecmascript)");
}}),
"[project]/packages/nextra/dist/client/components/banner/close-banner-button.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CloseBannerButton": (()=>CloseBannerButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CloseBannerButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CloseBannerButton() from the server but CloseBannerButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra/dist/client/components/banner/close-banner-button.js <module evaluation>", "CloseBannerButton");
}}),
"[project]/packages/nextra/dist/client/components/banner/close-banner-button.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CloseBannerButton": (()=>CloseBannerButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CloseBannerButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CloseBannerButton() from the server but CloseBannerButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra/dist/client/components/banner/close-banner-button.js", "CloseBannerButton");
}}),
"[project]/packages/nextra/dist/client/components/banner/close-banner-button.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$close$2d$banner$2d$button$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/banner/close-banner-button.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$close$2d$banner$2d$button$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/banner/close-banner-button.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$close$2d$banner$2d$button$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/packages/nextra/dist/client/components/banner/index.client.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientBanner": (()=>ClientBanner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ClientBanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientBanner() from the server but ClientBanner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra/dist/client/components/banner/index.client.js <module evaluation>", "ClientBanner");
}}),
"[project]/packages/nextra/dist/client/components/banner/index.client.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientBanner": (()=>ClientBanner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ClientBanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientBanner() from the server but ClientBanner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra/dist/client/components/banner/index.client.js", "ClientBanner");
}}),
"[project]/packages/nextra/dist/client/components/banner/index.client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$index$2e$client$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/banner/index.client.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$index$2e$client$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/banner/index.client.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$index$2e$client$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/packages/nextra/dist/client/components/banner/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Banner": (()=>Banner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@0.0.0-experimental-e993439-20250328_react@19.1.0/node_modules/react-compiler-runtime/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__XIcon$3e$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/icons/x.js [app-rsc] (ecmascript) <export ReactComponent as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$close$2d$banner$2d$button$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/banner/close-banner-button.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/banner/index.client.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const BANNER_CLASS_NAME = "nextra-banner";
const Banner = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(18);
    let className;
    let props;
    let t1;
    let t2;
    if ($[0] !== t0) {
        ({ dismissible: t1, storageKey: t2, className, ...props } = t0);
        $[0] = t0;
        $[1] = className;
        $[2] = props;
        $[3] = t1;
        $[4] = t2;
    } else {
        className = $[1];
        props = $[2];
        t1 = $[3];
        t2 = $[4];
    }
    const dismissible = t1 === void 0 ? true : t1;
    const storageKey = t2 === void 0 ? BANNER_CLASS_NAME : t2;
    if (!props.children) {
        return null;
    }
    const hideBannerScript = `try{document.querySelector('.${BANNER_CLASS_NAME}').classList.toggle('x:hidden',localStorage.getItem(${JSON.stringify(storageKey)}))}catch(e){}`;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(BANNER_CLASS_NAME, "x:max-md:sticky x:top-0 x:z-30 x:flex x:items-center x:px-2", "x:text-slate-50 x:dark:text-white x:bg-neutral-900 x:dark:bg-[linear-gradient(1deg,#383838,#212121)]", "x:print:[display:none]");
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== className) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("x:w-full x:text-center x:font-medium x:text-sm x:py-2.5", className);
        $[6] = className;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== props || $[9] !== t4) {
        t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: t4,
            ...props
        });
        $[8] = props;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== dismissible || $[12] !== hideBannerScript || $[13] !== storageKey) {
        t6 = dismissible && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$close$2d$banner$2d$button$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CloseBannerButton"], {
            storageKey,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("script", {
                    dangerouslySetInnerHTML: {
                        __html: hideBannerScript
                    }
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__ReactComponent__as__XIcon$3e$__["XIcon"], {
                    height: "1em"
                })
            ]
        });
        $[11] = dismissible;
        $[12] = hideBannerScript;
        $[13] = storageKey;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t5 || $[16] !== t6) {
        t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientBanner"], {
            className: t3,
            suppressHydrationWarning: true,
            children: [
                t5,
                t6
            ]
        });
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
};
;
}}),
"[project]/packages/nextra/dist/server/constants.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CWD": (()=>CWD),
    "DEFAULT_PROPERTY_PROPS": (()=>DEFAULT_PROPERTY_PROPS),
    "EXTERNAL_URL_RE": (()=>EXTERNAL_URL_RE),
    "IS_PRODUCTION": (()=>IS_PRODUCTION),
    "MARKDOWN_EXTENSION_RE": (()=>MARKDOWN_EXTENSION_RE),
    "MARKDOWN_URL_EXTENSION_RE": (()=>MARKDOWN_URL_EXTENSION_RE),
    "METADATA_ONLY_RQ": (()=>METADATA_ONLY_RQ)
});
const MARKDOWN_EXTENSION_RE = /\.mdx?$/;
const CWD = process.cwd();
const MARKDOWN_URL_EXTENSION_RE = /\.mdx?(?:(?=[#?])|$)/;
const IS_PRODUCTION = ("TURBOPACK compile-time value", "development") === "production";
const EXTERNAL_URL_RE = /^https?:\/\//;
const DEFAULT_PROPERTY_PROPS = {
    type: "Property",
    kind: "init",
    method: false,
    shorthand: false,
    computed: false
};
const METADATA_ONLY_RQ = "?metadata";
;
}}),
"[project]/packages/nextra/dist/server/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createAstExportConst": (()=>createAstExportConst),
    "createAstObject": (()=>createAstObject),
    "logger": (()=>logger),
    "pageTitleFromFilename": (()=>pageTitleFromFilename)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$title$40$4$2e$0$2e$1$2f$node_modules$2f$title$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/title@4.0.1/node_modules/title/dist/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/server/constants.js [app-rsc] (ecmascript)");
;
;
const logger = {
    info: console.log.bind(null, "-", "\x1B[36minfo\x1B[0m", "[nextra]"),
    warn: console.log.bind(null, "-", "\x1B[33mwarn\x1B[0m", "[nextra]"),
    error: console.log.bind(null, "-", "\x1B[31merror\x1B[0m", "[nextra]")
};
function pageTitleFromFilename(fileName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$title$40$4$2e$0$2e$1$2f$node_modules$2f$title$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(fileName.replaceAll(/[-_]/g, " "), {
        special: [
            "SSR",
            "CORS",
            "ESLint"
        ]
    });
}
function createAstExportConst(name, value) {
    return {
        type: "ExportNamedDeclaration",
        specifiers: [],
        declaration: {
            type: "VariableDeclaration",
            kind: "const",
            declarations: [
                {
                    type: "VariableDeclarator",
                    id: {
                        type: "Identifier",
                        name
                    },
                    init: value
                }
            ]
        }
    };
}
function createAstObject(obj) {
    return {
        type: "ObjectExpression",
        properties: Object.entries(obj).map(([key, value])=>({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_PROPERTY_PROPS"],
                key: {
                    type: "Identifier",
                    name: key
                },
                value: value && typeof value === "object" ? value : {
                    type: "Literal",
                    value
                }
            }))
    };
}
;
}}),
"[project]/packages/nextra/dist/server/schemas.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MathJaxOptionsSchema": (()=>MathJaxOptionsSchema),
    "NextraConfigSchema": (()=>NextraConfigSchema),
    "element": (()=>element),
    "itemSchema": (()=>itemSchema),
    "menuSchema": (()=>menuSchema),
    "metaSchema": (()=>metaSchema),
    "pageThemeSchema": (()=>pageThemeSchema),
    "reactNode": (()=>reactNode),
    "separatorItemSchema": (()=>separatorItemSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.0-beta.20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.0-beta.20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq/node_modules/zod/dist/esm/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/server/utils.js [app-rsc] (ecmascript)");
;
;
;
const MathJaxOptionsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    src: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().meta({
        description: "URL for MathJax.",
        default: '"https://cdnjs.cloudflare.com"'
    }),
    config: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom().optional().meta({
        description: "MathJax config. See [configuring MathJax](https://docs.mathjax.org/en/latest/options/index.html).",
        type: 'import("better-react-mathjax").MathJax3Config'
    })
});
const MdxOptionsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    rehypePlugins: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom().optional().meta({
        description: "List of rehype plugins.",
        type: 'import("@mdx-js/mdx").ProcessorOptions["rehypePlugins"]'
    }),
    remarkPlugins: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom().optional().meta({
        description: "List of remark plugins.",
        type: 'import("@mdx-js/mdx").ProcessorOptions["remarkPlugins"]'
    }),
    recmaPlugins: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom().optional().meta({
        description: "List of recma plugins. This is a new ecosystem, currently in beta, to transform esast trees (JavaScript).",
        type: 'import("@mdx-js/mdx").ProcessorOptions["recmaPlugins"]'
    }),
    format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "detect",
        "mdx",
        "md"
    ]).default("detect").meta({
        description: `Format of the file.
- \`'md'\` means treat as markdown
- \`'mdx'\` means treat as MDX
- \`'detect'\` means try to detect the format based on file path.`
    }),
    rehypePrettyCodeOptions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom().default({}).meta({
        description: `Configuration options for [Rehype Pretty Code](https://github.com/rehype-pretty/rehype-pretty-code).
@remarks \`RehypePrettyCodeOptions\``,
        type: 'import("rehype-pretty-code").Options'
    })
});
const NextraConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    defaultShowCopyCode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: `Enable the copy button for all code blocks by default, without needing to set \`copy=true\` attribute in the code block metadata.
> [!TIP]
>
> You could still disable the button for specific blocks using \`copy=false\` attribute.`
    }),
    search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
            codeblocks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().meta({
                description: "Whether to index code blocks."
            })
        })
    ]).default({
        codeblocks: false
    }).meta({
        description: `Option to enable search functionality. When enabled, it sets the \`data-pagefind-body\` attribute on the \`<main>\` element.
> [!TIP]
>
> When set to \`codeblocks: false\`, it adds the \`data-pagefind-ignore="all"\` attribute to all code blocks (\`<pre>\` elements).`
    }),
    staticImage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true).meta({
        description: `Option to automatically optimizing your static image imports with the Markdown syntax.
> [!TIP]
>
> Example: \`![Hello](/demo.png)\`.`
    }),
    readingTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: `Adds estimated reading time of \`.md\` and \`.mdx\` files using [readingTime](https://npmjs.com/package/reading-time) package.
> [!TIP]
>
> The reading time is added to the front matter under the \`readingTime\` key.`
    }),
    latex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
            renderer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("mathjax"),
            options: MathJaxOptionsSchema.optional()
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
            renderer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("katex"),
            options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom().meta({
                description: "KaTeX options. See https://katex.org/docs/options.html.",
                type: 'import("rehype-katex").Options'
            })
        })
    ]).optional().meta({
        description: "Enable LaTeX either with [KaTeX](https://katex.org) to pre-render LaTeX expressions directly in MDX or [MathJax](https://mathjax.org) to dynamically render math in the browser."
    }),
    codeHighlight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true).meta({
        description: "Enable or disable syntax highlighting."
    }),
    mdxOptions: MdxOptionsSchema.default(MdxOptionsSchema.parse({})).meta({
        description: `Options specific to MDX compiling.
@remarks \`MdxOptions\``
    }),
    whiteListTagsStyling: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().meta({
        description: `Allows you to whitelist HTML elements to be replaced with components defined in the \`mdx-components.js\` file.
> [!TIP]
>
> By default, Nextra only replaces \`<details>\` and \`<summary>\` elements.`
    }),
    contentDirBasePath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().startsWith("/").refine((value)=>value.length === 1 || !value.endsWith("/"), {
        error: 'Must not end with "/"'
    }).default("/").meta({
        description: "Option to serve your `.md` and `.mdx` files from the `content` directory at a custom path instead of the root (`/`)."
    }),
    unstable_shouldAddLocaleToLinks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false).meta({
        description: "Prefixes locale to all links in the page map information. Useful for i18n when you don't want to use Nextra's `middleware` function."
    })
});
const element = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom(function checkReactElement(data) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidElement"])(data);
}, {
    error: "Must be a valid React element"
});
const reactNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom(function checkReactNode(data) {
    if (// Check if it's a valid React element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidElement"])(data) || // Check if it's null or undefined
    data == null || typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
        return true;
    }
    if (Array.isArray(data)) {
        return data.every((item)=>checkReactNode(item));
    }
    return false;
}, {
    error: "Must be a valid React node"
});
const stringOrElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    element
]);
const pageThemeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    breadcrumb: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: "Show or hide breadcrumb navigation.",
        default: true
    }),
    collapsed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: "Indicates whether the item in sidebar is collapsed by default.",
        default: false
    }),
    footer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: "Specifies whether to display the footer.",
        default: true
    }),
    layout: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal([
        "default",
        "full"
    ]).optional().meta({
        description: "Defines the layout style.",
        default: "'default'"
    }),
    navbar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: "Specifies whether to display the navbar.",
        default: true
    }),
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: "Determines if pagination controls are shown.",
        default: true
    }),
    sidebar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: "Specifies whether to display the sidebar.",
        default: true
    }),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: 'Indicates if "last updated" timestamps are displayed.',
        default: true
    }),
    toc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().meta({
        description: "Determines whether a table of contents is displayed.",
        default: true
    }),
    typesetting: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal([
        "default",
        "article"
    ]).optional().meta({
        description: "Configures the text typesetting style.",
        default: "'default'"
    })
});
const title = stringOrElement.optional();
const linkSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    title,
    href: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const separatorItemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("separator"),
    title
});
const menuItemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    stringOrElement,
    linkSchema,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
        title: stringOrElement
    }),
    separatorItemSchema
]).transform(transformTitle);
const menuSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("menu"),
    title,
    items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), menuItemSchema).transform((obj)=>{
        for(const key in obj){
            obj[key].title ||= (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageTitleFromFilename"])(key);
        }
        return obj;
    }),
    display: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "normal",
        "hidden"
    ]).optional()
});
const itemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "page",
        "doc"
    ]).optional(),
    title,
    /**
   * An option to control how an item should be displayed in the sidebar:
   * - `normal`: the default behavior, item will be displayed
   * - `hidden`: the item will not be displayed in the sidebar entirely
   * - `children`: if the item is a folder, itself will be hidden but all its children will still be processed
   */ display: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "normal",
        "hidden",
        "children"
    ]).optional(),
    theme: pageThemeSchema.optional()
});
const metaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    stringOrElement.transform(transformTitle),
    itemSchema,
    linkSchema.extend({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "page",
            "doc"
        ]).optional(),
        display: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "normal",
            "hidden"
        ]).optional()
    }),
    separatorItemSchema,
    menuSchema
]);
function transformTitle(title2) {
    return typeof title2 === "string" || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidElement"])(title2) ? {
        title: title2
    } : title2;
}
;
}}),
"[project]/packages/nextra/dist/client/components/head.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Head": (()=>Head),
    "HeadPropsSchema": (()=>HeadPropsSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@0.0.0-experimental-e993439-20250328_react@19.1.0/node_modules/react-compiler-runtime/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.0-beta.20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.0.0-beta.20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq/node_modules/zod/dist/esm/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/server/schemas.js [app-rsc] (ecmascript)");
;
;
;
;
const darkLightSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
        dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })
]);
function convertColor(v) {
    return typeof v === "number" ? {
        dark: v,
        light: v
    } : v;
}
function hexToRgb(hex) {
    hex = hex.slice(1);
    if (hex.length === 3) {
        hex = hex.split("").map((char)=>char + char).join("");
    }
    const bigint = Number.parseInt(hex, 16);
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
}
const RGB_RE = /^rgb\((?<rgb>.*?)\)$/;
const HEX_RE = /^#(?<hex>[0-9a-f]{3,6})$/i;
function normalizeColor(value) {
    if (value.startsWith("#")) {
        return hexToRgb(value);
    }
    const rgb = value.match(RGB_RE)?.groups.rgb;
    if (rgb) {
        return rgb.replaceAll(" ", "");
    }
    return value;
}
const stringColorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((str)=>{
    if (HEX_RE.test(str) || RGB_RE.test(str)) {
        return true;
    }
    throw new Error("Color format should be in HEX or RGB format. E.g. #000, #112233 or rgb(255,255,255)");
});
const colorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    hue: darkLightSchema.default({
        dark: 204,
        light: 212
    }).overwrite(convertColor).meta({
        description: "The hue of the primary theme color.<br/>Range: `0 - 360`"
    }),
    saturation: darkLightSchema.default(100).overwrite(convertColor).meta({
        description: "The saturation of the primary theme color.<br/>Range: `0 - 100`"
    }),
    lightness: darkLightSchema.default({
        dark: 55,
        light: 45
    }).overwrite(convertColor).meta({
        description: "The lightness of the primary theme color.<br/>Range: `0 - 100`"
    })
});
const bgColorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    dark: stringColorSchema.default("rgb(17,17,17)").transform(normalizeColor).meta({
        description: 'Background color for dark theme.<br/>Format: `"rgb(RRR,GGG,BBB)" | "#RRGGBB"`'
    }),
    light: stringColorSchema.default("rgb(250,250,250)").transform(normalizeColor).meta({
        description: 'Background color for light theme.<br/>Format: `"rgb(RRR,GGG,BBB)" | "#RRGGBB"`'
    })
});
const HeadPropsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].strictObject({
    color: colorSchema.default(colorSchema.parse({})),
    faviconGlyph: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().meta({
        description: "The glyph to use as the favicon."
    }),
    backgroundColor: bgColorSchema.default(bgColorSchema.parse({})),
    children: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reactNode"].optional().meta({
        description: "Content of `<head>`."
    })
});
const Head = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(21);
    let children;
    let props;
    if ($[0] !== t0) {
        ({ children, ...props } = t0);
        $[0] = t0;
        $[1] = children;
        $[2] = props;
    } else {
        children = $[1];
        props = $[2];
    }
    let data;
    if ($[3] !== props) {
        const { data: t12, error } = HeadPropsSchema.safeParse(props);
        data = t12;
        if (error) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$0$2e$0$2d$beta$2e$20250424T163858_qbt5s4uokmjtg6okaz7hwjyihq$2f$node_modules$2f$zod$2f$dist$2f$esm$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].prettifyError(error);
        }
        $[3] = props;
        $[4] = data;
    } else {
        data = $[4];
    }
    const { color, backgroundColor, faviconGlyph } = data;
    const t1 = `
:root {
  --nextra-primary-hue: ${color.hue.light}deg;
  --nextra-primary-saturation: ${color.saturation.light}%;
  --nextra-primary-lightness: ${color.lightness.light}%;
  --nextra-bg: ${backgroundColor.light};
  --nextra-content-width: 90rem;
}
.dark {
  --nextra-primary-hue: ${color.hue.dark}deg;
  --nextra-primary-saturation: ${color.saturation.dark}%;
  --nextra-primary-lightness: ${color.lightness.dark}%;
  --nextra-bg: ${backgroundColor.dark};
}
::selection {
  background: hsla(var(--nextra-primary-hue),var(--nextra-primary-saturation),var(--nextra-primary-lightness),.3);
}
html {
  background: rgb(var(--nextra-bg));
}
`;
    let t2;
    if ($[5] !== t1) {
        t2 = t1.trim();
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const style = t2;
    let t3;
    if ($[7] !== style) {
        t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("style", {
            children: style
        });
        $[7] = style;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const t4 = `rgb(${backgroundColor.light})`;
    let t5;
    if ($[9] !== t4) {
        t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
            name: "theme-color",
            media: "(prefers-color-scheme: light)",
            content: t4
        });
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const t6 = `rgb(${backgroundColor.dark})`;
    let t7;
    if ($[11] !== t6) {
        t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("meta", {
            name: "theme-color",
            media: "(prefers-color-scheme: dark)",
            content: t6
        });
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== faviconGlyph) {
        t8 = faviconGlyph && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("link", {
            rel: "icon",
            href: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>${faviconGlyph}</text><style>svg{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}@media(prefers-color-scheme:dark){svg{fill:#fff}}</style></svg>`
        });
        $[13] = faviconGlyph;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== children || $[16] !== t3 || $[17] !== t5 || $[18] !== t7 || $[19] !== t8) {
        t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("head", {
            children: [
                children,
                t3,
                t5,
                t7,
                t8
            ]
        });
        $[15] = children;
        $[16] = t3;
        $[17] = t5;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    return t9;
};
;
}}),
"[project]/packages/nextra/dist/client/components/search.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Search": (()=>Search),
    "importPagefind": (()=>importPagefind)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Search() from the server but Search is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra/dist/client/components/search.js <module evaluation>", "Search");
const importPagefind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call importPagefind() from the server but importPagefind is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra/dist/client/components/search.js <module evaluation>", "importPagefind");
}}),
"[project]/packages/nextra/dist/client/components/search.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Search": (()=>Search),
    "importPagefind": (()=>importPagefind)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Search() from the server but Search is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra/dist/client/components/search.js", "Search");
const importPagefind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call importPagefind() from the server but importPagefind is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/packages/nextra/dist/client/components/search.js", "importPagefind");
}}),
"[project]/packages/nextra/dist/client/components/search.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$search$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/search.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$search$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/search.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$search$2e$js__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/packages/nextra/dist/server/page-map/get.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPageMap": (()=>getPageMap),
    "getRouteToFilepath": (()=>getRouteToFilepath)
});
function importPageMap(lang = "") {
    return ({
        "": ()=>__turbopack_context__.r("[project]/packages/nextra/dist/server/page-map/placeholder.js?lang= [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i)
    })[lang]();
}
const defaultLocale = process.env.NEXTRA_DEFAULT_LOCALE;
async function getPageMap(route = "/") {
    const segments = route.split("/");
    const lang = segments.splice(0, defaultLocale ? 2 : 1).at(-1);
    let { pageMap } = await importPageMap(lang);
    let segment;
    while(segment = segments.shift()){
        const folder = pageMap.find((item)=>"name" in item && item.name === segment);
        if (!folder) {
            throw new Error(`Can't find pageMap for "${segment}" in route "${route}"`);
        }
        pageMap = folder.children;
    }
    return pageMap;
}
async function getRouteToFilepath(lang) {
    const { RouteToFilepath } = await importPageMap(lang);
    return RouteToFilepath;
}
;
}}),
"[project]/examples/blog/app/layout.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/layout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/navbar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$theme$2d$switch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/theme-switch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/banner/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$head$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/head.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/components/search.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$page$2d$map$2f$get$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/server/page-map/get.js [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: 'Blog Example'
};
async function RootLayout({ children }) {
    const banner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$banner$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Banner"], {
        storageKey: "4.0-release",
        children: [
            "🎉 Nextra 4.0 is released.",
            ' ',
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                style: {
                    textDecoration: 'underline',
                    textUnderlinePosition: 'from-font'
                },
                children: "Read more →"
            }, void 0, false, {
                fileName: "[project]/examples/blog/app/layout.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/examples/blog/app/layout.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$head$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Head"], {
                backgroundColor: {
                    dark: '#0f172a',
                    light: '#fefce8'
                }
            }, void 0, false, {
                fileName: "[project]/examples/blog/app/layout.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Layout"], {
                    banner: banner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Navbar"], {
                            pageMap: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$page$2d$map$2f$get$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPageMap"])(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$components$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Search"], {}, void 0, false, {
                                    fileName: "[project]/examples/blog/app/layout.jsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$theme$2d$switch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeSwitch"], {}, void 0, false, {
                                    fileName: "[project]/examples/blog/app/layout.jsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/examples/blog/app/layout.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$layout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("abbr", {
                                    title: "This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.",
                                    style: {
                                        cursor: 'help'
                                    },
                                    children: "CC BY-NC 4.0"
                                }, void 0, false, {
                                    fileName: "[project]/examples/blog/app/layout.jsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                new Date().getFullYear(),
                                " © Dimitri POSTOLOV.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/feed.xml",
                                    style: {
                                        float: 'right'
                                    },
                                    children: "RSS"
                                }, void 0, false, {
                                    fileName: "[project]/examples/blog/app/layout.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/examples/blog/app/layout.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/examples/blog/app/layout.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/examples/blog/app/layout.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/examples/blog/app/layout.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_1a9ea99f._.js.map