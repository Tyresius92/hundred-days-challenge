import React from 'react';
import VideoPlayer from './VideoPlayer';
import StyledCard from './StyledCard';

const VideoPlayerCard = () => (
  <StyledCard title="You found the secret monster!">
    <VideoPlayer />
  </StyledCard>
);

export default VideoPlayerCard;
