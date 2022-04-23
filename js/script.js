/* Created by: Venika Sem
 * Created on: Apr 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-01-PWA-Extra/sw.js", {
    scope: "/ICS2O-Unit6-01-PWA-Extra/",
  })
}

/**
 * This function calculates the volume of a sphere.
 */
function calculate() {
  // input
  const radiusOfSphere = parseFloat(document.getElementById('radius-of-sphere').value)

   // process
  const volume = (4 / 3) * Math.PI * Math.pow(radiusOfSphere, 3)

  // output
  document.getElementById('volume').innerHTML = '<p>The volume is: ' + volume.toFixed(2) + ' cm³</p>'
}