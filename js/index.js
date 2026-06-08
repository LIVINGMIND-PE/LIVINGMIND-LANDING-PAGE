/**
 * LIVING MIND — index.js
 * Index page specific scripts: search bar, tag pills
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Search bar ─────────────────────────────── */
  const searchInput = document.getElementById('search-input');
  const searchBtn   = document.getElementById('search-btn');

  const doSearch = () => {
    const query = searchInput?.value.trim();
    if (query) {
      // Placeholder: would navigate to results page
      alert(`Buscando tutores de: "${query}"`);
    }
  };

  searchBtn?.addEventListener('click', doSearch);
  searchInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });

  /* ── Popular tag pills ──────────────────────── */
  document.querySelectorAll('.tag-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = pill.textContent.trim();
        searchInput.focus();
      }
    });
  });

});
