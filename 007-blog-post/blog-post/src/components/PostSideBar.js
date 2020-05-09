import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const PostSideBar = ({ title, author }) => (
  <div
    style={{
      padding: '20px',
      backgroundColor: '#555',
      height: '100%',
      color: '#fff',
    }}
  >
    <Typography variant="h4">{title}</Typography>
    <div>
      <Typography>By {author}</Typography>
    </div>
  </div>
);

PostSideBar.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default PostSideBar;
