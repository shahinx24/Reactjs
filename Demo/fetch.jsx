import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);

  // Fetch data when app opens
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts from API</h1>
      {posts.map(post => (
        <p key={post.id}>{post.name}</p>
      ))}
    </div>
  );
}

export default App;