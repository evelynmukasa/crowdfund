const openMenu = document.getElementById('openMenu');
const imageOpenMenu = document.querySelector('.humbergerMenu img');
const menu = document.getElementById('menu');
const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const allContentDiv = document.getElementById('allContentDiv');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const sucessModal = document.querySelector('.sucessModal');
const sucessModalBtn = document.querySelector('.sucessModal button');
const modalOffers = document.querySelectorAll('.modalOffer');

document.querySelectorAll(".disabled").forEach(element=>element.style.pointerEvents = "none");

// opens the menu and changes the icon
openMenu.addEventListener('click', () => {
    if (imageOpenMenu.src.includes('images/icon-close-menu.svg')) {
      imageOpenMenu.src = 'images/icon-hamburger.svg';
    } else {
      imageOpenMenu.src = 'images/icon-close-menu.svg';
    }
    menu.classList.toggle('menuHidden');
});
// opens the modal
openModal.addEventListener('click', () => {
  modal.classList.remove('d-none');
  allContentDiv.classList.add('modalOpened');

  window.innerWidth > 992 ? window.scrollTo({
    top: window.innerHeight * 0.19,
    left: 0,
    behavior: 'smooth'
}) :
  window.scrollTo({
    top: window.innerHeight * 0.10,
    left: 0,
    behavior: 'smooth'
});
});


// activate the offer and reveal the form when the offer is clicked
modalOffers.forEach((offer) => {
    offer.addEventListener('click', () => {
        const radioInput = offer.querySelector('input[type="radio"]');
        radioInput.checked = true;
        handleInputChange(radioInput);
    });
});
// activate the offer and reveal the form when the radio button is checked
radioInputs.forEach((input) => {
    if (input.checked) {
        handleInputChange(input);
    }
    input.addEventListener('change', () => {
        handleInputChange(input);
  });
});
// closes the modal
closeModal.addEventListener('click', () => {
    dismissModal( modal);
});

function handleInputChange(input) {
    const selectedDiv = input.parentNode.parentNode;
    const form = selectedDiv.querySelector('form');
    const previousSelectedDivs = document.querySelectorAll('.borderActive');
    const buttonSubmit = form.querySelector('button');
    console.log(buttonSubmit);
  
    buttonSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('clicked');
      modal.classList.add('d-none');
      document.querySelector('.sucessModal').classList.remove('d-none');
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
    });
  
    sucessModalBtn.addEventListener('click', () => {
      sucessModal.classList.add('d-none');
      allContentDiv.classList.remove('modalOpened');
      dismissModal( sucessModal);
    });
  
    previousSelectedDivs.forEach((previousSelected) => {
      const previousSelectedDivForm = previousSelected.querySelector('form');
      previousSelected.classList.remove('borderActive');
      previousSelectedDivForm.classList.add('d-none');
    });
  
    selectedDiv.classList.toggle('borderActive', input.checked);
    form.classList.remove('d-none');
}
function dismissModal(modal) {
    modal.classList.add('d-none');
    allContentDiv.classList.remove('modalOpened');
    document.querySelectorAll('.borderActive').forEach((previousSelected) => {
        const previousSelectedDivForm = previousSelected.querySelector('form');
        previousSelected.classList.remove('borderActive');
        previousSelectedDivForm.classList.add('d-none');
    });
    radioInputs.forEach((input) => {
        input.checked = false;
    });
}

