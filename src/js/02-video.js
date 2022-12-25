import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOCAL = 'videoplayer-current-time';

onReload();

player.on(
  'timeupdate',
  throttle(function (data) {
    const timeStop = data.seconds;
    localStorage.setItem('videoplayer-current-time', timeStop);
  }, 1000)
);

function onReload() {
  const timeStart = localStorage.getItem('videoplayer-current-time');
  if (timeStart) {
    player.setCurrentTime(timeStart);
  }
}
