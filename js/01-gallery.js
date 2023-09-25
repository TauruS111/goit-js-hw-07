import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = galleryItems.map(item => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
}).join('');

const gallery = document.querySelector('.gallery');
gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const largeImageURL = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);
  instance.show();
});
console.log(galleryItems);

