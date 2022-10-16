import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import {
  FilterContainer,
  ContentContainer,
  RadioGroup,
  SidebarContainer,
  Radio,
  UserFilter,
  ButtonContainer,
} from "./Sidebar.styles";

interface SidebarProps {
  onFilter: (userId: number, type: string) => void;
}

export function Sidebar({ onFilter }: SidebarProps) {
  const [userId, setUserId] = useState<number>();
  const [type, setType] = useState("");

  function handleFilter(e: FormEvent) {
    e.preventDefault();

    if (userId && type) {
      onFilter(userId, type);
    } else if (!userId) {
      toast.error("Digite um ID de usuário");
    }
    if (!type) {
      toast.error("Escolha um tipo");
    }
  }
  return (
    <SidebarContainer>
      <ContentContainer>
        <h1>PIX</h1>
        <FilterContainer onSubmit={handleFilter}>
          <UserFilter>
            <label htmlFor="id-user">ID: </label>
            <input
              id="id-user"
              name="id-user"
              placeholder="Digite o ID do usuário aqui..."
              onChange={(e) => setUserId(Number(e.target.value))}
              type="number"
            />
          </UserFilter>
          <RadioGroup>
            <Radio isActive={type === "received"}>
              <input
                type="radio"
                id="received"
                name="type"
                value="received"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="received">Recebido</label>
            </Radio>

            <Radio isActive={type === "sent"}>
              <input
                type="radio"
                id="sent"
                name="type"
                value="sent"
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="sent">Enviado</label>
            </Radio>
          </RadioGroup>
          <ButtonContainer onClick={handleFilter}>Filter</ButtonContainer>
        </FilterContainer>
      </ContentContainer>
    </SidebarContainer>
  );
}
