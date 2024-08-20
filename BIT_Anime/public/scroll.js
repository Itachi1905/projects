function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var scrollButton = document.querySelector(".scroll-to-top");
  var cardSocial = document.querySelector(".card_social");
  var social = document.querySelector(".social");
  if ((document.documentElement.scrollTop>20)) {
    cardSocial.style.display = "flex";
    cardSocial.style.rotate = "0deg";
    // social.style.bottom = "2.8vw";
    // social.style.right = "94vw";
    scrollButton.style.display="block";
  } else {
    // cardSocial.style.rotate = "360deg";
    social.style.bottom = "2.8";
    social.style.right = "-2.8vw";
    scrollButton.style.display="none";
  }
}

var lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      document.querySelector("header").style.top = "-100px"; // Hide the header
    } else {
      document.querySelector("header").style.top = "0"; // Show the header
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);

scrollFunction();
