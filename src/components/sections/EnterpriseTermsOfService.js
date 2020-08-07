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
BY CLICKING ON THE “ACCEPT”, “SIGN UP” OR “SUBMIT” BUTTON ON THE ONLINE ORDER FORM PRESENTED BY CANVAS TECH INC. (BLOSSOM), OR BY MUTUALLY EXECUTING ONE OR MORE ORDER FORMS WITH BLOSSOM WHICH REFERENCE THESE TERMS (EACH, AN “ORDER FORM”), YOU OR THE ENTITY OR COMPANY THAT YOU REPRESENT (“YOU,” “YOUR,” “YOURS” OR “CUSTOMER”) ARE UNCONDITIONALLY CONSENTING TO BE BOUND BY AND ARE BECOMING A PARTY TO THESE ENTERPRISE TERMS (TOGETHER WITH ALL ORDER FORMS, THE “AGREEMENT”), AND ARE HEREBY REPRESENTING AND WARRANTING THAT YOU ARE AUTHORIZED TO BIND CUSTOMER. YOUR DOWNLOAD OR CONTINUED USE OF ANY PORTION OF THE SERVICES (AS DEFINED BELOW) SHALL ALSO CONSTITUTE ASSENT TO THE TERMS OF THE AGREEMENT. IF YOU DO NOT UNCONDITIONALLY AGREE TO ALL OF THE TERMS OF THIS AGREEMENT, CLICK THE “DECLINE” BUTTON AND YOU WILL HAVE NO RIGHT TO USE THE SERVICES. IF THESE TERMS ARE CONSIDERED AN OFFER, ACCEPTANCE IS EXPRESSLY LIMITED TO THESE TERMS TO THE EXCLUSION OF ALL OTHER TERMS.

### 1. Order Forms; Access to the Service

Upon submission or mutual execution as outlined above, each Order Form shall be incorporated into and form a part of the Agreement. Subject to Customer’s compliance with the terms and conditions of this Agreement (including any limitations and restrictions set forth on the applicable Order Form) Blossom grants Customer the right to access and use the services specified in each Order Form (collectively, the “Service,” or “Services”) during the applicable Order Form Term (as defined below) for the internal business purposes of Customer, only as provided herein and only in accordance with Blossom' applicable official user documentation (the “Documentation”).

### 2. Implementation

Upon payment of any applicable fees set forth in each Order Form, Blossom agrees to use reasonable commercial efforts to provide standard implementation assistance for the Service only if and to the extent such assistance is set forth on such Order Form (“Implementation Assistance”). If Blossom provides Implementation Assistance in excess of any agreed-upon hours estimate, or if Blossom otherwise provides additional services beyond those agreed in an Order Form, Customer will pay Blossom at its then-current hourly rates for consultation.

### 3. Support; Service Levels

Blossom will provide support and uptime for the Service in accordance with (i) the support package selected by Customer on the applicable Order Form (if any) and (ii) Blossom' then-current standard Support and Availability Policy set forth at www.blossom.cloud/support-and-availability.

### 4. Service Updates

From time to time, Blossom may provide upgrades, patches, enhancements, or fixes for the Services to its customers generally without additional charge (“Updates”), and such Updates will become part of the Services and subject to this Agreement; provided that Blossom shall have no obligation under this Agreement or otherwise to provide any such Updates. Customer understands that Blossom may cease supporting old versions or releases of the Services at any time in its sole discretion; provided that Blossom shall use commercially reasonable efforts to give Customer sixty (60) days prior notice of any major changes.

### 5. Ownership; Restrictions; Feedback

As between the parties, Blossom retains all right, title, and interest in and to the Services, and all software, products, works, and other intellectual property and moral rights related thereto or created, used, or provided by Blossom for the purposes of this Agreement, including any copies and derivative works of the foregoing. Any software which is distributed or otherwise provided to Customer hereunder (including without limitation any software identified on an Order Form) shall be deemed a part of the “Services” and subject to all of the terms and conditions of this Agreement. No rights or licenses are granted except as expressly and unambiguously set forth in this Agreement. Customer may from time to time provide suggestions, comments or other feedback to Blossom with respect to the Service (“Feedback”). Feedback, even if designated as confidential by Customer, shall not create any confidentiality obligation for Blossom notwithstanding anything else. Customer shall, and hereby does, grant to Blossom a nonexclusive, worldwide, perpetual, irrevocable, transferable, sublicensable, royalty-free, fully paid up license to use and exploit the Feedback for any purpose. Nothing in this Agreement will impair Blossom' right to develop, acquire, license, market, promote or distribute products, software or technologies that perform the same or similar functions as, or otherwise compete with any products, software or technologies that Customer may develop, produce, market, or distribute.

### 6. Fees; Payment

Customer shall pay Blossom fees for the Service as set forth in each Order Form (“Fees”). Unless otherwise specified in an Order Form, all Fees shall be invoiced annually in advance and all invoices issued under this Agreement are payable in U.S. dollars within thirty (30) days from date of invoice. Past due invoices are subject to interest on any outstanding balance of the lesser of 1.5% per month or the maximum amount permitted by law. Customer shall be responsible for all taxes associated with Service (excluding taxes based on Blossom' net income). All Fees paid are non-refundable and are not subject to set-off.

### 7. Restrictions

Except as expressly set forth in this Agreement, Customer shall not (and shall not permit any third party to), directly or indirectly: (i) reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, object code, or underlying structure, ideas, or algorithms of the Service (except to the extent applicable laws specifically prohibit such restriction); (ii) modify, translate, or create derivative works based on the Service; (iii) copy, rent, lease, distribute, pledge, assign, or otherwise transfer or encumber rights to the Service; (iv) use the Service for the benefit of a third party; (v) remove or otherwise alter any proprietary notices or labels from the Service or any portion thereof; (vi) use the Service to build an application or product that is competitive with any Blossom product or service; (vii) interfere or attempt to interfere with the proper working of the Service or any activities conducted on the Service; or (viii) bypass any measures Blossom may use to prevent or restrict access to the Service (or other accounts, computer systems or networks connected to the Service). Customer is responsible for all of Customer’s activity in connection with the Service, including but not limited to uploading Customer Data (as defined below) onto the Service. Customer (i) shall use the Service in compliance with all applicable local, state, national and foreign laws, treaties and regulations in connection with Customer’s use of the Service (including those related to data privacy, international communications, export laws and the transmission of technical or personal data laws), and (ii) shall not use the Service in a manner that violates any third party intellectual property, contractual or other proprietary rights.

### 8. Customer Data

For purposes of this Agreement, “Customer Data” shall mean any data, information or other material provided, uploaded, or submitted by Customer to the Service in the course of using the Service. Customer shall retain all right, title and interest in and to the Customer Data, including all intellectual property rights therein. Customer, not Blossom, shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all Customer Data. Blossom shall use commercially reasonable efforts to maintain the security and integrity of the Service and the Customer Data. Blossom is not responsible to Customer for unauthorized access to Customer Data or the unauthorized use of the Service unless such access is due to Blossom' gross negligence or willful misconduct. Customer is responsible for the use of the Service by any person to whom Customer has given access to the Service, even if Customer did not authorize such use. Customer agrees and acknowledges that Customer Data may be irretrievably deleted if Customer’s account is ninety (90) days or more delinquent. Notwithstanding anything to the contrary, Customer acknowledges and agrees that Blossom may (i) internally use and modify (but not disclose) Customer Data for the purposes of (A) providing the Service to Customer and (B) generating Aggregated Anonymous Data (as defined below), and (ii) freely use and make available Aggregated Anonymous Data for Blossom' business purposes (including without limitation, for purposes of improving, testing, operating, promoting and marketing Blossom' products and services). “Aggregated Anonymous Data” means data submitted to, collected by, or generated by Blossom in connection with Customer’s use of the Service, but only in aggregate, anonymized form which can in no way be linked specifically to Customer.

### 9. Term; Termination

This Agreement shall commence upon the effective date set forth in the first Order Form, and, unless earlier terminated in accordance herewith, shall last until the expiration of all Order Form Terms. For each Order Form, the “Order Form Term” shall begin as of the effective date set forth on such Order Form, and unless earlier terminated as set forth herein, (x) shall continue for the initial term specified on the Order Form (the “Initial Order Form Term”), and (y) following the Initial Order Form Term, shall automatically renew for additional successive periods of one year each (each, a “Renewal Order Form Term”) unless either party notifies the other party of such party’s intention not to renew no later than thirty (30) days prior to the expiration of the Initial Order Form Term or then-current Renewal Order Form Term, as applicable. In the event of a material breach of this Agreement by either party, the non-breaching party may terminate this Agreement by providing written notice to the breaching party, provided that the breaching party does not materially cure such breach within thirty (30) days of receipt of such notice. Without limiting the foregoing, Blossom may suspend or limit Customer’s access to or use of the Service if (i) Customer’s account is more than sixty (60) days past due, or (ii) Customer’s use of the Service results in (or is reasonably likely to result in) damage to or material degradation of the Service which interferes with Blossom' ability to provide access to the Service to other customers; provided that in the case of subsection (ii): (a) Blossom shall use reasonable good faith efforts to work with Customer to resolve or mitigate the damage or degradation in order to resolve the issue without resorting to suspension or limitation; (b) prior to any such suspension or limitation, Blossom shall use commercially reasonable efforts to provide notice to Customer describing the nature of the damage or degradation; and (c) Blossom shall reinstate Customer’s use of or access to the Service, as applicable, if Customer remediates the issue within thirty (30) days of receipt of such notice. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, accrued payment obligations, ownership provisions, warranty disclaimers, indemnity and limitations of liability.

### 10. Indemnification

Each party (“Indemnitor”) shall defend, indemnify, and hold harmless the other party, its affiliates and each of its and its affiliates’ employees, contractors, directors, suppliers and representatives (collectively, the “Indemnitee”) from all liabilities, claims, and expenses paid or payable to an unaffiliated third party (including reasonable attorneys’ fees) (“Losses”), that arise from or relate to any claim that (i) the Customer Data or Customer’s use of the Service (in the case of Customer as Indemnitor), or (ii) the Service (in the case of Blossom as Indemnitor), infringes, violates, or misappropriates any third party intellectual property or proprietary right. Each Indemnitor’s indemnification obligations hereunder shall be conditioned upon the Indemnitee providing the Indemnitor with: (i) prompt written notice of any claim (provided that a failure to provide such notice shall only relieve the Indemnitor of its indemnity obligations if the Indemnitor is materially prejudiced by such failure); (ii) the option to assume sole control over the defense and settlement of any claim (provided that the Indemnitee may participate in such defense and settlement at its own expense); and (iii) reasonable information and assistance in connection with such defense and settlement (at the Indemnitor’s expense). The foregoing obligations of Blossom do not apply with respect to the Service or any information, technology, materials or data (or any portions or components of the foregoing) to the extent (i) not created or provided by Blossom (including without limitation any Customer Data), (ii) made in whole or in part in accordance to Customer specifications, (iii) modified after delivery by Blossom, (iv) combined with other products, processes or materials not provided by Blossom (where the alleged Losses arise from or relate to such combination), (v) where Customer continues allegedly infringing activity after being notified thereof or after being informed of modifications that would have avoided the alleged infringement, or (vi) Customer’s use of the Service is not strictly in accordance herewith.

### 11. Disclaimer

EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” AND ARE WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE, USAGE OF TRADE, OR COURSE OF DEALING, ALL OF WHICH ARE EXPRESSLY DISCLAIMED.

### 12. Limitation of Liability

EXCEPT FOR THE PARTIES’ INDEMNIFICATION OBLIGATIONS, IN NO EVENT SHALL EITHER PARTY, NOR ITS DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS OR CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE OR ANY OTHER LEGAL OR EQUITABLE THEORY WITH RESPECT TO THE SUBJECT MATTER OF THIS AGREEMENT (I) FOR ANY LOST PROFITS, DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER, SUBSTITUTE GOODS OR SERVICES (HOWEVER ARISING), (II) FOR ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE (REGARDLESS OF THE SOURCE OF ORIGINATION), OR (III) FOR ANY DIRECT DAMAGES IN EXCESS OF (IN THE AGGREGATE) THE FEES PAID (OR PAYABLE) BY CUSTOMER TO BLOSSOM HEREUNDER IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO A CLAIM HEREUNDER.

### 13. Miscellaneous

This Agreement represents the entire agreement between Customer and Blossom with respect to the subject matter hereof, and supersedes all prior or contemporaneous communications and proposals (whether oral, written or electronic) between Customer and Blossom with respect thereto. The Agreement shall be governed by and construed in accordance with the laws of the State of California, excluding its conflicts of law rules, and the parties consent to exclusive jurisdiction and venue in the state and federal courts located in San Francisco, California. All notices under this Agreement shall be in writing and shall be deemed to have been duly given when received, if personally delivered or sent by certified or registered mail, return receipt requested; when receipt is electronically confirmed, if transmitted by facsimile or e-mail; or the day after it is sent, if sent for next day delivery by recognized overnight delivery service. Notices must be sent to the contacts for each party set forth on the Order Form. Either party may update its address set forth above by giving notice in accordance with this section. Except as otherwise provided herein, this Agreement may be amended only by a writing executed by both parties. Except for payment obligations, neither party shall be liable for any failure to perform its obligations hereunder where such failure results from any cause beyond such party’s reasonable control, including, without limitation, the elements; fire; flood; severe weather; earthquake; vandalism; accidents; sabotage; power failure; denial of service attacks or similar attacks; Internet failure; acts of God and the public enemy; acts of war; acts of terrorism; riots; civil or public disturbances; strikes lock-outs or labor disruptions; any laws, orders, rules, regulations, acts or restraints of any government or governmental body or authority, civil or military, including the orders and judgments of courts. Neither party may assign any of its rights or obligations hereunder without the other party’s consent; provided that (i) either party may assign all of its rights and obligations hereunder without such consent to a successor-in-interest in connection with a sale of substantially all of such party’s business relating to this Agreement, and (ii) Blossom may utilize subcontractors in the performance of its obligations hereunder. No agency, partnership, joint venture, or employment relationship is created as a result of this Agreement and neither party has any authority of any kind to bind the other in any respect. In any action or proceeding to enforce rights under this Agreement, the prevailing party shall be entitled to recover costs and attorneys’ fees. If any provision of this Agreement is held to be unenforceable for any reason, such provision shall be reformed only to the extent necessary to make it enforceable. The failure of either party to act with respect to a breach of this Agreement by the other party shall not constitute a waiver and shall not limit such party’s rights with respect to such breach or any subsequent breaches.
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
      title: 'Blossom Enterprise Terms of Service',
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