// Enhance-only: everything is visible without JS; this class gates the reveals.
// ?capture skips the gate so headless screenshot runs render the final state.
if (new URLSearchParams(location.search).has('capture')) {
  document.documentElement.classList.add('capture');
} else {
  document.documentElement.classList.add('js');
}

// Nav gains a solid background once the page scrolls off the hero top.
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll reveals. Hero elements are near the viewport top on load, so they
// fire immediately and play their staggered entrance.
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  }
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Layout debug for headless runs: ?debug writes overflow offenders into <title>.
if (new URLSearchParams(location.search).has('debug')) {
  window.addEventListener('load', () => {
    const vw = document.documentElement.clientWidth;
    const bad = [...document.querySelectorAll('*')]
      .filter((el) => el.getBoundingClientRect().right > vw + 1 || el.getBoundingClientRect().left < -1)
      .slice(0, 12)
      .map((el) => `${el.tagName}.${[...el.classList].join('.')}:${Math.round(el.getBoundingClientRect().left)},${Math.round(el.getBoundingClientRect().right)}`);
    document.title = `vw=${vw} sw=${document.documentElement.scrollWidth} | ${bad.join(' | ')}`;
  });
}
