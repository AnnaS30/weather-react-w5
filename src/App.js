// import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

        <footer>
          This project was coded by AnnaS and is open-sourced on{" "}
          <a href="https://github.com/AnnaS30/weather-react-w5">GitHub</a> and
          hosted on{" "}
          <a href="https://tranquil-treacle-e207d5.netlify.app">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
