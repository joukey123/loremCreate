import React, { useState } from "react";
import data from "./data";
function App() {
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    let maxCount = parseInt(count);
    setDatas(data.slice(0, maxCount));
  };

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label>Paragraphs</label>
        <input
          type="number"
          max={8}
          min={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <article>
        {datas.map((item, index) => {
          return (
            <div key={index} className="result">
              {item}
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
