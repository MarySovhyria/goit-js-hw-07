import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery")
const markup = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`);

container.insertAdjacentHTML('beforeend', markup.join(""))
container.addEventListener('click', onclick)

function onclick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    const picture = event.target.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${picture}">`
        );
    instance.show();
}