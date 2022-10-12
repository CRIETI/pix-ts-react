import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import axios from "axios";

import styles from "./App.module.css";

import "./global.css";
import { useEffect, useState } from "react";

export interface Pix {
  id: number;
  value: number;
  createdAt: string;
  recipient: {
    name: string;
  };
  sender: {
    name: string;
  };
  type?: number;
}

function App() {
  const [pixList, setPixList] = useState<Pix[]>([]);

  useEffect(() => {
    axios.get<Pix[]>("http://localhost:3333/pix").then((response) => {
      setPixList(response.data);
    });
  }, []);

  console.log(pixList);
  return (
    <div className="App">
      <Header showButton />
      <Sidebar />
      <main className={styles.content}>
        {pixList.map((pix) => {
          return (
            <Card
              id={pix.id}
              value={pix.value}
              createdAt={pix.createdAt}
              recipient={pix.recipient}
              sender={pix.sender}
              type={pix.type}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
