import { loadDynamicBannerText } from './components/banner';
import { loadRandomPicture } from './components/banner';
import { reloadButton } from './components/banner';

document.addEventListener('DOMContentLoaded', () => {
  loadDynamicBannerText();
  loadRandomPicture();
  reloadButton();
});
