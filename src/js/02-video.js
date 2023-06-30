import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(updateTime, 1000));

const pageAccessedByReload =
  (window.performance.navigation && window.performance.navigation.type === 1) ||
  window.performance
    .getEntriesByType('navigation')
    .map(nav => nav.type)
    .includes('reload');

if (pageAccessedByReload) {
  player.on('play', function () {
    player
      .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
      .then(function (seconds) {
        seconds = localStorage.getItem('videoplayer-current-time');
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}

function updateTime() {
  player
    .getCurrentTime()
    .then(seconds => {
      localStorage.setItem('videoplayer-current-time', seconds);
      console.log(localStorage.getItem('videoplayer-current-time'));
    })
    .catch(error => {
      console.error(error);
    });
}
