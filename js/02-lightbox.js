import { galleryItems } from "./gallery-items.js";
// Change code below this line
const SimpleLightbox = window.SimpleLightbox;
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

let templates = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}" title="${item.description}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
    `
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", templates);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
