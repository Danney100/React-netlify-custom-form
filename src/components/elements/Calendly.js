import React from 'react';

// Source: https://stackoverflow.com/questions/53891698/embed-calendly-into-react

class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }

  componentWillUnmount() {
  }

  render(){
    return (
      <div>
        <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url={process.env.REACT_APP_CALENDLY_LINK}
            style={{ width: '100%', maxWidth: '1000px', height: '1100px' }} />
        </div>
      </div>
    );
  }
}

export default Calendly;