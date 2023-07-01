import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
player.on('play', function () {
  const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);
  player.setCurrentTime(currentTime || 0);
});

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime(time) {
  console.log(time.seconds);
  localStorage.setItem(LOCAL_STORAGE_KEY, time.seconds);
}
