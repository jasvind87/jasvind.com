document.addEventListener("DOMContentLoaded", function () {

  const section = document.querySelector(".sg-fundAssetEngine");

  if (!section) return;


  const track = section.querySelector(".sg-fundAssetEngine-track");
  const cards = Array.from(
    section.querySelectorAll(".sg-fundAssetEngine-card")
  );

  const dots = Array.from(
    section.querySelectorAll(".sg-fundAssetEngine-dot")
  );

  const prevButton = section.querySelector(
    ".sg-fundAssetEngine-prev"
  );

  const nextButton = section.querySelector(
    ".sg-fundAssetEngine-next"
  );


  let activeIndex = 0;
  let scrollTimer;


  /* =====================================================
     GO TO CARD
     ===================================================== */

  function goToCard(index) {

  /* Keep index within 0–4 */
  index = Math.max(
    0,
    Math.min(index, cards.length - 1)
  );


  const card = cards[index];

  const trackRect = track.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();


  /*
   * Calculate where the card currently sits relative
   * to the centre of the carousel.
   */
  const trackCenter =
    trackRect.left + (trackRect.width / 2);

  const cardCenter =
    cardRect.left + (cardRect.width / 2);


  /*
   * Add that difference to the current scroll position.
   * This works regardless of viewport width, container
   * padding or the card's offsetParent.
   */
  let targetLeft =
    track.scrollLeft +
    (cardCenter - trackCenter);


  /*
   * Prevent overscrolling beyond the actual carousel.
   */
  const maxScroll =
    track.scrollWidth -
    track.clientWidth;


  targetLeft = Math.max(
    0,
    Math.min(targetLeft, maxScroll)
  );


  track.scrollTo({
    left: targetLeft,
    behavior: "smooth"
  });


  setActive(index);
}


  /* =====================================================
     UPDATE ACTIVE DOT + ARROWS
     ===================================================== */

  function setActive(index) {

    activeIndex = index;


    dots.forEach(function (dot, dotIndex) {

      const isActive = dotIndex === index;

      dot.classList.toggle(
        "is-active",
        isActive
      );


      dot.setAttribute(
        "aria-current",
        isActive ? "true" : "false"
      );

    });


    prevButton.disabled = index === 0;

    nextButton.disabled =
      index === cards.length - 1;

  }


  /* =====================================================
     FIND CARD CLOSEST TO CENTRE
     ===================================================== */

  function updateFromScroll() {

  const trackRect =
    track.getBoundingClientRect();

  const trackCenter =
    trackRect.left +
    (trackRect.width / 2);


  let closestIndex = 0;
  let smallestDistance = Infinity;


  cards.forEach(function (card, index) {

    const cardRect =
      card.getBoundingClientRect();

    const cardCenter =
      cardRect.left +
      (cardRect.width / 2);

    const distance =
      Math.abs(cardCenter - trackCenter);


    if (distance < smallestDistance) {

      smallestDistance = distance;
      closestIndex = index;

    }

  });


  setActive(closestIndex);
}

  /* =====================================================
     ARROWS
     ===================================================== */

  prevButton.addEventListener(
    "click",
    function () {
      goToCard(activeIndex - 1);
    }
  );


  nextButton.addEventListener(
    "click",
    function () {
      goToCard(activeIndex + 1);
    }
  );


  /* =====================================================
     DOTS
     ===================================================== */

  dots.forEach(function (dot, index) {

    dot.addEventListener(
      "click",
      function () {
        goToCard(index);
      }
    );

  });


  /* =====================================================
     SWIPE / MANUAL SCROLL
     ===================================================== */

  track.addEventListener(
  "scroll",
  function () {

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(
      updateFromScroll,
      120
    );

  },
  { passive: true }
);


  /* =====================================================
     KEYBOARD
     ===================================================== */

  track.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "ArrowLeft") {

        event.preventDefault();

        goToCard(activeIndex - 1);

      }


      if (event.key === "ArrowRight") {

        event.preventDefault();

        goToCard(activeIndex + 1);

      }

    }
  );


  /* =====================================================
     RESIZE
     ===================================================== */

 window.addEventListener(
  "resize",
  function () {

    goToCard(activeIndex);

  }
);


  /* Initial state */

  setActive(0);

});