const testimonials = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");

// testimonials.forEach((slide, index) => {
//   slide.addEventListener("mousemove", () => {
//     if (slide.getBoundingClientRect() > 0) {
//       console.log(slide);
//     }
//   });
// });

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    console.log();
    // testimonials.forEach((ele) => {
    //   ele.classList.remove("active");
    // });
    dots.forEach((el) => {
      el.classList.remove("active");
    });

    dot.classList.add("active");
    const ele = document.getElementById(e.target.id);
    ele.classList.add("active");
  });
});
