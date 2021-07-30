const articleFooter = document.querySelector(".article-footer");
const shareBtn = document.querySelector(".share-btn");
const shareContainer = document.querySelector(".share-container");
const darkShareBtn = document.querySelector(".dark-share-btn");

articleFooter.style.display = "flex";
shareContainer.style.display = "none";

function toggleDisplay() {
  if (shareContainer.style.display === "none" && articleFooter.style.display === "flex") {
    articleFooter.style.display = "none";
    shareContainer.style.display = "block";
  } else {
    articleFooter.style.display = "flex";
    shareContainer.style.display = "none";
  }
}

shareBtn.addEventListener("click", function () {
  toggleDisplay();
});

darkShareBtn.addEventListener("click", function () {
  toggleDisplay();
});
