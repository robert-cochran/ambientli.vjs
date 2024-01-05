var $ = document.querySelector.bind(document);
var body = $('body');

var videoVolumeSlider = document.getElementById("videoVolumeSlider");
var radioVolumeSlider = document.getElementById("radioVolumeSlider");
var videoSelect = document.getElementById('videoSelect');
var radioSelect = document.getElementById('radioSelect');
var turnOffRadioButton = document.getElementById("turnOffRadioButton");
var turnOffVideoButton = document.getElementById("turnOffVideoButton");
var overlayButton = document.getElementById("overlayPauseButton");

var globalPause = false;


// var startVideoId = videos[0].URL.split("=")[1];
// var startVideoStartTime = videos[0]


window.onload = function() {
    // loadVideoLibrary();
    loadLibrary(videos, videoSelect);
    videoSelect.addEventListener("change", (e) => loadPlayer(e, videos, videoPlayer, videoVolumeSlider))

    loadLibrary(radios, radioSelect);
    radioSelect.addEventListener("change", (e) => loadPlayer(e, radios, radioPlayer, radioVolumeSlider));


    document.body.addEventListener("mouseover", openMenu);
    document.body.addEventListener("mouseout", closeMenu);
    turnOffRadioButton.addEventListener("click", (e) => turnOffPlayer(e, radioPlayer, false)); //https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters
    turnOffVideoButton.addEventListener("click", (e) => turnOffPlayer(e, videoPlayer, true));
    overlayButton.addEventListener("click", togglePlaybackAll);
    overlayButton.addEventListener("dblclick", fullscreen);
    videoVolumeSlider.addEventListener("input", (e) => setVolume(e, videoPlayer, videoVolumeSlider));
    radioVolumeSlider.addEventListener("input", (e) => setVolume(e, radioPlayer, radioVolumeSlider));
    document.getElementById("videoURL").addEventListener("click", (e) => openURL(e, videoPlayer));
    document.getElementById("radioURL").addEventListener("click", (e) => openURL(e, radioPlayer));
    // document.getElementById("userVideo").addEventListener("keyup", loadUserVideo);
    // document.getElementById("userRadio").addEventListener("keyup", loadUserRadio);
    

    // This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


}

// This function creates an <iframe> (and YouTube player)
//   after the API code downloads.

function onYouTubeIframeAPIReady() {
    videoPlayer = new YT.Player('videoPlayer', {
        // height: '390',
        width: '100%',
        videoId: videos[0].url.split("=")[1],
        playerVars: {
            'playsinline': 1,
            'start': videos[0].timestart,
            'autoplay': true, 
            'mute': true,
            'controls':0,
            'picture-in-picture':true,
            'allowfullscreen':1,
            'loop':1,
            'playlist': videos[0].url.split("=")[1]
        },
        events: {
            'onReady': onPlayerReady, 
            'onStateChange': onPlayerStateChange
        }
    });

    radioPlayer = new YT.Player('radioPlayer', {
        width: '0%',
        height: '0%',
        videoId: radios[0].url.split("=")[1],
        playerVars: {
            'mute': true,
            'autoplay': true
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    
}

/**** SETUP *****/


// The API will call this function when the 
//video player is ready.
function onPlayerReady(event) {
    toggleMute(event.target);
    event.target.setVolume(0);

}



function onPlayerStateChange(event) {
    
    if (event.data == YT.PlayerState.ENDED){
        console.log("CONTENT ENDED")
        if (videoPlayer.getPlayerState() == YT.PlayerState.ENDED){
            console.log("VIDEO ENDED")
            var content = videos.filter(video => video.name == videoSelect.value)[0]
            event.target.loadVideoById(content.url.split("=")[1], content.timestart);
        }
        if (radioPlayer.getPlayerState() == YT.PlayerState.ENDED){
            console.log("RADIO ENDED")
            var content = radios.filter(radio => radio.name == radioSelect.value)[0]
            event.target.loadVideoById(content.url.split("=")[1], content.timestart);
        }
    }
}


/************************* CUSTOM PLAYER FUNCTIONS ********************************/


/***************** LOAD SELECT CONTENT LIST **********************/
function loadLibrary(library, playerSelect){
    var categories = getCategories(library);
    loadCategories(categories, playerSelect);
    loadContent(library, categories, playerSelect)
}

function getCategories(library) {
    var categorySet = new Set();
    var categoriesArray = [];
    library.map(content => content.category)
        .map(category => categorySet.add(category))

    categorySet.forEach(category => categoriesArray.push(category));
    return categoriesArray;
};

function loadCategories(categories, playerSelect) {
    categories.map(category => {
        var optgroup = document.createElement('optgroup');
        optgroup.label = category;
        playerSelect.appendChild(optgroup);
    })
};

function loadContent(library, categories, playerSelect){
    library.map(content => {
        var opt = document.createElement('option');
        opt.value = content.name;
        opt.innerHTML = content.name;
        playerSelect.children[categories.indexOf(content.category)].append(opt);

    })
}

/***************** LOAD CONTENT **********************/

function loadPlayer(event, library, player, volumeSlider) {
    var selectedVideoName = event.target.value;
    var content = library.filter(content => content.name == selectedVideoName)[0]
    if (content.url.indexOf("playlist") === -1){
        player.loadVideoById(content.url.split("=")[1], content.timestart);
    }
    else {
        player.loadPlaylist(content.url.split("=")[1], content.timestart);
    }
        //     if (video.NAME === selectName){
        //         var videoId = video.URL.split("=")[1];
        //         player.loadVideoById(videoId, video.TIMESTART);
        //         player.i.j.playerVars.playlist = videoId;
        //         player.i.j.playerVars.loop = 1;
        //     }   
        // })
    // })
    player.setVolume(volumeSlider.value); //stops youtube auto changing vol 
}

/***************** LOAD USER CONTENT **********************/

// function loadUserVideo(event){
//     if (event.keyCode === 13){
//         var videoURL = event.target.value;
//         videoPlayer.loadVideoById(videoURL.split("=")[1], 0);
//         event.target.value = "";
//     }
// }

// function loadUserRadio(event){
//     if (event.keyCode === 13){
//         var radioURL = event.target.value;
//         radioPlayer.loadVideoById(radioURL.split("=")[1], 0);
//         event.target.value = "";
//     }
// }

/***************** PLAYBACK **********************/

function togglePlaybackAll() {
    var videoState = turnOffVideoButton.textContent;
    var radioState = turnOffRadioButton.textContent;
    
    if (globalPause){ //was paused, now playing
        globalPause=false;
        if (videoState != "OFF"){
            turnOnPlayer(videoPlayer, turnOffVideoButton)
            overlayButton.style.background = "rgba(0, 0, 0, 0)"; //transparent
            //may need to change how off and on works after global pause is done
            document.body.addEventListener("mouseout", closeMenu);
        }
        if (radioState != "OFF"){
            turnOnPlayer(radioPlayer, turnOffRadioButton);
        }
    }

    else {
        globalPause=true;
        if (videoState != "OFF"){
            pausePlayer(videoPlayer, turnOffVideoButton);
            overlayButton.style.background = "rgba(0, 0, 0, 1)"; //full black
            document.body.removeEventListener("mouseout", closeMenu);
        }
        if (radioState != "OFF"){
            pausePlayer(radioPlayer, turnOffRadioButton);
        }
    }
}

function turnOnPlayer(player, offButton){
    player.playVideo();
    offButton.textContent = "ON";
    offButton.style.background = "rgb(0,128,0)"
}
   
function pausePlayer(player, offButton){
    player.pauseVideo();
    offButton.textContent = "ON (Paused)";
    offButton.style.background = "rgb(190,150,0)";
}

function turnOffPlayer(event, player, isVideo) {
    if (event.target.textContent == "ON" || event.target.textContent == "ON (Paused)") {
        event.target.style.background = "rgb(128,0,0)";
        event.target.textContent = "OFF";
        player.pauseVideo();
        if (isVideo){ 
            overlayButton.style.background = "rgba(0, 0, 0, 1)";
            document.body.removeEventListener("mouseout", closeMenu);
        }
    }
    else {
        event.target.style.background = "rgb(0, 128, 0)";
        event.target.textContent = "ON";
        player.playVideo();
        if (isVideo){ 
            overlayButton.style.background = "rgba(0, 0, 0, 0)";
            document.body.addEventListener("mouseout", closeMenu);
        }
    }
}


/***************** VOLUME **********************/

function setVolume(event, player, volumeSlider){
    player.setVolume(volumeSlider.value);
    radioVolumeSlider.style.boxshadow = "-1px -1px 20px aliceblue, 1px 1px 10px greenyellow, 1px 1px 1px green";

}

function toggleMute(player) {
    if (player.isMuted()) {
        player.unMute();
    }
    else {
        player.mute();
    }
}



/***************** SCREEN **********************/

function fullscreen() {
    // player.setSize(width='2000', height='1000');
    if (document.webkitIsFullScreen || document.fullscren){
        document.exitFullscreen();     
        // what is document.webkitExitFullscreen() vs document.webkitCancelFullscreen();    
    }
    else {
        var requestFullscreen = body.requestFullScreen || body.mozRequestFullScreen || body.webkitRequestFullScreen;
        body.requestFullscreen();//.bind(body);
    }
}

/***************** MENU **********************/


function openMenu() {
    document.getElementById("menuContainer").style.opacity="1";
    document.getElementById("menuContainer").style.zIndex="1";
    // setTimeout(closeMenu, 3000);
}

function closeMenu() {
    document.getElementById("menuContainer").style.opacity="0";
    document.getElementById("menuContainer").style.zIndex="-2";
}


/***************** URL **********************/

function openURL(event, player){
    window.open(player.getVideoUrl(), '_blank').focus();
}
//check html events for more features to include
//check what else is hidden in the yt object 
    //e.g. //if (event.target.h.id=="videoPlayer"){}



function playItHere(e, link) {
    var audio = document.createElement("audio");
    var src = document.createElement("source");
    src.src = link.href;
    audio.appendChild(src);
    audio.play();
    e.preventDefault();
    }