import React from 'react';
import PropTypes from 'prop-types';
import classes from './ButtonLink.module.css';
import clsx from 'clsx';

const ButtonLink = (props) => {
  const {children, href, fullWidth = false} = props;
  return (
    <a
      href={href}
      className={clsx(classes.root, fullWidth && classes.fullWidth)}
    >
      {children}
    </a>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
}

export default ButtonLink;