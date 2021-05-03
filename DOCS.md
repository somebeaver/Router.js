<a name="module_index"></a>

## index

* [index](#module_index)
    * [.Router](#module_index.Router)
        * [.go()](#module_index.Router+go)
        * [.refresh([hardRefresh])](#module_index.Router+refresh)
        * [.back([steps])](#module_index.Router+back)
        * [.forward([steps])](#module_index.Router+forward)
        * [.setLang()](#module_index.Router+setLang)
        * [.deleteHistory()](#module_index.Router+deleteHistory)
        * [.deleteViewCache()](#module_index.Router+deleteViewCache)

<a name="module_index.Router"></a>

### Router.Router
Router class for Echoes. The router only cares about it's #root and cannot
change any content outside of it (except for elements that are
`.router-link`).

Routes will be matched in their given order.

Hold cmd while clicking a link to perform a hard refresh of that view.

Terminology:

`href` = The url to be parsed. Current lanauge will be maintained when a lang
slug is not present. Dynamic parts are expected to be mapped into values, eg.
`/artist/3` instead of `/artist/:id`

`route` = The rule to check the href against. Each route supports each
language specified in `Router.langs`. Dynamic parts in a route are not mapped
to a value, eg. `/artist/:id`.

TODO switch app lang when a route from another lang is requested, but that
action isn't possible (yet).

**Kind**: static class of [<code>index</code>](#module_index)  

* [.Router](#module_index.Router)
    * [.go()](#module_index.Router+go)
    * [.refresh([hardRefresh])](#module_index.Router+refresh)
    * [.back([steps])](#module_index.Router+back)
    * [.forward([steps])](#module_index.Router+forward)
    * [.setLang()](#module_index.Router+setLang)
    * [.deleteHistory()](#module_index.Router+deleteHistory)
    * [.deleteViewCache()](#module_index.Router+deleteViewCache)

<a name="module_index.Router+go"></a>

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

**Kind**: instance method of [<code>Router</code>](#module_index.Router)  
<a name="module_index.Router+refresh"></a>

#### router.refresh([hardRefresh])
Refreshes the current route.

**Kind**: instance method of [<code>Router</code>](#module_index.Router)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [hardRefresh] | <code>boolean</code> | <code>true</code> | Defaults to `true`. |

<a name="module_index.Router+back"></a>

#### router.back([steps])
Navigates to a route in the history. Has no effect if you're already on the oldest view.

**Kind**: instance method of [<code>Router</code>](#module_index.Router)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [steps] | <code>number</code> | <code>1</code> | The number of steps to go back. Default is 1. |

<a name="module_index.Router+forward"></a>

#### router.forward([steps])
Navigates forward through the history. Has no effect if you're already on the latest view.

**Kind**: instance method of [<code>Router</code>](#module_index.Router)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [steps] | <code>number</code> | <code>1</code> | The number of steps to go forward. Default is 1. |

<a name="module_index.Router+setLang"></a>

#### router.setLang()
Changes the langugage and erases all cache.

**Kind**: instance method of [<code>Router</code>](#module_index.Router)  
<a name="module_index.Router+deleteHistory"></a>

#### router.deleteHistory()
Deletes all navigation history for this session.

**Kind**: instance method of [<code>Router</code>](#module_index.Router)  
<a name="module_index.Router+deleteViewCache"></a>

#### router.deleteViewCache()
Deletes all internal view cache for this session.

**Kind**: instance method of [<code>Router</code>](#module_index.Router)  