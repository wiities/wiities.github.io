
function browsercheck {
var ua=window.navigator.userAgent;
var up=window.navigator.platform;
if(up.indexOf('Nintendo Wii')==0){document.getElementById('wii').style.display='none'
} else if(up.indexOf('Nintendo WiiU')==0){document.getElementById('wiiu').style.display='none'
} else if(up.indexOf('Nintendo DS')==0){document.getElementById('ds').style.display='none'
} else if(up.indexOf('Nintendo 3DS')==0){document.getElementById('3ds').style.display='none'
} else{document.getElementById('notwii').style.display='none'}
}