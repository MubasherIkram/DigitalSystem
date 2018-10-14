import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Icon.css.js';
const icons = {
  warning: [
    {
      path:
        'M981.333 746.667l-358.4-605.867c-17.067-29.867-46.933-51.2-81.067-59.733s-68.267-4.267-98.133 12.8c-17.067 8.533-34.133 25.6-42.667 42.667 0 0 0 0 0 0l-358.4 610.133c-34.133 59.733-12.8 140.8 46.933 174.933 17.067 12.8 38.4 17.067 59.733 17.067h725.333c34.133 0 68.267-12.8 89.6-38.4 25.6-25.6 38.4-55.467 38.4-89.6-4.267-21.333-8.533-46.933-21.333-64zM904.533 840.533c-8.533 8.533-21.333 12.8-29.867 12.8h-725.333c-8.533 0-12.8 0-21.333-4.267-21.333-12.8-25.6-38.4-17.067-59.733l362.667-601.6c4.267-4.267 8.533-12.8 12.8-12.8 21.333-12.8 46.933-4.267 59.733 12.8l362.667 601.6c4.267 4.267 4.267 12.8 4.267 21.333 4.267 12.8-4.267 21.333-8.533 29.867z',
      color: '#ffffff',
    },
    {
      path:
        'M512 341.333c-25.6 0-42.667 17.067-42.667 42.667v170.667c0 25.6 17.067 42.667 42.667 42.667s42.667-17.067 42.667-42.667v-170.667c0-25.6-17.067-42.667-42.667-42.667z',
      color: '#ffffff',
    },
    {
      path:
        'M482.133 695.467c-8.533 8.533-12.8 17.067-12.8 29.867s4.267 21.333 12.8 29.867c8.533 8.533 17.067 12.8 29.867 12.8s21.333-4.267 29.867-12.8c8.533-8.533 12.8-21.333 12.8-29.867s-4.267-21.333-12.8-29.867c-17.067-17.067-42.667-17.067-59.733 0z',
      color: '#ffffff',
    },
  ],
};

const Icon = ({ icon, size, className, color }) => {
  const iconObject = icons[icon] ? icons[icon] : icons['warning'];
  const paths = iconObject.map((shape, i) => (
    <path key={i} d={shape.path} fill={color ? color : shape.color} />
  ));
  return (
    <Wrapper size={size} color={color} className={className}>
      <svg viewBox="0 0 1024 1024">{paths}</svg>
    </Wrapper>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large', 'jumbo']),
  color: PropTypes.string,
  className: PropTypes.string,
};

export { Icon };
