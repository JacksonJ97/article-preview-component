const articleFooter = document.querySelector(".article-footer");
const shareBtn = document.querySelector(".share-btn");
const shareContainer = document.querySelector(".share-container");
const sendShareBtn = document.querySelector(".send-share-btn");

articleFooter.style.display = "flex";
shareContainer.style.display = "none";
console.log(shareContainer.style.display);
console.log(articleFooter.style.display);

shareBtn.addEventListener("click", function () {
  if (shareContainer.style.display === "none" && articleFooter.style.display === "flex") {
    articleFooter.style.display = "none";
    shareContainer.style.display = "block";
  } else {
    articleFooter.style.display = "flex";
    shareContainer.style.display = "none";
  }
});

sendShareBtn.addEventListener("click", function () {
  if (shareContainer.style.display === "none" && articleFooter.style.display === "flex") {
    articleFooter.style.display = "none";
    shareContainer.style.display = "block";
  } else {
    articleFooter.style.display = "flex";
    shareContainer.style.display = "none";
  }
});
