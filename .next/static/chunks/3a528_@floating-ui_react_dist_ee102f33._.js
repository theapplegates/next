(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@floating-ui+react@0.26.25_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TYPEABLE_SELECTOR": (()=>TYPEABLE_SELECTOR),
    "activeElement": (()=>activeElement),
    "contains": (()=>contains),
    "getDocument": (()=>getDocument),
    "getPlatform": (()=>getPlatform),
    "getTarget": (()=>getTarget),
    "getUserAgent": (()=>getUserAgent),
    "isAndroid": (()=>isAndroid),
    "isEventTargetWithin": (()=>isEventTargetWithin),
    "isJSDOM": (()=>isJSDOM),
    "isMac": (()=>isMac),
    "isMouseLikePointerType": (()=>isMouseLikePointerType),
    "isReactEvent": (()=>isReactEvent),
    "isRootElement": (()=>isRootElement),
    "isSafari": (()=>isSafari),
    "isTypeableCombobox": (()=>isTypeableCombobox),
    "isTypeableElement": (()=>isTypeableElement),
    "isVirtualClick": (()=>isVirtualClick),
    "isVirtualPointerEvent": (()=>isVirtualPointerEvent),
    "stopEvent": (()=>stopEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
;
function activeElement(doc) {
    let activeElement = doc.activeElement;
    while(((_activeElement = activeElement) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null){
        var _activeElement;
        activeElement = activeElement.shadowRoot.activeElement;
    }
    return activeElement;
}
function contains(parent, child) {
    if (!parent || !child) {
        return false;
    }
    const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
    // First, attempt with faster native method
    if (parent.contains(child)) {
        return true;
    }
    // then fallback to custom implementation with Shadow DOM support
    if (rootNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShadowRoot"])(rootNode)) {
        let next = child;
        while(next){
            if (parent === next) {
                return true;
            }
            // @ts-ignore
            next = next.parentNode || next.host;
        }
    }
    // Give up, the result is false
    return false;
}
// Avoid Chrome DevTools blue warning.
function getPlatform() {
    const uaData = navigator.userAgentData;
    if (uaData != null && uaData.platform) {
        return uaData.platform;
    }
    return navigator.platform;
}
function getUserAgent() {
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
        return uaData.brands.map((_ref)=>{
            let { brand, version } = _ref;
            return brand + "/" + version;
        }).join(' ');
    }
    return navigator.userAgent;
}
// License: https://github.com/adobe/react-spectrum/blob/b35d5c02fe900badccd0cf1a8f23bb593419f238/packages/@react-aria/utils/src/isVirtualEvent.ts
function isVirtualClick(event) {
    // FIXME: Firefox is now emitting a deprecation warning for `mozInputSource`.
    // Try to find a workaround for this. `react-aria` source still has the check.
    if (event.mozInputSource === 0 && event.isTrusted) {
        return true;
    }
    if (isAndroid() && event.pointerType) {
        return event.type === 'click' && event.buttons === 1;
    }
    return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
    if (isJSDOM()) return false;
    return !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse' || // iOS VoiceOver returns 0.333• for width/height.
    event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'touch';
}
function isSafari() {
    // Chrome DevTools does not complain about navigator.vendor
    return /apple/i.test(navigator.vendor);
}
function isAndroid() {
    const re = /android/i;
    return re.test(getPlatform()) || re.test(getUserAgent());
}
function isMac() {
    return getPlatform().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
}
function isJSDOM() {
    return getUserAgent().includes('jsdom/');
}
function isMouseLikePointerType(pointerType, strict) {
    // On some Linux machines with Chromium, mouse inputs return a `pointerType`
    // of "pen": https://github.com/floating-ui/floating-ui/issues/2015
    const values = [
        'mouse',
        'pen'
    ];
    if (!strict) {
        values.push('', undefined);
    }
    return values.includes(pointerType);
}
function isReactEvent(event) {
    return 'nativeEvent' in event;
}
function isRootElement(element) {
    return element.matches('html,body');
}
function getDocument(node) {
    return (node == null ? void 0 : node.ownerDocument) || document;
}
function isEventTargetWithin(event, node) {
    if (node == null) {
        return false;
    }
    if ('composedPath' in event) {
        return event.composedPath().includes(node);
    }
    // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
    const e = event;
    return e.target != null && node.contains(e.target);
}
function getTarget(event) {
    if ('composedPath' in event) {
        return event.composedPath()[0];
    }
    // TS thinks `event` is of type never as it assumes all browsers support
    // `composedPath()`, but browsers without shadow DOM don't.
    return event.target;
}
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}
function isTypeableCombobox(element) {
    if (!element) return false;
    return element.getAttribute('role') === 'combobox' && isTypeableElement(element);
}
;
}}),
"[project]/node_modules/.pnpm/@floating-ui+react@0.26.25_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Composite": (()=>Composite),
    "CompositeItem": (()=>CompositeItem),
    "FloatingArrow": (()=>FloatingArrow),
    "FloatingDelayGroup": (()=>FloatingDelayGroup),
    "FloatingFocusManager": (()=>FloatingFocusManager),
    "FloatingList": (()=>FloatingList),
    "FloatingNode": (()=>FloatingNode),
    "FloatingOverlay": (()=>FloatingOverlay),
    "FloatingPortal": (()=>FloatingPortal),
    "FloatingTree": (()=>FloatingTree),
    "inner": (()=>inner),
    "safePolygon": (()=>safePolygon),
    "useClick": (()=>useClick),
    "useClientPoint": (()=>useClientPoint),
    "useDelayGroup": (()=>useDelayGroup),
    "useDelayGroupContext": (()=>useDelayGroupContext),
    "useDismiss": (()=>useDismiss),
    "useFloating": (()=>useFloating),
    "useFloatingNodeId": (()=>useFloatingNodeId),
    "useFloatingParentNodeId": (()=>useFloatingParentNodeId),
    "useFloatingPortalNode": (()=>useFloatingPortalNode),
    "useFloatingRootContext": (()=>useFloatingRootContext),
    "useFloatingTree": (()=>useFloatingTree),
    "useFocus": (()=>useFocus),
    "useHover": (()=>useHover),
    "useId": (()=>useId),
    "useInnerOffset": (()=>useInnerOffset),
    "useInteractions": (()=>useInteractions),
    "useListItem": (()=>useListItem),
    "useListNavigation": (()=>useListNavigation),
    "useMergeRefs": (()=>useMergeRefs),
    "useRole": (()=>useRole),
    "useTransitionStatus": (()=>useTransitionStatus),
    "useTransitionStyles": (()=>useTransitionStyles),
    "useTypeahead": (()=>useTypeahead)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@floating-ui+react@0.26.25_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@floating-ui+utils@0.2.8/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$2$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tabbable@6.2.0/node_modules/tabbable/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_patch_hash=7jofu3qtudpcn7yuwfpdpiosuy_@babel+core@7.26.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@floating-ui+react-dom@2.1.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$6$2e$11$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@floating-ui+dom@1.6.11/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
/**
 * Merges an array of refs into a single memoized callback ref or `null`.
 * @see https://floating-ui.com/docs/react-utils#usemergerefs
 */ function useMergeRefs(refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useMergeRefs.useMemo": ()=>{
            if (refs.every({
                "useMergeRefs.useMemo": (ref)=>ref == null
            }["useMergeRefs.useMemo"])) {
                return null;
            }
            return ({
                "useMergeRefs.useMemo": (value)=>{
                    refs.forEach({
                        "useMergeRefs.useMemo": (ref)=>{
                            if (typeof ref === 'function') {
                                ref(value);
                            } else if (ref != null) {
                                ref.current = value;
                            }
                        }
                    }["useMergeRefs.useMemo"]);
                }
            })["useMergeRefs.useMemo"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useMergeRefs.useMemo"], refs);
}
// https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
const SafeReact = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
};
const useInsertionEffect = SafeReact.useInsertionEffect;
const useSafeInsertionEffect = useInsertionEffect || ((fn)=>fn());
function useEffectEvent(callback) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({
        "useEffectEvent.useRef[ref]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                throw new Error('Cannot call an event handler while rendering.');
            }
        }
    }["useEffectEvent.useRef[ref]"]);
    useSafeInsertionEffect({
        "useEffectEvent.useSafeInsertionEffect": ()=>{
            ref.current = callback;
        }
    }["useEffectEvent.useSafeInsertionEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useEffectEvent.useCallback": function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return ref.current == null ? void 0 : ref.current(...args);
        }
    }["useEffectEvent.useCallback"], []);
}
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
function isDifferentRow(index, cols, prevRow) {
    return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index) {
    return index < 0 || index >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
    return findNonDisabledIndex(listRef, {
        disabledIndices
    });
}
function getMaxIndex(listRef, disabledIndices) {
    return findNonDisabledIndex(listRef, {
        decrement: true,
        startingIndex: listRef.current.length,
        disabledIndices
    });
}
function findNonDisabledIndex(listRef, _temp) {
    let { startingIndex = -1, decrement = false, disabledIndices, amount = 1 } = _temp === void 0 ? {} : _temp;
    const list = listRef.current;
    let index = startingIndex;
    do {
        index += decrement ? -amount : amount;
    }while (index >= 0 && index <= list.length - 1 && isDisabled(list, index, disabledIndices))
    return index;
}
function getGridNavigatedIndex(elementsRef, _ref) {
    let { event, orientation, loop, cols, disabledIndices, minIndex, maxIndex, prevIndex, stopEvent: stop = false } = _ref;
    let nextIndex = prevIndex;
    if (event.key === ARROW_UP) {
        stop && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
        if (prevIndex === -1) {
            nextIndex = maxIndex;
        } else {
            nextIndex = findNonDisabledIndex(elementsRef, {
                startingIndex: nextIndex,
                amount: cols,
                decrement: true,
                disabledIndices
            });
            if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
                const col = prevIndex % cols;
                const maxCol = maxIndex % cols;
                const offset = maxIndex - (maxCol - col);
                if (maxCol === col) {
                    nextIndex = maxIndex;
                } else {
                    nextIndex = maxCol > col ? offset : offset - cols;
                }
            }
        }
        if (isIndexOutOfBounds(elementsRef, nextIndex)) {
            nextIndex = prevIndex;
        }
    }
    if (event.key === ARROW_DOWN) {
        stop && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
        if (prevIndex === -1) {
            nextIndex = minIndex;
        } else {
            nextIndex = findNonDisabledIndex(elementsRef, {
                startingIndex: prevIndex,
                amount: cols,
                disabledIndices
            });
            if (loop && prevIndex + cols > maxIndex) {
                nextIndex = findNonDisabledIndex(elementsRef, {
                    startingIndex: prevIndex % cols - cols,
                    amount: cols,
                    disabledIndices
                });
            }
        }
        if (isIndexOutOfBounds(elementsRef, nextIndex)) {
            nextIndex = prevIndex;
        }
    }
    // Remains on the same row/column.
    if (orientation === 'both') {
        const prevRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(prevIndex / cols);
        if (event.key === ARROW_RIGHT) {
            stop && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
            if (prevIndex % cols !== cols - 1) {
                nextIndex = findNonDisabledIndex(elementsRef, {
                    startingIndex: prevIndex,
                    disabledIndices
                });
                if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
                    nextIndex = findNonDisabledIndex(elementsRef, {
                        startingIndex: prevIndex - prevIndex % cols - 1,
                        disabledIndices
                    });
                }
            } else if (loop) {
                nextIndex = findNonDisabledIndex(elementsRef, {
                    startingIndex: prevIndex - prevIndex % cols - 1,
                    disabledIndices
                });
            }
            if (isDifferentRow(nextIndex, cols, prevRow)) {
                nextIndex = prevIndex;
            }
        }
        if (event.key === ARROW_LEFT) {
            stop && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
            if (prevIndex % cols !== 0) {
                nextIndex = findNonDisabledIndex(elementsRef, {
                    startingIndex: prevIndex,
                    decrement: true,
                    disabledIndices
                });
                if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
                    nextIndex = findNonDisabledIndex(elementsRef, {
                        startingIndex: prevIndex + (cols - prevIndex % cols),
                        decrement: true,
                        disabledIndices
                    });
                }
            } else if (loop) {
                nextIndex = findNonDisabledIndex(elementsRef, {
                    startingIndex: prevIndex + (cols - prevIndex % cols),
                    decrement: true,
                    disabledIndices
                });
            }
            if (isDifferentRow(nextIndex, cols, prevRow)) {
                nextIndex = prevIndex;
            }
        }
        const lastRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(maxIndex / cols) === prevRow;
        if (isIndexOutOfBounds(elementsRef, nextIndex)) {
            if (loop && lastRow) {
                nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
                    startingIndex: prevIndex - prevIndex % cols - 1,
                    disabledIndices
                });
            } else {
                nextIndex = prevIndex;
            }
        }
    }
    return nextIndex;
}
/** For each cell index, gets the item index that occupies that cell */ function buildCellMap(sizes, cols, dense) {
    const cellMap = [];
    let startIndex = 0;
    sizes.forEach((_ref2, index)=>{
        let { width, height } = _ref2;
        if (width > cols) {
            if ("TURBOPACK compile-time truthy", 1) {
                throw new Error("[Floating UI]: Invalid grid - item width at index " + index + " is greater than grid columns");
            }
        }
        let itemPlaced = false;
        if (dense) {
            startIndex = 0;
        }
        while(!itemPlaced){
            const targetCells = [];
            for(let i = 0; i < width; i++){
                for(let j = 0; j < height; j++){
                    targetCells.push(startIndex + i + j * cols);
                }
            }
            if (startIndex % cols + width <= cols && targetCells.every((cell)=>cellMap[cell] == null)) {
                targetCells.forEach((cell)=>{
                    cellMap[cell] = index;
                });
                itemPlaced = true;
            } else {
                startIndex++;
            }
        }
    });
    // convert into a non-sparse array
    return [
        ...cellMap
    ];
}
/** Gets cell index of an item's corner or -1 when index is -1. */ function getCellIndexOfCorner(index, sizes, cellMap, cols, corner) {
    if (index === -1) return -1;
    const firstCellIndex = cellMap.indexOf(index);
    const sizeItem = sizes[index];
    switch(corner){
        case 'tl':
            return firstCellIndex;
        case 'tr':
            if (!sizeItem) {
                return firstCellIndex;
            }
            return firstCellIndex + sizeItem.width - 1;
        case 'bl':
            if (!sizeItem) {
                return firstCellIndex;
            }
            return firstCellIndex + (sizeItem.height - 1) * cols;
        case 'br':
            return cellMap.lastIndexOf(index);
    }
}
/** Gets all cell indices that correspond to the specified indices */ function getCellIndices(indices, cellMap) {
    return cellMap.flatMap((index, cellIndex)=>indices.includes(index) ? [
            cellIndex
        ] : []);
}
function isDisabled(list, index, disabledIndices) {
    if (disabledIndices) {
        return disabledIndices.includes(index);
    }
    const element = list[index];
    return element == null || element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
}
let rafId = 0;
function enqueueFocus(el, options) {
    if (options === void 0) {
        options = {};
    }
    const { preventScroll = false, cancelPrevious = true, sync = false } = options;
    cancelPrevious && cancelAnimationFrame(rafId);
    const exec = ()=>el == null ? void 0 : el.focus({
            preventScroll
        });
    if (sync) {
        exec();
    } else {
        rafId = requestAnimationFrame(exec);
    }
}
var index = typeof document !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function sortByDocumentPosition(a, b) {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
        return 1;
    }
    return 0;
}
function areMapsEqual(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }
    for (const [key, value] of map1.entries()){
        if (value !== map2.get(key)) {
            return false;
        }
    }
    return true;
}
const FloatingListContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    register: ()=>{},
    unregister: ()=>{},
    map: /*#__PURE__*/ new Map(),
    elementsRef: {
        current: []
    }
});
/**
 * Provides context for a list of items within the floating element.
 * @see https://floating-ui.com/docs/FloatingList
 */ function FloatingList(props) {
    const { children, elementsRef, labelsRef } = props;
    const [map, setMap] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "FloatingList.useState": ()=>new Map()
    }["FloatingList.useState"]);
    const register = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "FloatingList.useCallback[register]": (node)=>{
            setMap({
                "FloatingList.useCallback[register]": (prevMap)=>new Map(prevMap).set(node, null)
            }["FloatingList.useCallback[register]"]);
        }
    }["FloatingList.useCallback[register]"], []);
    const unregister = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "FloatingList.useCallback[unregister]": (node)=>{
            setMap({
                "FloatingList.useCallback[unregister]": (prevMap)=>{
                    const map = new Map(prevMap);
                    map.delete(node);
                    return map;
                }
            }["FloatingList.useCallback[unregister]"]);
        }
    }["FloatingList.useCallback[unregister]"], []);
    index(()=>{
        const newMap = new Map(map);
        const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
        nodes.forEach((node, index)=>{
            newMap.set(node, index);
        });
        if (!areMapsEqual(map, newMap)) {
            setMap(newMap);
        }
    }, [
        map
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FloatingListContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "FloatingList.useMemo": ()=>({
                    register,
                    unregister,
                    map,
                    elementsRef,
                    labelsRef
                })
        }["FloatingList.useMemo"], [
            register,
            unregister,
            map,
            elementsRef,
            labelsRef
        ])
    }, children);
}
/**
 * Used to register a list item and its index (DOM position) in the
 * `FloatingList`.
 * @see https://floating-ui.com/docs/FloatingList#uselistitem
 */ function useListItem(props) {
    if (props === void 0) {
        props = {};
    }
    const { label } = props;
    const { register, unregister, map, elementsRef, labelsRef } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(FloatingListContext);
    const [index$1, setIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const componentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useListItem.useCallback[ref]": (node)=>{
            componentRef.current = node;
            if (index$1 !== null) {
                elementsRef.current[index$1] = node;
                if (labelsRef) {
                    var _node$textContent;
                    const isLabelDefined = label !== undefined;
                    labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
                }
            }
        }
    }["useListItem.useCallback[ref]"], [
        index$1,
        elementsRef,
        labelsRef,
        label
    ]);
    index(()=>{
        const node = componentRef.current;
        if (node) {
            register(node);
            return ()=>{
                unregister(node);
            };
        }
    }, [
        register,
        unregister
    ]);
    index(()=>{
        const index = componentRef.current ? map.get(componentRef.current) : null;
        if (index != null) {
            setIndex(index);
        }
    }, [
        map
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useListItem.useMemo": ()=>({
                ref,
                index: index$1 == null ? -1 : index$1
            })
    }["useListItem.useMemo"], [
        index$1,
        ref
    ]);
}
function renderJsx(render, computedProps) {
    if (typeof render === 'function') {
        return render(computedProps);
    }
    if (render) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.cloneElement(render, computedProps);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", computedProps);
}
const CompositeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    activeIndex: 0,
    onNavigate: ()=>{}
});
const horizontalKeys = [
    ARROW_LEFT,
    ARROW_RIGHT
];
const verticalKeys = [
    ARROW_UP,
    ARROW_DOWN
];
const allKeys = [
    ...horizontalKeys,
    ...verticalKeys
];
/**
 * Creates a single tab stop whose items are navigated by arrow keys, which
 * provides list navigation outside of floating element contexts.
 *
 * This is useful to enable navigation of a list of items that aren’t part of a
 * floating element. A menubar is an example of a composite, with each reference
 * element being an item.
 * @see https://floating-ui.com/docs/Composite
 */ const Composite = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function Composite(props, forwardedRef) {
    const { render, orientation = 'both', loop = true, cols = 1, disabledIndices, activeIndex: externalActiveIndex, onNavigate: externalSetActiveIndex, itemSizes, dense = false, ...domProps } = props;
    const [internalActiveIndex, internalSetActiveIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(0);
    const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
    const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
    const elementsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]);
    const renderElementProps = render && typeof render !== 'function' ? render.props : {};
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Composite.Composite.useMemo[contextValue]": ()=>({
                activeIndex,
                onNavigate
            })
    }["Composite.Composite.useMemo[contextValue]"], [
        activeIndex,
        onNavigate
    ]);
    const isGrid = cols > 1;
    function handleKeyDown(event) {
        if (!allKeys.includes(event.key)) return;
        let nextIndex = activeIndex;
        const minIndex = getMinIndex(elementsRef, disabledIndices);
        const maxIndex = getMaxIndex(elementsRef, disabledIndices);
        if (isGrid) {
            const sizes = itemSizes || Array.from({
                length: elementsRef.current.length
            }, ()=>({
                    width: 1,
                    height: 1
                }));
            // To calculate movements on the grid, we use hypothetical cell indices
            // as if every item was 1x1, then convert back to real indices.
            const cellMap = buildCellMap(sizes, cols, dense);
            const minGridIndex = cellMap.findIndex((index)=>index != null && !isDisabled(elementsRef.current, index, disabledIndices));
            // last enabled index
            const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex)=>index != null && !isDisabled(elementsRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
            const maybeNextIndex = cellMap[getGridNavigatedIndex({
                current: cellMap.map((itemIndex)=>itemIndex ? elementsRef.current[itemIndex] : null)
            }, {
                event,
                orientation,
                loop,
                cols,
                // treat undefined (empty grid spaces) as disabled indices so we
                // don't end up in them
                disabledIndices: getCellIndices([
                    ...disabledIndices || elementsRef.current.map((_, index)=>isDisabled(elementsRef.current, index) ? index : undefined),
                    undefined
                ], cellMap),
                minIndex: minGridIndex,
                maxIndex: maxGridIndex,
                prevIndex: getCellIndexOfCorner(activeIndex > maxIndex ? minIndex : activeIndex, sizes, cellMap, cols, // use a corner matching the edge closest to the direction we're
                // moving in so we don't end up in the same item. Prefer
                // top/left over bottom/right.
                event.key === ARROW_DOWN ? 'bl' : event.key === ARROW_RIGHT ? 'tr' : 'tl')
            })];
            if (maybeNextIndex != null) {
                nextIndex = maybeNextIndex;
            }
        }
        const toEndKeys = {
            horizontal: [
                ARROW_RIGHT
            ],
            vertical: [
                ARROW_DOWN
            ],
            both: [
                ARROW_RIGHT,
                ARROW_DOWN
            ]
        }[orientation];
        const toStartKeys = {
            horizontal: [
                ARROW_LEFT
            ],
            vertical: [
                ARROW_UP
            ],
            both: [
                ARROW_LEFT,
                ARROW_UP
            ]
        }[orientation];
        const preventedKeys = isGrid ? allKeys : ({
            horizontal: horizontalKeys,
            vertical: verticalKeys,
            both: allKeys
        })[orientation];
        if (nextIndex === activeIndex && [
            ...toEndKeys,
            ...toStartKeys
        ].includes(event.key)) {
            if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
                nextIndex = minIndex;
            } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
                nextIndex = maxIndex;
            } else {
                nextIndex = findNonDisabledIndex(elementsRef, {
                    startingIndex: nextIndex,
                    decrement: toStartKeys.includes(event.key),
                    disabledIndices
                });
            }
        }
        if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
            event.stopPropagation();
            if (preventedKeys.includes(event.key)) {
                event.preventDefault();
            }
            onNavigate(nextIndex);
            // Wait for FocusManager `returnFocus` to execute.
            queueMicrotask(()=>{
                enqueueFocus(elementsRef.current[nextIndex]);
            });
        }
    }
    const computedProps = {
        ...domProps,
        ...renderElementProps,
        ref: forwardedRef,
        'aria-orientation': orientation === 'both' ? undefined : orientation,
        onKeyDown (e) {
            domProps.onKeyDown == null || domProps.onKeyDown(e);
            renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e);
            handleKeyDown(e);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(CompositeContext.Provider, {
        value: contextValue
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FloatingList, {
        elementsRef: elementsRef
    }, renderJsx(render, computedProps)));
});
/**
 * @see https://floating-ui.com/docs/Composite
 */ const CompositeItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function CompositeItem(props, forwardedRef) {
    const { render, ...domProps } = props;
    const renderElementProps = render && typeof render !== 'function' ? render.props : {};
    const { activeIndex, onNavigate } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(CompositeContext);
    const { ref, index } = useListItem();
    const mergedRef = useMergeRefs([
        ref,
        forwardedRef,
        renderElementProps.ref
    ]);
    const isActive = activeIndex === index;
    const computedProps = {
        ...domProps,
        ...renderElementProps,
        ref: mergedRef,
        tabIndex: isActive ? 0 : -1,
        'data-active': isActive ? '' : undefined,
        onFocus (e) {
            domProps.onFocus == null || domProps.onFocus(e);
            renderElementProps.onFocus == null || renderElementProps.onFocus(e);
            onNavigate(index);
        }
    };
    return renderJsx(render, computedProps);
});
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
let serverHandoffComplete = false;
let count = 0;
const genId = ()=>// on <React 18
    "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
function useFloatingId() {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "useFloatingId.useState": ()=>serverHandoffComplete ? genId() : undefined
    }["useFloatingId.useState"]);
    index(()=>{
        if (id == null) {
            setId(genId());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useFloatingId.useEffect": ()=>{
            serverHandoffComplete = true;
        }
    }["useFloatingId.useEffect"], []);
    return id;
}
const useReactId = SafeReact.useId;
/**
 * Uses React 18's built-in `useId()` when available, or falls back to a
 * slightly less performant (requiring a double render) implementation for
 * earlier React versions.
 * @see https://floating-ui.com/docs/react-utils#useid
 */ const useId = useReactId || useFloatingId;
let devMessageSet;
if ("TURBOPACK compile-time truthy", 1) {
    devMessageSet = /*#__PURE__*/ new Set();
}
function warn() {
    var _devMessageSet;
    for(var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++){
        messages[_key] = arguments[_key];
    }
    const message = "Floating UI: " + messages.join(' ');
    if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
        var _devMessageSet2;
        (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
        console.warn(message);
    }
}
function error() {
    var _devMessageSet3;
    for(var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
        messages[_key2] = arguments[_key2];
    }
    const message = "Floating UI: " + messages.join(' ');
    if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
        var _devMessageSet4;
        (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
        console.error(message);
    }
}
/**
 * Renders a pointing arrow triangle.
 * @see https://floating-ui.com/docs/FloatingArrow
 */ const FloatingArrow = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function FloatingArrow(props, ref) {
    const { context: { placement, elements: { floating }, middlewareData: { arrow, shift } }, width = 14, height = 7, tipRadius = 0, strokeWidth = 0, staticOffset, stroke, d, style: { transform, ...restStyle } = {}, ...rest } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        if (!ref) {
            warn('The `ref` prop is required for `FloatingArrow`.');
        }
    }
    const clipPathId = useId();
    const [isRTL, setIsRTL] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(false);
    // https://github.com/floating-ui/floating-ui/issues/2932
    index(()=>{
        if (!floating) return;
        const isRTL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(floating).direction === 'rtl';
        if (isRTL) {
            setIsRTL(true);
        }
    }, [
        floating
    ]);
    if (!floating) {
        return null;
    }
    const [side, alignment] = placement.split('-');
    const isVerticalSide = side === 'top' || side === 'bottom';
    let computedStaticOffset = staticOffset;
    if (isVerticalSide && shift != null && shift.x || !isVerticalSide && shift != null && shift.y) {
        computedStaticOffset = null;
    }
    // Strokes must be double the border width, this ensures the stroke's width
    // works as you'd expect.
    const computedStrokeWidth = strokeWidth * 2;
    const halfStrokeWidth = computedStrokeWidth / 2;
    const svgX = width / 2 * (tipRadius / -8 + 1);
    const svgY = height / 2 * tipRadius / 4;
    const isCustomShape = !!d;
    const yOffsetProp = computedStaticOffset && alignment === 'end' ? 'bottom' : 'top';
    let xOffsetProp = computedStaticOffset && alignment === 'end' ? 'right' : 'left';
    if (computedStaticOffset && isRTL) {
        xOffsetProp = alignment === 'end' ? 'left' : 'right';
    }
    const arrowX = (arrow == null ? void 0 : arrow.x) != null ? computedStaticOffset || arrow.x : '';
    const arrowY = (arrow == null ? void 0 : arrow.y) != null ? computedStaticOffset || arrow.y : '';
    const dValue = d || 'M0,0' + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + ' Z';
    const rotation = {
        top: isCustomShape ? 'rotate(180deg)' : '',
        left: isCustomShape ? 'rotate(90deg)' : 'rotate(-90deg)',
        bottom: isCustomShape ? '' : 'rotate(180deg)',
        right: isCustomShape ? 'rotate(-90deg)' : 'rotate(90deg)'
    }[side];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("svg", _extends({}, rest, {
        "aria-hidden": true,
        ref: ref,
        width: isCustomShape ? width : width + computedStrokeWidth,
        height: width,
        viewBox: "0 0 " + width + " " + (height > width ? height : width),
        style: {
            position: 'absolute',
            pointerEvents: 'none',
            [xOffsetProp]: arrowX,
            [yOffsetProp]: arrowY,
            [side]: isVerticalSide || isCustomShape ? '100%' : "calc(100% - " + computedStrokeWidth / 2 + "px)",
            transform: [
                rotation,
                transform
            ].filter((t)=>!!t).join(' '),
            ...restStyle
        }
    }), computedStrokeWidth > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        clipPath: "url(#" + clipPathId + ")",
        fill: "none",
        stroke: stroke,
        strokeWidth: computedStrokeWidth + (d ? 0 : 1),
        d: dValue
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("path", {
        stroke: computedStrokeWidth && !d ? rest.fill : 'none',
        d: dValue
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("clipPath", {
        id: clipPathId
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("rect", {
        x: -halfStrokeWidth,
        y: halfStrokeWidth * (isCustomShape ? -1 : 1),
        width: width + computedStrokeWidth,
        height: width
    })));
});
function createPubSub() {
    const map = new Map();
    return {
        emit (event, data) {
            var _map$get;
            (_map$get = map.get(event)) == null || _map$get.forEach((handler)=>handler(data));
        },
        on (event, listener) {
            map.set(event, [
                ...map.get(event) || [],
                listener
            ]);
        },
        off (event, listener) {
            var _map$get2;
            map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l)=>l !== listener)) || []);
        }
    };
}
const FloatingNodeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
const FloatingTreeContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */ const useFloatingParentNodeId = ()=>{
    var _React$useContext;
    return ((_React$useContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
/**
 * Returns the nearest floating tree context, if available.
 */ const useFloatingTree = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(FloatingTreeContext);
/**
 * Registers a node into the `FloatingTree`, returning its id.
 * @see https://floating-ui.com/docs/FloatingTree
 */ function useFloatingNodeId(customParentId) {
    const id = useId();
    const tree = useFloatingTree();
    const reactParentId = useFloatingParentNodeId();
    const parentId = customParentId || reactParentId;
    index(()=>{
        const node = {
            id,
            parentId
        };
        tree == null || tree.addNode(node);
        return ()=>{
            tree == null || tree.removeNode(node);
        };
    }, [
        tree,
        id,
        parentId
    ]);
    return id;
}
/**
 * Provides parent node context for nested floating elements.
 * @see https://floating-ui.com/docs/FloatingTree
 */ function FloatingNode(props) {
    const { children, id } = props;
    const parentId = useFloatingParentNodeId();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FloatingNodeContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "FloatingNode.useMemo": ()=>({
                    id,
                    parentId
                })
        }["FloatingNode.useMemo"], [
            id,
            parentId
        ])
    }, children);
}
/**
 * Provides context for nested floating elements when they are not children of
 * each other on the DOM.
 * This is not necessary in all cases, except when there must be explicit communication between parent and child floating elements. It is necessary for:
 * - The `bubbles` option in the `useDismiss()` Hook
 * - Nested virtual list navigation
 * - Nested floating elements that each open on hover
 * - Custom communication between parent and child floating elements
 * @see https://floating-ui.com/docs/FloatingTree
 */ function FloatingTree(props) {
    const { children } = props;
    const nodesRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef([]);
    const addNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "FloatingTree.useCallback[addNode]": (node)=>{
            nodesRef.current = [
                ...nodesRef.current,
                node
            ];
        }
    }["FloatingTree.useCallback[addNode]"], []);
    const removeNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "FloatingTree.useCallback[removeNode]": (node)=>{
            nodesRef.current = nodesRef.current.filter({
                "FloatingTree.useCallback[removeNode]": (n)=>n !== node
            }["FloatingTree.useCallback[removeNode]"]);
        }
    }["FloatingTree.useCallback[removeNode]"], []);
    const events = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "FloatingTree.useState": ()=>createPubSub()
    }["FloatingTree.useState"])[0];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FloatingTreeContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "FloatingTree.useMemo": ()=>({
                    nodesRef,
                    addNode,
                    removeNode,
                    events
                })
        }["FloatingTree.useMemo"], [
            addNode,
            removeNode,
            events
        ])
    }, children);
}
function createAttribute(name) {
    return "data-floating-ui-" + name;
}
function useLatestRef(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    index(()=>{
        ref.current = value;
    });
    return ref;
}
const safePolygonIdentifier = /*#__PURE__*/ createAttribute('safe-polygon');
function getDelay(value, prop, pointerType) {
    if (pointerType && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseLikePointerType"])(pointerType)) {
        return 0;
    }
    if (typeof value === 'number') {
        return value;
    }
    return value == null ? void 0 : value[prop];
}
/**
 * Opens the floating element while hovering over the reference element, like
 * CSS `:hover`.
 * @see https://floating-ui.com/docs/useHover
 */ function useHover(context, props) {
    if (props === void 0) {
        props = {};
    }
    const { open, onOpenChange, dataRef, events, elements } = context;
    const { enabled = true, delay = 0, handleClose = null, mouseOnly = false, restMs = 0, move = true } = props;
    const tree = useFloatingTree();
    const parentId = useFloatingParentNodeId();
    const handleCloseRef = useLatestRef(handleClose);
    const delayRef = useLatestRef(delay);
    const openRef = useLatestRef(open);
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    const timeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(-1);
    const handlerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    const restTimeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(-1);
    const blockMouseMoveRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(true);
    const performedPointerEventsMutationRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const unbindMouseMoveRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({
        "useHover.useRef[unbindMouseMoveRef]": ()=>{}
    }["useHover.useRef[unbindMouseMoveRef]"]);
    const restTimeoutPendingRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const isHoverOpen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useHover.useCallback[isHoverOpen]": ()=>{
            var _dataRef$current$open;
            const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
            return (type == null ? void 0 : type.includes('mouse')) && type !== 'mousedown';
        }
    }["useHover.useCallback[isHoverOpen]"], [
        dataRef
    ]);
    // When closing before opening, clear the delay timeouts to cancel it
    // from showing.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useHover.useEffect": ()=>{
            if (!enabled) return;
            function onOpenChange(_ref) {
                let { open } = _ref;
                if (!open) {
                    clearTimeout(timeoutRef.current);
                    clearTimeout(restTimeoutRef.current);
                    blockMouseMoveRef.current = true;
                    restTimeoutPendingRef.current = false;
                }
            }
            events.on('openchange', onOpenChange);
            return ({
                "useHover.useEffect": ()=>{
                    events.off('openchange', onOpenChange);
                }
            })["useHover.useEffect"];
        }
    }["useHover.useEffect"], [
        enabled,
        events
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useHover.useEffect": ()=>{
            if (!enabled) return;
            if (!handleCloseRef.current) return;
            if (!open) return;
            function onLeave(event) {
                if (isHoverOpen()) {
                    onOpenChange(false, event, 'hover');
                }
            }
            const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(elements.floating).documentElement;
            html.addEventListener('mouseleave', onLeave);
            return ({
                "useHover.useEffect": ()=>{
                    html.removeEventListener('mouseleave', onLeave);
                }
            })["useHover.useEffect"];
        }
    }["useHover.useEffect"], [
        elements.floating,
        open,
        onOpenChange,
        enabled,
        handleCloseRef,
        isHoverOpen
    ]);
    const closeWithDelay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useHover.useCallback[closeWithDelay]": function(event, runElseBranch, reason) {
            if (runElseBranch === void 0) {
                runElseBranch = true;
            }
            if (reason === void 0) {
                reason = 'hover';
            }
            const closeDelay = getDelay(delayRef.current, 'close', pointerTypeRef.current);
            if (closeDelay && !handlerRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = window.setTimeout({
                    "useHover.useCallback[closeWithDelay]": ()=>onOpenChange(false, event, reason)
                }["useHover.useCallback[closeWithDelay]"], closeDelay);
            } else if (runElseBranch) {
                clearTimeout(timeoutRef.current);
                onOpenChange(false, event, reason);
            }
        }
    }["useHover.useCallback[closeWithDelay]"], [
        delayRef,
        onOpenChange
    ]);
    const cleanupMouseMoveHandler = useEffectEvent({
        "useHover.useEffectEvent[cleanupMouseMoveHandler]": ()=>{
            unbindMouseMoveRef.current();
            handlerRef.current = undefined;
        }
    }["useHover.useEffectEvent[cleanupMouseMoveHandler]"]);
    const clearPointerEvents = useEffectEvent({
        "useHover.useEffectEvent[clearPointerEvents]": ()=>{
            if (performedPointerEventsMutationRef.current) {
                const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(elements.floating).body;
                body.style.pointerEvents = '';
                body.removeAttribute(safePolygonIdentifier);
                performedPointerEventsMutationRef.current = false;
            }
        }
    }["useHover.useEffectEvent[clearPointerEvents]"]);
    // Registering the mouse events on the reference directly to bypass React's
    // delegation system. If the cursor was on a disabled element and then entered
    // the reference (no gap), `mouseenter` doesn't fire in the delegation system.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useHover.useEffect": ()=>{
            if (!enabled) return;
            function isClickLikeOpenEvent() {
                return dataRef.current.openEvent ? [
                    'click',
                    'mousedown'
                ].includes(dataRef.current.openEvent.type) : false;
            }
            function onMouseEnter(event) {
                clearTimeout(timeoutRef.current);
                blockMouseMoveRef.current = false;
                if (mouseOnly && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseLikePointerType"])(pointerTypeRef.current) || restMs > 0 && !getDelay(delayRef.current, 'open')) {
                    return;
                }
                const openDelay = getDelay(delayRef.current, 'open', pointerTypeRef.current);
                if (openDelay) {
                    timeoutRef.current = window.setTimeout({
                        "useHover.useEffect.onMouseEnter": ()=>{
                            if (!openRef.current) {
                                onOpenChange(true, event, 'hover');
                            }
                        }
                    }["useHover.useEffect.onMouseEnter"], openDelay);
                } else {
                    onOpenChange(true, event, 'hover');
                }
            }
            function onMouseLeave(event) {
                if (isClickLikeOpenEvent()) return;
                unbindMouseMoveRef.current();
                const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(elements.floating);
                clearTimeout(restTimeoutRef.current);
                restTimeoutPendingRef.current = false;
                if (handleCloseRef.current && dataRef.current.floatingContext) {
                    // Prevent clearing `onScrollMouseLeave` timeout.
                    if (!open) {
                        clearTimeout(timeoutRef.current);
                    }
                    handlerRef.current = handleCloseRef.current({
                        ...dataRef.current.floatingContext,
                        tree,
                        x: event.clientX,
                        y: event.clientY,
                        onClose () {
                            clearPointerEvents();
                            cleanupMouseMoveHandler();
                            closeWithDelay(event, true, 'safe-polygon');
                        }
                    });
                    const handler = handlerRef.current;
                    doc.addEventListener('mousemove', handler);
                    unbindMouseMoveRef.current = ({
                        "useHover.useEffect.onMouseLeave": ()=>{
                            doc.removeEventListener('mousemove', handler);
                        }
                    })["useHover.useEffect.onMouseLeave"];
                    return;
                }
                // Allow interactivity without `safePolygon` on touch devices. With a
                // pointer, a short close delay is an alternative, so it should work
                // consistently.
                const shouldClose = pointerTypeRef.current === 'touch' ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(elements.floating, event.relatedTarget) : true;
                if (shouldClose) {
                    closeWithDelay(event);
                }
            }
            // Ensure the floating element closes after scrolling even if the pointer
            // did not move.
            // https://github.com/floating-ui/floating-ui/discussions/1692
            function onScrollMouseLeave(event) {
                if (isClickLikeOpenEvent()) return;
                if (!dataRef.current.floatingContext) return;
                handleCloseRef.current == null || handleCloseRef.current({
                    ...dataRef.current.floatingContext,
                    tree,
                    x: event.clientX,
                    y: event.clientY,
                    onClose () {
                        clearPointerEvents();
                        cleanupMouseMoveHandler();
                        closeWithDelay(event);
                    }
                })(event);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elements.domReference)) {
                var _elements$floating;
                const ref = elements.domReference;
                open && ref.addEventListener('mouseleave', onScrollMouseLeave);
                (_elements$floating = elements.floating) == null || _elements$floating.addEventListener('mouseleave', onScrollMouseLeave);
                move && ref.addEventListener('mousemove', onMouseEnter, {
                    once: true
                });
                ref.addEventListener('mouseenter', onMouseEnter);
                ref.addEventListener('mouseleave', onMouseLeave);
                return ({
                    "useHover.useEffect": ()=>{
                        var _elements$floating2;
                        open && ref.removeEventListener('mouseleave', onScrollMouseLeave);
                        (_elements$floating2 = elements.floating) == null || _elements$floating2.removeEventListener('mouseleave', onScrollMouseLeave);
                        move && ref.removeEventListener('mousemove', onMouseEnter);
                        ref.removeEventListener('mouseenter', onMouseEnter);
                        ref.removeEventListener('mouseleave', onMouseLeave);
                    }
                })["useHover.useEffect"];
            }
        }
    }["useHover.useEffect"], [
        elements,
        enabled,
        context,
        mouseOnly,
        restMs,
        move,
        closeWithDelay,
        cleanupMouseMoveHandler,
        clearPointerEvents,
        onOpenChange,
        open,
        openRef,
        tree,
        delayRef,
        handleCloseRef,
        dataRef
    ]);
    // Block pointer-events of every element other than the reference and floating
    // while the floating element is open and has a `handleClose` handler. Also
    // handles nested floating elements.
    // https://github.com/floating-ui/floating-ui/issues/1722
    index(()=>{
        var _handleCloseRef$curre;
        if (!enabled) return;
        if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
            performedPointerEventsMutationRef.current = true;
            const floatingEl = elements.floating;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elements.domReference) && floatingEl) {
                var _tree$nodesRef$curren;
                const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(elements.floating).body;
                body.setAttribute(safePolygonIdentifier, '');
                const ref = elements.domReference;
                const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node)=>node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
                if (parentFloating) {
                    parentFloating.style.pointerEvents = '';
                }
                body.style.pointerEvents = 'none';
                ref.style.pointerEvents = 'auto';
                floatingEl.style.pointerEvents = 'auto';
                return ()=>{
                    body.style.pointerEvents = '';
                    ref.style.pointerEvents = '';
                    floatingEl.style.pointerEvents = '';
                };
            }
        }
    }, [
        enabled,
        open,
        parentId,
        elements,
        tree,
        handleCloseRef,
        isHoverOpen
    ]);
    index(()=>{
        if (!open) {
            pointerTypeRef.current = undefined;
            restTimeoutPendingRef.current = false;
            cleanupMouseMoveHandler();
            clearPointerEvents();
        }
    }, [
        open,
        cleanupMouseMoveHandler,
        clearPointerEvents
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useHover.useEffect": ()=>{
            return ({
                "useHover.useEffect": ()=>{
                    cleanupMouseMoveHandler();
                    clearTimeout(timeoutRef.current);
                    clearTimeout(restTimeoutRef.current);
                    clearPointerEvents();
                }
            })["useHover.useEffect"];
        }
    }["useHover.useEffect"], [
        enabled,
        elements.domReference,
        cleanupMouseMoveHandler,
        clearPointerEvents
    ]);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useHover.useMemo[reference]": ()=>{
            function setPointerRef(event) {
                pointerTypeRef.current = event.pointerType;
            }
            return {
                onPointerDown: setPointerRef,
                onPointerEnter: setPointerRef,
                onMouseMove (event) {
                    const { nativeEvent } = event;
                    function handleMouseMove() {
                        if (!blockMouseMoveRef.current && !openRef.current) {
                            onOpenChange(true, nativeEvent, 'hover');
                        }
                    }
                    if (mouseOnly && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseLikePointerType"])(pointerTypeRef.current)) {
                        return;
                    }
                    if (open || restMs === 0) {
                        return;
                    }
                    // Ignore insignificant movements to account for tremors.
                    if (restTimeoutPendingRef.current && event.movementX ** 2 + event.movementY ** 2 < 2) {
                        return;
                    }
                    clearTimeout(restTimeoutRef.current);
                    if (pointerTypeRef.current === 'touch') {
                        handleMouseMove();
                    } else {
                        restTimeoutPendingRef.current = true;
                        restTimeoutRef.current = window.setTimeout(handleMouseMove, restMs);
                    }
                }
            };
        }
    }["useHover.useMemo[reference]"], [
        mouseOnly,
        onOpenChange,
        open,
        openRef,
        restMs
    ]);
    const floating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useHover.useMemo[floating]": ()=>({
                onMouseEnter () {
                    clearTimeout(timeoutRef.current);
                },
                onMouseLeave (event) {
                    closeWithDelay(event.nativeEvent, false);
                }
            })
    }["useHover.useMemo[floating]"], [
        closeWithDelay
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useHover.useMemo": ()=>enabled ? {
                reference,
                floating
            } : {}
    }["useHover.useMemo"], [
        enabled,
        reference,
        floating
    ]);
}
const NOOP = ()=>{};
const FloatingDelayGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext({
    delay: 0,
    initialDelay: 0,
    timeoutMs: 0,
    currentId: null,
    setCurrentId: NOOP,
    setState: NOOP,
    isInstantPhase: false
});
/**
 * @deprecated
 * Use the return value of `useDelayGroup()` instead.
 */ const useDelayGroupContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(FloatingDelayGroupContext);
/**
 * Provides context for a group of floating elements that should share a
 * `delay`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 */ function FloatingDelayGroup(props) {
    const { children, delay, timeoutMs = 0 } = props;
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer({
        "FloatingDelayGroup.useReducer": (prev, next)=>({
                ...prev,
                ...next
            })
    }["FloatingDelayGroup.useReducer"], {
        delay,
        timeoutMs,
        initialDelay: delay,
        currentId: null,
        isInstantPhase: false
    });
    const initialCurrentIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const setCurrentId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "FloatingDelayGroup.useCallback[setCurrentId]": (currentId)=>{
            setState({
                currentId
            });
        }
    }["FloatingDelayGroup.useCallback[setCurrentId]"], []);
    index(()=>{
        if (state.currentId) {
            if (initialCurrentIdRef.current === null) {
                initialCurrentIdRef.current = state.currentId;
            } else if (!state.isInstantPhase) {
                setState({
                    isInstantPhase: true
                });
            }
        } else {
            if (state.isInstantPhase) {
                setState({
                    isInstantPhase: false
                });
            }
            initialCurrentIdRef.current = null;
        }
    }, [
        state.currentId,
        state.isInstantPhase
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FloatingDelayGroupContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "FloatingDelayGroup.useMemo": ()=>({
                    ...state,
                    setState,
                    setCurrentId
                })
        }["FloatingDelayGroup.useMemo"], [
            state,
            setCurrentId
        ])
    }, children);
}
/**
 * Enables grouping when called inside a component that's a child of a
 * `FloatingDelayGroup`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 */ function useDelayGroup(context, options) {
    if (options === void 0) {
        options = {};
    }
    const { open, onOpenChange, floatingId } = context;
    const { id: optionId, enabled = true } = options;
    const id = optionId != null ? optionId : floatingId;
    const groupContext = useDelayGroupContext();
    const { currentId, setCurrentId, initialDelay, setState, timeoutMs } = groupContext;
    index(()=>{
        if (!enabled) return;
        if (!currentId) return;
        setState({
            delay: {
                open: 1,
                close: getDelay(initialDelay, 'close')
            }
        });
        if (currentId !== id) {
            onOpenChange(false);
        }
    }, [
        enabled,
        id,
        onOpenChange,
        setState,
        currentId,
        initialDelay
    ]);
    index(()=>{
        function unset() {
            onOpenChange(false);
            setState({
                delay: initialDelay,
                currentId: null
            });
        }
        if (!enabled) return;
        if (!currentId) return;
        if (!open && currentId === id) {
            if (timeoutMs) {
                const timeout = window.setTimeout(unset, timeoutMs);
                return ()=>{
                    clearTimeout(timeout);
                };
            }
            unset();
        }
    }, [
        enabled,
        open,
        setState,
        currentId,
        id,
        onOpenChange,
        initialDelay,
        timeoutMs
    ]);
    index(()=>{
        if (!enabled) return;
        if (setCurrentId === NOOP || !open) return;
        setCurrentId(id);
    }, [
        enabled,
        open,
        setCurrentId,
        id
    ]);
    return groupContext;
}
function getAncestors(nodes, id) {
    var _nodes$find;
    let allAncestors = [];
    let currentParentId = (_nodes$find = nodes.find((node)=>node.id === id)) == null ? void 0 : _nodes$find.parentId;
    while(currentParentId){
        const currentNode = nodes.find((node)=>node.id === currentParentId);
        currentParentId = currentNode == null ? void 0 : currentNode.parentId;
        if (currentNode) {
            allAncestors = allAncestors.concat(currentNode);
        }
    }
    return allAncestors;
}
function getChildren(nodes, id) {
    let allChildren = nodes.filter((node)=>{
        var _node$context;
        return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
    });
    let currentChildren = allChildren;
    while(currentChildren.length){
        currentChildren = nodes.filter((node)=>{
            var _currentChildren;
            return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n)=>{
                var _node$context2;
                return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
            });
        });
        allChildren = allChildren.concat(currentChildren);
    }
    return allChildren;
}
function getDeepestNode(nodes, id) {
    let deepestNodeId;
    let maxDepth = -1;
    function findDeepest(nodeId, depth) {
        if (depth > maxDepth) {
            deepestNodeId = nodeId;
            maxDepth = depth;
        }
        const children = getChildren(nodes, nodeId);
        children.forEach((child)=>{
            findDeepest(child.id, depth + 1);
        });
    }
    findDeepest(id, 0);
    return nodes.find((node)=>node.id === deepestNodeId);
}
// Modified to add conditional `aria-hidden` support:
// https://github.com/theKashey/aria-hidden/blob/9220c8f4a4fd35f63bee5510a9f41a37264382d4/src/index.ts
let counterMap = /*#__PURE__*/ new WeakMap();
let uncontrolledElementsSet = /*#__PURE__*/ new WeakSet();
let markerMap = {};
let lockCount$1 = 0;
const supportsInert = ()=>typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
const unwrapHost = (node)=>node && (node.host || unwrapHost(node.parentNode));
const correctElements = (parent, targets)=>targets.map((target)=>{
        if (parent.contains(target)) {
            return target;
        }
        const correctedTarget = unwrapHost(target);
        if (parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        return null;
    }).filter((x)=>x != null);
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert) {
    const markerName = 'data-floating-ui-inert';
    const controlAttribute = inert ? 'inert' : ariaHidden ? 'aria-hidden' : null;
    const avoidElements = correctElements(body, uncorrectedAvoidElements);
    const elementsToKeep = new Set();
    const elementsToStop = new Set(avoidElements);
    const hiddenElements = [];
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    const markerCounter = markerMap[markerName];
    avoidElements.forEach(keep);
    deep(body);
    elementsToKeep.clear();
    function keep(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        el.parentNode && keep(el.parentNode);
    }
    function deep(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        [].forEach.call(parent.children, (node)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(node) === 'script') return;
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                const attr = controlAttribute ? node.getAttribute(controlAttribute) : null;
                const alreadyHidden = attr !== null && attr !== 'false';
                const counterValue = (counterMap.get(node) || 0) + 1;
                const markerValue = (markerCounter.get(node) || 0) + 1;
                counterMap.set(node, counterValue);
                markerCounter.set(node, markerValue);
                hiddenElements.push(node);
                if (counterValue === 1 && alreadyHidden) {
                    uncontrolledElementsSet.add(node);
                }
                if (markerValue === 1) {
                    node.setAttribute(markerName, '');
                }
                if (!alreadyHidden && controlAttribute) {
                    node.setAttribute(controlAttribute, 'true');
                }
            }
        });
    }
    lockCount$1++;
    return ()=>{
        hiddenElements.forEach((element)=>{
            const counterValue = (counterMap.get(element) || 0) - 1;
            const markerValue = (markerCounter.get(element) || 0) - 1;
            counterMap.set(element, counterValue);
            markerCounter.set(element, markerValue);
            if (!counterValue) {
                if (!uncontrolledElementsSet.has(element) && controlAttribute) {
                    element.removeAttribute(controlAttribute);
                }
                uncontrolledElementsSet.delete(element);
            }
            if (!markerValue) {
                element.removeAttribute(markerName);
            }
        });
        lockCount$1--;
        if (!lockCount$1) {
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledElementsSet = new WeakSet();
            markerMap = {};
        }
    };
}
function markOthers(avoidElements, ariaHidden, inert) {
    if (ariaHidden === void 0) {
        ariaHidden = false;
    }
    if (inert === void 0) {
        inert = false;
    }
    const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(avoidElements[0]).body;
    return applyAttributeToOthers(avoidElements.concat(Array.from(body.querySelectorAll('[aria-live]'))), body, ariaHidden, inert);
}
const getTabbableOptions = ()=>({
        getShadowRoot: true,
        displayCheck: // JSDOM does not support the `tabbable` library. To solve this we can
        // check if `ResizeObserver` is a real function (not polyfilled), which
        // determines if the current environment is JSDOM-like.
        typeof ResizeObserver === 'function' && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none'
    });
function getTabbableIn(container, direction) {
    const allTabbable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$2$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tabbable"])(container, getTabbableOptions());
    if (direction === 'prev') {
        allTabbable.reverse();
    }
    const activeIndex = allTabbable.indexOf((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(container)));
    const nextTabbableElements = allTabbable.slice(activeIndex + 1);
    return nextTabbableElements[0];
}
function getNextTabbable() {
    return getTabbableIn(document.body, 'next');
}
function getPreviousTabbable() {
    return getTabbableIn(document.body, 'prev');
}
function isOutsideEvent(event, container) {
    const containerElement = container || event.currentTarget;
    const relatedTarget = event.relatedTarget;
    return !relatedTarget || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(containerElement, relatedTarget);
}
function disableFocusInside(container) {
    const tabbableElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$2$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tabbable"])(container, getTabbableOptions());
    tabbableElements.forEach((element)=>{
        element.dataset.tabindex = element.getAttribute('tabindex') || '';
        element.setAttribute('tabindex', '-1');
    });
}
function enableFocusInside(container) {
    const elements = container.querySelectorAll('[data-tabindex]');
    elements.forEach((element)=>{
        const tabindex = element.dataset.tabindex;
        delete element.dataset.tabindex;
        if (tabindex) {
            element.setAttribute('tabindex', tabindex);
        } else {
            element.removeAttribute('tabindex');
        }
    });
}
// See Diego Haz's Sandbox for making this logic work well on Safari/iOS:
// https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/FocusTrap.tsx
const HIDDEN_STYLES = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'fixed',
    whiteSpace: 'nowrap',
    width: '1px',
    top: 0,
    left: 0
};
let timeoutId;
function setActiveElementOnTab(event) {
    if (event.key === 'Tab') {
        event.target;
        clearTimeout(timeoutId);
    }
}
const FocusGuard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function FocusGuard(props, ref) {
    const [role, setRole] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState();
    index(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])()) {
            // Unlike other screen readers such as NVDA and JAWS, the virtual cursor
            // on VoiceOver does trigger the onFocus event, so we can use the focus
            // trap element. On Safari, only buttons trigger the onFocus event.
            // NB: "group" role in the Sandbox no longer appears to work, must be a
            // button role.
            setRole('button');
        }
        document.addEventListener('keydown', setActiveElementOnTab);
        return ()=>{
            document.removeEventListener('keydown', setActiveElementOnTab);
        };
    }, []);
    const restProps = {
        ref,
        tabIndex: 0,
        // Role is only for VoiceOver
        role,
        'aria-hidden': role ? undefined : true,
        [createAttribute('focus-guard')]: '',
        style: HIDDEN_STYLES
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", _extends({}, props, restProps));
});
const PortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
const attr = /*#__PURE__*/ createAttribute('portal');
/**
 * @see https://floating-ui.com/docs/FloatingPortal#usefloatingportalnode
 */ function useFloatingPortalNode(props) {
    if (props === void 0) {
        props = {};
    }
    const { id, root } = props;
    const uniqueId = useId();
    const portalContext = usePortalContext();
    const [portalNode, setPortalNode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const portalNodeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    index(()=>{
        return ()=>{
            portalNode == null || portalNode.remove();
            // Allow the subsequent layout effects to create a new node on updates.
            // The portal node will still be cleaned up on unmount.
            // https://github.com/floating-ui/floating-ui/issues/2454
            queueMicrotask(()=>{
                portalNodeRef.current = null;
            });
        };
    }, [
        portalNode
    ]);
    index(()=>{
        // Wait for the uniqueId to be generated before creating the portal node in
        // React <18 (using `useFloatingId` instead of the native `useId`).
        // https://github.com/floating-ui/floating-ui/issues/2778
        if (!uniqueId) return;
        if (portalNodeRef.current) return;
        const existingIdRoot = id ? document.getElementById(id) : null;
        if (!existingIdRoot) return;
        const subRoot = document.createElement('div');
        subRoot.id = uniqueId;
        subRoot.setAttribute(attr, '');
        existingIdRoot.appendChild(subRoot);
        portalNodeRef.current = subRoot;
        setPortalNode(subRoot);
    }, [
        id,
        uniqueId
    ]);
    index(()=>{
        if (!uniqueId) return;
        if (portalNodeRef.current) return;
        let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
        if (container && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(container)) container = container.current;
        container = container || document.body;
        let idWrapper = null;
        if (id) {
            idWrapper = document.createElement('div');
            idWrapper.id = id;
            container.appendChild(idWrapper);
        }
        const subRoot = document.createElement('div');
        subRoot.id = uniqueId;
        subRoot.setAttribute(attr, '');
        container = idWrapper || container;
        container.appendChild(subRoot);
        portalNodeRef.current = subRoot;
        setPortalNode(subRoot);
    }, [
        id,
        root,
        uniqueId,
        portalContext
    ]);
    return portalNode;
}
/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * This is necessary to ensure the floating element can appear outside any
 * potential parent containers that cause clipping (such as `overflow: hidden`),
 * while retaining its location in the React tree.
 * @see https://floating-ui.com/docs/FloatingPortal
 */ function FloatingPortal(props) {
    const { children, id, root = null, preserveTabOrder = true } = props;
    const portalNode = useFloatingPortalNode({
        id,
        root
    });
    const [focusManagerState, setFocusManagerState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const beforeOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const afterOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const beforeInsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const afterInsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const modal = focusManagerState == null ? void 0 : focusManagerState.modal;
    const open = focusManagerState == null ? void 0 : focusManagerState.open;
    const shouldRenderGuards = // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && // Don't render if unmount is transitioning.
    focusManagerState.open && preserveTabOrder && !!(root || portalNode);
    // https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/TabbablePortal.tsx
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "FloatingPortal.useEffect": ()=>{
            if (!portalNode || !preserveTabOrder || modal) {
                return;
            }
            // Make sure elements inside the portal element are tabbable only when the
            // portal has already been focused, either by tabbing into a focus trap
            // element outside or using the mouse.
            function onFocus(event) {
                if (portalNode && isOutsideEvent(event)) {
                    const focusing = event.type === 'focusin';
                    const manageFocus = focusing ? enableFocusInside : disableFocusInside;
                    manageFocus(portalNode);
                }
            }
            // Listen to the event on the capture phase so they run before the focus
            // trap elements onFocus prop is called.
            portalNode.addEventListener('focusin', onFocus, true);
            portalNode.addEventListener('focusout', onFocus, true);
            return ({
                "FloatingPortal.useEffect": ()=>{
                    portalNode.removeEventListener('focusin', onFocus, true);
                    portalNode.removeEventListener('focusout', onFocus, true);
                }
            })["FloatingPortal.useEffect"];
        }
    }["FloatingPortal.useEffect"], [
        portalNode,
        preserveTabOrder,
        modal
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "FloatingPortal.useEffect": ()=>{
            if (!portalNode) return;
            if (open) return;
            enableFocusInside(portalNode);
        }
    }["FloatingPortal.useEffect"], [
        open,
        portalNode
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(PortalContext.Provider, {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
            "FloatingPortal.useMemo": ()=>({
                    preserveTabOrder,
                    beforeOutsideRef,
                    afterOutsideRef,
                    beforeInsideRef,
                    afterInsideRef,
                    portalNode,
                    setFocusManagerState
                })
        }["FloatingPortal.useMemo"], [
            preserveTabOrder,
            portalNode
        ])
    }, shouldRenderGuards && portalNode && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event)=>{
            if (isOutsideEvent(event, portalNode)) {
                var _beforeInsideRef$curr;
                (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
            } else {
                const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
                prevTabbable == null || prevTabbable.focus();
            }
        }
    }), shouldRenderGuards && portalNode && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("span", {
        "aria-owns": portalNode.id,
        style: HIDDEN_STYLES
    }), portalNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(children, portalNode), shouldRenderGuards && portalNode && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event)=>{
            if (isOutsideEvent(event, portalNode)) {
                var _afterInsideRef$curre;
                (_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
            } else {
                const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
                nextTabbable == null || nextTabbable.focus();
                (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent, 'focus-out'));
            }
        }
    }));
}
const usePortalContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(PortalContext);
const FOCUSABLE_ATTRIBUTE = 'data-floating-ui-focusable';
function getFloatingFocusElement(floatingElement) {
    if (!floatingElement) {
        return null;
    }
    // Try to find the element that has `{...getFloatingProps()}` spread on it.
    // This indicates the floating element is acting as a positioning wrapper, and
    // so focus should be managed on the child element with the event handlers and
    // aria props.
    return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector("[" + FOCUSABLE_ATTRIBUTE + "]") || floatingElement;
}
const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function addPreviouslyFocusedElement(element) {
    previouslyFocusedElements = previouslyFocusedElements.filter((el)=>el.isConnected);
    let tabbableEl = element;
    if (!tabbableEl || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(tabbableEl) === 'body') return;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$2$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTabbable"])(tabbableEl, getTabbableOptions())) {
        const tabbableChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$2$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tabbable"])(tabbableEl, getTabbableOptions())[0];
        if (tabbableChild) {
            tabbableEl = tabbableChild;
        }
    }
    previouslyFocusedElements.push(tabbableEl);
    if (previouslyFocusedElements.length > LIST_LIMIT) {
        previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
}
function getPreviouslyFocusedElement() {
    return previouslyFocusedElements.slice().reverse().find((el)=>el.isConnected);
}
const VisuallyHiddenDismiss = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function VisuallyHiddenDismiss(props, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("button", _extends({}, props, {
        type: "button",
        ref: ref,
        tabIndex: -1,
        style: HIDDEN_STYLES
    }));
});
/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 */ function FloatingFocusManager(props) {
    const { context, children, disabled = false, order = [
        'content'
    ], guards: _guards = true, initialFocus = 0, returnFocus = true, restoreFocus = false, modal = true, visuallyHiddenDismiss = false, closeOnFocusOut = true } = props;
    const { open, refs, nodeId, onOpenChange, events, dataRef, floatingId, elements: { domReference, floating } } = context;
    const ignoreInitialFocus = typeof initialFocus === 'number' && initialFocus < 0;
    // If the reference is a combobox and is typeable (e.g. input/textarea),
    // there are different focus semantics. The guards should not be rendered, but
    // aria-hidden should be applied to all nodes still. Further, the visually
    // hidden dismiss button should only appear at the end of the list, not the
    // start.
    const isUntrappedTypeableCombobox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeableCombobox"])(domReference) && ignoreInitialFocus;
    // Force the guards to be rendered if the `inert` attribute is not supported.
    const guards = supportsInert() ? _guards : true;
    const orderRef = useLatestRef(order);
    const initialFocusRef = useLatestRef(initialFocus);
    const returnFocusRef = useLatestRef(returnFocus);
    const tree = useFloatingTree();
    const portalContext = usePortalContext();
    const startDismissButtonRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const endDismissButtonRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const preventReturnFocusRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const isPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const tabbableIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(-1);
    const isInsidePortal = portalContext != null;
    const floatingFocusElement = getFloatingFocusElement(floating);
    const getTabbableContent = useEffectEvent({
        "FloatingFocusManager.useEffectEvent[getTabbableContent]": function(container) {
            if (container === void 0) {
                container = floatingFocusElement;
            }
            return container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tabbable$40$6$2e$2$2e$0$2f$node_modules$2f$tabbable$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tabbable"])(container, getTabbableOptions()) : [];
        }
    }["FloatingFocusManager.useEffectEvent[getTabbableContent]"]);
    const getTabbableElements = useEffectEvent({
        "FloatingFocusManager.useEffectEvent[getTabbableElements]": (container)=>{
            const content = getTabbableContent(container);
            return orderRef.current.map({
                "FloatingFocusManager.useEffectEvent[getTabbableElements]": (type)=>{
                    if (domReference && type === 'reference') {
                        return domReference;
                    }
                    if (floatingFocusElement && type === 'floating') {
                        return floatingFocusElement;
                    }
                    return content;
                }
            }["FloatingFocusManager.useEffectEvent[getTabbableElements]"]).filter(Boolean).flat();
        }
    }["FloatingFocusManager.useEffectEvent[getTabbableElements]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "FloatingFocusManager.useEffect": ()=>{
            preventReturnFocusRef.current = false;
        }
    }["FloatingFocusManager.useEffect"], [
        disabled
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "FloatingFocusManager.useEffect": ()=>{
            if (disabled) return;
            if (!modal) return;
            function onKeyDown(event) {
                if (event.key === 'Tab') {
                    // The focus guards have nothing to focus, so we need to stop the event.
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(floatingFocusElement, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                    }
                    const els = getTabbableElements();
                    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event);
                    if (orderRef.current[0] === 'reference' && target === domReference) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                        if (event.shiftKey) {
                            enqueueFocus(els[els.length - 1]);
                        } else {
                            enqueueFocus(els[1]);
                        }
                    }
                    if (orderRef.current[1] === 'floating' && target === floatingFocusElement && event.shiftKey) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                        enqueueFocus(els[0]);
                    }
                }
            }
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(floatingFocusElement);
            doc.addEventListener('keydown', onKeyDown);
            return ({
                "FloatingFocusManager.useEffect": ()=>{
                    doc.removeEventListener('keydown', onKeyDown);
                }
            })["FloatingFocusManager.useEffect"];
        }
    }["FloatingFocusManager.useEffect"], [
        disabled,
        domReference,
        floatingFocusElement,
        modal,
        orderRef,
        isUntrappedTypeableCombobox,
        getTabbableContent,
        getTabbableElements
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "FloatingFocusManager.useEffect": ()=>{
            if (disabled) return;
            if (!floating) return;
            function handleFocusIn(event) {
                const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event);
                const tabbableContent = getTabbableContent();
                const tabbableIndex = tabbableContent.indexOf(target);
                if (tabbableIndex !== -1) {
                    tabbableIndexRef.current = tabbableIndex;
                }
            }
            floating.addEventListener('focusin', handleFocusIn);
            return ({
                "FloatingFocusManager.useEffect": ()=>{
                    floating.removeEventListener('focusin', handleFocusIn);
                }
            })["FloatingFocusManager.useEffect"];
        }
    }["FloatingFocusManager.useEffect"], [
        disabled,
        floating,
        getTabbableContent
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "FloatingFocusManager.useEffect": ()=>{
            if (disabled) return;
            if (!closeOnFocusOut) return;
            // In Safari, buttons lose focus when pressing them.
            function handlePointerDown() {
                isPointerDownRef.current = true;
                setTimeout({
                    "FloatingFocusManager.useEffect.handlePointerDown": ()=>{
                        isPointerDownRef.current = false;
                    }
                }["FloatingFocusManager.useEffect.handlePointerDown"]);
            }
            function handleFocusOutside(event) {
                const relatedTarget = event.relatedTarget;
                queueMicrotask({
                    "FloatingFocusManager.useEffect.handleFocusOutside": ()=>{
                        const movedToUnrelatedNode = !((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(domReference, relatedTarget) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(floating, relatedTarget) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(relatedTarget, floating) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute('focus-guard')) || tree && (getChildren(tree.nodesRef.current, nodeId).find({
                            "FloatingFocusManager.useEffect.handleFocusOutside": (node)=>{
                                var _node$context, _node$context2;
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
                            }
                        }["FloatingFocusManager.useEffect.handleFocusOutside"]) || getAncestors(tree.nodesRef.current, nodeId).find({
                            "FloatingFocusManager.useEffect.handleFocusOutside": (node)=>{
                                var _node$context3, _node$context4;
                                return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
                            }
                        }["FloatingFocusManager.useEffect.handleFocusOutside"])));
                        // Restore focus to the previous tabbable element index to prevent
                        // focus from being lost outside the floating tree.
                        if (restoreFocus && movedToUnrelatedNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(floatingFocusElement)) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(floatingFocusElement).body) {
                            // Let `FloatingPortal` effect knows that focus is still inside the
                            // floating tree.
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(floatingFocusElement)) {
                                floatingFocusElement.focus();
                            }
                            const prevTabbableIndex = tabbableIndexRef.current;
                            const tabbableContent = getTabbableContent();
                            const nodeToFocus = tabbableContent[prevTabbableIndex] || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(nodeToFocus)) {
                                nodeToFocus.focus();
                            }
                        }
                        // Focus did not move inside the floating tree, and there are no tabbable
                        // portal guards to handle closing.
                        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
                        relatedTarget !== getPreviouslyFocusedElement()) {
                            preventReturnFocusRef.current = true;
                            onOpenChange(false, event, 'focus-out');
                        }
                    }
                }["FloatingFocusManager.useEffect.handleFocusOutside"]);
            }
            if (floating && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(domReference)) {
                domReference.addEventListener('focusout', handleFocusOutside);
                domReference.addEventListener('pointerdown', handlePointerDown);
                floating.addEventListener('focusout', handleFocusOutside);
                return ({
                    "FloatingFocusManager.useEffect": ()=>{
                        domReference.removeEventListener('focusout', handleFocusOutside);
                        domReference.removeEventListener('pointerdown', handlePointerDown);
                        floating.removeEventListener('focusout', handleFocusOutside);
                    }
                })["FloatingFocusManager.useEffect"];
            }
        }
    }["FloatingFocusManager.useEffect"], [
        disabled,
        domReference,
        floating,
        floatingFocusElement,
        modal,
        nodeId,
        tree,
        portalContext,
        onOpenChange,
        closeOnFocusOut,
        restoreFocus,
        getTabbableContent,
        isUntrappedTypeableCombobox
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "FloatingFocusManager.useEffect": ()=>{
            var _portalContext$portal;
            if (disabled) return;
            // Don't hide portals nested within the parent portal.
            const portalNodes = Array.from((portalContext == null || (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute('portal') + "]")) || []);
            if (floating) {
                const insideElements = [
                    floating,
                    ...portalNodes,
                    startDismissButtonRef.current,
                    endDismissButtonRef.current,
                    orderRef.current.includes('reference') || isUntrappedTypeableCombobox ? domReference : null
                ].filter({
                    "FloatingFocusManager.useEffect.insideElements": (x)=>x != null
                }["FloatingFocusManager.useEffect.insideElements"]);
                const cleanup = modal || isUntrappedTypeableCombobox ? markOthers(insideElements, guards, !guards) : markOthers(insideElements);
                return ({
                    "FloatingFocusManager.useEffect": ()=>{
                        cleanup();
                    }
                })["FloatingFocusManager.useEffect"];
            }
        }
    }["FloatingFocusManager.useEffect"], [
        disabled,
        domReference,
        floating,
        modal,
        orderRef,
        portalContext,
        isUntrappedTypeableCombobox,
        guards
    ]);
    index(()=>{
        if (disabled || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(floatingFocusElement)) return;
        const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(floatingFocusElement);
        const previouslyFocusedElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])(doc);
        // Wait for any layout effect state setters to execute to set `tabIndex`.
        queueMicrotask(()=>{
            const focusableElements = getTabbableElements(floatingFocusElement);
            const initialFocusValue = initialFocusRef.current;
            const elToFocus = (typeof initialFocusValue === 'number' ? focusableElements[initialFocusValue] : initialFocusValue.current) || floatingFocusElement;
            const focusAlreadyInsideFloatingEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(floatingFocusElement, previouslyFocusedElement);
            if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) {
                enqueueFocus(elToFocus, {
                    preventScroll: elToFocus === floatingFocusElement
                });
            }
        });
    }, [
        disabled,
        open,
        floatingFocusElement,
        ignoreInitialFocus,
        getTabbableElements,
        initialFocusRef
    ]);
    index(()=>{
        if (disabled || !floatingFocusElement) return;
        let preventReturnFocusScroll = false;
        const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(floatingFocusElement);
        const previouslyFocusedElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])(doc);
        const contextData = dataRef.current;
        let openEvent = contextData.openEvent;
        addPreviouslyFocusedElement(previouslyFocusedElement);
        // Dismissing via outside press should always ignore `returnFocus` to
        // prevent unwanted scrolling.
        function onOpenChange(_ref) {
            let { open, reason, event, nested } = _ref;
            if (open) {
                openEvent = event;
            }
            if (reason === 'escape-key' && refs.domReference.current) {
                addPreviouslyFocusedElement(refs.domReference.current);
            }
            if (reason === 'hover' && event.type === 'mouseleave') {
                preventReturnFocusRef.current = true;
            }
            if (reason !== 'outside-press') return;
            if (nested) {
                preventReturnFocusRef.current = false;
                preventReturnFocusScroll = true;
            } else {
                preventReturnFocusRef.current = !((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualClick"])(event) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualPointerEvent"])(event));
            }
        }
        events.on('openchange', onOpenChange);
        const fallbackEl = doc.createElement('span');
        fallbackEl.setAttribute('tabindex', '-1');
        fallbackEl.setAttribute('aria-hidden', 'true');
        Object.assign(fallbackEl.style, HIDDEN_STYLES);
        if (isInsidePortal && domReference) {
            domReference.insertAdjacentElement('afterend', fallbackEl);
        }
        return ()=>{
            events.off('openchange', onOpenChange);
            const activeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])(doc);
            const isFocusInsideFloatingTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some((node)=>{
                var _node$context5;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
            });
            const shouldFocusReference = isFocusInsideFloatingTree || openEvent && [
                'click',
                'mousedown'
            ].includes(openEvent.type);
            if (shouldFocusReference && refs.domReference.current) {
                addPreviouslyFocusedElement(refs.domReference.current);
            }
            const returnElement = getPreviouslyFocusedElement() || fallbackEl;
            queueMicrotask(()=>{
                if (// eslint-disable-next-line react-hooks/exhaustive-deps
                returnFocusRef.current && !preventReturnFocusRef.current && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(returnElement) && (// If the focus moved somewhere else after mount, avoid returning focus
                // since it likely entered a different element which should be
                // respected: https://github.com/floating-ui/floating-ui/issues/2607
                returnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
                    returnElement.focus({
                        preventScroll: preventReturnFocusScroll
                    });
                }
                fallbackEl.remove();
            });
        };
    }, [
        disabled,
        floating,
        floatingFocusElement,
        returnFocusRef,
        dataRef,
        refs,
        events,
        tree,
        nodeId,
        isInsidePortal,
        domReference
    ]);
    // Synchronize the `context` & `modal` value to the FloatingPortal context.
    // It will decide whether or not it needs to render its own guards.
    index(()=>{
        if (disabled) return;
        if (!portalContext) return;
        portalContext.setFocusManagerState({
            modal,
            closeOnFocusOut,
            open,
            onOpenChange,
            refs
        });
        return ()=>{
            portalContext.setFocusManagerState(null);
        };
    }, [
        disabled,
        portalContext,
        modal,
        open,
        onOpenChange,
        refs,
        closeOnFocusOut
    ]);
    index(()=>{
        if (disabled) return;
        if (!floatingFocusElement) return;
        if (typeof MutationObserver !== 'function') return;
        if (ignoreInitialFocus) return;
        const handleMutation = ()=>{
            const tabIndex = floatingFocusElement.getAttribute('tabindex');
            const tabbableContent = getTabbableContent();
            const activeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(floating));
            const tabbableIndex = tabbableContent.indexOf(activeEl);
            if (tabbableIndex !== -1) {
                tabbableIndexRef.current = tabbableIndex;
            }
            if (orderRef.current.includes('floating') || activeEl !== refs.domReference.current && tabbableContent.length === 0) {
                if (tabIndex !== '0') {
                    floatingFocusElement.setAttribute('tabindex', '0');
                }
            } else if (tabIndex !== '-1') {
                floatingFocusElement.setAttribute('tabindex', '-1');
            }
        };
        handleMutation();
        const observer = new MutationObserver(handleMutation);
        observer.observe(floatingFocusElement, {
            childList: true,
            subtree: true,
            attributes: true
        });
        return ()=>{
            observer.disconnect();
        };
    }, [
        disabled,
        floating,
        floatingFocusElement,
        refs,
        orderRef,
        getTabbableContent,
        ignoreInitialFocus
    ]);
    function renderDismissButton(location) {
        if (disabled || !visuallyHiddenDismiss || !modal) {
            return null;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(VisuallyHiddenDismiss, {
            ref: location === 'start' ? startDismissButtonRef : endDismissButtonRef,
            onClick: (event)=>onOpenChange(false, event.nativeEvent)
        }, typeof visuallyHiddenDismiss === 'string' ? visuallyHiddenDismiss : 'Dismiss');
    }
    const shouldRenderGuards = !disabled && guards && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment, null, shouldRenderGuards && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FocusGuard, {
        "data-type": "inside",
        ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
        onFocus: (event)=>{
            if (modal) {
                const els = getTabbableElements();
                enqueueFocus(order[0] === 'reference' ? els[0] : els[els.length - 1]);
            } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
                preventReturnFocusRef.current = false;
                if (isOutsideEvent(event, portalContext.portalNode)) {
                    const nextTabbable = getNextTabbable() || domReference;
                    nextTabbable == null || nextTabbable.focus();
                } else {
                    var _portalContext$before;
                    (_portalContext$before = portalContext.beforeOutsideRef.current) == null || _portalContext$before.focus();
                }
            }
        }
    }), !isUntrappedTypeableCombobox && renderDismissButton('start'), children, renderDismissButton('end'), shouldRenderGuards && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement(FocusGuard, {
        "data-type": "inside",
        ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
        onFocus: (event)=>{
            if (modal) {
                enqueueFocus(getTabbableElements()[0]);
            } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
                if (closeOnFocusOut) {
                    preventReturnFocusRef.current = true;
                }
                if (isOutsideEvent(event, portalContext.portalNode)) {
                    const prevTabbable = getPreviousTabbable() || domReference;
                    prevTabbable == null || prevTabbable.focus();
                } else {
                    var _portalContext$afterO;
                    (_portalContext$afterO = portalContext.afterOutsideRef.current) == null || _portalContext$afterO.focus();
                }
            }
        }
    }));
}
let lockCount = 0;
function enableScrollLock() {
    const isIOS = /iP(hone|ad|od)|iOS/.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlatform"])());
    const bodyStyle = document.body.style;
    // RTL <body> scrollbar
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? 'paddingLeft' : 'paddingRight';
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
    bodyStyle.overflow = 'hidden';
    if (scrollbarWidth) {
        bodyStyle[paddingProp] = scrollbarWidth + "px";
    }
    // Only iOS doesn't respect `overflow: hidden` on document.body, and this
    // technique has fewer side effects.
    if (isIOS) {
        var _window$visualViewpor, _window$visualViewpor2;
        // iOS 12 does not support `visualViewport`.
        const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
        const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
        Object.assign(bodyStyle, {
            position: 'fixed',
            top: -(scrollY - Math.floor(offsetTop)) + "px",
            left: -(scrollX - Math.floor(offsetLeft)) + "px",
            right: '0'
        });
    }
    return ()=>{
        Object.assign(bodyStyle, {
            overflow: '',
            [paddingProp]: ''
        });
        if (isIOS) {
            Object.assign(bodyStyle, {
                position: '',
                top: '',
                left: '',
                right: ''
            });
            window.scrollTo(scrollX, scrollY);
        }
    };
}
let cleanup = ()=>{};
/**
 * Provides base styling for a fixed overlay element to dim content or block
 * pointer events behind a floating element.
 * It's a regular `<div>`, so it can be styled via any CSS solution you prefer.
 * @see https://floating-ui.com/docs/FloatingOverlay
 */ const FloatingOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(function FloatingOverlay(props, ref) {
    const { lockScroll = false, ...rest } = props;
    index(()=>{
        if (!lockScroll) return;
        lockCount++;
        if (lockCount === 1) {
            cleanup = enableScrollLock();
        }
        return ()=>{
            lockCount--;
            if (lockCount === 0) {
                cleanup();
            }
        };
    }, [
        lockScroll
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createElement("div", _extends({
        ref: ref
    }, rest, {
        style: {
            position: 'fixed',
            overflow: 'auto',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...rest.style
        }
    }));
});
function isButtonTarget(event) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(event.target) && event.target.tagName === 'BUTTON';
}
function isSpaceIgnored(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeableElement"])(element);
}
/**
 * Opens or closes the floating element when clicking the reference element.
 * @see https://floating-ui.com/docs/useClick
 */ function useClick(context, props) {
    if (props === void 0) {
        props = {};
    }
    const { open, onOpenChange, dataRef, elements: { domReference } } = context;
    const { enabled = true, event: eventOption = 'click', toggle = true, ignoreMouse = false, keyboardHandlers = true } = props;
    const pointerTypeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    const didKeyDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useClick.useMemo[reference]": ()=>({
                onPointerDown (event) {
                    pointerTypeRef.current = event.pointerType;
                },
                onMouseDown (event) {
                    const pointerType = pointerTypeRef.current;
                    // Ignore all buttons except for the "main" button.
                    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
                    if (event.button !== 0) return;
                    if (eventOption === 'click') return;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseLikePointerType"])(pointerType, true) && ignoreMouse) return;
                    if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'mousedown' : true)) {
                        onOpenChange(false, event.nativeEvent, 'click');
                    } else {
                        // Prevent stealing focus from the floating element
                        event.preventDefault();
                        onOpenChange(true, event.nativeEvent, 'click');
                    }
                },
                onClick (event) {
                    const pointerType = pointerTypeRef.current;
                    if (eventOption === 'mousedown' && pointerTypeRef.current) {
                        pointerTypeRef.current = undefined;
                        return;
                    }
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseLikePointerType"])(pointerType, true) && ignoreMouse) return;
                    if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === 'click' : true)) {
                        onOpenChange(false, event.nativeEvent, 'click');
                    } else {
                        onOpenChange(true, event.nativeEvent, 'click');
                    }
                },
                onKeyDown (event) {
                    pointerTypeRef.current = undefined;
                    if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) {
                        return;
                    }
                    if (event.key === ' ' && !isSpaceIgnored(domReference)) {
                        // Prevent scrolling
                        event.preventDefault();
                        didKeyDownRef.current = true;
                    }
                    if (event.key === 'Enter') {
                        if (open && toggle) {
                            onOpenChange(false, event.nativeEvent, 'click');
                        } else {
                            onOpenChange(true, event.nativeEvent, 'click');
                        }
                    }
                },
                onKeyUp (event) {
                    if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) {
                        return;
                    }
                    if (event.key === ' ' && didKeyDownRef.current) {
                        didKeyDownRef.current = false;
                        if (open && toggle) {
                            onOpenChange(false, event.nativeEvent, 'click');
                        } else {
                            onOpenChange(true, event.nativeEvent, 'click');
                        }
                    }
                }
            })
    }["useClick.useMemo[reference]"], [
        dataRef,
        domReference,
        eventOption,
        ignoreMouse,
        keyboardHandlers,
        onOpenChange,
        open,
        toggle
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useClick.useMemo": ()=>enabled ? {
                reference
            } : {}
    }["useClick.useMemo"], [
        enabled,
        reference
    ]);
}
function createVirtualElement(domElement, data) {
    let offsetX = null;
    let offsetY = null;
    let isAutoUpdateEvent = false;
    return {
        contextElement: domElement || undefined,
        getBoundingClientRect () {
            var _data$dataRef$current;
            const domRect = (domElement == null ? void 0 : domElement.getBoundingClientRect()) || {
                width: 0,
                height: 0,
                x: 0,
                y: 0
            };
            const isXAxis = data.axis === 'x' || data.axis === 'both';
            const isYAxis = data.axis === 'y' || data.axis === 'both';
            const canTrackCursorOnAutoUpdate = [
                'mouseenter',
                'mousemove'
            ].includes(((_data$dataRef$current = data.dataRef.current.openEvent) == null ? void 0 : _data$dataRef$current.type) || '') && data.pointerType !== 'touch';
            let width = domRect.width;
            let height = domRect.height;
            let x = domRect.x;
            let y = domRect.y;
            if (offsetX == null && data.x && isXAxis) {
                offsetX = domRect.x - data.x;
            }
            if (offsetY == null && data.y && isYAxis) {
                offsetY = domRect.y - data.y;
            }
            x -= offsetX || 0;
            y -= offsetY || 0;
            width = 0;
            height = 0;
            if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
                width = data.axis === 'y' ? domRect.width : 0;
                height = data.axis === 'x' ? domRect.height : 0;
                x = isXAxis && data.x != null ? data.x : x;
                y = isYAxis && data.y != null ? data.y : y;
            } else if (isAutoUpdateEvent && !canTrackCursorOnAutoUpdate) {
                height = data.axis === 'x' ? domRect.height : height;
                width = data.axis === 'y' ? domRect.width : width;
            }
            isAutoUpdateEvent = true;
            return {
                width,
                height,
                x,
                y,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x
            };
        }
    };
}
function isMouseBasedEvent(event) {
    return event != null && event.clientX != null;
}
/**
 * Positions the floating element relative to a client point (in the viewport),
 * such as the mouse position. By default, it follows the mouse cursor.
 * @see https://floating-ui.com/docs/useClientPoint
 */ function useClientPoint(context, props) {
    if (props === void 0) {
        props = {};
    }
    const { open, dataRef, elements: { floating, domReference }, refs } = context;
    const { enabled = true, axis = 'both', x = null, y = null } = props;
    const initialRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const cleanupListenerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const [pointerType, setPointerType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState();
    const [reactive, setReactive] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState([]);
    const setReference = useEffectEvent({
        "useClientPoint.useEffectEvent[setReference]": (x, y)=>{
            if (initialRef.current) return;
            // Prevent setting if the open event was not a mouse-like one
            // (e.g. focus to open, then hover over the reference element).
            // Only apply if the event exists.
            if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) {
                return;
            }
            refs.setPositionReference(createVirtualElement(domReference, {
                x,
                y,
                axis,
                dataRef,
                pointerType
            }));
        }
    }["useClientPoint.useEffectEvent[setReference]"]);
    const handleReferenceEnterOrMove = useEffectEvent({
        "useClientPoint.useEffectEvent[handleReferenceEnterOrMove]": (event)=>{
            if (x != null || y != null) return;
            if (!open) {
                setReference(event.clientX, event.clientY);
            } else if (!cleanupListenerRef.current) {
                // If there's no cleanup, there's no listener, but we want to ensure
                // we add the listener if the cursor landed on the floating element and
                // then back on the reference (i.e. it's interactive).
                setReactive([]);
            }
        }
    }["useClientPoint.useEffectEvent[handleReferenceEnterOrMove]"]);
    // If the pointer is a mouse-like pointer, we want to continue following the
    // mouse even if the floating element is transitioning out. On touch
    // devices, this is undesirable because the floating element will move to
    // the dismissal touch point.
    const openCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMouseLikePointerType"])(pointerType) ? floating : open;
    const addListener = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useClientPoint.useCallback[addListener]": ()=>{
            // Explicitly specified `x`/`y` coordinates shouldn't add a listener.
            if (!openCheck || !enabled || x != null || y != null) return;
            const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(floating);
            function handleMouseMove(event) {
                const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(floating, target)) {
                    setReference(event.clientX, event.clientY);
                } else {
                    win.removeEventListener('mousemove', handleMouseMove);
                    cleanupListenerRef.current = null;
                }
            }
            if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) {
                win.addEventListener('mousemove', handleMouseMove);
                const cleanup = {
                    "useClientPoint.useCallback[addListener].cleanup": ()=>{
                        win.removeEventListener('mousemove', handleMouseMove);
                        cleanupListenerRef.current = null;
                    }
                }["useClientPoint.useCallback[addListener].cleanup"];
                cleanupListenerRef.current = cleanup;
                return cleanup;
            }
            refs.setPositionReference(domReference);
        }
    }["useClientPoint.useCallback[addListener]"], [
        openCheck,
        enabled,
        x,
        y,
        floating,
        dataRef,
        refs,
        domReference,
        setReference
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useClientPoint.useEffect": ()=>{
            return addListener();
        }
    }["useClientPoint.useEffect"], [
        addListener,
        reactive
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useClientPoint.useEffect": ()=>{
            if (enabled && !floating) {
                initialRef.current = false;
            }
        }
    }["useClientPoint.useEffect"], [
        enabled,
        floating
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useClientPoint.useEffect": ()=>{
            if (!enabled && open) {
                initialRef.current = true;
            }
        }
    }["useClientPoint.useEffect"], [
        enabled,
        open
    ]);
    index(()=>{
        if (enabled && (x != null || y != null)) {
            initialRef.current = false;
            setReference(x, y);
        }
    }, [
        enabled,
        x,
        y,
        setReference
    ]);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useClientPoint.useMemo[reference]": ()=>{
            function setPointerTypeRef(_ref) {
                let { pointerType } = _ref;
                setPointerType(pointerType);
            }
            return {
                onPointerDown: setPointerTypeRef,
                onPointerEnter: setPointerTypeRef,
                onMouseMove: handleReferenceEnterOrMove,
                onMouseEnter: handleReferenceEnterOrMove
            };
        }
    }["useClientPoint.useMemo[reference]"], [
        handleReferenceEnterOrMove
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useClientPoint.useMemo": ()=>enabled ? {
                reference
            } : {}
    }["useClientPoint.useMemo"], [
        enabled,
        reference
    ]);
}
const bubbleHandlerKeys = {
    pointerdown: 'onPointerDown',
    mousedown: 'onMouseDown',
    click: 'onClick'
};
const captureHandlerKeys = {
    pointerdown: 'onPointerDownCapture',
    mousedown: 'onMouseDownCapture',
    click: 'onClickCapture'
};
const normalizeProp = (normalizable)=>{
    var _normalizable$escapeK, _normalizable$outside;
    return {
        escapeKey: typeof normalizable === 'boolean' ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
        outsidePress: typeof normalizable === 'boolean' ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
    };
};
/**
 * Closes the floating element when a dismissal is requested — by default, when
 * the user presses the `escape` key or outside of the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */ function useDismiss(context, props) {
    if (props === void 0) {
        props = {};
    }
    const { open, onOpenChange, elements, dataRef } = context;
    const { enabled = true, escapeKey = true, outsidePress: unstable_outsidePress = true, outsidePressEvent = 'pointerdown', referencePress = false, referencePressEvent = 'pointerdown', ancestorScroll = false, bubbles, capture } = props;
    const tree = useFloatingTree();
    const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === 'function' ? unstable_outsidePress : ({
        "useDismiss.useEffectEvent[outsidePressFn]": ()=>false
    })["useDismiss.useEffectEvent[outsidePressFn]"]);
    const outsidePress = typeof unstable_outsidePress === 'function' ? outsidePressFn : unstable_outsidePress;
    const insideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const endedOrStartedInsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const { escapeKey: escapeKeyBubbles, outsidePress: outsidePressBubbles } = normalizeProp(bubbles);
    const { escapeKey: escapeKeyCapture, outsidePress: outsidePressCapture } = normalizeProp(capture);
    const isComposingRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const closeOnEscapeKeyDown = useEffectEvent({
        "useDismiss.useEffectEvent[closeOnEscapeKeyDown]": (event)=>{
            var _dataRef$current$floa;
            if (!open || !enabled || !escapeKey || event.key !== 'Escape') {
                return;
            }
            // Wait until IME is settled. Pressing `Escape` while composing should
            // close the compose menu, but not the floating element.
            if (isComposingRef.current) {
                return;
            }
            const nodeId = (_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.nodeId;
            const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
            if (!escapeKeyBubbles) {
                event.stopPropagation();
                if (children.length > 0) {
                    let shouldDismiss = true;
                    children.forEach({
                        "useDismiss.useEffectEvent[closeOnEscapeKeyDown]": (child)=>{
                            var _child$context;
                            if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
                                shouldDismiss = false;
                                return;
                            }
                        }
                    }["useDismiss.useEffectEvent[closeOnEscapeKeyDown]"]);
                    if (!shouldDismiss) {
                        return;
                    }
                }
            }
            onOpenChange(false, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactEvent"])(event) ? event.nativeEvent : event, 'escape-key');
        }
    }["useDismiss.useEffectEvent[closeOnEscapeKeyDown]"]);
    const closeOnEscapeKeyDownCapture = useEffectEvent({
        "useDismiss.useEffectEvent[closeOnEscapeKeyDownCapture]": (event)=>{
            var _getTarget2;
            const callback = {
                "useDismiss.useEffectEvent[closeOnEscapeKeyDownCapture].callback": ()=>{
                    var _getTarget;
                    closeOnEscapeKeyDown(event);
                    (_getTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event)) == null || _getTarget.removeEventListener('keydown', callback);
                }
            }["useDismiss.useEffectEvent[closeOnEscapeKeyDownCapture].callback"];
            (_getTarget2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event)) == null || _getTarget2.addEventListener('keydown', callback);
        }
    }["useDismiss.useEffectEvent[closeOnEscapeKeyDownCapture]"]);
    const closeOnPressOutside = useEffectEvent({
        "useDismiss.useEffectEvent[closeOnPressOutside]": (event)=>{
            var _dataRef$current$floa2;
            // Given developers can stop the propagation of the synthetic event,
            // we can only be confident with a positive value.
            const insideReactTree = insideReactTreeRef.current;
            insideReactTreeRef.current = false;
            // When click outside is lazy (`click` event), handle dragging.
            // Don't close if:
            // - The click started inside the floating element.
            // - The click ended inside the floating element.
            const endedOrStartedInside = endedOrStartedInsideRef.current;
            endedOrStartedInsideRef.current = false;
            if (outsidePressEvent === 'click' && endedOrStartedInside) {
                return;
            }
            if (insideReactTree) {
                return;
            }
            if (typeof outsidePress === 'function' && !outsidePress(event)) {
                return;
            }
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event);
            const inertSelector = "[" + createAttribute('inert') + "]";
            const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(elements.floating).querySelectorAll(inertSelector);
            let targetRootAncestor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target) ? target : null;
            while(targetRootAncestor && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(targetRootAncestor)){
                const nextParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(targetRootAncestor);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(nextParent) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(nextParent)) {
                    break;
                }
                targetRootAncestor = nextParent;
            }
            // Check if the click occurred on a third-party element injected after the
            // floating element rendered.
            if (markers.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRootElement"])(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
            !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(target, elements.floating) && // If the target root element contains none of the markers, then the
            // element was injected after the floating element rendered.
            Array.from(markers).every({
                "useDismiss.useEffectEvent[closeOnPressOutside]": (marker)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(targetRootAncestor, marker)
            }["useDismiss.useEffectEvent[closeOnPressOutside]"])) {
                return;
            }
            // Check if the click occurred on the scrollbar
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(target) && floating) {
                // In Firefox, `target.scrollWidth > target.clientWidth` for inline
                // elements.
                const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
                const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
                let xCond = canScrollY && event.offsetX > target.clientWidth;
                // In some browsers it is possible to change the <body> (or window)
                // scrollbar to the left side, but is very rare and is difficult to
                // check for. Plus, for modal dialogs with backdrops, it is more
                // important that the backdrop is checked but not so much the window.
                if (canScrollY) {
                    const isRTL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(target).direction === 'rtl';
                    if (isRTL) {
                        xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
                    }
                }
                if (xCond || canScrollX && event.offsetY > target.clientHeight) {
                    return;
                }
            }
            const nodeId = (_dataRef$current$floa2 = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa2.nodeId;
            const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some({
                "useDismiss.useEffectEvent[closeOnPressOutside]": (node)=>{
                    var _node$context;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEventTargetWithin"])(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
                }
            }["useDismiss.useEffectEvent[closeOnPressOutside]"]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEventTargetWithin"])(event, elements.floating) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEventTargetWithin"])(event, elements.domReference) || targetIsInsideChildren) {
                return;
            }
            const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
            if (children.length > 0) {
                let shouldDismiss = true;
                children.forEach({
                    "useDismiss.useEffectEvent[closeOnPressOutside]": (child)=>{
                        var _child$context2;
                        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
                            shouldDismiss = false;
                            return;
                        }
                    }
                }["useDismiss.useEffectEvent[closeOnPressOutside]"]);
                if (!shouldDismiss) {
                    return;
                }
            }
            onOpenChange(false, event, 'outside-press');
        }
    }["useDismiss.useEffectEvent[closeOnPressOutside]"]);
    const closeOnPressOutsideCapture = useEffectEvent({
        "useDismiss.useEffectEvent[closeOnPressOutsideCapture]": (event)=>{
            var _getTarget4;
            const callback = {
                "useDismiss.useEffectEvent[closeOnPressOutsideCapture].callback": ()=>{
                    var _getTarget3;
                    closeOnPressOutside(event);
                    (_getTarget3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
                }
            }["useDismiss.useEffectEvent[closeOnPressOutsideCapture].callback"];
            (_getTarget4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
        }
    }["useDismiss.useEffectEvent[closeOnPressOutsideCapture]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useDismiss.useEffect": ()=>{
            if (!open || !enabled) {
                return;
            }
            dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
            dataRef.current.__outsidePressBubbles = outsidePressBubbles;
            let compositionTimeout = -1;
            function onScroll(event) {
                onOpenChange(false, event, 'ancestor-scroll');
            }
            function handleCompositionStart() {
                window.clearTimeout(compositionTimeout);
                isComposingRef.current = true;
            }
            function handleCompositionEnd() {
                // Safari fires `compositionend` before `keydown`, so we need to wait
                // until the next tick to set `isComposing` to `false`.
                // https://bugs.webkit.org/show_bug.cgi?id=165004
                compositionTimeout = window.setTimeout({
                    "useDismiss.useEffect.handleCompositionEnd": ()=>{
                        isComposingRef.current = false;
                    }
                }["useDismiss.useEffect.handleCompositionEnd"], // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
                // Only apply to WebKit for the test to remain 0ms.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() ? 5 : 0);
            }
            const doc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(elements.floating);
            if (escapeKey) {
                doc.addEventListener('keydown', escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
                doc.addEventListener('compositionstart', handleCompositionStart);
                doc.addEventListener('compositionend', handleCompositionEnd);
            }
            outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
            let ancestors = [];
            if (ancestorScroll) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elements.domReference)) {
                    ancestors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(elements.domReference);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elements.floating)) {
                    ancestors = ancestors.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(elements.floating));
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(elements.reference) && elements.reference && elements.reference.contextElement) {
                    ancestors = ancestors.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(elements.reference.contextElement));
                }
            }
            // Ignore the visual viewport for scrolling dismissal (allow pinch-zoom)
            ancestors = ancestors.filter({
                "useDismiss.useEffect": (ancestor)=>{
                    var _doc$defaultView;
                    return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
                }
            }["useDismiss.useEffect"]);
            ancestors.forEach({
                "useDismiss.useEffect": (ancestor)=>{
                    ancestor.addEventListener('scroll', onScroll, {
                        passive: true
                    });
                }
            }["useDismiss.useEffect"]);
            return ({
                "useDismiss.useEffect": ()=>{
                    if (escapeKey) {
                        doc.removeEventListener('keydown', escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
                        doc.removeEventListener('compositionstart', handleCompositionStart);
                        doc.removeEventListener('compositionend', handleCompositionEnd);
                    }
                    outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
                    ancestors.forEach({
                        "useDismiss.useEffect": (ancestor)=>{
                            ancestor.removeEventListener('scroll', onScroll);
                        }
                    }["useDismiss.useEffect"]);
                    window.clearTimeout(compositionTimeout);
                }
            })["useDismiss.useEffect"];
        }
    }["useDismiss.useEffect"], [
        dataRef,
        elements,
        escapeKey,
        outsidePress,
        outsidePressEvent,
        open,
        onOpenChange,
        ancestorScroll,
        enabled,
        escapeKeyBubbles,
        outsidePressBubbles,
        closeOnEscapeKeyDown,
        escapeKeyCapture,
        closeOnEscapeKeyDownCapture,
        closeOnPressOutside,
        outsidePressCapture,
        closeOnPressOutsideCapture
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useDismiss.useEffect": ()=>{
            insideReactTreeRef.current = false;
        }
    }["useDismiss.useEffect"], [
        outsidePress,
        outsidePressEvent
    ]);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useDismiss.useMemo[reference]": ()=>({
                onKeyDown: closeOnEscapeKeyDown,
                [bubbleHandlerKeys[referencePressEvent]]: ({
                    "useDismiss.useMemo[reference]": (event)=>{
                        if (referencePress) {
                            onOpenChange(false, event.nativeEvent, 'reference-press');
                        }
                    }
                })["useDismiss.useMemo[reference]"]
            })
    }["useDismiss.useMemo[reference]"], [
        closeOnEscapeKeyDown,
        onOpenChange,
        referencePress,
        referencePressEvent
    ]);
    const floating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useDismiss.useMemo[floating]": ()=>({
                onKeyDown: closeOnEscapeKeyDown,
                onMouseDown () {
                    endedOrStartedInsideRef.current = true;
                },
                onMouseUp () {
                    endedOrStartedInsideRef.current = true;
                },
                [captureHandlerKeys[outsidePressEvent]]: ({
                    "useDismiss.useMemo[floating]": ()=>{
                        insideReactTreeRef.current = true;
                    }
                })["useDismiss.useMemo[floating]"]
            })
    }["useDismiss.useMemo[floating]"], [
        closeOnEscapeKeyDown,
        outsidePressEvent
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useDismiss.useMemo": ()=>enabled ? {
                reference,
                floating
            } : {}
    }["useDismiss.useMemo"], [
        enabled,
        reference,
        floating
    ]);
}
function useFloatingRootContext(options) {
    const { open = false, onOpenChange: onOpenChangeProp, elements: elementsProp } = options;
    const floatingId = useId();
    const dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({});
    const [events] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "useFloatingRootContext.useState": ()=>createPubSub()
    }["useFloatingRootContext.useState"]);
    const nested = useFloatingParentNodeId() != null;
    if ("TURBOPACK compile-time truthy", 1) {
        const optionDomReference = elementsProp.reference;
        if (optionDomReference && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(optionDomReference)) {
            error('Cannot pass a virtual element to the `elements.reference` option,', 'as it must be a real DOM element. Use `refs.setPositionReference()`', 'instead.');
        }
    }
    const [positionReference, setPositionReference] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(elementsProp.reference);
    const onOpenChange = useEffectEvent({
        "useFloatingRootContext.useEffectEvent[onOpenChange]": (open, event, reason)=>{
            dataRef.current.openEvent = open ? event : undefined;
            events.emit('openchange', {
                open,
                event,
                reason,
                nested
            });
            onOpenChangeProp == null || onOpenChangeProp(open, event, reason);
        }
    }["useFloatingRootContext.useEffectEvent[onOpenChange]"]);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFloatingRootContext.useMemo[refs]": ()=>({
                setPositionReference
            })
    }["useFloatingRootContext.useMemo[refs]"], []);
    const elements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFloatingRootContext.useMemo[elements]": ()=>({
                reference: positionReference || elementsProp.reference || null,
                floating: elementsProp.floating || null,
                domReference: elementsProp.reference
            })
    }["useFloatingRootContext.useMemo[elements]"], [
        positionReference,
        elementsProp.reference,
        elementsProp.floating
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFloatingRootContext.useMemo": ()=>({
                dataRef,
                open,
                onOpenChange,
                elements,
                events,
                floatingId,
                refs
            })
    }["useFloatingRootContext.useMemo"], [
        open,
        onOpenChange,
        elements,
        events,
        floatingId,
        refs
    ]);
}
/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { nodeId } = options;
    const internalRootContext = useFloatingRootContext({
        ...options,
        elements: {
            reference: null,
            floating: null,
            ...options.elements
        }
    });
    const rootContext = options.rootContext || internalRootContext;
    const computedElements = rootContext.elements;
    const [_domReference, setDomReference] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const [positionReference, _setPositionReference] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(null);
    const optionDomReference = computedElements == null ? void 0 : computedElements.reference;
    const domReference = optionDomReference || _domReference;
    const domReferenceRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const tree = useFloatingTree();
    index(()=>{
        if (domReference) {
            domReferenceRef.current = domReference;
        }
    }, [
        domReference
    ]);
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        ...options,
        elements: {
            ...computedElements,
            ...positionReference && {
                reference: positionReference
            }
        }
    });
    const setPositionReference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useFloating.useCallback[setPositionReference]": (node)=>{
            const computedPositionReference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(node) ? {
                getBoundingClientRect: ({
                    "useFloating.useCallback[setPositionReference]": ()=>node.getBoundingClientRect()
                })["useFloating.useCallback[setPositionReference]"],
                contextElement: node
            } : node;
            // Store the positionReference in state if the DOM reference is specified externally via the
            // `elements.reference` option. This ensures that it won't be overridden on future renders.
            _setPositionReference(computedPositionReference);
            position.refs.setReference(computedPositionReference);
        }
    }["useFloating.useCallback[setPositionReference]"], [
        position.refs
    ]);
    const setReference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useFloating.useCallback[setReference]": (node)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(node) || node === null) {
                domReferenceRef.current = node;
                setDomReference(node);
            }
            // Backwards-compatibility for passing a virtual element to `reference`
            // after it has set the DOM reference.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
            // `null` to support `positionReference` + an unstable `reference`
            // callback ref.
            node !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(node)) {
                position.refs.setReference(node);
            }
        }
    }["useFloating.useCallback[setReference]"], [
        position.refs
    ]);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFloating.useMemo[refs]": ()=>({
                ...position.refs,
                setReference,
                setPositionReference,
                domReference: domReferenceRef
            })
    }["useFloating.useMemo[refs]"], [
        position.refs,
        setReference,
        setPositionReference
    ]);
    const elements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFloating.useMemo[elements]": ()=>({
                ...position.elements,
                domReference: domReference
            })
    }["useFloating.useMemo[elements]"], [
        position.elements,
        domReference
    ]);
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFloating.useMemo[context]": ()=>({
                ...position,
                ...rootContext,
                refs,
                elements,
                nodeId
            })
    }["useFloating.useMemo[context]"], [
        position,
        refs,
        elements,
        nodeId,
        rootContext
    ]);
    index(()=>{
        rootContext.dataRef.current.floatingContext = context;
        const node = tree == null ? void 0 : tree.nodesRef.current.find((node)=>node.id === nodeId);
        if (node) {
            node.context = context;
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFloating.useMemo": ()=>({
                ...position,
                context,
                refs,
                elements
            })
    }["useFloating.useMemo"], [
        position,
        refs,
        elements,
        context
    ]);
}
/**
 * Opens the floating element while the reference element has focus, like CSS
 * `:focus`.
 * @see https://floating-ui.com/docs/useFocus
 */ function useFocus(context, props) {
    if (props === void 0) {
        props = {};
    }
    const { open, onOpenChange, events, dataRef, elements } = context;
    const { enabled = true, visibleOnly = true } = props;
    const blockFocusRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const timeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    const keyboardModalityRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(true);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useFocus.useEffect": ()=>{
            if (!enabled) return;
            const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(elements.domReference);
            // If the reference was focused and the user left the tab/window, and the
            // floating element was not open, the focus should be blocked when they
            // return to the tab/window.
            function onBlur() {
                if (!open && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(elements.domReference) && elements.domReference === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(elements.domReference))) {
                    blockFocusRef.current = true;
                }
            }
            function onKeyDown() {
                keyboardModalityRef.current = true;
            }
            win.addEventListener('blur', onBlur);
            win.addEventListener('keydown', onKeyDown, true);
            return ({
                "useFocus.useEffect": ()=>{
                    win.removeEventListener('blur', onBlur);
                    win.removeEventListener('keydown', onKeyDown, true);
                }
            })["useFocus.useEffect"];
        }
    }["useFocus.useEffect"], [
        elements.domReference,
        open,
        enabled
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useFocus.useEffect": ()=>{
            if (!enabled) return;
            function onOpenChange(_ref) {
                let { reason } = _ref;
                if (reason === 'reference-press' || reason === 'escape-key') {
                    blockFocusRef.current = true;
                }
            }
            events.on('openchange', onOpenChange);
            return ({
                "useFocus.useEffect": ()=>{
                    events.off('openchange', onOpenChange);
                }
            })["useFocus.useEffect"];
        }
    }["useFocus.useEffect"], [
        events,
        enabled
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useFocus.useEffect": ()=>{
            return ({
                "useFocus.useEffect": ()=>{
                    clearTimeout(timeoutRef.current);
                }
            })["useFocus.useEffect"];
        }
    }["useFocus.useEffect"], []);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFocus.useMemo[reference]": ()=>({
                onPointerDown (event) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualPointerEvent"])(event.nativeEvent)) return;
                    keyboardModalityRef.current = false;
                },
                onMouseLeave () {
                    blockFocusRef.current = false;
                },
                onFocus (event) {
                    if (blockFocusRef.current) return;
                    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event.nativeEvent);
                    if (visibleOnly && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(target)) {
                        try {
                            // Mac Safari unreliably matches `:focus-visible` on the reference
                            // if focus was outside the page initially - use the fallback
                            // instead.
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])()) throw Error();
                            if (!target.matches(':focus-visible')) return;
                        } catch (e) {
                            // Old browsers will throw an error when using `:focus-visible`.
                            if (!keyboardModalityRef.current && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeableElement"])(target)) {
                                return;
                            }
                        }
                    }
                    onOpenChange(true, event.nativeEvent, 'focus');
                },
                onBlur (event) {
                    blockFocusRef.current = false;
                    const relatedTarget = event.relatedTarget;
                    const nativeEvent = event.nativeEvent;
                    // Hit the non-modal focus management portal guard. Focus will be
                    // moved into the floating element immediately after.
                    const movedToFocusGuard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(relatedTarget) && relatedTarget.hasAttribute(createAttribute('focus-guard')) && relatedTarget.getAttribute('data-type') === 'outside';
                    // Wait for the window blur listener to fire.
                    timeoutRef.current = window.setTimeout({
                        "useFocus.useMemo[reference]": ()=>{
                            var _dataRef$current$floa;
                            const activeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])(elements.domReference ? elements.domReference.ownerDocument : document);
                            // Focus left the page, keep it open.
                            if (!relatedTarget && activeEl === elements.domReference) return;
                            // When focusing the reference element (e.g. regular click), then
                            // clicking into the floating element, prevent it from hiding.
                            // Note: it must be focusable, e.g. `tabindex="-1"`.
                            // We can not rely on relatedTarget to point to the correct element
                            // as it will only point to the shadow host of the newly focused element
                            // and not the element that actually has received focus if it is located
                            // inside a shadow root.
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])((_dataRef$current$floa = dataRef.current.floatingContext) == null ? void 0 : _dataRef$current$floa.refs.floating.current, activeEl) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(elements.domReference, activeEl) || movedToFocusGuard) {
                                return;
                            }
                            onOpenChange(false, nativeEvent, 'focus');
                        }
                    }["useFocus.useMemo[reference]"]);
                }
            })
    }["useFocus.useMemo[reference]"], [
        dataRef,
        elements.domReference,
        onOpenChange,
        visibleOnly
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useFocus.useMemo": ()=>enabled ? {
                reference
            } : {}
    }["useFocus.useMemo"], [
        enabled,
        reference
    ]);
}
const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
function mergeProps(userProps, propsList, elementKey) {
    const map = new Map();
    const isItem = elementKey === 'item';
    let domUserProps = userProps;
    if (isItem && userProps) {
        const { [ACTIVE_KEY]: _, [SELECTED_KEY]: __, ...validProps } = userProps;
        domUserProps = validProps;
    }
    return {
        ...elementKey === 'floating' && {
            tabIndex: -1,
            [FOCUSABLE_ATTRIBUTE]: ''
        },
        ...domUserProps,
        ...propsList.map((value)=>{
            const propsOrGetProps = value ? value[elementKey] : null;
            if (typeof propsOrGetProps === 'function') {
                return userProps ? propsOrGetProps(userProps) : null;
            }
            return propsOrGetProps;
        }).concat(userProps).reduce((acc, props)=>{
            if (!props) {
                return acc;
            }
            Object.entries(props).forEach((_ref)=>{
                let [key, value] = _ref;
                if (isItem && [
                    ACTIVE_KEY,
                    SELECTED_KEY
                ].includes(key)) {
                    return;
                }
                if (key.indexOf('on') === 0) {
                    if (!map.has(key)) {
                        map.set(key, []);
                    }
                    if (typeof value === 'function') {
                        var _map$get;
                        (_map$get = map.get(key)) == null || _map$get.push(value);
                        acc[key] = function() {
                            var _map$get2;
                            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                args[_key] = arguments[_key];
                            }
                            return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn)=>fn(...args)).find((val)=>val !== undefined);
                        };
                    }
                } else {
                    acc[key] = value;
                }
            });
            return acc;
        }, {})
    };
}
/**
 * Merges an array of interaction hooks' props into prop getters, allowing
 * event handler functions to be composed together without overwriting one
 * another.
 * @see https://floating-ui.com/docs/useInteractions
 */ function useInteractions(propsList) {
    if (propsList === void 0) {
        propsList = [];
    }
    const referenceDeps = propsList.map((key)=>key == null ? void 0 : key.reference);
    const floatingDeps = propsList.map((key)=>key == null ? void 0 : key.floating);
    const itemDeps = propsList.map((key)=>key == null ? void 0 : key.item);
    const getReferenceProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useInteractions.useCallback[getReferenceProps]": (userProps)=>mergeProps(userProps, propsList, 'reference')
    }["useInteractions.useCallback[getReferenceProps]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps);
    const getFloatingProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useInteractions.useCallback[getFloatingProps]": (userProps)=>mergeProps(userProps, propsList, 'floating')
    }["useInteractions.useCallback[getFloatingProps]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps);
    const getItemProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useInteractions.useCallback[getItemProps]": (userProps)=>mergeProps(userProps, propsList, 'item')
    }["useInteractions.useCallback[getItemProps]"], // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useInteractions.useMemo": ()=>({
                getReferenceProps,
                getFloatingProps,
                getItemProps
            })
    }["useInteractions.useMemo"], [
        getReferenceProps,
        getFloatingProps,
        getItemProps
    ]);
}
let isPreventScrollSupported = false;
function doSwitch(orientation, vertical, horizontal) {
    switch(orientation){
        case 'vertical':
            return vertical;
        case 'horizontal':
            return horizontal;
        default:
            return vertical || horizontal;
    }
}
function isMainOrientationKey(key, orientation) {
    const vertical = key === ARROW_UP || key === ARROW_DOWN;
    const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
    return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
    const vertical = key === ARROW_DOWN;
    const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
    return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key === ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
    const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
    const horizontal = key === ARROW_DOWN;
    return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
    const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
    const horizontal = key === ARROW_UP;
    return doSwitch(orientation, vertical, horizontal);
}
/**
 * Adds arrow key-based navigation of a list of items, either using real DOM
 * focus or virtual focus.
 * @see https://floating-ui.com/docs/useListNavigation
 */ function useListNavigation(context, props) {
    const { open, onOpenChange, elements } = context;
    const { listRef, activeIndex, onNavigate: unstable_onNavigate = ()=>{}, enabled = true, selectedIndex = null, allowEscape = false, loop = false, nested = false, rtl = false, virtual = false, focusItemOnOpen = 'auto', focusItemOnHover = true, openOnArrowKeyDown = true, disabledIndices = undefined, orientation = 'vertical', cols = 1, scrollItemIntoView = true, virtualItemRef, itemSizes, dense = false } = props;
    if ("TURBOPACK compile-time truthy", 1) {
        if (allowEscape) {
            if (!loop) {
                warn('`useListNavigation` looping must be enabled to allow escaping.');
            }
            if (!virtual) {
                warn('`useListNavigation` must be virtual to allow escaping.');
            }
        }
        if (orientation === 'vertical' && cols > 1) {
            warn('In grid list navigation mode (`cols` > 1), the `orientation` should', 'be either "horizontal" or "both".');
        }
    }
    const floatingFocusElement = getFloatingFocusElement(elements.floating);
    const floatingFocusElementRef = useLatestRef(floatingFocusElement);
    const parentId = useFloatingParentNodeId();
    const tree = useFloatingTree();
    const onNavigate = useEffectEvent(unstable_onNavigate);
    const focusItemOnOpenRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(focusItemOnOpen);
    const indexRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(selectedIndex != null ? selectedIndex : -1);
    const keyRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const isPointerModalityRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(true);
    const previousOnNavigateRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(onNavigate);
    const previousMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(!!elements.floating);
    const previousOpenRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(open);
    const forceSyncFocus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const forceScrollIntoViewRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const disabledIndicesRef = useLatestRef(disabledIndices);
    const latestOpenRef = useLatestRef(open);
    const scrollItemIntoViewRef = useLatestRef(scrollItemIntoView);
    const selectedIndexRef = useLatestRef(selectedIndex);
    const [activeId, setActiveId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState();
    const [virtualId, setVirtualId] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState();
    const focusItem = useEffectEvent({
        "useListNavigation.useEffectEvent[focusItem]": function(listRef, indexRef, forceScrollIntoView) {
            if (forceScrollIntoView === void 0) {
                forceScrollIntoView = false;
            }
            function runFocus(item) {
                if (virtual) {
                    setActiveId(item.id);
                    tree == null || tree.events.emit('virtualfocus', item);
                    if (virtualItemRef) {
                        virtualItemRef.current = item;
                    }
                } else {
                    enqueueFocus(item, {
                        preventScroll: true,
                        // Mac Safari does not move the virtual cursor unless the focus call
                        // is sync. However, for the very first focus call, we need to wait
                        // for the position to be ready in order to prevent unwanted
                        // scrolling. This means the virtual cursor will not move to the first
                        // item when first opening the floating element, but will on
                        // subsequent calls. `preventScroll` is supported in modern Safari,
                        // so we can use that instead.
                        // iOS Safari must be async or the first item will not be focused.
                        sync: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"])() ? isPreventScrollSupported || forceSyncFocus.current : false
                    });
                }
            }
            const initialItem = listRef.current[indexRef.current];
            if (initialItem) {
                runFocus(initialItem);
            }
            requestAnimationFrame({
                "useListNavigation.useEffectEvent[focusItem]": ()=>{
                    const waitedItem = listRef.current[indexRef.current] || initialItem;
                    if (!waitedItem) return;
                    if (!initialItem) {
                        runFocus(waitedItem);
                    }
                    const scrollIntoViewOptions = scrollItemIntoViewRef.current;
                    const shouldScrollIntoView = scrollIntoViewOptions && item && (forceScrollIntoView || !isPointerModalityRef.current);
                    if (shouldScrollIntoView) {
                        // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
                        // by all browsers.
                        waitedItem.scrollIntoView == null || waitedItem.scrollIntoView(typeof scrollIntoViewOptions === 'boolean' ? {
                            block: 'nearest',
                            inline: 'nearest'
                        } : scrollIntoViewOptions);
                    }
                }
            }["useListNavigation.useEffectEvent[focusItem]"]);
        }
    }["useListNavigation.useEffectEvent[focusItem]"]);
    index(()=>{
        document.createElement('div').focus({
            get preventScroll () {
                isPreventScrollSupported = true;
                return false;
            }
        });
    }, []);
    // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
    // element. Also, reset `activeIndex` upon closing the floating element.
    index(()=>{
        if (!enabled) return;
        if (open && elements.floating) {
            if (focusItemOnOpenRef.current && selectedIndex != null) {
                // Regardless of the pointer modality, we want to ensure the selected
                // item comes into view when the floating element is opened.
                forceScrollIntoViewRef.current = true;
                indexRef.current = selectedIndex;
                onNavigate(selectedIndex);
            }
        } else if (previousMountedRef.current) {
            // Since the user can specify `onNavigate` conditionally
            // (onNavigate: open ? setActiveIndex : setSelectedIndex),
            // we store and call the previous function.
            indexRef.current = -1;
            previousOnNavigateRef.current(null);
        }
    }, [
        enabled,
        open,
        elements.floating,
        selectedIndex,
        onNavigate
    ]);
    // Sync `activeIndex` to be the focused item while the floating element is
    // open.
    index(()=>{
        if (!enabled) return;
        if (open && elements.floating) {
            if (activeIndex == null) {
                forceSyncFocus.current = false;
                if (selectedIndexRef.current != null) {
                    return;
                }
                // Reset while the floating element was open (e.g. the list changed).
                if (previousMountedRef.current) {
                    indexRef.current = -1;
                    focusItem(listRef, indexRef);
                }
                // Initial sync.
                if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
                    let runs = 0;
                    const waitForListPopulated = ()=>{
                        if (listRef.current[0] == null) {
                            // Avoid letting the browser paint if possible on the first try,
                            // otherwise use rAF. Don't try more than twice, since something
                            // is wrong otherwise.
                            if (runs < 2) {
                                const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                                scheduler(waitForListPopulated);
                            }
                            runs++;
                        } else {
                            indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
                            keyRef.current = null;
                            onNavigate(indexRef.current);
                        }
                    };
                    waitForListPopulated();
                }
            } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
                indexRef.current = activeIndex;
                focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
                forceScrollIntoViewRef.current = false;
            }
        }
    }, [
        enabled,
        open,
        elements.floating,
        activeIndex,
        selectedIndexRef,
        nested,
        listRef,
        orientation,
        rtl,
        onNavigate,
        focusItem,
        disabledIndicesRef
    ]);
    // Ensure the parent floating element has focus when a nested child closes
    // to allow arrow key navigation to work after the pointer leaves the child.
    index(()=>{
        var _nodes$find;
        if (!enabled || elements.floating || !tree || virtual || !previousMountedRef.current) {
            return;
        }
        const nodes = tree.nodesRef.current;
        const parent = (_nodes$find = nodes.find((node)=>node.id === parentId)) == null || (_nodes$find = _nodes$find.context) == null ? void 0 : _nodes$find.elements.floating;
        const activeEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])(elements.floating));
        const treeContainsActiveEl = nodes.some((node)=>node.context && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(node.context.elements.floating, activeEl));
        if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
            parent.focus({
                preventScroll: true
            });
        }
    }, [
        enabled,
        elements.floating,
        tree,
        parentId,
        virtual
    ]);
    index(()=>{
        if (!enabled) return;
        if (!tree) return;
        if (!virtual) return;
        if (parentId) return;
        function handleVirtualFocus(item) {
            setVirtualId(item.id);
            if (virtualItemRef) {
                virtualItemRef.current = item;
            }
        }
        tree.events.on('virtualfocus', handleVirtualFocus);
        return ()=>{
            tree.events.off('virtualfocus', handleVirtualFocus);
        };
    }, [
        enabled,
        tree,
        virtual,
        parentId,
        virtualItemRef
    ]);
    index(()=>{
        previousOnNavigateRef.current = onNavigate;
        previousMountedRef.current = !!elements.floating;
    });
    index(()=>{
        if (!open) {
            keyRef.current = null;
        }
    }, [
        open
    ]);
    index(()=>{
        previousOpenRef.current = open;
    }, [
        open
    ]);
    const hasActiveIndex = activeIndex != null;
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useListNavigation.useMemo[item]": ()=>{
            function syncCurrentTarget(currentTarget) {
                if (!open) return;
                const index = listRef.current.indexOf(currentTarget);
                if (index !== -1) {
                    onNavigate(index);
                }
            }
            const props = {
                onFocus (_ref) {
                    let { currentTarget } = _ref;
                    syncCurrentTarget(currentTarget);
                },
                onClick: {
                    "useListNavigation.useMemo[item]": (_ref2)=>{
                        let { currentTarget } = _ref2;
                        return currentTarget.focus({
                            preventScroll: true
                        });
                    }
                }["useListNavigation.useMemo[item]"],
                // Safari
                ...focusItemOnHover && {
                    onMouseMove (_ref3) {
                        let { currentTarget } = _ref3;
                        syncCurrentTarget(currentTarget);
                    },
                    onPointerLeave (_ref4) {
                        let { pointerType } = _ref4;
                        if (!isPointerModalityRef.current || pointerType === 'touch') {
                            return;
                        }
                        indexRef.current = -1;
                        focusItem(listRef, indexRef);
                        onNavigate(null);
                        if (!virtual) {
                            enqueueFocus(floatingFocusElementRef.current, {
                                preventScroll: true
                            });
                        }
                    }
                }
            };
            return props;
        }
    }["useListNavigation.useMemo[item]"], [
        open,
        floatingFocusElementRef,
        focusItem,
        focusItemOnHover,
        listRef,
        onNavigate,
        virtual
    ]);
    const commonOnKeyDown = useEffectEvent({
        "useListNavigation.useEffectEvent[commonOnKeyDown]": (event)=>{
            isPointerModalityRef.current = false;
            forceSyncFocus.current = true;
            // When composing a character, Chrome fires ArrowDown twice. Firefox/Safari
            // don't appear to suffer from this. `event.isComposing` is avoided due to
            // Safari not supporting it properly (although it's not needed in the first
            // place for Safari, just avoiding any possible issues).
            if (event.which === 229) {
                return;
            }
            // If the floating element is animating out, ignore navigation. Otherwise,
            // the `activeIndex` gets set to 0 despite not being open so the next time
            // the user ArrowDowns, the first item won't be focused.
            if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
                return;
            }
            if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                onOpenChange(false, event.nativeEvent, 'list-navigation');
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(elements.domReference) && !virtual) {
                    elements.domReference.focus();
                }
                return;
            }
            const currentIndex = indexRef.current;
            const minIndex = getMinIndex(listRef, disabledIndices);
            const maxIndex = getMaxIndex(listRef, disabledIndices);
            if (event.key === 'Home') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                indexRef.current = minIndex;
                onNavigate(indexRef.current);
            }
            if (event.key === 'End') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                indexRef.current = maxIndex;
                onNavigate(indexRef.current);
            }
            // Grid navigation.
            if (cols > 1) {
                const sizes = itemSizes || Array.from({
                    length: listRef.current.length
                }, {
                    "useListNavigation.useEffectEvent[commonOnKeyDown]": ()=>({
                            width: 1,
                            height: 1
                        })
                }["useListNavigation.useEffectEvent[commonOnKeyDown]"]);
                // To calculate movements on the grid, we use hypothetical cell indices
                // as if every item was 1x1, then convert back to real indices.
                const cellMap = buildCellMap(sizes, cols, dense);
                const minGridIndex = cellMap.findIndex({
                    "useListNavigation.useEffectEvent[commonOnKeyDown].minGridIndex": (index)=>index != null && !isDisabled(listRef.current, index, disabledIndices)
                }["useListNavigation.useEffectEvent[commonOnKeyDown].minGridIndex"]);
                // last enabled index
                const maxGridIndex = cellMap.reduce({
                    "useListNavigation.useEffectEvent[commonOnKeyDown].maxGridIndex": (foundIndex, index, cellIndex)=>index != null && !isDisabled(listRef.current, index, disabledIndices) ? cellIndex : foundIndex
                }["useListNavigation.useEffectEvent[commonOnKeyDown].maxGridIndex"], -1);
                const index = cellMap[getGridNavigatedIndex({
                    current: cellMap.map({
                        "useListNavigation.useEffectEvent[commonOnKeyDown]": (itemIndex)=>itemIndex != null ? listRef.current[itemIndex] : null
                    }["useListNavigation.useEffectEvent[commonOnKeyDown]"])
                }, {
                    event,
                    orientation,
                    loop,
                    cols,
                    // treat undefined (empty grid spaces) as disabled indices so we
                    // don't end up in them
                    disabledIndices: getCellIndices([
                        ...disabledIndices || listRef.current.map({
                            "useListNavigation.useEffectEvent[commonOnKeyDown]": (_, index)=>isDisabled(listRef.current, index) ? index : undefined
                        }["useListNavigation.useEffectEvent[commonOnKeyDown]"]),
                        undefined
                    ], cellMap),
                    minIndex: minGridIndex,
                    maxIndex: maxGridIndex,
                    prevIndex: getCellIndexOfCorner(indexRef.current > maxIndex ? minIndex : indexRef.current, sizes, cellMap, cols, // use a corner matching the edge closest to the direction
                    // we're moving in so we don't end up in the same item. Prefer
                    // top/left over bottom/right.
                    event.key === ARROW_DOWN ? 'bl' : event.key === ARROW_RIGHT ? 'tr' : 'tl'),
                    stopEvent: true
                })];
                if (index != null) {
                    indexRef.current = index;
                    onNavigate(indexRef.current);
                }
                if (orientation === 'both') {
                    return;
                }
            }
            if (isMainOrientationKey(event.key, orientation)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                // Reset the index if no item is focused.
                if (open && !virtual && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["activeElement"])(event.currentTarget.ownerDocument) === event.currentTarget) {
                    indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
                    onNavigate(indexRef.current);
                    return;
                }
                if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
                    if (loop) {
                        indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
                            startingIndex: currentIndex,
                            disabledIndices
                        });
                    } else {
                        indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
                            startingIndex: currentIndex,
                            disabledIndices
                        }));
                    }
                } else {
                    if (loop) {
                        indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
                            startingIndex: currentIndex,
                            decrement: true,
                            disabledIndices
                        });
                    } else {
                        indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
                            startingIndex: currentIndex,
                            decrement: true,
                            disabledIndices
                        }));
                    }
                }
                if (isIndexOutOfBounds(listRef, indexRef.current)) {
                    onNavigate(null);
                } else {
                    onNavigate(indexRef.current);
                }
            }
        }
    }["useListNavigation.useEffectEvent[commonOnKeyDown]"]);
    const ariaActiveDescendantProp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useListNavigation.useMemo[ariaActiveDescendantProp]": ()=>{
            return virtual && open && hasActiveIndex && {
                'aria-activedescendant': virtualId || activeId
            };
        }
    }["useListNavigation.useMemo[ariaActiveDescendantProp]"], [
        virtual,
        open,
        hasActiveIndex,
        virtualId,
        activeId
    ]);
    const floating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useListNavigation.useMemo[floating]": ()=>{
            return {
                'aria-orientation': orientation === 'both' ? undefined : orientation,
                ...!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypeableCombobox"])(elements.domReference) && ariaActiveDescendantProp,
                onKeyDown: commonOnKeyDown,
                onPointerMove () {
                    isPointerModalityRef.current = true;
                }
            };
        }
    }["useListNavigation.useMemo[floating]"], [
        ariaActiveDescendantProp,
        commonOnKeyDown,
        elements.domReference,
        orientation
    ]);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useListNavigation.useMemo[reference]": ()=>{
            function checkVirtualMouse(event) {
                if (focusItemOnOpen === 'auto' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualClick"])(event.nativeEvent)) {
                    focusItemOnOpenRef.current = true;
                }
            }
            function checkVirtualPointer(event) {
                // `pointerdown` fires first, reset the state then perform the checks.
                focusItemOnOpenRef.current = focusItemOnOpen;
                if (focusItemOnOpen === 'auto' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVirtualPointerEvent"])(event.nativeEvent)) {
                    focusItemOnOpenRef.current = true;
                }
            }
            return {
                ...ariaActiveDescendantProp,
                onKeyDown (event) {
                    isPointerModalityRef.current = false;
                    const isArrowKey = event.key.startsWith('Arrow');
                    const isHomeOrEndKey = [
                        'Home',
                        'End'
                    ].includes(event.key);
                    const isMoveKey = isArrowKey || isHomeOrEndKey;
                    const isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
                    const isCrossCloseKey = isCrossOrientationCloseKey(event.key, orientation, rtl);
                    const isMainKey = isMainOrientationKey(event.key, orientation);
                    const isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === 'Enter' || event.key.trim() === '';
                    if (virtual && open) {
                        const rootNode = tree == null ? void 0 : tree.nodesRef.current.find({
                            "useListNavigation.useMemo[reference]": (node)=>node.parentId == null
                        }["useListNavigation.useMemo[reference]"]);
                        const deepestNode = tree && rootNode ? getDeepestNode(tree.nodesRef.current, rootNode.id) : null;
                        if (isMoveKey && deepestNode && virtualItemRef) {
                            const eventObject = new KeyboardEvent('keydown', {
                                key: event.key,
                                bubbles: true
                            });
                            if (isCrossOpenKey || isCrossCloseKey) {
                                var _deepestNode$context, _deepestNode$context2;
                                const isCurrentTarget = ((_deepestNode$context = deepestNode.context) == null ? void 0 : _deepestNode$context.elements.domReference) === event.currentTarget;
                                const dispatchItem = isCrossCloseKey && !isCurrentTarget ? (_deepestNode$context2 = deepestNode.context) == null ? void 0 : _deepestNode$context2.elements.domReference : isCrossOpenKey ? listRef.current.find({
                                    "useListNavigation.useMemo[reference]": (item)=>(item == null ? void 0 : item.id) === activeId
                                }["useListNavigation.useMemo[reference]"]) : null;
                                if (dispatchItem) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                                    dispatchItem.dispatchEvent(eventObject);
                                    setVirtualId(undefined);
                                }
                            }
                            if ((isMainKey || isHomeOrEndKey) && deepestNode.context) {
                                if (deepestNode.context.open && deepestNode.parentId && event.currentTarget !== deepestNode.context.elements.domReference) {
                                    var _deepestNode$context$;
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                                    (_deepestNode$context$ = deepestNode.context.elements.domReference) == null || _deepestNode$context$.dispatchEvent(eventObject);
                                    return;
                                }
                            }
                        }
                        return commonOnKeyDown(event);
                    }
                    // If a floating element should not open on arrow key down, avoid
                    // setting `activeIndex` while it's closed.
                    if (!open && !openOnArrowKeyDown && isArrowKey) {
                        return;
                    }
                    if (isNavigationKey) {
                        keyRef.current = nested && isMainKey ? null : event.key;
                    }
                    if (nested) {
                        if (isCrossOpenKey) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                            if (open) {
                                indexRef.current = getMinIndex(listRef, disabledIndicesRef.current);
                                onNavigate(indexRef.current);
                            } else {
                                onOpenChange(true, event.nativeEvent, 'list-navigation');
                            }
                        }
                        return;
                    }
                    if (isMainKey) {
                        if (selectedIndex != null) {
                            indexRef.current = selectedIndex;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                        if (!open && openOnArrowKeyDown) {
                            onOpenChange(true, event.nativeEvent, 'list-navigation');
                        } else {
                            commonOnKeyDown(event);
                        }
                        if (open) {
                            onNavigate(indexRef.current);
                        }
                    }
                },
                onFocus () {
                    if (open && !virtual) {
                        onNavigate(null);
                    }
                },
                onPointerDown: checkVirtualPointer,
                onMouseDown: checkVirtualMouse,
                onClick: checkVirtualMouse
            };
        }
    }["useListNavigation.useMemo[reference]"], [
        activeId,
        ariaActiveDescendantProp,
        commonOnKeyDown,
        disabledIndicesRef,
        focusItemOnOpen,
        listRef,
        nested,
        onNavigate,
        onOpenChange,
        open,
        openOnArrowKeyDown,
        orientation,
        rtl,
        selectedIndex,
        tree,
        virtual,
        virtualItemRef
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useListNavigation.useMemo": ()=>enabled ? {
                reference,
                floating,
                item
            } : {}
    }["useListNavigation.useMemo"], [
        enabled,
        reference,
        floating,
        item
    ]);
}
const componentRoleToAriaRoleMap = /*#__PURE__*/ new Map([
    [
        'select',
        'listbox'
    ],
    [
        'combobox',
        'listbox'
    ],
    [
        'label',
        false
    ]
]);
/**
 * Adds base screen reader props to the reference and floating elements for a
 * given floating element `role`.
 * @see https://floating-ui.com/docs/useRole
 */ function useRole(context, props) {
    var _componentRoleToAriaR;
    if (props === void 0) {
        props = {};
    }
    const { open, floatingId } = context;
    const { enabled = true, role = 'dialog' } = props;
    const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
    const referenceId = useId();
    const parentId = useFloatingParentNodeId();
    const isNested = parentId != null;
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useRole.useMemo[reference]": ()=>{
            if (ariaRole === 'tooltip' || role === 'label') {
                return {
                    ["aria-" + (role === 'label' ? 'labelledby' : 'describedby')]: open ? floatingId : undefined
                };
            }
            return {
                'aria-expanded': open ? 'true' : 'false',
                'aria-haspopup': ariaRole === 'alertdialog' ? 'dialog' : ariaRole,
                'aria-controls': open ? floatingId : undefined,
                ...ariaRole === 'listbox' && {
                    role: 'combobox'
                },
                ...ariaRole === 'menu' && {
                    id: referenceId
                },
                ...ariaRole === 'menu' && isNested && {
                    role: 'menuitem'
                },
                ...role === 'select' && {
                    'aria-autocomplete': 'none'
                },
                ...role === 'combobox' && {
                    'aria-autocomplete': 'list'
                }
            };
        }
    }["useRole.useMemo[reference]"], [
        ariaRole,
        floatingId,
        isNested,
        open,
        referenceId,
        role
    ]);
    const floating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useRole.useMemo[floating]": ()=>{
            const floatingProps = {
                id: floatingId,
                ...ariaRole && {
                    role: ariaRole
                }
            };
            if (ariaRole === 'tooltip' || role === 'label') {
                return floatingProps;
            }
            return {
                ...floatingProps,
                ...ariaRole === 'menu' && {
                    'aria-labelledby': referenceId
                }
            };
        }
    }["useRole.useMemo[floating]"], [
        ariaRole,
        floatingId,
        referenceId,
        role
    ]);
    const item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useRole.useCallback[item]": (_ref)=>{
            let { active, selected } = _ref;
            const commonProps = {
                role: 'option',
                ...active && {
                    id: floatingId + "-option"
                }
            };
            // For `menu`, we are unable to tell if the item is a `menuitemradio`
            // or `menuitemcheckbox`. For backwards-compatibility reasons, also
            // avoid defaulting to `menuitem` as it may overwrite custom role props.
            switch(role){
                case 'select':
                    return {
                        ...commonProps,
                        'aria-selected': active && selected
                    };
                case 'combobox':
                    {
                        return {
                            ...commonProps,
                            ...active && {
                                'aria-selected': true
                            }
                        };
                    }
            }
            return {};
        }
    }["useRole.useCallback[item]"], [
        floatingId,
        role
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useRole.useMemo": ()=>enabled ? {
                reference,
                floating,
                item
            } : {}
    }["useRole.useMemo"], [
        enabled,
        reference,
        floating,
        item
    ]);
}
// Converts a JS style key like `backgroundColor` to a CSS transition-property
// like `background-color`.
const camelCaseToKebabCase = (str)=>str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs)=>(ofs ? '-' : '') + $.toLowerCase());
function execWithArgsOrReturn(valueOrFn, args) {
    return typeof valueOrFn === 'function' ? valueOrFn(args) : valueOrFn;
}
function useDelayUnmount(open, durationMs) {
    const [isMounted, setIsMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(open);
    if (open && !isMounted) {
        setIsMounted(true);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useDelayUnmount.useEffect": ()=>{
            if (!open && isMounted) {
                const timeout = setTimeout({
                    "useDelayUnmount.useEffect.timeout": ()=>setIsMounted(false)
                }["useDelayUnmount.useEffect.timeout"], durationMs);
                return ({
                    "useDelayUnmount.useEffect": ()=>clearTimeout(timeout)
                })["useDelayUnmount.useEffect"];
            }
        }
    }["useDelayUnmount.useEffect"], [
        open,
        isMounted,
        durationMs
    ]);
    return isMounted;
}
/**
 * Provides a status string to apply CSS transitions to a floating element,
 * correctly handling placement-aware transitions.
 * @see https://floating-ui.com/docs/useTransition#usetransitionstatus
 */ function useTransitionStatus(context, props) {
    if (props === void 0) {
        props = {};
    }
    const { open, elements: { floating } } = context;
    const { duration = 250 } = props;
    const isNumberDuration = typeof duration === 'number';
    const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
    const [status, setStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState('unmounted');
    const isMounted = useDelayUnmount(open, closeDuration);
    if (!isMounted && status === 'close') {
        setStatus('unmounted');
    }
    index(()=>{
        if (!floating) return;
        if (open) {
            setStatus('initial');
            const frame = requestAnimationFrame(()=>{
                setStatus('open');
            });
            return ()=>{
                cancelAnimationFrame(frame);
            };
        }
        setStatus('close');
    }, [
        open,
        floating
    ]);
    return {
        isMounted,
        status
    };
}
/**
 * Provides styles to apply CSS transitions to a floating element, correctly
 * handling placement-aware transitions. Wrapper around `useTransitionStatus`.
 * @see https://floating-ui.com/docs/useTransition#usetransitionstyles
 */ function useTransitionStyles(context, props) {
    if (props === void 0) {
        props = {};
    }
    const { initial: unstable_initial = {
        opacity: 0
    }, open: unstable_open, close: unstable_close, common: unstable_common, duration = 250 } = props;
    const placement = context.placement;
    const side = placement.split('-')[0];
    const fnArgs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useTransitionStyles.useMemo[fnArgs]": ()=>({
                side,
                placement
            })
    }["useTransitionStyles.useMemo[fnArgs]"], [
        side,
        placement
    ]);
    const isNumberDuration = typeof duration === 'number';
    const openDuration = (isNumberDuration ? duration : duration.open) || 0;
    const closeDuration = (isNumberDuration ? duration : duration.close) || 0;
    const [styles, setStyles] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "useTransitionStyles.useState": ()=>({
                ...execWithArgsOrReturn(unstable_common, fnArgs),
                ...execWithArgsOrReturn(unstable_initial, fnArgs)
            })
    }["useTransitionStyles.useState"]);
    const { isMounted, status } = useTransitionStatus(context, {
        duration
    });
    const initialRef = useLatestRef(unstable_initial);
    const openRef = useLatestRef(unstable_open);
    const closeRef = useLatestRef(unstable_close);
    const commonRef = useLatestRef(unstable_common);
    index(()=>{
        const initialStyles = execWithArgsOrReturn(initialRef.current, fnArgs);
        const closeStyles = execWithArgsOrReturn(closeRef.current, fnArgs);
        const commonStyles = execWithArgsOrReturn(commonRef.current, fnArgs);
        const openStyles = execWithArgsOrReturn(openRef.current, fnArgs) || Object.keys(initialStyles).reduce((acc, key)=>{
            acc[key] = '';
            return acc;
        }, {});
        if (status === 'initial') {
            setStyles((styles)=>({
                    transitionProperty: styles.transitionProperty,
                    ...commonStyles,
                    ...initialStyles
                }));
        }
        if (status === 'open') {
            setStyles({
                transitionProperty: Object.keys(openStyles).map(camelCaseToKebabCase).join(','),
                transitionDuration: openDuration + "ms",
                ...commonStyles,
                ...openStyles
            });
        }
        if (status === 'close') {
            const styles = closeStyles || initialStyles;
            setStyles({
                transitionProperty: Object.keys(styles).map(camelCaseToKebabCase).join(','),
                transitionDuration: closeDuration + "ms",
                ...commonStyles,
                ...styles
            });
        }
    }, [
        closeDuration,
        closeRef,
        initialRef,
        openRef,
        commonRef,
        openDuration,
        status,
        fnArgs
    ]);
    return {
        isMounted,
        styles
    };
}
/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */ function useTypeahead(context, props) {
    var _ref;
    const { open, dataRef } = context;
    const { listRef, activeIndex, onMatch: unstable_onMatch, onTypingChange: unstable_onTypingChange, enabled = true, findMatch = null, resetMs = 750, ignoreKeys = [], selectedIndex = null } = props;
    const timeoutIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef();
    const stringRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef('');
    const prevIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
    const matchIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const onMatch = useEffectEvent(unstable_onMatch);
    const onTypingChange = useEffectEvent(unstable_onTypingChange);
    const findMatchRef = useLatestRef(findMatch);
    const ignoreKeysRef = useLatestRef(ignoreKeys);
    index(()=>{
        if (open) {
            clearTimeout(timeoutIdRef.current);
            matchIndexRef.current = null;
            stringRef.current = '';
        }
    }, [
        open
    ]);
    index(()=>{
        // Sync arrow key navigation but not typeahead navigation.
        if (open && stringRef.current === '') {
            var _ref2;
            prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
        }
    }, [
        open,
        selectedIndex,
        activeIndex
    ]);
    const setTypingChange = useEffectEvent({
        "useTypeahead.useEffectEvent[setTypingChange]": (value)=>{
            if (value) {
                if (!dataRef.current.typing) {
                    dataRef.current.typing = value;
                    onTypingChange(value);
                }
            } else {
                if (dataRef.current.typing) {
                    dataRef.current.typing = value;
                    onTypingChange(value);
                }
            }
        }
    }["useTypeahead.useEffectEvent[setTypingChange]"]);
    const onKeyDown = useEffectEvent({
        "useTypeahead.useEffectEvent[onKeyDown]": (event)=>{
            function getMatchingIndex(list, orderedList, string) {
                const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find({
                    "useTypeahead.useEffectEvent[onKeyDown].getMatchingIndex": (text)=>(text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0
                }["useTypeahead.useEffectEvent[onKeyDown].getMatchingIndex"]);
                return str ? list.indexOf(str) : -1;
            }
            const listContent = listRef.current;
            if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
                if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) {
                    setTypingChange(false);
                } else if (event.key === ' ') {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                }
            }
            if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key.
            event.key.length !== 1 || // Modifier key.
            event.ctrlKey || event.metaKey || event.altKey) {
                return;
            }
            if (open && event.key !== ' ') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopEvent"])(event);
                setTypingChange(true);
            }
            // Bail out if the list contains a word like "llama" or "aaron". TODO:
            // allow it in this case, too.
            const allowRapidSuccessionOfFirstLetter = listContent.every({
                "useTypeahead.useEffectEvent[onKeyDown].allowRapidSuccessionOfFirstLetter": (text)=>{
                    var _text$, _text$2;
                    return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
                }
            }["useTypeahead.useEffectEvent[onKeyDown].allowRapidSuccessionOfFirstLetter"]);
            // Allows the user to cycle through items that start with the same letter
            // in rapid succession.
            if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
                stringRef.current = '';
                prevIndexRef.current = matchIndexRef.current;
            }
            stringRef.current += event.key;
            clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = setTimeout({
                "useTypeahead.useEffectEvent[onKeyDown]": ()=>{
                    stringRef.current = '';
                    prevIndexRef.current = matchIndexRef.current;
                    setTypingChange(false);
                }
            }["useTypeahead.useEffectEvent[onKeyDown]"], resetMs);
            const prevIndex = prevIndexRef.current;
            const index = getMatchingIndex(listContent, [
                ...listContent.slice((prevIndex || 0) + 1),
                ...listContent.slice(0, (prevIndex || 0) + 1)
            ], stringRef.current);
            if (index !== -1) {
                onMatch(index);
                matchIndexRef.current = index;
            } else if (event.key !== ' ') {
                stringRef.current = '';
                setTypingChange(false);
            }
        }
    }["useTypeahead.useEffectEvent[onKeyDown]"]);
    const reference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useTypeahead.useMemo[reference]": ()=>({
                onKeyDown
            })
    }["useTypeahead.useMemo[reference]"], [
        onKeyDown
    ]);
    const floating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useTypeahead.useMemo[floating]": ()=>{
            return {
                onKeyDown,
                onKeyUp (event) {
                    if (event.key === ' ') {
                        setTypingChange(false);
                    }
                }
            };
        }
    }["useTypeahead.useMemo[floating]"], [
        onKeyDown,
        setTypingChange
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useTypeahead.useMemo": ()=>enabled ? {
                reference,
                floating
            } : {}
    }["useTypeahead.useMemo"], [
        enabled,
        reference,
        floating
    ]);
}
function getArgsWithCustomFloatingHeight(state, height) {
    return {
        ...state,
        rects: {
            ...state.rects,
            floating: {
                ...state.rects.floating,
                height
            }
        }
    };
}
/**
 * Positions the floating element such that an inner element inside of it is
 * anchored to the reference element.
 * @see https://floating-ui.com/docs/inner
 */ const inner = (props)=>({
        name: 'inner',
        options: props,
        async fn (state) {
            const { listRef, overflowRef, onFallbackChange, offset: innerOffset = 0, index = 0, minItemsVisible = 4, referenceOverflowThreshold = 0, scrollRef, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(props, state);
            const { rects, elements: { floating } } = state;
            const item = listRef.current[index];
            const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
            // Valid combinations:
            // 1. Floating element is the scrollRef and has a border (default)
            // 2. Floating element is not the scrollRef, floating element has a border
            // 3. Floating element is not the scrollRef, scrollRef has a border
            // Floating > {...getFloatingProps()} wrapper > scrollRef > items is not
            // allowed as VoiceOver doesn't work.
            const clientTop = floating.clientTop || scrollEl.clientTop;
            const floatingIsBordered = floating.clientTop !== 0;
            const scrollElIsBordered = scrollEl.clientTop !== 0;
            const floatingIsScrollEl = floating === scrollEl;
            if ("TURBOPACK compile-time truthy", 1) {
                if (!state.placement.startsWith('bottom')) {
                    warn('`placement` side must be "bottom" when using the `inner`', 'middleware.');
                }
            }
            if (!item) {
                return {};
            }
            const nextArgs = {
                ...state,
                ...await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$2d$dom$40$2$2e$1$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
            };
            const overflow = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$6$2e$11$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"])(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
            const refOverflow = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$6$2e$11$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"])(nextArgs, {
                ...detectOverflowOptions,
                elementContext: 'reference'
            });
            const diffY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(0, overflow.top);
            const nextY = nextArgs.y + diffY;
            const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
            const rounder = isScrollable ? (v)=>v : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"];
            const maxHeight = rounder((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(0, overflow.bottom)));
            scrollEl.style.maxHeight = maxHeight + "px";
            scrollEl.scrollTop = diffY;
            // There is not enough space, fallback to standard anchored positioning
            if (onFallbackChange) {
                const shouldFallback = isScrollable && scrollEl.offsetHeight < item.offsetHeight * minItemsVisible - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>onFallbackChange(shouldFallback));
            }
            if (overflowRef) {
                overflowRef.current = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$dom$40$1$2e$6$2e$11$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"])(getArgsWithCustomFloatingHeight({
                    ...nextArgs,
                    y: nextY
                }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
            }
            return {
                y: nextY
            };
        }
    });
/**
 * Changes the `inner` middleware's `offset` upon a `wheel` event to
 * expand the floating element's height, revealing more list items.
 * @see https://floating-ui.com/docs/inner
 */ function useInnerOffset(context, props) {
    const { open, elements } = context;
    const { enabled = true, overflowRef, scrollRef, onChange: unstable_onChange } = props;
    const onChange = useEffectEvent(unstable_onChange);
    const controlledScrollingRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const prevScrollTopRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    const initialOverflowRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useInnerOffset.useEffect": ()=>{
            if (!enabled) return;
            function onWheel(e) {
                if (e.ctrlKey || !el || overflowRef.current == null) {
                    return;
                }
                const dY = e.deltaY;
                const isAtTop = overflowRef.current.top >= -0.5;
                const isAtBottom = overflowRef.current.bottom >= -0.5;
                const remainingScroll = el.scrollHeight - el.clientHeight;
                const sign = dY < 0 ? -1 : 1;
                const method = dY < 0 ? 'max' : 'min';
                if (el.scrollHeight <= el.clientHeight) {
                    return;
                }
                if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
                    e.preventDefault();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])({
                        "useInnerOffset.useEffect.onWheel": ()=>{
                            onChange({
                                "useInnerOffset.useEffect.onWheel": (d)=>d + Math[method](dY, remainingScroll * sign)
                            }["useInnerOffset.useEffect.onWheel"]);
                        }
                    }["useInnerOffset.useEffect.onWheel"]);
                } else if (/firefox/i.test((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserAgent"])())) {
                    // Needed to propagate scrolling during momentum scrolling phase once
                    // it gets limited by the boundary. UX improvement, not critical.
                    el.scrollTop += dY;
                }
            }
            const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
            if (open && el) {
                el.addEventListener('wheel', onWheel);
                // Wait for the position to be ready.
                requestAnimationFrame({
                    "useInnerOffset.useEffect": ()=>{
                        prevScrollTopRef.current = el.scrollTop;
                        if (overflowRef.current != null) {
                            initialOverflowRef.current = {
                                ...overflowRef.current
                            };
                        }
                    }
                }["useInnerOffset.useEffect"]);
                return ({
                    "useInnerOffset.useEffect": ()=>{
                        prevScrollTopRef.current = null;
                        initialOverflowRef.current = null;
                        el.removeEventListener('wheel', onWheel);
                    }
                })["useInnerOffset.useEffect"];
            }
        }
    }["useInnerOffset.useEffect"], [
        enabled,
        open,
        elements.floating,
        overflowRef,
        scrollRef,
        onChange
    ]);
    const floating = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useInnerOffset.useMemo[floating]": ()=>({
                onKeyDown () {
                    controlledScrollingRef.current = true;
                },
                onWheel () {
                    controlledScrollingRef.current = false;
                },
                onPointerMove () {
                    controlledScrollingRef.current = false;
                },
                onScroll () {
                    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
                    if (!overflowRef.current || !el || !controlledScrollingRef.current) {
                        return;
                    }
                    if (prevScrollTopRef.current !== null) {
                        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
                        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])({
                                "useInnerOffset.useMemo[floating]": ()=>onChange({
                                        "useInnerOffset.useMemo[floating]": (d)=>d + scrollDiff
                                    }["useInnerOffset.useMemo[floating]"])
                            }["useInnerOffset.useMemo[floating]"]);
                        }
                    }
                    // [Firefox] Wait for the height change to have been applied.
                    requestAnimationFrame({
                        "useInnerOffset.useMemo[floating]": ()=>{
                            prevScrollTopRef.current = el.scrollTop;
                        }
                    }["useInnerOffset.useMemo[floating]"]);
                }
            })
    }["useInnerOffset.useMemo[floating]"], [
        elements.floating,
        onChange,
        overflowRef,
        scrollRef
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_patch_hash$3d$7jofu3qtudpcn7yuwfpdpiosuy_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useInnerOffset.useMemo": ()=>enabled ? {
                floating
            } : {}
    }["useInnerOffset.useMemo"], [
        enabled,
        floating
    ]);
}
function isPointInPolygon(point, polygon) {
    const [x, y] = point;
    let isInside = false;
    const length = polygon.length;
    for(let i = 0, j = length - 1; i < length; j = i++){
        const [xi, yi] = polygon[i] || [
            0,
            0
        ];
        const [xj, yj] = polygon[j] || [
            0,
            0
        ];
        const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) {
            isInside = !isInside;
        }
    }
    return isInside;
}
function isInside(point, rect) {
    return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
/**
 * Generates a safe polygon area that the user can traverse without closing the
 * floating element once leaving the reference element.
 * @see https://floating-ui.com/docs/useHover#safepolygon
 */ function safePolygon(options) {
    if (options === void 0) {
        options = {};
    }
    const { buffer = 0.5, blockPointerEvents = false, requireIntent = true } = options;
    let timeoutId;
    let hasLanded = false;
    let lastX = null;
    let lastY = null;
    let lastCursorTime = performance.now();
    function getCursorSpeed(x, y) {
        const currentTime = performance.now();
        const elapsedTime = currentTime - lastCursorTime;
        if (lastX === null || lastY === null || elapsedTime === 0) {
            lastX = x;
            lastY = y;
            lastCursorTime = currentTime;
            return null;
        }
        const deltaX = x - lastX;
        const deltaY = y - lastY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const speed = distance / elapsedTime; // px / ms
        lastX = x;
        lastY = y;
        lastCursorTime = currentTime;
        return speed;
    }
    const fn = (_ref)=>{
        let { x, y, placement, elements, onClose, nodeId, tree } = _ref;
        return function onMouseMove(event) {
            function close() {
                clearTimeout(timeoutId);
                onClose();
            }
            clearTimeout(timeoutId);
            if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
                return;
            }
            const { clientX, clientY } = event;
            const clientPoint = [
                clientX,
                clientY
            ];
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTarget"])(event);
            const isLeave = event.type === 'mouseleave';
            const isOverFloatingEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(elements.floating, target);
            const isOverReferenceEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(elements.domReference, target);
            const refRect = elements.domReference.getBoundingClientRect();
            const rect = elements.floating.getBoundingClientRect();
            const side = placement.split('-')[0];
            const cursorLeaveFromRight = x > rect.right - rect.width / 2;
            const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
            const isOverReferenceRect = isInside(clientPoint, refRect);
            const isFloatingWider = rect.width > refRect.width;
            const isFloatingTaller = rect.height > refRect.height;
            const left = (isFloatingWider ? refRect : rect).left;
            const right = (isFloatingWider ? refRect : rect).right;
            const top = (isFloatingTaller ? refRect : rect).top;
            const bottom = (isFloatingTaller ? refRect : rect).bottom;
            if (isOverFloatingEl) {
                hasLanded = true;
                if (!isLeave) {
                    return;
                }
            }
            if (isOverReferenceEl) {
                hasLanded = false;
            }
            if (isOverReferenceEl && !isLeave) {
                hasLanded = true;
                return;
            }
            // Prevent overlapping floating element from being stuck in an open-close
            // loop: https://github.com/floating-ui/floating-ui/issues/1910
            if (isLeave && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$utils$40$0$2e$2$2e$8$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(event.relatedTarget) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$floating$2d$ui$2b$react$40$0$2e$26$2e$25_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contains"])(elements.floating, event.relatedTarget)) {
                return;
            }
            // If any nested child is open, abort.
            if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2)=>{
                let { context } = _ref2;
                return context == null ? void 0 : context.open;
            })) {
                return;
            }
            // If the pointer is leaving from the opposite side, the "buffer" logic
            // creates a point where the floating element remains open, but should be
            // ignored.
            // A constant of 1 handles floating point rounding errors.
            if (side === 'top' && y >= refRect.bottom - 1 || side === 'bottom' && y <= refRect.top + 1 || side === 'left' && x >= refRect.right - 1 || side === 'right' && x <= refRect.left + 1) {
                return close();
            }
            // Ignore when the cursor is within the rectangular trough between the
            // two elements. Since the triangle is created from the cursor point,
            // which can start beyond the ref element's edge, traversing back and
            // forth from the ref to the floating element can cause it to close. This
            // ensures it always remains open in that case.
            let rectPoly = [];
            switch(side){
                case 'top':
                    rectPoly = [
                        [
                            left,
                            refRect.top + 1
                        ],
                        [
                            left,
                            rect.bottom - 1
                        ],
                        [
                            right,
                            rect.bottom - 1
                        ],
                        [
                            right,
                            refRect.top + 1
                        ]
                    ];
                    break;
                case 'bottom':
                    rectPoly = [
                        [
                            left,
                            rect.top + 1
                        ],
                        [
                            left,
                            refRect.bottom - 1
                        ],
                        [
                            right,
                            refRect.bottom - 1
                        ],
                        [
                            right,
                            rect.top + 1
                        ]
                    ];
                    break;
                case 'left':
                    rectPoly = [
                        [
                            rect.right - 1,
                            bottom
                        ],
                        [
                            rect.right - 1,
                            top
                        ],
                        [
                            refRect.left + 1,
                            top
                        ],
                        [
                            refRect.left + 1,
                            bottom
                        ]
                    ];
                    break;
                case 'right':
                    rectPoly = [
                        [
                            refRect.right - 1,
                            bottom
                        ],
                        [
                            refRect.right - 1,
                            top
                        ],
                        [
                            rect.left + 1,
                            top
                        ],
                        [
                            rect.left + 1,
                            bottom
                        ]
                    ];
                    break;
            }
            function getPolygon(_ref3) {
                let [x, y] = _ref3;
                switch(side){
                    case 'top':
                        {
                            const cursorPointOne = [
                                isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4,
                                y + buffer + 1
                            ];
                            const cursorPointTwo = [
                                isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4,
                                y + buffer + 1
                            ];
                            const commonPoints = [
                                [
                                    rect.left,
                                    cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top
                                ],
                                [
                                    rect.right,
                                    cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer
                                ]
                            ];
                            return [
                                cursorPointOne,
                                cursorPointTwo,
                                ...commonPoints
                            ];
                        }
                    case 'bottom':
                        {
                            const cursorPointOne = [
                                isFloatingWider ? x + buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4,
                                y - buffer
                            ];
                            const cursorPointTwo = [
                                isFloatingWider ? x - buffer / 2 : cursorLeaveFromRight ? x + buffer * 4 : x - buffer * 4,
                                y - buffer
                            ];
                            const commonPoints = [
                                [
                                    rect.left,
                                    cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom
                                ],
                                [
                                    rect.right,
                                    cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer
                                ]
                            ];
                            return [
                                cursorPointOne,
                                cursorPointTwo,
                                ...commonPoints
                            ];
                        }
                    case 'left':
                        {
                            const cursorPointOne = [
                                x + buffer + 1,
                                isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4
                            ];
                            const cursorPointTwo = [
                                x + buffer + 1,
                                isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4
                            ];
                            const commonPoints = [
                                [
                                    cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left,
                                    rect.top
                                ],
                                [
                                    cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer,
                                    rect.bottom
                                ]
                            ];
                            return [
                                ...commonPoints,
                                cursorPointOne,
                                cursorPointTwo
                            ];
                        }
                    case 'right':
                        {
                            const cursorPointOne = [
                                x - buffer,
                                isFloatingTaller ? y + buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4
                            ];
                            const cursorPointTwo = [
                                x - buffer,
                                isFloatingTaller ? y - buffer / 2 : cursorLeaveFromBottom ? y + buffer * 4 : y - buffer * 4
                            ];
                            const commonPoints = [
                                [
                                    cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right,
                                    rect.top
                                ],
                                [
                                    cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer,
                                    rect.bottom
                                ]
                            ];
                            return [
                                cursorPointOne,
                                cursorPointTwo,
                                ...commonPoints
                            ];
                        }
                }
            }
            if (isPointInPolygon([
                clientX,
                clientY
            ], rectPoly)) {
                return;
            }
            if (hasLanded && !isOverReferenceRect) {
                return close();
            }
            if (!isLeave && requireIntent) {
                const cursorSpeed = getCursorSpeed(event.clientX, event.clientY);
                const cursorSpeedThreshold = 0.1;
                if (cursorSpeed !== null && cursorSpeed < cursorSpeedThreshold) {
                    return close();
                }
            }
            if (!isPointInPolygon([
                clientX,
                clientY
            ], getPolygon([
                x,
                y
            ]))) {
                close();
            } else if (!hasLanded && requireIntent) {
                timeoutId = window.setTimeout(close, 40);
            }
        };
    };
    fn.__options = {
        blockPointerEvents
    };
    return fn;
}
;
}}),
}]);

//# sourceMappingURL=3a528_%40floating-ui_react_dist_ee102f33._.js.map