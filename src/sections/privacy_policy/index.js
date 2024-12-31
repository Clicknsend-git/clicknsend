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

const PrivacyPolicySection = () => {
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
              Privacy Policy
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
              Privacy & Policy
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
                    Click N Send Limited Privacy Policy
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    1. Background: who we are This Policy applies to all users
                    of the online platforms (defined below) developed by the
                    Click n Send Limited (“We“, “Us”, “Our” etc).  Please note
                    that a privacy notice applies to users of the mobile
                    applications developed by Click n Send Limited , which can
                    be found below as well. Your privacy is important to us, so
                    We have created a policy that covers how We collect, use and
                    store your personal data. Please take a moment to
                    familiarise yourself with Our privacy practices. Click n
                    Send applications belonging to Us or to our affiliate(s)from
                    time to time (referred to herein as the “Platform(s)”) is
                    committed to protecting and respecting your privacy. This
                    Privacy and Cookies Policy (“Policy”) (together with and any
                    other documents referred to therein) sets out the basis on
                    which the personal data collected from you, or that you
                    provide to Us will be processed by Us. Please read the
                    following carefully to understand Our views and practices
                    regarding your personal data and how We will treat it.  For
                    the purpose of the General Data Protection Regulation (UK
                    and EU versions) and the Data Protection Act 2018
                    (collectively the “Data Protection Laws”) the Data
                    Controller is Click n Send Limited.
                  </Typography>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    2. Collecting your personal data
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    2.1 Your personal data that we collect from you We collect
                    and process some or all of the following types of
                    information from you in the course of your use of the
                    Platforms or providing Our services:
                    <ul>
                      <li>
                        Information that you provide by filling in forms on the
                        Platforms or filling in forms as part of the
                        registration process, verbally, via email or any other
                        medium. This includes information provided at the time
                        of registering to use the Platforms, subscribing to and
                        using our service, or requesting further information or
                        services.
                      </li>
                      <li>
                        We may also ask you for information when you for example
                        report a problem with the Platforms.
                      </li>
                      <li>
                        This could include, but not limited to, passport or
                        other identity document, driving licence, full name,
                        date of birth, email address, contact details,
                        residential address, images of your vehicle, vehicle
                        registration number, vehicle insurance certificate,
                        vehicle rental agreement, operator’s licence, bank
                        details, name of director (for businesses), or any other
                        information entered when using the Platforms, completing
                        our survey forms, or using our services.
                      </li>
                      <li>
                        If you contact us, we may keep a record of that
                        correspondence.
                      </li>
                      <li>
                        We may also ask you to complete surveys that We use for
                        research purposes, although you do not have to respond
                        to them.
                      </li>
                      <li>
                        Details of your visits to the Platforms including, but
                        not limited to, traffic data, location data, weblogs and
                        other communication data, and the resources that you
                        access.
                      </li>
                    </ul>
                  </Typography>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    2.2 Special categories and other sensitive data we collect
                    from you We do not collect details about your race or
                    ethnicity, religious or philosophical beliefs, sex life,
                    sexual orientation, political opinions, trade union
                    membership, health, or genetic data. We conduct live facial
                    recognition checks via the Trustd app in order to confirm
                    your identity against your identity documents.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    2.3 Your personal data that We collect from other sources We
                    will obtain personal data from other sources as follows:
                    <ul>
                      <li>
                        From our affiliate when you use the Trustd app owned by
                        our affiliate Managed Identities Limited to obtain
                        verification reports.
                      </li>

                      <li>
                        Publicly available sources which include, but are not
                        limited to, Google, Companies House and social media
                        platforms.
                      </li>
                      <li>Private sources such as Creditsafe.</li>
                      <li>
                        From our insurance partners from whom you have obtained
                        a policy, and where you have given appropriate
                        permissions, in order for us to check that you have
                        appropriate insurance policies in force.
                      </li>
                      <li>DVLA and other driving license records providers.</li>
                      <li>Compliance check providers.</li>
                    </ul>
                    We collect information about any driving offences and points
                    on your driving license as part of our compliance check
                    service. 
                  </Typography>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    3. Lawful basis for processing Consent / Performance of a
                    contract Where you are the person asking for Our services,
                    we rely on consent for processing sensitive personal data
                    and both ‘consent’ and the ‘performance of a contract’ for
                    processing your personal data. We are unable to provide the
                    services if you do not consent so please discontinue use of
                    Our website if you do not consent. We rely on “performance
                    of a contract” to collect, use and share (in accordance with
                    this policy only) your personal data in order to provide Our
                    services pursuant to an agreement with you or your employer.
                    If your employer has asked us for these checks, they must
                    have their own privacy policy in place. If you object to
                    this, please discontinue use of Our website and take this up
                    with your employer. If you are entering personal data of
                    your employer’s staff on behalf of your employer, you must
                    ensure that you have a lawful basis under applicable data
                    protection laws to do so. If you are unsure whether you have
                    this, please discontinue use of Our website and take this up
                    with your employer. Should you use our invoice factoring
                    services, we will share your data any other invoice
                    factoring providers we may add to platform from time to
                    time. Legitimate interest We collect, use and share (in
                    accordance with this policy only) your personal data in
                    order to provide our services pursuant to an agreement with
                    an organisation that has engaged you; We use and process
                    your contact details to correspond with you to build a
                    potential business relationship, including providing you
                    with materials and information We feel may be of interest to
                    you; or We may collect, use and share (in accordance with
                    this policy only) your personal data in order for you to
                    receive services from a service provider pursuant to an
                    agreement entered between you and the service provider.
                    Marketing to our customers (soft opt-in) We and our related
                    companies may send you newsletters and promotional materials
                    from time to time with regard to similar services because
                    you are our customer. You can opt out of these at any time
                    via the “unsubscribe” link provided in each promotional
                    email or newsletter. Marketing of third-party goods or
                    services with your consent Should We ever share your
                    information with third party advertisers, We will ask for
                    your consent beforehand, which would be the lawful basis.
                    You do not have to agree and if you do, you may change your
                    mind and opt out at a later date using the method provided
                    by the relevant third party. Surveys We rely on your consent
                    as the lawful basis where you have agreed to participate in
                    a survey, and for the processing of such personal
                    information as has been collected through that survey.
                  </Typography>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    4. Purposes of processing We use information held about you
                    in the following ways :
                    <ul>
                      <li>To provide you with our services.</li>
                      <li>
                        To ensure that content on the Platforms is presented in
                        the most effective manner for you and for the device(s)
                        you use to access and view the Platforms;
                      </li>
                      <li>
                        To provide you with information and offers that you
                        request from Us or which We feel may interest you.
                      </li>
                      <li>
                        To carry out our obligations arising from any contracts
                        entered into between Us and you / your employer.
                      </li>
                      <li>
                        To allow you to participate in interactive features of
                        our service, when you choose to do so.
                      </li>
                      <li>To notify you about changes to our services.</li>
                      <li>
                        To enable Us to refer you to our business partners or
                        share your data with third parties, where you have
                        authorised or asked Us to do so.
                      </li>
                      <li>
                        For marketing our products and services and similar
                        products and services.
                      </li>
                    </ul>
                  </Typography>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    5. Disclosure of information We routinely disclose your
                    personal data to third parties as follows:
                    <ul>
                      <li>
                        We may pass your information to our third-party service
                        providers, agents, subcontractors and other associated
                        organisations for the purposes of completing tasks and
                        providing services to you on our behalf{" "}
                      </li>
                      <li>
                        Where you have agreed to use the services of a service
                        provider that is registered with us, we may share your
                        information with such service providers in order for
                        them to provide you with their services.
                      </li>
                       We may also disclose your personal data to third parties:
                      <ul>
                        <li>
                          in the event that We sell or buy any business or
                          assets, in which case We may disclose your personal
                          data to the prospective seller or buyer of such
                          business or assets;
                        </li>
                        <li>
                          if We or substantially all of our assets are acquired
                          by a third party, in which case personal data held by
                          Us about our customers will be one of the transferred
                          assets;
                        </li>
                        <li>
                          if We are under a duty to disclose or share your
                          personal data in order to comply with any legal
                          obligation, or in order to enforce or apply our Terms
                          and Conditions and other agreements;
                        </li>
                        <li>
                          to protect Our rights, property, or safety or that of
                          our affiliated entities and our users and any third
                          party We interact with the to provide the Platforms;
                        </li>
                        <li>
                          in relation to selected third parties only, only to
                          the extent that you have consented to such selected
                          third parties notifying you about certain goods or
                          services, which may be if interest to you;
                        </li>
                        <li>
                          in relation to our insurance partners, to enable us to
                          refer you to them where you have authorised or asked
                          Us to do so. Other than as set out above, and save
                          insofar as is necessary in order for Us to carry out
                          our obligations arising from any contracts entered
                          into between you and Us, We will not share your data
                          with third parties unless We have procured your
                          express consent to do so. This Policy applies to all
                          users of Mobile Applications (each referred to herein
                          as the “Mobile App”) developed by the Click n Send
                          Limited Your privacy is important to us, so we've
                          created a policy that covers how we collect, use and
                          store your personal data. Please take a moment to
                          familiarise yourself with our privacy practices.
                        </li>
                      </ul>
                    </ul>
                    Where you are authorised to use the Mobile App by an
                    organisation that has engaged you to perform courier or
                    other services ("Authorising Company"), in addition to Our
                    use of your personal data as set out herein, we may process
                    your personal data on behalf of the Authorising Company (in
                    this case we are a data processor). You should contact the
                    Authorising Company to find out what they do with your
                    personal data. Click n Send Limited, which shall include but
                    not be limited to Clicknsend.co.uk (“We“, “Us”) is committed
                    to protecting and respecting your privacy. This Privacy and
                    Cookies Policy (“Policy”) (together with and any other
                    documents referred to therein) sets out the basis on which
                    the personal data collected from you, or that you provide to
                    Us will be processed by Us. Please read the following
                    carefully to understand our views and practices regarding
                    your personal data and how We will treat it.
                  </Typography>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    Click n Send Limited, which shall include but not be limited
                    to Clicknsend.co.uk (“We“, “Us”) is committed to protecting
                    and respecting your privacy. This Privacy and Cookies Policy
                    (“Policy”) (together with and any other documents referred
                    to therein) sets out the basis on which the personal data
                    collected from you, or that you provide to Us will be
                    processed by Us. Please read the following carefully to
                    understand our views and practices regarding your personal
                    data and how We will treat it.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    For the purpose of the General Data Protection Regulation
                    and the Data Protection Act 2018 (collectively the “Data
                    Protection Laws”) the Data Controller is Transport Exchange
                    Group Ltd.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    Your personal information We collect and process some or all
                    of the following types of information from you in the course
                    of your use of the Mobile App or providing our services:
                    <ul>
                      <li>
                        Information provided in connection with the registration
                        of your account either by you or by an organisation that
                        has authorised you to use our Mobile App ("Authorising
                        Company"). This includes:
                        <ul>
                          {" "}
                          <li> Name</li>
                          <li> Email address</li>
                          <li> Telephone number</li>
                          <li>Login details</li>
                          <li> Vehicle registration number</li>
                          <li> Insurance details</li>
                        </ul>
                      </li>
                      <li>
                        Information that you provide to Us either via your
                        account, orally, via email or via any other medium. This
                        may include information provided when you request
                        further information or services, or report a problem
                        with the Mobile App.
                      </li>
                      <li>
                        If you contact Us, We may keep a record of that
                        correspondence.
                      </li>
                      <li>
                        Information collected automatically via the Mobile App,
                        which includes the following:
                        <ul>
                          <li>
                            {" "}
                            Location data - We use GPS technology, cellular data
                            and IP addresses to determine your current or
                            approximate location. Some of our location-enabled
                            services require your personal data for the feature
                            to work. If you wish to use the particular feature,
                            you will be asked to consent to your data being used
                            for this purpose. You can withdraw your consent at
                            any time by disabling location data in your
                            settings, although carriers and brokers cannot fully
                            use the Mobile App If they do not permit location
                            data collection. Location data will be collected
                            both when you are using the Mobile App, and when the
                            Mobile App is running in the background.
                          </li>
                          <li>
                            Service information - this includes the type of
                            services requested or provided by you, date and time
                            the service was provided, any photographs uploaded
                            by you.
                          </li>
                          <li>
                            Device data - We collect data about devices used to
                            access our services which is used by Our customer
                            support team to provide support to you.
                          </li>
                          <li>
                            Usage data - how you interact with our services
                            (including analytics that we or third parties, such
                            as Google Firebase, conduct to improve our
                            services), dates and times you access the Mobile
                            App, or other system activity.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Typography>

                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    6. Storing your personal data We take appropriate measures
                    to ensure that any personal data is kept secure, including
                    security measures to prevent personal data from being
                    accidentally lost, or used or accessed in an unauthorised
                    way. We limit access to your personal data to those who have
                    a genuine business need to know it. Those processing your
                    information will do so only in an authorised manner and are
                    subject to a duty of confidentiality. Where We process
                    payment transactions, these will be encrypted using SSL
                    technology. Where We have given you (or where you have
                    chosen) a password which enables you to access certain parts
                    of the websites/applications, you are responsible for
                    keeping this password confidential. We also have procedures
                    in place to deal with any suspected data security breach. We
                    will notify you (by email) and any applicable regulator via
                    the correct channels of a data security breach where We are
                    legally required to do so. Unfortunately, the transmission
                    of information via the internet is not completely secure.
                    Although We will do our best to protect your personal data,
                    We cannot guarantee the security of your data transmitted to
                    the website or our application; any transmission is at your
                    own risk. Once We have received your information, We will
                    use strict procedures and security features to try to
                    prevent unauthorised access. The Platforms may, from time to
                    time, contain links to and from the websites of our partner
                    networks, advertisers and affiliates. If you follow a link
                    to any of these websites, please note that these websites
                    have their own privacy policies and terms of use and that we
                    do not accept any responsibility or liability for these
                    policies and terms of use. Please check these policies
                    before you submit any personal data to these websites.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    7. Keeping your data up to date If your personal details
                    change you may update them by accessing the relevant page of
                    the Platforms, or by contacting Us using the contact details
                    below. If you have any questions about how We use data
                    collected which relates to you, please contact Us by sending
                    a request by email to the contact details below.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    8. How long we keep your personal data We will hold personal
                    data including but not limited to name, address and contact
                    details for the period we are required to retain this
                    information by applicable UK tax law, currently six years.
                    We may store other personal information that you have
                    provided us for as long as it is reasonably necessary taking
                    into consideration our need to provide you with the services
                    you have signed up to, to resolve any disputes, enforce our
                    rights and/or respond to queries. If you have any questions
                    about our data retention policy, please contact us.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    9. Where we store your personal data Click n Send Limited
                    makes use of cloud computing platforms and third-party
                    service providers to deliver its services. This may involve
                    storing or transferring your personal data outside of the UK
                    and the EEA. When we transfer or store the information that
                    We collect from you at a destination outside the European
                    Economic Area (“EEA”),it is processed by staff operating
                    outside the EEA who work for Us or for one of our suppliers.
                    Such staff maybe engaged in, among other things, fulfilling
                    your orders, undertaking compliance checks, processing your
                    payment details and providing support services. By
                    submitting your personal data, you agree to this transfer,
                    storing or processing. In countries that do not have the
                    same data protection laws as the United Kingdom and EEA, we
                    ensure that any personal data being transferred has an
                    adequate level of data protection similar to that which
                    applies in the United Kingdom and EEA, and any transfer of
                    your personal data is subject to an agreement with these
                    third parties approved by the UK Information Commissioner’s
                    Office. If you would like further information, please
                    contact Us (see ‘Contact’ below). We will not otherwise
                    transfer your personal data outside of the United Kingdom or
                    EEA or to any organisation (or subordinate bodies) governed
                    by public international law or which is set up under any
                    agreement between two or more countries.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    10.Your rights Under the General Data Protection
                    Regulation you have a number of important rights free of
                    charge. In summary, those include rights to:
                    <ul>
                      <li>
                        access to your personal data and to certain other
                        supplementary information that this Policy is already
                        designed to address
                      </li>
                      <li>
                        require Us to correct any mistakes in your information
                        which we hold
                      </li>
                      <li>
                        require the erasure of personal data concerning you in
                        certain situations
                      </li>
                      <li>
                        receive the personal data concerning you which you have
                        provided to Us, in a structured, commonly used and
                        machine-readable format and have the right to transmit
                        those data to a third party in certain situations
                      </li>
                      <li>
                        object at any time to processing of personal data
                        concerning you for direct marketing
                      </li>
                      <li>
                        object to decisions being taken by automated means which
                        produce legal effects concerning you or similarly
                        significantly affect you
                      </li>
                      <li>
                        object in certain other situations to our continued
                        processing of your personal data
                      </li>
                      <li>
                        otherwise restrict our processing of your personal data
                        in certain circumstances
                      </li>
                      <li>
                        claim compensation for damages caused by our breach of
                        any data protection laws For further information on each
                        of those rights, including the circumstances in which
                        they apply, see the Guidance from the UK Information
                        Commissioner’s Office (ICO) on individuals rights under
                        the General Data Protection Regulation.  If you would
                        like to exercise any of those rights, please:
                        <ul>
                          <li>
                            email, call or write to us (see ‘Contact’ below)
                          </li>
                          <li>
                            let us have enough information to identify you for
                            example member ID, user name, registration details.
                          </li>
                          <li>
                            let us have proof of your identity and address (a
                            copy of your driving licence or passport and a
                            recent utility or credit card bill), and
                          </li>
                          <li>
                            let us know the information to which your request
                            relates, including any account or reference numbers,
                            if you have them.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    11. Making a formal complaint We hope that We can resolve
                    any query or concern you raise about our use of your
                    information. The General Data Protection Regulation also
                    gives you right to lodge a complaint with a supervisory
                    authority, in particular in the European Union (or European
                    Economic Area) state where you work, normally live or where
                    any alleged infringement of data protection laws occurred.
                    The supervisory authority in the UK is the Information
                    Commissioner who may be contacted
                    at https://ico.org.uk/concerns/ or telephone 0303 123 1113.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    12. Changes to our privacy policy We reserve the right to
                    modify this policy at any time. Any changes We may make to
                    our policy in the future will be notified and made available
                    to you using the Platforms. Your continued use of the
                    services and the Platforms shall be deemed your acceptance
                    of the varied privacy policy.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    13. Cookies and IP addresses We may collect information
                    about your mobile phone, computer or other device from which
                    you access the Platforms including where available your IP
                    address, operating system, screen size and resolution, and
                    browser type, for systems administration and to report
                    aggregate information to third parties affiliates. This is
                    statistical data about our users’ browsing actions and
                    patterns, and does not identify any individual. We may,
                    however, use such information in conjunction with the data
                    We have about you in order to track your usage of our
                    services. A cookie is a small file of letters and numbers
                    that We store on your browser or the hard drive of your
                    computer if you agree. Cookies contain information that is
                    transferred to your computer’s hard drive. The cookies We
                    use include:
                    <ul>
                      <li>
                        {" "}
                        Analytical cookies. They allow Us to recognise and count
                        the number of visitors and to see how visitors move
                        around the Platforms when they are using it. This helps
                        Us to improve the way our Platforms work, for example,
                        by ensuring that users are finding what they are looking
                        for easily.
                      </li>
                      <li>
                        Strictly necessary cookies. These are cookies that are
                        required for the operation of our Platforms. They
                        include, for example, cookies that enable you to log
                        into secure areas of our Platforms, or cookies that let
                        us know you have accepted this privacy policy.
                      </li>
                      <li>
                        Functionality cookies. These are used to recognise you
                        when you return to our Platforms. This enables Us to
                        personalise our content for you, greet you by name and
                        remember your preferences (for example, your choice of
                        language or region).
                      </li>
                      <li>
                        Targeting cookies. These cookies record your visit to
                        our Platforms, the pages you have visited and the links
                        you have followed to our affiliates websites. We will
                        use this information to make our Platforms, offers
                        e-mailed to you and the advertising displayed on it more
                        relevant to your interests. We may also share this
                        information with third parties for this purpose. Please
                        note that third party affiliates may also use cookies,
                        over which We have no control.
                      </li>
                      <li>
                        More information about the cookies we include and how to
                        manage them can be found here:
                        <ul>
                          <li>Marketing websites.</li>
                          <li>Click n Send Platform</li>
                        </ul>
                      </li>
                    </ul>
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                   Cookies which are strictly necessary for the core functionality of the Platforms are enabled by default, and set automatically at the point you access the Platforms.
Any cookies which are not strictly necessary for the functioning of the Platforms will not be set unless you expressly consent to them through the cookie banner by clicking “accept”.
You may block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of the Platform. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies as soon as you visit our Platforms.
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    14. Contact
                    All questions, comments and requests regarding this privacy policy should be addressed to Click n Send Limited at the following address, or via
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                   admin@clicknsend.co.uk
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                 51 Hillside Drive, Portlethen, Aberdeen. AB12 4TG
                 
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

export default PrivacyPolicySection;
