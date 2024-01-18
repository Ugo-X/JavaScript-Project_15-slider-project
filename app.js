const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// iterating over our slides and adjusting their positions to the left
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

// next and prev button event listeners

nextBtn.addEventListener("click", function () {
  counter++;
  startCount();
});

prevBtn.addEventListener("click", function () {
  counter--;
  startCount();
});

// for each slide when a certain button is clicked, a transform property is added
function startCount() {
// // (for reference
// //   if (counter === slides.length) {
//     counter = 0;
//   }
// if(counter < 0 ){
//     counter = slides.length - 1
   
// })
// button gotchas(here once the slider gets to the end of the slides, the next button is hidden, hereby the user cannot even go next, same applies for the previous button)
if(counter < slides.length -1){
    nextBtn.style.display = 'block'
}
else{
    nextBtn.style.display = 'none'
}
if (counter > 0){
    prevBtn.style.display = 'block'
}
else{
    prevBtn.style.display = 'none'
}

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%) `;
  });
}
prevBtn.style.display = 'none'

// imagine a scenario where your clicked your nextBtn and your counter value was 4, the start count function will automatically pick the counter value of 4 and multiply it by 100. after being multiplied by a negative sign, the counter transform(translate will) slide the next image to the left of it's starting position eg 100%, 200% etc.
// mean while when you click the prevBtn, the counter will be decreased by one, therefore the starting position of the image will also decrease eg -300% will most definetly be the starting position of the third image.
