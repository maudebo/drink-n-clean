import logo from '../logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}><mark>Clean it</mark></h1>
        </header>
          <main>
              <div className={styles.mrNet}></div>
          </main>
        <p className={styles.intro}>
        </p>
      </div>
    );
  }
}

export default App;
