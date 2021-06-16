/**
 * TODO
 */
import { Router } from '../index.js'

export async function routerLinksTest() {
  ett.output('<h3>router-links.test.js</h3>')

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
        }
      ]
    })
  } catch (e) { ett.fail(e) }

}