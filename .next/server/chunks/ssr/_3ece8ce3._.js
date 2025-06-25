module.exports = {

"[project]/examples/blog/.next-internal/server/app/posts/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[project]/docs/app/icon.svg.mjs { IMAGE => \"[project]/docs/app/icon.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/docs/app/icon.svg.mjs { IMAGE => \"[project]/docs/app/icon.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/examples/blog/app/layout.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/examples/blog/app/layout.jsx [app-rsc] (ecmascript)"));
}}),
"[project]/packages/nextra-theme-blog/dist/components/post-card.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PostCard": (()=>PostCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-compiler-runtime@0.0.0-experimental-e993439-20250328_react@19.1.0/node_modules/react-compiler-runtime/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$view$2d$transitions$40$0$2e$3$2e$4_next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_react$2d$dom$40$19$2e$1$2e$_ligsyow7lmy4sxvn6ww5pgs3ta$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-view-transitions@0.3.4_next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_react-dom@19.1._ligsyow7lmy4sxvn6ww5pgs3ta/node_modules/next-view-transitions/dist/index.js [app-rsc] (ecmascript)");
;
;
;
const PostCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$compiler$2d$runtime$40$0$2e$0$2e$0$2d$experimental$2d$e993439$2d$20250328_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(16);
    const { post, readMore: t1 } = t0;
    const readMore = t1 === void 0 ? "Read More \u2192" : t1;
    const { description, date, title } = post.frontMatter;
    let t2;
    if ($[0] !== date) {
        t2 = date && new Date(date);
        $[0] = date;
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const dateObj = t2;
    let t3;
    if ($[2] !== post.route || $[3] !== title) {
        t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h2", {
            className: "x:mt-6 x:mb-2 x:text-xl x:font-semibold",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$view$2d$transitions$40$0$2e$3$2e$4_next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_react$2d$dom$40$19$2e$1$2e$_ligsyow7lmy4sxvn6ww5pgs3ta$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                href: post.route,
                className: "x:no-underline!",
                children: title
            })
        });
        $[2] = post.route;
        $[3] = title;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== description || $[6] !== post.route || $[7] !== readMore) {
        t4 = description && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("p", {
            className: "x:mb-2 x:dark:text-gray-400 x:text-gray-600",
            children: [
                description,
                readMore && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$view$2d$transitions$40$0$2e$3$2e$4_next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_react$2d$dom$40$19$2e$1$2e$_ligsyow7lmy4sxvn6ww5pgs3ta$2f$node_modules$2f$next$2d$view$2d$transitions$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                    href: post.route,
                    className: "x:ml-2",
                    children: readMore
                })
            ]
        });
        $[5] = description;
        $[6] = post.route;
        $[7] = readMore;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== dateObj) {
        t5 = dateObj && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("time", {
            className: "x:text-sm x:dark:text-gray-400 x:text-gray-600",
            dateTime: dateObj.toISOString(),
            children: dateObj.toDateString()
        });
        $[9] = dateObj;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== post.route || $[12] !== t3 || $[13] !== t4 || $[14] !== t5) {
        t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            children: [
                t3,
                t4,
                t5
            ]
        }, post.route);
        $[11] = post.route;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
};
;
}}),
"[project]/examples/blog/app/posts/get-posts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPosts": (()=>getPosts),
    "getTags": (()=>getTags)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$normalize$2d$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/client/normalize-pages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$page$2d$map$2f$get$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra/dist/server/page-map/get.js [app-rsc] (ecmascript)");
;
;
async function getPosts() {
    const { directories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$client$2f$normalize$2d$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizePages"])({
        list: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2f$dist$2f$server$2f$page$2d$map$2f$get$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPageMap"])('/posts'),
        route: '/posts'
    });
    return directories.filter((post)=>post.name !== 'index').sort((a, b)=>new Date(b.frontMatter.date) - new Date(a.frontMatter.date));
}
async function getTags() {
    const posts = await getPosts();
    const tags = posts.flatMap((post)=>post.frontMatter.tags);
    return tags;
}
}}),
"[project]/examples/blog/app/posts/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PostsPage),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$post$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/nextra-theme-blog/dist/components/post-card.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$blog$2f$app$2f$posts$2f$get$2d$posts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/examples/blog/app/posts/get-posts.js [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: 'Posts'
};
async function PostsPage() {
    const tags = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$blog$2f$app$2f$posts$2f$get$2d$posts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTags"])();
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$examples$2f$blog$2f$app$2f$posts$2f$get$2d$posts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPosts"])();
    const allTags = Object.create(null);
    for (const tag of tags){
        allTags[tag] ??= 0;
        allTags[tag] += 1;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-pagefind-ignore": "all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: metadata.title
            }, void 0, false, {
                fileName: "[project]/examples/blog/app/posts/page.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "not-prose",
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '.5rem'
                },
                children: Object.entries(allTags).map(([tag, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/tags/${tag}`,
                        className: "nextra-tag",
                        children: [
                            tag,
                            " (",
                            count,
                            ")"
                        ]
                    }, tag, true, {
                        fileName: "[project]/examples/blog/app/posts/page.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/examples/blog/app/posts/page.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$nextra$2d$theme$2d$blog$2f$dist$2f$components$2f$post$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PostCard"], {
                    post: post
                }, post.route, false, {
                    fileName: "[project]/examples/blog/app/posts/page.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/examples/blog/app/posts/page.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),
"[project]/examples/blog/app/posts/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/examples/blog/app/posts/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_3ece8ce3._.js.map