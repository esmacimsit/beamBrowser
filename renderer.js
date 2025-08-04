window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const button = document.querySelector('button');
  const engineSelect = document.getElementById('engine');

  function handleSearch() {
    const query = input.value.trim();
    const engine = engineSelect.value;
    if (!query) return;

    let url = "";

    switch (engine) {
      case "google":
        url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        break;
      case "duckduckgo":
        url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        break;
      case "bing":
        url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        break;
      case "yahoo":
        url = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
        break;
      case "brave":
        url = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
        break;
      case "ecosia":
        url = `https://www.ecosia.org/search?q=${encodeURIComponent(query)}`;
        break;
      case "yandex":
        url = `https://yandex.com/search/?text=${encodeURIComponent(query)}`;
        break;
      default:
        url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        break;
    }

    window.location.href = url;
  }

  button.addEventListener('click', handleSearch);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });
});
