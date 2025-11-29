import React, { useEffect, useState } from "react";
import sampleNews from "./sampleNews";
import "./App.css";

function App() {
  const [news, setNews] = useState(sampleNews.slice(0, 5));

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate news to simulate auto-update
      setNews((prevNews) => {
        const first = sampleNews[Math.floor(Math.random() * sampleNews.length)];
        // Avoid immediate repeat
        if (prevNews.some((item) => item.title === first.title)) {
          return prevNews;
        }
        return [first, ...prevNews.slice(0, 4)];
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="techplus-container">
      <header className="techplus-header">
        <h1>techplus</h1>
        <span className="subheading">Your trusted source for technology news</span>
      </header>
      <main>
        <section className="top-news">
          <h2>Top Stories</h2>
          <div className="news-list">
            {news.map((item, idx) =>
              <article key={idx} className="news-item">
                <img src={item.img} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <time>{item.publishedAt}</time>
                </div>
              </article>
            )}
          </div>
        </section>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} techplus | Sample project based on BBC News style
      </footer>
    </div>
  );
}

export default App;