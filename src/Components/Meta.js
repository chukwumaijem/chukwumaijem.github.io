import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import chukwuma from '../images/chukwuma.jpg';
import favicon from '../images/favicon.png';

const Meta = () =>
  <Helmet>
    /** Global site tag (gtag.js) - Google Analytics */
    ReactGA.initialize('UA-110954268-1');
    ReactGA.pageview(window.location.pathname);

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="icon" type="image/png" href={favicon} />

    <meta id="og-title" property="og:title" content="Chukwuma Ezumezu - Software Developer" />
    <meta id="meta-description" property="og:description" content="In the course of my undergraduate studies, I fell in love with Technology and it has been my passion ever since. This passion has driven me into trying my hands on many of aspects of Technology. I have tinkered with graphic design, audio and video editing, character modeling and animation and pc hardware repairs. In programming I found my natural fit. Over the course of my software development journey, I have delved into varying technologies, frameworks and languages in order to deliver the best product." />
    <meta id="og-url" property="og:url" content="https://chukwumaijem.github.io/" />
    <meta id="og-image" property="og:image" content={chukwuma} item-height="200pc" item-width="200"/>
    <meta id="og-type" property="og:type" content="website" />

    <meta name="description" content="In the course of my undergraduate studies, I fell in love with Technology and it has been my passion ever since. This passion has driven me into trying my hands on many of aspects of Technology. I have tinkered with graphic design, audio and video editing, character modeling and animation and pc hardware repairs. In programming I found my natural fit. Over the course of my software development journey, I have delved into varying technologies, frameworks and languages in order to deliver the best product."/>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@chuma_ezums" />
    <meta name="twitter:domain" content="Chukwuma Ezumezu - Porfolio Page" />
    <meta name="twitter:title" content="Full Stack JavaScript Developer." />
    <meta name="twitter:description" content="In the course of my undergraduate studies, I fell in love with Technology and it has been my passion ever since. This passion has driven me into trying my hands on many of aspects of Technology. I have tinkered with graphic design, audio and video editing, character modeling and animation and pc hardware repairs. In programming I found my natural fit. Over the course of my software development journey, I have delved into varying technologies, frameworks and languages in order to deliver the best product." />
    <meta name="twitter:image" content={chukwuma} />
  </Helmet>

export default Meta;
