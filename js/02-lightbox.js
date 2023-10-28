import { galleryItems } from "./gallery-items.js";

// Create and render the gallery items (similar to the first exercise)
const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
  listEl.append(listItemEl);
});

// Initialize SimpleLightbox with options
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
