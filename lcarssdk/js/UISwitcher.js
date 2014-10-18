/*
* Dynamically load the right UI based on the viewport UA
*/

function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

if(webviewInfo.type != 'mobile'){
	loadjscssfile("lcarssdk/js/UILogicDesktopTablet.js", "js") //dynamically load and add this .js file
} else {
    loadjscssfile("lcarssdk/js/UILogicMobile.js", "js") //dynamically load and add this .js file
}
