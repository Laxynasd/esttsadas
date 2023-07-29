//********************* Frame setting for Desktop *********************
function $c9614f2ab6a788bc$var$_assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function $c9614f2ab6a788bc$var$_inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var $c9614f2ab6a788bc$export$4922bee768729a77 = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, $c9614f2ab6a788bc$var$_defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, $c9614f2ab6a788bc$var$_suppressOverwrites, $c9614f2ab6a788bc$var$_reverting, $c9614f2ab6a788bc$var$_context, $c9614f2ab6a788bc$var$_bigNum = 1e8, $c9614f2ab6a788bc$var$_tinyNum = 1 / $c9614f2ab6a788bc$var$_bigNum, $c9614f2ab6a788bc$var$_2PI = Math.PI * 2, $c9614f2ab6a788bc$var$_HALF_PI = $c9614f2ab6a788bc$var$_2PI / 4, $c9614f2ab6a788bc$var$_gsID = 0, $c9614f2ab6a788bc$var$_sqrt = Math.sqrt, $c9614f2ab6a788bc$var$_cos = Math.cos, $c9614f2ab6a788bc$var$_sin = Math.sin, $c9614f2ab6a788bc$export$f664476fd67145ca = function _isString(value) {
    return typeof value === "string";
}, $c9614f2ab6a788bc$var$_isFunction = function _isFunction(value) {
    return typeof value === "function";
}, $c9614f2ab6a788bc$var$_isNumber = function _isNumber(value) {
    return typeof value === "number";
}, $c9614f2ab6a788bc$export$a8178c063a9fd3a1 = function _isUndefined(value) {
    return typeof value === "undefined";
}, $c9614f2ab6a788bc$var$_isObject = function _isObject(value) {
    return typeof value === "object";
}, $c9614f2ab6a788bc$var$_isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, $c9614f2ab6a788bc$var$_windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, $c9614f2ab6a788bc$var$_isFuncOrString = function _isFuncOrString(value) {
    return $c9614f2ab6a788bc$var$_isFunction(value) || $c9614f2ab6a788bc$export$f664476fd67145ca(value);
}, $c9614f2ab6a788bc$var$_isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
$c9614f2ab6a788bc$var$_isArray = Array.isArray, $c9614f2ab6a788bc$var$_strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
$c9614f2ab6a788bc$export$b9d44bb6523120d6 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
$c9614f2ab6a788bc$export$65c88bbd597e7b0a = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, $c9614f2ab6a788bc$var$_complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
$c9614f2ab6a788bc$export$5a680e28b0b61bc = /[+-]=-?[.\d]+/, $c9614f2ab6a788bc$var$_delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
$c9614f2ab6a788bc$var$_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, $c9614f2ab6a788bc$var$_globalTimeline, $c9614f2ab6a788bc$var$_win, $c9614f2ab6a788bc$var$_coreInitted, $c9614f2ab6a788bc$var$_doc, $c9614f2ab6a788bc$var$_globals = {}, $c9614f2ab6a788bc$var$_installScope = {}, $c9614f2ab6a788bc$var$_coreReady, $c9614f2ab6a788bc$var$_install = function _install(scope) {
    return ($c9614f2ab6a788bc$var$_installScope = $c9614f2ab6a788bc$var$_merge(scope, $c9614f2ab6a788bc$var$_globals)) && $c9614f2ab6a788bc$export$99ee26438460406a;
}, $c9614f2ab6a788bc$export$7fb54635790b59a5 = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, $c9614f2ab6a788bc$var$_warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, $c9614f2ab6a788bc$var$_addGlobal = function _addGlobal(name, obj) {
    return name && ($c9614f2ab6a788bc$var$_globals[name] = obj) && $c9614f2ab6a788bc$var$_installScope && ($c9614f2ab6a788bc$var$_installScope[name] = obj) || $c9614f2ab6a788bc$var$_globals;
}, $c9614f2ab6a788bc$var$_emptyFunc = function _emptyFunc() {
    return 0;
}, $c9614f2ab6a788bc$var$_startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
}, $c9614f2ab6a788bc$var$_revertConfigNoKill = {
    suppressEvents: true,
    kill: false
}, $c9614f2ab6a788bc$var$_revertConfig = {
    suppressEvents: true
}, $c9614f2ab6a788bc$var$_reservedProps = {}, $c9614f2ab6a788bc$var$_lazyTweens = [], $c9614f2ab6a788bc$var$_lazyLookup = {}, $c9614f2ab6a788bc$var$_lastRenderedFrame, $c9614f2ab6a788bc$export$d305d8ec5d7c26b8 = {}, $c9614f2ab6a788bc$var$_effects = {}, $c9614f2ab6a788bc$var$_nextGCFrame = 30, $c9614f2ab6a788bc$var$_harnessPlugins = [], $c9614f2ab6a788bc$var$_callbackNames = "", $c9614f2ab6a788bc$var$_harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    $c9614f2ab6a788bc$var$_isObject(target) || $c9614f2ab6a788bc$var$_isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = $c9614f2ab6a788bc$var$_harnessPlugins.length;
        while(i-- && !$c9614f2ab6a788bc$var$_harnessPlugins[i].targetTest(target));
        harnessPlugin = $c9614f2ab6a788bc$var$_harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new $c9614f2ab6a788bc$export$cf10981d5419cad5(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, $c9614f2ab6a788bc$export$8b9be379d2de2a39 = function _getCache(target) {
    return target._gsap || $c9614f2ab6a788bc$var$_harness($c9614f2ab6a788bc$export$45b10814cc054894(target))[0]._gsap;
}, $c9614f2ab6a788bc$export$51d6bbe898aef1f9 = function _getProperty(target, property, v) {
    return (v = target[property]) && $c9614f2ab6a788bc$var$_isFunction(v) ? target[property]() : $c9614f2ab6a788bc$export$a8178c063a9fd3a1(v) && target.getAttribute && target.getAttribute(property) || v;
}, $c9614f2ab6a788bc$export$f9000b814859f126 = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
$c9614f2ab6a788bc$export$9c8d725d65e13f94 = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, $c9614f2ab6a788bc$var$_roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
$c9614f2ab6a788bc$export$dac762bc6301b560 = function _parseRelative(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, $c9614f2ab6a788bc$var$_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, $c9614f2ab6a788bc$var$_lazyRender = function _lazyRender() {
    var l = $c9614f2ab6a788bc$var$_lazyTweens.length, a = $c9614f2ab6a788bc$var$_lazyTweens.slice(0), i, tween;
    $c9614f2ab6a788bc$var$_lazyLookup = {};
    $c9614f2ab6a788bc$var$_lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, $c9614f2ab6a788bc$var$_lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    $c9614f2ab6a788bc$var$_lazyTweens.length && $c9614f2ab6a788bc$var$_lazyRender();
    animation.render(time, suppressEvents, force || $c9614f2ab6a788bc$var$_reverting && time < 0 && (animation._initted || animation._startAt));
    $c9614f2ab6a788bc$var$_lazyTweens.length && $c9614f2ab6a788bc$var$_lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, $c9614f2ab6a788bc$var$_numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match($c9614f2ab6a788bc$var$_delimitedValueExp).length < 2 ? n : $c9614f2ab6a788bc$export$f664476fd67145ca(value) ? value.trim() : value;
}, $c9614f2ab6a788bc$var$_passThrough = function _passThrough(p) {
    return p;
}, $c9614f2ab6a788bc$export$dc2b19673bb53610 = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, $c9614f2ab6a788bc$var$_setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, $c9614f2ab6a788bc$var$_merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, $c9614f2ab6a788bc$var$_mergeDeep = function _mergeDeep(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = $c9614f2ab6a788bc$var$_isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    return base;
}, $c9614f2ab6a788bc$var$_copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, $c9614f2ab6a788bc$var$_inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || $c9614f2ab6a788bc$var$_globalTimeline, func = vars.keyframes ? $c9614f2ab6a788bc$var$_setKeyframeDefaults($c9614f2ab6a788bc$var$_isArray(vars.keyframes)) : $c9614f2ab6a788bc$export$dc2b19673bb53610;
    if ($c9614f2ab6a788bc$var$_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, $c9614f2ab6a788bc$var$_arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, $c9614f2ab6a788bc$var$_addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, $c9614f2ab6a788bc$export$cd008aa6cd8844e3 = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, $c9614f2ab6a788bc$var$_removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
}, $c9614f2ab6a788bc$var$_uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, $c9614f2ab6a788bc$var$_recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, $c9614f2ab6a788bc$var$_rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && ($c9614f2ab6a788bc$var$_reverting ? tween._startAt.revert($c9614f2ab6a788bc$var$_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, $c9614f2ab6a788bc$var$_hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, $c9614f2ab6a788bc$var$_elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? $c9614f2ab6a788bc$var$_animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
$c9614f2ab6a788bc$var$_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
}, $c9614f2ab6a788bc$var$_parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, $c9614f2ab6a788bc$var$_setEnd = function _setEnd(animation) {
    return animation._end = $c9614f2ab6a788bc$var$_roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || $c9614f2ab6a788bc$var$_tinyNum) || 0));
}, $c9614f2ab6a788bc$var$_alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = $c9614f2ab6a788bc$var$_roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        $c9614f2ab6a788bc$var$_setEnd(animation);
        parent._dirty || $c9614f2ab6a788bc$var$_uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ $c9614f2ab6a788bc$var$_postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
        //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        t = $c9614f2ab6a788bc$var$_parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || $c9614f2ab6a788bc$var$_clamp(0, child.totalDuration(), t) - child._tTime > $c9614f2ab6a788bc$var$_tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if ($c9614f2ab6a788bc$var$_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -$c9614f2ab6a788bc$var$_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, $c9614f2ab6a788bc$var$_addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && $c9614f2ab6a788bc$var$_removeFromParent(child);
    child._start = $c9614f2ab6a788bc$var$_roundPrecise(($c9614f2ab6a788bc$var$_isNumber(position) ? position : position || timeline !== $c9614f2ab6a788bc$var$_globalTimeline ? $c9614f2ab6a788bc$var$_parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = $c9614f2ab6a788bc$var$_roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    $c9614f2ab6a788bc$var$_addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    $c9614f2ab6a788bc$var$_isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || $c9614f2ab6a788bc$var$_postAddChecks(timeline, child);
    timeline._ts < 0 && $c9614f2ab6a788bc$var$_alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)
    return timeline;
}, $c9614f2ab6a788bc$var$_scrollTrigger = function _scrollTrigger(animation, trigger) {
    return ($c9614f2ab6a788bc$var$_globals.ScrollTrigger || $c9614f2ab6a788bc$export$7fb54635790b59a5("scrollTrigger", trigger)) && $c9614f2ab6a788bc$var$_globals.ScrollTrigger.create(trigger, animation);
}, $c9614f2ab6a788bc$var$_attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    $c9614f2ab6a788bc$var$_initTween(tween, time, tTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && !$c9614f2ab6a788bc$var$_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && $c9614f2ab6a788bc$var$_lastRenderedFrame !== $c9614f2ab6a788bc$export$762ed8fbedb691e3.frame) {
        $c9614f2ab6a788bc$var$_lazyTweens.push(tween);
        tween._lazy = [
            tTime,
            suppressEvents
        ];
        return 1;
    }
}, $c9614f2ab6a788bc$var$_parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
$c9614f2ab6a788bc$var$_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, $c9614f2ab6a788bc$var$_renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && $c9614f2ab6a788bc$var$_parentPlayheadIsBeforeStart(tween) && !(!tween._initted && $c9614f2ab6a788bc$var$_isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !$c9614f2ab6a788bc$var$_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = $c9614f2ab6a788bc$var$_clamp(0, tween._tDur, totalTime);
        iteration = $c9614f2ab6a788bc$var$_animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== $c9614f2ab6a788bc$var$_animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || $c9614f2ab6a788bc$var$_reverting || force || tween._zTime === $c9614f2ab6a788bc$var$_tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && $c9614f2ab6a788bc$var$_attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? $c9614f2ab6a788bc$var$_tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        totalTime < 0 && $c9614f2ab6a788bc$var$_rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && $c9614f2ab6a788bc$var$_callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && $c9614f2ab6a788bc$var$_callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && $c9614f2ab6a788bc$var$_removeFromParent(tween, 1);
            if (!suppressEvents && !$c9614f2ab6a788bc$var$_reverting) {
                $c9614f2ab6a788bc$var$_callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, $c9614f2ab6a788bc$var$_findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, $c9614f2ab6a788bc$var$_setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = $c9614f2ab6a788bc$var$_roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : $c9614f2ab6a788bc$var$_roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && $c9614f2ab6a788bc$var$_alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && $c9614f2ab6a788bc$var$_setEnd(animation);
    skipUncache || $c9614f2ab6a788bc$var$_uncache(animation.parent, animation);
    return animation;
}, $c9614f2ab6a788bc$var$_onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof $c9614f2ab6a788bc$export$e6a97ba2cae5bb94 ? $c9614f2ab6a788bc$var$_uncache(animation) : $c9614f2ab6a788bc$var$_setDuration(animation, animation._dur);
}, $c9614f2ab6a788bc$var$_zeroPosition = {
    _start: 0,
    endTime: $c9614f2ab6a788bc$var$_emptyFunc,
    totalDuration: $c9614f2ab6a788bc$var$_emptyFunc
}, $c9614f2ab6a788bc$var$_parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || $c9614f2ab6a788bc$var$_zeroPosition, clippedDuration = animation.duration() >= $c9614f2ab6a788bc$var$_bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if ($c9614f2ab6a788bc$export$f664476fd67145ca(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * ($c9614f2ab6a788bc$var$_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, $c9614f2ab6a788bc$var$_createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = $c9614f2ab6a788bc$var$_isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = $c9614f2ab6a788bc$var$_isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = $c9614f2ab6a788bc$var$_isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new $c9614f2ab6a788bc$export$208a41d6b4e37b97(params[0], vars, params[varsIndex + 1]);
}, $c9614f2ab6a788bc$var$_conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, $c9614f2ab6a788bc$var$_clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, $c9614f2ab6a788bc$export$65f2564e9a9b9222 = function getUnit(value, v) {
    return !$c9614f2ab6a788bc$export$f664476fd67145ca(value) || !(v = $c9614f2ab6a788bc$var$_unitExp.exec(value)) ? "" : v[1];
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
$c9614f2ab6a788bc$export$7d15b64cf5a3a4c4 = function clamp(min, max, value) {
    return $c9614f2ab6a788bc$var$_conditionalReturn(value, function(v) {
        return $c9614f2ab6a788bc$var$_clamp(min, max, v);
    });
}, $c9614f2ab6a788bc$var$_slice = [].slice, $c9614f2ab6a788bc$var$_isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && $c9614f2ab6a788bc$var$_isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && $c9614f2ab6a788bc$var$_isObject(value[0])) && !value.nodeType && value !== $c9614f2ab6a788bc$var$_win;
}, $c9614f2ab6a788bc$var$_flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return $c9614f2ab6a788bc$export$f664476fd67145ca(value) && !leaveStrings || $c9614f2ab6a788bc$var$_isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, $c9614f2ab6a788bc$export$45b10814cc054894(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
$c9614f2ab6a788bc$export$45b10814cc054894 = function toArray(value, scope, leaveStrings) {
    return $c9614f2ab6a788bc$var$_context && !scope && $c9614f2ab6a788bc$var$_context.selector ? $c9614f2ab6a788bc$var$_context.selector(value) : $c9614f2ab6a788bc$export$f664476fd67145ca(value) && !leaveStrings && ($c9614f2ab6a788bc$var$_coreInitted || !$c9614f2ab6a788bc$var$_wake()) ? $c9614f2ab6a788bc$var$_slice.call((scope || $c9614f2ab6a788bc$var$_doc).querySelectorAll(value), 0) : $c9614f2ab6a788bc$var$_isArray(value) ? $c9614f2ab6a788bc$var$_flatten(value, leaveStrings) : $c9614f2ab6a788bc$var$_isArrayLike(value) ? $c9614f2ab6a788bc$var$_slice.call(value, 0) : value ? [
        value
    ] : [];
}, $c9614f2ab6a788bc$export$aea217a45095ce11 = function selector(value) {
    value = $c9614f2ab6a788bc$export$45b10814cc054894(value)[0] || $c9614f2ab6a788bc$var$_warn("Invalid scope") || {};
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return $c9614f2ab6a788bc$export$45b10814cc054894(v, el.querySelectorAll ? el : el === value ? $c9614f2ab6a788bc$var$_warn("Invalid scope") || $c9614f2ab6a788bc$var$_doc.createElement("div") : value);
    };
}, $c9614f2ab6a788bc$export$448332262467e042 = function shuffle(a) {
    return a.sort(function() {
        return .5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
$c9614f2ab6a788bc$export$f02a9ddbe4480f19 = function distribute(v) {
    if ($c9614f2ab6a788bc$var$_isFunction(v)) return v;
    var vars = $c9614f2ab6a788bc$var$_isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = $c9614f2ab6a788bc$var$_parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if ($c9614f2ab6a788bc$export$f664476fd67145ca(from)) ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                $c9614f2ab6a788bc$var$_bigNum
            ])[1];
            if (!wrapAt) {
                max = -$c9614f2ab6a788bc$var$_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = wrapAt === $c9614f2ab6a788bc$var$_bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = $c9614f2ab6a788bc$var$_bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? $c9614f2ab6a788bc$var$_sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && $c9614f2ab6a788bc$export$448332262467e042(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = $c9614f2ab6a788bc$export$65f2564e9a9b9222(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? $c9614f2ab6a788bc$var$_invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return $c9614f2ab6a788bc$var$_roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, $c9614f2ab6a788bc$export$dd12390e6b265a17 = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = $c9614f2ab6a788bc$var$_roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - n % 1) / p + ($c9614f2ab6a788bc$var$_isNumber(raw) ? 0 : $c9614f2ab6a788bc$export$65f2564e9a9b9222(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, $c9614f2ab6a788bc$export$51a0620f7a28532b = function snap(snapTo, value) {
    var isArray = $c9614f2ab6a788bc$var$_isArray(snapTo), radius, is2D;
    if (!isArray && $c9614f2ab6a788bc$var$_isObject(snapTo)) {
        radius = isArray = snapTo.radius || $c9614f2ab6a788bc$var$_bigNum;
        if (snapTo.values) {
            snapTo = $c9614f2ab6a788bc$export$45b10814cc054894(snapTo.values);
            if (is2D = !$c9614f2ab6a788bc$var$_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = $c9614f2ab6a788bc$export$dd12390e6b265a17(snapTo.increment);
    }
    return $c9614f2ab6a788bc$var$_conditionalReturn(value, !isArray ? $c9614f2ab6a788bc$export$dd12390e6b265a17(snapTo) : $c9614f2ab6a788bc$var$_isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = $c9614f2ab6a788bc$var$_bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || $c9614f2ab6a788bc$var$_isNumber(raw) ? closest : closest + $c9614f2ab6a788bc$export$65f2564e9a9b9222(raw);
    });
}, $c9614f2ab6a788bc$export$4385e60b38654f68 = function random(min, max, roundingIncrement, returnFunction) {
    return $c9614f2ab6a788bc$var$_conditionalReturn($c9614f2ab6a788bc$var$_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return $c9614f2ab6a788bc$var$_isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, $c9614f2ab6a788bc$export$a4627e546088548d = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, $c9614f2ab6a788bc$export$d7502930aa5492de = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || $c9614f2ab6a788bc$export$65f2564e9a9b9222(value));
    };
}, $c9614f2ab6a788bc$export$a3295358bff77e = function normalize(min, max, value) {
    return $c9614f2ab6a788bc$export$f65a7599bbc6b121(min, max, 0, 1, value);
}, $c9614f2ab6a788bc$var$_wrapArray = function _wrapArray(a, wrapper, value) {
    return $c9614f2ab6a788bc$var$_conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, $c9614f2ab6a788bc$export$4997ffc0176396a6 = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return $c9614f2ab6a788bc$var$_isArray(min) ? $c9614f2ab6a788bc$var$_wrapArray(min, wrap(0, min.length), max) : $c9614f2ab6a788bc$var$_conditionalReturn(value, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, $c9614f2ab6a788bc$export$cfc0b067273edc55 = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return $c9614f2ab6a788bc$var$_isArray(min) ? $c9614f2ab6a788bc$var$_wrapArray(min, wrapYoyo(0, min.length - 1), max) : $c9614f2ab6a788bc$var$_conditionalReturn(value, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, $c9614f2ab6a788bc$export$d5962a97e3cde94d = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? $c9614f2ab6a788bc$var$_delimitedValueExp : $c9614f2ab6a788bc$var$_strictNumExp);
        s += value.substr(prev, i - prev) + $c9614f2ab6a788bc$export$4385e60b38654f68(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, $c9614f2ab6a788bc$export$f65a7599bbc6b121 = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return $c9614f2ab6a788bc$var$_conditionalReturn(value, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, $c9614f2ab6a788bc$export$89e29e4ab65e70a9 = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = $c9614f2ab6a788bc$export$f664476fd67145ca(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if ($c9614f2ab6a788bc$var$_isArray(start) && !$c9614f2ab6a788bc$var$_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i = 1; i < l; i++)interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = $c9614f2ab6a788bc$var$_merge($c9614f2ab6a788bc$var$_isArray(start) ? [] : {}, start);
        if (!interpolators) {
            for(p in end)$c9614f2ab6a788bc$var$_addPropTween.call(master, start, p, "get", end[p]);
            func = function func(p) {
                return $c9614f2ab6a788bc$var$_renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return $c9614f2ab6a788bc$var$_conditionalReturn(progress, func);
}, $c9614f2ab6a788bc$var$_getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = $c9614f2ab6a788bc$var$_bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, $c9614f2ab6a788bc$var$_callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = $c9614f2ab6a788bc$var$_context, context = animation._ctx, params, scope, result;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && $c9614f2ab6a788bc$var$_lazyTweens.length && $c9614f2ab6a788bc$var$_lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    context && ($c9614f2ab6a788bc$var$_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    $c9614f2ab6a788bc$var$_context = prevContext;
    return result;
}, $c9614f2ab6a788bc$var$_interrupt = function _interrupt(animation) {
    $c9614f2ab6a788bc$var$_removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!$c9614f2ab6a788bc$var$_reverting);
    animation.progress() < 1 && $c9614f2ab6a788bc$var$_callback(animation, "onInterrupt");
    return animation;
}, $c9614f2ab6a788bc$var$_quickTween, $c9614f2ab6a788bc$var$_createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    var name = config.name, isFunc = $c9614f2ab6a788bc$var$_isFunction(config), Plugin = name && !isFunc && config.init ? function() {
        this._props = [];
    } : config, //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
        init: $c9614f2ab6a788bc$var$_emptyFunc,
        render: $c9614f2ab6a788bc$var$_renderPropTweens,
        add: $c9614f2ab6a788bc$var$_addPropTween,
        kill: $c9614f2ab6a788bc$var$_killPropTweensOf,
        modifier: $c9614f2ab6a788bc$var$_addPluginModifier,
        rawVars: 0
    }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: $c9614f2ab6a788bc$export$d60fbc1e0278aaf0,
        aliases: {},
        register: 0
    };
    $c9614f2ab6a788bc$var$_wake();
    if (config !== Plugin) {
        if ($c9614f2ab6a788bc$export$d305d8ec5d7c26b8[name]) return;
        $c9614f2ab6a788bc$export$dc2b19673bb53610(Plugin, $c9614f2ab6a788bc$export$dc2b19673bb53610($c9614f2ab6a788bc$var$_copyExcluding(config, instanceDefaults), statics)); //static methods
        $c9614f2ab6a788bc$var$_merge(Plugin.prototype, $c9614f2ab6a788bc$var$_merge(instanceDefaults, $c9614f2ab6a788bc$var$_copyExcluding(config, statics))); //instance methods
        $c9614f2ab6a788bc$export$d305d8ec5d7c26b8[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
            $c9614f2ab6a788bc$var$_harnessPlugins.push(Plugin);
            $c9614f2ab6a788bc$var$_reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }
    $c9614f2ab6a788bc$var$_addGlobal(name, Plugin);
    config.register && config.register($c9614f2ab6a788bc$export$99ee26438460406a, Plugin, $c9614f2ab6a788bc$export$3a67f7f44b1e838a);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ $c9614f2ab6a788bc$var$_255 = 255, $c9614f2ab6a788bc$var$_colorLookup = {
    aqua: [
        0,
        $c9614f2ab6a788bc$var$_255,
        $c9614f2ab6a788bc$var$_255
    ],
    lime: [
        0,
        $c9614f2ab6a788bc$var$_255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        $c9614f2ab6a788bc$var$_255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        $c9614f2ab6a788bc$var$_255,
        $c9614f2ab6a788bc$var$_255,
        $c9614f2ab6a788bc$var$_255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        $c9614f2ab6a788bc$var$_255,
        $c9614f2ab6a788bc$var$_255,
        0
    ],
    orange: [
        $c9614f2ab6a788bc$var$_255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        $c9614f2ab6a788bc$var$_255,
        0,
        0
    ],
    pink: [
        $c9614f2ab6a788bc$var$_255,
        192,
        203
    ],
    cyan: [
        0,
        $c9614f2ab6a788bc$var$_255,
        $c9614f2ab6a788bc$var$_255
    ],
    transparent: [
        $c9614f2ab6a788bc$var$_255,
        $c9614f2ab6a788bc$var$_255,
        $c9614f2ab6a788bc$var$_255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
$c9614f2ab6a788bc$var$_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * $c9614f2ab6a788bc$var$_255 + .5 | 0;
}, $c9614f2ab6a788bc$export$73d6f35be992df24 = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? $c9614f2ab6a788bc$var$_colorLookup.black : $c9614f2ab6a788bc$var$_isNumber(v) ? [
        v >> 16,
        v >> 8 & $c9614f2ab6a788bc$var$_255,
        v & $c9614f2ab6a788bc$var$_255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if ($c9614f2ab6a788bc$var$_colorLookup[v]) a = $c9614f2ab6a788bc$var$_colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & $c9614f2ab6a788bc$var$_255,
                    a & $c9614f2ab6a788bc$var$_255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & $c9614f2ab6a788bc$var$_255,
                v & $c9614f2ab6a788bc$var$_255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match($c9614f2ab6a788bc$var$_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = $c9614f2ab6a788bc$var$_hue(h + 1 / 3, r, g);
                a[1] = $c9614f2ab6a788bc$var$_hue(h, r, g);
                a[2] = $c9614f2ab6a788bc$var$_hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match($c9614f2ab6a788bc$export$b9d44bb6523120d6);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match($c9614f2ab6a788bc$var$_strictNumExp) || $c9614f2ab6a788bc$var$_colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / $c9614f2ab6a788bc$var$_255;
        g = a[1] / $c9614f2ab6a788bc$var$_255;
        b = a[2] / $c9614f2ab6a788bc$var$_255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, $c9614f2ab6a788bc$var$_colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v.split($c9614f2ab6a788bc$export$dd733e62515be2bd).forEach(function(v) {
        var a = v.match($c9614f2ab6a788bc$export$65c88bbd597e7b0a) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, $c9614f2ab6a788bc$var$_formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match($c9614f2ab6a788bc$export$dd733e62515be2bd), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = $c9614f2ab6a788bc$export$73d6f35be992df24(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = $c9614f2ab6a788bc$var$_colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace($c9614f2ab6a788bc$export$dd733e62515be2bd, "1").split($c9614f2ab6a788bc$export$65c88bbd597e7b0a);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split($c9614f2ab6a788bc$export$dd733e62515be2bd);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, $c9614f2ab6a788bc$export$dd733e62515be2bd = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in $c9614f2ab6a788bc$var$_colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), $c9614f2ab6a788bc$var$_hslExp = /hsl[a]?\(/, $c9614f2ab6a788bc$export$7eb2e5eb5eeb96a4 = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    $c9614f2ab6a788bc$export$dd733e62515be2bd.lastIndex = 0;
    if ($c9614f2ab6a788bc$export$dd733e62515be2bd.test(combined)) {
        toHSL = $c9614f2ab6a788bc$var$_hslExp.test(combined);
        a[1] = $c9614f2ab6a788bc$var$_formatColors(a[1], toHSL);
        a[0] = $c9614f2ab6a788bc$var$_formatColors(a[0], toHSL, $c9614f2ab6a788bc$var$_colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ $c9614f2ab6a788bc$var$_tickerActive, $c9614f2ab6a788bc$export$762ed8fbedb691e3 = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if ($c9614f2ab6a788bc$var$_coreReady) {
                if (!$c9614f2ab6a788bc$var$_coreInitted && $c9614f2ab6a788bc$var$_windowExists()) {
                    $c9614f2ab6a788bc$var$_win = $c9614f2ab6a788bc$var$_coreInitted = window;
                    $c9614f2ab6a788bc$var$_doc = $c9614f2ab6a788bc$var$_win.document || {};
                    $c9614f2ab6a788bc$var$_globals.gsap = $c9614f2ab6a788bc$export$99ee26438460406a;
                    ($c9614f2ab6a788bc$var$_win.gsapVersions || ($c9614f2ab6a788bc$var$_win.gsapVersions = [])).push($c9614f2ab6a788bc$export$99ee26438460406a.version);
                    $c9614f2ab6a788bc$var$_install($c9614f2ab6a788bc$var$_installScope || $c9614f2ab6a788bc$var$_win.GreenSockGlobals || !$c9614f2ab6a788bc$var$_win.gsap && $c9614f2ab6a788bc$var$_win || {});
                    _raf = $c9614f2ab6a788bc$var$_win.requestAnimationFrame;
                }
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                $c9614f2ab6a788bc$var$_tickerActive = 1;
                _tick(2);
            }
        },
        sleep: function sleep() {
            (_raf ? $c9614f2ab6a788bc$var$_win.cancelAnimationFrame : clearTimeout)(_id);
            $c9614f2ab6a788bc$var$_tickerActive = 0;
            _req = $c9614f2ab6a788bc$var$_emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / $c9614f2ab6a788bc$var$_tinyNum; //zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners[prioritize ? "unshift" : "push"](func);
            $c9614f2ab6a788bc$var$_wake();
            return func;
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), $c9614f2ab6a788bc$var$_wake = function _wake() {
    return !$c9614f2ab6a788bc$var$_tickerActive && $c9614f2ab6a788bc$export$762ed8fbedb691e3.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ $c9614f2ab6a788bc$var$_easeMap = {}, $c9614f2ab6a788bc$var$_customEaseExp = /^[\d.\-M][\d.\-,\s]/, $c9614f2ab6a788bc$var$_quotesExp = /["']/g, $c9614f2ab6a788bc$var$_parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace($c9614f2ab6a788bc$var$_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, $c9614f2ab6a788bc$var$_valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, $c9614f2ab6a788bc$var$_configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = $c9614f2ab6a788bc$var$_easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        $c9614f2ab6a788bc$var$_parseObjectInString(split[1])
    ] : $c9614f2ab6a788bc$var$_valueInParentheses(name).split(",").map($c9614f2ab6a788bc$var$_numericIfPossible)) : $c9614f2ab6a788bc$var$_easeMap._CE && $c9614f2ab6a788bc$var$_customEaseExp.test(name) ? $c9614f2ab6a788bc$var$_easeMap._CE("", name) : ease;
}, $c9614f2ab6a788bc$var$_invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
$c9614f2ab6a788bc$var$_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof $c9614f2ab6a788bc$export$e6a97ba2cae5bb94) _propagateYoyoEase(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, $c9614f2ab6a788bc$var$_parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : ($c9614f2ab6a788bc$var$_isFunction(ease) ? ease : $c9614f2ab6a788bc$var$_easeMap[ease] || $c9614f2ab6a788bc$var$_configEaseFromString(ease)) || defaultEase;
}, $c9614f2ab6a788bc$var$_insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    $c9614f2ab6a788bc$export$f9000b814859f126(names, function(name) {
        $c9614f2ab6a788bc$var$_easeMap[name] = $c9614f2ab6a788bc$var$_globals[name] = ease;
        $c9614f2ab6a788bc$var$_easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)$c9614f2ab6a788bc$var$_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = $c9614f2ab6a788bc$var$_easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, $c9614f2ab6a788bc$var$_easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, $c9614f2ab6a788bc$var$_configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / $c9614f2ab6a788bc$var$_2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * $c9614f2ab6a788bc$var$_sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : $c9614f2ab6a788bc$var$_easeInOutFromOut(easeOut);
    p2 = $c9614f2ab6a788bc$var$_2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic(type, amplitude, period);
    };
    return ease;
}, $c9614f2ab6a788bc$var$_configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) overshoot = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : $c9614f2ab6a788bc$var$_easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
$c9614f2ab6a788bc$export$f9000b814859f126("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    $c9614f2ab6a788bc$var$_insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
$c9614f2ab6a788bc$var$_easeMap.Linear.easeNone = $c9614f2ab6a788bc$var$_easeMap.none = $c9614f2ab6a788bc$var$_easeMap.Linear.easeIn;
$c9614f2ab6a788bc$var$_insertEase("Elastic", $c9614f2ab6a788bc$var$_configElastic("in"), $c9614f2ab6a788bc$var$_configElastic("out"), $c9614f2ab6a788bc$var$_configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    $c9614f2ab6a788bc$var$_insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
$c9614f2ab6a788bc$var$_insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
$c9614f2ab6a788bc$var$_insertEase("Circ", function(p) {
    return -($c9614f2ab6a788bc$var$_sqrt(1 - p * p) - 1);
});
$c9614f2ab6a788bc$var$_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -$c9614f2ab6a788bc$var$_cos(p * $c9614f2ab6a788bc$var$_HALF_PI) + 1;
});
$c9614f2ab6a788bc$var$_insertEase("Back", $c9614f2ab6a788bc$var$_configBack("in"), $c9614f2ab6a788bc$var$_configBack("out"), $c9614f2ab6a788bc$var$_configBack());
$c9614f2ab6a788bc$var$_easeMap.SteppedEase = $c9614f2ab6a788bc$var$_easeMap.steps = $c9614f2ab6a788bc$var$_globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - $c9614f2ab6a788bc$var$_tinyNum;
        return function(p) {
            return ((p2 * $c9614f2ab6a788bc$var$_clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
$c9614f2ab6a788bc$var$_defaults.ease = $c9614f2ab6a788bc$var$_easeMap["quad.out"];
$c9614f2ab6a788bc$export$f9000b814859f126("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return $c9614f2ab6a788bc$var$_callbackNames += name + "," + name + "Params,";
});
var $c9614f2ab6a788bc$export$cf10981d5419cad5 = function GSCache(target, harness) {
    this.id = $c9614f2ab6a788bc$var$_gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : $c9614f2ab6a788bc$export$51d6bbe898aef1f9;
    this.set = harness ? harness.getSetter : $c9614f2ab6a788bc$export$d60fbc1e0278aaf0;
};
var $c9614f2ab6a788bc$export$c35d437ae5945fcd = /*#__PURE__*/ function() {
    function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        $c9614f2ab6a788bc$var$_setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if ($c9614f2ab6a788bc$var$_context) {
            this._ctx = $c9614f2ab6a788bc$var$_context;
            $c9614f2ab6a788bc$var$_context.data.push(this);
        }
        $c9614f2ab6a788bc$var$_tickerActive || $c9614f2ab6a788bc$export$762ed8fbedb691e3.wake();
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return $c9614f2ab6a788bc$var$_setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        $c9614f2ab6a788bc$var$_wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            $c9614f2ab6a788bc$var$_alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || $c9614f2ab6a788bc$var$_postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            $c9614f2ab6a788bc$var$_addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === $c9614f2ab6a788bc$var$_tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            $c9614f2ab6a788bc$var$_lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + $c9614f2ab6a788bc$var$_elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + $c9614f2ab6a788bc$var$_elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? $c9614f2ab6a788bc$var$_animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value) {
        if (!arguments.length) return this._rts === -$c9614f2ab6a788bc$var$_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? $c9614f2ab6a788bc$var$_parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -$c9614f2ab6a788bc$var$_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        this.totalTime($c9614f2ab6a788bc$var$_clamp(-this._delay, this._tDur, tTime), true);
        $c9614f2ab6a788bc$var$_setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return $c9614f2ab6a788bc$var$_recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                $c9614f2ab6a788bc$var$_wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== $c9614f2ab6a788bc$var$_tinyNum && (this._tTime -= $c9614f2ab6a788bc$var$_tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && $c9614f2ab6a788bc$var$_addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + ($c9614f2ab6a788bc$var$_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : $c9614f2ab6a788bc$var$_parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config) {
        if (config === void 0) config = $c9614f2ab6a788bc$var$_revertConfig;
        var prevIsReverting = $c9614f2ab6a788bc$var$_reverting;
        $c9614f2ab6a788bc$var$_reverting = config;
        if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config);
            this.totalTime(-0.01, config.suppressEvents);
        }
        this.data !== "nested" && config.kill !== false && this.kill();
        $c9614f2ab6a788bc$var$_reverting = prevIsReverting;
        return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
        }
        return !this.parent && this.vars.immediateRender ? -1 : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for Recording.revert())
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return $c9614f2ab6a788bc$var$_onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            $c9614f2ab6a788bc$var$_onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime($c9614f2ab6a788bc$var$_parsePosition(this, position), $c9614f2ab6a788bc$var$_isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, $c9614f2ab6a788bc$var$_isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -$c9614f2ab6a788bc$var$_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -$c9614f2ab6a788bc$var$_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - $c9614f2ab6a788bc$var$_tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = $c9614f2ab6a788bc$var$_isFunction(onFulfilled) ? onFulfilled : $c9614f2ab6a788bc$var$_passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                $c9614f2ab6a788bc$var$_isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        $c9614f2ab6a788bc$var$_interrupt(this);
    };
    return Animation;
}();
$c9614f2ab6a788bc$export$dc2b19673bb53610($c9614f2ab6a788bc$export$c35d437ae5945fcd.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -$c9614f2ab6a788bc$var$_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var $c9614f2ab6a788bc$export$e6a97ba2cae5bb94 = /*#__PURE__*/ function(_Animation) {
    $c9614f2ab6a788bc$var$_inheritsLoose(Timeline, _Animation);
    function Timeline(vars, position) {
        var _this;
        if (vars === void 0) vars = {};
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = $c9614f2ab6a788bc$var$_isNotFalse(vars.sortChildren);
        $c9614f2ab6a788bc$var$_globalTimeline && $c9614f2ab6a788bc$var$_addToTimeline(vars.parent || $c9614f2ab6a788bc$var$_globalTimeline, $c9614f2ab6a788bc$var$_assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && $c9614f2ab6a788bc$var$_scrollTrigger($c9614f2ab6a788bc$var$_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
        $c9614f2ab6a788bc$var$_createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        $c9614f2ab6a788bc$var$_createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        $c9614f2ab6a788bc$var$_createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        $c9614f2ab6a788bc$var$_inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new $c9614f2ab6a788bc$export$208a41d6b4e37b97(targets, vars, $c9614f2ab6a788bc$var$_parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return $c9614f2ab6a788bc$var$_addToTimeline(this, $c9614f2ab6a788bc$export$208a41d6b4e37b97.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new $c9614f2ab6a788bc$export$208a41d6b4e37b97(targets, vars, $c9614f2ab6a788bc$var$_parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        $c9614f2ab6a788bc$var$_inheritDefaults(vars).immediateRender = $c9614f2ab6a788bc$var$_isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        $c9614f2ab6a788bc$var$_inheritDefaults(toVars).immediateRender = $c9614f2ab6a788bc$var$_isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : $c9614f2ab6a788bc$var$_roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== $c9614f2ab6a788bc$var$_globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = $c9614f2ab6a788bc$var$_roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = $c9614f2ab6a788bc$var$_animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : dur;
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : $c9614f2ab6a788bc$var$_roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && $c9614f2ab6a788bc$var$_callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    $c9614f2ab6a788bc$var$_propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = $c9614f2ab6a788bc$var$_findNextPauseTween(this, $c9614f2ab6a788bc$var$_roundPrecise(prevTime), $c9614f2ab6a788bc$var$_roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents) {
                $c9614f2ab6a788bc$var$_callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -$c9614f2ab6a788bc$var$_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || $c9614f2ab6a788bc$var$_reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -$c9614f2ab6a788bc$var$_tinyNum : $c9614f2ab6a788bc$var$_tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -$c9614f2ab6a788bc$var$_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    $c9614f2ab6a788bc$var$_setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && $c9614f2ab6a788bc$var$_callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && $c9614f2ab6a788bc$var$_removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            $c9614f2ab6a788bc$var$_callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        $c9614f2ab6a788bc$var$_isNumber(position) || (position = $c9614f2ab6a788bc$var$_parsePosition(this, position, child));
        if (!(child instanceof $c9614f2ab6a788bc$export$c35d437ae5945fcd)) {
            if ($c9614f2ab6a788bc$var$_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if ($c9614f2ab6a788bc$export$f664476fd67145ca(child)) return this.addLabel(child, position);
            if ($c9614f2ab6a788bc$var$_isFunction(child)) child = $c9614f2ab6a788bc$export$208a41d6b4e37b97.delayedCall(0, child);
            else return this;
        }
        return this !== child ? $c9614f2ab6a788bc$var$_addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -$c9614f2ab6a788bc$var$_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof $c9614f2ab6a788bc$export$208a41d6b4e37b97) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if ($c9614f2ab6a788bc$export$f664476fd67145ca(child)) return this.removeLabel(child);
        if ($c9614f2ab6a788bc$var$_isFunction(child)) return this.killTweensOf(child);
        $c9614f2ab6a788bc$export$cd008aa6cd8844e3(this, child);
        if (child === this._recent) this._recent = this._last;
        return $c9614f2ab6a788bc$var$_uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = $c9614f2ab6a788bc$var$_roundPrecise($c9614f2ab6a788bc$export$762ed8fbedb691e3.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = $c9614f2ab6a788bc$var$_parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = $c9614f2ab6a788bc$export$208a41d6b4e37b97.delayedCall(0, callback || $c9614f2ab6a788bc$var$_emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return $c9614f2ab6a788bc$var$_addToTimeline(this, t, $c9614f2ab6a788bc$var$_parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = $c9614f2ab6a788bc$var$_parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") $c9614f2ab6a788bc$var$_removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)$c9614f2ab6a788bc$var$_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = $c9614f2ab6a788bc$export$45b10814cc054894(targets), child = this._first, isGlobalTime = $c9614f2ab6a788bc$var$_isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof $c9614f2ab6a788bc$export$208a41d6b4e37b97) {
                if ($c9614f2ab6a788bc$var$_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!$c9614f2ab6a788bc$var$_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = $c9614f2ab6a788bc$var$_parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = $c9614f2ab6a788bc$export$208a41d6b4e37b97.to(tl, $c9614f2ab6a788bc$export$dc2b19673bb53610({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || $c9614f2ab6a788bc$var$_tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && $c9614f2ab6a788bc$var$_setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, $c9614f2ab6a788bc$export$dc2b19673bb53610({
            startAt: {
                time: $c9614f2ab6a788bc$var$_parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return $c9614f2ab6a788bc$var$_getLabelInDirection(this, $c9614f2ab6a788bc$var$_parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return $c9614f2ab6a788bc$var$_getLabelInDirection(this, $c9614f2ab6a788bc$var$_parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + $c9614f2ab6a788bc$var$_tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return $c9614f2ab6a788bc$var$_uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate(soft);
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return $c9614f2ab6a788bc$var$_uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = $c9614f2ab6a788bc$var$_bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    $c9614f2ab6a788bc$var$_addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            $c9614f2ab6a788bc$var$_setDuration(self, self === $c9614f2ab6a788bc$var$_globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
        if ($c9614f2ab6a788bc$var$_globalTimeline._ts) {
            $c9614f2ab6a788bc$var$_lazySafeRender($c9614f2ab6a788bc$var$_globalTimeline, $c9614f2ab6a788bc$var$_parentToChildTotalTime(time, $c9614f2ab6a788bc$var$_globalTimeline));
            $c9614f2ab6a788bc$var$_lastRenderedFrame = $c9614f2ab6a788bc$export$762ed8fbedb691e3.frame;
        }
        if ($c9614f2ab6a788bc$export$762ed8fbedb691e3.frame >= $c9614f2ab6a788bc$var$_nextGCFrame) {
            $c9614f2ab6a788bc$var$_nextGCFrame += $c9614f2ab6a788bc$export$4922bee768729a77.autoSleep || 120;
            var child = $c9614f2ab6a788bc$var$_globalTimeline._first;
            if (!child || !child._ts) {
                if ($c9614f2ab6a788bc$export$4922bee768729a77.autoSleep && $c9614f2ab6a788bc$export$762ed8fbedb691e3._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || $c9614f2ab6a788bc$export$762ed8fbedb691e3.sleep();
                }
            }
        }
    };
    return Timeline;
}($c9614f2ab6a788bc$export$c35d437ae5945fcd);
$c9614f2ab6a788bc$export$dc2b19673bb53610($c9614f2ab6a788bc$export$e6a97ba2cae5bb94.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var $c9614f2ab6a788bc$var$_addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new $c9614f2ab6a788bc$export$3a67f7f44b1e838a(this._pt, target, prop, 0, 1, $c9614f2ab6a788bc$export$c5bc8e04394ecb2, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = $c9614f2ab6a788bc$export$d5962a97e3cde94d(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match($c9614f2ab6a788bc$var$_complexStringNumExp) || [];
    while(result = $c9614f2ab6a788bc$var$_complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? $c9614f2ab6a788bc$export$dac762bc6301b560(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = $c9614f2ab6a788bc$var$_complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if ($c9614f2ab6a788bc$export$5a680e28b0b61bc.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, $c9614f2ab6a788bc$var$_addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    $c9614f2ab6a788bc$var$_isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !$c9614f2ab6a788bc$var$_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !$c9614f2ab6a788bc$var$_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !$c9614f2ab6a788bc$var$_isFunction(currentValue) ? $c9614f2ab6a788bc$var$_setterPlain : funcParam ? $c9614f2ab6a788bc$var$_setterFuncWithParam : $c9614f2ab6a788bc$var$_setterFunc, pt;
    if ($c9614f2ab6a788bc$export$f664476fd67145ca(end)) {
        if (~end.indexOf("random(")) end = $c9614f2ab6a788bc$export$d5962a97e3cde94d(end);
        if (end.charAt(1) === "=") {
            pt = $c9614f2ab6a788bc$export$dac762bc6301b560(parsedStart, end) + ($c9614f2ab6a788bc$export$65f2564e9a9b9222(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (!optional || parsedStart !== end || $c9614f2ab6a788bc$var$_forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new $c9614f2ab6a788bc$export$3a67f7f44b1e838a(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? $c9614f2ab6a788bc$var$_renderBoolean : $c9614f2ab6a788bc$var$_renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && $c9614f2ab6a788bc$export$7fb54635790b59a5(prop, end);
        return $c9614f2ab6a788bc$var$_addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || $c9614f2ab6a788bc$export$4922bee768729a77.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
$c9614f2ab6a788bc$var$_processVars = function _processVars(vars, index, target, targets, tween) {
    $c9614f2ab6a788bc$var$_isFunction(vars) && (vars = $c9614f2ab6a788bc$var$_parseFuncOrString(vars, tween, index, target, targets));
    if (!$c9614f2ab6a788bc$var$_isObject(vars) || vars.style && vars.nodeType || $c9614f2ab6a788bc$var$_isArray(vars) || $c9614f2ab6a788bc$var$_isTypedArray(vars)) return $c9614f2ab6a788bc$export$f664476fd67145ca(vars) ? $c9614f2ab6a788bc$var$_parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {}, p;
    for(p in vars)copy[p] = $c9614f2ab6a788bc$var$_parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, $c9614f2ab6a788bc$export$5c457b74208010cf = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if ($c9614f2ab6a788bc$export$d305d8ec5d7c26b8[property] && (plugin = new $c9614f2ab6a788bc$export$d305d8ec5d7c26b8[property]()).init(target, plugin.rawVars ? vars[property] : $c9614f2ab6a788bc$var$_processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new $c9614f2ab6a788bc$export$3a67f7f44b1e838a(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== $c9614f2ab6a788bc$var$_quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, $c9614f2ab6a788bc$var$_overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
$c9614f2ab6a788bc$var$_forceAllPropTweens, $c9614f2ab6a788bc$var$_initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !$c9614f2ab6a788bc$var$_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = $c9614f2ab6a788bc$var$_parseEase(ease, $c9614f2ab6a788bc$var$_defaults.ease);
    tween._yEase = yoyoEase ? $c9614f2ab6a788bc$var$_invertEase($c9614f2ab6a788bc$var$_parseEase(yoyoEase === true ? ease : yoyoEase, $c9614f2ab6a788bc$var$_defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? $c9614f2ab6a788bc$export$8b9be379d2de2a39(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = $c9614f2ab6a788bc$var$_copyExcluding(vars, $c9614f2ab6a788bc$var$_reservedProps);
        if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? $c9614f2ab6a788bc$var$_revertConfigNoKill : $c9614f2ab6a788bc$var$_startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
            // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
            prevStartAt._lazy = 0;
        }
        if (startAt) {
            $c9614f2ab6a788bc$var$_removeFromParent(tween._startAt = $c9614f2ab6a788bc$export$208a41d6b4e37b97.set(targets, $c9614f2ab6a788bc$export$dc2b19673bb53610({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: $c9614f2ab6a788bc$var$_isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.
            time < 0 && ($c9614f2ab6a788bc$var$_reverting || !immediateRender && !autoRevert) && tween._startAt.revert($c9614f2ab6a788bc$var$_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                    // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (runBackwards && dur) //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        {
            if (!prevStartAt) {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = $c9614f2ab6a788bc$export$dc2b19673bb53610({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && $c9614f2ab6a788bc$var$_isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                $c9614f2ab6a788bc$var$_removeFromParent(tween._startAt = $c9614f2ab6a788bc$export$208a41d6b4e37b97.set(targets, p));
                tween._startAt._dp = 0; // don't allow it to get put back into root timeline!
                time < 0 && ($c9614f2ab6a788bc$var$_reverting ? tween._startAt.revert($c9614f2ab6a788bc$var$_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) _initTween(tween._startAt, $c9614f2ab6a788bc$var$_tinyNum, $c9614f2ab6a788bc$var$_tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && $c9614f2ab6a788bc$var$_isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || $c9614f2ab6a788bc$var$_harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            $c9614f2ab6a788bc$var$_lazyLookup[gsData.id] && $c9614f2ab6a788bc$var$_lazyTweens.length && $c9614f2ab6a788bc$var$_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new $c9614f2ab6a788bc$export$3a67f7f44b1e838a(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if ($c9614f2ab6a788bc$export$d305d8ec5d7c26b8[p] && (plugin = $c9614f2ab6a788bc$export$5c457b74208010cf(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = $c9614f2ab6a788bc$var$_addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                $c9614f2ab6a788bc$var$_overwritingTween = tween;
                $c9614f2ab6a788bc$var$_globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                $c9614f2ab6a788bc$var$_overwritingTween = 0;
            }
            tween._pt && lazy && ($c9614f2ab6a788bc$var$_lazyLookup[gsData.id] = 1);
        }
        hasPriority && $c9614f2ab6a788bc$export$eed5824f53346d57(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render($c9614f2ab6a788bc$var$_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, $c9614f2ab6a788bc$var$_updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while(i--){
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
                // it's a plugin, so find the nested PropTween
                pt = pt.d._pt;
                while(pt && pt.p !== property && pt.fp !== property)// "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
                pt = pt._next;
            }
            if (!pt) {
                // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
                // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
                $c9614f2ab6a788bc$var$_forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
                tween.vars[property] = "+=0";
                $c9614f2ab6a788bc$var$_initTween(tween, time);
                $c9614f2ab6a788bc$var$_forceAllPropTweens = 0;
                return 1;
            }
            ptCache.push(pt);
        }
    }
    i = ptCache.length;
    while(i--){
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = $c9614f2ab6a788bc$export$9c8d725d65e13f94(value) + $c9614f2ab6a788bc$export$65f2564e9a9b9222(rootPT.e)); // mainly for CSSPlugin (end value)
        rootPT.b && (rootPT.b = pt.s + $c9614f2ab6a788bc$export$65f2564e9a9b9222(rootPT.b)); // (beginning value)
    }
}, $c9614f2ab6a788bc$var$_addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? $c9614f2ab6a788bc$export$8b9be379d2de2a39(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = $c9614f2ab6a788bc$var$_merge({}, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
$c9614f2ab6a788bc$var$_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if ($c9614f2ab6a788bc$var$_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, $c9614f2ab6a788bc$var$_parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return $c9614f2ab6a788bc$var$_isFunction(value) ? value.call(tween, i, target, targets) : $c9614f2ab6a788bc$export$f664476fd67145ca(value) && ~value.indexOf("random(") ? $c9614f2ab6a788bc$export$d5962a97e3cde94d(value) : value;
}, $c9614f2ab6a788bc$var$_staggerTweenProps = $c9614f2ab6a788bc$var$_callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", $c9614f2ab6a788bc$var$_staggerPropsToSkip = {};
$c9614f2ab6a788bc$export$f9000b814859f126($c9614f2ab6a788bc$var$_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return $c9614f2ab6a788bc$var$_staggerPropsToSkip[name] = 1;
});
var $c9614f2ab6a788bc$export$208a41d6b4e37b97 = /*#__PURE__*/ function(_Animation2) {
    $c9614f2ab6a788bc$var$_inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : $c9614f2ab6a788bc$var$_inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || $c9614f2ab6a788bc$var$_globalTimeline, parsedTargets = ($c9614f2ab6a788bc$var$_isArray(targets) || $c9614f2ab6a788bc$var$_isTypedArray(targets) ? $c9614f2ab6a788bc$var$_isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : $c9614f2ab6a788bc$export$45b10814cc054894(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? $c9614f2ab6a788bc$var$_harness(parsedTargets) : $c9614f2ab6a788bc$var$_warn("GSAP target " + targets + " not found. https://greensock.com", !$c9614f2ab6a788bc$export$4922bee768729a77.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || $c9614f2ab6a788bc$var$_isFuncOrString(duration) || $c9614f2ab6a788bc$var$_isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new $c9614f2ab6a788bc$export$e6a97ba2cae5bb94({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.
            tl.kill();
            tl.parent = tl._dp = $c9614f2ab6a788bc$var$_assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || $c9614f2ab6a788bc$var$_isFuncOrString(duration) || $c9614f2ab6a788bc$var$_isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && $c9614f2ab6a788bc$export$f02a9ddbe4480f19(stagger);
                if ($c9614f2ab6a788bc$var$_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~$c9614f2ab6a788bc$var$_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {});
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = $c9614f2ab6a788bc$var$_copyExcluding(vars, $c9614f2ab6a788bc$var$_staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && $c9614f2ab6a788bc$var$_merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +$c9614f2ab6a788bc$var$_parseFuncOrString(duration, $c9614f2ab6a788bc$var$_assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+$c9614f2ab6a788bc$var$_parseFuncOrString(delay, $c9614f2ab6a788bc$var$_assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = $c9614f2ab6a788bc$var$_easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                $c9614f2ab6a788bc$var$_inheritDefaults($c9614f2ab6a788bc$export$dc2b19673bb53610(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = $c9614f2ab6a788bc$var$_parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if ($c9614f2ab6a788bc$var$_isArray(keyframes)) {
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                    tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
                } else {
                    copy = {};
                    for(p in keyframes)p === "ease" || p === "easeEach" || $c9614f2ab6a788bc$var$_parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a.length; i++){
                            kf = a[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({}, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !$c9614f2ab6a788bc$var$_suppressOverwrites) {
            $c9614f2ab6a788bc$var$_overwritingTween = $c9614f2ab6a788bc$var$_assertThisInitialized(_this3);
            $c9614f2ab6a788bc$var$_globalTimeline.killTweensOf(parsedTargets);
            $c9614f2ab6a788bc$var$_overwritingTween = 0;
        }
        $c9614f2ab6a788bc$var$_addToTimeline(parent, $c9614f2ab6a788bc$var$_assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === $c9614f2ab6a788bc$var$_roundPrecise(parent._time) && $c9614f2ab6a788bc$var$_isNotFalse(immediateRender) && $c9614f2ab6a788bc$var$_hasNoPausedAncestors($c9614f2ab6a788bc$var$_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -$c9614f2ab6a788bc$var$_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
        }
        scrollTrigger && $c9614f2ab6a788bc$var$_scrollTrigger($c9614f2ab6a788bc$var$_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - $c9614f2ab6a788bc$var$_tinyNum && !isNegative ? tDur : totalTime < $c9614f2ab6a788bc$var$_tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) $c9614f2ab6a788bc$var$_renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = $c9614f2ab6a788bc$var$_roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = $c9614f2ab6a788bc$var$_animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    this._tTime = tTime;
                    return this;
                }
                if (iteration !== prevIteration) {
                    timeline && this._yEase && $c9614f2ab6a788bc$var$_propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render($c9614f2ab6a788bc$var$_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if ($c9614f2ab6a788bc$var$_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (prevTime !== this._time) // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
                return this;
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents) {
                $c9614f2ab6a788bc$var$_callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -$c9614f2ab6a788bc$var$_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                isNegative && $c9614f2ab6a788bc$var$_rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                $c9614f2ab6a788bc$var$_callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && $c9614f2ab6a788bc$var$_callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && $c9614f2ab6a788bc$var$_rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && $c9614f2ab6a788bc$var$_removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    $c9614f2ab6a788bc$var$_callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
        // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
        $c9614f2ab6a788bc$var$_tickerActive || $c9614f2ab6a788bc$export$762ed8fbedb691e3.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || $c9614f2ab6a788bc$var$_initTween(this, time);
        ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
        // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
        // if (_isObject(property)) { // performance optimization
        // 	for (p in property) {
        // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
        // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        // 		}
        // 	}
        // } else {
        if ($c9614f2ab6a788bc$var$_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         //}
        $c9614f2ab6a788bc$var$_alignPlayhead(this, 0);
        this.parent || $c9614f2ab6a788bc$var$_addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? $c9614f2ab6a788bc$var$_interrupt(this) : this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, $c9614f2ab6a788bc$var$_overwritingTween && $c9614f2ab6a788bc$var$_overwritingTween.vars.overwrite !== true)._first || $c9614f2ab6a788bc$var$_interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && $c9614f2ab6a788bc$var$_setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? $c9614f2ab6a788bc$export$45b10814cc054894(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && $c9614f2ab6a788bc$var$_arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return $c9614f2ab6a788bc$var$_interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if ($c9614f2ab6a788bc$export$f664476fd67145ca(vars)) {
                p = {};
                $c9614f2ab6a788bc$export$f9000b814859f126(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = $c9614f2ab6a788bc$var$_addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) $c9614f2ab6a788bc$export$cd008aa6cd8844e3(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && $c9614f2ab6a788bc$var$_interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
        return $c9614f2ab6a788bc$var$_createTweenType(1, arguments);
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return $c9614f2ab6a788bc$var$_createTweenType(2, arguments);
    };
    Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return $c9614f2ab6a788bc$var$_globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
}($c9614f2ab6a788bc$export$c35d437ae5945fcd);
$c9614f2ab6a788bc$export$dc2b19673bb53610($c9614f2ab6a788bc$export$208a41d6b4e37b97.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
$c9614f2ab6a788bc$export$f9000b814859f126("staggerTo,staggerFrom,staggerFromTo", function(name) {
    $c9614f2ab6a788bc$export$208a41d6b4e37b97[name] = function() {
        var tl = new $c9614f2ab6a788bc$export$e6a97ba2cae5bb94(), params = $c9614f2ab6a788bc$var$_slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var $c9614f2ab6a788bc$var$_setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, $c9614f2ab6a788bc$var$_setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, $c9614f2ab6a788bc$var$_setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, $c9614f2ab6a788bc$var$_setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, $c9614f2ab6a788bc$export$d60fbc1e0278aaf0 = function _getSetter(target, property) {
    return $c9614f2ab6a788bc$var$_isFunction(target[property]) ? $c9614f2ab6a788bc$var$_setterFunc : $c9614f2ab6a788bc$export$a8178c063a9fd3a1(target[property]) && target.setAttribute ? $c9614f2ab6a788bc$var$_setterAttribute : $c9614f2ab6a788bc$var$_setterPlain;
}, $c9614f2ab6a788bc$var$_renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, $c9614f2ab6a788bc$var$_renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, $c9614f2ab6a788bc$export$c5bc8e04394ecb2 = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, $c9614f2ab6a788bc$var$_renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, $c9614f2ab6a788bc$var$_addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, $c9614f2ab6a788bc$var$_killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) $c9614f2ab6a788bc$export$cd008aa6cd8844e3(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, $c9614f2ab6a788bc$var$_setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, $c9614f2ab6a788bc$export$eed5824f53346d57 = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var $c9614f2ab6a788bc$export$3a67f7f44b1e838a = /*#__PURE__*/ function() {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || $c9614f2ab6a788bc$var$_renderPlain;
        this.d = data || this;
        this.set = setter || $c9614f2ab6a788bc$var$_setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = $c9614f2ab6a788bc$var$_setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween;
}(); //Initialization tasks
$c9614f2ab6a788bc$export$f9000b814859f126($c9614f2ab6a788bc$var$_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return $c9614f2ab6a788bc$var$_reservedProps[name] = 1;
});
$c9614f2ab6a788bc$var$_globals.TweenMax = $c9614f2ab6a788bc$var$_globals.TweenLite = $c9614f2ab6a788bc$export$208a41d6b4e37b97;
$c9614f2ab6a788bc$var$_globals.TimelineLite = $c9614f2ab6a788bc$var$_globals.TimelineMax = $c9614f2ab6a788bc$export$e6a97ba2cae5bb94;
$c9614f2ab6a788bc$var$_globalTimeline = new $c9614f2ab6a788bc$export$e6a97ba2cae5bb94({
    sortChildren: false,
    defaults: $c9614f2ab6a788bc$var$_defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
$c9614f2ab6a788bc$export$4922bee768729a77.stringFilter = $c9614f2ab6a788bc$export$7eb2e5eb5eeb96a4;
var $c9614f2ab6a788bc$var$_media = [], $c9614f2ab6a788bc$var$_listeners = {}, $c9614f2ab6a788bc$var$_emptyArray = [], $c9614f2ab6a788bc$var$_lastMediaTime = 0, $c9614f2ab6a788bc$var$_dispatch = function _dispatch(type) {
    return ($c9614f2ab6a788bc$var$_listeners[type] || $c9614f2ab6a788bc$var$_emptyArray).map(function(f) {
        return f();
    });
}, $c9614f2ab6a788bc$var$_onMediaChange = function _onMediaChange() {
    var time = Date.now(), matches = [];
    if (time - $c9614f2ab6a788bc$var$_lastMediaTime > 2) {
        $c9614f2ab6a788bc$var$_dispatch("matchMediaInit");
        $c9614f2ab6a788bc$var$_media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for(p in queries){
                match = $c9614f2ab6a788bc$var$_win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
                match && (anyMatch = 1);
                if (match !== conditions[p]) {
                    conditions[p] = match;
                    toggled = 1;
                }
            }
            if (toggled) {
                c.revert();
                anyMatch && matches.push(c);
            }
        });
        $c9614f2ab6a788bc$var$_dispatch("matchMediaRevert");
        matches.forEach(function(c) {
            return c.onMatch(c);
        });
        $c9614f2ab6a788bc$var$_lastMediaTime = time;
        $c9614f2ab6a788bc$var$_dispatch("matchMedia");
    }
};
var $c9614f2ab6a788bc$var$Context = /*#__PURE__*/ function() {
    function Context(func, scope) {
        this.selector = scope && $c9614f2ab6a788bc$export$aea217a45095ce11(scope);
        this.data = [];
        this._r = []; // returned/cleanup functions
        this.isReverted = false;
        func && this.add(func);
    }
    var _proto5 = Context.prototype;
    _proto5.add = function add(name, func, scope) {
        if ($c9614f2ab6a788bc$var$_isFunction(name)) {
            scope = func;
            func = name;
            name = $c9614f2ab6a788bc$var$_isFunction;
        }
        var self = this, f = function f() {
            var prev = $c9614f2ab6a788bc$var$_context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = $c9614f2ab6a788bc$export$aea217a45095ce11(scope));
            $c9614f2ab6a788bc$var$_context = self;
            result = func.apply(self, arguments);
            $c9614f2ab6a788bc$var$_isFunction(result) && self._r.push(result);
            $c9614f2ab6a788bc$var$_context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
        };
        self.last = f;
        return name === $c9614f2ab6a788bc$var$_isFunction ? f(self) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
        var prev = $c9614f2ab6a788bc$var$_context;
        $c9614f2ab6a788bc$var$_context = null;
        func(this);
        $c9614f2ab6a788bc$var$_context = prev;
    };
    _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
            return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof $c9614f2ab6a788bc$export$208a41d6b4e37b97 && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
    };
    _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;
        if (revert) {
            var tweens = this.getTweens();
            this.data.forEach(function(t) {
                // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
                if (t.data === "isFlip") {
                    t.revert();
                    t.getChildren(true, true, false).forEach(function(tween) {
                        return tweens.splice(tweens.indexOf(tween), 1);
                    });
                }
            }); // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
            tweens.map(function(t) {
                return {
                    g: t.globalTime(0),
                    t: t
                };
            }).sort(function(a, b) {
                return b.g - a.g || -1;
            }).forEach(function(o) {
                return o.t.revert(revert);
            }); // note: all of the _startAt tweens should be reverted in reverse order that thy were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.
            this.data.forEach(function(e) {
                return !(e instanceof $c9614f2ab6a788bc$export$c35d437ae5945fcd) && e.revert && e.revert(revert);
            });
            this._r.forEach(function(f) {
                return f(revert, _this4);
            });
            this.isReverted = true;
        } else this.data.forEach(function(e) {
            return e.kill && e.kill();
        });
        this.clear();
        if (matchMedia) {
            var i = $c9614f2ab6a788bc$var$_media.indexOf(this);
            !!~i && $c9614f2ab6a788bc$var$_media.splice(i, 1);
        }
    };
    _proto5.revert = function revert(config) {
        this.kill(config || {});
    };
    return Context;
}();
var $c9614f2ab6a788bc$var$MatchMedia = /*#__PURE__*/ function() {
    function MatchMedia(scope) {
        this.contexts = [];
        this.scope = scope;
    }
    var _proto6 = MatchMedia.prototype;
    _proto6.add = function add(conditions, func, scope) {
        $c9614f2ab6a788bc$var$_isObject(conditions) || (conditions = {
            matches: conditions
        });
        var context = new $c9614f2ab6a788bc$var$Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;
        for(p in conditions)if (p === "all") active = 1;
        else {
            mq = $c9614f2ab6a788bc$var$_win.matchMedia(conditions[p]);
            if (mq) {
                $c9614f2ab6a788bc$var$_media.indexOf(context) < 0 && $c9614f2ab6a788bc$var$_media.push(context);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener($c9614f2ab6a788bc$var$_onMediaChange) : mq.addEventListener("change", $c9614f2ab6a788bc$var$_onMediaChange);
            }
        }
        active && func(context);
        return this;
    } // refresh() {
    ;
    _proto6.revert = function revert(config) {
        this.kill(config || {});
    };
    _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
            return c.kill(revert, true);
        });
    };
    return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var $c9614f2ab6a788bc$var$_gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return $c9614f2ab6a788bc$var$_createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new $c9614f2ab6a788bc$export$e6a97ba2cae5bb94(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return $c9614f2ab6a788bc$var$_globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
        $c9614f2ab6a788bc$export$f664476fd67145ca(target) && (target = $c9614f2ab6a788bc$export$45b10814cc054894(target)[0]); //in case selector text or an array is passed in
        var getter = $c9614f2ab6a788bc$export$8b9be379d2de2a39(target || {}).get, format = unit ? $c9614f2ab6a788bc$var$_passThrough : $c9614f2ab6a788bc$var$_numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function(property, unit, uncache) {
            return format(($c9614f2ab6a788bc$export$d305d8ec5d7c26b8[property] && $c9614f2ab6a788bc$export$d305d8ec5d7c26b8[property].get || getter)(target, property, unit, uncache));
        } : format(($c9614f2ab6a788bc$export$d305d8ec5d7c26b8[property] && $c9614f2ab6a788bc$export$d305d8ec5d7c26b8[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = $c9614f2ab6a788bc$export$45b10814cc054894(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return $c9614f2ab6a788bc$export$99ee26438460406a.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {};
        var Plugin = $c9614f2ab6a788bc$export$d305d8ec5d7c26b8[property], cache = $c9614f2ab6a788bc$export$8b9be379d2de2a39(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            $c9614f2ab6a788bc$var$_quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, $c9614f2ab6a788bc$var$_quickTween, 0, [
                target
            ]);
            p.render(1, p);
            $c9614f2ab6a788bc$var$_quickTween._pt && $c9614f2ab6a788bc$var$_renderPropTweens(1, $c9614f2ab6a788bc$var$_quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
        };
    },
    quickTo: function quickTo(target, property, vars) {
        var _merge2;
        var tween = $c9614f2ab6a788bc$export$99ee26438460406a.to(target, $c9614f2ab6a788bc$var$_merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
    },
    isTweening: function isTweening(targets) {
        return $c9614f2ab6a788bc$var$_globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = $c9614f2ab6a788bc$var$_parseEase(value.ease, $c9614f2ab6a788bc$var$_defaults.ease));
        return $c9614f2ab6a788bc$var$_mergeDeep($c9614f2ab6a788bc$var$_defaults, value || {});
    },
    config: function config(value) {
        return $c9614f2ab6a788bc$var$_mergeDeep($c9614f2ab6a788bc$export$4922bee768729a77, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !$c9614f2ab6a788bc$export$d305d8ec5d7c26b8[pluginName] && !$c9614f2ab6a788bc$var$_globals[pluginName] && $c9614f2ab6a788bc$var$_warn(name + " effect requires " + pluginName + " plugin.");
        });
        $c9614f2ab6a788bc$var$_effects[name] = function(targets, vars, tl) {
            return effect($c9614f2ab6a788bc$export$45b10814cc054894(targets), $c9614f2ab6a788bc$export$dc2b19673bb53610(vars || {}, defaults), tl);
        };
        if (extendTimeline) $c9614f2ab6a788bc$export$e6a97ba2cae5bb94.prototype[name] = function(targets, vars, position) {
            return this.add($c9614f2ab6a788bc$var$_effects[name](targets, $c9614f2ab6a788bc$var$_isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        $c9614f2ab6a788bc$var$_easeMap[name] = $c9614f2ab6a788bc$var$_parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? $c9614f2ab6a788bc$var$_parseEase(ease, defaultEase) : $c9614f2ab6a788bc$var$_easeMap;
    },
    getById: function getById(id) {
        return $c9614f2ab6a788bc$var$_globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {};
        var tl = new $c9614f2ab6a788bc$export$e6a97ba2cae5bb94(vars), child, next;
        tl.smoothChildTiming = $c9614f2ab6a788bc$var$_isNotFalse(vars.smoothChildTiming);
        $c9614f2ab6a788bc$var$_globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = $c9614f2ab6a788bc$var$_globalTimeline._time;
        child = $c9614f2ab6a788bc$var$_globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof $c9614f2ab6a788bc$export$208a41d6b4e37b97 && child.vars.onComplete === child._targets[0])) $c9614f2ab6a788bc$var$_addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        $c9614f2ab6a788bc$var$_addToTimeline($c9614f2ab6a788bc$var$_globalTimeline, tl, 0);
        return tl;
    },
    context: function context(func, scope) {
        return func ? new $c9614f2ab6a788bc$var$Context(func, scope) : $c9614f2ab6a788bc$var$_context;
    },
    matchMedia: function matchMedia(scope) {
        return new $c9614f2ab6a788bc$var$MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
        return $c9614f2ab6a788bc$var$_media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for(p in cond)if (cond[p]) {
                cond[p] = false;
                found = 1;
            }
            found && c.revert();
        }) || $c9614f2ab6a788bc$var$_onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
        var a = $c9614f2ab6a788bc$var$_listeners[type] || ($c9614f2ab6a788bc$var$_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
        var a = $c9614f2ab6a788bc$var$_listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
    },
    utils: {
        wrap: $c9614f2ab6a788bc$export$4997ffc0176396a6,
        wrapYoyo: $c9614f2ab6a788bc$export$cfc0b067273edc55,
        distribute: $c9614f2ab6a788bc$export$f02a9ddbe4480f19,
        random: $c9614f2ab6a788bc$export$4385e60b38654f68,
        snap: $c9614f2ab6a788bc$export$51a0620f7a28532b,
        normalize: $c9614f2ab6a788bc$export$a3295358bff77e,
        getUnit: $c9614f2ab6a788bc$export$65f2564e9a9b9222,
        clamp: $c9614f2ab6a788bc$export$7d15b64cf5a3a4c4,
        splitColor: $c9614f2ab6a788bc$export$73d6f35be992df24,
        toArray: $c9614f2ab6a788bc$export$45b10814cc054894,
        selector: $c9614f2ab6a788bc$export$aea217a45095ce11,
        mapRange: $c9614f2ab6a788bc$export$f65a7599bbc6b121,
        pipe: $c9614f2ab6a788bc$export$a4627e546088548d,
        unitize: $c9614f2ab6a788bc$export$d7502930aa5492de,
        interpolate: $c9614f2ab6a788bc$export$89e29e4ab65e70a9,
        shuffle: $c9614f2ab6a788bc$export$448332262467e042
    },
    install: $c9614f2ab6a788bc$var$_install,
    effects: $c9614f2ab6a788bc$var$_effects,
    ticker: $c9614f2ab6a788bc$export$762ed8fbedb691e3,
    updateRoot: $c9614f2ab6a788bc$export$e6a97ba2cae5bb94.updateRoot,
    plugins: $c9614f2ab6a788bc$export$d305d8ec5d7c26b8,
    globalTimeline: $c9614f2ab6a788bc$var$_globalTimeline,
    core: {
        PropTween: $c9614f2ab6a788bc$export$3a67f7f44b1e838a,
        globals: $c9614f2ab6a788bc$var$_addGlobal,
        Tween: $c9614f2ab6a788bc$export$208a41d6b4e37b97,
        Timeline: $c9614f2ab6a788bc$export$e6a97ba2cae5bb94,
        Animation: $c9614f2ab6a788bc$export$c35d437ae5945fcd,
        getCache: $c9614f2ab6a788bc$export$8b9be379d2de2a39,
        _removeLinkedListItem: $c9614f2ab6a788bc$export$cd008aa6cd8844e3,
        reverting: function reverting() {
            return $c9614f2ab6a788bc$var$_reverting;
        },
        context: function context(toAdd) {
            if (toAdd && $c9614f2ab6a788bc$var$_context) {
                $c9614f2ab6a788bc$var$_context.data.push(toAdd);
                toAdd._ctx = $c9614f2ab6a788bc$var$_context;
            }
            return $c9614f2ab6a788bc$var$_context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
            return $c9614f2ab6a788bc$var$_suppressOverwrites = value;
        }
    }
};
$c9614f2ab6a788bc$export$f9000b814859f126("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return $c9614f2ab6a788bc$var$_gsap[name] = $c9614f2ab6a788bc$export$208a41d6b4e37b97[name];
});
$c9614f2ab6a788bc$export$762ed8fbedb691e3.add($c9614f2ab6a788bc$export$e6a97ba2cae5bb94.updateRoot);
$c9614f2ab6a788bc$var$_quickTween = $c9614f2ab6a788bc$var$_gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var $c9614f2ab6a788bc$var$_getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, $c9614f2ab6a788bc$var$_addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = $c9614f2ab6a788bc$var$_getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, $c9614f2ab6a788bc$var$_buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
            tween._onInit = function(tween) {
                var temp, p;
                if ($c9614f2ab6a788bc$export$f664476fd67145ca(vars)) {
                    temp = {};
                    $c9614f2ab6a788bc$export$f9000b814859f126(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                $c9614f2ab6a788bc$var$_addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var $c9614f2ab6a788bc$export$99ee26438460406a = $c9614f2ab6a788bc$var$_gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;
        for(p in vars){
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v; // record the beginning value so we can revert()
            this._props.push(p);
        }
    },
    render: function render(ratio, data) {
        var pt = data._pt;
        while(pt){
            $c9614f2ab6a788bc$var$_reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)
            pt = pt._next;
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
}, $c9614f2ab6a788bc$var$_buildModifierPlugin("roundProps", $c9614f2ab6a788bc$export$dd12390e6b265a17), $c9614f2ab6a788bc$var$_buildModifierPlugin("modifiers"), $c9614f2ab6a788bc$var$_buildModifierPlugin("snap", $c9614f2ab6a788bc$export$51a0620f7a28532b)) || $c9614f2ab6a788bc$var$_gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
$c9614f2ab6a788bc$export$208a41d6b4e37b97.version = $c9614f2ab6a788bc$export$e6a97ba2cae5bb94.version = $c9614f2ab6a788bc$export$99ee26438460406a.version = "3.11.3";
$c9614f2ab6a788bc$var$_coreReady = 1;
$c9614f2ab6a788bc$var$_windowExists() && $c9614f2ab6a788bc$var$_wake();
var $c9614f2ab6a788bc$export$2fae1e8613537d5f = $c9614f2ab6a788bc$var$_easeMap.Power0, $c9614f2ab6a788bc$export$5d84ab4efbecec39 = $c9614f2ab6a788bc$var$_easeMap.Power1, $c9614f2ab6a788bc$export$d8c694b7490ad65d = $c9614f2ab6a788bc$var$_easeMap.Power2, $c9614f2ab6a788bc$export$acebdf2b184a0b6f = $c9614f2ab6a788bc$var$_easeMap.Power3, $c9614f2ab6a788bc$export$42e40a141003d2f0 = $c9614f2ab6a788bc$var$_easeMap.Power4, $c9614f2ab6a788bc$export$cff00ccf6e2392de = $c9614f2ab6a788bc$var$_easeMap.Linear, $c9614f2ab6a788bc$export$7005c9eb6671414d = $c9614f2ab6a788bc$var$_easeMap.Quad, $c9614f2ab6a788bc$export$755261d5a1567778 = $c9614f2ab6a788bc$var$_easeMap.Cubic, $c9614f2ab6a788bc$export$daf531446cad3d2a = $c9614f2ab6a788bc$var$_easeMap.Quart, $c9614f2ab6a788bc$export$4c407d38ce8ad8cc = $c9614f2ab6a788bc$var$_easeMap.Quint, $c9614f2ab6a788bc$export$f301627d437cff88 = $c9614f2ab6a788bc$var$_easeMap.Strong, $c9614f2ab6a788bc$export$56ebabebb04a9ca9 = $c9614f2ab6a788bc$var$_easeMap.Elastic, $c9614f2ab6a788bc$export$25e48ac541203d4a = $c9614f2ab6a788bc$var$_easeMap.Back, $c9614f2ab6a788bc$export$f7a11c7543d81853 = $c9614f2ab6a788bc$var$_easeMap.SteppedEase, $c9614f2ab6a788bc$export$d20e79fdc3899e95 = $c9614f2ab6a788bc$var$_easeMap.Bounce, $c9614f2ab6a788bc$export$bed2d20ad96b784c = $c9614f2ab6a788bc$var$_easeMap.Sine, $c9614f2ab6a788bc$export$41e9d1ff1a2fb15a = $c9614f2ab6a788bc$var$_easeMap.Expo, $c9614f2ab6a788bc$export$ce49a57dd865b86c = $c9614f2ab6a788bc$var$_easeMap.Circ;


/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ 
var $de500e7c54ced7a4$var$_win, $de500e7c54ced7a4$var$_doc, $de500e7c54ced7a4$var$_docElement, $de500e7c54ced7a4$var$_pluginInitted, $de500e7c54ced7a4$var$_tempDiv, $de500e7c54ced7a4$var$_tempDivStyler, $de500e7c54ced7a4$var$_recentSetterPlugin, $de500e7c54ced7a4$var$_reverting, $de500e7c54ced7a4$var$_windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, $de500e7c54ced7a4$var$_transformProps = {}, $de500e7c54ced7a4$var$_RAD2DEG = 180 / Math.PI, $de500e7c54ced7a4$var$_DEG2RAD = Math.PI / 180, $de500e7c54ced7a4$var$_atan2 = Math.atan2, $de500e7c54ced7a4$var$_bigNum = 1e8, $de500e7c54ced7a4$var$_capsExp = /([A-Z])/g, $de500e7c54ced7a4$var$_horizontalExp = /(left|right|width|margin|padding|x)/i, $de500e7c54ced7a4$var$_complexExp = /[\s,\(]\S/, $de500e7c54ced7a4$var$_propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, $de500e7c54ced7a4$var$_renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, $de500e7c54ced7a4$var$_renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, $de500e7c54ced7a4$var$_renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
$de500e7c54ced7a4$var$_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : .5)) + data.u, data);
}, $de500e7c54ced7a4$var$_renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, $de500e7c54ced7a4$var$_renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, $de500e7c54ced7a4$var$_setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, $de500e7c54ced7a4$var$_setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, $de500e7c54ced7a4$var$_setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, $de500e7c54ced7a4$var$_setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, $de500e7c54ced7a4$var$_setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, $de500e7c54ced7a4$var$_setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, $de500e7c54ced7a4$var$_transformProp = "transform", $de500e7c54ced7a4$var$_transformOriginProp = $de500e7c54ced7a4$var$_transformProp + "Origin", $de500e7c54ced7a4$var$_saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style;
    if (property in $de500e7c54ced7a4$var$_transformProps) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
            property = $de500e7c54ced7a4$var$_propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
                return _this.tfm[a] = $de500e7c54ced7a4$var$_get(target, a);
            }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : $de500e7c54ced7a4$var$_get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
        }
        if (this.props.indexOf($de500e7c54ced7a4$var$_transformProp) >= 0) return;
        if (target._gsap.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push($de500e7c54ced7a4$var$_transformOriginProp, isNotCSS, "");
        }
        property = $de500e7c54ced7a4$var$_transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, $de500e7c54ced7a4$var$_removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
    }
}, $de500e7c54ced7a4$var$_revertStyle = function _revertStyle() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for(i = 0; i < props.length; i += 3)// stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace($de500e7c54ced7a4$var$_capsExp, "-$1").toLowerCase());
    if (this.tfm) {
        for(p in this.tfm)cache[p] = this.tfm[p];
        if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = $de500e7c54ced7a4$var$_reverting();
        if (i && !i.isStart && !style[$de500e7c54ced7a4$var$_transformProp]) {
            $de500e7c54ced7a4$var$_removeIndependentTransforms(style);
            cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
        }
    }
}, $de500e7c54ced7a4$var$_getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
        target: target,
        props: [],
        revert: $de500e7c54ced7a4$var$_revertStyle,
        save: $de500e7c54ced7a4$var$_saveStyle
    };
    properties && properties.split(",").forEach(function(p) {
        return saver.save(p);
    });
    return saver;
}, $de500e7c54ced7a4$var$_supports3D, $de500e7c54ced7a4$export$a232bb0480ae674a = function _createElement(type, ns) {
    var e = $de500e7c54ced7a4$var$_doc.createElementNS ? $de500e7c54ced7a4$var$_doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : $de500e7c54ced7a4$var$_doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : $de500e7c54ced7a4$var$_doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, $de500e7c54ced7a4$var$_getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace($de500e7c54ced7a4$var$_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, $de500e7c54ced7a4$export$8cbef5dd49a09c8b(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, $de500e7c54ced7a4$var$_prefixes = "O,Moz,ms,Ms,Webkit".split(","), $de500e7c54ced7a4$export$8cbef5dd49a09c8b = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || $de500e7c54ced7a4$var$_tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while(i-- && !($de500e7c54ced7a4$var$_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? $de500e7c54ced7a4$var$_prefixes[i] : "") + property;
}, $de500e7c54ced7a4$var$_initCore = function _initCore() {
    if ($de500e7c54ced7a4$var$_windowExists() && window.document) {
        $de500e7c54ced7a4$var$_win = window;
        $de500e7c54ced7a4$var$_doc = $de500e7c54ced7a4$var$_win.document;
        $de500e7c54ced7a4$var$_docElement = $de500e7c54ced7a4$var$_doc.documentElement;
        $de500e7c54ced7a4$var$_tempDiv = $de500e7c54ced7a4$export$a232bb0480ae674a("div") || {
            style: {}
        };
        $de500e7c54ced7a4$var$_tempDivStyler = $de500e7c54ced7a4$export$a232bb0480ae674a("div");
        $de500e7c54ced7a4$var$_transformProp = $de500e7c54ced7a4$export$8cbef5dd49a09c8b($de500e7c54ced7a4$var$_transformProp);
        $de500e7c54ced7a4$var$_transformOriginProp = $de500e7c54ced7a4$var$_transformProp + "Origin";
        $de500e7c54ced7a4$var$_tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        $de500e7c54ced7a4$var$_supports3D = !!$de500e7c54ced7a4$export$8cbef5dd49a09c8b("perspective");
        $de500e7c54ced7a4$var$_reverting = (0, $c9614f2ab6a788bc$export$99ee26438460406a).core.reverting;
        $de500e7c54ced7a4$var$_pluginInitted = 1;
    }
}, $de500e7c54ced7a4$var$_getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = $de500e7c54ced7a4$export$a232bb0480ae674a("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    $de500e7c54ced7a4$var$_docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
        this.getBBox = _getBBoxHack;
    } catch (e) {}
    else if (this._gsapBBox) bbox = this._gsapBBox();
    if (oldParent) {
        if (oldSibling) oldParent.insertBefore(this, oldSibling);
        else oldParent.appendChild(this);
    }
    $de500e7c54ced7a4$var$_docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, $de500e7c54ced7a4$var$_getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, $de500e7c54ced7a4$export$41bc7c2d1e04f11b = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = $de500e7c54ced7a4$var$_getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === $de500e7c54ced7a4$var$_getBBoxHack || (bounds = $de500e7c54ced7a4$var$_getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +$de500e7c54ced7a4$var$_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +$de500e7c54ced7a4$var$_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, $de500e7c54ced7a4$var$_isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && $de500e7c54ced7a4$export$41bc7c2d1e04f11b(e));
}, //reports if the element is an SVG on which getBBox() actually works
$de500e7c54ced7a4$var$_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style;
        if (property in $de500e7c54ced7a4$var$_transformProps && property !== $de500e7c54ced7a4$var$_transformOriginProp) property = $de500e7c54ced7a4$var$_transformProp;
        if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(property.replace($de500e7c54ced7a4$var$_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, $de500e7c54ced7a4$var$_addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new (0, $c9614f2ab6a788bc$export$3a67f7f44b1e838a)(plugin._pt, target, property, 0, 1, onlySetAtEnd ? $de500e7c54ced7a4$var$_renderNonTweeningValueOnlyAtEnd : $de500e7c54ced7a4$var$_renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, $de500e7c54ced7a4$var$_nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, $de500e7c54ced7a4$var$_nonStandardLayouts = {
    grid: 1,
    flex: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
$de500e7c54ced7a4$var$_convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = $de500e7c54ced7a4$var$_tempDiv.style, horizontal = $de500e7c54ced7a4$var$_horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || $de500e7c54ced7a4$var$_nonConvertibleUnits[unit] || $de500e7c54ced7a4$var$_nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && $de500e7c54ced7a4$var$_isSVG(target);
    if ((toPercent || curUnit === "%") && ($de500e7c54ced7a4$var$_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
    if (!parent || parent === $de500e7c54ced7a4$var$_doc || !parent.appendChild) parent = $de500e7c54ced7a4$var$_doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === (0, $c9614f2ab6a788bc$export$762ed8fbedb691e3).time && !cache.uncache) return (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(curValue / cache.width * amount);
    else {
        (toPercent || curUnit === "%") && !$de500e7c54ced7a4$var$_nonStandardLayouts[$de500e7c54ced7a4$var$_getComputedProperty(parent, "display")] && (style.position = $de500e7c54ced7a4$var$_getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
        parent.appendChild($de500e7c54ced7a4$var$_tempDiv);
        px = $de500e7c54ced7a4$var$_tempDiv[measureProperty];
        parent.removeChild($de500e7c54ced7a4$var$_tempDiv);
        style.position = "absolute";
        if (horizontal && toPercent) {
            cache = (0, $c9614f2ab6a788bc$export$8b9be379d2de2a39)(parent);
            cache.time = (0, $c9614f2ab6a788bc$export$762ed8fbedb691e3).time;
            cache.width = parent[measureProperty];
        }
    }
    return (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, $de500e7c54ced7a4$var$_get = function _get(target, property, unit, uncache) {
    var value;
    $de500e7c54ced7a4$var$_pluginInitted || $de500e7c54ced7a4$var$_initCore();
    if (property in $de500e7c54ced7a4$var$_propertyAliases && property !== "transform") {
        property = $de500e7c54ced7a4$var$_propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if ($de500e7c54ced7a4$var$_transformProps[property] && property !== "transform") {
        value = $de500e7c54ced7a4$var$_parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : $de500e7c54ced7a4$var$_firstTwoOnly($de500e7c54ced7a4$var$_getComputedProperty(target, $de500e7c54ced7a4$var$_transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = $de500e7c54ced7a4$var$_specialProps[property] && $de500e7c54ced7a4$var$_specialProps[property](target, property, unit) || $de500e7c54ced7a4$var$_getComputedProperty(target, property) || (0, $c9614f2ab6a788bc$export$51d6bbe898aef1f9)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? $de500e7c54ced7a4$var$_convertToUnit(target, property, value, unit) + unit : value;
}, $de500e7c54ced7a4$var$_tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = $de500e7c54ced7a4$export$8cbef5dd49a09c8b(prop, target, 1), s = p && $de500e7c54ced7a4$var$_getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = $de500e7c54ced7a4$var$_getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new (0, $c9614f2ab6a788bc$export$3a67f7f44b1e838a)(this._pt, target.style, prop, 0, 1, (0, $c9614f2ab6a788bc$export$c5bc8e04394ecb2)), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings
    end += "";
    if (end === "auto") {
        target.style[prop] = end;
        end = $de500e7c54ced7a4$var$_getComputedProperty(target, prop) || end;
        target.style[prop] = start;
    }
    a = [
        start,
        end
    ];
    (0, $c9614f2ab6a788bc$export$7eb2e5eb5eeb96a4)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match((0, $c9614f2ab6a788bc$export$65c88bbd597e7b0a)) || [];
    endValues = end.match((0, $c9614f2ab6a788bc$export$65c88bbd597e7b0a)) || [];
    if (endValues.length) {
        while(result = (0, $c9614f2ab6a788bc$export$65c88bbd597e7b0a).exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = (0, $c9614f2ab6a788bc$export$dac762bc6301b560)(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = (0, $c9614f2ab6a788bc$export$65c88bbd597e7b0a).lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || (0, $c9614f2ab6a788bc$export$4922bee768729a77).units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = $de500e7c54ced7a4$var$_convertToUnit(target, prop, startValue, endUnit) || 0;
                 // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? $de500e7c54ced7a4$var$_renderNonTweeningValueOnlyAtEnd : $de500e7c54ced7a4$var$_renderNonTweeningValue;
    (0, $c9614f2ab6a788bc$export$5a680e28b0b61bc).test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, $de500e7c54ced7a4$var$_keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, $de500e7c54ced7a4$var$_convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = $de500e7c54ced7a4$var$_keywordToPercent[x] || x;
    split[1] = $de500e7c54ced7a4$var$_keywordToPercent[y] || y;
    return split.join(" ");
}, $de500e7c54ced7a4$var$_renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if ($de500e7c54ced7a4$var$_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? $de500e7c54ced7a4$var$_transformOriginProp : $de500e7c54ced7a4$var$_transformProp;
                }
                $de500e7c54ced7a4$var$_removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            $de500e7c54ced7a4$var$_removeProperty(target, $de500e7c54ced7a4$var$_transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                $de500e7c54ced7a4$var$_parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
                $de500e7c54ced7a4$var$_removeIndependentTransforms(style);
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
$de500e7c54ced7a4$var$_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new (0, $c9614f2ab6a788bc$export$3a67f7f44b1e838a)(plugin._pt, target, property, 0, 0, $de500e7c54ced7a4$var$_renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ $de500e7c54ced7a4$var$_identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], $de500e7c54ced7a4$var$_rotationalProperties = {}, $de500e7c54ced7a4$var$_isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, $de500e7c54ced7a4$var$_getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = $de500e7c54ced7a4$var$_getComputedProperty(target, $de500e7c54ced7a4$var$_transformProp);
    return $de500e7c54ced7a4$var$_isNullTransform(matrixString) ? $de500e7c54ced7a4$var$_identity2DMatrix : matrixString.substr(7).match((0, $c9614f2ab6a788bc$export$b9d44bb6523120d6)).map((0, $c9614f2ab6a788bc$export$9c8d725d65e13f94));
}, $de500e7c54ced7a4$var$_getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, $c9614f2ab6a788bc$export$8b9be379d2de2a39)(target), style = target.style, matrix = $de500e7c54ced7a4$var$_getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? $de500e7c54ced7a4$var$_identity2DMatrix : matrix;
    } else if (matrix === $de500e7c54ced7a4$var$_identity2DMatrix && !target.offsetParent && target !== $de500e7c54ced7a4$var$_docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextElementSibling;
            $de500e7c54ced7a4$var$_docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = $de500e7c54ced7a4$var$_getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : $de500e7c54ced7a4$var$_removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : $de500e7c54ced7a4$var$_docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, $de500e7c54ced7a4$var$_applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || $de500e7c54ced7a4$var$_getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = $de500e7c54ced7a4$export$41bc7c2d1e04f11b(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== $de500e7c54ced7a4$var$_identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[$de500e7c54ced7a4$var$_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        $de500e7c54ced7a4$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        $de500e7c54ced7a4$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        $de500e7c54ced7a4$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        $de500e7c54ced7a4$var$_addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, $de500e7c54ced7a4$var$_parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new (0, $c9614f2ab6a788bc$export$cf10981d5419cad5)(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = $de500e7c54ced7a4$var$_getComputedProperty(target, $de500e7c54ced7a4$var$_transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && $de500e7c54ced7a4$var$_isSVG(target));
    if (cs.translate) {
        // accommodate independent transforms by combining them into normal ones.
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[$de500e7c54ced7a4$var$_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[$de500e7c54ced7a4$var$_transformProp] !== "none" ? cs[$de500e7c54ced7a4$var$_transformProp] : "");
        style.scale = style.rotate = style.translate = "none";
    }
    matrix = $de500e7c54ced7a4$var$_getMatrix(target, cache.svg);
    if (cache.svg) {
        if (cache.uncache) {
            // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
        } else t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        $de500e7c54ced7a4$var$_applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== $de500e7c54ced7a4$var$_identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? $de500e7c54ced7a4$var$_atan2(b, a) * $de500e7c54ced7a4$var$_RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? $de500e7c54ced7a4$var$_atan2(c, d) * $de500e7c54ced7a4$var$_RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * $de500e7c54ced7a4$var$_DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = $de500e7c54ced7a4$var$_atan2(a32, a33);
            rotationX = angle * $de500e7c54ced7a4$var$_RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = $de500e7c54ced7a4$var$_atan2(-c, a33);
            rotationY = angle * $de500e7c54ced7a4$var$_RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = $de500e7c54ced7a4$var$_atan2(b, a);
            rotation = angle * $de500e7c54ced7a4$var$_RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(Math.sqrt(a22 * a22 + a32 * a32));
            angle = $de500e7c54ced7a4$var$_atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * $de500e7c54ced7a4$var$_RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !$de500e7c54ced7a4$var$_isNullTransform($de500e7c54ced7a4$var$_getComputedProperty(target, $de500e7c54ced7a4$var$_transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(scaleX);
    cache.scaleY = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(scaleY);
    cache.rotation = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(rotation) + deg;
    cache.rotationX = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(rotationX) + deg;
    cache.rotationY = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[$de500e7c54ced7a4$var$_transformOriginProp] = $de500e7c54ced7a4$var$_firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = (0, $c9614f2ab6a788bc$export$4922bee768729a77).force3D;
    cache.renderTransform = cache.svg ? $de500e7c54ced7a4$var$_renderSVGTransforms : $de500e7c54ced7a4$var$_supports3D ? $de500e7c54ced7a4$var$_renderCSSTransforms : $de500e7c54ced7a4$var$_renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, $de500e7c54ced7a4$var$_firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
$de500e7c54ced7a4$var$_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, $c9614f2ab6a788bc$export$65f2564e9a9b9222)(start);
    return (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(parseFloat(start) + parseFloat($de500e7c54ced7a4$var$_convertToUnit(target, "x", value + "px", unit))) + unit;
}, $de500e7c54ced7a4$var$_renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    $de500e7c54ced7a4$var$_renderCSSTransforms(ratio, cache);
}, $de500e7c54ced7a4$var$_zeroDeg = "0deg", $de500e7c54ced7a4$var$_zeroPx = "0px", $de500e7c54ced7a4$var$_endParenthesis = ") ", $de500e7c54ced7a4$var$_renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== $de500e7c54ced7a4$var$_zeroDeg || rotationY !== $de500e7c54ced7a4$var$_zeroDeg)) {
        var angle = parseFloat(rotationY) * $de500e7c54ced7a4$var$_DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * $de500e7c54ced7a4$var$_DEG2RAD;
        cos = Math.cos(angle);
        x = $de500e7c54ced7a4$var$_addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = $de500e7c54ced7a4$var$_addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = $de500e7c54ced7a4$var$_addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== $de500e7c54ced7a4$var$_zeroPx) transforms += "perspective(" + transformPerspective + $de500e7c54ced7a4$var$_endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== $de500e7c54ced7a4$var$_zeroPx || y !== $de500e7c54ced7a4$var$_zeroPx || z !== $de500e7c54ced7a4$var$_zeroPx) transforms += z !== $de500e7c54ced7a4$var$_zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + $de500e7c54ced7a4$var$_endParenthesis;
    if (rotation !== $de500e7c54ced7a4$var$_zeroDeg) transforms += "rotate(" + rotation + $de500e7c54ced7a4$var$_endParenthesis;
    if (rotationY !== $de500e7c54ced7a4$var$_zeroDeg) transforms += "rotateY(" + rotationY + $de500e7c54ced7a4$var$_endParenthesis;
    if (rotationX !== $de500e7c54ced7a4$var$_zeroDeg) transforms += "rotateX(" + rotationX + $de500e7c54ced7a4$var$_endParenthesis;
    if (skewX !== $de500e7c54ced7a4$var$_zeroDeg || skewY !== $de500e7c54ced7a4$var$_zeroDeg) transforms += "skew(" + skewX + ", " + skewY + $de500e7c54ced7a4$var$_endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + $de500e7c54ced7a4$var$_endParenthesis;
    target.style[$de500e7c54ced7a4$var$_transformProp] = transforms || "translate(0, 0)";
}, $de500e7c54ced7a4$var$_renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= $de500e7c54ced7a4$var$_DEG2RAD;
        skewX *= $de500e7c54ced7a4$var$_DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= $de500e7c54ced7a4$var$_DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(a11);
        a21 = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(a21);
        a12 = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(a12);
        a22 = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = $de500e7c54ced7a4$var$_convertToUnit(target, "x", x, "px");
        ty = $de500e7c54ced7a4$var$_convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(tx + xPercent / 100 * temp.width);
        ty = (0, $c9614f2ab6a788bc$export$9c8d725d65e13f94)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[$de500e7c54ced7a4$var$_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
}, $de500e7c54ced7a4$var$_addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = (0, $c9614f2ab6a788bc$export$f664476fd67145ca)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? $de500e7c54ced7a4$var$_RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * $de500e7c54ced7a4$var$_bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * $de500e7c54ced7a4$var$_bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new (0, $c9614f2ab6a788bc$export$3a67f7f44b1e838a)(plugin._pt, target, property, startNum, change, $de500e7c54ced7a4$var$_renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, $de500e7c54ced7a4$var$_assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, $de500e7c54ced7a4$var$_addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = $de500e7c54ced7a4$var$_assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[$de500e7c54ced7a4$var$_transformProp] = transforms;
        endCache = $de500e7c54ced7a4$var$_parseTransform(target, 1);
        $de500e7c54ced7a4$var$_removeProperty(target, $de500e7c54ced7a4$var$_transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[$de500e7c54ced7a4$var$_transformProp];
        style[$de500e7c54ced7a4$var$_transformProp] = transforms;
        endCache = $de500e7c54ced7a4$var$_parseTransform(target, 1);
        style[$de500e7c54ced7a4$var$_transformProp] = startValue;
    }
    for(p in $de500e7c54ced7a4$var$_transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, $c9614f2ab6a788bc$export$65f2564e9a9b9222)(startValue);
            endUnit = (0, $c9614f2ab6a788bc$export$65f2564e9a9b9222)(endValue);
            startNum = startUnit !== endUnit ? $de500e7c54ced7a4$var$_convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new (0, $c9614f2ab6a788bc$export$3a67f7f44b1e838a)(plugin._pt, endCache, p, startNum, endNum - startNum, $de500e7c54ced7a4$var$_renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    $de500e7c54ced7a4$var$_assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
(0, $c9614f2ab6a788bc$export$f9000b814859f126)("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    $de500e7c54ced7a4$var$_specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return $de500e7c54ced7a4$var$_get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var $de500e7c54ced7a4$export$855822f522f18eef = {
    name: "css",
    register: $de500e7c54ced7a4$var$_initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
        $de500e7c54ced7a4$var$_pluginInitted || $de500e7c54ced7a4$var$_initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps
        this.styles = this.styles || $de500e7c54ced7a4$var$_getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if ((0, $c9614f2ab6a788bc$export$d305d8ec5d7c26b8)[p] && (0, $c9614f2ab6a788bc$export$5c457b74208010cf)(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = $de500e7c54ced7a4$var$_specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = (0, $c9614f2ab6a788bc$export$d5962a97e3cde94d)(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                (0, $c9614f2ab6a788bc$export$dd733e62515be2bd).lastIndex = 0;
                if (!(0, $c9614f2ab6a788bc$export$dd733e62515be2bd).test(startValue)) {
                    // colors don't have units
                    startUnit = (0, $c9614f2ab6a788bc$export$65f2564e9a9b9222)(startValue);
                    endUnit = (0, $c9614f2ab6a788bc$export$65f2564e9a9b9222)(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = $de500e7c54ced7a4$var$_convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
                inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    (0, $c9614f2ab6a788bc$export$f664476fd67145ca)(startValue) && ~startValue.indexOf("random(") && (startValue = (0, $c9614f2ab6a788bc$export$d5962a97e3cde94d)(startValue));
                    (0, $c9614f2ab6a788bc$export$65f2564e9a9b9222)(startValue + "") || (startValue += (0, $c9614f2ab6a788bc$export$4922bee768729a77).units[p] || (0, $c9614f2ab6a788bc$export$65f2564e9a9b9222)($de500e7c54ced7a4$var$_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = $de500e7c54ced7a4$var$_get(target, p)); // can't work with relative values
                } else startValue = $de500e7c54ced7a4$var$_get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in $de500e7c54ced7a4$var$_propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && $de500e7c54ced7a4$var$_get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        inlineProps.push("visibility", 0, style.visibility);
                        $de500e7c54ced7a4$var$_addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = $de500e7c54ced7a4$var$_propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in $de500e7c54ced7a4$var$_transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    this.styles.save(p);
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || $de500e7c54ced7a4$var$_parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new (0, $c9614f2ab6a788bc$export$3a67f7f44b1e838a)(this._pt, style, $de500e7c54ced7a4$var$_transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new (0, $c9614f2ab6a788bc$export$3a67f7f44b1e838a)(this._pt, cache, "scaleY", startNum, (relative ? (0, $c9614f2ab6a788bc$export$dac762bc6301b560)(startNum, relative + endNum) : endNum) - startNum || 0, $de500e7c54ced7a4$var$_renderCSSProp);
                        this._pt.u = 0;
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        inlineProps.push($de500e7c54ced7a4$var$_transformOriginProp, 0, style[$de500e7c54ced7a4$var$_transformOriginProp]);
                        endValue = $de500e7c54ced7a4$var$_convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) $de500e7c54ced7a4$var$_applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && $de500e7c54ced7a4$var$_addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            $de500e7c54ced7a4$var$_addNonTweeningPT(this, style, p, $de500e7c54ced7a4$var$_firstTwoOnly(startValue), $de500e7c54ced7a4$var$_firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        $de500e7c54ced7a4$var$_applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in $de500e7c54ced7a4$var$_rotationalProperties) {
                        $de500e7c54ced7a4$var$_addRotationalPropTween(this, cache, p, startNum, relative ? (0, $c9614f2ab6a788bc$export$dac762bc6301b560)(startNum, relative + endValue) : endValue);
                        continue;
                    } else if (p === "smoothOrigin") {
                        $de500e7c54ced7a4$var$_addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        $de500e7c54ced7a4$var$_addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = $de500e7c54ced7a4$export$8cbef5dd49a09c8b(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !$de500e7c54ced7a4$var$_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = (0, $c9614f2ab6a788bc$export$65f2564e9a9b9222)(endValue) || (p in (0, $c9614f2ab6a788bc$export$4922bee768729a77).units ? (0, $c9614f2ab6a788bc$export$4922bee768729a77).units[p] : startUnit);
                    startUnit !== endUnit && (startNum = $de500e7c54ced7a4$var$_convertToUnit(target, p, startValue, endUnit));
                    this._pt = new (0, $c9614f2ab6a788bc$export$3a67f7f44b1e838a)(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, $c9614f2ab6a788bc$export$dac762bc6301b560)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? $de500e7c54ced7a4$var$_renderRoundedCSSProp : $de500e7c54ced7a4$var$_renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = $de500e7c54ced7a4$var$_renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                    else {
                        (0, $c9614f2ab6a788bc$export$7fb54635790b59a5)(p, endValue);
                        continue;
                    }
                } else $de500e7c54ced7a4$var$_tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                props.push(p);
            }
        }
        hasPriority && (0, $c9614f2ab6a788bc$export$eed5824f53346d57)(this);
    },
    render: function render(ratio, data) {
        if (data.tween._time || !$de500e7c54ced7a4$var$_reverting()) {
            var pt = data._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        } else data.styles.revert();
    },
    get: $de500e7c54ced7a4$var$_get,
    aliases: $de500e7c54ced7a4$var$_propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = $de500e7c54ced7a4$var$_propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in $de500e7c54ced7a4$var$_transformProps && property !== $de500e7c54ced7a4$var$_transformOriginProp && (target._gsap.x || $de500e7c54ced7a4$var$_get(target, "x")) ? plugin && $de500e7c54ced7a4$var$_recentSetterPlugin === plugin ? property === "scale" ? $de500e7c54ced7a4$var$_setterScale : $de500e7c54ced7a4$var$_setterTransform : ($de500e7c54ced7a4$var$_recentSetterPlugin = plugin || {}, property === "scale" ? $de500e7c54ced7a4$var$_setterScaleWithRender : $de500e7c54ced7a4$var$_setterTransformWithRender) : target.style && !(0, $c9614f2ab6a788bc$export$a8178c063a9fd3a1)(target.style[property]) ? $de500e7c54ced7a4$var$_setterCSSStyle : ~property.indexOf("-") ? $de500e7c54ced7a4$var$_setterCSSProp : (0, $c9614f2ab6a788bc$export$d60fbc1e0278aaf0)(target, property);
    },
    core: {
        _removeProperty: $de500e7c54ced7a4$var$_removeProperty,
        _getMatrix: $de500e7c54ced7a4$var$_getMatrix
    }
};
(0, $c9614f2ab6a788bc$export$99ee26438460406a).utils.checkPrefix = $de500e7c54ced7a4$export$8cbef5dd49a09c8b;
(0, $c9614f2ab6a788bc$export$99ee26438460406a).core.getStyleSaver = $de500e7c54ced7a4$var$_getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
    var all = (0, $c9614f2ab6a788bc$export$f9000b814859f126)(positionAndScale + "," + rotation + "," + others, function(name) {
        $de500e7c54ced7a4$var$_transformProps[name] = 1;
    });
    (0, $c9614f2ab6a788bc$export$f9000b814859f126)(rotation, function(name) {
        (0, $c9614f2ab6a788bc$export$4922bee768729a77).units[name] = "deg";
        $de500e7c54ced7a4$var$_rotationalProperties[name] = 1;
    });
    $de500e7c54ced7a4$var$_propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, $c9614f2ab6a788bc$export$f9000b814859f126)(aliases, function(name) {
        var split = name.split(":");
        $de500e7c54ced7a4$var$_propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, $c9614f2ab6a788bc$export$f9000b814859f126)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    (0, $c9614f2ab6a788bc$export$4922bee768729a77).units[name] = "px";
});
(0, $c9614f2ab6a788bc$export$99ee26438460406a).registerPlugin($de500e7c54ced7a4$export$855822f522f18eef);


var $1c7744dc13ad1b21$export$99ee26438460406a = (0, $c9614f2ab6a788bc$export$99ee26438460406a).registerPlugin((0, $de500e7c54ced7a4$export$855822f522f18eef)) || (0, $c9614f2ab6a788bc$export$99ee26438460406a), // to protect from tree shaking
$1c7744dc13ad1b21$export$7b23975ad686bf91 = $1c7744dc13ad1b21$export$99ee26438460406a.core.Tween;


/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ function $0f0e1503ed2c844e$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $0f0e1503ed2c844e$var$_createClass(Constructor, protoProps, staticProps) {
    if (protoProps) $0f0e1503ed2c844e$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $0f0e1503ed2c844e$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}
/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var $0f0e1503ed2c844e$var$gsap, $0f0e1503ed2c844e$var$_coreInitted, $0f0e1503ed2c844e$var$_clamp, $0f0e1503ed2c844e$var$_win, $0f0e1503ed2c844e$var$_doc, $0f0e1503ed2c844e$var$_docEl, $0f0e1503ed2c844e$var$_body, $0f0e1503ed2c844e$var$_isTouch, $0f0e1503ed2c844e$var$_pointerType, $0f0e1503ed2c844e$var$ScrollTrigger, $0f0e1503ed2c844e$var$_root, $0f0e1503ed2c844e$var$_normalizer, $0f0e1503ed2c844e$var$_eventTypes, $0f0e1503ed2c844e$var$_getGSAP = function _getGSAP() {
    return $0f0e1503ed2c844e$var$gsap || typeof window !== "undefined" && ($0f0e1503ed2c844e$var$gsap = window.gsap) && $0f0e1503ed2c844e$var$gsap.registerPlugin && $0f0e1503ed2c844e$var$gsap;
}, $0f0e1503ed2c844e$var$_passThrough = function _passThrough(p) {
    return p;
}, $0f0e1503ed2c844e$var$_startup = 1, $0f0e1503ed2c844e$var$_observers = [], $0f0e1503ed2c844e$export$3cd1cee43d19b683 = [], $0f0e1503ed2c844e$export$d8e56d510a804d0a = [], $0f0e1503ed2c844e$var$_getTime = Date.now, $0f0e1503ed2c844e$var$_bridge = function _bridge(name, value) {
    return value;
}, $0f0e1503ed2c844e$var$_integrate = function _integrate() {
    var core = $0f0e1503ed2c844e$var$ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, $0f0e1503ed2c844e$export$3cd1cee43d19b683);
    proxies.push.apply(proxies, $0f0e1503ed2c844e$export$d8e56d510a804d0a);
    $0f0e1503ed2c844e$export$3cd1cee43d19b683 = scrollers;
    $0f0e1503ed2c844e$export$d8e56d510a804d0a = proxies;
    $0f0e1503ed2c844e$var$_bridge = function _bridge(name, value) {
        return data[name](value);
    };
}, $0f0e1503ed2c844e$export$6078f1ef08b38af9 = function _getProxyProp(element, property) {
    return ~$0f0e1503ed2c844e$export$d8e56d510a804d0a.indexOf(element) && $0f0e1503ed2c844e$export$d8e56d510a804d0a[$0f0e1503ed2c844e$export$d8e56d510a804d0a.indexOf(element) + 1][property];
}, $0f0e1503ed2c844e$export$4330f3a92e5d2e94 = function _isViewport(el) {
    return !!~$0f0e1503ed2c844e$var$_root.indexOf(el);
}, $0f0e1503ed2c844e$var$_addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
    });
}, $0f0e1503ed2c844e$var$_removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, $0f0e1503ed2c844e$var$_scrollLeft = "scrollLeft", $0f0e1503ed2c844e$var$_scrollTop = "scrollTop", $0f0e1503ed2c844e$var$_onScroll = function _onScroll() {
    return $0f0e1503ed2c844e$var$_normalizer && $0f0e1503ed2c844e$var$_normalizer.isPressed || $0f0e1503ed2c844e$export$3cd1cee43d19b683.cache++;
}, $0f0e1503ed2c844e$var$_scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
        // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
        if (value || value === 0) {
            $0f0e1503ed2c844e$var$_startup && ($0f0e1503ed2c844e$var$_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.
            var isNormalizing = $0f0e1503ed2c844e$var$_normalizer && $0f0e1503ed2c844e$var$_normalizer.isPressed;
            value = cachingFunc.v = Math.round(value) || ($0f0e1503ed2c844e$var$_normalizer && $0f0e1503ed2c844e$var$_normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!
            f(value);
            cachingFunc.cacheID = $0f0e1503ed2c844e$export$3cd1cee43d19b683.cache;
            isNormalizing && $0f0e1503ed2c844e$var$_bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
        } else if (doNotCache || $0f0e1503ed2c844e$export$3cd1cee43d19b683.cache !== cachingFunc.cacheID || $0f0e1503ed2c844e$var$_bridge("ref")) {
            cachingFunc.cacheID = $0f0e1503ed2c844e$export$3cd1cee43d19b683.cache;
            cachingFunc.v = f();
        }
        return cachingFunc.v + cachingFunc.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
}, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1 = {
    s: $0f0e1503ed2c844e$var$_scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: $0f0e1503ed2c844e$var$_scrollCacheFunc(function(value) {
        return arguments.length ? $0f0e1503ed2c844e$var$_win.scrollTo(value, $0f0e1503ed2c844e$export$8e40fc98ff518e9d.sc()) : $0f0e1503ed2c844e$var$_win.pageXOffset || $0f0e1503ed2c844e$var$_doc[$0f0e1503ed2c844e$var$_scrollLeft] || $0f0e1503ed2c844e$var$_docEl[$0f0e1503ed2c844e$var$_scrollLeft] || $0f0e1503ed2c844e$var$_body[$0f0e1503ed2c844e$var$_scrollLeft] || 0;
    })
}, $0f0e1503ed2c844e$export$8e40fc98ff518e9d = {
    s: $0f0e1503ed2c844e$var$_scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: $0f0e1503ed2c844e$export$b2cabb342cb0ebe1,
    sc: $0f0e1503ed2c844e$var$_scrollCacheFunc(function(value) {
        return arguments.length ? $0f0e1503ed2c844e$var$_win.scrollTo($0f0e1503ed2c844e$export$b2cabb342cb0ebe1.sc(), value) : $0f0e1503ed2c844e$var$_win.pageYOffset || $0f0e1503ed2c844e$var$_doc[$0f0e1503ed2c844e$var$_scrollTop] || $0f0e1503ed2c844e$var$_docEl[$0f0e1503ed2c844e$var$_scrollTop] || $0f0e1503ed2c844e$var$_body[$0f0e1503ed2c844e$var$_scrollTop] || 0;
    })
}, $0f0e1503ed2c844e$export$937374fea3f88711 = function _getTarget(t) {
    return $0f0e1503ed2c844e$var$gsap.utils.toArray(t)[0] || (typeof t === "string" && $0f0e1503ed2c844e$var$gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
}, $0f0e1503ed2c844e$export$8665aac53dad5647 = function _getScrollFunc(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
    $0f0e1503ed2c844e$export$4330f3a92e5d2e94(element) && (element = $0f0e1503ed2c844e$var$_doc.scrollingElement || $0f0e1503ed2c844e$var$_docEl);
    var i = $0f0e1503ed2c844e$export$3cd1cee43d19b683.indexOf(element), offset = sc === $0f0e1503ed2c844e$export$8e40fc98ff518e9d.sc ? 1 : 2;
    !~i && (i = $0f0e1503ed2c844e$export$3cd1cee43d19b683.push(element) - 1);
    $0f0e1503ed2c844e$export$3cd1cee43d19b683[i + offset] || element.addEventListener("scroll", $0f0e1503ed2c844e$var$_onScroll); // clear the cache when a scroll occurs
    var prev = $0f0e1503ed2c844e$export$3cd1cee43d19b683[i + offset], func = prev || ($0f0e1503ed2c844e$export$3cd1cee43d19b683[i + offset] = $0f0e1503ed2c844e$var$_scrollCacheFunc($0f0e1503ed2c844e$export$6078f1ef08b38af9(element, s), true) || ($0f0e1503ed2c844e$export$4330f3a92e5d2e94(element) ? sc : $0f0e1503ed2c844e$var$_scrollCacheFunc(function(value) {
        return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = $0f0e1503ed2c844e$var$gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.
    return func;
}, $0f0e1503ed2c844e$export$5de019f4480f0f8d = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = $0f0e1503ed2c844e$var$_getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
        var t = $0f0e1503ed2c844e$var$_getTime();
        if (force || t - t1 > min) {
            v2 = v1;
            v1 = value;
            t2 = t1;
            t1 = t;
        } else if (useDelta) v1 += value;
        else // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
        v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }, reset = function reset() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
    }, getVelocity = function getVelocity(latestValue) {
        var tOld = t2, vOld = v2, t = $0f0e1503ed2c844e$var$_getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
    };
    return {
        update: update,
        reset: reset,
        getVelocity: getVelocity
    };
}, $0f0e1503ed2c844e$var$_getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
}, $0f0e1503ed2c844e$var$_getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
}, $0f0e1503ed2c844e$var$_setScrollTrigger = function _setScrollTrigger() {
    $0f0e1503ed2c844e$var$ScrollTrigger = $0f0e1503ed2c844e$var$gsap.core.globals().ScrollTrigger;
    $0f0e1503ed2c844e$var$ScrollTrigger && $0f0e1503ed2c844e$var$ScrollTrigger.core && $0f0e1503ed2c844e$var$_integrate();
}, $0f0e1503ed2c844e$var$_initCore = function _initCore(core) {
    $0f0e1503ed2c844e$var$gsap = core || $0f0e1503ed2c844e$var$_getGSAP();
    if ($0f0e1503ed2c844e$var$gsap && typeof document !== "undefined" && document.body) {
        $0f0e1503ed2c844e$var$_win = window;
        $0f0e1503ed2c844e$var$_doc = document;
        $0f0e1503ed2c844e$var$_docEl = $0f0e1503ed2c844e$var$_doc.documentElement;
        $0f0e1503ed2c844e$var$_body = $0f0e1503ed2c844e$var$_doc.body;
        $0f0e1503ed2c844e$var$_root = [
            $0f0e1503ed2c844e$var$_win,
            $0f0e1503ed2c844e$var$_doc,
            $0f0e1503ed2c844e$var$_docEl,
            $0f0e1503ed2c844e$var$_body
        ];
        $0f0e1503ed2c844e$var$_clamp = $0f0e1503ed2c844e$var$gsap.utils.clamp;
        $0f0e1503ed2c844e$var$_pointerType = "onpointerenter" in $0f0e1503ed2c844e$var$_body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
        $0f0e1503ed2c844e$var$_isTouch = $0f0e1503ed2c844e$export$c1cbdee04e18ea8b.isTouch = $0f0e1503ed2c844e$var$_win.matchMedia && $0f0e1503ed2c844e$var$_win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in $0f0e1503ed2c844e$var$_win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
        $0f0e1503ed2c844e$var$_eventTypes = $0f0e1503ed2c844e$export$c1cbdee04e18ea8b.eventTypes = ("ontouchstart" in $0f0e1503ed2c844e$var$_docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in $0f0e1503ed2c844e$var$_docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
        setTimeout(function() {
            return $0f0e1503ed2c844e$var$_startup = 0;
        }, 500);
        $0f0e1503ed2c844e$var$_setScrollTrigger();
        $0f0e1503ed2c844e$var$_coreInitted = 1;
    }
    return $0f0e1503ed2c844e$var$_coreInitted;
};
$0f0e1503ed2c844e$export$b2cabb342cb0ebe1.op = $0f0e1503ed2c844e$export$8e40fc98ff518e9d;
$0f0e1503ed2c844e$export$3cd1cee43d19b683.cache = 0;
var $0f0e1503ed2c844e$export$c1cbdee04e18ea8b = /*#__PURE__*/ function() {
    function Observer(vars) {
        this.init(vars);
    }
    var _proto = Observer.prototype;
    _proto.init = function init(vars) {
        $0f0e1503ed2c844e$var$_coreInitted || $0f0e1503ed2c844e$var$_initCore($0f0e1503ed2c844e$var$gsap) || console.warn("Please gsap.registerPlugin(Observer)");
        $0f0e1503ed2c844e$var$ScrollTrigger || $0f0e1503ed2c844e$var$_setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target = $0f0e1503ed2c844e$export$937374fea3f88711(target) || $0f0e1503ed2c844e$var$_docEl;
        this.vars = vars;
        ignore && (ignore = $0f0e1503ed2c844e$var$gsap.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight || (lineHeight = parseFloat($0f0e1503ed2c844e$var$_win.getComputedStyle($0f0e1503ed2c844e$var$_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.
        var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = $0f0e1503ed2c844e$export$8665aac53dad5647(target, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1), scrollFuncY = $0f0e1503ed2c844e$export$8665aac53dad5647(target, $0f0e1503ed2c844e$export$8e40fc98ff518e9d), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && $0f0e1503ed2c844e$var$_eventTypes[0] === "pointerdown", // for devices that accommodate mouse events and touch events, we need to distinguish.
        isViewport = $0f0e1503ed2c844e$export$4330f3a92e5d2e94(target), ownerDoc = target.ownerDocument || $0f0e1503ed2c844e$var$_doc, deltaX = [
            0,
            0,
            0
        ], // wheel, scroll, pointer/touch
        deltaY = [
            0,
            0,
            0
        ], onClickTime = 0, clickCapture = function clickCapture() {
            return onClickTime = $0f0e1503ed2c844e$var$_getTime();
        }, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
            return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc() {
            self._vx.reset();
            self._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self);
        }, update = function update() {
            var dx = self.deltaX = $0f0e1503ed2c844e$var$_getAbsoluteMax(deltaX), dy = self.deltaY = $0f0e1503ed2c844e$var$_getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
            onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.
            if (changedX) {
                onRight && self.deltaX > 0 && onRight(self);
                onLeft && self.deltaX < 0 && onLeft(self);
                onChangeX && onChangeX(self);
                onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
                prevDeltaX = self.deltaX;
                deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
                onDown && self.deltaY > 0 && onDown(self);
                onUp && self.deltaY < 0 && onUp(self);
                onChangeY && onChangeY(self);
                onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
                prevDeltaY = self.deltaY;
                deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
                onMove && onMove(self);
                if (dragged) {
                    onDrag(self);
                    dragged = false;
                }
                moved = false;
            }
            locked && (locked = false, true) && onLockAxis && onLockAxis(self);
            if (wheeled) {
                onWheel(self);
                wheeled = false;
            }
            id = 0;
        }, onDelta = function onDelta(x, y, index) {
            deltaX[index] += x;
            deltaY[index] += y;
            self._vx.update(x);
            self._vy.update(y);
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
            if (lockAxis && !axis) {
                self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                locked = true;
            }
            if (axis !== "y") {
                deltaX[2] += x;
                self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.
            }
            if (axis !== "x") {
                deltaY[2] += y;
                self._vy.update(y, true);
            }
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, _onDrag = function _onDrag(e) {
            if (_ignoreCheck(e, 1)) return;
            e = $0f0e1503ed2c844e$var$_getEvent(e, preventDefault);
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
            self.x = x;
            self.y = y;
            if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
                onDrag && (dragged = true);
                isDragging || (self.isDragging = true);
                onTouchOrPointerDelta(dx, dy);
                isDragging || onDragStart && onDragStart(self);
            }
        }, _onPress = self.onPress = function(e) {
            if (_ignoreCheck(e, 1)) return;
            self.axis = axis = null;
            onStopDelayedCall.pause();
            self.isPressed = true;
            e = $0f0e1503ed2c844e$var$_getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.
            prevDeltaX = prevDeltaY = 0;
            self.startX = self.x = e.clientX;
            self.startY = self.y = e.clientY;
            self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.
            self._vy.reset();
            $0f0e1503ed2c844e$var$_addListener(isNormalizer ? target : ownerDoc, $0f0e1503ed2c844e$var$_eventTypes[1], _onDrag, preventDefault, true);
            self.deltaX = self.deltaY = 0;
            onPress && onPress(self);
        }, _onRelease = function _onRelease(e) {
            if (_ignoreCheck(e, 1)) return;
            $0f0e1503ed2c844e$var$_removeListener(isNormalizer ? target : ownerDoc, $0f0e1503ed2c844e$var$_eventTypes[1], _onDrag, true);
            var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
            eventData = $0f0e1503ed2c844e$var$_getEvent(e);
            if (!wasDragging) {
                self._vx.reset();
                self._vy.reset();
                if (preventDefault && allowClicks) $0f0e1503ed2c844e$var$gsap.delayedCall(0.08, function() {
                    // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
                    if ($0f0e1503ed2c844e$var$_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                        if (e.target.click) //some browsers (like mobile Safari) don't properly trigger the click event
                        e.target.click();
                        else if (ownerDoc.createEvent) {
                            var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                            syntheticEvent.initMouseEvent("click", true, true, $0f0e1503ed2c844e$var$_win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                            e.target.dispatchEvent(syntheticEvent);
                        }
                    }
                });
            }
            self.isDragging = self.isGesturing = self.isPressed = false;
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
            onDragEnd && wasDragging && onDragEnd(self);
            onRelease && onRelease(self, wasDragging);
        }, _onGestureStart = function _onGestureStart(e) {
            return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
        }, _onGestureEnd = function _onGestureEnd() {
            return self.isGesturing = false, onGestureEnd(self);
        }, onScroll = function onScroll(e) {
            if (_ignoreCheck(e)) return;
            var x = scrollFuncX(), y = scrollFuncY();
            onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
            scrollX = x;
            scrollY = y;
            onStop && onStopDelayedCall.restart(true);
        }, _onWheel = function _onWheel(e) {
            if (_ignoreCheck(e)) return;
            e = $0f0e1503ed2c844e$var$_getEvent(e, preventDefault);
            onWheel && (wheeled = true);
            var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? $0f0e1503ed2c844e$var$_win.innerHeight : 1) * wheelSpeed;
            onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
        }, _onMove = function _onMove(e) {
            if (_ignoreCheck(e)) return;
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
            self.x = x;
            self.y = y;
            moved = true;
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover(e) {
            self.event = e;
            onHover(self);
        }, _onHoverEnd = function _onHoverEnd(e) {
            self.event = e;
            onHoverEnd(self);
        }, _onClick = function _onClick(e) {
            return _ignoreCheck(e) || $0f0e1503ed2c844e$var$_getEvent(e, preventDefault) && onClick(self);
        };
        onStopDelayedCall = self._dc = $0f0e1503ed2c844e$var$gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self.deltaX = self.deltaY = 0;
        self._vx = $0f0e1503ed2c844e$export$5de019f4480f0f8d(0, 50, true);
        self._vy = $0f0e1503ed2c844e$export$5de019f4480f0f8d(0, 50, true);
        self.scrollX = scrollFuncX;
        self.scrollY = scrollFuncY;
        self.isDragging = self.isGesturing = self.isPressed = false;
        self.enable = function(e) {
            if (!self.isEnabled) {
                $0f0e1503ed2c844e$var$_addListener(isViewport ? ownerDoc : target, "scroll", $0f0e1503ed2c844e$var$_onScroll);
                type.indexOf("scroll") >= 0 && $0f0e1503ed2c844e$var$_addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
                type.indexOf("wheel") >= 0 && $0f0e1503ed2c844e$var$_addListener(target, "wheel", _onWheel, preventDefault, capture);
                if (type.indexOf("touch") >= 0 && $0f0e1503ed2c844e$var$_isTouch || type.indexOf("pointer") >= 0) {
                    $0f0e1503ed2c844e$var$_addListener(target, $0f0e1503ed2c844e$var$_eventTypes[0], _onPress, preventDefault, capture);
                    $0f0e1503ed2c844e$var$_addListener(ownerDoc, $0f0e1503ed2c844e$var$_eventTypes[2], _onRelease);
                    $0f0e1503ed2c844e$var$_addListener(ownerDoc, $0f0e1503ed2c844e$var$_eventTypes[3], _onRelease);
                    allowClicks && $0f0e1503ed2c844e$var$_addListener(target, "click", clickCapture, false, true);
                    onClick && $0f0e1503ed2c844e$var$_addListener(target, "click", _onClick);
                    onGestureStart && $0f0e1503ed2c844e$var$_addListener(ownerDoc, "gesturestart", _onGestureStart);
                    onGestureEnd && $0f0e1503ed2c844e$var$_addListener(ownerDoc, "gestureend", _onGestureEnd);
                    onHover && $0f0e1503ed2c844e$var$_addListener(target, $0f0e1503ed2c844e$var$_pointerType + "enter", _onHover);
                    onHoverEnd && $0f0e1503ed2c844e$var$_addListener(target, $0f0e1503ed2c844e$var$_pointerType + "leave", _onHoverEnd);
                    onMove && $0f0e1503ed2c844e$var$_addListener(target, $0f0e1503ed2c844e$var$_pointerType + "move", _onMove);
                }
                self.isEnabled = true;
                e && e.type && _onPress(e);
                onEnable && onEnable(self);
            }
            return self;
        };
        self.disable = function() {
            if (self.isEnabled) {
                // only remove the _onScroll listener if there aren't any others that rely on the functionality.
                $0f0e1503ed2c844e$var$_observers.filter(function(o) {
                    return o !== self && $0f0e1503ed2c844e$export$4330f3a92e5d2e94(o.target);
                }).length || $0f0e1503ed2c844e$var$_removeListener(isViewport ? ownerDoc : target, "scroll", $0f0e1503ed2c844e$var$_onScroll);
                if (self.isPressed) {
                    self._vx.reset();
                    self._vy.reset();
                    $0f0e1503ed2c844e$var$_removeListener(isNormalizer ? target : ownerDoc, $0f0e1503ed2c844e$var$_eventTypes[1], _onDrag, true);
                }
                $0f0e1503ed2c844e$var$_removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                $0f0e1503ed2c844e$var$_removeListener(target, "wheel", _onWheel, capture);
                $0f0e1503ed2c844e$var$_removeListener(target, $0f0e1503ed2c844e$var$_eventTypes[0], _onPress, capture);
                $0f0e1503ed2c844e$var$_removeListener(ownerDoc, $0f0e1503ed2c844e$var$_eventTypes[2], _onRelease);
                $0f0e1503ed2c844e$var$_removeListener(ownerDoc, $0f0e1503ed2c844e$var$_eventTypes[3], _onRelease);
                $0f0e1503ed2c844e$var$_removeListener(target, "click", clickCapture, true);
                $0f0e1503ed2c844e$var$_removeListener(target, "click", _onClick);
                $0f0e1503ed2c844e$var$_removeListener(ownerDoc, "gesturestart", _onGestureStart);
                $0f0e1503ed2c844e$var$_removeListener(ownerDoc, "gestureend", _onGestureEnd);
                $0f0e1503ed2c844e$var$_removeListener(target, $0f0e1503ed2c844e$var$_pointerType + "enter", _onHover);
                $0f0e1503ed2c844e$var$_removeListener(target, $0f0e1503ed2c844e$var$_pointerType + "leave", _onHoverEnd);
                $0f0e1503ed2c844e$var$_removeListener(target, $0f0e1503ed2c844e$var$_pointerType + "move", _onMove);
                self.isEnabled = self.isPressed = self.isDragging = false;
                onDisable && onDisable(self);
            }
        };
        self.kill = function() {
            self.disable();
            var i = $0f0e1503ed2c844e$var$_observers.indexOf(self);
            i >= 0 && $0f0e1503ed2c844e$var$_observers.splice(i, 1);
            $0f0e1503ed2c844e$var$_normalizer === self && ($0f0e1503ed2c844e$var$_normalizer = 0);
        };
        $0f0e1503ed2c844e$var$_observers.push(self);
        isNormalizer && $0f0e1503ed2c844e$export$4330f3a92e5d2e94(target) && ($0f0e1503ed2c844e$var$_normalizer = self);
        self.enable(event);
    };
    $0f0e1503ed2c844e$var$_createClass(Observer, [
        {
            key: "velocityX",
            get: function get() {
                return this._vx.getVelocity();
            }
        },
        {
            key: "velocityY",
            get: function get() {
                return this._vy.getVelocity();
            }
        }
    ]);
    return Observer;
}();
$0f0e1503ed2c844e$export$c1cbdee04e18ea8b.version = "3.11.3";
$0f0e1503ed2c844e$export$c1cbdee04e18ea8b.create = function(vars) {
    return new $0f0e1503ed2c844e$export$c1cbdee04e18ea8b(vars);
};
$0f0e1503ed2c844e$export$c1cbdee04e18ea8b.register = $0f0e1503ed2c844e$var$_initCore;
$0f0e1503ed2c844e$export$c1cbdee04e18ea8b.getAll = function() {
    return $0f0e1503ed2c844e$var$_observers.slice();
};
$0f0e1503ed2c844e$export$c1cbdee04e18ea8b.getById = function(id) {
    return $0f0e1503ed2c844e$var$_observers.filter(function(o) {
        return o.vars.id === id;
    })[0];
};
$0f0e1503ed2c844e$var$_getGSAP() && $0f0e1503ed2c844e$var$gsap.registerPlugin($0f0e1503ed2c844e$export$c1cbdee04e18ea8b);


var $375cdd9a1f4cd44d$var$gsap, $375cdd9a1f4cd44d$var$_coreInitted, $375cdd9a1f4cd44d$var$_win, $375cdd9a1f4cd44d$var$_doc, $375cdd9a1f4cd44d$var$_docEl, $375cdd9a1f4cd44d$var$_body, $375cdd9a1f4cd44d$var$_root, $375cdd9a1f4cd44d$var$_resizeDelay, $375cdd9a1f4cd44d$var$_toArray, $375cdd9a1f4cd44d$var$_clamp, $375cdd9a1f4cd44d$var$_time2, $375cdd9a1f4cd44d$var$_syncInterval, $375cdd9a1f4cd44d$var$_refreshing, $375cdd9a1f4cd44d$var$_pointerIsDown, $375cdd9a1f4cd44d$var$_transformProp, $375cdd9a1f4cd44d$var$_i, $375cdd9a1f4cd44d$var$_prevWidth, $375cdd9a1f4cd44d$var$_prevHeight, $375cdd9a1f4cd44d$var$_autoRefresh, $375cdd9a1f4cd44d$var$_sort, $375cdd9a1f4cd44d$var$_suppressOverwrites, $375cdd9a1f4cd44d$var$_ignoreResize, $375cdd9a1f4cd44d$var$_normalizer, $375cdd9a1f4cd44d$var$_ignoreMobileResize, $375cdd9a1f4cd44d$var$_baseScreenHeight, $375cdd9a1f4cd44d$var$_baseScreenWidth, $375cdd9a1f4cd44d$var$_fixIOSBug, $375cdd9a1f4cd44d$var$_context, $375cdd9a1f4cd44d$var$_scrollRestoration, $375cdd9a1f4cd44d$var$_limitCallbacks, // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
$375cdd9a1f4cd44d$var$_startup = 1, $375cdd9a1f4cd44d$var$_getTime = Date.now, $375cdd9a1f4cd44d$var$_time1 = $375cdd9a1f4cd44d$var$_getTime(), $375cdd9a1f4cd44d$var$_lastScrollTime = 0, $375cdd9a1f4cd44d$var$_enabled = 0, $375cdd9a1f4cd44d$var$_pointerDownHandler = function _pointerDownHandler() {
    return $375cdd9a1f4cd44d$var$_pointerIsDown = 1;
}, $375cdd9a1f4cd44d$var$_pointerUpHandler = function _pointerUpHandler() {
    return $375cdd9a1f4cd44d$var$_pointerIsDown = 0;
}, $375cdd9a1f4cd44d$var$_passThrough = function _passThrough(v) {
    return v;
}, $375cdd9a1f4cd44d$var$_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, $375cdd9a1f4cd44d$var$_windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, $375cdd9a1f4cd44d$var$_getGSAP = function _getGSAP() {
    return $375cdd9a1f4cd44d$var$gsap || $375cdd9a1f4cd44d$var$_windowExists() && ($375cdd9a1f4cd44d$var$gsap = window.gsap) && $375cdd9a1f4cd44d$var$gsap.registerPlugin && $375cdd9a1f4cd44d$var$gsap;
}, $375cdd9a1f4cd44d$var$_isViewport = function _isViewport(e) {
    return !!~$375cdd9a1f4cd44d$var$_root.indexOf(e);
}, $375cdd9a1f4cd44d$var$_getBoundsFunc = function _getBoundsFunc(element) {
    return (0, $0f0e1503ed2c844e$export$6078f1ef08b38af9)(element, "getBoundingClientRect") || ($375cdd9a1f4cd44d$var$_isViewport(element) ? function() {
        $375cdd9a1f4cd44d$var$_winOffsets.width = $375cdd9a1f4cd44d$var$_win.innerWidth;
        $375cdd9a1f4cd44d$var$_winOffsets.height = $375cdd9a1f4cd44d$var$_win.innerHeight;
        return $375cdd9a1f4cd44d$var$_winOffsets;
    } : function() {
        return $375cdd9a1f4cd44d$var$_getBounds(element);
    });
}, $375cdd9a1f4cd44d$var$_getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = (0, $0f0e1503ed2c844e$export$6078f1ef08b38af9)(scroller, "getBoundingClientRect")) ? function() {
        return a()[d];
    } : function() {
        return (isViewport ? $375cdd9a1f4cd44d$var$_win["inner" + d2] : scroller["client" + d2]) || 0;
    };
}, $375cdd9a1f4cd44d$var$_getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~(0, $0f0e1503ed2c844e$export$d8e56d510a804d0a).indexOf(element) ? $375cdd9a1f4cd44d$var$_getBoundsFunc(element) : function() {
        return $375cdd9a1f4cd44d$var$_winOffsets;
    };
}, $375cdd9a1f4cd44d$var$_maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return (s = "scroll" + d2, a = (0, $0f0e1503ed2c844e$export$6078f1ef08b38af9)(element, s)) ? a() - $375cdd9a1f4cd44d$var$_getBoundsFunc(element)()[d] : $375cdd9a1f4cd44d$var$_isViewport(element) ? ($375cdd9a1f4cd44d$var$_docEl[s] || $375cdd9a1f4cd44d$var$_body[s]) - ($375cdd9a1f4cd44d$var$_win["inner" + d2] || $375cdd9a1f4cd44d$var$_docEl["client" + d2] || $375cdd9a1f4cd44d$var$_body["client" + d2]) : element[s] - element["offset" + d2];
}, $375cdd9a1f4cd44d$var$_iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for(var i = 0; i < $375cdd9a1f4cd44d$var$_autoRefresh.length; i += 3)(!events || ~events.indexOf($375cdd9a1f4cd44d$var$_autoRefresh[i + 1])) && func($375cdd9a1f4cd44d$var$_autoRefresh[i], $375cdd9a1f4cd44d$var$_autoRefresh[i + 1], $375cdd9a1f4cd44d$var$_autoRefresh[i + 2]);
}, $375cdd9a1f4cd44d$var$_isString = function _isString(value) {
    return typeof value === "string";
}, $375cdd9a1f4cd44d$var$_isFunction = function _isFunction(value) {
    return typeof value === "function";
}, $375cdd9a1f4cd44d$var$_isNumber = function _isNumber(value) {
    return typeof value === "number";
}, $375cdd9a1f4cd44d$var$_isObject = function _isObject(value) {
    return typeof value === "object";
}, $375cdd9a1f4cd44d$var$_callIfFunc = function _callIfFunc(value) {
    return $375cdd9a1f4cd44d$var$_isFunction(value) && value();
}, $375cdd9a1f4cd44d$var$_combineFunc = function _combineFunc(f1, f2) {
    return function() {
        var result1 = $375cdd9a1f4cd44d$var$_callIfFunc(f1), result2 = $375cdd9a1f4cd44d$var$_callIfFunc(f2);
        return function() {
            $375cdd9a1f4cd44d$var$_callIfFunc(result1);
            $375cdd9a1f4cd44d$var$_callIfFunc(result2);
        };
    };
}, $375cdd9a1f4cd44d$var$_endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, $375cdd9a1f4cd44d$var$_callback = function _callback(self, func) {
    if (self.enabled) {
        var result = func(self);
        result && result.totalTime && (self.callbackAnimation = result);
    }
}, $375cdd9a1f4cd44d$var$_abs = Math.abs, $375cdd9a1f4cd44d$var$_scrollLeft = "scrollLeft", $375cdd9a1f4cd44d$var$_scrollTop = "scrollTop", $375cdd9a1f4cd44d$var$_left = "left", $375cdd9a1f4cd44d$var$_top = "top", $375cdd9a1f4cd44d$var$_right = "right", $375cdd9a1f4cd44d$var$_bottom = "bottom", $375cdd9a1f4cd44d$var$_width = "width", $375cdd9a1f4cd44d$var$_height = "height", $375cdd9a1f4cd44d$var$_Right = "Right", $375cdd9a1f4cd44d$var$_Left = "Left", $375cdd9a1f4cd44d$var$_Top = "Top", $375cdd9a1f4cd44d$var$_Bottom = "Bottom", $375cdd9a1f4cd44d$var$_padding = "padding", $375cdd9a1f4cd44d$var$_margin = "margin", $375cdd9a1f4cd44d$var$_Width = "Width", $375cdd9a1f4cd44d$var$_Height = "Height", $375cdd9a1f4cd44d$var$_px = "px", $375cdd9a1f4cd44d$var$_getComputedStyle = function _getComputedStyle(element) {
    return $375cdd9a1f4cd44d$var$_win.getComputedStyle(element);
}, $375cdd9a1f4cd44d$var$_makePositionable = function _makePositionable(element) {
    // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
    var position = $375cdd9a1f4cd44d$var$_getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, $375cdd9a1f4cd44d$var$_setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, $375cdd9a1f4cd44d$var$_getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && $375cdd9a1f4cd44d$var$_getComputedStyle(element)[$375cdd9a1f4cd44d$var$_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && $375cdd9a1f4cd44d$var$gsap.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
}, $375cdd9a1f4cd44d$var$_getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
}, $375cdd9a1f4cd44d$var$_getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [], labels = timeline.labels, duration = timeline.duration(), p;
    for(p in labels)a.push(labels[p] / duration);
    return a;
}, $375cdd9a1f4cd44d$var$_getClosestLabel = function _getClosestLabel(animation) {
    return function(value) {
        return $375cdd9a1f4cd44d$var$gsap.utils.snap($375cdd9a1f4cd44d$var$_getLabelRatioArray(animation), value);
    };
}, $375cdd9a1f4cd44d$var$_snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = $375cdd9a1f4cd44d$var$gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a, b) {
        return a - b;
    });
    return a ? function(value, direction, threshold) {
        if (threshold === void 0) threshold = 1e-3;
        var i;
        if (!direction) return snap(value);
        if (direction > 0) {
            value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.
            for(i = 0; i < a.length; i++){
                if (a[i] >= value) return a[i];
            }
            return a[i - 1];
        } else {
            i = a.length;
            value += threshold;
            while(i--){
                if (a[i] <= value) return a[i];
            }
        }
        return a[0];
    } : function(value, direction, threshold) {
        if (threshold === void 0) threshold = 1e-3;
        var snapped = snap(value);
        return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
}, $375cdd9a1f4cd44d$var$_getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function(value, st) {
        return $375cdd9a1f4cd44d$var$_snapDirectional($375cdd9a1f4cd44d$var$_getLabelRatioArray(timeline))(value, st.direction);
    };
}, $375cdd9a1f4cd44d$var$_multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
        return func(element, type, callback);
    });
}, $375cdd9a1f4cd44d$var$_addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
    });
}, $375cdd9a1f4cd44d$var$_removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, $375cdd9a1f4cd44d$var$_wheelListener = function _wheelListener(func, el, scrollFunc) {
    return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
}, $375cdd9a1f4cd44d$var$_markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, $375cdd9a1f4cd44d$var$_defaults = {
    toggleActions: "play",
    anticipatePin: 0
}, $375cdd9a1f4cd44d$var$_keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
}, $375cdd9a1f4cd44d$var$_offsetToPx = function _offsetToPx(value, size) {
    if ($375cdd9a1f4cd44d$var$_isString(value)) {
        var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
        if (~eqIndex) {
            value.indexOf("%") > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
        }
        value = relative + (value in $375cdd9a1f4cd44d$var$_keywords ? $375cdd9a1f4cd44d$var$_keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
}, $375cdd9a1f4cd44d$var$_createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = $375cdd9a1f4cd44d$var$_doc.createElement("div"), useFixedPosition = $375cdd9a1f4cd44d$var$_isViewport(container) || (0, $0f0e1503ed2c844e$export$6078f1ef08b38af9)(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? $375cdd9a1f4cd44d$var$_body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d) ? $375cdd9a1f4cd44d$var$_right : $375cdd9a1f4cd44d$var$_bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    $375cdd9a1f4cd44d$var$_positionMarker(e, 0, direction, isStart);
    return e;
}, $375cdd9a1f4cd44d$var$_positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
        display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + $375cdd9a1f4cd44d$var$_Width] = 1;
    vars["border" + oppositeSide + $375cdd9a1f4cd44d$var$_Width] = 0;
    vars[direction.p] = start + "px";
    $375cdd9a1f4cd44d$var$gsap.set(marker, vars);
}, $375cdd9a1f4cd44d$var$_triggers = [], $375cdd9a1f4cd44d$var$_ids = {}, $375cdd9a1f4cd44d$var$_rafID, $375cdd9a1f4cd44d$var$_sync = function _sync() {
    return $375cdd9a1f4cd44d$var$_getTime() - $375cdd9a1f4cd44d$var$_lastScrollTime > 34 && ($375cdd9a1f4cd44d$var$_rafID || ($375cdd9a1f4cd44d$var$_rafID = requestAnimationFrame($375cdd9a1f4cd44d$var$_updateAll)));
}, $375cdd9a1f4cd44d$var$_onScroll = function _onScroll() {
    // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
    if (!$375cdd9a1f4cd44d$var$_normalizer || !$375cdd9a1f4cd44d$var$_normalizer.isPressed || $375cdd9a1f4cd44d$var$_normalizer.startX > $375cdd9a1f4cd44d$var$_body.clientWidth) {
        // if the user is dragging the scrollbar, allow it.
        (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).cache++;
        if ($375cdd9a1f4cd44d$var$_normalizer) $375cdd9a1f4cd44d$var$_rafID || ($375cdd9a1f4cd44d$var$_rafID = requestAnimationFrame($375cdd9a1f4cd44d$var$_updateAll));
        else $375cdd9a1f4cd44d$var$_updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110
        $375cdd9a1f4cd44d$var$_lastScrollTime || $375cdd9a1f4cd44d$var$_dispatch("scrollStart");
        $375cdd9a1f4cd44d$var$_lastScrollTime = $375cdd9a1f4cd44d$var$_getTime();
    }
}, $375cdd9a1f4cd44d$var$_setBaseDimensions = function _setBaseDimensions() {
    $375cdd9a1f4cd44d$var$_baseScreenWidth = $375cdd9a1f4cd44d$var$_win.innerWidth;
    $375cdd9a1f4cd44d$var$_baseScreenHeight = $375cdd9a1f4cd44d$var$_win.innerHeight;
}, $375cdd9a1f4cd44d$var$_onResize = function _onResize() {
    (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).cache++;
    !$375cdd9a1f4cd44d$var$_refreshing && !$375cdd9a1f4cd44d$var$_ignoreResize && !$375cdd9a1f4cd44d$var$_doc.fullscreenElement && !$375cdd9a1f4cd44d$var$_doc.webkitFullscreenElement && (!$375cdd9a1f4cd44d$var$_ignoreMobileResize || $375cdd9a1f4cd44d$var$_baseScreenWidth !== $375cdd9a1f4cd44d$var$_win.innerWidth || Math.abs($375cdd9a1f4cd44d$var$_win.innerHeight - $375cdd9a1f4cd44d$var$_baseScreenHeight) > $375cdd9a1f4cd44d$var$_win.innerHeight * 0.25) && $375cdd9a1f4cd44d$var$_resizeDelay.restart(true);
}, // ignore resizes triggered by refresh()
$375cdd9a1f4cd44d$var$_listeners = {}, $375cdd9a1f4cd44d$var$_emptyArray = [], $375cdd9a1f4cd44d$var$_softRefresh = function _softRefresh() {
    return $375cdd9a1f4cd44d$var$_removeListener($375cdd9a1f4cd44d$export$875bcbe48555930, "scrollEnd", _softRefresh) || $375cdd9a1f4cd44d$var$_refreshAll(true);
}, $375cdd9a1f4cd44d$var$_dispatch = function _dispatch(type) {
    return $375cdd9a1f4cd44d$var$_listeners[type] && $375cdd9a1f4cd44d$var$_listeners[type].map(function(f) {
        return f();
    }) || $375cdd9a1f4cd44d$var$_emptyArray;
}, $375cdd9a1f4cd44d$var$_savedStyles = [], // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
$375cdd9a1f4cd44d$var$_revertRecorded = function _revertRecorded(media) {
    for(var i = 0; i < $375cdd9a1f4cd44d$var$_savedStyles.length; i += 5)if (!media || $375cdd9a1f4cd44d$var$_savedStyles[i + 4] && $375cdd9a1f4cd44d$var$_savedStyles[i + 4].query === media) {
        $375cdd9a1f4cd44d$var$_savedStyles[i].style.cssText = $375cdd9a1f4cd44d$var$_savedStyles[i + 1];
        $375cdd9a1f4cd44d$var$_savedStyles[i].getBBox && $375cdd9a1f4cd44d$var$_savedStyles[i].setAttribute("transform", $375cdd9a1f4cd44d$var$_savedStyles[i + 2] || "");
        $375cdd9a1f4cd44d$var$_savedStyles[i + 3].uncache = 1;
    }
}, $375cdd9a1f4cd44d$var$_revertAll = function _revertAll(kill, media) {
    var trigger;
    for($375cdd9a1f4cd44d$var$_i = 0; $375cdd9a1f4cd44d$var$_i < $375cdd9a1f4cd44d$var$_triggers.length; $375cdd9a1f4cd44d$var$_i++){
        trigger = $375cdd9a1f4cd44d$var$_triggers[$375cdd9a1f4cd44d$var$_i];
        if (trigger && (!media || trigger._ctx === media)) {
            if (kill) trigger.kill(1);
            else trigger.revert(true, true);
        }
    }
    media && $375cdd9a1f4cd44d$var$_revertRecorded(media);
    media || $375cdd9a1f4cd44d$var$_dispatch("revert");
}, $375cdd9a1f4cd44d$var$_clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
    (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).cache++;
    (force || !$375cdd9a1f4cd44d$var$_refreshingAll) && (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).forEach(function(obj) {
        return $375cdd9a1f4cd44d$var$_isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    $375cdd9a1f4cd44d$var$_isString(scrollRestoration) && ($375cdd9a1f4cd44d$var$_win.history.scrollRestoration = $375cdd9a1f4cd44d$var$_scrollRestoration = scrollRestoration);
}, $375cdd9a1f4cd44d$var$_refreshingAll, $375cdd9a1f4cd44d$var$_refreshID = 0, $375cdd9a1f4cd44d$var$_queueRefreshID, $375cdd9a1f4cd44d$var$_queueRefreshAll = function _queueRefreshAll() {
    // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
    if ($375cdd9a1f4cd44d$var$_queueRefreshID !== $375cdd9a1f4cd44d$var$_refreshID) {
        var id = $375cdd9a1f4cd44d$var$_queueRefreshID = $375cdd9a1f4cd44d$var$_refreshID;
        requestAnimationFrame(function() {
            return id === $375cdd9a1f4cd44d$var$_refreshID && $375cdd9a1f4cd44d$var$_refreshAll(true);
        });
    }
}, $375cdd9a1f4cd44d$var$_refreshAll = function _refreshAll(force, skipRevert) {
    if ($375cdd9a1f4cd44d$var$_lastScrollTime && !force) {
        $375cdd9a1f4cd44d$var$_addListener($375cdd9a1f4cd44d$export$875bcbe48555930, "scrollEnd", $375cdd9a1f4cd44d$var$_softRefresh);
        return;
    }
    $375cdd9a1f4cd44d$var$_refreshingAll = $375cdd9a1f4cd44d$export$875bcbe48555930.isRefreshing = true;
    (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).forEach(function(obj) {
        return $375cdd9a1f4cd44d$var$_isFunction(obj) && obj.cacheID++ && (obj.rec = obj());
    }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away
    var refreshInits = $375cdd9a1f4cd44d$var$_dispatch("refreshInit");
    $375cdd9a1f4cd44d$var$_sort && $375cdd9a1f4cd44d$export$875bcbe48555930.sort();
    skipRevert || $375cdd9a1f4cd44d$var$_revertAll();
    (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).forEach(function(obj) {
        if ($375cdd9a1f4cd44d$var$_isFunction(obj)) {
            obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes
            obj(0);
        }
    });
    $375cdd9a1f4cd44d$var$_triggers.slice(0).forEach(function(t) {
        return t.refresh();
    }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.
    $375cdd9a1f4cd44d$var$_triggers.forEach(function(t, i) {
        // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
        if (t._subPinOffset && t.pin) {
            var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
            t.revert(true, 1);
            t.adjustPinSpacing(t.pin[prop] - original);
            t.revert(false, 1);
        }
    });
    $375cdd9a1f4cd44d$var$_triggers.forEach(function(t) {
        return t.vars.end === "max" && t.setPositions(t.start, Math.max(t.start + 1, $375cdd9a1f4cd44d$var$_maxScroll(t.scroller, t._dir)));
    }); // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max".
    refreshInits.forEach(function(result) {
        return result && result.render && result.render(-1);
    }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.
    (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).forEach(function(obj) {
        if ($375cdd9a1f4cd44d$var$_isFunction(obj)) {
            obj.smooth && requestAnimationFrame(function() {
                return obj.target.style.scrollBehavior = "smooth";
            });
            obj.rec && obj(obj.rec);
        }
    });
    $375cdd9a1f4cd44d$var$_clearScrollMemory($375cdd9a1f4cd44d$var$_scrollRestoration, 1);
    $375cdd9a1f4cd44d$var$_resizeDelay.pause();
    $375cdd9a1f4cd44d$var$_refreshID++;
    $375cdd9a1f4cd44d$var$_updateAll(2);
    $375cdd9a1f4cd44d$var$_triggers.forEach(function(t) {
        return $375cdd9a1f4cd44d$var$_isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    $375cdd9a1f4cd44d$var$_refreshingAll = $375cdd9a1f4cd44d$export$875bcbe48555930.isRefreshing = false;
    $375cdd9a1f4cd44d$var$_dispatch("refresh");
}, $375cdd9a1f4cd44d$var$_lastScroll = 0, $375cdd9a1f4cd44d$var$_direction = 1, $375cdd9a1f4cd44d$var$_primary, $375cdd9a1f4cd44d$var$_updateAll = function _updateAll(force) {
    if (!$375cdd9a1f4cd44d$var$_refreshingAll || force === 2) {
        $375cdd9a1f4cd44d$export$875bcbe48555930.isUpdating = true;
        $375cdd9a1f4cd44d$var$_primary && $375cdd9a1f4cd44d$var$_primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.
        var l = $375cdd9a1f4cd44d$var$_triggers.length, time = $375cdd9a1f4cd44d$var$_getTime(), recordVelocity = time - $375cdd9a1f4cd44d$var$_time1 >= 50, scroll = l && $375cdd9a1f4cd44d$var$_triggers[0].scroll();
        $375cdd9a1f4cd44d$var$_direction = $375cdd9a1f4cd44d$var$_lastScroll > scroll ? -1 : 1;
        $375cdd9a1f4cd44d$var$_lastScroll = scroll;
        if (recordVelocity) {
            if ($375cdd9a1f4cd44d$var$_lastScrollTime && !$375cdd9a1f4cd44d$var$_pointerIsDown && time - $375cdd9a1f4cd44d$var$_lastScrollTime > 200) {
                $375cdd9a1f4cd44d$var$_lastScrollTime = 0;
                $375cdd9a1f4cd44d$var$_dispatch("scrollEnd");
            }
            $375cdd9a1f4cd44d$var$_time2 = $375cdd9a1f4cd44d$var$_time1;
            $375cdd9a1f4cd44d$var$_time1 = time;
        }
        if ($375cdd9a1f4cd44d$var$_direction < 0) {
            $375cdd9a1f4cd44d$var$_i = l;
            while($375cdd9a1f4cd44d$var$_i-- > 0)$375cdd9a1f4cd44d$var$_triggers[$375cdd9a1f4cd44d$var$_i] && $375cdd9a1f4cd44d$var$_triggers[$375cdd9a1f4cd44d$var$_i].update(0, recordVelocity);
            $375cdd9a1f4cd44d$var$_direction = 1;
        } else for($375cdd9a1f4cd44d$var$_i = 0; $375cdd9a1f4cd44d$var$_i < l; $375cdd9a1f4cd44d$var$_i++)$375cdd9a1f4cd44d$var$_triggers[$375cdd9a1f4cd44d$var$_i] && $375cdd9a1f4cd44d$var$_triggers[$375cdd9a1f4cd44d$var$_i].update(0, recordVelocity);
        $375cdd9a1f4cd44d$export$875bcbe48555930.isUpdating = false;
    }
    $375cdd9a1f4cd44d$var$_rafID = 0;
}, $375cdd9a1f4cd44d$var$_propNamesToCopy = [
    $375cdd9a1f4cd44d$var$_left,
    $375cdd9a1f4cd44d$var$_top,
    $375cdd9a1f4cd44d$var$_bottom,
    $375cdd9a1f4cd44d$var$_right,
    $375cdd9a1f4cd44d$var$_margin + $375cdd9a1f4cd44d$var$_Bottom,
    $375cdd9a1f4cd44d$var$_margin + $375cdd9a1f4cd44d$var$_Right,
    $375cdd9a1f4cd44d$var$_margin + $375cdd9a1f4cd44d$var$_Top,
    $375cdd9a1f4cd44d$var$_margin + $375cdd9a1f4cd44d$var$_Left,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order"
], $375cdd9a1f4cd44d$var$_stateProps = $375cdd9a1f4cd44d$var$_propNamesToCopy.concat([
    $375cdd9a1f4cd44d$var$_width,
    $375cdd9a1f4cd44d$var$_height,
    "boxSizing",
    "max" + $375cdd9a1f4cd44d$var$_Width,
    "max" + $375cdd9a1f4cd44d$var$_Height,
    "position",
    $375cdd9a1f4cd44d$var$_margin,
    $375cdd9a1f4cd44d$var$_padding,
    $375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Top,
    $375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Right,
    $375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Bottom,
    $375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Left
]), $375cdd9a1f4cd44d$var$_swapPinOut = function _swapPinOut(pin, spacer, state) {
    $375cdd9a1f4cd44d$var$_setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) $375cdd9a1f4cd44d$var$_setState(cache.spacerState);
    else if (pin._gsap.swappedIn) {
        var parent = spacer.parentNode;
        if (parent) {
            parent.insertBefore(pin, spacer);
            parent.removeChild(spacer);
        }
    }
    pin._gsap.swappedIn = false;
}, $375cdd9a1f4cd44d$var$_swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
        var i = $375cdd9a1f4cd44d$var$_propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
        while(i--){
            p = $375cdd9a1f4cd44d$var$_propNamesToCopy[i];
            spacerStyle[p] = cs[p];
        }
        spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
        cs.display === "inline" && (spacerStyle.display = "inline-block");
        pinStyle[$375cdd9a1f4cd44d$var$_bottom] = pinStyle[$375cdd9a1f4cd44d$var$_right] = "auto";
        spacerStyle.flexBasis = cs.flexBasis || "auto";
        spacerStyle.overflow = "visible";
        spacerStyle.boxSizing = "border-box";
        spacerStyle[$375cdd9a1f4cd44d$var$_width] = $375cdd9a1f4cd44d$var$_getSize(pin, (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1)) + $375cdd9a1f4cd44d$var$_px;
        spacerStyle[$375cdd9a1f4cd44d$var$_height] = $375cdd9a1f4cd44d$var$_getSize(pin, (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d)) + $375cdd9a1f4cd44d$var$_px;
        spacerStyle[$375cdd9a1f4cd44d$var$_padding] = pinStyle[$375cdd9a1f4cd44d$var$_margin] = pinStyle[$375cdd9a1f4cd44d$var$_top] = pinStyle[$375cdd9a1f4cd44d$var$_left] = "0";
        $375cdd9a1f4cd44d$var$_setState(spacerState);
        pinStyle[$375cdd9a1f4cd44d$var$_width] = pinStyle["max" + $375cdd9a1f4cd44d$var$_Width] = cs[$375cdd9a1f4cd44d$var$_width];
        pinStyle[$375cdd9a1f4cd44d$var$_height] = pinStyle["max" + $375cdd9a1f4cd44d$var$_Height] = cs[$375cdd9a1f4cd44d$var$_height];
        pinStyle[$375cdd9a1f4cd44d$var$_padding] = cs[$375cdd9a1f4cd44d$var$_padding];
        if (pin.parentNode !== spacer) {
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
        }
        pin._gsap.swappedIn = true;
    }
}, $375cdd9a1f4cd44d$var$_capsExp = /([A-Z])/g, $375cdd9a1f4cd44d$var$_setState = function _setState(state) {
    if (state) {
        var style = state.t.style, l = state.length, i = 0, p, value;
        (state.t._gsap || $375cdd9a1f4cd44d$var$gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off
        for(; i < l; i += 2){
            value = state[i + 1];
            p = state[i];
            if (value) style[p] = value;
            else if (style[p]) style.removeProperty(p.replace($375cdd9a1f4cd44d$var$_capsExp, "-$1").toLowerCase());
        }
    }
}, $375cdd9a1f4cd44d$var$_getState = function _getState(element) {
    // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
    var l = $375cdd9a1f4cd44d$var$_stateProps.length, style = element.style, state = [], i = 0;
    for(; i < l; i++)state.push($375cdd9a1f4cd44d$var$_stateProps[i], style[$375cdd9a1f4cd44d$var$_stateProps[i]]);
    state.t = element;
    return state;
}, $375cdd9a1f4cd44d$var$_copyState = function _copyState(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, // skip top, left, right, bottom if omitOffsets is true
    p;
    for(; i < l; i += 2){
        p = state[i];
        result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
}, $375cdd9a1f4cd44d$var$_winOffsets = {
    left: 0,
    top: 0
}, // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
$375cdd9a1f4cd44d$var$_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
    $375cdd9a1f4cd44d$var$_isFunction(value) && (value = value(self));
    if ($375cdd9a1f4cd44d$var$_isString(value) && value.substr(0, 3) === "max") value = scrollerMax + (value.charAt(4) === "=" ? $375cdd9a1f4cd44d$var$_offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    if (!$375cdd9a1f4cd44d$var$_isNumber(value)) {
        $375cdd9a1f4cd44d$var$_isFunction(trigger) && (trigger = trigger(self));
        var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
        element = (0, $0f0e1503ed2c844e$export$937374fea3f88711)(trigger) || $375cdd9a1f4cd44d$var$_body;
        bounds = $375cdd9a1f4cd44d$var$_getBounds(element) || {};
        if ((!bounds || !bounds.left && !bounds.top) && $375cdd9a1f4cd44d$var$_getComputedStyle(element).display === "none") {
            // if display is "none", it won't report getBoundingClientRect() properly
            display = element.style.display;
            element.style.display = "block";
            bounds = $375cdd9a1f4cd44d$var$_getBounds(element);
            display ? element.style.display = display : element.style.removeProperty("display");
        }
        localOffset = $375cdd9a1f4cd44d$var$_offsetToPx(offsets[0], bounds[direction.d]);
        globalOffset = $375cdd9a1f4cd44d$var$_offsetToPx(offsets[1] || "0", scrollerSize);
        value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
        markerScroller && $375cdd9a1f4cd44d$var$_positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
        scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
    } else if (markerScroller) $375cdd9a1f4cd44d$var$_positionMarker(markerScroller, scrollerSize, direction, true);
    if (marker) {
        var position = value + scrollerSize, isStart = marker._isStart;
        p1 = "scroll" + direction.d2;
        $375cdd9a1f4cd44d$var$_positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max($375cdd9a1f4cd44d$var$_body[p1], $375cdd9a1f4cd44d$var$_docEl[p1]) : marker.parentNode[p1]) <= position + 1);
        if (useFixedPosition) {
            scrollerBounds = $375cdd9a1f4cd44d$var$_getBounds(markerScroller);
            useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + $375cdd9a1f4cd44d$var$_px);
        }
    }
    if (containerAnimation && element) {
        p1 = $375cdd9a1f4cd44d$var$_getBounds(element);
        containerAnimation.seek(scrollerMax);
        p2 = $375cdd9a1f4cd44d$var$_getBounds(element);
        containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
        value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
}, $375cdd9a1f4cd44d$var$_prefixExp = /(webkit|moz|length|cssText|inset)/i, $375cdd9a1f4cd44d$var$_reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
        var style = element.style, p, cs;
        if (parent === $375cdd9a1f4cd44d$var$_body) {
            element._stOrig = style.cssText; // record original inline styles so we can revert them later
            cs = $375cdd9a1f4cd44d$var$_getComputedStyle(element);
            for(p in cs)// must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
            if (!+p && !$375cdd9a1f4cd44d$var$_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") style[p] = cs[p];
            style.top = top;
            style.left = left;
        } else style.cssText = element._stOrig;
        $375cdd9a1f4cd44d$var$gsap.core.getCache(element).uncache = 1;
        parent.appendChild(element);
    }
}, // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
$375cdd9a1f4cd44d$var$_getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = (0, $0f0e1503ed2c844e$export$8665aac53dad5647)(scroller, direction), prop = "_scroll" + direction.p2, // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
    lastScroll1, lastScroll2, getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll();
        change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.
        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        lastScroll1 = Math.round(initialValue);
        vars[prop] = scrollTo;
        vars.modifiers = modifiers;
        modifiers[prop] = function(value) {
            value = Math.round(getScroll()); // round because in some [very uncommon] Windows environments, it can get reported with decimals even though it was set without.
            if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 3 && Math.abs(value - lastScroll2) > 3) {
                // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
                tween.kill();
                getTween.tween = 0;
            } else value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
            lastScroll2 = lastScroll1;
            return lastScroll1 = Math.round(value);
        };
        vars.onComplete = function() {
            getTween.tween = 0;
            onComplete && onComplete.call(tween);
        };
        tween = getTween.tween = $375cdd9a1f4cd44d$var$gsap.to(scroller, vars);
        return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    $375cdd9a1f4cd44d$var$_addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.
    return getTween;
};
var $375cdd9a1f4cd44d$export$875bcbe48555930 = /*#__PURE__*/ function() {
    function ScrollTrigger(vars, animation) {
        $375cdd9a1f4cd44d$var$_coreInitted || ScrollTrigger.register($375cdd9a1f4cd44d$var$gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        this.init(vars, animation);
    }
    var _proto = ScrollTrigger.prototype;
    _proto.init = function init(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true); // in case it's being initted again
        if (!$375cdd9a1f4cd44d$var$_enabled) {
            this.update = this.refresh = this.kill = $375cdd9a1f4cd44d$var$_passThrough;
            return;
        }
        vars = $375cdd9a1f4cd44d$var$_setDefaults($375cdd9a1f4cd44d$var$_isString(vars) || $375cdd9a1f4cd44d$var$_isNumber(vars) || vars.nodeType ? {
            trigger: vars
        } : vars, $375cdd9a1f4cd44d$var$_defaults);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1) : (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d), isToggle = !scrub && scrub !== 0, scroller = (0, $0f0e1503ed2c844e$export$937374fea3f88711)(vars.scroller || $375cdd9a1f4cd44d$var$_win), scrollerCache = $375cdd9a1f4cd44d$var$gsap.core.getCache(scroller), isViewport = $375cdd9a1f4cd44d$var$_isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : (0, $0f0e1503ed2c844e$export$6078f1ef08b38af9)(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [
            vars.onEnter,
            vars.onLeave,
            vars.onEnterBack,
            vars.onLeaveBack
        ], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : $375cdd9a1f4cd44d$var$_defaults.markers, borderWidth = isViewport ? 0 : parseFloat($375cdd9a1f4cd44d$var$_getComputedStyle(scroller)["border" + direction.p2 + $375cdd9a1f4cd44d$var$_Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
            return vars.onRefreshInit(self);
        }, getScrollerSize = $375cdd9a1f4cd44d$var$_getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = $375cdd9a1f4cd44d$var$_getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = (0, $0f0e1503ed2c844e$export$8665aac53dad5647)(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
        $375cdd9a1f4cd44d$var$_context(self);
        self._dir = direction;
        anticipatePin *= 45;
        self.scroller = scroller;
        self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        self.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
            $375cdd9a1f4cd44d$var$_sort = 1;
            vars.refreshPriority === -9999 && ($375cdd9a1f4cd44d$var$_primary = self); // used by ScrollSmoother
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: $375cdd9a1f4cd44d$var$_getTweenCreator(scroller, (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d)),
            left: $375cdd9a1f4cd44d$var$_getTweenCreator(scroller, (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1))
        };
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self.scrubDuration = function(value) {
            scrubSmooth = $375cdd9a1f4cd44d$var$_isNumber(value) && value;
            if (!scrubSmooth) {
                scrubTween && scrubTween.progress(1).kill();
                scrubTween = 0;
            } else scrubTween ? scrubTween.duration(value) : scrubTween = $375cdd9a1f4cd44d$var$gsap.to(animation, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: scrubSmooth,
                paused: true,
                onComplete: function onComplete() {
                    return onScrubComplete && onScrubComplete(self);
                }
            });
        };
        if (animation) {
            animation.vars.lazy = false;
            animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
            self.animation = animation.pause();
            animation.scrollTrigger = self;
            self.scrubDuration(scrub);
            snap1 = 0;
            id || (id = animation.vars.id);
        }
        $375cdd9a1f4cd44d$var$_triggers.push(self);
        if (snap) {
            // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
            if (!$375cdd9a1f4cd44d$var$_isObject(snap) || snap.push) snap = {
                snapTo: snap
            };
            "scrollBehavior" in $375cdd9a1f4cd44d$var$_body.style && $375cdd9a1f4cd44d$var$gsap.set(isViewport ? [
                $375cdd9a1f4cd44d$var$_body,
                $375cdd9a1f4cd44d$var$_docEl
            ] : scroller, {
                scrollBehavior: "auto"
            }); // smooth scrolling doesn't work with snap.
            (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).forEach(function(o) {
                return $375cdd9a1f4cd44d$var$_isFunction(o) && o.target === (isViewport ? $375cdd9a1f4cd44d$var$_doc.scrollingElement || $375cdd9a1f4cd44d$var$_docEl : scroller) && (o.smooth = false);
            }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters
            snapFunc = $375cdd9a1f4cd44d$var$_isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? $375cdd9a1f4cd44d$var$_getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? $375cdd9a1f4cd44d$var$_getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                return $375cdd9a1f4cd44d$var$_snapDirectional(snap.snapTo)(value, $375cdd9a1f4cd44d$var$_getTime() - lastRefresh < 500 ? 0 : st.direction);
            } : $375cdd9a1f4cd44d$var$gsap.utils.snap(snap.snapTo);
            snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2
            };
            snapDurClamp = $375cdd9a1f4cd44d$var$_isObject(snapDurClamp) ? $375cdd9a1f4cd44d$var$_clamp(snapDurClamp.min, snapDurClamp.max) : $375cdd9a1f4cd44d$var$_clamp(snapDurClamp, snapDurClamp);
            snapDelayedCall = $375cdd9a1f4cd44d$var$gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
                var scroll = scrollFunc(), refreshedRecently = $375cdd9a1f4cd44d$var$_getTime() - lastRefresh < 500, tween = tweenTo.tween;
                if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !$375cdd9a1f4cd44d$var$_pointerIsDown && lastSnap !== scroll) {
                    var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / ($375cdd9a1f4cd44d$var$_getTime() - $375cdd9a1f4cd44d$var$_time2) * 1000 || 0, change1 = $375cdd9a1f4cd44d$var$gsap.utils.clamp(-progress, 1 - progress, $375cdd9a1f4cd44d$var$_abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue = $375cdd9a1f4cd44d$var$_clamp(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                    if (scroll <= end && scroll >= start && endScroll !== scroll) {
                        if (tween && !tween._initted && tween.data <= $375cdd9a1f4cd44d$var$_abs(endScroll - scroll)) // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
                        return;
                        if (snap.inertia === false) change1 = endValue - progress;
                        tweenTo(endScroll, {
                            duration: snapDurClamp($375cdd9a1f4cd44d$var$_abs(Math.max($375cdd9a1f4cd44d$var$_abs(naturalEnd - totalProgress), $375cdd9a1f4cd44d$var$_abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                            ease: snap.ease || "power3",
                            data: $375cdd9a1f4cd44d$var$_abs(endScroll - scroll),
                            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                            onInterrupt: function onInterrupt() {
                                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                            },
                            onComplete: function onComplete() {
                                self.update();
                                lastSnap = scrollFunc();
                                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                                onSnapComplete && onSnapComplete(self);
                                _onComplete && _onComplete(self);
                            }
                        }, scroll, change1 * change, endScroll - scroll - change1 * change);
                        onStart && onStart(self, tweenTo.tween);
                    }
                } else if (self.isActive && lastSnap !== scroll) snapDelayedCall.restart(true);
            }).pause();
        }
        id && ($375cdd9a1f4cd44d$var$_ids[id] = self);
        trigger = self.trigger = (0, $0f0e1503ed2c844e$export$937374fea3f88711)(trigger || pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self));
        pin = pin === true ? trigger : (0, $0f0e1503ed2c844e$export$937374fea3f88711)(pin);
        $375cdd9a1f4cd44d$var$_isString(toggleClass) && (toggleClass = {
            targets: trigger,
            className: toggleClass
        });
        if (pin) {
            pinSpacing === false || pinSpacing === $375cdd9a1f4cd44d$var$_margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && $375cdd9a1f4cd44d$var$_getComputedStyle(pin.parentNode).display === "flex" ? false : $375cdd9a1f4cd44d$var$_padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)
            self.pin = pin;
            pinCache = $375cdd9a1f4cd44d$var$gsap.core.getCache(pin);
            if (!pinCache.spacer) {
                // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
                if (pinSpacer) {
                    pinSpacer = (0, $0f0e1503ed2c844e$export$937374fea3f88711)(pinSpacer);
                    pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular
                    pinCache.spacerIsNative = !!pinSpacer;
                    pinSpacer && (pinCache.spacerState = $375cdd9a1f4cd44d$var$_getState(pinSpacer));
                }
                pinCache.spacer = spacer = pinSpacer || $375cdd9a1f4cd44d$var$_doc.createElement("div");
                spacer.classList.add("pin-spacer");
                id && spacer.classList.add("pin-spacer-" + id);
                pinCache.pinState = pinOriginalState = $375cdd9a1f4cd44d$var$_getState(pin);
            } else pinOriginalState = pinCache.pinState;
            vars.force3D !== false && $375cdd9a1f4cd44d$var$gsap.set(pin, {
                force3D: true
            });
            self.spacer = spacer = pinCache.spacer;
            cs = $375cdd9a1f4cd44d$var$_getComputedStyle(pin);
            spacingStart = cs[pinSpacing + direction.os2];
            pinGetter = $375cdd9a1f4cd44d$var$gsap.getProperty(pin);
            pinSetter = $375cdd9a1f4cd44d$var$gsap.quickSetter(pin, direction.a, $375cdd9a1f4cd44d$var$_px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).
            $375cdd9a1f4cd44d$var$_swapPinIn(pin, spacer, cs);
            pinState = $375cdd9a1f4cd44d$var$_getState(pin);
        }
        if (markers) {
            markerVars = $375cdd9a1f4cd44d$var$_isObject(markers) ? $375cdd9a1f4cd44d$var$_setDefaults(markers, $375cdd9a1f4cd44d$var$_markerDefaults) : $375cdd9a1f4cd44d$var$_markerDefaults;
            markerStartTrigger = $375cdd9a1f4cd44d$var$_createMarker("scroller-start", id, scroller, direction, markerVars, 0);
            markerEndTrigger = $375cdd9a1f4cd44d$var$_createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
            offset = markerStartTrigger["offset" + direction.op.d2];
            var content = (0, $0f0e1503ed2c844e$export$937374fea3f88711)((0, $0f0e1503ed2c844e$export$6078f1ef08b38af9)(scroller, "content") || scroller);
            markerStart = this.markerStart = $375cdd9a1f4cd44d$var$_createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
            markerEnd = this.markerEnd = $375cdd9a1f4cd44d$var$_createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
            containerAnimation && (caMarkerSetter = $375cdd9a1f4cd44d$var$gsap.quickSetter([
                markerStart,
                markerEnd
            ], direction.a, $375cdd9a1f4cd44d$var$_px));
            if (!useFixedPosition && !((0, $0f0e1503ed2c844e$export$d8e56d510a804d0a).length && (0, $0f0e1503ed2c844e$export$6078f1ef08b38af9)(scroller, "fixedMarkers") === true)) {
                $375cdd9a1f4cd44d$var$_makePositionable(isViewport ? $375cdd9a1f4cd44d$var$_body : scroller);
                $375cdd9a1f4cd44d$var$gsap.set([
                    markerStartTrigger,
                    markerEndTrigger
                ], {
                    force3D: true
                });
                markerStartSetter = $375cdd9a1f4cd44d$var$gsap.quickSetter(markerStartTrigger, direction.a, $375cdd9a1f4cd44d$var$_px);
                markerEndSetter = $375cdd9a1f4cd44d$var$gsap.quickSetter(markerEndTrigger, direction.a, $375cdd9a1f4cd44d$var$_px);
            }
        }
        if (containerAnimation) {
            var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
            containerAnimation.eventCallback("onUpdate", function() {
                self.update(0, 0, 1);
                oldOnUpdate && oldOnUpdate.apply(oldParams || []);
            });
        }
        self.previous = function() {
            return $375cdd9a1f4cd44d$var$_triggers[$375cdd9a1f4cd44d$var$_triggers.indexOf(self) - 1];
        };
        self.next = function() {
            return $375cdd9a1f4cd44d$var$_triggers[$375cdd9a1f4cd44d$var$_triggers.indexOf(self) + 1];
        };
        self.revert = function(revert, temp) {
            if (!temp) return self.kill(true);
             // for compatibility with gsap.context() and gsap.matchMedia() which call revert()
            var r = revert !== false || !self.enabled, prevRefreshing = $375cdd9a1f4cd44d$var$_refreshing;
            if (r !== self.isReverted) {
                if (r) {
                    // if (!self.scroll.rec && (_refreshing || _refreshingAll)) {
                    // 	self.scroll.rec = scrollFunc();
                    // 	_refreshingAll && scrollFunc(0);
                    // }
                    prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.
                    prevProgress = self.progress;
                    prevAnimProgress = animation && animation.progress();
                }
                markerStart && [
                    markerStart,
                    markerEnd,
                    markerStartTrigger,
                    markerEndTrigger
                ].forEach(function(m) {
                    return m.style.display = r ? "none" : "block";
                });
                if (r) {
                    $375cdd9a1f4cd44d$var$_refreshing = 1;
                    self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
                }
                if (pin) {
                    if (r) $375cdd9a1f4cd44d$var$_swapPinOut(pin, spacer, pinOriginalState);
                    else (!pinReparent || !self.isActive) && $375cdd9a1f4cd44d$var$_swapPinIn(pin, spacer, $375cdd9a1f4cd44d$var$_getComputedStyle(pin), spacerState);
                }
                r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.
                $375cdd9a1f4cd44d$var$_refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.
                self.isReverted = r;
            }
        };
        self.refresh = function(soft, force) {
            if (($375cdd9a1f4cd44d$var$_refreshing || !self.enabled) && !force) return;
            if (pin && soft && $375cdd9a1f4cd44d$var$_lastScrollTime) {
                $375cdd9a1f4cd44d$var$_addListener(ScrollTrigger, "scrollEnd", $375cdd9a1f4cd44d$var$_softRefresh);
                return;
            }
            !$375cdd9a1f4cd44d$var$_refreshingAll && onRefreshInit && onRefreshInit(self);
            $375cdd9a1f4cd44d$var$_refreshing = 1;
            lastRefresh = $375cdd9a1f4cd44d$var$_getTime();
            if (tweenTo.tween) {
                tweenTo.tween.kill();
                tweenTo.tween = 0;
            }
            scrubTween && scrubTween.pause();
            invalidateOnRefresh && animation && animation.revert({
                kill: false
            }).invalidate();
            self.isReverted || self.revert(true, true);
            self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any
            var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : $375cdd9a1f4cd44d$var$_maxScroll(scroller, direction), offset = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0, $0f0e1503ed2c844e$export$937374fea3f88711)(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, $375cdd9a1f4cd44d$var$_triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins;
            while(i--){
                // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
                curTrigger = $375cdd9a1f4cd44d$var$_triggers[i];
                curTrigger.end || curTrigger.refresh(0, 1) || ($375cdd9a1f4cd44d$var$_refreshing = 1); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.
                curPin = curTrigger.pin;
                if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
                    revertedPins || (revertedPins = []);
                    revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly
                    curTrigger.revert(true, true);
                }
                if (curTrigger !== $375cdd9a1f4cd44d$var$_triggers[i]) {
                    // in case it got removed.
                    triggerIndex--;
                    i--;
                }
            }
            $375cdd9a1f4cd44d$var$_isFunction(parsedStart) && (parsedStart = parsedStart(self));
            start = $375cdd9a1f4cd44d$var$_parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -0.001 : 0);
            $375cdd9a1f4cd44d$var$_isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
            if ($375cdd9a1f4cd44d$var$_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) parsedEnd = ($375cdd9a1f4cd44d$var$_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                else {
                    offset = $375cdd9a1f4cd44d$var$_offsetToPx(parsedEnd.substr(2), size);
                    parsedEnd = $375cdd9a1f4cd44d$var$_isString(parsedStart) ? parsedStart : start + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.
                    parsedEndTrigger = trigger;
                }
            }
            end = Math.max(start, $375cdd9a1f4cd44d$var$_parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -0.001;
            change = end - start || (start -= 0.01) && 0.001;
            offset = 0;
            i = triggerIndex;
            while(i--){
                curTrigger = $375cdd9a1f4cd44d$var$_triggers[i];
                curPin = curTrigger.pin;
                if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                    cs = curTrigger.end - curTrigger.start;
                    if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && !$375cdd9a1f4cd44d$var$_isNumber(parsedStart)) // numeric start values shouldn't be offset at all - treat them as absolute
                    offset += cs * (1 - curTrigger.progress);
                    curPin === pin && (otherPinOffset += cs);
                }
            }
            start += offset;
            end += offset;
            self._pinPush = otherPinOffset;
            if (markerStart && offset) {
                // offset the markers if necessary
                cs = {};
                cs[direction.a] = "+=" + offset;
                pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
                $375cdd9a1f4cd44d$var$gsap.set([
                    markerStart,
                    markerEnd
                ], cs);
            }
            if (pin) {
                cs = $375cdd9a1f4cd44d$var$_getComputedStyle(pin);
                isVertical = direction === (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d);
                scroll = scrollFunc(); // recalculate because the triggers can affect the scroll
                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                !max && end > 1 && ((isViewport ? $375cdd9a1f4cd44d$var$_body : scroller).style["overflow-" + direction.a] = "scroll"); // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
                $375cdd9a1f4cd44d$var$_swapPinIn(pin, spacer, cs);
                pinState = $375cdd9a1f4cd44d$var$_getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.
                bounds = $375cdd9a1f4cd44d$var$_getBounds(pin, true);
                oppositeScroll = useFixedPosition && (0, $0f0e1503ed2c844e$export$8665aac53dad5647)(scroller, isVertical ? (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1) : (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d))();
                if (pinSpacing) {
                    spacerState = [
                        pinSpacing + direction.os2,
                        change + otherPinOffset + $375cdd9a1f4cd44d$var$_px
                    ];
                    spacerState.t = spacer;
                    i = pinSpacing === $375cdd9a1f4cd44d$var$_padding ? $375cdd9a1f4cd44d$var$_getSize(pin, direction) + change + otherPinOffset : 0;
                    i && spacerState.push(direction.d, i + $375cdd9a1f4cd44d$var$_px); // for box-sizing: border-box (must include padding).
                    $375cdd9a1f4cd44d$var$_setState(spacerState);
                    if (pinnedContainer) // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
                    $375cdd9a1f4cd44d$var$_triggers.forEach(function(t) {
                        if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) t._subPinOffset = true;
                    });
                    useFixedPosition && scrollFunc(prevScroll);
                }
                if (useFixedPosition) {
                    override = {
                        top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + $375cdd9a1f4cd44d$var$_px,
                        left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + $375cdd9a1f4cd44d$var$_px,
                        boxSizing: "border-box",
                        position: "fixed"
                    };
                    override[$375cdd9a1f4cd44d$var$_width] = override["max" + $375cdd9a1f4cd44d$var$_Width] = Math.ceil(bounds.width) + $375cdd9a1f4cd44d$var$_px;
                    override[$375cdd9a1f4cd44d$var$_height] = override["max" + $375cdd9a1f4cd44d$var$_Height] = Math.ceil(bounds.height) + $375cdd9a1f4cd44d$var$_px;
                    override[$375cdd9a1f4cd44d$var$_margin] = override[$375cdd9a1f4cd44d$var$_margin + $375cdd9a1f4cd44d$var$_Top] = override[$375cdd9a1f4cd44d$var$_margin + $375cdd9a1f4cd44d$var$_Right] = override[$375cdd9a1f4cd44d$var$_margin + $375cdd9a1f4cd44d$var$_Bottom] = override[$375cdd9a1f4cd44d$var$_margin + $375cdd9a1f4cd44d$var$_Left] = "0";
                    override[$375cdd9a1f4cd44d$var$_padding] = cs[$375cdd9a1f4cd44d$var$_padding];
                    override[$375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Top] = cs[$375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Top];
                    override[$375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Right] = cs[$375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Right];
                    override[$375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Bottom] = cs[$375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Bottom];
                    override[$375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Left] = cs[$375cdd9a1f4cd44d$var$_padding + $375cdd9a1f4cd44d$var$_Left];
                    pinActiveState = $375cdd9a1f4cd44d$var$_copyState(pinOriginalState, override, pinReparent);
                    $375cdd9a1f4cd44d$var$_refreshingAll && scrollFunc(0);
                }
                if (animation) {
                    // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
                    initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.
                    $375cdd9a1f4cd44d$var$_suppressOverwrites(1);
                    animation.render(animation.duration(), true, true);
                    pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                    change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.
                    animation.render(0, true, true);
                    initted || animation.invalidate(true);
                    animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.
                    $375cdd9a1f4cd44d$var$_suppressOverwrites(0);
                } else pinChange = change;
            } else if (trigger && scrollFunc() && !containerAnimation) {
                // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
                bounds = trigger.parentNode;
                while(bounds && bounds !== $375cdd9a1f4cd44d$var$_body){
                    if (bounds._pinOffset) {
                        start -= bounds._pinOffset;
                        end -= bounds._pinOffset;
                    }
                    bounds = bounds.parentNode;
                }
            }
            revertedPins && revertedPins.forEach(function(t) {
                return t.revert(false, true);
            });
            self.start = start;
            self.end = end;
            scroll1 = scroll2 = $375cdd9a1f4cd44d$var$_refreshingAll ? prevScroll : scrollFunc(); // reset velocity
            if (!containerAnimation && !$375cdd9a1f4cd44d$var$_refreshingAll) {
                scroll1 < prevScroll && scrollFunc(prevScroll);
                self.scroll.rec = 0;
            }
            self.revert(false, true);
            if (snapDelayedCall) {
                lastSnap = -1;
                self.isActive && scrollFunc(start + change * prevProgress); // just so snapping gets re-enabled, clear out any recorded last value
                snapDelayedCall.restart(true);
            }
            $375cdd9a1f4cd44d$var$_refreshing = 0;
            animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().
            if (prevProgress !== self.progress || containerAnimation) {
                // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
                animation && !isToggle && animation.totalProgress(prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.
                self.progress = (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
            }
            pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange)); //			scrubTween && scrubTween.invalidate();
            onRefresh && !$375cdd9a1f4cd44d$var$_refreshingAll && onRefresh(self); // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        };
        self.getVelocity = function() {
            return (scrollFunc() - scroll2) / ($375cdd9a1f4cd44d$var$_getTime() - $375cdd9a1f4cd44d$var$_time2) * 1000 || 0;
        };
        self.endAnimation = function() {
            $375cdd9a1f4cd44d$var$_endAnimation(self.callbackAnimation);
            if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? $375cdd9a1f4cd44d$var$_endAnimation(animation, animation.reversed()) : isToggle || $375cdd9a1f4cd44d$var$_endAnimation(animation, self.direction < 0, 1);
        };
        self.labelToScroll = function(label) {
            return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self.getTrailing = function(name) {
            var i = $375cdd9a1f4cd44d$var$_triggers.indexOf(self), a = self.direction > 0 ? $375cdd9a1f4cd44d$var$_triggers.slice(0, i).reverse() : $375cdd9a1f4cd44d$var$_triggers.slice(i + 1);
            return ($375cdd9a1f4cd44d$var$_isString(name) ? a.filter(function(t) {
                return t.vars.preventOverlaps === name;
            }) : a).filter(function(t) {
                return self.direction > 0 ? t.end <= start : t.start >= end;
            });
        };
        self.update = function(reset, recordVelocity, forceFake) {
            if (containerAnimation && !forceFake && !reset) return;
            var scroll = $375cdd9a1f4cd44d$var$_refreshingAll ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
            if (recordVelocity) {
                scroll2 = scroll1;
                scroll1 = containerAnimation ? scrollFunc() : scroll;
                if (snap) {
                    snap2 = snap1;
                    snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                }
            } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).
            anticipatePin && !clipped && pin && !$375cdd9a1f4cd44d$var$_refreshing && !$375cdd9a1f4cd44d$var$_startup && $375cdd9a1f4cd44d$var$_lastScrollTime && start < scroll + (scroll - scroll2) / ($375cdd9a1f4cd44d$var$_getTime() - $375cdd9a1f4cd44d$var$_time2) * anticipatePin && (clipped = 0.0001);
            if (clipped !== prevProgress && self.enabled) {
                isActive = self.isActive = !!clipped && clipped < 1;
                wasActive = !!prevProgress && prevProgress < 1;
                toggled = isActive !== wasActive;
                stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)
                self.direction = clipped > prevProgress ? 1 : -1;
                self.progress = clipped;
                if (stateChanged && !$375cdd9a1f4cd44d$var$_refreshing) {
                    toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.
                    if (isToggle) {
                        action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)
                        isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                    }
                }
                preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && ($375cdd9a1f4cd44d$var$_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
                    return t.endAnimation();
                }));
                if (!isToggle) {
                    if (scrubTween && !$375cdd9a1f4cd44d$var$_refreshing && !$375cdd9a1f4cd44d$var$_startup) {
                        (containerAnimation || $375cdd9a1f4cd44d$var$_primary && $375cdd9a1f4cd44d$var$_primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.
                        if (scrubTween.resetTo) scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                        else {
                            // legacy support (courtesy), before 3.10.0
                            scrubTween.vars.totalProgress = clipped;
                            scrubTween.invalidate().restart();
                        }
                    } else if (animation) animation.totalProgress(clipped, !!$375cdd9a1f4cd44d$var$_refreshing);
                }
                if (pin) {
                    reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                    if (!useFixedPosition) pinSetter($375cdd9a1f4cd44d$var$_round(pinStart + pinChange * clipped));
                    else if (stateChanged) {
                        isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= $375cdd9a1f4cd44d$var$_maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)
                        if (pinReparent) {
                            if (!reset && (isActive || isAtMax)) {
                                var bounds = $375cdd9a1f4cd44d$var$_getBounds(pin, true), _offset = scroll - start;
                                $375cdd9a1f4cd44d$var$_reparent(pin, $375cdd9a1f4cd44d$var$_body, bounds.top + (direction === (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d) ? _offset : 0) + $375cdd9a1f4cd44d$var$_px, bounds.left + (direction === (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d) ? 0 : _offset) + $375cdd9a1f4cd44d$var$_px);
                            } else $375cdd9a1f4cd44d$var$_reparent(pin, spacer);
                        }
                        $375cdd9a1f4cd44d$var$_setState(isActive || isAtMax ? pinActiveState : pinState);
                        pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                    }
                }
                snap && !tweenTo.tween && !$375cdd9a1f4cd44d$var$_refreshing && !$375cdd9a1f4cd44d$var$_startup && snapDelayedCall.restart(true);
                toggleClass && (toggled || once && clipped && (clipped < 1 || !$375cdd9a1f4cd44d$var$_limitCallbacks)) && $375cdd9a1f4cd44d$var$_toArray(toggleClass.targets).forEach(function(el) {
                    return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                }); // classes could affect positioning, so do it even if reset or refreshing is true.
                onUpdate && !isToggle && !reset && onUpdate(self);
                if (stateChanged && !$375cdd9a1f4cd44d$var$_refreshing) {
                    if (isToggle) {
                        if (isTakingAction) {
                            if (action === "complete") animation.pause().totalProgress(1);
                            else if (action === "reset") animation.restart(true).pause();
                            else if (action === "restart") animation.restart(true);
                            else animation[action]();
                        }
                        onUpdate && onUpdate(self);
                    }
                    if (toggled || !$375cdd9a1f4cd44d$var$_limitCallbacks) {
                        // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
                        onToggle && toggled && $375cdd9a1f4cd44d$var$_callback(self, onToggle);
                        callbacks[toggleState] && $375cdd9a1f4cd44d$var$_callback(self, callbacks[toggleState]);
                        once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.
                        if (!toggled) {
                            // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
                            toggleState = clipped === 1 ? 1 : 3;
                            callbacks[toggleState] && $375cdd9a1f4cd44d$var$_callback(self, callbacks[toggleState]);
                        }
                    }
                    if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > ($375cdd9a1f4cd44d$var$_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                        $375cdd9a1f4cd44d$var$_endAnimation(self.callbackAnimation);
                        scrubTween ? scrubTween.progress(1) : $375cdd9a1f4cd44d$var$_endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                    }
                } else if (isToggle && onUpdate && !$375cdd9a1f4cd44d$var$_refreshing) onUpdate(self);
            } // update absolutely-positioned markers (only if the scroller isn't the viewport)
            if (markerEndSetter) {
                var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                markerEndSetter(n);
            }
            caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self.enable = function(reset, refresh) {
            if (!self.enabled) {
                self.enabled = true;
                $375cdd9a1f4cd44d$var$_addListener(scroller, "resize", $375cdd9a1f4cd44d$var$_onResize);
                $375cdd9a1f4cd44d$var$_addListener(isViewport ? $375cdd9a1f4cd44d$var$_doc : scroller, "scroll", $375cdd9a1f4cd44d$var$_onScroll);
                onRefreshInit && $375cdd9a1f4cd44d$var$_addListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (reset !== false) {
                    self.progress = prevProgress = 0;
                    scroll1 = scroll2 = lastSnap = scrollFunc();
                }
                refresh !== false && self.refresh();
            }
        };
        self.getTween = function(snap) {
            return snap && tweenTo ? tweenTo.tween : scrubTween;
        };
        self.setPositions = function(newStart, newEnd) {
            // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
            if (pin) {
                pinStart += newStart - start;
                pinChange += newEnd - newStart - change;
                pinSpacing === $375cdd9a1f4cd44d$var$_padding && self.adjustPinSpacing(newEnd - newStart - change);
            }
            self.start = start = newStart;
            self.end = end = newEnd;
            change = newEnd - newStart;
            self.update();
        };
        self.adjustPinSpacing = function(amount) {
            if (spacerState) {
                var i = spacerState.indexOf(direction.d) + 1;
                spacerState[i] = parseFloat(spacerState[i]) + amount + $375cdd9a1f4cd44d$var$_px;
                spacerState[1] = parseFloat(spacerState[1]) + amount + $375cdd9a1f4cd44d$var$_px;
                $375cdd9a1f4cd44d$var$_setState(spacerState);
            }
        };
        self.disable = function(reset, allowAnimation) {
            if (self.enabled) {
                reset !== false && self.revert(true, true);
                self.enabled = self.isActive = false;
                allowAnimation || scrubTween && scrubTween.pause();
                prevScroll = 0;
                pinCache && (pinCache.uncache = 1);
                onRefreshInit && $375cdd9a1f4cd44d$var$_removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (snapDelayedCall) {
                    snapDelayedCall.pause();
                    tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                }
                if (!isViewport) {
                    var i = $375cdd9a1f4cd44d$var$_triggers.length;
                    while(i--){
                        if ($375cdd9a1f4cd44d$var$_triggers[i].scroller === scroller && $375cdd9a1f4cd44d$var$_triggers[i] !== self) return; //don't remove the listeners if there are still other triggers referencing it.
                    }
                    $375cdd9a1f4cd44d$var$_removeListener(scroller, "resize", $375cdd9a1f4cd44d$var$_onResize);
                    $375cdd9a1f4cd44d$var$_removeListener(scroller, "scroll", $375cdd9a1f4cd44d$var$_onScroll);
                }
            }
        };
        self.kill = function(revert, allowAnimation) {
            self.disable(revert, allowAnimation);
            scrubTween && !allowAnimation && scrubTween.kill();
            id && delete $375cdd9a1f4cd44d$var$_ids[id];
            var i = $375cdd9a1f4cd44d$var$_triggers.indexOf(self);
            i >= 0 && $375cdd9a1f4cd44d$var$_triggers.splice(i, 1);
            i === $375cdd9a1f4cd44d$var$_i && $375cdd9a1f4cd44d$var$_direction > 0 && $375cdd9a1f4cd44d$var$_i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
            // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.
            i = 0;
            $375cdd9a1f4cd44d$var$_triggers.forEach(function(t) {
                return t.scroller === self.scroller && (i = 1);
            });
            i || $375cdd9a1f4cd44d$var$_refreshingAll || (self.scroll.rec = 0);
            if (animation) {
                animation.scrollTrigger = null;
                revert && animation.revert({
                    kill: false
                });
                allowAnimation || animation.kill();
            }
            markerStart && [
                markerStart,
                markerEnd,
                markerStartTrigger,
                markerEndTrigger
            ].forEach(function(m) {
                return m.parentNode && m.parentNode.removeChild(m);
            });
            $375cdd9a1f4cd44d$var$_primary === self && ($375cdd9a1f4cd44d$var$_primary = 0);
            if (pin) {
                pinCache && (pinCache.uncache = 1);
                i = 0;
                $375cdd9a1f4cd44d$var$_triggers.forEach(function(t) {
                    return t.pin === pin && i++;
                });
                i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
            }
            vars.onKill && vars.onKill(self);
        };
        self.enable(false, false);
        customRevertReturn && customRevertReturn(self);
        !animation || !animation.add || change ? self.refresh() : $375cdd9a1f4cd44d$var$gsap.delayedCall(0.01, function() {
            return start || end || self.refresh();
        }) && (change = 0.01) && (start = end = 0); // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
        pin && $375cdd9a1f4cd44d$var$_queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
    };
    ScrollTrigger.register = function register(core) {
        if (!$375cdd9a1f4cd44d$var$_coreInitted) {
            $375cdd9a1f4cd44d$var$gsap = core || $375cdd9a1f4cd44d$var$_getGSAP();
            $375cdd9a1f4cd44d$var$_windowExists() && window.document && ScrollTrigger.enable();
            $375cdd9a1f4cd44d$var$_coreInitted = $375cdd9a1f4cd44d$var$_enabled;
        }
        return $375cdd9a1f4cd44d$var$_coreInitted;
    };
    ScrollTrigger.defaults = function defaults(config) {
        if (config) for(var p in config)$375cdd9a1f4cd44d$var$_defaults[p] = config[p];
        return $375cdd9a1f4cd44d$var$_defaults;
    };
    ScrollTrigger.disable = function disable(reset, kill) {
        $375cdd9a1f4cd44d$var$_enabled = 0;
        $375cdd9a1f4cd44d$var$_triggers.forEach(function(trigger) {
            return trigger[kill ? "kill" : "disable"](reset);
        });
        $375cdd9a1f4cd44d$var$_removeListener($375cdd9a1f4cd44d$var$_win, "wheel", $375cdd9a1f4cd44d$var$_onScroll);
        $375cdd9a1f4cd44d$var$_removeListener($375cdd9a1f4cd44d$var$_doc, "scroll", $375cdd9a1f4cd44d$var$_onScroll);
        clearInterval($375cdd9a1f4cd44d$var$_syncInterval);
        $375cdd9a1f4cd44d$var$_removeListener($375cdd9a1f4cd44d$var$_doc, "touchcancel", $375cdd9a1f4cd44d$var$_passThrough);
        $375cdd9a1f4cd44d$var$_removeListener($375cdd9a1f4cd44d$var$_body, "touchstart", $375cdd9a1f4cd44d$var$_passThrough);
        $375cdd9a1f4cd44d$var$_multiListener($375cdd9a1f4cd44d$var$_removeListener, $375cdd9a1f4cd44d$var$_doc, "pointerdown,touchstart,mousedown", $375cdd9a1f4cd44d$var$_pointerDownHandler);
        $375cdd9a1f4cd44d$var$_multiListener($375cdd9a1f4cd44d$var$_removeListener, $375cdd9a1f4cd44d$var$_doc, "pointerup,touchend,mouseup", $375cdd9a1f4cd44d$var$_pointerUpHandler);
        $375cdd9a1f4cd44d$var$_resizeDelay.kill();
        $375cdd9a1f4cd44d$var$_iterateAutoRefresh($375cdd9a1f4cd44d$var$_removeListener);
        for(var i = 0; i < (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).length; i += 3){
            $375cdd9a1f4cd44d$var$_wheelListener($375cdd9a1f4cd44d$var$_removeListener, (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683)[i], (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683)[i + 1]);
            $375cdd9a1f4cd44d$var$_wheelListener($375cdd9a1f4cd44d$var$_removeListener, (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683)[i], (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683)[i + 2]);
        }
    };
    ScrollTrigger.enable = function enable() {
        $375cdd9a1f4cd44d$var$_win = window;
        $375cdd9a1f4cd44d$var$_doc = document;
        $375cdd9a1f4cd44d$var$_docEl = $375cdd9a1f4cd44d$var$_doc.documentElement;
        $375cdd9a1f4cd44d$var$_body = $375cdd9a1f4cd44d$var$_doc.body;
        if ($375cdd9a1f4cd44d$var$gsap) {
            $375cdd9a1f4cd44d$var$_toArray = $375cdd9a1f4cd44d$var$gsap.utils.toArray;
            $375cdd9a1f4cd44d$var$_clamp = $375cdd9a1f4cd44d$var$gsap.utils.clamp;
            $375cdd9a1f4cd44d$var$_context = $375cdd9a1f4cd44d$var$gsap.core.context || $375cdd9a1f4cd44d$var$_passThrough;
            $375cdd9a1f4cd44d$var$_suppressOverwrites = $375cdd9a1f4cd44d$var$gsap.core.suppressOverwrites || $375cdd9a1f4cd44d$var$_passThrough;
            $375cdd9a1f4cd44d$var$_scrollRestoration = $375cdd9a1f4cd44d$var$_win.history.scrollRestoration || "auto";
            $375cdd9a1f4cd44d$var$gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.
            if ($375cdd9a1f4cd44d$var$_body) {
                $375cdd9a1f4cd44d$var$_enabled = 1;
                (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b).register($375cdd9a1f4cd44d$var$gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
                ScrollTrigger.isTouch = (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b).isTouch;
                $375cdd9a1f4cd44d$var$_fixIOSBug = (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b).isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503
                $375cdd9a1f4cd44d$var$_addListener($375cdd9a1f4cd44d$var$_win, "wheel", $375cdd9a1f4cd44d$var$_onScroll); // mostly for 3rd party smooth scrolling libraries.
                $375cdd9a1f4cd44d$var$_root = [
                    $375cdd9a1f4cd44d$var$_win,
                    $375cdd9a1f4cd44d$var$_doc,
                    $375cdd9a1f4cd44d$var$_docEl,
                    $375cdd9a1f4cd44d$var$_body
                ];
                if ($375cdd9a1f4cd44d$var$gsap.matchMedia) {
                    ScrollTrigger.matchMedia = function(vars) {
                        var mm = $375cdd9a1f4cd44d$var$gsap.matchMedia(), p;
                        for(p in vars)mm.add(p, vars[p]);
                        return mm;
                    };
                    $375cdd9a1f4cd44d$var$gsap.addEventListener("matchMediaInit", function() {
                        return $375cdd9a1f4cd44d$var$_revertAll();
                    });
                    $375cdd9a1f4cd44d$var$gsap.addEventListener("matchMediaRevert", function() {
                        return $375cdd9a1f4cd44d$var$_revertRecorded();
                    });
                    $375cdd9a1f4cd44d$var$gsap.addEventListener("matchMedia", function() {
                        $375cdd9a1f4cd44d$var$_refreshAll(0, 1);
                        $375cdd9a1f4cd44d$var$_dispatch("matchMedia");
                    });
                    $375cdd9a1f4cd44d$var$gsap.matchMedia("(orientation: portrait)", function() {
                        // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
                        $375cdd9a1f4cd44d$var$_setBaseDimensions();
                        return $375cdd9a1f4cd44d$var$_setBaseDimensions;
                    });
                } else console.warn("Requires GSAP 3.11.0 or later");
                $375cdd9a1f4cd44d$var$_setBaseDimensions();
                $375cdd9a1f4cd44d$var$_addListener($375cdd9a1f4cd44d$var$_doc, "scroll", $375cdd9a1f4cd44d$var$_onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!
                var bodyStyle = $375cdd9a1f4cd44d$var$_body.style, border = bodyStyle.borderTopStyle, AnimationProto = $375cdd9a1f4cd44d$var$gsap.core.Animation.prototype, bounds, i;
                AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                    value: function value() {
                        return this.time(-0.01, true);
                    }
                }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)
                bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.
                bounds = $375cdd9a1f4cd44d$var$_getBounds($375cdd9a1f4cd44d$var$_body);
                (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d).m = Math.round(bounds.top + (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d).sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding
                (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1).m = Math.round(bounds.left + (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1).sc()) || 0;
                border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.
                $375cdd9a1f4cd44d$var$_syncInterval = setInterval($375cdd9a1f4cd44d$var$_sync, 250);
                $375cdd9a1f4cd44d$var$gsap.delayedCall(0.5, function() {
                    return $375cdd9a1f4cd44d$var$_startup = 0;
                });
                $375cdd9a1f4cd44d$var$_addListener($375cdd9a1f4cd44d$var$_doc, "touchcancel", $375cdd9a1f4cd44d$var$_passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.
                $375cdd9a1f4cd44d$var$_addListener($375cdd9a1f4cd44d$var$_body, "touchstart", $375cdd9a1f4cd44d$var$_passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/
                $375cdd9a1f4cd44d$var$_multiListener($375cdd9a1f4cd44d$var$_addListener, $375cdd9a1f4cd44d$var$_doc, "pointerdown,touchstart,mousedown", $375cdd9a1f4cd44d$var$_pointerDownHandler);
                $375cdd9a1f4cd44d$var$_multiListener($375cdd9a1f4cd44d$var$_addListener, $375cdd9a1f4cd44d$var$_doc, "pointerup,touchend,mouseup", $375cdd9a1f4cd44d$var$_pointerUpHandler);
                $375cdd9a1f4cd44d$var$_transformProp = $375cdd9a1f4cd44d$var$gsap.utils.checkPrefix("transform");
                $375cdd9a1f4cd44d$var$_stateProps.push($375cdd9a1f4cd44d$var$_transformProp);
                $375cdd9a1f4cd44d$var$_coreInitted = $375cdd9a1f4cd44d$var$_getTime();
                $375cdd9a1f4cd44d$var$_resizeDelay = $375cdd9a1f4cd44d$var$gsap.delayedCall(0.2, $375cdd9a1f4cd44d$var$_refreshAll).pause();
                $375cdd9a1f4cd44d$var$_autoRefresh = [
                    $375cdd9a1f4cd44d$var$_doc,
                    "visibilitychange",
                    function() {
                        var w = $375cdd9a1f4cd44d$var$_win.innerWidth, h = $375cdd9a1f4cd44d$var$_win.innerHeight;
                        if ($375cdd9a1f4cd44d$var$_doc.hidden) {
                            $375cdd9a1f4cd44d$var$_prevWidth = w;
                            $375cdd9a1f4cd44d$var$_prevHeight = h;
                        } else if ($375cdd9a1f4cd44d$var$_prevWidth !== w || $375cdd9a1f4cd44d$var$_prevHeight !== h) $375cdd9a1f4cd44d$var$_onResize();
                    },
                    $375cdd9a1f4cd44d$var$_doc,
                    "DOMContentLoaded",
                    $375cdd9a1f4cd44d$var$_refreshAll,
                    $375cdd9a1f4cd44d$var$_win,
                    "load",
                    $375cdd9a1f4cd44d$var$_refreshAll,
                    $375cdd9a1f4cd44d$var$_win,
                    "resize",
                    $375cdd9a1f4cd44d$var$_onResize
                ];
                $375cdd9a1f4cd44d$var$_iterateAutoRefresh($375cdd9a1f4cd44d$var$_addListener);
                $375cdd9a1f4cd44d$var$_triggers.forEach(function(trigger) {
                    return trigger.enable(0, 1);
                });
                for(i = 0; i < (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).length; i += 3){
                    $375cdd9a1f4cd44d$var$_wheelListener($375cdd9a1f4cd44d$var$_removeListener, (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683)[i], (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683)[i + 1]);
                    $375cdd9a1f4cd44d$var$_wheelListener($375cdd9a1f4cd44d$var$_removeListener, (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683)[i], (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683)[i + 2]);
                }
            }
        }
    };
    ScrollTrigger.config = function config(vars) {
        "limitCallbacks" in vars && ($375cdd9a1f4cd44d$var$_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        ms && clearInterval($375cdd9a1f4cd44d$var$_syncInterval) || ($375cdd9a1f4cd44d$var$_syncInterval = ms) && setInterval($375cdd9a1f4cd44d$var$_sync, ms);
        "ignoreMobileResize" in vars && ($375cdd9a1f4cd44d$var$_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
            $375cdd9a1f4cd44d$var$_iterateAutoRefresh($375cdd9a1f4cd44d$var$_removeListener) || $375cdd9a1f4cd44d$var$_iterateAutoRefresh($375cdd9a1f4cd44d$var$_addListener, vars.autoRefreshEvents || "none");
            $375cdd9a1f4cd44d$var$_ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
    };
    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
        var t = (0, $0f0e1503ed2c844e$export$937374fea3f88711)(target), i = (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).indexOf(t), isViewport = $375cdd9a1f4cd44d$var$_isViewport(t);
        if (~i) (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).splice(i, isViewport ? 6 : 2);
        if (vars) isViewport ? (0, $0f0e1503ed2c844e$export$d8e56d510a804d0a).unshift($375cdd9a1f4cd44d$var$_win, vars, $375cdd9a1f4cd44d$var$_body, vars, $375cdd9a1f4cd44d$var$_docEl, vars) : (0, $0f0e1503ed2c844e$export$d8e56d510a804d0a).unshift(t, vars);
    };
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
        $375cdd9a1f4cd44d$var$_triggers.forEach(function(t) {
            return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
        });
    };
    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = ($375cdd9a1f4cd44d$var$_isString(element) ? (0, $0f0e1503ed2c844e$export$937374fea3f88711)(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? $375cdd9a1f4cd44d$var$_width : $375cdd9a1f4cd44d$var$_height] * ratio || 0;
        return horizontal ? bounds.right - offset > 0 && bounds.left + offset < $375cdd9a1f4cd44d$var$_win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < $375cdd9a1f4cd44d$var$_win.innerHeight;
    };
    ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
        $375cdd9a1f4cd44d$var$_isString(element) && (element = (0, $0f0e1503ed2c844e$export$937374fea3f88711)(element));
        var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? $375cdd9a1f4cd44d$var$_width : $375cdd9a1f4cd44d$var$_height], offset = referencePoint == null ? size / 2 : referencePoint in $375cdd9a1f4cd44d$var$_keywords ? $375cdd9a1f4cd44d$var$_keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
        return horizontal ? (bounds.left + offset) / $375cdd9a1f4cd44d$var$_win.innerWidth : (bounds.top + offset) / $375cdd9a1f4cd44d$var$_win.innerHeight;
    };
    ScrollTrigger.killAll = function killAll(allowListeners) {
        $375cdd9a1f4cd44d$var$_triggers.forEach(function(t) {
            return t.vars.id !== "ScrollSmoother" && t.kill();
        });
        if (allowListeners !== true) {
            var listeners = $375cdd9a1f4cd44d$var$_listeners.killAll || [];
            $375cdd9a1f4cd44d$var$_listeners = {};
            listeners.forEach(function(f) {
                return f();
            });
        }
    };
    return ScrollTrigger;
}();
$375cdd9a1f4cd44d$export$875bcbe48555930.version = "3.11.3";
$375cdd9a1f4cd44d$export$875bcbe48555930.saveStyles = function(targets) {
    return targets ? $375cdd9a1f4cd44d$var$_toArray(targets).forEach(function(target) {
        // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
        if (target && target.style) {
            var i = $375cdd9a1f4cd44d$var$_savedStyles.indexOf(target);
            i >= 0 && $375cdd9a1f4cd44d$var$_savedStyles.splice(i, 5);
            $375cdd9a1f4cd44d$var$_savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), $375cdd9a1f4cd44d$var$gsap.core.getCache(target), $375cdd9a1f4cd44d$var$_context());
        }
    }) : $375cdd9a1f4cd44d$var$_savedStyles;
};
$375cdd9a1f4cd44d$export$875bcbe48555930.revert = function(soft, media) {
    return $375cdd9a1f4cd44d$var$_revertAll(!soft, media);
};
$375cdd9a1f4cd44d$export$875bcbe48555930.create = function(vars, animation) {
    return new $375cdd9a1f4cd44d$export$875bcbe48555930(vars, animation);
};
$375cdd9a1f4cd44d$export$875bcbe48555930.refresh = function(safe) {
    return safe ? $375cdd9a1f4cd44d$var$_onResize() : ($375cdd9a1f4cd44d$var$_coreInitted || $375cdd9a1f4cd44d$export$875bcbe48555930.register()) && $375cdd9a1f4cd44d$var$_refreshAll(true);
};
$375cdd9a1f4cd44d$export$875bcbe48555930.update = $375cdd9a1f4cd44d$var$_updateAll;
$375cdd9a1f4cd44d$export$875bcbe48555930.clearScrollMemory = $375cdd9a1f4cd44d$var$_clearScrollMemory;
$375cdd9a1f4cd44d$export$875bcbe48555930.maxScroll = function(element, horizontal) {
    return $375cdd9a1f4cd44d$var$_maxScroll(element, horizontal ? (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1) : (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d));
};
$375cdd9a1f4cd44d$export$875bcbe48555930.getScrollFunc = function(element, horizontal) {
    return (0, $0f0e1503ed2c844e$export$8665aac53dad5647)((0, $0f0e1503ed2c844e$export$937374fea3f88711)(element), horizontal ? (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1) : (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d));
};
$375cdd9a1f4cd44d$export$875bcbe48555930.getById = function(id) {
    return $375cdd9a1f4cd44d$var$_ids[id];
};
$375cdd9a1f4cd44d$export$875bcbe48555930.getAll = function() {
    return $375cdd9a1f4cd44d$var$_triggers.filter(function(t) {
        return t.vars.id !== "ScrollSmoother";
    });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.
$375cdd9a1f4cd44d$export$875bcbe48555930.isScrolling = function() {
    return !!$375cdd9a1f4cd44d$var$_lastScrollTime;
};
$375cdd9a1f4cd44d$export$875bcbe48555930.snapDirectional = $375cdd9a1f4cd44d$var$_snapDirectional;
$375cdd9a1f4cd44d$export$875bcbe48555930.addEventListener = function(type, callback) {
    var a = $375cdd9a1f4cd44d$var$_listeners[type] || ($375cdd9a1f4cd44d$var$_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
};
$375cdd9a1f4cd44d$export$875bcbe48555930.removeEventListener = function(type, callback) {
    var a = $375cdd9a1f4cd44d$var$_listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
};
$375cdd9a1f4cd44d$export$875bcbe48555930.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
        var elements = [], triggers = [], delay = $375cdd9a1f4cd44d$var$gsap.delayedCall(interval, function() {
            callback(elements, triggers);
            elements = [];
            triggers = [];
        }).pause();
        return function(self) {
            elements.length || delay.restart(true);
            elements.push(self.trigger);
            triggers.push(self);
            batchMax <= elements.length && delay.progress(1);
        };
    }, p;
    for(p in vars)varsCopy[p] = p.substr(0, 2) === "on" && $375cdd9a1f4cd44d$var$_isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    if ($375cdd9a1f4cd44d$var$_isFunction(batchMax)) {
        batchMax = batchMax();
        $375cdd9a1f4cd44d$var$_addListener($375cdd9a1f4cd44d$export$875bcbe48555930, "refresh", function() {
            return batchMax = vars.batchMax();
        });
    }
    $375cdd9a1f4cd44d$var$_toArray(targets).forEach(function(target) {
        var config = {};
        for(p in varsCopy)config[p] = varsCopy[p];
        config.trigger = target;
        result.push($375cdd9a1f4cd44d$export$875bcbe48555930.create(config));
    });
    return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).
var $375cdd9a1f4cd44d$var$_clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, $375cdd9a1f4cd44d$var$_allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) target.style.removeProperty("touch-action");
    else target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + ((0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b).isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
    target === $375cdd9a1f4cd44d$var$_docEl && _allowNativePanning($375cdd9a1f4cd44d$var$_body, direction);
}, $375cdd9a1f4cd44d$var$_overflow = {
    auto: 1,
    scroll: 1
}, $375cdd9a1f4cd44d$var$_nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || $375cdd9a1f4cd44d$var$gsap.core.getCache(node), time = $375cdd9a1f4cd44d$var$_getTime(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
        // cache for 2 seconds to improve performance.
        while(node && node.scrollHeight <= node.clientHeight)node = node.parentNode;
        cache._isScroll = node && !$375cdd9a1f4cd44d$var$_isViewport(node) && node !== target && ($375cdd9a1f4cd44d$var$_overflow[(cs = $375cdd9a1f4cd44d$var$_getComputedStyle(node)).overflowY] || $375cdd9a1f4cd44d$var$_overflow[cs.overflowX]);
        cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
        event.stopPropagation();
        event._gsapAllow = true;
    }
}, // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
$375cdd9a1f4cd44d$var$_inputObserver = function _inputObserver(target, type, inputs, nested) {
    return (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b).create({
        target: target,
        capture: true,
        debounce: false,
        lockAxis: true,
        type: type,
        onWheel: nested = nested && $375cdd9a1f4cd44d$var$_nestedScroll,
        onPress: nested,
        onDrag: nested,
        onScroll: nested,
        onEnable: function onEnable() {
            return inputs && $375cdd9a1f4cd44d$var$_addListener($375cdd9a1f4cd44d$var$_doc, (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b).eventTypes[0], $375cdd9a1f4cd44d$var$_captureInputs, false, true);
        },
        onDisable: function onDisable() {
            return $375cdd9a1f4cd44d$var$_removeListener($375cdd9a1f4cd44d$var$_doc, (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b).eventTypes[0], $375cdd9a1f4cd44d$var$_captureInputs, true);
        }
    });
}, $375cdd9a1f4cd44d$var$_inputExp = /(input|label|select|textarea)/i, $375cdd9a1f4cd44d$var$_inputIsFocused, $375cdd9a1f4cd44d$var$_captureInputs = function _captureInputs(e) {
    var isInput = $375cdd9a1f4cd44d$var$_inputExp.test(e.target.tagName);
    if (isInput || $375cdd9a1f4cd44d$var$_inputIsFocused) {
        e._gsapAllow = true;
        $375cdd9a1f4cd44d$var$_inputIsFocused = isInput;
    }
}, $375cdd9a1f4cd44d$var$_getScrollNormalizer = function _getScrollNormalizer(vars) {
    $375cdd9a1f4cd44d$var$_isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self, maxY, target = (0, $0f0e1503ed2c844e$export$937374fea3f88711)(vars.target) || $375cdd9a1f4cd44d$var$_docEl, smoother = $375cdd9a1f4cd44d$var$gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = $375cdd9a1f4cd44d$var$_fixIOSBug && (vars.content && (0, $0f0e1503ed2c844e$export$937374fea3f88711)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = (0, $0f0e1503ed2c844e$export$8665aac53dad5647)(target, (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d)), scrollFuncX = (0, $0f0e1503ed2c844e$export$8665aac53dad5647)(target, (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1)), scale = 1, initialScale = ((0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b).isTouch && $375cdd9a1f4cd44d$var$_win.visualViewport ? $375cdd9a1f4cd44d$var$_win.visualViewport.scale * $375cdd9a1f4cd44d$var$_win.visualViewport.width : $375cdd9a1f4cd44d$var$_win.outerWidth) / $375cdd9a1f4cd44d$var$_win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = $375cdd9a1f4cd44d$var$_isFunction(momentum) ? function() {
        return momentum(self);
    } : function() {
        return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = $375cdd9a1f4cd44d$var$_inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
        return skipTouchMove = false;
    }, scrollClampX = $375cdd9a1f4cd44d$var$_passThrough, scrollClampY = $375cdd9a1f4cd44d$var$_passThrough, updateClamps = function updateClamps() {
        maxY = $375cdd9a1f4cd44d$var$_maxScroll(target, (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d));
        scrollClampY = $375cdd9a1f4cd44d$var$_clamp($375cdd9a1f4cd44d$var$_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = $375cdd9a1f4cd44d$var$_clamp(0, $375cdd9a1f4cd44d$var$_maxScroll(target, (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1))));
        lastRefreshID = $375cdd9a1f4cd44d$var$_refreshID;
    }, removeContentOffset = function removeContentOffset() {
        content._gsap.y = $375cdd9a1f4cd44d$var$_round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag() {
        if (skipTouchMove) {
            requestAnimationFrame(resumeTouchMove);
            var offset = $375cdd9a1f4cd44d$var$_round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
            if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll - scrollFuncY.v;
                var y = $375cdd9a1f4cd44d$var$_round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
                content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
                content._gsap.y = y + "px";
                scrollFuncY.cacheID = (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).cache;
                $375cdd9a1f4cd44d$var$_updateAll();
            }
            return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize() {
        // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    };
    content && $375cdd9a1f4cd44d$var$gsap.set(content, {
        y: "+=0"
    }); // to ensure there's a cache (element._gsap)
    vars.ignoreCheck = function(e) {
        return $375cdd9a1f4cd44d$var$_fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
        var prevScale = scale;
        scale = $375cdd9a1f4cd44d$var$_round(($375cdd9a1f4cd44d$var$_win.visualViewport && $375cdd9a1f4cd44d$var$_win.visualViewport.scale || 1) / initialScale);
        tween.pause();
        prevScale !== scale && $375cdd9a1f4cd44d$var$_allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
        startScrollX = scrollFuncX();
        startScrollY = scrollFuncY();
        updateClamps();
        lastRefreshID = $375cdd9a1f4cd44d$var$_refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) onStopDelayedCall.restart(true);
        else {
            (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683).cache++; // make sure we're pulling the non-cached value
            // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)
            var dur = resolveMomentumDuration(), currentScroll, endScroll;
            if (normalizeScrollX) {
                currentScroll = scrollFuncX();
                endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.
                dur *= $375cdd9a1f4cd44d$var$_clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, $375cdd9a1f4cd44d$var$_maxScroll(target, (0, $0f0e1503ed2c844e$export$b2cabb342cb0ebe1)));
                tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)
            dur *= $375cdd9a1f4cd44d$var$_clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, $375cdd9a1f4cd44d$var$_maxScroll(target, (0, $0f0e1503ed2c844e$export$8e40fc98ff518e9d)));
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if ($375cdd9a1f4cd44d$var$_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
            $375cdd9a1f4cd44d$var$gsap.to({}, {
                onUpdate: onResize,
                duration: dur
            });
        }
    };
    vars.onWheel = function() {
        tween._ts && tween.pause();
        if ($375cdd9a1f4cd44d$var$_getTime() - wheelRefresh > 1000) {
            // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
            lastRefreshID = 0;
            wheelRefresh = $375cdd9a1f4cd44d$var$_getTime();
        }
    };
    vars.onChange = function(self, dx, dy, xArray, yArray) {
        $375cdd9a1f4cd44d$var$_refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.
        if (dy) {
            scrollFuncY.offset && removeContentOffset();
            var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
            isTouch && y !== yClamped && (startScrollY += yClamped - y);
            scrollFuncY(yClamped);
        }
        (dy || dx) && $375cdd9a1f4cd44d$var$_updateAll();
    };
    vars.onEnable = function() {
        $375cdd9a1f4cd44d$var$_allowNativePanning(target, normalizeScrollX ? false : "x");
        $375cdd9a1f4cd44d$export$875bcbe48555930.addEventListener("refresh", onResize);
        $375cdd9a1f4cd44d$var$_addListener($375cdd9a1f4cd44d$var$_win, "resize", onResize);
        if (scrollFuncY.smooth) {
            scrollFuncY.target.style.scrollBehavior = "auto";
            scrollFuncY.smooth = scrollFuncX.smooth = false;
        }
        inputObserver.enable();
    };
    vars.onDisable = function() {
        $375cdd9a1f4cd44d$var$_allowNativePanning(target, true);
        $375cdd9a1f4cd44d$var$_removeListener($375cdd9a1f4cd44d$var$_win, "resize", onResize);
        $375cdd9a1f4cd44d$export$875bcbe48555930.removeEventListener("refresh", onResize);
        inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b)(vars);
    self.iOS = $375cdd9a1f4cd44d$var$_fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.
    $375cdd9a1f4cd44d$var$_fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.
    $375cdd9a1f4cd44d$var$_fixIOSBug && $375cdd9a1f4cd44d$var$gsap.ticker.add($375cdd9a1f4cd44d$var$_passThrough); // prevent the ticker from sleeping
    onStopDelayedCall = self._dc;
    tween = $375cdd9a1f4cd44d$var$gsap.to(self, {
        ease: "power4",
        paused: true,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
};
$375cdd9a1f4cd44d$export$875bcbe48555930.sort = function(func) {
    return $375cdd9a1f4cd44d$var$_triggers.sort(func || function(a, b) {
        return (a.vars.refreshPriority || 0) * -1000000 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1000000);
    });
};
$375cdd9a1f4cd44d$export$875bcbe48555930.observe = function(vars) {
    return new (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b)(vars);
};
$375cdd9a1f4cd44d$export$875bcbe48555930.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") return $375cdd9a1f4cd44d$var$_normalizer;
    if (vars === true && $375cdd9a1f4cd44d$var$_normalizer) return $375cdd9a1f4cd44d$var$_normalizer.enable();
    if (vars === false) return $375cdd9a1f4cd44d$var$_normalizer && $375cdd9a1f4cd44d$var$_normalizer.kill();
    var normalizer = vars instanceof (0, $0f0e1503ed2c844e$export$c1cbdee04e18ea8b) ? vars : $375cdd9a1f4cd44d$var$_getScrollNormalizer(vars);
    $375cdd9a1f4cd44d$var$_normalizer && $375cdd9a1f4cd44d$var$_normalizer.target === normalizer.target && $375cdd9a1f4cd44d$var$_normalizer.kill();
    $375cdd9a1f4cd44d$var$_isViewport(normalizer.target) && ($375cdd9a1f4cd44d$var$_normalizer = normalizer);
    return normalizer;
};
$375cdd9a1f4cd44d$export$875bcbe48555930.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp: (0, $0f0e1503ed2c844e$export$5de019f4480f0f8d),
    _inputObserver: $375cdd9a1f4cd44d$var$_inputObserver,
    _scrollers: (0, $0f0e1503ed2c844e$export$3cd1cee43d19b683),
    _proxies: (0, $0f0e1503ed2c844e$export$d8e56d510a804d0a),
    bridge: {
        // when normalizeScroll sets the scroll position (ss = setScroll)
        ss: function ss() {
            $375cdd9a1f4cd44d$var$_lastScrollTime || $375cdd9a1f4cd44d$var$_dispatch("scrollStart");
            $375cdd9a1f4cd44d$var$_lastScrollTime = $375cdd9a1f4cd44d$var$_getTime();
        },
        // a way to get the _refreshing value in Observer
        ref: function ref() {
            return $375cdd9a1f4cd44d$var$_refreshing;
        }
    }
};
$375cdd9a1f4cd44d$var$_getGSAP() && $375cdd9a1f4cd44d$var$gsap.registerPlugin($375cdd9a1f4cd44d$export$875bcbe48555930);


var $97861f709e06d241$exports = {};
!function(e, t) {
    t($97861f709e06d241$exports);
}($97861f709e06d241$exports, function(e) {
    "use strict";
    function _defineProperties(e, t) {
        for(var r = 0; r < t.length; r++){
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    function s() {
        return "undefined" != typeof window;
    }
    function t() {
        return F || s() && (F = window.gsap) && F;
    }
    function w() {
        return String.fromCharCode.apply(null, arguments);
    }
    var F, L, W, I, V, Y, K, N, Q, j, q, D, X, Z, G, i = "ScrollSmoother", a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), r = (ScrollSmoother.register = function register(e) {
        return L || (F = e || t(), s() && window.document && (W = window, I = document, V = I.documentElement, Y = I.body), F && (K = F.utils.toArray, N = F.utils.clamp, q = F.parseEase("expo"), Z = F.core.context || function() {}, G = F.delayedCall(.2, function() {
            return Q.isRefreshing || j && j.refresh();
        }).pause(), Q = F.core.globals().ScrollTrigger, F.core.globals("ScrollSmoother", ScrollSmoother), Y && Q && (D = Q.core._getVelocityProp, X = Q.core._inputObserver, ScrollSmoother.refresh = Q.refresh, L = 1))), L;
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
    }(ScrollSmoother, [
        {
            key: "progress",
            get: function get() {
                return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
            }
        }
    ]), ScrollSmoother);
    function ScrollSmoother(t) {
        var o = this;
        function Ka() {
            return z.update(-H);
        }
        function Ma() {
            return n.style.overflow = "visible";
        }
        function Oa(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), h = !1, e.animation.progress(e.progress, !0);
        }
        function Pa(e, t) {
            (e !== H && !u || t) && (x && (e = Math.round(e)), R && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", n._gsap.y = e + "px"), A = e - H, H = e, Q.isUpdating || Q.update());
        }
        function Qa(e) {
            return arguments.length ? (e < 0 && (e = 0), U.y = -e, h = !0, u ? H = -e : Pa(-e), Q.isRefreshing ? i.update() : C(e), this) : -H;
        }
        function Sa(e) {
            v.scrollTop = 0, e.target.contains && e.target.contains(v) || T && !1 === T(o, e) || (Q.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"), g = e.target);
        }
        function Ta(e) {
            var r, n, o, i;
            S.forEach(function(t) {
                r = t.pins, i = t.markers, e.forEach(function(e) {
                    t.trigger && e.trigger && t !== e && (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) && (n = e.start, o = (n - t.start - t.offset) / t.ratio - (n - t.start), r.forEach(function(e) {
                        return o -= e.distance / t.ratio - e.distance;
                    }), e.setPositions(n + o, e.end + o), e.markerStart && i.push(F.quickSetter([
                        e.markerStart,
                        e.markerEnd
                    ], "y", "px")), e.pin && 0 < e.end && (o = e.end - e.start, r.push({
                        start: e.start,
                        end: e.end,
                        distance: o,
                        trig: e
                    }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)));
                });
            });
        }
        function Ua() {
            Ma(), requestAnimationFrame(Ma), S && (S.forEach(function(e) {
                var t = e.start, r = e.auto ? Math.min(Q.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio, n = (r - e.end) / 2;
                t -= n, r -= n, e.offset = n || 1e-4, e.pins.length = 0, e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e);
            }), Ta(Q.sort())), z.reset();
        }
        function Va() {
            return Q.addEventListener("refresh", Ua);
        }
        function Wa() {
            return S && S.forEach(function(e) {
                return e.vars.onRefresh(e);
            });
        }
        function Xa() {
            return S && S.forEach(function(e) {
                return e.vars.onRefreshInit(e);
            }), Wa;
        }
        function Ya(t, r, n, o) {
            return function() {
                var e = "function" == typeof r ? r(n, o) : r;
                return e || 0 === e || (e = o.getAttribute("data-" + _ + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + _ + t, e), "auto" === e ? e : parseFloat(e);
            };
        }
        function Za(r, e, t, n, o) {
            function Ob() {
                e = f(), t = d(), i = parseFloat(e) || 1, c = (a = "auto" === e) ? 0 : .5, l && l.kill(), l = t && F.to(r, {
                    ease: q,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                }), s && (s.ratio = i, s.autoSpeed = a);
            }
            function Pb() {
                g.y = h + "px", g.renderTransform(1), Ob();
            }
            function Tb(e) {
                if (a) {
                    Pb();
                    var t = function _autoDistance(e, t) {
                        var r, n, o = e.parentNode || V, i = e.getBoundingClientRect(), s = o.getBoundingClientRect(), a = s.top - i.top, l = s.bottom - i.bottom, c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t), u = -c * t;
                        return 0 < c && (n = .5 == (r = s.height / (W.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, -c * r / (2 * r - 1)) * (t || 1), u += t ? -n * t : -n / 2, c += n), {
                            change: c,
                            offset: u
                        };
                    }(r, N(0, 1, -e.start / (e.end - e.start)));
                    m = t.change, u = t.offset;
                } else m = (e.end - e.start) * (1 - i), u = 0;
                p.forEach(function(e) {
                    return m -= e.distance * (1 - i);
                }), e.vars.onUpdate(e), l && l.progress(1);
            }
            o = ("function" == typeof o ? o(n, r) : o) || 0;
            var i, s, a, l, c, u, f = Ya("speed", e, n, r), d = Ya("lag", t, n, r), h = F.getProperty(r, "y"), g = r._gsap, p = [], w = [], m = 0;
            return Ob(), (1 !== i || a || l) && (Tb(s = Q.create({
                trigger: a ? r.parentNode : r,
                start: "top bottom+=" + o,
                end: "bottom top-=" + o,
                scroller: v,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: Pb,
                onRefresh: Tb,
                onKill: function onKill(e) {
                    var t = S.indexOf(e);
                    0 <= t && S.splice(t, 1), Pb();
                },
                onUpdate: function onUpdate(e) {
                    var t, r, n, o = h + m * (e.progress - c), i = p.length, s = 0;
                    if (e.offset) {
                        if (i) {
                            for(r = -H, n = e.end; i--;){
                                if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end) return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -0.001, t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(g.y), -A, !0), M && l.progress(1)));
                                r > t.end && (s += t.distance), n -= t.distance;
                            }
                            o = h + s + m * ((F.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c);
                        }
                        o = function _round(e) {
                            return Math.round(1e5 * e) / 1e5 || 0;
                        }(o + u), w.length && !a && w.forEach(function(e) {
                            return e(o - s);
                        }), l ? (l.resetTo("y", o, -A, !0), M && l.progress(1)) : (g.y = o + "px", g.renderTransform(1));
                    }
                }
            })), F.core.getCache(s.trigger).stRevert = Xa, s.startY = h, s.pins = p, s.markers = w, s.ratio = i, s.autoSpeed = a, r.style.willChange = "transform"), s;
        }
        var n, v, e, i, S, s, a, l, c, u, r, f, d, h, g, p = t.smoothTouch, w = t.onUpdate, m = t.onStop, b = t.smooth, T = t.onFocusIn, P = t.normalizeScroll, x = t.wholePixels, E = this, k = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function() {
            return Q.isRefreshing || G.restart(!0);
        }), _ = t.effectsPrefix || "", C = Q.getScrollFunc(W), R = 1 === Q.isTouch ? !0 === p ? .8 : parseFloat(p) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8, O = R && +t.speed || 1, H = 0, A = 0, M = 1, z = D(0), U = {
            y: 0
        };
        function refreshHeight() {
            return e = n.clientHeight, n.style.overflow = "visible", Y.style.height = W.innerHeight + (e - W.innerHeight) / O + "px", e - W.innerHeight;
        }
        Va(), Q.addEventListener("killAll", Va), F.delayedCall(.5, function() {
            return M = 0;
        }), this.scrollTop = Qa, this.scrollTo = function(e, t, r) {
            var n = F.utils.clamp(0, Q.maxScroll(W), isNaN(e) ? o.offset(e, r) : +e);
            t ? u ? F.to(o, {
                duration: R,
                scrollTop: n,
                overwrite: "auto",
                ease: q
            }) : C(n) : Qa(n);
        }, this.offset = function(e, t) {
            var r, n = (e = K(e)[0]).style.cssText, o = Q.create({
                trigger: e,
                start: t || "top top"
            });
            return S && Ta([
                o
            ]), r = o.start, o.kill(!1), e.style.cssText = n, F.core.getCache(e).uncache = 1, r;
        }, this.content = function(e) {
            if (arguments.length) {
                var t = K(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Y.children[0];
                return t !== n && (c = (n = t).getAttribute("style") || "", k && k.observe(n), F.set(n, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }), R || F.set(n, {
                    clearProps: "transform"
                })), this;
            }
            return n;
        }, this.wrapper = function(e) {
            return arguments.length ? (v = K(e || "#smooth-wrapper")[0] || function _wrap(e) {
                var t = I.querySelector(".ScrollSmoother-wrapper");
                return t || ((t = I.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t;
            }(n), l = v.getAttribute("style") || "", refreshHeight(), F.set(v, R ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }), this) : v;
        }, this.effects = function(e, t) {
            if (S = S || [], !e) return S.slice(0);
            (e = K(e)).forEach(function(e) {
                for(var t = S.length; t--;)S[t].trigger === e && S[t].kill();
            });
            t = t || {};
            var r, n, o = t.speed, i = t.lag, s = t.effectsPadding, a = [];
            for(r = 0; r < e.length; r++)(n = Za(e[r], o, i, r, s)) && a.push(n);
            return S.push.apply(S, a), a;
        }, this.sections = function(e, t) {
            if (s = s || [], !e) return s.slice(0);
            var r = K(e).map(function(t) {
                return Q.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function onToggle(e) {
                        t.style.opacity = e.isActive ? "1" : "0", t.style.pointerEvents = e.isActive ? "all" : "none";
                    }
                });
            });
            return t && t.add ? s.push.apply(s, r) : s = r.slice(0), r;
        }, this.content(t.content), this.wrapper(t.wrapper), this.render = function(e) {
            return Pa(e || 0 === e ? e : H);
        }, this.getVelocity = function() {
            return z.getVelocity(-H);
        }, Q.scrollerProxy(v, {
            scrollTop: Qa,
            scrollHeight: function scrollHeight() {
                return refreshHeight() && Y.scrollHeight;
            },
            fixedMarkers: !1 !== t.fixedMarkers && !!R,
            content: n,
            getBoundingClientRect: function getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: W.innerWidth,
                    height: W.innerHeight
                };
            }
        }), Q.defaults({
            scroller: v
        });
        var B = Q.getAll().filter(function(e) {
            return e.scroller === W || e.scroller === v;
        });
        B.forEach(function(e) {
            return e.revert(!0, !0);
        }), i = Q.create({
            animation: F.fromTo(U, {
                y: 0
            }, {
                y: function y() {
                    return -refreshHeight();
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function onUpdate() {
                    if (this._dur) {
                        var e = h;
                        e && (Oa(i), U.y = H), Pa(U.y, e), Ka(), w && !u && w(E);
                    }
                }
            }),
            onRefreshInit: function onRefreshInit(e) {
                if (S) {
                    var t = Q.getAll().filter(function(e) {
                        return !!e.pin;
                    });
                    S.forEach(function(r) {
                        r.vars.pinnedContainer || t.forEach(function(e) {
                            if (e.pin.contains(r.trigger)) {
                                var t = r.vars;
                                t.pinnedContainer = e.pin, r.vars = null, r.init(t, r.animation);
                            }
                        });
                    });
                }
                var r = e.getTween();
                d = r && r._end > r._dp._time, f = H, U.y = 0, R && (v.style.pointerEvents = "none", v.scrollTop = 0, setTimeout(function() {
                    return v.style.removeProperty("pointer-events");
                }, 50));
            },
            onRefresh: function onRefresh(e) {
                e.animation.invalidate(), e.setPositions(e.start, refreshHeight() / O), d || Oa(e), U.y = -C(), Pa(U.y), M || e.animation.progress(F.utils.clamp(0, 1, f / -e.end)), d && (e.progress -= .001, e.update());
            },
            id: "ScrollSmoother",
            scroller: W,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: function end() {
                return refreshHeight() / O;
            },
            onScrubComplete: function onScrubComplete() {
                z.reset(), m && m(o);
            },
            scrub: R || !0
        }), this.smooth = function(e) {
            return arguments.length && (O = (R = e || 0) && +t.speed || 1, i.scrubDuration(e)), i.getTween() ? i.getTween().duration() : 0;
        }, i.getTween() && (i.getTween().vars.ease = t.ease || q), this.scrollTrigger = i, t.effects && this.effects(!0 === t.effects ? "[data-" + _ + "speed], [data-" + _ + "lag]" : t.effects, {
            effectsPadding: t.effectsPadding
        }), t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections), B.forEach(function(e) {
            e.vars.scroller = v, e.revert(!1, !0), e.init(e.vars, e.animation);
        }), this.paused = function(e, t) {
            return arguments.length ? (!!u !== e && (e ? (i.getTween() && i.getTween().pause(), C(-H), z.reset(), (r = Q.normalizeScroll()) && r.disable(), (u = Q.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function onChangeY() {
                    return Qa(-H);
                }
            })).nested = X(V, "wheel,touch,scroll", !0, !1 !== t)) : (u.nested.kill(), u.kill(), u = 0, r && r.enable(), i.progress = (-H - i.start) / (i.end - i.start), Oa(i))), this) : !!u;
        }, this.kill = this.revert = function() {
            o.paused(!1), Oa(i), i.kill();
            for(var e = (S || []).concat(s || []), t = e.length; t--;)e[t].kill();
            Q.scrollerProxy(v), Q.removeEventListener("killAll", Va), Q.removeEventListener("refresh", Ua), v.style.cssText = l, n.style.cssText = c;
            var r = Q.defaults({});
            r && r.scroller === v && Q.defaults({
                scroller: W
            }), o.normalizer && Q.normalizeScroll(!1), clearInterval(a), j = null, k && k.disconnect(), Y.style.removeProperty("height"), W.removeEventListener("focusin", Sa);
        }, this.refresh = function(e, t) {
            return i.refresh(e, t);
        }, P && (this.normalizer = Q.normalizeScroll(!0 === P ? {
            debounce: !0,
            content: !R && n
        } : P)), Q.config(t), "overscrollBehavior" in W.getComputedStyle(Y) && F.set([
            Y,
            V
        ], {
            overscrollBehavior: "none"
        }), "scrollBehavior" in W.getComputedStyle(Y) && F.set([
            Y,
            V
        ], {
            scrollBehavior: "auto"
        }), W.addEventListener("focusin", Sa), a = setInterval(Ka, 250), "loading" === I.readyState || requestAnimationFrame(function() {
            return Q.refresh();
        });
    }
    r.version = "3.11.4", r.create = function(e) {
        return j && e && j.content() === K(e.content)[0] ? j : new r(e);
    }, r.get = function() {
        return j;
    }, t(), e.ScrollSmoother = r, e.default = r;
    if (typeof window === "undefined" || window !== e) Object.defineProperty(e, "__esModule", {
        value: !0
    });
    else delete e.default;
});


const $6c4c296fe4d2b965$var$urlToFramesDesktop = "http://sand-game.com/frames-156/JPEGs_pc/sand-site_";
const $6c4c296fe4d2b965$var$totalFrameDesktop = 155;
const $6c4c296fe4d2b965$var$widthFrameDesktop = 3360;
const $6c4c296fe4d2b965$var$heightFrameDesktop = 1440;
//********************* Frame setting for Mobile *********************
const $6c4c296fe4d2b965$var$urlToFramesMobile = "http://sand-game.com/frames-156/JPEGs_mobile/sand-site_mobile_";
const $6c4c296fe4d2b965$var$totalFrameMobile = 156;
const $6c4c296fe4d2b965$var$middleFrameSwitchMobile = 86;
const $6c4c296fe4d2b965$var$scrollUntilFrameMobile = 60;
const $6c4c296fe4d2b965$var$widthFrameMobile = 1800;
const $6c4c296fe4d2b965$var$heightFrameMobile = 1440;
//********************* Opening video parameters + Loading delasy *********************
const $6c4c296fe4d2b965$var$loadAnimDelay = 500; // scss $load-anim-delay
const $6c4c296fe4d2b965$var$loadAnim = 500 + $6c4c296fe4d2b965$var$loadAnimDelay; // scss $load-anim
const $6c4c296fe4d2b965$var$videoSpeed = 0.75; // scss $vidoe-speed
const $6c4c296fe4d2b965$var$videoFrames = 1630 // scss $vidoe-frames
;
const $6c4c296fe4d2b965$var$videoDuration = $6c4c296fe4d2b965$var$videoFrames * $6c4c296fe4d2b965$var$videoSpeed + $6c4c296fe4d2b965$var$loadAnim; // scss $video-duration
const $6c4c296fe4d2b965$var$videoScale = 1.1; // scss $video-scale
(0, $1c7744dc13ad1b21$export$99ee26438460406a).registerPlugin((0, $375cdd9a1f4cd44d$export$875bcbe48555930), (0, $97861f709e06d241$exports.ScrollSmoother));
const $6c4c296fe4d2b965$var$canvas = document.getElementById("frame-sequence");
const $6c4c296fe4d2b965$var$context = $6c4c296fe4d2b965$var$canvas.getContext("2d");
const $6c4c296fe4d2b965$var$getGame = document.querySelector(".game");
const $6c4c296fe4d2b965$var$getWorld = document.querySelector(".world");
const $6c4c296fe4d2b965$var$getWalkers = document.querySelector(".walkers");
const $6c4c296fe4d2b965$var$getText4 = document.querySelector(".text4");
const $6c4c296fe4d2b965$var$offsetToAnimate = 40;
const $6c4c296fe4d2b965$var$offsetToMoveScreen = 60;
let $6c4c296fe4d2b965$var$mobile = false;
if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) $6c4c296fe4d2b965$var$mobile = true;
if (navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) document.querySelector(".logo").classList.add("mac");
if ($6c4c296fe4d2b965$var$mobile) {
    console.log("mobile");
    document.querySelector(".pc-video").remove();
    console.log($6c4c296fe4d2b965$var$middleFrameSwitchMobile.length);
    if ($6c4c296fe4d2b965$var$middleFrameSwitchMobile < 100) document.querySelector(".frame-mid").style.backgroundImage = "url('" + $6c4c296fe4d2b965$var$urlToFramesMobile + "00" + $6c4c296fe4d2b965$var$middleFrameSwitchMobile + ".jpg')";
    if ($6c4c296fe4d2b965$var$middleFrameSwitchMobile >= 100) document.querySelector(".frame-mid").style.backgroundImage = "url('" + $6c4c296fe4d2b965$var$urlToFramesMobile + "0" + $6c4c296fe4d2b965$var$middleFrameSwitchMobile + ".jpg')";
    if ($6c4c296fe4d2b965$var$totalFrameMobile < 100) document.querySelector(".frame-end").style.backgroundImage = "url('" + $6c4c296fe4d2b965$var$urlToFramesMobile + "00" + $6c4c296fe4d2b965$var$totalFrameMobile + ".jpg')";
    if ($6c4c296fe4d2b965$var$totalFrameMobile >= 100) document.querySelector(".frame-end").style.backgroundImage = "url('" + $6c4c296fe4d2b965$var$urlToFramesMobile + "0" + $6c4c296fe4d2b965$var$totalFrameMobile + ".jpg')";
} else console.log("desktop");
const $6c4c296fe4d2b965$var$loading = document.querySelector(".logading");
const $6c4c296fe4d2b965$var$video = document.getElementById("start-video");
function $6c4c296fe4d2b965$var$loadVideo() {
    $6c4c296fe4d2b965$var$video.load();
    $6c4c296fe4d2b965$var$video.playbackRate = $6c4c296fe4d2b965$var$videoSpeed;
    setTimeout(function() {
        if (!$6c4c296fe4d2b965$var$mobile) $6c4c296fe4d2b965$var$video.play();
    }, $6c4c296fe4d2b965$var$loadAnim);
    setTimeout(function() {
        document.querySelector(".logo").classList.remove("hidden");
    }, $6c4c296fe4d2b965$var$loadAnim);
    setTimeout(function() {
        document.querySelector(".screen_first .button_youtube").classList.add("active");
    }, $6c4c296fe4d2b965$var$loadAnimDelay + $6c4c296fe4d2b965$var$videoDuration);
    setTimeout(function() {
        document.querySelector(".screen_first .button_alpha").classList.add("active");
    }, $6c4c296fe4d2b965$var$loadAnimDelay + $6c4c296fe4d2b965$var$videoDuration + 300);
    setTimeout(function() {
        document.querySelector(".screen_first .button_steam").classList.add("active");
    }, $6c4c296fe4d2b965$var$loadAnimDelay + $6c4c296fe4d2b965$var$videoDuration + 300 + 300);
    setTimeout(function() {
        document.querySelector(".lang").classList.add("active");
    }, $6c4c296fe4d2b965$var$loadAnimDelay + $6c4c296fe4d2b965$var$videoDuration);
    $6c4c296fe4d2b965$var$video.classList.add("ready");
    $6c4c296fe4d2b965$var$video.classList.add("anim");
    $6c4c296fe4d2b965$var$loading.classList.add("ready");
    console.log("video loaded");
// let start = Date.now();
// let timer = setInterval(function () {
//    let timePassed = Date.now() - start;
//    if (timePassed >= 2000) {
//       clearInterval(timer);
//       return;
//    }
//    draw(timePassed);
// }, 20);
// function draw(timePassed) {
//    video.style.filter = "brightness(" + timePassed / 100 + ")";
//    console.log(timePassed);
// }
}
$6c4c296fe4d2b965$var$loadVideo();
setTimeout(()=>{
    $6c4c296fe4d2b965$var$video.remove();
    $6c4c296fe4d2b965$var$loading.remove();
}, $6c4c296fe4d2b965$var$videoDuration + $6c4c296fe4d2b965$var$loadAnimDelay + $6c4c296fe4d2b965$var$loadAnim + 400);
function $6c4c296fe4d2b965$var$lastScreen(stale) {
    if (stale) {
        document.querySelector(".screen_last__out-box.logo-wrapper").classList.add("hidden");
        document.querySelector(".screen_last__out-box.for-buttons").classList.add("hidden");
        document.querySelector(".prapor").classList.remove("hidden");
        document.querySelector(".ScrollSmoother-wrapper").classList.remove("back");
        if ($6c4c296fe4d2b965$var$mobile) document.querySelector(".frame-end").classList.add("hidden");
    } else {
        document.querySelector(".screen_last__out-box.logo-wrapper").classList.remove("hidden");
        document.querySelector(".screen_last__out-box.for-buttons").classList.remove("hidden");
        document.querySelector(".prapor").classList.add("hidden");
        document.querySelector(".ScrollSmoother-wrapper").classList.add("back");
        if ($6c4c296fe4d2b965$var$mobile) document.querySelector(".frame-end").classList.remove("hidden");
    }
}
setTimeout(()=>{
    document.querySelector(".scroll-needed").classList.remove("hidden");
}, $6c4c296fe4d2b965$var$videoDuration * 0.8 + $6c4c296fe4d2b965$var$loadAnimDelay + $6c4c296fe4d2b965$var$loadAnim);
let $6c4c296fe4d2b965$var$smoother = (0, $97861f709e06d241$exports.ScrollSmoother).create({
    smooth: 1,
    effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});
// document.addEventListener('click', function () {
//    console.log('test');
//    smoother.scrollTo(".content_wrapper", true, "bottom center");
// })
const $6c4c296fe4d2b965$var$tl = (0, $1c7744dc13ad1b21$export$99ee26438460406a).timeline({
    scrollTrigger: {
        trigger: ".content_wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
(0, $1c7744dc13ad1b21$export$99ee26438460406a).utils.toArray(".parallax").forEach((layer)=>{
    const depth = layer.dataset.depth;
    console.log(depth);
    if ($6c4c296fe4d2b965$var$mobile) {
        const movement = -(layer.offsetHeight * -2);
        $6c4c296fe4d2b965$var$tl.to(layer, {
            y: movement,
            ease: "none"
        }, 0);
    } else {
        const movement1 = -(layer.offsetHeight * 0.5);
        $6c4c296fe4d2b965$var$tl.to(layer, {
            y: movement1,
            ease: "none"
        }, 0);
    }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".screen_first",
    start: "top top",
    end: "+=100%",
    onEnter: function() {
        console.log("First scroll");
        if (!$6c4c296fe4d2b965$var$mobile) window.scrollTo({
            top: 500,
            behavior: "smooth"
        });
        document.querySelector(".scroll-needed").classList.add("hidden");
        document.querySelector(".screen_content").classList.remove("hidden");
    }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".world",
    start: "bottom 90%",
    end: "+=100%",
    onEnterBack: function() {
        console.log("return to world");
        // lastScreen(true);
        document.querySelector(".screen_last__out-box .button_youtube").classList.remove("active");
        document.querySelector(".screen_last__out-box .button_steam").classList.remove("active");
        document.querySelector(".screen_last__out-box .button_alpha").classList.remove("active");
    }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".walkers",
    start: "bottom 90%",
    end: "+=100%",
    onEnterBack: function() {
        console.log("return to walkers");
        // lastScreen(true);
        document.querySelector(".screen_last__out-box .button_youtube").classList.remove("active");
        document.querySelector(".screen_last__out-box .button_steam").classList.remove("active");
        document.querySelector(".screen_last__out-box .button_alpha").classList.remove("active");
    }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".text4",
    start: "bottom 90%",
    end: "+=100%",
    onEnterBack: function() {
        console.log("scroll from bottom");
        $6c4c296fe4d2b965$var$lastScreen(true);
        document.querySelector(".screen_last__out-box .button_youtube").classList.remove("active");
        document.querySelector(".screen_last__out-box .button_steam").classList.remove("active");
        document.querySelector(".screen_last__out-box .button_alpha").classList.remove("active");
    }
});
// fix issue when scrolling to fast
window.addEventListener("scroll", function() {
    const scroll = document.querySelector(".scroll-needed");
    // console.log(document.body.scrollHeight - window.scrollY);
    if (window.scrollY > 500) {
        if (!scroll.classList.contains("hidden")) {
            scroll.classList.add("hidden");
            document.querySelector(".screen_content").classList.remove("hidden");
        }
    }
// if (document.body.scrollHeight - window.scrollY > 1400) {
//    document.querySelector('.screen_last__out-box').classList.add('hidden')
//  }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".screen_first",
    start: "top " + $6c4c296fe4d2b965$var$offsetToMoveScreen + "%",
    end: "+=100%",
    onEnterBack: function() {
        console.log("scroll back to first screen");
        var scroll = new SmoothScroll();
        var anchor = document.querySelector(".screen_first");
        var toggle = document.querySelector(".screen_first");
        var options = {
            speed: 1000,
            easing: "easeInOutCubic"
        };
        scroll.animateScroll(anchor, toggle, options);
        document.querySelector(".scroll-needed").classList.remove("hidden");
        document.querySelector(".screen_content").classList.add("hidden");
        if ($6c4c296fe4d2b965$var$mobile) $6c4c296fe4d2b965$var$canvas.classList.remove("hidden");
    }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".game",
    start: "top " + (100 - $6c4c296fe4d2b965$var$offsetToAnimate) + "%",
    end: "+=100%",
    onEnter: function() {
        console.log("top game");
        $6c4c296fe4d2b965$var$getGame.classList.add("show");
        if (!$6c4c296fe4d2b965$var$mobile) $6c4c296fe4d2b965$var$getGame.querySelector(".text-box").classList.add("active");
    }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".world",
    start: "top " + (100 - $6c4c296fe4d2b965$var$offsetToAnimate) + "%",
    end: "+=100%",
    onEnter: function() {
        console.log("top world");
        $6c4c296fe4d2b965$var$getWorld.classList.add("show");
        if (!$6c4c296fe4d2b965$var$mobile) $6c4c296fe4d2b965$var$getWorld.querySelector(".text-box").classList.add("active");
    }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".walkers",
    start: "top " + (100 - $6c4c296fe4d2b965$var$offsetToAnimate) + "%",
    end: "+=100%",
    onEnter: function() {
        console.log("top walkrts");
        $6c4c296fe4d2b965$var$getWalkers.classList.add("show");
        if (!$6c4c296fe4d2b965$var$mobile) $6c4c296fe4d2b965$var$getWalkers.querySelector(".text-box").classList.add("active");
    }
});
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".text4",
    start: "top " + (100 - $6c4c296fe4d2b965$var$offsetToAnimate) + "%",
    end: "+=100%",
    onEnter: function() {
        console.log("top text4");
        $6c4c296fe4d2b965$var$getText4.classList.add("show");
        if (!$6c4c296fe4d2b965$var$mobile) $6c4c296fe4d2b965$var$getText4.querySelector(".text-box").classList.add("active");
    }
});
if ($6c4c296fe4d2b965$var$mobile) {
    const offsetToAnimate1 = 20;
    (0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
        trigger: ".game .text-box",
        start: "top " + (100 - offsetToAnimate1) + "%",
        end: "+=100%",
        onEnter: function() {
            console.log("first text mobile");
            $6c4c296fe4d2b965$var$canvas.classList.add("hidden");
            $6c4c296fe4d2b965$var$getGame.querySelector(".text-box").classList.add("active");
        }
    });
    (0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
        trigger: ".world .text-box",
        start: "top " + (100 - offsetToAnimate1) + "%",
        end: "+=100%",
        onEnter: function() {
            $6c4c296fe4d2b965$var$getWorld.querySelector(".text-box").classList.add("active");
        }
    });
    (0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
        trigger: ".walkers .text-box",
        start: "top " + (100 - offsetToAnimate1) + "%",
        end: "+=100%",
        onEnter: function() {
            $6c4c296fe4d2b965$var$getWalkers.querySelector(".text-box").classList.add("active");
        }
    });
    (0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
        trigger: ".text4 .text-box",
        start: "top " + (100 - offsetToAnimate1) + "%",
        end: "+=100%",
        onEnter: function() {
            $6c4c296fe4d2b965$var$getText4.querySelector(".text-box").classList.add("active");
        }
    });
}
let $6c4c296fe4d2b965$var$startOffset = $6c4c296fe4d2b965$var$mobile ? "-0%" : $6c4c296fe4d2b965$var$offsetToMoveScreen - 20 + "%";
(0, $375cdd9a1f4cd44d$export$875bcbe48555930).create({
    trigger: ".text4",
    start: "bottom " + $6c4c296fe4d2b965$var$startOffset,
    // end: '+=100%',
    onEnter: function() {
        console.log("to bottom screen");
        if (!$6c4c296fe4d2b965$var$mobile) {
            var scroll = new SmoothScroll();
            var anchor = document.querySelector(".screen_last");
            var toggle = document.querySelector(".screen_last");
            var options = {
                speed: 1500,
                easing: "easeInOutCubic"
            };
            scroll.animateScroll(anchor, toggle, options);
        }
        $6c4c296fe4d2b965$var$lastScreen(false);
        setTimeout(function() {
            document.querySelector(".screen_last__out-box .button_youtube").classList.add("active");
        }, 500);
        setTimeout(function() {
            document.querySelector(".screen_last__out-box .button_alpha").classList.add("active");
        }, 800);
        setTimeout(function() {
            document.querySelector(".screen_last__out-box .button_steam").classList.add("active");
        }, 1100);
    }
});
if ($6c4c296fe4d2b965$var$mobile) {
    $6c4c296fe4d2b965$var$canvas.width = $6c4c296fe4d2b965$var$widthFrameMobile;
    $6c4c296fe4d2b965$var$canvas.height = $6c4c296fe4d2b965$var$heightFrameMobile;
    const frameCount = $6c4c296fe4d2b965$var$totalFrameMobile;
    const currentFrame = (index)=>$6c4c296fe4d2b965$var$urlToFramesMobile + `${(index + 0).toString().padStart(4, "0")}.jpg`;
    const images = [];
    const startFrame = {
        frame: 0
    };
    for(let i = 0; i < frameCount; i++){
        const img = new Image();
        if (i < $6c4c296fe4d2b965$var$scrollUntilFrameMobile) img.src = currentFrame(i);
        else img.src = currentFrame($6c4c296fe4d2b965$var$scrollUntilFrameMobile);
        images.push(img);
    }
    (0, $1c7744dc13ad1b21$export$99ee26438460406a).to(startFrame, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
            scrub: 1.0
        },
        onUpdate: render
    });
    images[0].onload = render;
    function render() {
        $6c4c296fe4d2b965$var$context.clearRect(0, 0, $6c4c296fe4d2b965$var$canvas.width, $6c4c296fe4d2b965$var$canvas.height);
        $6c4c296fe4d2b965$var$context.drawImage(images[startFrame.frame], 0, 0);
    }
} else {
    $6c4c296fe4d2b965$var$canvas.width = $6c4c296fe4d2b965$var$widthFrameDesktop;
    $6c4c296fe4d2b965$var$canvas.height = $6c4c296fe4d2b965$var$heightFrameDesktop;
    const frameCount1 = $6c4c296fe4d2b965$var$totalFrameDesktop;
    // const startFrame = 37;
    const currentFrame1 = (index)=>$6c4c296fe4d2b965$var$urlToFramesDesktop + `${(index + 0).toString().padStart(4, "0")}.jpg`;
    const images1 = [];
    const startFrame1 = {
        frame: 0
    };
    for(let i1 = 0; i1 < frameCount1; i1++){
        const img1 = new Image();
        img1.src = currentFrame1(i1);
        images1.push(img1);
    }
    (0, $1c7744dc13ad1b21$export$99ee26438460406a).to(startFrame1, {
        frame: frameCount1 - 1,
        snap: "frame",
        scrollTrigger: {
            scrub: 1.0
        },
        onUpdate: render1
    });
    images1[0].onload = render1;
    function render1() {
        $6c4c296fe4d2b965$var$context.clearRect(0, 0, $6c4c296fe4d2b965$var$canvas.width, $6c4c296fe4d2b965$var$canvas.height);
        $6c4c296fe4d2b965$var$context.drawImage(images1[startFrame1.frame], 0, 0);
    }
}
// Timeline for scaling the image when scrolling begins
// var tl = gsap.timeline({
//    scrollTrigger: {
//       scrub: true
//    }
// });
//zoom effect
// fix issue with scale on load
// window.scrollTo(0, 1);
// tl.from("#frame-sequence", {
//    scale: videoScale,
//    duration: 1
// }, 0)
//    .to("#frame-sequence", {
//       scale: 1,
//       duration: 0.25
//    }, 0.75)
const $6c4c296fe4d2b965$var$getDecorLines = document.querySelectorAll(".decor_circle-line");
$6c4c296fe4d2b965$var$getDecorLines.forEach((getDecorLine, index)=>{
    if ($6c4c296fe4d2b965$var$mobile) window.addEventListener("scroll", function() {
        let heightToDeg = index === 0 ? 50 + window.scrollY / 8 : 25 + window.scrollY / 8;
        getDecorLine.style.transform = "rotate(" + heightToDeg + "deg)";
    });
    else window.addEventListener("scroll", function() {
        let heightToDeg = index === 0 ? 100 + window.scrollY / 16 : 45 + window.scrollY / 16;
        getDecorLine.style.transform = "rotate(" + heightToDeg + "deg)";
    });
});
// Timeline for fading in and fading out the text
const $6c4c296fe4d2b965$var$path = document.querySelectorAll(".path");
$6c4c296fe4d2b965$var$path.forEach((p)=>{
    const length = p.getTotalLength();
    p.style.strokeDasharray = length;
    p.style.strokeDashoffset = length;
});


