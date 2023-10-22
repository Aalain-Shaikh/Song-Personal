var audioElement = new Audio("1.mp3");
var songIndex = 0;
var masterPlay = document.getElementById("btn");
var progressbar = document.getElementById("change_play");
var songeach = Array.from(document.getElementsByClassName("first-img"));
var text = Array.from(document.getElementsByClassName("first-text"));
var play = Array.from(document.querySelectorAll(".plays"));

// console.log(play)
var songs = [
  {
    songname: "still number 1",
    filepath: "still number 1.mp3",
    coverpath: "1.jpg",
  },
  {
    songname: "zinda banda",
    filepath: "2.mp3",
    coverpath: "2.jpg",
  },
  {
    songname: "ramaiya",
    filepath: "3.mp3",
    coverpath: "3.jpg",
  },
  { songname: "kalastar", filepath: "4.mp3", coverpath: "4.jpg" },
  {
    songname: "Jawan Title Track",
    filepath: "5.mp3",
    coverpath: "5.jpg",
  },
  {
    songname: "hip-hop",
    filepath: "6.mp3",
    coverpath: "6.jpg",
  },
  {
    songname: "guli",
    filepath: "7.mp3",
    coverpath: "6.jpg",
  },
  {
    songname: "gender",
    filepath: "8.mp3",
    coverpath: "6.jpg",
  },
  {
    songname: "farrata",
    filepath: "9.mp3",
    coverpath: "6.jpg",
  },
  {
    songname: "Chaleya",
    filepath: "10.mp3",
    coverpath: "6.jpg",
  },
];
songeach.forEach((Element, i) => {
  Element.getElementsByTagName("img")[0].src = songs[i].coverpath;
});
text.forEach((elem, i) => {
  elem.getElementsByClassName("p")[0].innerText = songs[i].songname;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressbar.value = progress;
  // console.log(progressbar.value);
});

progressbar.addEventListener("change", () => {
  audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
});
const makeplays = () => {
  play.forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};
const reverse = () => {
  play.forEach((element) => {
    element.classList.remove("fa-play");
    element.classList.add("fa-pause");
  });
};
play.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeplays();
    // console.log(e);
    songIndex = parseInt(e.target.id);
    element.classList.remove("fa-play");
    element.classList.add("fa-pause");
    audioElement.src = `${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  });
});
document.getElementById("next").addEventListener("click", (e) => {
  if (songIndex >= 11) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  console.log(songIndex);
  audioElement.src = `${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
