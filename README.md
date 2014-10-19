Fork of: LCARS SDK 14278.102
 ============

This is a fork of Aricwithana's LCARSsdk which extends the sdk with a form of adaptive client side coding to implement different breakpoints which are defined within UISwitcher.js and controlled by the browsers User Agent.

Now dynamically rebuilds the display on reorientation.

Packaged with a nodejs server.

Install (Linux)
Grab node from http://nodejs.org
Download this repo
CD into the directory
sudo npm install 
sudo nodejs LCARSServer.js

In development so lots not finished / incomplete...

Currently doesn't render correctly in chrome dev tools but works on device.