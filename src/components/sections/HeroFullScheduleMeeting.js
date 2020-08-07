import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Calendly from '../elements/Calendly';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroContactSales extends React.Component {

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
                Schedule a meeting with our CEO
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
                  Have questions about Blossom or want to see a demo? 
                  <br/>Book time with our CEO! He'd love to chat.
                </p>
              </div>
            </div>
            <div className="hero-figure reveal-from-bottom" data-reveal-delay="600">
              <Calendly />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const sectionStyle = {
  overflow: 'hidden'
}

HeroContactSales.propTypes = propTypes;
HeroContactSales.defaultProps = defaultProps;

export default HeroContactSales;