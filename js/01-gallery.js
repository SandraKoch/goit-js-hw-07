import { galleryItems } from "./gallery-items.js";
// Change code below this line
const basicLightbox = window.basicLightbox;
// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const myLibriary = {
  print: () => true,
};

let templates = galleryItems
  .map(
    (item) => `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", templates);

galleryEl.addEventListener("click", selectImage);

function selectImage(event) {
  const selectedImg = event.target.dataset.source;
  const selectedAlt = event.target.alt;
  //   console.log(selectedImg);
  const instance = basicLightbox.create(
    `<img src="${selectedImg}" alt="${selectedAlt}" width="800" height="600">`
  );
  instance.show(selectedImg);
  debugger;
  event.preventDefault();
}
