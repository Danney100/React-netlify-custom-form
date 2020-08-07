import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from '../sections/partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFullNewsletter extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
        style={sectionStyle}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1 className="mt-0 mb-12 reveal-from-top" data-reveal-delay="150">
                Get Updates
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
                  Stay up to date with all the latest Blossom news.
                </p>
              </div>
            </div>
            <div className="hero-figure reveal-from-bottom" data-reveal-delay="600">
              <div className="container-xs">
                <SectionHeader data="Form Header" className="center-content" />
                <iframe title="SendGrid" style={iframeStyle} src="https://cdn.forms-content.sg-form.com/fc92a8a9-c66f-11ea-87ee-ba35e0ec8ec5" className="has-shadow"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const iframeStyle = {
  border: 'solid 0px #dee0e0',
  width: '580px',
  height: '375px',
  background: 'white',
}

const sectionStyle = {
  overflow: 'hidden'
}

HeroFullNewsletter.propTypes = propTypes;
HeroFullNewsletter.defaultProps = defaultProps;

export default HeroFullNewsletter;