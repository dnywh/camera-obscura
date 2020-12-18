const textItems = document.querySelectorAll(".text .item");

const config = {
  rootMargin: "-48px",
  threshold: 0.5
};

let observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      const currentlyActiveP = entry.target.firstElementChild;
      console.log(currentlyActiveP);
      if (entry.isIntersecting) {
        intersectionHandler(entry);
        currentlyActiveP.classList.add("active");
      } else {
        currentlyActiveP.classList.remove("active");
      }
    }),
  config
);

textItems.forEach((item) => {
  observer.observe(item);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActiveImg = document.querySelector(".images img.active");
  const shouldBeActiveImg = document.querySelector(
    ".images img[data-ref=" + id + "]"
  );

  if (currentlyActiveImg) {
    // Remove the .active class from the *previously* active item
    currentlyActiveImg.classList.remove("active");
  }
  if (shouldBeActiveImg) {
    // Add the .active class to the now-active item
    shouldBeActiveImg.classList.add("active");
  }
}

