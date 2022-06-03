import React from 'react';
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

import Section from '../components/ui/Section';

import classes from '../styles/Terms.module.css';



const PrivacyPolicy = () => {

    return (
        <>
            <Section className={`${['sectionBg-SkyBlue2']}`}>
                <Container>
                    <Row className='mt-4 mb-3'>
                        <Col md={12}>
                            <h2 className='bannerHeading'>Privacy Policy</h2>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <p>At Red Apricot (<b>“Red Apricot”, “JustPerform”, “We”, “Our”,</b> or <b>“Us”</b>), we are committed to respect and protecting the privacy of the users (<b>“Users”, “Organizations”, “Customer”, “You”</b> or <b>“Your”</b>). This Privacy Policy (<b>“Policy”</b>) is intended to manage our data collection and disclosure practices for our Websites, JustPerform® Platform and service offerings (collectively, the <b>“Services”</b>).</p>

                            <p>Red Apricot reserves the right to change this Policy at any time. In particular, Red Apricot may modify this Policy to reflect changes in the way we collect, use, or disclose information, or to reflect changes in privacy laws, regulations, and/or industry standards. We encourage our Users to review this Policy when accessing the Services. Continued use of the Services following changes indicates acceptance of the changes.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Consent</h3>
                            <p>By registering or using the Services, you consent to this Policy. If you do not accept the terms of this Policy, your only remedy is to discontinue use of the Services. Information gathered through the Services may be transferred, used, and stored in the Singapore and in foreign jurisdictions in which Red Apricot, our agents, customers, and other users of the Services are located. If you access the Services, you consent to the transfer, use, and storage of your information in those jurisdictions.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Personal Information</h3>
                            <p>The personal information that we may collect about you through the Websites and JustPerform® Platform broadly falls into the following categories:</p>

                            <p className={classes.leadpara}>Information that you provide voluntarily</p>
                            <p>Certain parts of our Websites may ask you to provide personal information (“Personal Data”) voluntarily: for example, we may ask you to provide your contact details in order to request a demo, register an account with us, to subscribe to marketing communications from us, and/or to submit enquiries to us. The Personal Data that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your Personal Data. Typically, we will ask for your name and contact details, and some basic information about the company you work for, the products you are interested in, and your role in the company. The Personal Data collected may include, but is not necessarily limited to name, username, address, email address, phone number, IP address, use and browser information, knowledge, skills, abilities, critical data, and enterprise performance details. We do not generally seek to collect sensitive personal data through the Websites and our Platform.</p>

                            <p className={classes.leadpara}>Information that we collect automatically</p>
                            <p>When you visit our Website, we may collect certain information automatically from your device using cookies and similar tracking technology. In some countries, including countries in the European Economic Area, this information may be considered personal information under applicable data protection laws.</p>
                            <p>Specifically, the information we collect automatically may include information like your IP address, device type, unique device identification numbers, browser-type, broad geographic location (e.g. country or city-level location) and other technical information. We may also collect information about how your device has interacted with our Websites and JustPerform® Platform, including the pages accessed and links clicked.</p>
                            <p>Collecting this information enables us to better understand the visitors who come to our Website, where they come from, and what content on our Websites is of interest to them. We use this information for our internal analytics purposes and to improve the quality and relevance of our Website to enhance the user experience.</p>

                            <p className={classes.leadpara}>Information that we obtain from third party sources</p>
                            <p>From time to time, we may receive Personal Data about you from third party partners, but only where we have checked that these third parties either have your consent or are otherwise legally permitted or required to disclose your Personal Data to us.</p>
                            <p>The types of information we collect from third parties include general geo location information to identify what state and country you are visiting our site from and we use the information we receive from these third parties to ensure enquiries and other requests are routed to the appropriate team for processing as promptly as possible.</p>
                            <p>The Services may contain links to third party sites. Red Apricot is not responsible for the privacy policies, practices, or content of sites owned by others that you may link to or that may be linked from the Services.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Non-Personal Information</h3>
                            <p>Non-Personal Information (<b>“NPI”</b>) is information we collect through this Website that does not identify you by name or as an individual person. It may include information like:</p>

                            <ul className={classes.list}>
                                <li>The type of web browser software your computer uses;</li>
                                <li>Pages your computer visited and date and time your computer accessed our pages;</li>
                                <li>Personal information that has been de-identified; and</li>
                                <li>The IP (internet protocol) address associated with your computer.</li>
                            </ul>

                            <p>We use NPI in an ongoing effort to better understand and serve our Users, to customize the Services and to improve the content and functionality of the Services. We also conduct research on our User demographics and behavior based on Personal Data and the NPI that we have collected.  This research will be compiled and analyzed on an aggregate basis and this aggregate does not identify any individual and therefore is considered and treated as NPI under this Privacy Policy.</p>

                            <p>We use Google Analytics which uses cookies to track NPI about traffic and visitors to our Services in the aggregate to compile statistical reports about the activity on the Services as well as to benchmark the Services.  This information is used by us to improve the Services and their functionality.</p>
                        </Col>

                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Our Platform Processes Your Data</h3>
                            <p>As part of Red Apricot&apos;s Services, you may load your organization related data into our JustPerform® Platform (“Customer&apos;s Data”). You input such Customer Data for processing and storage as you use the JustPerform® Platform. You may also configure the Platform to allow authorized users to input such Customer Data directly into the Platform.</p>

                            <p>The use of information collected through the Platform is limited to the purpose of providing the Service for which you engaged Red Apricot. Red Apricot may access Customer Data for the purposes of providing the JustPerform® Platform, preventing or addressing service or technical problems, responding to support issues, responding to your instructions or as may be required by law, in accordance with the relevant agreement between you and Red Apricot.</p>
                            <p>We process such Customer Data under your direction and has no direct control or ownership of such Customer Data. You are responsible for complying with any regulations or laws that require providing notice, disclosure and/or obtaining consent prior to transferring such Customer Data to us for processing and analysis purposes. We may transfer such Customer Data to our affiliates or partners that help us provide our Service which will be regulated through the relevant agreements and privacy clauses.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Use of Information</h3>
                            <p>We use your information to provide the Services you have requested to create and maintain your accounts and keep a check for unauthorized activity on your accounts. We also use it to communicate with you about the products you&apos;re currently using, your customer support requests, new products you may like, chances for you to give us feedback, and policy updates. We analyze the information we collect to understand User needs and to improve our Websites and Services. We limit access to Customer&apos;s Data including your Personal Data to our employees and third-party partners who have a legitimate need to use it upon adhering to this Privacy Policy.</p>

                            <p>We collect Customer&apos;s Data including Personal Data to provide Services to the Organizations to transform their enterprise performance management processes via an innovative technology-enabled solution methodology.</p>

                            <p>In general, Red Apricot collects User information to:</p>

                            <ul className={classes.list}>
                                <li>Create and administer accounts;</li>
                                <li>Provide access to the Users;</li>
                                <li>Record keeping;</li>
                                <li>Improving products and services;</li>
                                <li>Retargeting advertisements to our Users;</li>
                                <li>Meeting legal and regulatory requirements;</li>
                                <li>Understanding and analyzing our Users&apos; needs and preferences;</li>
                                <li>Sending information that Red Apricot believes a User may find helpful;</li>
                                <li>Develop new products, services, features and functionality;</li>
                                <li>Preventing any kind of cyber-crimes or frauds;</li>
                                <li>Provide, operate and maintain our Website, Platform and Services.</li>
                            </ul>
                            <p>You can decline certain kinds of information use either by not providing the information in the first place or by opting out later. You can also disable cookies to prevent your browser from giving us information, but if you do so, certain Website features may not work properly. We completely disable third-party cookies from all Red Apricot Website.</p>

                            <p>We keep Customer&apos;s Data including your Personal Data for as long as it is required for the purposes stated in this Privacy Policy. When we no longer have a legitimate need to process your information, we will delete, anonymize, or isolate your information, whichever is appropriate.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Disclosure of Information</h3>
                            <p>Unless otherwise disclosed in this Privacy Policy, Red Apricot will only share your Personal Data with third parties under the following limited circumstances. We do not sell your Personal Data to third parties.</p>

                            <p>Red Apricot shall not disclose Personal Data or any aggregate anonymous information to other Users of the Services and to other companies, agents or contractors unless engaged to perform Services on Red Apricot&apos;s behalf. For example, we may use different business partners to perform implementation process, to manage Customers, or to handle customer care services. In such cases those third parties may have access to your Personal Data to provide the Services on our behalf and will not use it for any other purposes.</p>

                            <p>Red Apricot may also disclose Personal Data and aggregate anonymous information to those businesses, divisions, and units that are affiliated with us. Red Apricot reserves the right to disclose and transfer User information, including Personal Data, in connection with a corporate sale, merger, dissolution, or acquisition, or similar transaction. In such cases, you will be notified via email and/or a prominent notice on our Website of any change in ownership or uses of your Personal Data, as well as, any choices you may have regarding your Personal Data.</p>

                            <p>We may co-operate with law enforcement authorities in investigating and prosecuting Website users who violate our rules or engage in behavior which is harmful (or illegal) to other users. Red Apricot may transfer and disclose information about our Users, including Personal Data, to enforce this Privacy Policy and the other rules about your use of this Website, protect our rights or property, protect someone else&apos;s safety or welfare, or comply with a law or regulation, court order or other legal process.</p>

                            <p>Red Apricot may also disclose aggregate anonymous information to clients, business partners, merchants, advertisers, investors, potential buyers and other third parties if we deem such disclosure, in our discretion, to have sound business reasons or justification.</p>

                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Third Party Services</h3>
                            <p>Our Websites and Services may contain references and links to other websites and services provided by third parties. Any Personal Data you provide on third party sites or services is provided directly to that third party and is subject to that third party&apos;s policies governing privacy and security. We are not responsible for the content or privacy and security practices and policies of third-party sites or services to which links are displayed on the Service. We encourage you to learn about third parties&apos; privacy and security policies before providing them with your Personal Data.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Log Files</h3>
                            <p>Red Apricot follows a standard procedure of using log files. These files log visitors and users when they visit Websites and use our applications. All hosting companies do this as a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, possibly the number of clicks and other relevant system information. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the Website and usage of applications, and gathering demographic information.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Cookies</h3>
                            <p>From time to time, Red Apricot may also use “cookies,” “web beacons” or similar technology for the convenience of Users and to enhance Users experience using the Services. A cookie is a small text file that is recorded either temporarily or persistently on a hard drive by a web page server and is not used to deliver viruses or other harmful programs to computers. Rather, cookies enable Red Apricot to recognize a User without requiring the User to repeatedly log in when using the Services. Web beacons are graphics designed to collect web log information such as pages viewed, or messages opened. By relying on cookies, web beacons, and similar technology, Red Apricot may be able to deliver a more efficient service that is more personalized for each user. Additionally, these technologies may allow Red Apricot to monitor traffic patterns, Services usage, and session information to make the Services more useful.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Children</h3>
                            <p>We do not knowingly or specifically collect Personal Data from users under 18 years of age. We do not authorize users under 18 years of age to use the Services.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Testimonials</h3>
                            <p>We display personal testimonials of satisfied customers on our Website in addition to other endorsements. With your consent we may post your testimonial along with your name. If you wish to update or delete your testimonial, you can contact us at the details provided at the end of this document.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Referrals</h3>
                            <p>If you choose to use our referral service to invite a user about our Website, we will ask you for your friend&apos;s name and email address. We will automatically send your friend&apos;s a one-time email inviting him or her to visit the site. We store this information for the sole purpose of sending this one-time email and tracking the success of our invite user program. Your friend may contact us at the details provided at the end of this document.  to request that we remove this information from our database.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Newsletters</h3>
                            <p>If you wish to subscribe to our newsletter(s), we will use your name and email address to send the newsletter to you. Out of respect for your privacy, you may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or you can contact us at the details provided at the end of this document. </p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Processing of Information</h3>
                            <p>For Users with accounts located in the European Economic Area, all processing of Personal Data, as of May 25, 2018, is performed in accordance with privacy rights and regulations following the regulations set forth in the General Data Protection Regulation (“GDPR”).</p>

                            <p>GDPR defines Data Controllers as an entity that determines the purposes for which and the means by which Personal Data is processed (“Data Controllers”). Data Controllers decide &apos;why&apos; and &apos;how&apos; the Personal Data should be processed. The data processor processes Personal Data only on behalf of the Data Controller (“Data Processor”).</p>

                            <p>Red Apricot is a Data Processor and processes data for its Clients who are Data Controllers. The Data Controllers has the complete control of the data provided to the Red Apricot Website and JustPerform® Platform. Red Apricot process it as per Data Controller&apos;s instructions.</p>

                            <p>If you are in the European Economic Area (EEA), you have the following rights with respect to information that Red Apricot holds about you. Red Apricot undertakes to provide you the same rights no matter where you choose to live.</p>

                            <ul className={classes.list}>
                                <li><em>Right to access:</em> You have the right to access (and obtain a copy of, if required) the categories of Personal Data that we hold about you, including the information&apos;s source, purpose and period of processing, and the persons to whom the information is shared</li>
                                <li><em>Right to rectification:</em> You have the right to update the information we hold about you or to rectify any inaccuracies. Based on the purpose for which we use your information, you can instruct us to add supplemental information about you in our database.</li>
                                <li><em>Right to erasure:</em> You have the right to request that we delete your Personal Data in certain circumstances, such as when it is no longer necessary for the purpose for which it was originally collected.</li>
                                <li><em>Right to restriction of processing:</em> You may also have the right to request to restrict the use of your information in certain circumstances, such as when you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
                                <li><em>Right to data portability:</em> You have the right to transfer your information to a third party in a structured, commonly used and machine-readable format, in circumstances where the information is processed with your consent or by automated means.</li>
                                <li><em>Right to object:</em> You have the right to object to the use of your information in certain circumstances, such as the use of your personal information for direct marketing.</li>
                                <li><em>Right to complain:</em> You have the right to complain to the appropriate supervisory authority if you have any grievance against the way we collect, use or share your information. This right may not be available to you if there is no supervisory authority dealing with data protection in your country.</li>
                            </ul>

                            <p>If you make a request or would like to exercise any of these rights, please contact us. We will respond to you within a month.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>The EU-U.S. / SWISS-U.S. Privacy Shield</h3>
                            <p>Red Apricot recognizes that the European Union (“EU”) and Switzerland have established strict protections regarding the handling of Personal Data of EU and Swiss citizens, including requirements to provide adequate protection for EU/Swiss Personal Data transferred outside of the EU and Switzerland, respectively.</p>

                            <p>Red Apricot complies with both the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of Personal Data transferred from the EU/Switzerland to the United States. Red Apricot adheres to the Privacy Shield Principles of Notice, Choice, Accountability for Onward Transfer, Security, Data Integrity and Purpose Limitation, Access, and Recourse, Enforcement & Liability (collectively, the “Principles”). If there is any conflict between the terms in this Policy and the Privacy Shield Principles, the Principles shall govern.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
                            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                            <ul className={classes.list}>
                                <li>Request that a business that collects a consumer&apos;s Personal Data disclose the categories and specific pieces of Personal Data that a business has collected about consumers.</li>
                                <li>Request that a business delete any Personal Data about the consumer that a business has collected.</li>
                                <li>Request that a business that sells a consumer&apos;s Personal Data, not sell the consumer&apos;s Personal Data.</li>
                            </ul>
                            <p>If you make a request or would like to exercise any of these rights, please contact us. We will respond to you within a month.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Data Integrity and Security</h3>
                            <p>The security of Customer Data, including Personal Data, is very important to Red Apricot. Red Apricot maintains reasonable and appropriate security measures to maintain the accuracy and integrity of Customer Data including Personal Data. Red Apricot has implemented physical and technical safeguards to protect Customer Data including Personal Data from loss, misuse, and unauthorized access, disclosure, alternation, or destruction.</p>

                            <p>We restrict access to Customer Data including your Personal Data to those employees of ours, our affiliates, and third-party partners who reasonably need it for the purpose of providing required Services upon agreement with us. We have implemented commercially reasonable electronic, physical and procedural safeguards to help protect against the loss, unauthorized access or disclosure, alteration or destruction of the information under our control. When you enter Customer Data, including your Personal Data on our Website and Platform, we encrypt the transmission of that information using secure socket layer technology (SSL).</p>

                            <p>Certain features of our Websites may require you to use an access code, password, or similar unique identifier. You are responsible for protecting the secrecy of your account information. Red Apricot recommends that you use the latest browsers to take advantage of advances in security technology. Although we strive to protect your encrypted information, no data transmission over the internet is completely secure. There is some risk associated with any data transmission, including the risk that Personal Data may be intercepted in transit. Therefore, we cannot guarantee its absolute security. If you have any questions about security on our Website and Platform, you can contact us at the details provided at the end of this document. </p>
                        </Col>
                    </Row>



                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>International Data Transfers</h3>
                            <p>Customer Data, including your Personal Data, may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different to the laws of your country (and, in some cases, may not be as protective).</p>

                            <p>Your Personal Data may be transferred to and processed in different countries around the world where we, our affiliates and partners operate. This means that when we collect Customer Data, including your Personal Data, we may process it in any of the locations where we have our presence.</p>

                            <p>However, we have taken appropriate safeguards to require that Customer Data, including your Personal Data, will remain protected in accordance with this Privacy Policy and applicable laws. If you are from the EEA, these include implementing the European Commission&apos;s Standard Contractual Clauses for transfers of Personal Data between us, our affiliates, and with our partners. Alternatively, certain of our partners may rely on self-certification to the Privacy Shield Framework for transfers of Personal Data. The Standard Contractual Clauses and the Privacy Shield Framework require non-EEA companies to protect EEA Personal Data they process in accordance with European Union data protection law. </p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Data Retention</h3>
                            <p>We retain Customer Data including your Personal Data for as long as it is required for the purposes stated in this Privacy Policy. Sometimes, we may retain your information for longer periods as permitted or required by law, such as to maintain suppression lists, prevent abuse, if required in connection with a legal claim or proceeding, to enforce our agreements, for tax, accounting, or to comply with other legal obligations. When we no longer have a legitimate need to process your information, we will delete or anonymize your information from our active databases. We will also securely store the information and isolate it from further processing on backup discs until deletion is possible.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Erasing, Accessing, Changing or Updating Your Personal Data</h3>
                            <p>If you are a data subject about whom we store Personal Data, you may have the right to request access to, and the opportunity to update, correct, or delete, such Personal Data. If we have received your Personal Data in reliance on the Privacy Shield, you may also have the right to opt out of having your Personal Data shared with third parties and to revoke your consent to our sharing your Personal Data with third parties. You may also have the right to opt out if your Personal Data is used for any purpose that is materially different from the purpose(s) for which it was originally collected or which you originally authorized.</p>

                            <p>Please contact us if you would like to access, rectify, erase, restrict or object to processing, or export your Personal Data.  We will extend our support in responding to your request within a reasonable timeframe.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Compliance with this Privacy Policy</h3>
                            <p>We make every effort, including periodic reviews, to ensure that Customer Data, including Personal Data, you provide is used in conformity with this Privacy Policy. If you have any concerns about our adherence to this Privacy Policy or the manner in which Customer Data including your Personal Data is used, kindly write to us at the details provided at the end of this document. We will contact you, and if required, coordinate with the appropriate regulatory authorities to effectively address your concerns.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Notification of Changes</h3>
                            <p>We may modify the Privacy Policy at any time, upon notifying you through a service announcement or by sending an email to your primary email address. If we make significant changes to the Privacy Policy that affect your rights, you will be provided with at least 30 days’ advance notice of the changes by email to your primary email address. If you think that the updated Privacy Policy affects your rights with respect to your use of our products or services, you may terminate your use by sending us an email within 30 days. Your continued use after the effective date of changes to the Privacy Policy will be deemed to be your agreement to the modified Privacy Policy. You will not receive email notification of minor changes to the Privacy Policy. If you are concerned about how Customer Data including your Personal Data is used, you should check back at <Link href='https://justperform.vercel.app/'>www.staging-web.staging-web.justperform.com</Link>  periodically.</p>
                        </Col>
                    </Row>





                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>WEBSITES</h3>
                            <p>Our Websites are listed as below:</p>
                            <p><Link href='https://redapricot.io/'>www.redapricot.io</Link></p>
                            <p><Link href='https://www.redapricot.com.sg/'>www.redapricot.com.sg</Link></p>
                            <p><Link href='https://justperform.vercel.app/'>www.staging-web.staging-web.justperform.com</Link></p>
                        </Col>
                    </Row>



                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Contact Details</h3>
                            <p>If you have any questions regarding your Personal Data or our data practices generally, please contact us using the following information:</p>

                            <p><b>Red Apricot Pte.Ltd.</b> 190 Clemenceau Avenue, #06-02, Singapore, 239924</p>

                            <p><b>Red Apricot Inc.</b> 111 W Saint John Street, Suite 430, SAN JOSE, California 95113, US</p>

                            <p>Email: &nbsp;
                                <Link href='mailto:privacy@justperform.com'>privacy@justperform.com</Link>  &nbsp; or &nbsp;
                                <Link href='mailto:privacy@redapricot.io'>privacy@redapricot.io</Link>  &nbsp; or &nbsp;
                                <Link href='mailto:privacy@redapricot.com.sg'>privacy@redapricot.com.sg</Link>
                            </p>
                        </Col>
                    </Row>




                </Container>
            </Section>
        </>

    )
}

export default PrivacyPolicy;