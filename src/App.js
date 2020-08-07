import React from 'react';
import { Redirect, withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';


// Layouts
import LayoutHome from './layouts/LayoutHome';
import LayoutNoNav from './layouts/LayoutNoNav';
import LayoutSecondary from './layouts/LayoutSecondary';
import LayoutTertiary from './layouts/LayoutTertiary';

// Views 
import Home from './views/Home';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsOfService from './views/TermsOfService';
import ContactSales from './views/ContactSales';
import MessageReceived from './views/MessageReceived';
import ScheduleMeeting from './views/ScheduleMeeting';
import SupportAndAvailability from './views/SupportAndAvailability';
import EnterpriseTermsOfService from './views/EnterpriseTermsOfService';
import Newsletter from './views/Newsletter';
import NotFound from './views/NotFound';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutHome} />
            <AppRoute exact path="/contact" component={ContactSales} layout={LayoutTertiary} />
            <AppRoute exact path="/received" component={MessageReceived} layout={LayoutNoNav} />
            <AppRoute exact path="/meeting" component={ScheduleMeeting} layout={LayoutSecondary} />
            <AppRoute exact path="/updates" component={Newsletter} layout={LayoutSecondary} />
            <AppRoute exact path="/tos" component={TermsOfService} layout={LayoutSecondary} />
            <AppRoute exact path="/privacy" component={PrivacyPolicy} layout={LayoutSecondary} />
            <AppRoute exact path="/support-and-availability" component={SupportAndAvailability} layout={LayoutSecondary} />
            <AppRoute exact path="/enterprise-tos" component={EnterpriseTermsOfService} layout={LayoutSecondary} />
            <AppRoute exact path="/404" component={NotFound} layout={LayoutNoNav} />
            <Redirect to="/404" />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);