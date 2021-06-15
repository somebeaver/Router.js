<a name="module_Router"></a>

## Router

* [Router](#module_Router)
    * [.Router](#module_Router.Router)
        * [new exports.Router(options)](#new_module_Router.Router_new)
        * [.go()](#module_Router.Router+go)
        * [.refresh([hardRefresh])](#module_Router.Router+refresh)
        * [.back([steps])](#module_Router.Router+back)
        * [.forward([steps])](#module_Router.Router+forward)
        * [.setLang()](#module_Router.Router+setLang)
        * [.deleteHistory()](#module_Router.Router+deleteHistory)
        * [.deleteViewCache()](#module_Router.Router+deleteViewCache)

<a name="module_Router.Router"></a>

### Router.Router
**Kind**: static class of [<code>Router</code>](#module_Router)  

* [.Router](#module_Router.Router)
    * [new exports.Router(options)](#new_module_Router.Router_new)
    * [.go()](#module_Router.Router+go)
    * [.refresh([hardRefresh])](#module_Router.Router+refresh)
    * [.back([steps])](#module_Router.Router+back)
    * [.forward([steps])](#module_Router.Router+forward)
    * [.setLang()](#module_Router.Router+setLang)
    * [.deleteHistory()](#module_Router.Router+deleteHistory)
    * [.deleteViewCache()](#module_Router.Router+deleteViewCache)

<a name="new_module_Router.Router_new"></a>

#### new exports.Router(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.root | <code>string</code> | A CSS selector for the root Element in which all views will be injected. |
| options.routes | <code>Array</code> | An array of route objects. Routes will be matched in the order they appear in the array. |
| options.langs | <code>Array</code> | An array of lanauge slugs. |
| options.defaultLang | <code>string</code> |  |
| [options.cacheViews] | <code>string</code> | Enable or disable the caching of views. All view loads will be hard reloads. Defaults to `false`. |
| [options.models] | <code>object</code> | A key:value object of models, with keys being the model name, and the values being the location of the `.js` file. |
| [options.scrollTopDelay] | <code>number</code> | When loading a cached view, this is the number of ms to wait before attempting to scroll back to the position that the user left off at. Defaults to 0, which is still one event loop tick. |
| [options.maxHistoryEntries] | <code>number</code> | Max number of items in the history. Defaults to 50. |
| [options.templateGetter] | <code>function</code> | Optional pluggable function that receives view template file location (string), and returns its raw contents. File contents are cached, so this function will only ever get called once per route load per session. |
| [options.templateProcessor] | <code>function</code> | Optional pluggable function that receives the raw template HTML and processes it. Use this function to run the template through ejs, pug, handlebars, or whatever else. Does not get called when the view is being loaded from the cache. |

<a name="module_Router.Router+go"></a>

#### router.go()
Performs a regular navigation towards a href. Using this method will always add
a histroy entry in the Router. This is not the same as `forward()`; this will set
`currentIndexInHistory` to the last item and it will overwrite any items that may have 
been "in front".

For example, if you opened the app, visited five views, then pressed back twice, the
history would look like this:

    ['/albums', '/artist/34', '/album/10', '/explore', '/albums/7']
                                   ^ you are here

And then, instead of going "forward" you navigated regularly (eg. clicking a link), the
history would now look like this:

    ['/albums', '/artist/34', '/album/10', '/track/50']
                                                ^ you are here

**Kind**: instance method of [<code>Router</code>](#module_Router.Router)  
<a name="module_Router.Router+refresh"></a>

#### router.refresh([hardRefresh])
Refreshes the current route.

**Kind**: instance method of [<code>Router</code>](#module_Router.Router)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [hardRefresh] | <code>boolean</code> | <code>true</code> | Defaults to `true`. |

<a name="module_Router.Router+back"></a>

#### router.back([steps])
Navigates to a route in the history. Has no effect if you're already on the oldest view.

**Kind**: instance method of [<code>Router</code>](#module_Router.Router)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [steps] | <code>number</code> | <code>1</code> | The number of steps to go back. Default is 1. |

<a name="module_Router.Router+forward"></a>

#### router.forward([steps])
Navigates forward through the history. Has no effect if you're already on the latest view.

**Kind**: instance method of [<code>Router</code>](#module_Router.Router)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [steps] | <code>number</code> | <code>1</code> | The number of steps to go forward. Default is 1. |

<a name="module_Router.Router+setLang"></a>

#### router.setLang()
Changes the langugage and erases all cache.

**Kind**: instance method of [<code>Router</code>](#module_Router.Router)  
<a name="module_Router.Router+deleteHistory"></a>

#### router.deleteHistory()
Deletes all navigation history for this session.

**Kind**: instance method of [<code>Router</code>](#module_Router.Router)  
<a name="module_Router.Router+deleteViewCache"></a>

#### router.deleteViewCache()
Deletes all internal view cache for this session.

**Kind**: instance method of [<code>Router</code>](#module_Router.Router)  
