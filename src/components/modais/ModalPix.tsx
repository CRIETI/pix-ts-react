import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { ItemsFormContainer, DivContainer } from "./ModalPix.styles";
import { ButtonContainer } from "../Sidebar.styles";
import { Pix } from "../../pages/PixList";

interface User {
  id: number;
  name: string;
}

interface ModalPixProps {
  closeModal: Function;
  data?: Pix;
}

export function ModalPix({ closeModal, data }: ModalPixProps) {
  const [senderId, setSenderId] = useState(data?.sender.id || "");
  const [recipientId, setRecipientId] = useState(data?.recipient.id || "");
  const [value, setValue] = useState(data?.value || "");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("http://localhost:3333/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  async function handleCrateNewComment(e: FormEvent) {
    e.preventDefault();
    try {
      if (data) {
        //não temos um editar nesta API, só serve como exemplo, mas aqui eu chamaria o meu axios.put

        console.log(senderId, recipientId, value);
      } else {
        await axios.post("http://localhost:3333/pix", {
          senderId,
          recipientId,
          value,
        });
      }

      setSenderId("");
      setRecipientId("");
      setValue("");

      toast.success("Pix enviado com sucesso");
      closeModal();
    } catch (error) {
      toast.error("O Pix não pode ser enviado");
    }
  }

  return (
    <DivContainer>
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
