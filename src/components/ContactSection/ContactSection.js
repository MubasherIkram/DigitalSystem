import React from 'react';
import PropTypes from 'prop-types';
import { Section, ContactForm, Card, Paragraph, IconTitle } from 'components';
import { Wrapper, ContactWrapper } from './ContactSection.css';
const ContactSection = ({
  title,
  contact,
  description,
  subtitle,
  children,
  bg,
  id,
  invert,
  ...props
}) => {
  return (
    <Section title={title} bg={bg} {...props}>
      <Wrapper twoCol={description || subtitle || children}>
        {subtitle && (
          <div>
            <Card
              title={subtitle}
              style={{ gridArea: 'message' }}
              description={description}
            />
            {contact && (
              <ContactWrapper>
                <IconTitle
                  invert={invert}
                  icon="phone"
                  href="tel:888-90-Digital"
                >
                  888-90-Digital
                </IconTitle>
                <IconTitle
                  invert={invert}
                  icon="email"
                  href="mailto:info@digitalsystemsav.com"
                >
                  info@digitalsystemsav.com
                </IconTitle>
              </ContactWrapper>
            )}
          </div>
        )}
        {!subtitle && description && (
          <Paragraph style={{ margin: 'auto' }}>{description}</Paragraph>
        )}
        {children && children}
        <ContactForm id={id} />
      </Wrapper>
    </Section>
  );
};
ContactSection.defaultProps = {
  title: 'Get in Touch',
  invert: true,
};
ContactSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  contact: PropTypes.bool,
  bg: PropTypes.string,
  invert: PropTypes.bool,
};

export { ContactSection };
