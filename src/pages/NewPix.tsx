import { useEffect, useState, FormEvent } from "react";

import axios from "axios";
import { Header } from "../components/Header";
import { toast } from "react-toastify";

import {
  ButtonContainer,
  DivContainer,
  ItemsFormContainer,
} from "./NewPix.styles";

interface User {
  id: number;
  name: string;
}

export function NewPix() {
  const [users, setUsers] = useState<User[]>([]);
  const [senderId, setSenderId] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get<User[]>("http://localhost:3333/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  async function handleCrateNewComment(e: FormEvent) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3333/pix", {
          senderId,
          recipientId,
          value,
        })
        .then((response) => {
          setUsers(response.data);
        });

      setSenderId("");
      setRecipientId("");
      setValue("");

      toast.success("Pix enviado com sucesso");
    } catch (error) {
      toast.error("O Pix não pode ser enviado");
    }
  }

  return (
    <DivContainer>
      <Header />
      <form onSubmit={handleCrateNewComment}>
        <ItemsFormContainer>
          <label htmlFor="sender">REMETENTE</label>
          <select
            id="sender"
            value={senderId}
            onChange={(e) => setSenderId(e.target.value)}
          >
            <option value="" disabled>
              Selecione o Remetente
            </option>
            {users?.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </ItemsFormContainer>

        <ItemsFormContainer>
          <label htmlFor="recipient">DESTINATÁRIO</label>
          <select
            id="recipient"
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
          >
            <option value="" disabled>
              Selecione o destinatário
            </option>
            {users?.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </ItemsFormContainer>

        <ItemsFormContainer>
          <label htmlFor="value">VALOR</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
          />
        </ItemsFormContainer>

        <ButtonContainer type="submit">Enviar</ButtonContainer>
      </form>
    </DivContainer>
  );
}
