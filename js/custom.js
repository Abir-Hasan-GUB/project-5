// ======== Home Page =======

const bar = document.querySelector('.bar');
var clicked = false;

function toggleImg() {
  if (clicked) {
    clicked = false;
    bar.src = 'https://image.flaticon.com/icons/png/512/130/130918.png';
  } else {
    bar.src = 'https://image.flaticon.com/icons/png/512/748/748122.png';
    clicked = true;
  }
}
    bar.addEventListener('click', () => {
        toggleImg();
    } ); // toggle main menu handle button



