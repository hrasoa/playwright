(function() {
  fetch('https://hacker-news.firebaseio.com/v0/item/8863.json')
    .then(r => r.json())
    .then(r => {
      // simulate latency
      window.setTimeout(() => {
        document.getElementById('text').innerHTML = r.title; 
      }, 1000);
    })
})();