
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

            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                scrollButton.style.display = "block";
                if (cardSocial) {
                    cardSocial.style.display = "flex";
                    cardSocial.style.rotate = "0deg";
                    social.style.bottom = "2.8vw";
                    social.style.right = "94vw";
                }
            } else {
                scrollButton.style.display = "none";
                if (cardSocial) {
                    // cardSocial.style.display = "none";
                    cardSocial.style.rotate = "180deg";
                    social.style.bottom = "2.8";
                    social.style.right = "-2.8vw";
                }
            }
        }
        scrollFunction()