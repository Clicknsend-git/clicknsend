import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const TermAndConditionSection = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: { lg: "400px", md: "400px", sm: "100%", xs: "100%" },
          backgroundImage: `url("/assets/images/privacy_policy/privacy_banner.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          zIndex: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Stack
          sx={{ zIndex: 8, position: "absolute", left: "8em", top: "6em" }}
        >
          <Breadcrumbs aria-label="breadcrumb" sx={{ color: "common.white" }}>
            <Box
              component={Link}
              sx={{ textDecoration: "none" }}
              color="common.white"
              href="/"
            >
              Home
            </Box>
            <Typography
              sx={{ textDecoration: "none", fontWeight: 600 }}
              color="common.white"
            >
              Terms & Conditions
            </Typography>
          </Breadcrumbs>
        </Stack>
        <CardContent
          sx={{
            paddingTop: {
              lg: "6rem!important",
              md: "6rem!important",
              sm: "3rem!important",
              xs: "3rem!important",
            },
            paddingBottom: {
              lg: "4rem!important",
              md: "4rem!important",
              sm: "2rem!important",
              xs: "2rem!important",
            },
            position: "relative",
            zIndex: 9,
          }}
        >
          {/* <CardContentOverlay> */}
          <Stack spacing={4}>
            <Typography
              gutterBottom
              fontSize={44}
              component="h2"
              fontWeight={600}
              color="white"
              variant="h2"
            >
              Terms & Conditions
            </Typography>
            <Typography variant="body1" component="p" color="common.white">
              Last Modified: 21 Jan, 2023
            </Typography>
          </Stack>
        </CardContent>
      </Box>
      <Container>
        <Box>
          <Box
            sx={{
              position: "relative",
              top: -100,
              zIndex: 6,
            }}
          >
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    fontWeight={600}
                    color="primary"
                  >
                    TERMS & CONDITIONS
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    Terms & Conditions: Click N Send Limited offers a Transport
                    Trading Platform and this page outlines our terms for use of
                    the platform www.clicknsend.co.uk, as a guest or a
                    registered member user. Please read these terms of use
                    carefully before you start to use the site. By using our
                    site, you indicate that you accept these terms of use and
                    that you agree to abide by them. These Terms apply at all
                    times to all users.
                  </Typography>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    If you do not agree to these terms of use, please refrain
                    from using our site.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    . Information about us
                    <ul>
                      <li>
                        Our site is operated by Click N Send Limited (Company
                        Number SC776553) whose registered office 51 Hillside
                        drive, Portlethen, Aberdeenshire.
                      </li>
                      <li>We are a private limited company.</li>
                    </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    Accessing our site
                    <ul>
                      <li>
                        Access to our site is permitted to registered members,
                        and we reserve the right to withdraw or amend the
                        service we provide on our site without notice. We will
                        not be liable if for any reason our site is unavailable
                        at any time or for any period
                      </li>
                      <li>
                        From time to time, we may restrict access to our site
                        without prior notice for development updates and other
                        reasons when necessary, we will always try to offer as
                        much notice as possible but may at times need to
                        restrict access without prior notice.
                      </li>
                      <li>
                        Membership credentials are confidential and must not be
                        disclosed to any third party to access the site at any
                        time without permission of the directors of Click N Send
                        Limited.
                      </li>
                      <li>
                        You are responsible for making all arrangements
                        necessary for you to have access to our site. You are
                        also responsible for ensuring that all persons who
                        access our site through your internet connection are
                        aware of these terms, and that they comply with them.
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    Intellectual property rights
                    <ul>
                      <li>
                        We are the owner or the licensee of the domain names and
                        the copyright of our site.
                      </li>
                      <li>
                        Our status (and that of any identified contributors) as
                        the authors of material on our site must always be
                        acknowledged.
                      </li>
                      <li>
                        You must not use any part of the materials on our site
                        for commercial purposes without obtaining a licence to
                        do so from us or our licensors.
                      </li>
                      <li>
                        If you print off, copy or download any part of our site
                        in breach of these terms of use, your right to use our
                        site will cease immediately and you must, at our option,
                        return or destroy any copies of the materials you have
                        made.
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    4. Reliance on information posted
                    <ul>
                      <li>
                        Commentary and other materials posted on our site are
                        not intended to amount to advice on which reliance
                        should be placed. We therefore disclaim all liability
                        and responsibility arising from any reliance placed on
                        such materials by any visitor to our site, or by anyone
                        who may be informed of any of its contents.
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    Our liability
                    <ul>
                      <li>
                        The material displayed on our site is provided without
                        any guarantees, conditions or warranties as to its
                        accuracy. To the extent permitted by law, we and our
                        partners hereby expressly exclude:
                        <ul>
                          <li>
                            All conditions, warranties and other terms which
                            might otherwise be implied by statute, common law or
                            the law of equity.
                          </li>
                          <li>
                            Any liability for any direct, indirect or
                            consequential loss or damage incurred by any user in
                            connection with our site or in connection with the
                            use, inability to use, or results of the use of our
                            site, any websites linked to it and any materials
                            posted on it, including, without limitation any
                            liability for:
                            <ul>
                              <li>Loss of income or revenue</li>
                              <li>Loss of business</li>
                              <li>Loss of profits or contracts</li>
                              <li>Loss of anticipated savings</li>
                              <li>Loss of data</li>
                              <li>Loss of goodwill</li>
                              <li>Wasted management or office time</li>
                              <li>
                                And for any other loss or damage of any kind,
                                however arising and whether caused by tort
                                (including negligence), breach of contract or
                                otherwise, even if foreseeable.
                              </li>
                            </ul>
                          </li>
                        </ul>
                        
                      </li>
                      <li>This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter, nor any other liability which cannot be excluded or limited under applicable law.
                      </li>
                      <li>All actions taken through our site are the sole responsibilities of the users in question but you must inform Click n Send Limited should any other user make a claim against you for any reasons such as, but not limited to, complaints for non payment for loads taken by other members.
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                  Your information on our site
                  <ul>
                    <li>	All information provided to Click n Send Limited by our users are kept secure and only registered users are allowed access to this information, we do not share your data with third parties and you must not share other users details outside of our site. By using our site, you consent to your information provided to be visible to other registered users of our site.</li>
                  </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                   7. Transactions through our site
                   <ul>
  <li>Whenever you use any feature of our site you must do so in accordance with our code of conduct which is provided upon becoming a member.</li>
  <li>Any material you upload to our sites will be considered non-confidential and non-proprietary, and we have the right to use, copy, distribute and disclose to third parties any such material for any purpose. We also have the right to disclose your identity to any third party who is claiming that any material posted or uploaded by you to our sites constitutes a violation of their intellectual property rights, or of their right to privacy.</li>
  <li>We will not be responsible, or liable to any third party, for the content or accuracy of any information posted by you or any other user of our site.</li>
  <li>We have the right to remove any material or posting you make on our sites if, in our opinion, it is not applicable, suitable or in accordance with our code of conduct.</li>
  <li>We reserve the right to revoke membership if any of terms or our code of conduct is neglected.</li>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                 8. Prohibited uses
                 <ul>
  <li>Click N Send Limited prohibits any use of our site and you agree not to use our site for any of the following:</li>
  <ul>
    <li>Posting any incomplete, false information or information which you know or ought to have known is inaccurate.</li>
    <li>Deleting or revising any information posted by any other person or entity.</li>
    <li>You must not allow third parties access to our site which is restricted to a password user or disclose to or share the password with any third parties or use the password for any purpose.</li>
    <li>Copying or adapting any part of our site or computer code.</li>
    <li>Posting material that infringes the intellectual property rights of third parties.</li>
    <li>Posting any information which is obscene and/or defamatory.</li>
    <li>Posting information that contains viruses or programs that may destabilize the operation of our site.</li>
  </ul>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    9. Viruses, hacking and other offences
                    <ul>
  <li>You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs, or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored, or any server, computer, or database connected to our sites. You must not attack our sites via a denial-of-service attack or a distributed denial-of-service attack.</li>
  <li>By breaching this provision, you would commit a criminal offense under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities, and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our sites will cease immediately.</li>
  <li>We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses, or other technologically harmful material that may infect your computer equipment, computer programs, data, or other proprietary material due to your use of our sites or to your downloading of any material posted on it, or on any website linked to it.</li>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    10. Subscription to our sites
                    <ul>
  <li>Membership Subscription with Click N Send Limited will be available only once:</li>
  <ul>
    <li>The subscriber has provided such information as required by Click N Send Limited, such as but not limited to, trading name, address, contact details, and legal entities, which have been provided and verified.</li>
    <li>Click N Send Limited has received payment from the subscriber for the subscription period applicable at that time or subscription agreements have been completed through third parties we choose, such as GoCardless, if the subscriber chooses to pay monthly, quarterly, or bi-annually.</li>
    <li>Click N Send Limited will not disclose to any third party such personal information without the prior written consent of the subscriber, except to the extent necessary or appropriate to comply with applicable laws or in legal proceedings where such personal information is relevant.</li>
    <li>Click N Send Limited may use such information interpreted from Cookies in order to preserve the integrity of the subscriber’s password and username and may also use the Cookies for statistical analysis.</li>
    <li>Any refund of pre-paid subscription fees before the expiration of the subscription is solely at the discretion of Click N Send Limited.</li>
    <li>To complete your subscription to Click N Send Limited, you will need to upload your insurance details, including your vehicle/fleet policy showing for Hire & Reward or equivalent, your Goods In Transit (GIT) policy or equivalent, and if applicable, policies such as Public and Employers Liability. Identification documentation such as driving licences may also be required for some subscribers and legal documentation for others depending upon the subscriber’s position.</li>
    <li>Click N Send Limited reserves the right to refuse subscription membership if we are not satisfied with the documents provided or to revoke subscriptions at any time should concerns arise regarding documentation provided.</li>
    <li>In the event you are running a vehicle/fleet which requires an operator's licence, this document will need to be uploaded.</li>
    <li>In the event that you fail to deliver any of these documents, Click N Send Limited reserves the right to refuse or revoke membership subscriptions. This includes if documents cannot be verified, are removed from the site, our code of conduct or terms are breached, or if any member acts in an inappropriate way or for any other reasons the directors see fit.</li>
    <li>Click N Send Limited reserves the right to accept or decline any membership requests, as well as suspend or revoke membership for any reason we deem appropriate.</li>
  </ul>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                   11. Payment Methods
                   <ul>
  <li>To use the Click N Send Limited service, you must provide one or more Payment Methods. You authorize us to charge any Payment Method associated with your account in case your primary Payment Method is declined or no longer available to us for payment of your subscription fee. You remain responsible for any uncollected amounts. If a payment is not successfully settled, due to expiration, insufficient funds, or otherwise, and you do not cancel your account, we will suspend your access to the service until we have successfully charged a valid Payment Method. For some Payment Methods, the issuer may charge you certain fees, such as foreign transaction fees or other fees relating to the processing of your Payment Method. Local tax charges may vary depending on the Payment Method used. Check with your Payment Method service provider for details.</li>
  <li>Changes to the Price and Subscription Plans. We may change our subscription plans and the price of our service from time to time; however, any price changes or changes to your subscription plans will apply no earlier than 30 days following notice to you.</li>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                 12. Renewal of subscription
                 <ul>
  <li>Click N Send Limited offers various subscription options: Monthly ongoing rolling basis, quarterly, bi-annually, or annually. If a paid-in-advance option is taken and a subscription is canceled, it is solely at the discretion of Click N Send Limited whether a refund is offered. On a rolling monthly subscription, subscribers can cancel anytime, with only the remaining period of the month paid for in advance. The subscription will remain live until the end of that period, after which it will cease, and access to the site will be removed.</li>
  <li>Renewal of all subscriptions will be subject to all points in clause 10.</li>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                   13. Members Feedback
                   <ul>
  <li>All members can leave and receive feedback for their performance on the site. You agree to receive feedback for your performances and to be fair, honest, and professional with the feedback you leave for other members.</li>
  <li>Click N Send Limited will remove any feedback if, including but not limited to, inappropriate, aggressive, unfair, or dishonest comments are made.</li>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                 14. Availability of our site
                 <ul>
  <li>Click N Send Limited shall use its reasonable endeavours to ensure continuous accessibility of our site and associated services but does not accept any liability arising from any errors, omissions, interruptions or delays, or any ongoing obligation to operate our site and associated services, howsoever caused.</li>
  <li>Click N Send Limited, in its absolute discretion, may vary the specification of our site and associated services at any time without notice.</li>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                  15. Linking to our site
                  <ul>
  <li>You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it. However, you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part where none exists.</li>
  <li>Linking to our home page is accepted to create a shortcut, but no links are permitted to any other part of our site.</li>
  <li>You must not establish a link from any website that is not owned by you.</li>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                   16. Links from our site
                   <ul>
  <li>Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them.</li>
  <li>Such links will generally be from partners in our Members Benefits page but not limited to should we decide to provide links from other areas of our site.</li>
</ul>

                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    17. Indemnity
                    <ul>
                      <li>You agree to indemnify and hold Click N Send Limited and its subsidiaries, affiliates, employees, officers, agents or partners harmless from and against any direct or indirect loss or damage (including consequential loss and loss of profits), goodwill or business opportunities arising from any third party claim in relation to any content that you upload, post or e-mail on or through our site, or your use of our site, or your breach of the provisions of these Terms.
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                   18. Termination
                   <ul>
                    <li>Click N Send Limited reserves the right, at its sole discretion, to pursue all of its legal remedies, including but not limited to issuing a warning, temporary suspension of the subscribers password, indefinite suspension, and immediate termination of your subscription should you breach these terms.</li>
                   </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                   19. Jurisdiction and applicable law
                   <ul>
                    <li>The Scottish courts will have exclusive jurisdiction over any claim arising from, or related to, a visit to our sites although we retain the right to bring proceedings against you for breach of these conditions in your country of residence or any other relevant country. These terms of use are governed by Scottish law.</li>
                   </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
               20. Variations
               <ul>
                <li>We may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these terms of use may also be superseded by provisions or notices published elsewhere on our sites.</li>
               </ul>
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default TermAndConditionSection;
