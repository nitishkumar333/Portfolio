import Intro from "./components/Intro";
import Projects from "./components/Projects";
import styles from './App.module.css';

function App() {
  return (
    <div>
      <div className={styles.intro}>
        <Intro />
      </div>
      <Projects/>
    </div>
  );
}

export default App;
