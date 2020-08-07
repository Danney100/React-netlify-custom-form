import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import Clients from '../components/sections/Clients';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull invertColor className="illustration-section-01" />
        <Clients topDivider bottomDivider />
        <FeaturesSplit id="how-it-works" invertMobile imageFill />
        <FeaturesTiles id="features" topDivider />
        <Pricing id="pricing" topDivider pricingSwitcher />
        <Cta topDivider split className="reveal-from-top" />
      </React.Fragment>
    );
  }
}

export default Home;