Fork of: LCARS SDK 14278.102
 ============

Extends the sdk with a form of adaptive client side code to implement different breakpoints which are defined within UISwitcher.js and controlled by the browsers User Agent.

Now dynamically rebuilds the display on reorientation.

Packaged with a nodejs server.

The client now does automatic voice recognition if you are running the lastest google (on both desktop and droid). It'll also stream this back to the server via socket.io - making for a nifty little IoT controller for your Spark Core? ;-)

Install (Linux)  <br/>
Grab node from http://nodejs.org  <br/>
Download this repo  <br/>
CD into the directory  <br/>
Probably best to delete the node_modules directory then run: <br/>
sudo npm install  <br/>
sudo nodejs LCARSServer.js  <br/>



In development so lots not finished / incomplete...

Currently doesn't render correctly in chrome dev tools but works on my Galaxy S5 with both the built in browser and chrome.
