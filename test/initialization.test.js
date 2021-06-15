import { Router } from '../index.js'
import { output, pass, fail } from './tools/index.js' 

export async function testInitialization() {
  output('<h3>Running all tests in Router.js test suite</h3>')
  window.testStartTime = performance.now()

  /**
   * Init a new router instance
   */
  try {
    const router = new Router({
      'root': '#view',
      'langs': ['en'],
      'defaultLang': 'en',
      'currentLang': 'en',
      'cacheViews': true,
      'routes': [
        {
          "route": "/page1",
          "view": "page1.html"
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

    pass('Initialization')
  } catch (e) { fail(e) }

}