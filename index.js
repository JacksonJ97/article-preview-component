const articleFooter = document.querySelector(".article-footer");
const shareBtn = document.querySelector(".share-btn");
const shareContainer = document.querySelector(".share-container");
const darkShareBtn = document.querySelector(".dark-share-btn");
const desktopShareContainer = document.querySelector(".desktop-share-container");

articleFooter.style.display = "flex";
shareContainer.style.display = "none";
desktopShareContainer.style.display = "none";

function toggleDisplay() {
  if (shareContainer.style.display === "none" && articleFooter.style.display === "flex") {
    articleFooter.style.display = "none";
    shareContainer.style.display = "block";
  } else {
    articleFooter.style.display = "flex";
    shareContainer.style.display = "none";
  }
}

window.addEventListener("resize", function () {
  if (document.body.clientWidth > 1199) {
    shareContainer.style.display = "none";
    articleFooter.style.display = "flex";
  }

  if (document.body.clientWidth < 1200) {
    if (desktopShareContainer.style.display === "block") {
      desktopShareContainer.style.display = "none";
    }
  }
});

shareBtn.addEventListener("click", function () {
  toggleDisplay();

  if (document.body.clientWidth > 1199) {
    shareContainer.style.display = "none";
    articleFooter.style.display = "flex";

    if (desktopShareContainer.style.display === "none") {
      desktopShareContainer.style.display = "block";
    } else if (desktopShareContainer.style.display === "block") {
      console.log(2);
      desktopShareContainer.style.display = "none";
    }
  }
});

darkShareBtn.addEventListener("click", function () {
  toggleDisplay();
});
