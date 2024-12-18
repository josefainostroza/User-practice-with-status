import React, { useState } from "react";
import { CARDINFO } from "../../constants/cardInfo";
import { ImgUser, StyledContainer, StyledContainerCards, StyledContainerText, StyledH2, StyledP } from "./containerCards.styles";

const ContainerCard = () => {
  const [search, setSearch] = useState("")
  const [active, setActive] = useState(false);
  const [byName, setByName] = useState("default")

  const filterActive = (e) => {
    setActive(e.target.checked); 
  };

  const filteredUsers = CARDINFO.filter((cardInfo) => {
    if (active && cardInfo.name.toLowerCase().includes(search)||cardInfo.username.toLowerCase().includes(search) && cardInfo.sort(a,b)){
      return true;
    } 
    return false;

  })
  const sortByName = CARD.sort((a,b) =>{
  if (byName==="name"){
    return a.name.localeCompare(b.name)
  } return 0
  }) 

  return (
    <StyledContainerCards>
      <h1>Lista de usuarios</h1>
      <div>
        <input placeholder="Buscar usuario..." value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
        <label>
          <input type="checkbox" checked={active} onChange={filterActive} /> Sólo activos
        </label>
        <select value={byName} onChange={(e) => setByName(e.target.value)}>
          <option value="default">Por defecto</option>
          <option value="name" onChange={sortByName}>Por nombre</option>

        </select>
      </div>

      {filteredUsers.map((cardInfo, index) => (
        <>
        <StyledContainer key={index} style={{}}>
          <ImgUser src={cardInfo.profileImage} alt={`Imagen de ${cardInfo.name}`} />
          <StyledContainerText>
            <StyledH2>{cardInfo.name}</StyledH2>
            <StyledP>{cardInfo.username}</StyledP>
          </StyledContainerText>
            <StyledP>{cardInfo.active ? "Activo" : "Inactivo"}</StyledP>
            <button>Ver Detalles</button>
            </StyledContainer>
    </>

      ))}
    </StyledContainerCards>
  );
};

export default ContainerCard;

