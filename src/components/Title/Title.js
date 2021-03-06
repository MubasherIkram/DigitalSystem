import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Text } from './Title.css';

const Title = ({
  children,
  as = 'span',
  noCaps,
  size,
  line,
  align,
  invert,
  to,
  href,
  html,
}) => {
  const TitleNode = to ? (
    <Link to={to}>{children}</Link>
  ) : href ? (
    <a href={href} rel="noopener">
      {children}
    </a>
  ) : (
    children
  );
  return html ? (
    <Text
      as={as}
      size={size}
      line={line}
      align={align}
      noCaps={noCaps}
      invert={invert}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  ) : (
    <Text
      as={as}
      size={size}
      line={line}
      align={align}
      noCaps={noCaps}
      invert={invert}
    >
      {TitleNode}
    </Text>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  line: PropTypes.bool,
  size: PropTypes.oneOf(['xl', 'large', 'small']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  invert: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  html: PropTypes.bool,
  noCaps: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
};

Title.defaultProps = {
  align: 'center',
};

export { Title };
