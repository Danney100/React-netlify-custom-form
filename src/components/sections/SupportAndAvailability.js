import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Markdown from "react-markdown";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const markdown = `
This Support, Security and Availability Policy (the “Policy”) sets forth the policies and procedures with respect to services (the “Service”) provided by Blossom to a customer (“Customer”) pursuant to a separate Service agreement between Canvas Tech Inc. (Blossom) and Customer (a “Customer Agreement”).

### Summary:

As further described below, Blossom will use commercially reasonable efforts to: (i) provide Customer with 99.9% availability to the Service (the “Service Availability”); and (ii) provide standard support to Customer.

### Availability:

If the Service becomes substantially unavailable to Customer due to defects with the Service, Blossom will respond to Customer (i) within eight (8) hours from Customer’s notification to Blossom of such unavailability, if during normal business hours (Monday-Friday, 8:00am – 6:00pm Pacific), or (ii) within eight (8) hours of the start of the next business day, if outside of normal business hours. The Service Availability will be measured on a monthly basis, with all hours weighted equally, but the Service Availability measurement will exclude reasonable scheduled downtime for system maintenance as well as any downtime or performance issues resulting from third party connections, services or utilities or other reason beyond Blossom' control (including without limitation, acts of God, acts of government, flood, fire, earthquakes, civil unrest, acts of terror, strikes or other labor problems (other than those involving Blossom employees), computer, telecommunications, Internet service provider or hosting facility failures or delays involving hardware, software or power systems not within Blossom' possession or reasonable control, and denial of service attacks). If the Service is unavailable to Customer due to defects with the Service beyond the Service Availability metric, then, as Customer’s sole and exclusive remedy (and Blossom' sole liability), Blossom will provide Customer a credit for the subsequent Service billing cycle as follows:

In order to receive downtime credit, Customer must notify Blossom support within seventy-two (72) hours from the time of downtime, and failure to provide such notice will forfeit the right to receive downtime credit. All credits provided hereunder are nonrefundable. If Customer elects not to renew the Agreement, such that the above credit cannot be applied, Customer will have the option to receive up to one free month of Service as its sole remedy in lieu of such credit.

### Support:

Blossom will provide support to customer for defects with the Service in accordance with the Service Plan selected by Customer. Any other support services are outside of the scope of this policy and must be separately agreed in writing by Customer and Blossom. Customer may designate up to 3 support contacts (“Designated Support Contacts”), and all support requests must come through the Designated Support Contacts. Customer may update the Designated Support Contacts by providing notice to Blossom.
`

class PrivacyPolicy extends React.Component {

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
      'signin section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'signin-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Blossom Support and Availability Policy',
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader tag="h1" data={sectionHeader} className="center-content" />
            <Markdown source={markdown} />
          </div>
        </div>
      </section>
    );
  }
}

PrivacyPolicy.propTypes = propTypes;
PrivacyPolicy.defaultProps = defaultProps;

export default PrivacyPolicy;