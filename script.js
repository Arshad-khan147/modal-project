'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// if we want to select a multiple element of same class then we will use querySelectorAll function that nice of you;
const btnshowmodal = document.querySelectorAll('.show-modal');
// console.log(btnshowmodal);
// console.log(btnCloseModal);
// console.log(overlay);
// console.log(modal);
for (let i = 0; i < btnshowmodal.length; i++)
  btnshowmodal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// javascript classlist is the dom property of javascript that allows for styling the css classes of an element . javascript classlist is a read-only property that return the names of the css classes.
