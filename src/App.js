// import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by AnnaS and is open-sourced on{" "}
          <a href="https://www.ukr.net/ua/">GitHub</a> and hosted on{" "}
          <a href="https://www.ukr.net/ua/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
