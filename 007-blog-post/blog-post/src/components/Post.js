import React from 'react';
import { Typography } from '@material-ui/core';
import blogPostParagraph from './getFakeText';

const Post = () => (
  <div style={{ padding: '10px', backgroundColor: '#333', color: '#eee' }}>
    <Typography style={{ padding: '10px' }}>{blogPostParagraph}</Typography>
    <Typography style={{ padding: '10px' }}>{blogPostParagraph}</Typography>
    <Typography style={{ padding: '10px' }}>{blogPostParagraph}</Typography>
    <Typography style={{ padding: '10px' }}>{blogPostParagraph}</Typography>
  </div>
);

export default Post;
