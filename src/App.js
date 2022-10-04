import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            className="gitHub"
            href="https://github.com/larissa1992/my-first-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code{" "}
          </a>{" "}
          by{" "}
          <a
            className="porfolio"
            href="https://rainbow-valkyrie-5d08eb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Larissa Adina
          </a>{" "}
          and hosted on{" "}
          <a
            className="netlify"
            href="https://633c16ff20b466734412ab8a--timely-meringue-7d896c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
