import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div className="App">
      <Header showButton />
      <Sidebar />
      <main className={styles.content}>
        <Card newPix />
        <Card newPix send />
        <Card />
        <Card send />
        <Card />
      </main>
    </div>
  );
}

export default App;
