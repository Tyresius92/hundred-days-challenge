import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};

  &:hover {
    border: 3px solid lightblue;
  }
`;

const getVariantProps = variant => {
  switch (variant) {
    case 'primary':
      return {
        bgColor: '#53B3CB',
        color: '#ffffff',
      };
    case 'secondary':
      return {
        bgColor: '#F15946',
        color: '#ffffff',
      };

    case 'accent':
      return {
        bgColor: '#F9C22E',
        color: '#000000',
      };
    case 'warning':
      return {
        bgColor: '#E01A4F',
        color: '#ffffff',
      };
    default:
      return {
        bgColor: '#0C090D',
        color: '#ffffff',
      };
  }
};

const Button = ({ variant, ...props }) => {
  const variantProps = getVariantProps(variant);

  return <BaseButton {...props} {...variantProps} />;
};

const StyledButton = ({ variant, onClick, children, href, ...props }) => (
  <Button
    {...props}
    as={href ? 'a' : 'button'}
    onClick={onClick}
    variant={variant}
    href={href}
  >
    {children}
  </Button>
);

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'warning']),
};

StyledButton.defaultProps = {
  href: null,
  variant: null,
};

export default StyledButton;
