import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Calendly from '../elements/Calendly';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFullMessageReceived extends React.Component {

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
            <Image
              src={require('./../../assets/images/message_received-3.svg')}
              alt="Team member 01"
              width={280}
              height={280} />
            <div className="hero-content" style={heroStyle}>
              <h1 className="mt-0 mb-12 reveal-from-top" data-reveal-delay="150">
                Message received!
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
                  We'll get back to you as quick as we can.
                  <br></br>
                  <br></br>
                  In the meantime, consider meeting with our CEO today!
                </p>
              </div>
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

const heroStyle = {
  marginTop: '30px'
}

HeroFullMessageReceived.propTypes = propTypes;
HeroFullMessageReceived.defaultProps = defaultProps;

export default HeroFullMessageReceived;