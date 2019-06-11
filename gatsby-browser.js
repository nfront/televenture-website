/* eslint-disable import/prefer-default-export */
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }

  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const testImg = document.createElement(`img`);
  if (typeof testImg.style.objectFit === `undefined` || typeof testImg.style.objectPosition === `undefined`) {
    const objectFitImages = require(`object-fit-images`);
    objectFitImages();
    console.log(`👍 Object-fit/Object-position are polyfilled`);
  }
};
