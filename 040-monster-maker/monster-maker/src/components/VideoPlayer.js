import React from 'react';

const VideoPlayer = () => (
  <iframe
    width="75%"
    height="350"
    title="purplePeoplePlayer"
    src="https://www.youtube.com/embed/Rx47qrH1GRs?autoplay=1"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export default VideoPlayer;
