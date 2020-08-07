import React from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Input from '../elements/Input';
import SectionHeader from '../sections/partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroContactSales extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      message: '',
    }
  }

  createFormDataObj = data => {
    const formData = new FormData();
    Object.keys(data).forEach(k => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = this.state;
    const data = {
      'form-name': 'contact',
      name: name,
      email: email,
      message: message,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(this.createFormDataObj(data)).toString(),
    })
      .then(() => this.props.history.push('/received'))
      .catch(error => {
        console.log(error);
      });
  };

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
    const {name, email, message} = this.state

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
                Talk to Us
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
                  Have questions about Blossom or want to see a demo? 
                  <br/>Send us a note! We'd love to chat.
                </p>
              </div>
            </div>
            <div className="hero-figure reveal-from-bottom" data-reveal-delay="600">
              <div className="container-xs">
                <SectionHeader data="Form Header" className="center-content" />
                <form onSubmit={this.handleSubmit} style={formStyle} name="contact" className="has-shadow" data-netlify="true" >
                  <Input type="hidden" name="form-name" value="contact" />
                  <div className="mb-24">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={name}
                      onChange={e => this.setState({name: e.target.value})}
                      labelHidden>
                    </Input>
                  </div>
                  <div className="mb-24">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your best email"
                      value={email}
                      onChange={e => this.setState({email: e.target.value})}
                      labelHidden
                      required>
                    </Input>
                  </div>
                  <div className="mb-24">
                    <Input
                      type="textarea"
                      name="message"
                      placeholder="Your message for us"
                      value={message}
                      onChange={e => this.setState({message: e.target.value})}
                      required/>
                  </div>
                  <div className="mt-24">
                    <Button type="submit" color="primary" wide>Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const formStyle = {
  maxWidth: '420px',
  margin: '0 auto',
  padding: '50px',
  backgroundColor: 'white'
}

const sectionStyle = {
  overflow: 'hidden'
}

HeroContactSales.propTypes = propTypes;
HeroContactSales.defaultProps = defaultProps;

export default withRouter(HeroContactSales);