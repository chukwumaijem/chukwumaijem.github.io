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

  const metas = [
    { 'charSet': 'utf-8' },
    { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1' },
    { 'httpEquiv': 'x-ua-compatible', 'content': 'ie=edge' },
    { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
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
