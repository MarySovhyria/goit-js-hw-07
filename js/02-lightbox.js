import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery")
const markup = galleryItems.map(({preview, original, description}) => 
`<li>
    <a href = "${original}">
        <img class = "js-target" data-source = "${original} " src = "${preview}" alt = "${description}">
    </a>
</li>`
)
container.insertAdjacentHTML('beforeend', markup.join(""))
container.addEventListener('click', onclick)

function onclick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('js-target')) {
        return
    }
    const picture = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <div class = "modal"><img src="${picture}" ></div>
`);
    instance.show()
}
var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionsDelay: 250,
 });