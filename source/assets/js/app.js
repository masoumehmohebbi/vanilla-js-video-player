let $ = document,
    videoFilesContainer = $.querySelector('.video-Files-container'),
    colorButtons = $.querySelectorAll('.color-btn'),
    playBtn = $.querySelector('#play'),
    prevBtn = $.querySelector('#prev'),
    nextBtn = $.querySelector('#next'),
    video = $.querySelector("video"),
    videoDescription= $.querySelector('.video-desc')
    currentTimeEl = $.getElementById("current-time"),
    durationEl = $.getElementById("duration"),
    progress = $.getElementById("progress"),
    progressContainer = $.getElementById("progress-container"),
    minus5 = $.querySelector('#minus_5'),
    plus5 = $.querySelector('#plus_5'),
    speed2X = $.querySelector('#speed2x'),
    id = 1,
    videosArray = [
        {id: id,
        name: 'Fury 2014',
        src: 'assets/medias/fury2014.mp4',
        cover : 'assets/medias/fury-cover.jpg',
        format: 'mp4',
        duration: '2:31',
        description:'Enim lobortis scelerisque fermentum dui faucibus. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. In hac habitasse platea dictumst vestibulum rhoncus est. Adipiscing elit duis tristique sollicitudin nibh sit amet. Justo eget magna fermentum iaculis eu non diam phasellus. Turpis nunc eget lorem dolor. In fermentum et sollicitudin ac orci phasellus egestas.'},

        {id: id+=1,
        name: 'The Martian',
        src: 'assets/medias/martian.mp4',
        cover : 'assets/medias/martian-cover.jpg',
        format: 'mp4',
        duration: '3:08',
        description: 'Mattis rhoncus urna neque viverra justo nec ultrices. Et pharetra pharetra massa massa ultricies. Vitae turpis massa sed elementum tempus. Velit egestas dui id ornare arcu odio ut sem nulla. Sociis natoque penatibus et magnis dis parturient. At in tellus integer feugiat. Id leo in vitae turpis massa sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.'},

        {id: id+=1,
        name: 'Pursuit-Of-Happyness',
        src: 'assets/medias/pursuit-of-happyness.mp4',
        cover : 'assets/medias/pursuit-of-happyness-cover.jpg',
        format: 'mp4',
        duration: '2:22',
        description: 'Dolor sed viverra ipsum nunc aliquet bibendum enim. Morbi tincidunt augue interdum velit euismod in pellentesque. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Pellentesque elit eget gravida cum sociis. Fusce ut placerat orci nulla pellentesque dignissim enim. Sed nisi lacus sed viverra tellus in hac habitasse platea. Malesuada lus egestas tellus.'},

        {id: id+=1,
        name: 'Harry Potter',
        src: 'assets/medias/harry-potter-movie.mp4',
        cover : 'assets/medias/harry-potter-cover.jpg',
        format: 'mp4',
        duration: '3:56',
        description: 'Semper feugiat nibh sed pulvinar proin gravida hendrerit. Libero justo laoreet sit amet cursus sit. Enim lobortis scelerisque fermentum dui faucibus. Egestas dui id ornare arcu odio ut sem. Tortor at risus viverra adipiscing at in tellus. Nisl condimentum id venenatis a condimentum vitae sapien. Viverra aliquet eget sit amet. Elementum pulvinar etiam non quam lacus.'},

        {id: id+=1,
        name: 'Allied 2016',
        src: 'assets/medias/allied.mp4',
        cover : 'assets/medias/allied-cover.jpg',
        format: 'mp4',
        duration: '1:03',
        description: 'Consequat mauris nunc congue nisi vitae suscipit. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Consequat ac felis donec et. Accumsan lacus vel facilisis.'}
    ]
    
// change theme 
function colorsFunction(e){
    $.documentElement.style.setProperty('--color-main', e.target.dataset.color)
}

function createVideosList(){
        videosArray.forEach(item =>{
            let video_divElem = $.createElement('div')
            video_divElem.setAttribute('class', 'rounded-md my-2 video-detail w-11/12 bg-gray-100 hover:bg-gray-300 container flex flex-row overflow-hidden')
           
            let numberOfVideo = $.createElement('p')
            numberOfVideo.setAttribute('class', 'text-1xl flex pt-8 bg-main font-extrabold px-1')
            numberOfVideo.innerHTML = item.id

            let videoCover = $.createElement('img')
            videoCover.setAttribute('class', 'w-1/2 pt-2 pb-2 object-cover')
            videoCover.src = item.cover
            videoCover.alt = "harry-potter-cover"
            
            let videoDescription_ul = $.createElement('ul')
            videoDescription_ul.setAttribute('class', 'text-xs flex flex-col justify-center pl-2')
            let li_videoName = $.createElement('li')
            let label_videoName = $.createElement('label')
            label_videoName.innerHTML = "Name: " + item.name 
            li_videoName.append(label_videoName)
            
        
            let li_videoDuration = $.createElement('li')
            let label_videoDuration = $.createElement('label')
           
            label_videoDuration.innerHTML = "Duration: " + item.duration
            li_videoDuration.append(label_videoDuration)
            li_videoDuration.setAttribute('class', 'py-2')

            
        
            let li_videoFormat = $.createElement('li')
            let label_videoFormat = $.createElement('label')
            label_videoFormat.innerHTML = "Format: " + item.format
            li_videoFormat.append(label_videoFormat)
        
            videoDescription_ul.append(li_videoName, li_videoDuration, li_videoFormat)
            video_divElem.append(numberOfVideo, videoCover, videoDescription_ul)
            videoFilesContainer.append(video_divElem)
    
            videoFilesContainer.style.overflowY ='auto';

            video_divElem.addEventListener('click', ()=>{
              
             
                let indexVideo = ((video_divElem.firstChild.innerHTML)-1)
                loadSong(videosArray[indexVideo]);
                playSong();
                videoDescription.innerHTML = videosArray[indexVideo].description
            })

            
        
        })
}
// Player Controls
let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  video.play();
}
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    video.pause();      
}
playBtn.addEventListener("click", function () {
    if (isPlaying) {       
      pauseSong()
    } else {
      playSong()
    }
})
// Update DOM
function loadSong(vid) {
    video.src = vid.src;
}

let songIndex = 0;

function prevSong() {
   songIndex--;
  if (songIndex < 0) { 
    songIndex = videosArray.length - 1;
  }

  loadSong(videosArray[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > videosArray.length - 1) {
    songIndex = 0;
  }
  loadSong(videosArray[songIndex]);
  playSong();
}

loadSong(videosArray[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
    if (isPlaying) {
      const duration = e.srcElement.duration;
      const currentTime = e.srcElement.currentTime;
      // Update progress bar width
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = progressPercent + "%";
      // Calculate display for duration
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }
      // Delay switching duration Element to avoid NaN
      if (durationSeconds) {
        durationEl.textContent = durationMinutes + ":" + durationSeconds;
      }
      // Calculate display for currentTime
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
    }
}
// Set Progress Bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = video.duration;
    video.currentTime = (clickX / width) * duration;
}


//! addEventListeners
window.addEventListener('load', createVideosList)

colorButtons.forEach(btn =>{
    btn.addEventListener('click', colorsFunction)
})

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

video.addEventListener("ended", nextSong);
video.addEventListener("timeupdate", updateProgressBar);

progressContainer.addEventListener("click", setProgressBar);



// video Volume
var slider1 = document.getElementById("slider1");
var display1 = document.getElementById("display1");

slider1.addEventListener("input", sliderActions);

function sliderActions() {
  var newVolume = slider1.value;

  display1.innerText = newVolume; // range 0 to 100
  video.volume = newVolume / 100; // range 0 to 1
}

// minus_5 And plus_5 second And 2X speed the video
minus5.addEventListener('click', ()=>{
  video.currentTime -= 5
})
plus5.addEventListener('click', ()=>{
  video.currentTime += 5
})
speed2X.addEventListener('click', ()=>{
  video.playbackRate = 2
})