function sendLinktoMiddleIframe(iframeNum){
   var id = iframeNum+"-iframe-link";
   var linkSrc = document.getElementById(iframeNum +"-iframe-link").src;
   document.getElementById("middle-iframe-link").src=linkSrc;
 }
