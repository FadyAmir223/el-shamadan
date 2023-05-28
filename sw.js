try {
  self["workbox:core:6.5.3"] && _();
} catch {
}
const Y = (s, ...e) => {
  let t = s;
  return e.length > 0 && (t += ` :: ${JSON.stringify(e)}`), t;
}, Z = Y;
class l extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, t) {
    const a = Z(e, t);
    super(a), this.name = e, this.details = t;
  }
}
const d = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, D = (s) => [d.prefix, s, d.suffix].filter((e) => e && e.length > 0).join("-"), ee = (s) => {
  for (const e of Object.keys(d))
    s(e);
}, x = {
  updateDetails: (s) => {
    ee((e) => {
      typeof s[e] == "string" && (d[e] = s[e]);
    });
  },
  getGoogleAnalyticsName: (s) => s || D(d.googleAnalytics),
  getPrecacheName: (s) => s || D(d.precache),
  getPrefix: () => d.prefix,
  getRuntimeName: (s) => s || D(d.runtime),
  getSuffix: () => d.suffix
};
function S(s, e) {
  const t = e();
  return s.waitUntil(t), t;
}
try {
  self["workbox:precaching:6.5.3"] && _();
} catch {
}
const te = "__WB_REVISION__";
function se(s) {
  if (!s)
    throw new l("add-to-cache-list-unexpected-type", { entry: s });
  if (typeof s == "string") {
    const r = new URL(s, location.href);
    return {
      cacheKey: r.href,
      url: r.href
    };
  }
  const { revision: e, url: t } = s;
  if (!t)
    throw new l("add-to-cache-list-unexpected-type", { entry: s });
  if (!e) {
    const r = new URL(t, location.href);
    return {
      cacheKey: r.href,
      url: r.href
    };
  }
  const a = new URL(t, location.href), n = new URL(t, location.href);
  return a.searchParams.set(te, e), {
    cacheKey: a.href,
    url: n.href
  };
}
class ae {
  constructor() {
    this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: e, state: t }) => {
      t && (t.originalRequest = e);
    }, this.cachedResponseWillBeUsed = async ({ event: e, state: t, cachedResponse: a }) => {
      if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
        const n = t.originalRequest.url;
        a ? this.notUpdatedURLs.push(n) : this.updatedURLs.push(n);
      }
      return a;
    };
  }
}
class ne {
  constructor({ precacheController: e }) {
    this.cacheKeyWillBeUsed = async ({ request: t, params: a }) => {
      const n = (a == null ? void 0 : a.cacheKey) || this._precacheController.getCacheKeyForURL(t.url);
      return n ? new Request(n, { headers: t.headers }) : t;
    }, this._precacheController = e;
  }
}
let g;
function re() {
  if (g === void 0) {
    const s = new Response("");
    if ("body" in s)
      try {
        new Response(s.body), g = !0;
      } catch {
        g = !1;
      }
    g = !1;
  }
  return g;
}
async function ie(s, e) {
  let t = null;
  if (s.url && (t = new URL(s.url).origin), t !== self.location.origin)
    throw new l("cross-origin-copy-response", { origin: t });
  const a = s.clone(), n = {
    headers: new Headers(a.headers),
    status: a.status,
    statusText: a.statusText
  }, r = e ? e(n) : n, i = re() ? a.body : await a.blob();
  return new Response(i, r);
}
const ce = (s) => new URL(String(s), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function j(s, e) {
  const t = new URL(s);
  for (const a of e)
    t.searchParams.delete(a);
  return t.href;
}
async function oe(s, e, t, a) {
  const n = j(e.url, t);
  if (e.url === n)
    return s.match(e, a);
  const r = Object.assign(Object.assign({}, a), { ignoreSearch: !0 }), i = await s.keys(e, r);
  for (const c of i) {
    const o = j(c.url, t);
    if (n === o)
      return s.match(c, a);
  }
}
class he {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
const H = /* @__PURE__ */ new Set();
async function le() {
  for (const s of H)
    await s();
}
function ue(s) {
  return new Promise((e) => setTimeout(e, s));
}
try {
  self["workbox:strategies:6.5.3"] && _();
} catch {
}
function R(s) {
  return typeof s == "string" ? new Request(s) : s;
}
class de {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, t) {
    this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new he(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const a of this._plugins)
      this._pluginStateMap.set(a, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: t } = this;
    let a = R(e);
    if (a.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
      const i = await t.preloadResponse;
      if (i)
        return i;
    }
    const n = this.hasCallback("fetchDidFail") ? a.clone() : null;
    try {
      for (const i of this.iterateCallbacks("requestWillFetch"))
        a = await i({ request: a.clone(), event: t });
    } catch (i) {
      if (i instanceof Error)
        throw new l("plugin-error-request-will-fetch", {
          thrownErrorMessage: i.message
        });
    }
    const r = a.clone();
    try {
      let i;
      i = await fetch(a, a.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
      for (const c of this.iterateCallbacks("fetchDidSucceed"))
        i = await c({
          event: t,
          request: r,
          response: i
        });
      return i;
    } catch (i) {
      throw n && await this.runCallbacks("fetchDidFail", {
        error: i,
        event: t,
        originalRequest: n.clone(),
        request: r.clone()
      }), i;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const t = await this.fetch(e), a = t.clone();
    return this.waitUntil(this.cachePut(e, a)), t;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const t = R(e);
    let a;
    const { cacheName: n, matchOptions: r } = this._strategy, i = await this.getCacheKey(t, "read"), c = Object.assign(Object.assign({}, r), { cacheName: n });
    a = await caches.match(i, c);
    for (const o of this.iterateCallbacks("cachedResponseWillBeUsed"))
      a = await o({
        cacheName: n,
        matchOptions: r,
        cachedResponse: a,
        request: i,
        event: this.event
      }) || void 0;
    return a;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, t) {
    const a = R(e);
    await ue(0);
    const n = await this.getCacheKey(a, "write");
    if (!t)
      throw new l("cache-put-with-no-response", {
        url: ce(n.url)
      });
    const r = await this._ensureResponseSafeToCache(t);
    if (!r)
      return !1;
    const { cacheName: i, matchOptions: c } = this._strategy, o = await self.caches.open(i), h = this.hasCallback("cacheDidUpdate"), m = h ? await oe(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      o,
      n.clone(),
      ["__WB_REVISION__"],
      c
    ) : null;
    try {
      await o.put(n, h ? r.clone() : r);
    } catch (u) {
      if (u instanceof Error)
        throw u.name === "QuotaExceededError" && await le(), u;
    }
    for (const u of this.iterateCallbacks("cacheDidUpdate"))
      await u({
        cacheName: i,
        oldResponse: m,
        newResponse: r.clone(),
        request: n,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, t) {
    const a = `${e.url} | ${t}`;
    if (!this._cacheKeys[a]) {
      let n = e;
      for (const r of this.iterateCallbacks("cacheKeyWillBeUsed"))
        n = R(await r({
          mode: t,
          request: n,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[a] = n;
    }
    return this._cacheKeys[a];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const t of this._strategy.plugins)
      if (e in t)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, t) {
    for (const a of this.iterateCallbacks(e))
      await a(t);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const t of this._strategy.plugins)
      if (typeof t[e] == "function") {
        const a = this._pluginStateMap.get(t);
        yield (r) => {
          const i = Object.assign(Object.assign({}, r), { state: a });
          return t[e](i);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let t = e, a = !1;
    for (const n of this.iterateCallbacks("cacheWillUpdate"))
      if (t = await n({
        request: this.request,
        response: t,
        event: this.event
      }) || void 0, a = !0, !t)
        break;
    return a || t && t.status !== 200 && (t = void 0), t;
  }
}
class M {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = x.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [t] = this.handleAll(e);
    return t;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const t = e.event, a = typeof e.request == "string" ? new Request(e.request) : e.request, n = "params" in e ? e.params : void 0, r = new de(this, { event: t, request: a, params: n }), i = this._getResponse(r, a, t), c = this._awaitComplete(i, r, a, t);
    return [i, c];
  }
  async _getResponse(e, t, a) {
    await e.runCallbacks("handlerWillStart", { event: a, request: t });
    let n;
    try {
      if (n = await this._handle(t, e), !n || n.type === "error")
        throw new l("no-response", { url: t.url });
    } catch (r) {
      if (r instanceof Error) {
        for (const i of e.iterateCallbacks("handlerDidError"))
          if (n = await i({ error: r, event: a, request: t }), n)
            break;
      }
      if (!n)
        throw r;
    }
    for (const r of e.iterateCallbacks("handlerWillRespond"))
      n = await r({ event: a, request: t, response: n });
    return n;
  }
  async _awaitComplete(e, t, a, n) {
    let r, i;
    try {
      r = await e;
    } catch {
    }
    try {
      await t.runCallbacks("handlerDidRespond", {
        event: n,
        request: a,
        response: r
      }), await t.doneWaiting();
    } catch (c) {
      c instanceof Error && (i = c);
    }
    if (await t.runCallbacks("handlerDidComplete", {
      event: n,
      request: a,
      response: r,
      error: i
    }), t.destroy(), i)
      throw i;
  }
}
class p extends M {
  /**
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
   * of all fetch() requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor(e = {}) {
    e.cacheName = x.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = e.fallbackToNetwork !== !1, this.plugins.push(p.copyRedirectedCacheableResponsesPlugin);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const a = await t.cacheMatch(e);
    return a || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t));
  }
  async _handleFetch(e, t) {
    let a;
    const n = t.params || {};
    if (this._fallbackToNetwork) {
      const r = n.integrity, i = e.integrity, c = !i || i === r;
      a = await t.fetch(new Request(e, {
        integrity: e.mode !== "no-cors" ? i || r : void 0
      })), r && c && e.mode !== "no-cors" && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, a.clone()));
    } else
      throw new l("missing-precache-entry", {
        cacheName: this.cacheName,
        url: e.url
      });
    return a;
  }
  async _handleInstall(e, t) {
    this._useDefaultCacheabilityPluginIfNeeded();
    const a = await t.fetch(e);
    if (!await t.cachePut(e, a.clone()))
      throw new l("bad-precaching-response", {
        url: e.url,
        status: a.status
      });
    return a;
  }
  /**
   * This method is complex, as there a number of things to account for:
   *
   * The `plugins` array can be set at construction, and/or it might be added to
   * to at any time before the strategy is used.
   *
   * At the time the strategy is used (i.e. during an `install` event), there
   * needs to be at least one plugin that implements `cacheWillUpdate` in the
   * array, other than `copyRedirectedCacheableResponsesPlugin`.
   *
   * - If this method is called and there are no suitable `cacheWillUpdate`
   * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
   *
   * - If this method is called and there is exactly one `cacheWillUpdate`, then
   * we don't have to do anything (this might be a previously added
   * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
   *
   * - If this method is called and there is more than one `cacheWillUpdate`,
   * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
   * we need to remove it. (This situation is unlikely, but it could happen if
   * the strategy is used multiple times, the first without a `cacheWillUpdate`,
   * and then later on after manually adding a custom `cacheWillUpdate`.)
   *
   * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
   *
   * @private
   */
  _useDefaultCacheabilityPluginIfNeeded() {
    let e = null, t = 0;
    for (const [a, n] of this.plugins.entries())
      n !== p.copyRedirectedCacheableResponsesPlugin && (n === p.defaultPrecacheCacheabilityPlugin && (e = a), n.cacheWillUpdate && t++);
    t === 0 ? this.plugins.push(p.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1);
  }
}
p.defaultPrecacheCacheabilityPlugin = {
  async cacheWillUpdate({ response: s }) {
    return !s || s.status >= 400 ? null : s;
  }
};
p.copyRedirectedCacheableResponsesPlugin = {
  async cacheWillUpdate({ response: s }) {
    return s.redirected ? await ie(s) : s;
  }
};
class fe {
  /**
   * Create a new PrecacheController.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] The cache to use for precaching.
   * @param {string} [options.plugins] Plugins to use when precaching as well
   * as responding to fetch events for precached assets.
   * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
   * get the response from the network if there's a precache miss.
   */
  constructor({ cacheName: e, plugins: t = [], fallbackToNetwork: a = !0 } = {}) {
    this._urlsToCacheKeys = /* @__PURE__ */ new Map(), this._urlsToCacheModes = /* @__PURE__ */ new Map(), this._cacheKeysToIntegrities = /* @__PURE__ */ new Map(), this._strategy = new p({
      cacheName: x.getPrecacheName(e),
      plugins: [
        ...t,
        new ne({ precacheController: this })
      ],
      fallbackToNetwork: a
    }), this.install = this.install.bind(this), this.activate = this.activate.bind(this);
  }
  /**
   * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
   * used to cache assets and respond to fetch events.
   */
  get strategy() {
    return this._strategy;
  }
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * {@link workbox-core.cacheNames|"precache cache"} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   */
  precache(e) {
    this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0);
  }
  /**
   * This method will add items to the precache list, removing duplicates
   * and ensuring the information is valid.
   *
   * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
   *     Array of entries to precache.
   */
  addToCacheList(e) {
    const t = [];
    for (const a of e) {
      typeof a == "string" ? t.push(a) : a && a.revision === void 0 && t.push(a.url);
      const { cacheKey: n, url: r } = se(a), i = typeof a != "string" && a.revision ? "reload" : "default";
      if (this._urlsToCacheKeys.has(r) && this._urlsToCacheKeys.get(r) !== n)
        throw new l("add-to-cache-list-conflicting-entries", {
          firstEntry: this._urlsToCacheKeys.get(r),
          secondEntry: n
        });
      if (typeof a != "string" && a.integrity) {
        if (this._cacheKeysToIntegrities.has(n) && this._cacheKeysToIntegrities.get(n) !== a.integrity)
          throw new l("add-to-cache-list-conflicting-integrities", {
            url: r
          });
        this._cacheKeysToIntegrities.set(n, a.integrity);
      }
      if (this._urlsToCacheKeys.set(r, n), this._urlsToCacheModes.set(r, i), t.length > 0) {
        const c = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
        console.warn(c);
      }
    }
  }
  /**
   * Precaches new and updated assets. Call this method from the service worker
   * install event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.InstallResult>}
   */
  install(e) {
    return S(e, async () => {
      const t = new ae();
      this.strategy.plugins.push(t);
      for (const [r, i] of this._urlsToCacheKeys) {
        const c = this._cacheKeysToIntegrities.get(i), o = this._urlsToCacheModes.get(r), h = new Request(r, {
          integrity: c,
          cache: o,
          credentials: "same-origin"
        });
        await Promise.all(this.strategy.handleAll({
          params: { cacheKey: i },
          request: h,
          event: e
        }));
      }
      const { updatedURLs: a, notUpdatedURLs: n } = t;
      return { updatedURLs: a, notUpdatedURLs: n };
    });
  }
  /**
   * Deletes assets that are no longer present in the current precache manifest.
   * Call this method from the service worker activate event.
   *
   * Note: this method calls `event.waitUntil()` for you, so you do not need
   * to call it yourself in your event handlers.
   *
   * @param {ExtendableEvent} event
   * @return {Promise<workbox-precaching.CleanupResult>}
   */
  activate(e) {
    return S(e, async () => {
      const t = await self.caches.open(this.strategy.cacheName), a = await t.keys(), n = new Set(this._urlsToCacheKeys.values()), r = [];
      for (const i of a)
        n.has(i.url) || (await t.delete(i), r.push(i.url));
      return { deletedURLs: r };
    });
  }
  /**
   * Returns a mapping of a precached URL to the corresponding cache key, taking
   * into account the revision information for the URL.
   *
   * @return {Map<string, string>} A URL to cache key mapping.
   */
  getURLsToCacheKeys() {
    return this._urlsToCacheKeys;
  }
  /**
   * Returns a list of all the URLs that have been precached by the current
   * service worker.
   *
   * @return {Array<string>} The precached URLs.
   */
  getCachedURLs() {
    return [...this._urlsToCacheKeys.keys()];
  }
  /**
   * Returns the cache key used for storing a given URL. If that URL is
   * unversioned, like `/index.html', then the cache key will be the original
   * URL with a search parameter appended to it.
   *
   * @param {string} url A URL whose cache key you want to look up.
   * @return {string} The versioned URL that corresponds to a cache key
   * for the original URL, or undefined if that URL isn't precached.
   */
  getCacheKeyForURL(e) {
    const t = new URL(e, location.href);
    return this._urlsToCacheKeys.get(t.href);
  }
  /**
   * @param {string} url A cache key whose SRI you want to look up.
   * @return {string} The subresource integrity associated with the cache key,
   * or undefined if it's not set.
   */
  getIntegrityForCacheKey(e) {
    return this._cacheKeysToIntegrities.get(e);
  }
  /**
   * This acts as a drop-in replacement for
   * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
   * with the following differences:
   *
   * - It knows what the name of the precache is, and only checks in that cache.
   * - It allows you to pass in an "original" URL without versioning parameters,
   * and it will automatically look up the correct cache key for the currently
   * active revision of that URL.
   *
   * E.g., `matchPrecache('index.html')` will find the correct precached
   * response for the currently active service worker, even if the actual cache
   * key is `'/index.html?__WB_REVISION__=1234abcd'`.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   */
  async matchPrecache(e) {
    const t = e instanceof Request ? e.url : e, a = this.getCacheKeyForURL(t);
    if (a)
      return (await self.caches.open(this.strategy.cacheName)).match(a);
  }
  /**
   * Returns a function that looks up `url` in the precache (taking into
   * account revision information), and returns the corresponding `Response`.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @return {workbox-routing~handlerCallback}
   */
  createHandlerBoundToURL(e) {
    const t = this.getCacheKeyForURL(e);
    if (!t)
      throw new l("non-precached-url", { url: e });
    return (a) => (a.request = new Request(e), a.params = Object.assign({ cacheKey: t }, a.params), this.strategy.handle(a));
  }
}
let L;
const V = () => (L || (L = new fe()), L);
try {
  self["workbox:routing:6.5.3"] && _();
} catch {
}
const $ = "GET", C = (s) => s && typeof s == "object" ? s : { handle: s };
class b {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, a = $) {
    this.handler = C(t), this.match = e, this.method = a;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = C(e);
  }
}
class pe extends b {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, t, a) {
    const n = ({ url: r }) => {
      const i = e.exec(r.href);
      if (i && !(r.origin !== location.origin && i.index !== 0))
        return i.slice(1);
    };
    super(n, t, a);
  }
}
class me {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: t } = e, a = this.handleRequest({ request: t, event: e });
      a && e.respondWith(a);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: t } = e.data, a = Promise.all(t.urlsToCache.map((n) => {
          typeof n == "string" && (n = [n]);
          const r = new Request(...n);
          return this.handleRequest({ request: r, event: e });
        }));
        e.waitUntil(a), e.ports && e.ports[0] && a.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: t }) {
    const a = new URL(e.url, location.href);
    if (!a.protocol.startsWith("http"))
      return;
    const n = a.origin === location.origin, { params: r, route: i } = this.findMatchingRoute({
      event: t,
      request: e,
      sameOrigin: n,
      url: a
    });
    let c = i && i.handler;
    const o = e.method;
    if (!c && this._defaultHandlerMap.has(o) && (c = this._defaultHandlerMap.get(o)), !c)
      return;
    let h;
    try {
      h = c.handle({ url: a, request: e, event: t, params: r });
    } catch (u) {
      h = Promise.reject(u);
    }
    const m = i && i.catchHandler;
    return h instanceof Promise && (this._catchHandler || m) && (h = h.catch(async (u) => {
      if (m)
        try {
          return await m.handle({ url: a, request: e, event: t, params: r });
        } catch (O) {
          O instanceof Error && (u = O);
        }
      if (this._catchHandler)
        return this._catchHandler.handle({ url: a, request: e, event: t });
      throw u;
    })), h;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: t, request: a, event: n }) {
    const r = this._routes.get(a.method) || [];
    for (const i of r) {
      let c;
      const o = i.match({ url: e, sameOrigin: t, request: a, event: n });
      if (o)
        return c = o, (Array.isArray(c) && c.length === 0 || o.constructor === Object && // eslint-disable-line
        Object.keys(o).length === 0 || typeof o == "boolean") && (c = void 0), { route: i, params: c };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, t = $) {
    this._defaultHandlerMap.set(t, C(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = C(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new l("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const t = this._routes.get(e.method).indexOf(e);
    if (t > -1)
      this._routes.get(e.method).splice(t, 1);
    else
      throw new l("unregister-route-route-not-registered");
  }
}
let w;
const ge = () => (w || (w = new me(), w.addFetchListener(), w.addCacheListener()), w);
function E(s, e, t) {
  let a;
  if (typeof s == "string") {
    const r = new URL(s, location.href), i = ({ url: c }) => c.href === r.href;
    a = new b(i, e, t);
  } else if (s instanceof RegExp)
    a = new pe(s, e, t);
  else if (typeof s == "function")
    a = new b(s, e, t);
  else if (s instanceof b)
    a = s;
  else
    throw new l("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return ge().registerRoute(a), a;
}
function we(s, e = []) {
  for (const t of [...s.searchParams.keys()])
    e.some((a) => a.test(t)) && s.searchParams.delete(t);
  return s;
}
function* ye(s, { ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: t = "index.html", cleanURLs: a = !0, urlManipulation: n } = {}) {
  const r = new URL(s, location.href);
  r.hash = "", yield r.href;
  const i = we(r, e);
  if (yield i.href, t && i.pathname.endsWith("/")) {
    const c = new URL(i.href);
    c.pathname += t, yield c.href;
  }
  if (a) {
    const c = new URL(i.href);
    c.pathname += ".html", yield c.href;
  }
  if (n) {
    const c = n({ url: r });
    for (const o of c)
      yield o.href;
  }
}
class _e extends b {
  /**
   * @param {PrecacheController} precacheController A `PrecacheController`
   * instance used to both match requests and respond to fetch events.
   * @param {Object} [options] Options to control how requests are matched
   * against the list of precached URLs.
   * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
   * check cache entries for a URLs ending with '/' to see if there is a hit when
   * appending the `directoryIndex` value.
   * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
   * array of regex's to remove search params when looking for a cache match.
   * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
   * check the cache for the URL with a `.html` added to the end of the end.
   * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
   * This is a function that should take a URL and return an array of
   * alternative URLs that should be checked for precache matches.
   */
  constructor(e, t) {
    const a = ({ request: n }) => {
      const r = e.getURLsToCacheKeys();
      for (const i of ye(n.url, t)) {
        const c = r.get(i);
        if (c) {
          const o = e.getIntegrityForCacheKey(c);
          return { cacheKey: c, integrity: o };
        }
      }
    };
    super(a, e.strategy);
  }
}
function be(s) {
  const e = V(), t = new _e(e, s);
  E(t);
}
function Re(s) {
  V().precache(s);
}
function Q(s, e) {
  Re(s), be(e);
}
class Ce extends M {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    let a = await t.cacheMatch(e), n;
    if (!a)
      try {
        a = await t.fetchAndCachePut(e);
      } catch (r) {
        r instanceof Error && (n = r);
      }
    if (!a)
      throw new l("no-response", { url: e.url, error: n });
    return a;
  }
}
const xe = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response: s }) => s.status === 200 || s.status === 0 ? s : null
};
class G extends M {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  constructor(e = {}) {
    super(e), this.plugins.some((t) => "cacheWillUpdate" in t) || this.plugins.unshift(xe);
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, t) {
    const a = t.fetchAndCachePut(e).catch(() => {
    });
    t.waitUntil(a);
    let n = await t.cacheMatch(e), r;
    if (!n)
      try {
        n = await a;
      } catch (i) {
        i instanceof Error && (r = i);
      }
    if (!n)
      throw new l("no-response", { url: e.url, error: r });
    return n;
  }
}
try {
  self["workbox:cacheable-response:6.5.3"] && _();
} catch {
}
class Ee {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e = {}) {
    this._statuses = e.statuses, this._headers = e.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(e) {
    let t = !0;
    return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some((a) => e.headers.get(a) === this._headers[a])), t;
  }
}
class N {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e) {
    this.cacheWillUpdate = async ({ response: t }) => this._cacheableResponse.isResponseCacheable(t) ? t : null, this._cacheableResponse = new Ee(e);
  }
}
function z(s) {
  s.then(() => {
  });
}
const De = (s, e) => e.some((t) => s instanceof t);
let W, B;
function Le() {
  return W || (W = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Ue() {
  return B || (B = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const J = /* @__PURE__ */ new WeakMap(), T = /* @__PURE__ */ new WeakMap(), X = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
function ke(s) {
  const e = new Promise((t, a) => {
    const n = () => {
      s.removeEventListener("success", r), s.removeEventListener("error", i);
    }, r = () => {
      t(f(s.result)), n();
    }, i = () => {
      a(s.error), n();
    };
    s.addEventListener("success", r), s.addEventListener("error", i);
  });
  return e.then((t) => {
    t instanceof IDBCursor && J.set(t, s);
  }).catch(() => {
  }), A.set(e, s), e;
}
function Pe(s) {
  if (T.has(s))
    return;
  const e = new Promise((t, a) => {
    const n = () => {
      s.removeEventListener("complete", r), s.removeEventListener("error", i), s.removeEventListener("abort", i);
    }, r = () => {
      t(), n();
    }, i = () => {
      a(s.error || new DOMException("AbortError", "AbortError")), n();
    };
    s.addEventListener("complete", r), s.addEventListener("error", i), s.addEventListener("abort", i);
  });
  T.set(s, e);
}
let I = {
  get(s, e, t) {
    if (s instanceof IDBTransaction) {
      if (e === "done")
        return T.get(s);
      if (e === "objectStoreNames")
        return s.objectStoreNames || X.get(s);
      if (e === "store")
        return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
    }
    return f(s[e]);
  },
  set(s, e, t) {
    return s[e] = t, !0;
  },
  has(s, e) {
    return s instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in s;
  }
};
function Te(s) {
  I = s(I);
}
function Ie(s) {
  return s === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...t) {
    const a = s.call(k(this), e, ...t);
    return X.set(a, e.sort ? e.sort() : [e]), f(a);
  } : Ue().includes(s) ? function(...e) {
    return s.apply(k(this), e), f(J.get(this));
  } : function(...e) {
    return f(s.apply(k(this), e));
  };
}
function Me(s) {
  return typeof s == "function" ? Ie(s) : (s instanceof IDBTransaction && Pe(s), De(s, Le()) ? new Proxy(s, I) : s);
}
function f(s) {
  if (s instanceof IDBRequest)
    return ke(s);
  if (U.has(s))
    return U.get(s);
  const e = Me(s);
  return e !== s && (U.set(s, e), A.set(e, s)), e;
}
const k = (s) => A.get(s);
function Ne(s, e, { blocked: t, upgrade: a, blocking: n, terminated: r } = {}) {
  const i = indexedDB.open(s, e), c = f(i);
  return a && i.addEventListener("upgradeneeded", (o) => {
    a(f(i.result), o.oldVersion, o.newVersion, f(i.transaction), o);
  }), t && i.addEventListener("blocked", (o) => t(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    o.oldVersion,
    o.newVersion,
    o
  )), c.then((o) => {
    r && o.addEventListener("close", () => r()), n && o.addEventListener("versionchange", (h) => n(h.oldVersion, h.newVersion, h));
  }).catch(() => {
  }), c;
}
function Ae(s, { blocked: e } = {}) {
  const t = indexedDB.deleteDatabase(s);
  return e && t.addEventListener("blocked", (a) => e(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    a.oldVersion,
    a
  )), f(t).then(() => {
  });
}
const Ke = ["get", "getKey", "getAll", "getAllKeys", "count"], ve = ["put", "add", "delete", "clear"], P = /* @__PURE__ */ new Map();
function F(s, e) {
  if (!(s instanceof IDBDatabase && !(e in s) && typeof e == "string"))
    return;
  if (P.get(e))
    return P.get(e);
  const t = e.replace(/FromIndex$/, ""), a = e !== t, n = ve.includes(t);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(t in (a ? IDBIndex : IDBObjectStore).prototype) || !(n || Ke.includes(t))
  )
    return;
  const r = async function(i, ...c) {
    const o = this.transaction(i, n ? "readwrite" : "readonly");
    let h = o.store;
    return a && (h = h.index(c.shift())), (await Promise.all([
      h[t](...c),
      n && o.done
    ]))[0];
  };
  return P.set(e, r), r;
}
Te((s) => ({
  ...s,
  get: (e, t, a) => F(e, t) || s.get(e, t, a),
  has: (e, t) => !!F(e, t) || s.has(e, t)
}));
try {
  self["workbox:expiration:6.5.3"] && _();
} catch {
}
const Oe = "workbox-expiration", y = "cache-entries", q = (s) => {
  const e = new URL(s, location.href);
  return e.hash = "", e.href;
};
class Se {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(e) {
    this._db = null, this._cacheName = e;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(e) {
    const t = e.createObjectStore(y, { keyPath: "id" });
    t.createIndex("cacheName", "cacheName", { unique: !1 }), t.createIndex("timestamp", "timestamp", { unique: !1 });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(e) {
    this._upgradeDb(e), this._cacheName && Ae(this._cacheName);
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(e, t) {
    e = q(e);
    const a = {
      url: e,
      timestamp: t,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(e)
    }, r = (await this.getDb()).transaction(y, "readwrite", {
      durability: "relaxed"
    });
    await r.store.put(a), await r.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(e) {
    const a = await (await this.getDb()).get(y, this._getId(e));
    return a == null ? void 0 : a.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(e, t) {
    const a = await this.getDb();
    let n = await a.transaction(y).store.index("timestamp").openCursor(null, "prev");
    const r = [];
    let i = 0;
    for (; n; ) {
      const o = n.value;
      o.cacheName === this._cacheName && (e && o.timestamp < e || t && i >= t ? r.push(n.value) : i++), n = await n.continue();
    }
    const c = [];
    for (const o of r)
      await a.delete(y, o.id), c.push(o.url);
    return c;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(e) {
    return this._cacheName + "|" + q(e);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await Ne(Oe, 1, {
      upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
    })), this._db;
  }
}
class je {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(e, t = {}) {
    this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new Se(e);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = !0;
      return;
    }
    this._isRunning = !0;
    const e = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0, t = await this._timestampModel.expireEntries(e, this._maxEntries), a = await self.caches.open(this._cacheName);
    for (const n of t)
      await a.delete(n, this._matchOptions);
    this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, z(this.expireEntries()));
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(e) {
    await this._timestampModel.setTimestamp(e, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(e) {
    if (this._maxAgeSeconds) {
      const t = await this._timestampModel.getTimestamp(e), a = Date.now() - this._maxAgeSeconds * 1e3;
      return t !== void 0 ? t < a : !0;
    } else
      return !1;
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0);
  }
}
function We(s) {
  H.add(s);
}
class K {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(e = {}) {
    this.cachedResponseWillBeUsed = async ({ event: t, request: a, cacheName: n, cachedResponse: r }) => {
      if (!r)
        return null;
      const i = this._isResponseDateFresh(r), c = this._getCacheExpiration(n);
      z(c.expireEntries());
      const o = c.updateTimestamp(a.url);
      if (t)
        try {
          t.waitUntil(o);
        } catch {
        }
      return i ? r : null;
    }, this.cacheDidUpdate = async ({ cacheName: t, request: a }) => {
      const n = this._getCacheExpiration(t);
      await n.updateTimestamp(a.url), await n.expireEntries();
    }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = /* @__PURE__ */ new Map(), e.purgeOnQuotaError && We(() => this.deleteCacheAndMetadata());
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(e) {
    if (e === x.getRuntimeName())
      throw new l("expire-custom-caches-only");
    let t = this._cacheExpirations.get(e);
    return t || (t = new je(e, this._config), this._cacheExpirations.set(e, t)), t;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(e) {
    if (!this._maxAgeSeconds)
      return !0;
    const t = this._getDateHeaderTimestamp(e);
    if (t === null)
      return !0;
    const a = Date.now();
    return t >= a - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(e) {
    if (!e.headers.has("date"))
      return null;
    const t = e.headers.get("date"), n = new Date(t).getTime();
    return isNaN(n) ? null : n;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [e, t] of this._cacheExpirations)
      await self.caches.delete(e), await t.delete();
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
}
Q([{"revision":null,"url":"assets/all-products.component-ae763860.js"},{"revision":null,"url":"assets/contact-us.component-f903452b.js"},{"revision":null,"url":"assets/error.component-c39e3883.js"},{"revision":null,"url":"assets/footer.component-5a3ed942.js"},{"revision":null,"url":"assets/home.component-37f66efa.js"},{"revision":null,"url":"assets/index-2e42d587.js"},{"revision":null,"url":"assets/index-88e7764e.css"},{"revision":null,"url":"assets/product-card.component-beb4449e.js"},{"revision":null,"url":"assets/single-product.component-5492e210.js"},{"revision":null,"url":"assets/useTitle-e00201e8.js"},{"revision":null,"url":"assets/video.component-ce22d470.js"},{"revision":"c6b076f4067625d908c36cd95bb82873","url":"index.html"},{"revision":"ef31508ea54c9805220261c6bd8628a1","url":"registerSW.js"},{"revision":"d5f8d8e2cd559ca3adb009856213ce35","url":"pwa-192x192.png"},{"revision":"1d809b42a4d8399ed3c3470aedfbc3e1","url":"pwa-512x512.png"},{"revision":"1e0059c966448a9cec3e100a31e57ce9","url":"manifest.webmanifest"}]);
const v = 60 * 60 * 24 * 30, Be = "1", Fe = [
  "/el-shamadan/favicon.ico",
  "/el-shamadan/images/background.webp",
  "/el-shamadan/images/belt.webp",
  "/el-shamadan/images/curtain-left.webp",
  "/el-shamadan/images/curtain-right.webp",
  "/el-shamadan/images/diva.webp",
  "/el-shamadan/images/diva_.webp",
  "/el-shamadan/images/face.webp",
  "/el-shamadan/images/hero.webp",
  "/el-shamadan/images/hero_.webp",
  "/el-shamadan/images/joker.webp",
  "/el-shamadan/images/joker_.webp",
  "/el-shamadan/images/king.webp",
  "/el-shamadan/images/king_.webp",
  "/el-shamadan/images/logo.webp",
  "/el-shamadan/images/mafia.webp",
  "/el-shamadan/images/mafia_.webp",
  "/el-shamadan/images/magician.webp",
  "/el-shamadan/images/magician_.webp",
  "/el-shamadan/images/secret.webp",
  "/el-shamadan/images/stick-left-64.webp",
  "/el-shamadan/images/thumbnail.webp",
  "/el-shamadan/locales/ar/contact.json",
  "/el-shamadan/locales/ar/footer.json",
  "/el-shamadan/locales/ar/header.json",
  "/el-shamadan/locales/ar/home.json",
  "/el-shamadan/locales/ar/products.json",
  "/el-shamadan/locales/en/contact.json",
  "/el-shamadan/locales/en/footer.json",
  "/el-shamadan/locales/en/header.json",
  "/el-shamadan/locales/en/home.json",
  "/el-shamadan/locales/en/products.json"
], qe = Fe.map((s) => ({ url: s, revision: Be }));
Q(qe);
E(
  ({ request: s }) => s.mode === "navigate",
  new G({
    cacheName: "navigate",
    plugins: [
      new N({ statuses: [200] }),
      new K({
        maxEntries: 50,
        maxAgeSeconds: v
      })
    ]
  })
);
E(
  ({ request: s }) => s.destination === "script",
  new G({
    cacheName: "scripts",
    plugins: [
      new N({ statuses: [200] }),
      new K({
        maxEntries: 50,
        maxAgeSeconds: v
      })
    ]
  })
);
E(
  ({ request: s }) => s.destination === "font",
  new Ce({
    cacheName: "fonts",
    plugins: [
      new N({ statuses: [200] }),
      new K({
        maxEntries: 50,
        maxAgeSeconds: v
      })
    ]
  })
);
