import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

galleryList.insertAdjacentHTML("afterbegin", markupGallery);

galleryList.addEventListener('click', onTargetClickGalllery);

function onTargetClickGalllery(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
      return;
    }
    const linkLargeImage = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${linkLargeImage}" width="800" height="600">
    `)

    instance.show();

    galleryList.addEventListener('keydown', event => { 
        if (event.code === 'Escape') 
            instance.close()
        })
};

console.log(galleryItems);