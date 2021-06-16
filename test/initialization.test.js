/**
 * Tests the instanciation of new Router objects.
 */
import { Router } from '../index.js'

export async function initializationTest() {
  ett.output('<h3>initialization.test.js</h3>')

  /**
   * Init a new router instance
   */
  try {
    const router = new Router({
      'root': '#view',
      'langs': ['en'],
      'defaultLang': 'en',
      'currentLang': 'en',
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

    ett.pass('Initialization with all required options')
  } catch (e) { ett.fail('Initialization with all required options') }

  /**
   * Init a new router instance
   */
  try {
    const router = new Router({
      'root': '#view',
      'langs': ['en'],
      'defaultLang': 'en',
      'currentLang': 'en'
    })

    ett.fail('Initialization without required options should throw error')
  } catch (e) { ett.pass('Initialization without required options should throw error') }

}