import React from 'react';
import PropTypes from 'prop-types';
import { Container, Inner } from './Section.css';
import { Title } from 'components';

const Section = ({
  title,
  children,
  bg,
  top,
  bottom,
  flipTop,
  as,
  style,
  width,
}) => (
  <Container
    bg={bg}
    top={top}
    bottom={bottom}
    flipTop={flipTop}
    as={as}
    style={style}
  >
    <Inner width={width}>
      {title && (
        <Title size="large" as="h2" line center invert={bg === 'purple'}>
          {title}
        </Title>
      )}
      {children}
    </Inner>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  bg: PropTypes.oneOf(['purple', 'grey', 'white']),
  bottom: PropTypes.bool,
  top: PropTypes.bool,
  flipTop: PropTypes.bool,
  as: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.number,
};

Section.defaultProps = {
  bg: 'white',
  as: 'section',
  width: 75,
};

export { Section };
