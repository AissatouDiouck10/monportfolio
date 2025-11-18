window.addEventListener('scroll', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && !bar.classList.contains('filled')) {
      bar.style.width = bar.parentElement.nextElementSibling?.textContent || bar.style.width;
      bar.classList.add('filled');
    }
  });
});