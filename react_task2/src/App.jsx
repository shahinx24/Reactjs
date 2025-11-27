import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        setPosts([data.quotes[randomIndex]]);
      });
  }, []);

return (
  <div className="container">
    <h1>Random Quote</h1>

    {posts.map(post => (
      <p className="quote" key={post.id}>
        "{post.quote}"
      </p>
    ))}
  </div>
);
}
export default App;