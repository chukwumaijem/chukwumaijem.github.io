import React from 'react';
import Helmet from 'react-helmet';
import chukwuma from '../images/chukwuma.jpg';
import favicon from '../images/favicon.png';

const Meta = () => {
  let scripts = [
    { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-110954268-1' },
    {
      innerHTML: `{
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-110954268-1');
        }`
    },
  ];

  const title = 'Chukwuma Ezumezu - Software Developer';
  const description = 'In the course of my undergraduate studies, I fell in love with Technology and it has been my passion ever since. This passion has driven me into trying my hands on many of aspects of Technology. I have tinkered with graphic design, audio and video editing, character modeling and animation and pc hardware repairs. In programming I found my natural fit. Over the course of my software development journey, I have delved into varying technologies, frameworks and languages in order to deliver the best product.';

  const metas = [
    { 'charSet': 'utf-8' },
    { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1' },
    { 'httpEquiv': 'x-ua-compatible', 'content': 'ie=edge' },
    { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
    { 'property': 'og:title', 'content': title },
    { 'property': 'og:description', 'content': description },
    { 'property': 'og:url', 'content': 'https://chukwumaijem.github.io' },
    { 'property': 'og:image', 'content': chukwuma, 'item-height': '200px', 'item-width': '200px' },
    { 'property': 'og:type', 'content': 'website' },
    { 'name': 'description', 'content': description },
    { 'name': 'twitter:card', 'content': 'summary_large_image' },
    { 'name': 'twitter:site', 'content': '@chuma_ezums' },
    { 'name': 'twitter:domain', 'content': title },
    { 'name': 'twitter:title', 'content': 'Full Stack JavaScript Developer.' },
    { 'name': 'twitter:description', 'content': description },
    { 'name': 'twitter:image', 'content': chukwuma }
  ];
  const links = [
    { 'rel': 'shortcut icon', 'type': 'image/x-icon', 'href': favicon }
  ];

  return (
    <Helmet
      meta={metas}
      link={links}
      script={scripts}
    />
  )
}

export default Meta;
