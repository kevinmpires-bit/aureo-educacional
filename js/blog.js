function filterBlog(btn, category) {
  document.querySelectorAll('.blog-filter').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  var cards = document.querySelectorAll('#blog-grid .blog-card');
  cards.forEach(function (card) {
    if (category === 'todos' || card.getAttribute('data-category') === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}