import { Header } from "../components/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { MainContainer } from "./PixList.styles";

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

export function PixList() {
  const [pixList, setPixList] = useState<Pix[]>([]);
  const [userFilter, setUserFilter] = useState("");

  useEffect(() => {
    axios.get<Pix[]>("http://localhost:3333/pix").then((response) => {
      setPixList(response.data);
    });
  }, []);

  function filter(userId: number, type: string) {
    axios
      .get<Pix[]>(`http://localhost:3333/pix/${userId}/${type}`)
      .then((response) => {
        setPixList(response.data);
      });
  }

  return (
    <div>
      <Header />
      <Sidebar onFilter={filter} />
      <MainContainer>
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
      </MainContainer>
    </div>
  );
}
