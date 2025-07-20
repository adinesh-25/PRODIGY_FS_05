const API_URL = 'http://localhost:8080/api/posts';

function fetchPosts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(posts => {
      const postsDiv = document.getElementById('posts');
      postsDiv.innerHTML = '';
      posts.reverse().forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `
          <h4>${post.username}</h4>
          <p>${post.content}</p>
          <small>${post.timestamp}</small>
        `;
        postsDiv.appendChild(div);
      });
    });
}

function addPost() {
  const username = document.getElementById('username').value;
  const content = document.getElementById('content').value;
  if(username && content) {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, content })
    })
    .then(() => {
      document.getElementById('username').value = '';
      document.getElementById('content').value = '';
      fetchPosts();
    });
  } else {
    alert('Please enter both name and content!');
  }
}

window.onload = fetchPosts;