
const sheetURL = 'https://opensheet.elk.sh/1e7vRRHFi.../Posts';
fetch(sheetURL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('blog-posts');
    container.innerHTML = '';
    data.forEach(post => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
      container.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('blog-posts').innerText = 'ब्लॉग लोड होऊ शकले नाहीत.';
  });
