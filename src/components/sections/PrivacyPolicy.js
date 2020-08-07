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
Canvas Tech Inc. (“Blossom”) knows that you care about how your personal information is used and shared, and we take your privacy seriously. Please read the following to learn more about our privacy practices (“Privacy Policy”). By using the Blossom services, or visiting www.blossom.cloud, (collectively, the "Services") you accept the practices outlined in this Privacy Policy.

### What does this privacy policy cover?

This Privacy Policy covers Blossom’ treatment of personally identifiable information ("Personal Information") that Blossom gathers when you access or use the Services. This Privacy Policy does not cover use of information by third parties we do not control.

### What personal information does Blossom collect?

We collect the following types of information from our end users:

**Information You Provide to Us:**

We may receive and store any information you enter into and/or otherwise use the Services. For example, name, company name, email address, IP address, etc.

**Cookies:**

We may implement cookies on the website. A cookie is a small amount of data, which often includes an anonymous unique identifier that is sent to your browser from a web site’s computers and stored on your computer’s hard drive. Cookies may be required to use website. We use cookies to record current session information, but do not use permanent cookies.

### How does Blossom use personal information?

We only use your Personal Information internally - to: (i) provide Services to our Customers (meaning the websites that have implemented our Services) and (ii) further develop and improve such Services.

### Will Blossom share any of the personal information it receives?

Personal Information about our end users is an integral part of our business. We do not rent, sell or disclose your Personal Information to anyone (including our Customers) – except for the following limited purposes:

Agents: We may employ other companies and people to perform tasks on our behalf - meaning they are helping us provide our Services. We may share your Personal Information with such companies/persons solely as necessary for them to help us provide the Services. Unless we tell you differently, Blossom’ agents do not have any right to use Personal Information we share with them beyond what is necessary to assist us.

Business Transfers: In some cases, we may choose to buy or sell assets. In these types of transactions, customer information is typically one of the business assets that are transferred. Moreover, if Blossom, or substantially all of its assets were acquired, or in the unlikely event that Blossom goes out of business or enters bankruptcy, customer information would be one of the assets that is transferred or acquired by a third party.

Protection of Blossom and Others: We may release Personal Information when we believe in good faith that release is necessary to comply with the law; enforce or apply our conditions of use and other agreements; or protect the rights, property, or safety of Blossom, our employees, our users, or others.

With Your Consent: Except as set forth above, you will be notified when your Personal Information may be shared with third parties, and will be able to prevent the sharing of this information.

### Conditions of use

If you decide to access or use the Services, any possible dispute over privacy is subject to this Privacy Policy and our Terms of Use, including limitations on damages, arbitration of disputes, and application of California state law.

### What choices do I have?

You may request deletion of your Personal Information by sending an e-mail to [help@blossom.cloud](mailto:help@blossom.cloud). Please note that some information may remain in our records after deletion of your account.

### Changes to this policy

Blossom may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. If we make changes in the way we use Personal Information, we will notify you by email. Users are bound by any changes to the Privacy Policy when he or she uses the Services after such notice has been provided.

### Questions or concerns

If you have any questions or concerns regarding privacy in connection with the Services, please send us a detailed message at [help@blossom.cloud](mailto:help@blossom.cloud). We will make every effort to resolve your concerns.
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
      title: 'Privacy Policy',
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