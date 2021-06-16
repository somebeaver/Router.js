/**
 * Tests the forward programmatic navigation methods of a Router instance.
 */
import { Router } from '../index.js'

export async function navigationTest() {
  ett.output('<h3>navigation-backward.test.js</h3>')

  // add/overwrite a view element to the document
  document.body.insertAdjacentHTML('beforeend', '<div id="view"></div>')

  /**
   * Perform regular navigations forward.
   */
  try {
    ett.output('Beginning integration tests for initial navigations forward')

    /**
     * Create an instance
     */
    const router = new Router({
      'root': '#view',
      'langs': ['en'],
      'defaultLang': 'en',
      'currentLang': 'en',
      'cacheViews': true,
      'templateGetter': path => `<div class="test-template">${path}</div>`,
      'templateProcessor': template => template,
      'routes': [
        {
          "route": "/page1",
          "view": "views/page1.html"
        },
        {
          "route": "/page2",
          "view": "page2.html"
        },
        {
          "route": "/page3",
          "view": "page3.html"
        },
        {
          "route": "/page4",
          "view": "page4.html"
        },
        {
          "route": "/page5",
          "view": "page5.html"
        },
      ]
    })

    /**
     * Navigate 3 times. This will add entries to the navigation history.
     */
    await router.go('/page1')
    ett.mustBeTruthy(document.querySelector('#page1'), 'Router.go() page 1')
    
    await router.go('/page2')
    ett.mustBeTruthy(document.querySelector('#page2'), 'Router.go() page 2', 'Includes caching of page 1')
    
    await router.go('/page3')
    ett.mustBeTruthy(document.querySelector('#page3'), 'Router.go() page 3', 'Includes caching of page 2')
  } catch (e) { ett.fail('Error when navigating forward', e) }

  /**
   * Test going backwards
   */
  try {
    ett.output('Beginning integration tests for navigating backward')

    /**
     * Go forward 3 times. This will add entries to the navigation history.
     */
    await router.back()
    ett.mustBeTruthy(document.querySelector('#page2'), 'Router.back() went back to page 2')
    
    await router.back()
    ett.mustBeTruthy(document.querySelector('#page1'), 'Router.back() went back to page 1')
  } catch (e) { ett.fail('Error when navigating backward', e) }

  /**
   * Test going forwards after having gone back, which is not the same as
   * the initial navigations since now the view is being loaded from the cache.
   */
  try {
    ett.output('Beginning integration tests for navigating forwards after having gone backwards')

    /**
     * Go forward 3 times. This will add entries to the navigation history.
     */
    await router.forward()
    ett.mustBeTruthy(document.querySelector('#page2'), 'Router.forward() went back to page 2')
    
    await router.forward()
    ett.mustBeTruthy(document.querySelector('#page3'), 'Router.forward() went back to page 3')
  } catch (e) { ett.fail('Error when navigating forward', e) }
}