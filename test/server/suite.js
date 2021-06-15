import { testInitialization } from '../initialization.test.js'

/**
 * Runs through each test.
 */
async function testSuite() {
  await testInitialization()
}

testSuite()