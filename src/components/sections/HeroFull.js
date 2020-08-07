import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFull extends React.Component {

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
      'hero-inner section-inner pb-0',
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
                The easiest way to operate data pipelines
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
                  Create your first scheduled, cloud-deployed data pipeline in 60 seconds.
                </p>
                <div className="reveal-from-top" data-reveal-delay="450">
                  <Button tag="a" color="white" href="/contact/">
                    Talk to Sales
                  </Button>
                </div>
              </div>
            </div>
            <div className="hero-figure reveal-from-bottom" data-reveal-delay="600">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/hero-image.svg')}
                alt="Hero"
                width={896} 
                height={504} />
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

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;