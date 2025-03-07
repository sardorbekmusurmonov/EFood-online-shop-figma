function categorySlide() {
  const slide = document.querySelectorAll(".category_main");

  const next = document.querySelector("#category-btn-next");
  const prev = document.querySelector("#category-btn-prev");

  let count = 0;

  function hideContent() {
    slide.forEach((item) => {
      item.classList.add("hide");
    });
  }

  hideContent();

  function showContent(index = null) {
    hideContent();
    slide[index].classList.remove("hide");
  }
  showContent(count);

  next.addEventListener("click", () => {
    count = (count + 1) % slide.length;
    showContent(count);
  });
  prev.addEventListener("click", () => {
    if (count === 0) {
      count = slide.length - 1;
    } else {
      count = count - 1;
    }
    showContent(count);
  });
}
categorySlide();

function categoryAll() {
  const photos = document.querySelectorAll(".category_main");
  const tugmalar = document.querySelectorAll(".active-category-button");

  const next = document.querySelector(".right");
  const prev = document.querySelector(".left");

  let count = 0;

  function hideContent() {
    photos.forEach((item) => {
      item.classList.add("hide");
    });
  }

  hideContent();

  function showContent(index = null) {
    hideContent();
    photos[index].classList.remove("hide");
  }
  showContent(count);

  tugmalar.forEach((tugma, count) => {
    tugma.addEventListener("click", () => {
      showContent(count);
      tugmalar.forEach((btn) => {
        if (btn === tugma) {
          btn.style.backgroundColor = "#ff7a50";
        } else {
          btn.style.backgroundColor = "";
        }
      });
    });
  });
}
categoryAll()