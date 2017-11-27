import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["pasaumieux.com"],
    typeSpeed: 100,
    loop: false
  });
}

function loadRandomPicture() {
  const banner = document.querySelector('#banner');
  const images = [];
  let i = 1;
  for (i; i < 6; i++) {
    images.push(`pasaumieux-${i}.jpg`)
  }

  const randomImage = images[Math.floor(Math.random()*images.length)];

  if (banner) {
    banner.style.backgroundImage = `linear-gradient(-225deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%), url("/images/${randomImage}")`
  }
}

export { loadDynamicBannerText };
export { loadRandomPicture };
