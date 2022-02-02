import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const imageMarkup = createImgCard(galleryItems);
console.log(galleryItems);

galleryList.insertAdjacentHTML('beforeend',imageMarkup);

createImgCard(galleryList);

function createImgCard(galleryItems){
return galleryItems.map



}
