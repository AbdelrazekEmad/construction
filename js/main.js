// Start Scroll to Top Btn

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// show and hide navbar and scroll to top btn when scrolling
window.onscroll = function () {
  // change navbar visabilty
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navgationbar").style.backgroundColor = "black";
  } else {
    document.getElementById("navgationbar").style.backgroundColor =
      "transparent";
  }

  // change scroll to top btn visabilty
  if (document.documentElement.scrollTop > 200) {
    document.getElementById("scroll-top").style.display = "block";
  } else {
    document.getElementById("scroll-top").style.display = "none";
  }
};

let filterTabs = document.querySelectorAll(".projects__navs li");
let gallaryContent = Array.from(
  document.querySelectorAll(".Projects__iteams .row .all")
);

filterTabs.forEach((tab) => {
  tab.addEventListener("click", handilClassAcive);
  tab.addEventListener("click", handilGallaryContent);
});

function handilClassAcive() {
  filterTabs.forEach((tab) => {
    tab.classList.remove("active");
    this.classList.add("active");
  });
}

function handilGallaryContent() {
  gallaryContent.forEach((box) => {
    box.style.display = "none";
    console.log(document.querySelectorAll(this.dataset.project));
  });
  document.querySelectorAll(this.dataset.project).forEach((el) => {
    el.style.display = "block";
  });
}

// cheap of dots for all slider
// $(".owl-carousel-testimonials .owl-dot span").css({

//   border: "1px solid black",
//   padding: "1rem",
// });
