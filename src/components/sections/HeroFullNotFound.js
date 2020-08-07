import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFullNotFound extends React.Component {

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
                Page not found
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
                  Double check the url spelling!
                </p>
              </div>
            </div>
            <Image
              src={require('./../../assets/images/404-4.svg')}
              alt="Team member 01"
              width={600}
              height={600} />
          </div>
        </div>
      </section>
    );
  }
}

const sectionStyle = {
  overflow: 'hidden'
}

HeroFullNotFound.propTypes = propTypes;
HeroFullNotFound.defaultProps = defaultProps;

export default HeroFullNotFound;