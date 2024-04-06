(async () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const { target } = entry;
      target.classList.toggle('show', entry.isIntersecting);
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => observer.observe(el));
})();


(() => {
  new Swiper('.hero-swiper-container', {
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return `<span>${getNumber(current)}</span><span>${getNumber(
          total
        )}</span>`;
      },
    },
    slidesPerView: 1,
    loop: true,
    speed: 2400,
    autoplay: {
      delay: 2400,
      disableOnInteraction: false,
    },
  });

  function getNumber(num) {
    return num.toString().length === 1 ? '0' + num : num;
  }
})();