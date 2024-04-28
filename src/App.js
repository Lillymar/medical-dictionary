import './App.css';
import MedicalDictionary from "./MedicalDictionary"
import bgVideo from "./books.mp4"

function App() {
  return (
    <div className="video">
      <video autoPlay loop muted id='video'>
        <source src={bgVideo} type='video/mp4'/>
      </video>

      <div className="App">
        <div className='container'>
          <header className="App-header">
            <h3>Medical Dictionary</h3>
          </header>
          <main>
            <MedicalDictionary />
          </main>
          <footer>
            This medical dictionary was coded by{" "}
            <a
              href="https://www.linkedin.com/in/lillymardiazsein/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lilly
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Lillymar/medical-dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://storied-flan-129fc5.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
