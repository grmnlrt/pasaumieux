import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["pasaumieux.com"],
    typeSpeed: 100,
    loop: false
  });
}

export { loadDynamicBannerText };
