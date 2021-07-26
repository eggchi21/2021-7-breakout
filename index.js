
/**
 * Instantiate Handsfree.js
 * - Try uncommenting some of the other models
 * @see https://handsfree.js.org/
 */
 window.handsfree = new Handsfree({
  showDebug: true,
  hands: true,
  // facemesh: true,
  // pose: true,
  // holistic: true,
  // weboji: true
})

// A simple plugin to log the data
handsfree.use('logger', data => {
  console.log(data)
})
