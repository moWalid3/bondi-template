//
//
let navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    navLinks.forEach((e) => e.classList.remove("active"));
    ele.classList.add("active");
  });
});

let lis = document.querySelectorAll(".our-work ul.category li");
let imgsBoxes = document.querySelectorAll(".our-work .parent>div");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((ele) => ele.classList.remove("active"));
    li.classList.add("active");
    let count = 1;
    imgsBoxes.forEach((imgBox) => {
      if (li.dataset.category === "all") {
        imgBox.classList.remove("hidden");
      } else {
        if (imgBox.dataset.category === li.dataset.category) {
          imgBox.classList.remove("hidden");
          imgBox.style.order = count++;
        } else {
          imgBox.classList.add("hidden");
          imgBox.style.order = imgsBoxes.length - count;
        }
      }
    });
  });
});
