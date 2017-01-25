function getAudioTags(extension) {
    var links = document.querySelectorAll('audio[src$="' + extension + '"]'),
        i;

    for (i=0; i < links.length; i++){
        console.log( links[i].src );
    }
    
    document.getElementById("demo").innerHTML ="<audio src='" + links[0].src + "' preload='auto'></audio>";
}

/*function getAnchorTags(extension) {
    var links = document.querySelectorAll('a[href$="' + extension + '"]'),
        i;

    for (i=0; i<links.length; i++){
        console.log(links[i]);
    }
}


getAnchorTags(".mp3");*/
getAudioTags(".mp3");