import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');


const markupGallery = galleryItems.map((galleryItem) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`).join('');


galleryList.insertAdjacentHTML("afterbegin", markupGallery);


const galeryList = document.addEventListener('click', onTargetClickGalllery);

function onTargetClickGalllery(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const linkLargeImage = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${linkLargeImage}" width="800" height="600">
    `)

    instance.show()
}

console.log(galleryItems);