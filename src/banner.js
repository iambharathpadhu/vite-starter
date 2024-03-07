import { banner } from './banner.module.css';

export const addBanner = (text) => {
  document.querySelector('#content').textContent = text;
  document.querySelector('#content').classList.add(banner);
};
