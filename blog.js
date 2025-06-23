
const sheetURL = 'https://opensheet.elk.sh/1bSz3immaNUTKOhDFEeVq4j7P_jsi4D2eVFp3yzGCtco/Posts';
fetch(sheetURL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('blog-posts');
    container.innerHTML = '';
    data.forEach(post => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div style="margin-bottom: 20px; padding: 10px; background: #fff;">
          <h3>${post.title}</h3>
          ${post.image ? `<img src="${post.image}" alt="image" style="width: 100%; max-height: 200px; object-fit: cover;" />` : ''}
          <p>${post.content}</p>
          ${post.youtube ? `<iframe width="100%" height="315" src="${post.youtube}" frameborder="0" allowfullscreen></iframe>` : ''}
        </div>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('blog-posts').innerText = 'ब्लॉग लोड होऊ शकले नाहीत.';
  });
