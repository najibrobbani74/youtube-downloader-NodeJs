const ytdl = require('ytdl-core');
const fs = require('fs');

const videoUrl = 'https://www.youtube.com/watch?v=rJI5wQoDoAo';
const videoTitle = 'my_video.mp4';

ytdl(videoUrl, { quality: 'highestaudio' }).pipe(fs.createWriteStream(videoTitle));
