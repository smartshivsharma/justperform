import React from 'react';
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";

import Section from '../components/ui/Section';

import classes from '../styles/Terms.module.css';


const TermsOfService = () => {

    return (
        <>
            <Section className={`${['sectionBg-White']}`}>
                <Container>
                    <Row className='mt-4 mb-3'>
                        <Col md={12}>
                            <h2 className='bannerHeading'>Terms & Conditions</h2>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12} style={{ fontWeignt: '600' }}>
                            <p>PLEASE READ THESE ENTIRE TERMS OF SERVICE CAREFULLY BEFORE YOU OR YOUR ORGANIZATION ACCESS OR USE THE SERVICES.  YOU SHOULD REVIEW THESE TERMS OF SERVICE FROM TIME-TO-TIME.</p>

                            <p>BY YOUR CONTINUED USE OF THE SERVICE, YOU ACKNOWLEDGE THAT YOU ARE 18 YEARS OF AGE OR OLDER, HAVE THE RIGHT, AUTHORITY AND CAPACITY TO ENTER INTO THESE TERMS OF SERVICE, OR YOU ARE OF THE LEGAL AGE REQUIRED TO FORM A BINDING CONTRACT IN YOUR JURISDICTION IF THAT AGE IS GREATER THAN 18 AND YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE. </p>

                            <p>IF YOU ARE AGREEING TO THESE TERMS OF SERVICE ON BEHALF OF ANOTHER PERSON OR ENTITY, THEN YOU REPRESENT AND WARRANT TO RED APRICOT THAT YOU HAVE THE AUTHORITY TO BIND THAT PERSON OR ENTITY TO THESE TERMS OF SERVICE.</p>

                            <p>IF YOU DO NOT AGREE TO BE BOUND BY ANY PART OF THESE TERMS OF SERVICE, YOU MUST NOT USE THE SERVICES PROVIDED BY RED APRICOT AND MUST CEASE ANY USE OF THE SERVICES IMMEDIATELY.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Overview</h3>
                            <p>These terms and conditions of service (the <b>“Terms & Conditions”</b> or the <b>“Agreement”</b> or the <b>“Terms of Service”</b> or the <b>“TOS”</b>) govern your use of JustPerform® (<b>“JustPerform”, “we”, “us”</b> or <b>“our”</b>) platform (the <b>“Platform”</b>) and other services that Red Apricot may offer, including the websites (the “Websites”) and any other publicly available information (collectively, the <b>“Other Services”</b> and together with the Platform, the <b>“Services”</b>). <b>“You”</b> include <b>“Company”</b> or <b>“Organization”</b> or <b>“Consultant”</b>. We reserve the right to update these Terms & Conditions from time to time, so please check this page frequently for changes. Your continued use of our Services after a change to the Terms & Conditions will be deemed as your acceptance of the revised Agreement.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>The Platform</h3>
                            <p>Red Apricot inspires businesses to transform enterprise performance management processes via an innovative technology-enabled solution methodology. In the pursuit of delivering superior customer experience and value, Red Apricot created the world&apos;s first digital platform named JustPerform® to automate EPM implementations. JustPerform® is a cloud-based platform that automates enterprise EPM implementations by capturing end-user requirements, which are translated into digital blueprint. The blueprint is then converted into technology agnostic, AI-based code. The code provides the intelligence for EPM solution & deployment via JustPerform® AutoBuild functionality.</p>

                            <p>This Agreement is the means by which we grant you the right to use our Platform, and your permission to use the Platform is conditional upon your agreeing to, and compliance with, these Terms & Conditions. Please note that this Agreement will still survive even after you use our Platform. It will continue until such time as we elect to terminate this Agreement, subject to certain provisions surviving termination as explained hereafter.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Acceptable Use</h3>
                            <p>You must not use this Website, JustPerform® Platform or the Services in any way that causes, or may cause, damage to the Website, JustPerform® Platform or Services or impairment of the availability or accessibility of the Site, Platform or Services, or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</p>

                            <p>You must not use the Site, Platform or Services to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, or other malicious computer software.</p>
                            <p>You agree not to do any of the following in connection with your use of the Platform or otherwise: (1) engage in any activity that degrades the Platform for other users; (2) violate any policies we may adopt in connection with the Platform from time-to-time; (3) compromise the security or integrity of the Platform, or attempt to reverse engineer, modify or copy the Services; or (4) breach any applicable laws, rules or regulations, or infringe upon any third party&apos;s intellectual property rights or other rights (including rights of privacy and publicity).</p>
                            <p>If you breach any of the foregoing, or any other provision of this Agreement, we may take whatever steps we deem necessary to protect the Platform, our business and our other clients, including, without limitation, suspending your access to the Platform and/or termination of this Agreement.</p>
                        </Col>

                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Content</h3>
                            <p>You are responsible for all information, data, and any other content you chose to incorporate in our JustPerform® Platform (“Your Content”). While Red Apricot does not claim any rights in respect of Your Content, you agree to provide Red Apricot with a limited, royalty-free, non-exclusive, transferable, worldwide, perpetual licence to use, distribute and display all content posted by you while using the Services provided that such licence is restricted to the sole purpose of enabling Red Apricot and its partners to perform the Services.</p>

                            <p>You must ensure anything contained in Your Content is not unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another&apos;s privacy, and does not impersonate another person. You must also ensure that you have all rights necessary to use anything contained in Your Content.</p>
                            <p>Red Apricot does not take responsibility for any content posted by third parties while using the Services. Red Apricot expressly disclaims any and all liability in connection with Your Content. Red Apricot is not responsible for any loss, injury, or damage to any individual as a result either directly or indirectly of any information published on the Site or made available through the Services.</p>
                            <p>Accordingly, you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against Red Apricot with respect to any such content. You acknowledge that while you may be exposed to such materials, you will hold Red Apricot harmless in relation thereto.</p>
                            <p>Red Apricot reserves the right (but not the obligation) in its sole discretion to refuse or remove any content that is available via the Services where it has any grounds to suspect non-compliance with these Terms.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Your Account, Your Responsibility</h3>
                            <p>In order to register or create a JustPerform® account, as an Organization, you are required to provide some identifying information (including your legal full name and a valid email address). Once your Sign-up application has been received and verified by Red Apricot, you will be granted log in details, including a password (“Your Log In”), to access your JustPerform® account (“Your Account”). While certain parts of the Site are available to non-account holders, you can only activate Your Account once you have positively clicked your acceptance of these Terms and Privacy Policy. Your Log In is personal to you and may not be shared with others. If Your Account is a corporate account, you can create individual user accounts with separate log ins. However, you will be responsible for the activity of those individual users.</p>

                            <p>IT IS ESSENTIAL THAT YOU MAINTAIN THE CONFIDENTIALITY OF YOUR LOG IN AS YOU WILL BE HELD RESPONSIBLE FOR ALL USE OF YOUR ACCOUNT IN THE EVENT OF A BREACH OF THESE TERMS. YOU MUST NOTIFY RED APRICOT IMMEDIATELY IF THE CONFIDENTIALITY OF YOUR LOG-IN DETAILS ARE COMPROMISED OR IF YOUR ACCOUNT HAS BEEN ACCESSED UNLAWFULLY. RED APRICOT CANNOT AND WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE ARISING FROM YOUR FAILURE TO COMPLY WITH THIS SECURITY OBLIGATION.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Restrictions to Use</h3>
                            <p>You agree not to use the Services or cause or permit the Site or Platform to be used:</p>

                            <ul className={classes.list}>
                                <li>For any illegal or unauthorised purpose;</li>
                                <li>
                                    To post content that we determine in our sole discretion is unlawful, offensive, threatening, libellous, defamatory, pornographic, obscene, abusive or otherwise objectionable or violates any party&apos;s intellectual property or privacy rights or these Terms;
                                </li>
                                <li>
                                    To circumvent, disable or otherwise interfere with any security related features of the Site or to jeopardise or prejudice the operation, quality or integrity of the Site or the Services, or the operation, quality or integrity of any telecommunications network;
                                </li>
                                <li>For any commercial purpose including any direct marketing, contests or pyramid schemes, nor to use the Site or the Services to participate in or cause others to participate in sending chain letters, junk e-mail, spam, duplicative or unsolicited messages, advertising or promotional material;</li>
                                <li>Copying and/or taking screenshots, making notes, using for free or publishing any material and content of this Site or Platform in any other media;</li>
                                <li>Selling, sublicensing and/or otherwise commercializing any Site or Platform material or content displayed at the Site or in the Platform;</li>
                                <li>
                                    Publicly performing and/or showing any Site or Platform material;
                                </li>
                                <li>Using this Site or Platform in any way that is or may be damaging or harmful to this Site, Platform or Red Apricot;</li>
                                <li>To harvest, extract or otherwise collect information about others, including e-mail addresses, without their consent;</li>
                                <li>
                                    Using this Site in any way that impacts user access to this Site or Platform;
                                </li>
                                <li>To distribute, download, upload or transmit any material which contains viruses, trojan horses, worms, time bombs, cancelbots, or any other harmful or deleterious programs;</li>
                                <li>Contrary to the terms and conditions of any internet service provider whose services you may use; or</li>
                                <li>
                                    To harass, abuse or harm other persons, or in order to contact, advertise to, solicit or sell to any user or person without their prior express consent.
                                </li>
                            </ul>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Ownership and Intellectual Property</h3>
                            <p>All right, title and interest in and to the JustPerform® Platform and the Services, including any and all modifications and additions thereto, shall at all times remain with us.</p>
                            <p>Other than Your Content, Red Apricot own the intellectual property rights in and to the Site, JustPerform®, the Services and material on the Site or the Services.  All such intellectual property rights are reserved, subject to the license below.</p>
                            <p>Subject to these Terms, we grant you a non-exclusive, non-transferable, limited right to access and use the Site, JustPerform® and those Services for which an account has been established and approved on subscription basis.</p>
                            <p>You shall not reproduce, duplicate, copy, republish, sell, lease or sublicense material from the Site or obtained by access to or use of the Services or otherwise edit or modify any material on the Site or obtained by access or use of the Services. You shall not sub-license, assign or otherwise transfer the rights granted to you in this clause.  No other right, title, or interest in the Site or the Services is granted to you.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Privacy</h3>
                            <p>In connection with Your Content, you may end up disclosing personal information to us. We collect, use and disclose such personal information in accordance with our <Link href='./privacy-policy'>privacy policy</Link> and you agree to be bound by our privacy policy (as may be updated from time to time) as part of this Agreement. Some of the Services may be hosted in jurisdictions other than the jurisdiction in which you reside (a <b>“Home Jurisdiction”</b>). Accordingly, you agree and accept that some of your personal information may be transferred to jurisdictions other than your Home Jurisdiction.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Availability</h3>
                            <p>Red Apricot will not be liable if, for any reason, the Site and/or Services are unavailable at any time or for any period. Access to the Site and/or Services may be suspended temporarily and without notice in the case of system failure, maintenance, repair or for reasons beyond Red Apricot&apos;s control.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Security</h3>
                            <p>We have implemented and maintain technical and organizational measures consistent with industry standards, including those measures found here (as may be updated from time-to-time, the <b>“Security Measures”),</b> to ensure that any information disclosed to us by you is secure. However, we cannot guarantee that such measures will never be defeated. Accordingly, unless it was caused by our negligence, willful misconduct or failure to maintain the Security Measures, to the fullest extent permitted by applicable law, we are not responsible for any unauthorized or third party hacking, access, use, alteration or disclosure of your data or personal information.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Term</h3>
                            <p>The term of this Agreement will commence on the date that you first use, or otherwise register for, the Services (which includes the first time you visit our Websites ), and will continue in full effect until your account is cancelled and you cease using the Services.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Termination</h3>
                            <p>We may terminate this Agreement and your access to the Services at any time, with or without notice, if you breach a material provision of this Agreement or otherwise for our convenience. We have no obligation to provide you with any notice of your breach of this Agreement but we may choose to provide notice, and an opportunity to cure such breach, in our sole discretion should we so choose. Your right to use JustPerform® Platform will end once your Service is terminated and any data you have stored on JustPerform® Platform will be unavailable later.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Indemnification</h3>
                            <p>We agree to defend, indemnify and hold you harmless from any damages, penalties, liabilities and costs resulting from third party claims that your use of the JustPerform® Platform as permitted in this Agreement infringe the patent rights, copyrights or other intellectual property right of a third party.</p>
                            <p>You agree to defend, indemnify and hold us harmless from any damages, penalties, liabilities and costs resulting from third party claims arising from: (1) your breach of this Agreement; (2) your negligence or willful misconduct; or (3) any content you upload or share through the JustPerform® Platform.</p>
                            <p>Any indemnification obligations under this section are conditional upon the indemnified party: (a) promptly giving the indemnifying party written notice of the claim; (b) giving the indemnifying party sole control of the defense and settlement of the claim (provided that indemnifying party may not settle any claim unless it unconditionally releases the indemnified party of all liability), provided that the indemnified party may retain counsel to participate in the proceedings; and (c) providing the indemnifying party with all reasonable assistance, at the indemnifying party&apos;s expense.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Exclusion Of Warranties</h3>
                            <p>Except as expressly set forth in this Agreement, we make no representations or warranties regarding the JustPerform® Platform or the Services (including, without limitation, implied warranties of merchantability or merchantable quality and/or fitness for a particular purpose), and each of the JustPerform® Platform and the Services are provided as is. Furthermore, we do not represent that the Services will be available at any time or from any particular location, will be secure or error-free or that defects will be corrected. Red Apricot does not warrant or make any representations regarding the use or the results of the use of the Services.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Limitation of Liability</h3>
                            <p>In no event will our liability to you under this Agreement or in connection with the Services (whether in contract, tort or any other head of liability) exceed the fees paid by you to us under this Agreement in the six (6) months immediately preceding the date of the event giving rise to the claim. If you are dissatisfied with the Site, JustPerform® Platform or the Services, your sole and exclusive remedy is the discontinuation of your use of the Site, JustPerform® or Services. In no event will we be liable to you for indirect, punitive, incidental, special, consequential, or exemplary damages, including damages for loss of profits, goodwill or data.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Non-Endorsement and Release</h3>
                            <p>We are not responsible for the accuracy, completeness, appropriateness, legality or applicability of any content or anything said, depicted, written or done by other users of the Services, including without limitation, any information that you may obtain by using the Services. We do not endorse anything contained in any content created by users of the Services, or any information, opinion, recommendation or advice expressed therein and you understand that you must evaluate and bear all risks associated with the use thereof. You hereby release and forever discharge us from any and all actions, causes of actions, claims, damages and liabilities that you may incur as a result of other users of the Services.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Independent Contractors</h3>
                            <p>For all purposes, we are an independent contractor to you, and neither of us will represent that we have authority to assume or create obligations on behalf of the other party.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Websites</h3>
                            <p><Link href='https://justperform.vercel.app/'>www.staging-web.staging-web.justperform.com</Link></p>
                            <p><Link href='https://redapricot.io/'>www.redapricot.io</Link></p>
                            <p><Link href='https://www.redapricot.com.sg/'>www.redapricot.com.sg</Link></p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Assignment</h3>
                            <p>Neither of us may assign this Agreement, without the other party&apos;s consent. However, we may assign this Agreement at any time to an affiliate or to an acquirer of all or substantially all of our business or assets.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Survival</h3>
                            <p>Those provisions that expressly, or by their nature are intended to, survive termination, shall survive any termination or expiration of this Agreement.</p>
                        </Col>
                    </Row>


                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Notices</h3>
                            <p>All notices to be given under this Agreement: (i) if to us, will be sent by email to our official email address; and (ii) if to you, will be sent by email to the email address that you provided to us when you registered for the Services (or any other email address should you have updated your account to reflect such other email address.)</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Waiver</h3>
                            <p>The waiver by either party of any default or breach of any term of this Agreement shall not constitute a waiver of any other or subsequent default or breach. Except for your non-payment or breach of our proprietary rights in the JustPerform® Platform, no action, regardless of form, arising out of this Agreement may be brought by either of us more than one year after the cause of action has accrued.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Severability</h3>
                            <p>If any provision of this Agreement is determined to be unenforceable, invalid or in breach of any law by any tribunal, public body or court of competent jurisdiction for any reason whatsoever, the unenforceability or invalidity of such provision shall not affect the enforceability or validity of the remaining provisions of this Agreement and such unenforceable or invalid provision shall be severed from the remainder of this Agreement and as so modified this Agreement shall continue in full force and effect.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Governing Law & Jurisdiction</h3>
                            <p>This Agreement shall be governed by and interpreted in accordance with the laws of the Singapore. Each of the parties hereto irrevocably submits to the jurisdiction of the courts of Singapore.</p>
                        </Col>
                    </Row>

                    <Row className={classes.legalRw}>
                        <Col md={12}>
                            <h3 className={classes.headingLight}>Entire Agreement</h3>
                            <p>This Agreement, as well as any policies we may adopt in connection with the Services hereto, constitute the complete agreement between the parties and supersedes all prior or contemporaneous agreements or representations, written or oral, concerning the subject matter of this Agreement.</p>
                        </Col>
                    </Row>


                </Container>
            </Section>


        </>

    )
}

export default TermsOfService;