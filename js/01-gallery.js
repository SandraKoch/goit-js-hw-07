import { galleryItems } from "./gallery-items.js";
// Change code below this line
const basicLightbox = window.basicLightbox;
// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

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

let instance;

function selectImage(event) {
  const selectedImg = event.target.dataset.source;
  const selectedAlt = event.target.alt;
  //   console.log(selectedImg);
  instance = basicLightbox.create(
    `<img src="${selectedImg}" alt="${selectedAlt}" width="800" height="600">`
  );
  instance.show(selectedImg);
  // debugger;
  event.preventDefault();
}

const handleEscClick = (event) => {
  if (instance != undefined && event.keyCode == 27) {
    // If ESC key is pressed
    instance.close(() => console.log("lightbox not visible anymore"));
    instance = undefined;
  }
};

document.addEventListener("keydown", handleEscClick);
