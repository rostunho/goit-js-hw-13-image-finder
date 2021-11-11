export default function infinityScroll(selector, callback) {
  const options = {
    rootMargin: '100px',
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector(selector));
}
