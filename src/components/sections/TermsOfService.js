import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Markdown from "react-markdown";

const markdown = `
This is a contract between you (“you,” “You,” or “User”) and Canvas Tech Inc. (together with its officers, directors, employees, agents, subsidiaries, and affiliates, "Blossom," "we," or "us"), applicable when you use or access sites, services, applications, tools, features, products, and content provided by Blossom, in existence now or in the future (“Blossom Services,” “Blossom," “Service,” or “Services”). Our Privacy Policy explains what personal information we collect and how it’s used and shared, and this Agreement outlines some of your responsibilities when using the Services.

### These Terms Are A Binding Agreement

By using or accessing Blossom Services, you're agreeing to these Terms, our Privacy Policy, and our Acceptable Use Policy (collectively, this “Agreement”). If you're using the Services for an organization, you're agreeing to this Agreement on behalf of that organization, and represent and warrant that you can do so. If you don’t agree to all the terms in this Agreement, you may not use or access the Services.

Please read this Agreement carefully! It includes important information about your legal rights, and covers areas such as automatic subscription renewals, warranty disclaimers, limitations of liability, resolution of disputes by arbitration and a class action waiver. Blossom reserves the right, at its sole discretion, to modify or replace any of the terms or conditions of this Agreement at any time. It is User’s responsibility to check this Agreement periodically for changes. User’s continued use of the Services following the posting of any changes to this Agreement constitutes acceptance of those changes.

We’ve tried to make this Agreement fair and straightforward, but feel free to contact us. We want your feedback and suggestions on how to make our policies better in support of our mission. (Email your input to [help@blossom.cloud](mailto:help@blossom.cloud).)

### I. Your Content

You may use the Blossom Services only if you can form a binding contract with Blossom, and only in compliance with this Agreement and all applicable local, state, national, and international laws, rules and regulations. The Services are not available to any users previously removed by Blossom.

1. **Real identity Requirement.** All Blossom users must use their real names and identities when participating in the Blossom community. That means that if you register as a Blossom user (which you are required to do to access Blossom Services), you must provide Blossom with accurate registration information, including your real name and email address. We reserve the right to cancel or refuse registration at our discretion, and users should expect that their subscription may be terminated without notice if we suspect a user has entered personal information that is inaccurate, deceptive, or designed to hide the user's true identity. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You must notify Blossom immediately of any breach of security or unauthorized use of your account. Blossom will not be liable for any losses caused by any unauthorized use of your account. You may never use another user's account without permission.
2. **Different Accounts.** We may maintain different types of accounts for different types of users. If you open a Blossom account on behalf of a company, organization, or other entity, then: (a) "you" or “User” includes you and that entity, and (b) you represent and warrant that you are an authorized representative of the entity with the authority to bind the entity to this Agreement, and that you agree to this Agreement on the entity's behalf.
3. **Access Restrictions.** Without limitation to any other available contractual, legal or equitable remedies, we reserve the right to revoke, suspend or terminate, without notice, any user's access to one or more (or all) of the Blossom Services upon any violation or suspected violation of the Terms of Services.
4. **Safety.** Please safeguard your Account and make sure others don't have access to your Account or password. User shall not, and shall ensure that its personnel, including other authorized Users, do not share passwords or access or use Blossom except to the extent expressly permitted by this Agreement, or as otherwise expressly permitted in writing by Blossom. You must immediately notify us of any actual or suspected loss, theft or unauthorized use of your Account or password. You're solely responsible for any activity on your Account. We’re not liable for any acts or omissions by you in connection with your Account.
5. **Age Restrictions.** The Services are not intended for and may not be used by children under the age of 13. By using the Services, you represent that you're at least 13. Also, if you’re under the age of 18, you must have your parent or guardian’s consent to this Agreement, and they may need to enter into this Agreement on your behalf (depending on where you live).
6. **Allowable Use.** You represent that you own all rights to your User Content or otherwise have (and will continue to have) all rights and permissions to legally use, share, display, transfer, and license your User Content via the Services. If we use your User Content in the ways contemplated in this Agreement, you represent that such use will not infringe or violate the rights of any third-party, including without limitation any copyrights, trademarks, privacy rights, publicity rights, contract rights or any other intellectual property or proprietary rights. Content on the Services may be protected by others' intellectual property or other rights, so please don't copy, upload, download or share content unless you have the right to do so.
7. **Follow Our Rules.** You're responsible for your conduct and User Content, and you must comply with our Acceptable Use Policy. We may review your conduct and User Content for compliance with these Terms and our Acceptable Use Policy. That said, we have no obligation to do so. We’re not responsible for User Content.
8. **Follow The Law.** You represent that your use of the Services is not contrary to law, including without limitation applicable US export controls, regulations, and sanctions.
9. **Auxiliary Obligations.** You are solely responsible for your interactions with Blossom and any other Blossom users. We reserve the right, but have no obligation, to monitor disputes between you and other users. Blossom shall have no liability for your interactions with other users, or for any user's action or inaction.
10. **Technical Obligations.** Blossom uses commercially reasonable efforts to make the Services available 24 hours a day, 7 days a week. You acknowledge and agrees that such availability is subject to: (a) planned maintenance downtime, and (b) any unavailability caused by urgent maintenance or circumstances beyond Blossom' control. Blossom will use commercially reasonable efforts to provide you support as needed. You are responsible for obtaining and maintaining any equipment or ancillary services needed to connect to or to access the Services, including, without limitation, modems, hardware, software, and long distance or local telephone service. You are responsible for ensuring that such equipment or ancillary services are compatible with the Services.
12. **Technical Usage Restrictions.** By using Blossom Services you agree not to engage in any of the following prohibited activities:
    * You will not engage in any bulk downloading or automatic scraping of the materials in Blossom Services. You will not use any “deep-link,” “scraper,” “robot,” “spider,” or other automatic device, program, algorithm, or methodology, or any similar or equivalent manual process, to access, acquire, copy, or monitor any portion of the Service or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Service or any Content, to obtain or attempt to obtain any materials, documents, or information through any means not purposely made available through the Service. Blossom
 reserves the right to bar any such activity and to prosecute parties in breach of this agreement to the full extent provided by law.
    * You will not use any automated system to access Blossom Services in a manner that sends more request messages to Blossom' servers than a human can reasonably produce in the same period of time by using a conventional online web browser. The sole exception is that Blossom grants the operators of public search engines permission to use spiders to copy certain materials from Blossom Services for the sole purpose of creating publicly available searchable indices of the materials. Blossom reserves the right to restrict the content that public search engines are authorized to copy or index, or revoke part or all of that right at any time. Blossom presumptively does, but is under no obligation to, exclude user-generated Republished Content from the content public search engines are authorized to copy or index.
    * You will not take any action that imposes, or may impose, an unreasonable or disproportionately large load on our infrastructure as determined by Blossom. iv. You will not bypass the measures Blossom may use to prevent or restrict access, use, or copying of Blossom Services.
    * You will not probe, scan, or test the vulnerability of the Service or any network connected to the Services, nor breach the security or authentication measures on the Service or any network connected to the Service.

### II. Our Content

All right, title, and interest in and to Blossom Services (which includes all materials displayed on site including text, graphics, logos, tools, features, photographs, software, audio, and video, but excluding content provided by users and excluding the text of judicial cases, statutes, regulations, and other primary legal documents) are and will remain the exclusive property of Blossom. Blossom Services are protected by copyright, trademark, and other laws of both the United States and foreign countries. Except as explicitly provided herein, nothing in this Agreement shall be deemed to create a license in or under any such intellectual property rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any Blossom Services or content. Some portions of the site are licensed pursuant to third-party open source licensing. You may not duplicate, copy, or reuse any portion of the HTML/CSS, Javascipt, logos, or visual design elements (or any other aspects of the Blossom Services or related materials) without express written permission from Blossom unless otherwise permitted by law. Any feedback, comments, or suggestions you may provide regarding Blossom or Blossom Services is entirely voluntary and we will be free to use such feedback, comments, or suggestions as we see fit and without any obligation to you.

### III. Security And Responsible Disclosures

Blossom' internal Information Security & Privacy Policy governs all aspects of information security and privacy at Blossom. Potential subscribers may inquire about Blossom' data, application, and physical security by contacting [help@blossom.cloud](mailto:help@blossom.cloud).

### IV. Third-Party Account Use For Sign-Ins

We may in the future use third parties like Twitter, Facebook, or others to create and authorize user accounts. By using those third-party services, you agree to their terms of use, privacy policy, and other agreements between you and them.

### V. Blossom' Use of Third-Party Services

Blossom Services are integrated with various third-party services, applications and sites (collectively, “Third-party Services”) that may make available to you their content and products, such as domain and email services, or marketplaces to connect customers and vendors. This is for your own security, as these are services that specialize in protecting user information and facilitating safe online payments. These Third-party Services may have their own terms and policies, and your use of them will be governed by those terms and policies.We don't control Third-party Services, and we’re not liable for Third-party Services or for any transaction you may enter into with them. Your security when using Third-party Services is your responsibility. You also agree that we may, at any time and in our sole discretion, and without any notice to you, suspend, disable access to or remove any Third-party Services. We’re not liable to you for any such suspension, disabling or removal, including without limitation for any loss of profits, revenue, data, goodwill or other intangible losses you may experience as a result thereof (except where prohibited by law).

### VI. Blossom' Intellectual Property

1. **Blossom Owns Blossom.** The Services are protected by copyright, trademark. trade secret, and other US and foreign laws. These Terms don't grant you any right, title or interest in the Services, our trademarks, logos or other brand features or intellectual property, or others’ content in the Services. You agree not to change, translate or otherwise create derivative works of the Services.
2. **We Can Use Your Feedback For Free.** We welcome your feedback, ideas or suggestions (“Feedback”), but you agree that we may use your Feedback without any restriction or obligation to you, even after this Agreement is terminated.
3. **Our Demo Content Is For Private Use Only.** We may provide templates or other products featuring demo content including without limitation text, photos, images, graphics, audio, video and other materials (“Demo Content”), to provide you with ideas or inspiration. However, Demo Content is for private use only (unless we tell you otherwise). You agree that you will not distribute, publicly display, publicly perform or otherwise publish any Demo Content (or any portion thereof).
4. **Our Betas Are Still In Beta.** We may release products and features that we’re still testing and evaluating. Those Services have been marked as beta, preview or early access (or a similar phrasing), and may not be as reliable as our other services, so please keep that in mind.
5. **We Use Open Source Software.** Open source software is important to us. Some of the software used in the Services may be offered under an open source license that we may make available to you. There may be provisions in the open source license that override some of these Terms.

### VII. Blossom' Rights

1. **Important Things We Can Do.** We reserve these rights, which we may exercise at any time and in our sole discretion, and without liability or notice to you (except where prohibited by law): (a) we may change the Services and their functionality; (b) we may restrict access to or use of parts or all of the Services; (c) we may suspend or discontinue parts or all of the Services; (d) we may terminate, suspend or restrict your access to or use of parts or all of the Services; (e) we may terminate, suspend or restrict access to your Account; and (f) we may change our eligibility criteria to use the Services (and if such eligibility criteria changes are prohibited by law where you live, we may revoke your right to use the Services in that jurisdiction).
2. **Important Rights Regard The Content You Share.** For content that is covered by intellectual property rights, such as text descriptions, images, and photos (IP content), you specifically give us the following permission, subject to your privacy and application settings: you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any IP content that you post on or in connection with Blossom (IP License). This IP License ends when you delete your IP content or your account unless your content has been shared with others, and they have not deleted it. When you delete IP content, it is deleted in a manner similar to emptying the recycle bin on a computer. However, you understand that removed content may persist in backup copies for a reasonable period of time (but will not be available to others).

### VIII. Blossom' Privacy Policy

When you use Blossom Services, you consent to the collection and use of information as detailed in our Privacy Policy. If you're outside the United States, you consent to the transfer, storage, and processing of your information—including but not limited to the content you posted or transferred to the site and any personal information—to and within the United States and other countries. By providing Blossom your email address you consent to our using the email address to send you Services-related notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address to send you other messages, such as changes to features of the Services and special offers. If you do not want to receive such email messages, you may opt out or change your preferences in the Account Settings page. Opting out may prevent you from receiving email messages regarding updates, improvements, or offers.

### IX. Copyright

We respect the intellectual property of others and ask that you do too. We respond to notices of alleged copyright infringement if they comply with the law, and such notices should be reported via the process described in our Copyright Policy, which is incorporated by reference into this Agreement. We reserve the right to delete or disable content alleged to be infringing, and to terminate Accounts of repeat infringers without any refunds.

### X. Paid Services and Fees

1. **Fees.** You can access certain portions of the Services by submitting a fee payment (such additional services, “Paid Services”). We’ll tell you about fees for Paid Services before charging you. If you don't pay for Paid Services on time, we reserve the right to suspend or cancel your access to the Paid Services. Transaction fees and additional fees may also apply to certain portions of the Services, and we’ll tell you about those fees before charging you. Our fees will appear on an invoice that we provide via the Services, unless otherwise indicated.
2. **Taxes.** All fees are exclusive of applicable federal, state, local or other taxes (“Taxes”). You're responsible for all applicable Taxes, and we'll charge Taxes in addition to the fees for the Services when required to do so. If you're exempt from Taxes, you must provide us with a valid tax exemption certificate (we reserve the right to determine whether a certificate is valid). Tax exemption will only apply from and after the date we receive such certificate.
3. **Refunds.** Refunds won’t be issued except in our sole discretion, or if legally required.
4. **Fee Changes.** We may change our fees at any time. When applicable, we’ll give you advance notice of these fee changes via the Services. New fees will not apply retroactively. If you don't agree with the fee changes, you have the right to reject the change by cancelling the applicable Paid Service before your next payment date.
5. **Our Payment Processor.** We use a third-party payment processor (the “Payment Processor”) to bill you through a payment account linked to your Account. The processing of payments will be subject to the terms, conditions and privacy policies of the Payment Processor, in addition to this Agreement. Our current Payment Processor is Stripe, and your payments are processed by Stripe in accordance with Stripe’s Terms of Service and Privacy Policy. We don’t control and are not liable for the security or performance of the Payment Processor. You agree to pay us, through the Payment Processor, all charges at the prices then in effect for any purchase in accordance with the applicable payment terms. You agree to make payment using the payment method you provide with your Account. We reserve the right to correct, or to instruct our Payment Processor to correct, any errors or mistakes, even if payment has already been requested or received.
6. **Fees For Third-party Services.** Third-party Services purchased via the Services may be subject to different refund policies that those Third-party Services determine, and they may be non-refundable. The purchase terms and conditions for such Third-party Services will be displayed during the purchase process, such as through a link to the purchase terms and conditions. It's your responsibility to verify your ability to purchase, cancel or obtain a refund for a Third-party Service. We don’t offer refunds for purchases of Third-party Services.

### XI. Third-party Products and Content

You agree that Blossom does not assume responsibility for any products, content, services, websites, advertisements, offers, or information that is provided by third parties and made available through Blossom Services. If you purchase, use or access any such products, content, services, advertisements, offers, or information through Blossom Services, you agree that you do so at your own risk and that Blossom will have no liability based on such purchase, use or access.

### XII. Warranty Disclaimer

BLOSSOM SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BLOSSOM DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM BLOSSOM SHALL CREATE ANY WARRANTY. BLOSSOM MAKES NO WARRANTY OR REPRESENTATION THAT THE SERVICES WILL: (A) BE TIMELY, UNINTERRUPTED OR ERROR-FREE; (B) MEET YOUR REQUIREMENTS OR EXPECTATIONS; OR (C) BE FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS. SOME PLACES DON'T ALLOW THE DISCLAIMERS IN THIS PARAGRAPH, SO THEY MAY NOT APPLY TO YOU. BLOSSOM DOES NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY OR ABILITY OF BLOSSOM EDITORS. YOU AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR USE OF THE SERVICES, ANY SERVICES PROVIDED BY BLOSSOM EDITORS OR THIRD-PARTY PROVIDERS, OR ANY PRODUCTS REQUESTED BY YOU OR DELIVERED TO YOU, REMAINS SOLELY WITH YOU.

### XIII. Limitation of Liability

To the fullest extent permitted by law, in no event will Blossom be liable with respect to any claims arising out of or related to the Services or this Agreement for: (a) any indirect, special, incidental, exemplary, punitive, or consequential damages; (b) any loss of profits, revenue, data, goodwill or other intangible losses; (c) any damages related to your access to, use of or inability to access or use the Services or any portion thereof, including without limitation interruption of use or cessation or modification of any aspect of the Services; (d) any damages related to loss or corruption of any content or data, including without limitation User Content and eCommerce data; (e) any User Content or other conduct or content of any user or third-party using the Services, including without limitation defamatory, offensive or unlawful conduct or content; or (f) any Third-party Services or third-party sites accessed via the Services. These limitations apply to any theory of liability, whether based on warranty, contract, tort, negligence, strict liability or any other legal theory, whether or not Blossom has been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed its essential purpose. To the fullest extent permitted by law, in no event shall the aggregate liability of Blossom for all claims arising out of or related to the Services and this Agreement exceed the greater of twenty dollars ($20) or the amounts paid by you to Blossom in the twelve (12) months immediately preceding the event that gave rise to such claim. Some places don't allow the types of limitations in this paragraph, so they may not apply to you.

### XIV. Indemnification

To the fullest extent permitted by law, you agree to indemnify and hold harmless Blossom from and against all damages, losses and expenses of any kind (including without limitation reasonable attorneys' fees and costs) arising out of or related to: (a) your breach of this Agreement; (b) your User Content, Your Sites and Your eCommerce; (c) any claims from your End Users; and (d) your violation of any law or regulation or the rights of any third-party.

### XV. No Waiver

Blossom' failure to monitor or enforce a provision of these Terms does not constitute a waiver of its right to do so in the future with respect to that provision, any other provision, or these Terms as a whole.

### XVI. Dispute Resolution

YOU USE THE BLOSSOM SERVICES AT YOUR OWN RISK. THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.

BLOSSOM MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND WITH RESPECT TO BLOSSOM SERVICES. FOR EXAMPLE, WE DO NOT WARRANT THAT (I) THE SERVICES WILL MEET YOUR SPECIFIC REQUIREMENTS, (II) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, ABSOLUTELY SECURE, OR ERROR-FREE, (III) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS, OR (IV) ANY ERRORS IN THE BLOSSOM SERVICES WILL BE CORRECTED.

YOU UNDERSTAND AND EXPRESSLY AGREE THAT BLOSSOM SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF BLOSSOM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM: (I) THE USE OR THE INABILITY TO USE THE SERVICE; (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICE; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD-PARTY ON THE SERVICE; (V) OR ANY OTHER MATTER RELATING TO THE BLOSSOM SERVICES. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BLOSSOM ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF OUR SERVICES; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICE; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD-PARTY; (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICES; AND/OR (VII) USER CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD-PARTY. IN NO EVENT SHALL BLOSSOM, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE TO YOU FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS, DAMAGES, LOSSES OR COSTS IN AN AMOUNT EXCEEDING THE AMOUNT YOU PAID TO BLOSSOM HEREUNDER OR $100.00, WHICHEVER IS GREATER.

THIS LIMITATION OF LIABILITY SECTION APPLIES WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER BASIS, EVEN IF BLOSSOM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.

SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU. THIS AGREEMENT GIVES YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE. THE DISCLAIMERS, EXCLUSIONS, AND LIMITATIONS OF LIABILITY UNDER THIS AGREEMENT WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE LAW.

The Services are controlled and operated from facilities in the United States. Blossom makes no representations that the Services are appropriate or available for use in other locations. Those who access or use the Services from other jurisdictions do so at their own volition and are entirely responsible for compliance with all applicable United States and local laws and regulations, including but not limited to export and import regulations. You may not use the Services if you are a resident of a country embargoed by the United States, or are a foreign person or entity blocked or denied by the United States government. Unless otherwise explicitly stated, all materials found on the Services are solely directed to individuals, companies, or other entities located in the United States.

THE FAILURE OF BLOSSOM TO EXERCISE OR ENFORCE ANY RIGHT OR PROVISION OF THIS AGREEMENT SHALL NOT CONSTITUTE A WAIVER OF THAT RIGHT OR PROVISION. THIS AGREEMENT AND OUR PRIVACY POLICY CONSTITUTE THE ENTIRE AGREEMENT BETWEEN YOU AND BLOSSOM AND GOVERN YOUR USE OF THE BLOSSOM SERVICES, SUPERSEDING ANY PRIOR AGREEMENTS BETWEEN YOU AND BLOSSOM (INCLUDING, BUT NOT LIMITED TO, ANY PRIOR VERSIONS OF THIS AGREEMENT).

1. **Informal Resolution.** Before filing a claim against Blossom, you agree to try to resolve the dispute by first emailing [help@blossom.cloud](mailto:help@blossom.cloud) with a description of your claim. We'll try to resolve the dispute informally by following up via email, phone or other methods. If we can’t resolve the dispute within thirty (30) days of our receipt of your first email, you or Blossom may then bring a formal proceeding.
2. **Arbitration Agreement.** You and Blossom agree to resolve any claims arising from or relating to the Services or this Agreement through final and binding arbitration and you and Blossom expressly waive trial by jury, except as set forth below. Discovery and rights to appeal in arbitration are generally more limited than in a lawsuit, and other rights that you and we would have in court may not be available in arbitration. There is no judge or jury in arbitration, and court review of an arbitration award is limited.
3. **Arbitration Opt-Out.** You can decline this agreement to arbitrate by emailing us at [help@blossom.cloud](mailto:help@blossom.cloud) within thirty (30) days of the date that you first agree to this Agreement (“Opt-Out Period”). Your email must be sent from the email address you use for your Account, and must include your full name, residential address and a clear statement that you want to opt out of arbitration. If you opt out of arbitration pursuant to the terms of this Agreement, these Terms do not apply to you. This opt-out doesn’t affect any other sections of the Terms. If you have any questions about this process, please contact [help@blossom.cloud](mailto:help@blossom.cloud).
4. **Arbitration Time For Filing.** Any arbitration must be commenced by filing a demand for arbitration within one year after the date the party asserting the claim first knows or reasonably should know of the act, omission or default giving rise to the claim. If applicable law prohibits a one-year limitation period for asserting claims, any claim must be asserted within the shortest time period permitted by applicable law.
5. **Arbitration Procedures.** JAMS, Inc. (“JAMS”) will administer the arbitration in accordance with the JAMS Streamlined Arbitration Rules & Procedures (“JAMS Rules”) in effect at the time of the dispute. You and Blossom agree that this Agreement affects interstate commerce, so the US Federal Arbitration Act and federal arbitration law apply and govern the interpretation and enforcement of these provisions (despite the choice of law provision below). Any arbitration hearings will take place at a location to be agreed upon in New York, New York, in English, and shall be settled by one commercial arbitrator with substantial experience in resolving intellectual property and commercial contract disputes, who shall be selected from the appropriate list of JAMS arbitrators in accordance with the JAMS Rules. The arbitrator must follow this Agreement and can award the same damages and relief as a court (including without limitation reasonable attorneys' fees and costs), except that the arbitrator may not award declaratory or injunctive relief benefiting anyone but the parties to the arbitration. Judgment upon the award rendered by such arbitrator may be entered in any court of competent jurisdiction.
6. **Arbitration Fees.** The JAMS Rules will govern payment of all arbitration fees. We won’t seek our attorneys’ fees and costs in arbitration unless the arbitrator determines that your claim is frivolous.
7. **Exceptions To Arbitration Agreement.** Either you or Blossom may assert claims, if they qualify, in small claims court in Santa Clara County, California or any United States county where you live or work. Either you or Blossom may bring a lawsuit solely for injunctive relief to stop unauthorized use or abuse of the Services, or intellectual property infringement or misappropriation (for example, trademark, trade secret, copyright or patent rights) without first engaging in arbitration or the informal dispute resolution process described above.
8. **Judicial Forum For Disputes and Time For Filing.** If our agreement to arbitrate is found not to apply to you or your claim, or if you opt out of arbitration pursuant to this Agreement, you and Blossom agree that any judicial proceeding (other than small claims actions) must be brought exclusively in the federal or state courts of Santa Clara County, California and you and Blossom consent to venue and personal jurisdiction in those courts. Any claim not subject to arbitration must be commenced within one year after the date the party asserting the claim first knows or reasonably should know of the act, omission or default giving rise to the claim. If applicable law prohibits a one year limitation period for asserting claims, any claim must be asserted within the shortest time period permitted by applicable law.
9. **NO CLASS ACTIONS.** You may only resolve disputes with us on an individual basis, and may not bring a claim as a plaintiff or a class member in a class, consolidated or representative action. Class actions, class arbitrations, private attorney general actions and consolidation with other arbitrations aren't allowed.

### XVII. Additional Terms

1. **Entire Agreement.** This Agreement constitutes the entire agreement between you and Blossom regarding the subject matter of this Agreement, and supersedes and replaces any other prior or contemporaneous agreements, or terms and conditions applicable to the subject matter of this Agreement. This Agreement creates no third-party beneficiary rights.
2. **Controlling Law.** This Agreement and the Services shall be governed in all respects by the laws of the State of California, without regard to its conflict of law provisions.
3. **Waiver, Severability, And Assignment.** Our failure to enforce any provision of this Agreement is not a waiver of our right to do so later. If any provision of this Agreement is found unenforceable, the remaining provisions will remain in full effect and an enforceable term will be substituted reflecting our intent as closely as possible. You may not assign any of your rights under this Agreement, and any such attempt will be void. We may assign our rights under this Agreement to any of our affiliates or subsidiaries, or to any successor in interest of any business associated with the Services.
4. **Modifications To Agreement.** We may revise this Agreement from time to time. The most current version will always be posted to our website. If a revision, in our sole discretion, is material, we'll let you know by email, and we will update the 'last modified' date at the bottom of this page. Other changes may be posted to our blog or Terms of Service page, so please check those pages regularly. By continuing to access or use Blossom Services after revisions become effective, you agree to be bound by the revised Agreement. If you do not agree to the new terms, please stop using the Services.
5. **Modifications To Service.** Blossom Services may continue to change over time as we refine and add more features. We do our best to provide you a reliable service, but we may change, terminate, or restrict access to any aspect of the Service, at any time, without notice. We may also remove any content from our Services at our discretion.
6. **Translation.** This Agreement was originally written in English (US). We may translate this Agreement into other languages. In the event of a conflict between a translated version and the English version, the English version will control.
7. **Assignment.** This Agreement, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Blossom without restriction. Any attempted transfer or assignment in violation hereof shall be null and void.

We'd love to hear your questions, concerns, and feedback about this policy. If you have any suggestions for us, feel free to let us know at [help@blossom.cloud](mailto:help@blossom.cloud).
`

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class TermsOfService extends React.Component {

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
      title: 'Terms of Service',
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

TermsOfService.propTypes = propTypes;
TermsOfService.defaultProps = defaultProps;

export default TermsOfService;