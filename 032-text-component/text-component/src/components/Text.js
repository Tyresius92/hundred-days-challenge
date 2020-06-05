import React from 'react';
import PropTypes from 'prop-types';

const Text = React.forwardRef(
  ({ className, variant, component, ...other }, ref) => {
    const variantMapping = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      subtitle1: 'h6',
      subtitle2: 'h6',
      body1: 'p',
      body2: 'p',
    };

    const Component =
      component || (variant ? variantMapping[variant] : 'p') || 'span';

    return <Component ref={ref} className={className} {...other} />;
  }
);

Text.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
  ]),
  component: PropTypes.node,
};

Text.defaultProps = {
  className: '',
  component: null,
  variant: null,
};

export default Text;
