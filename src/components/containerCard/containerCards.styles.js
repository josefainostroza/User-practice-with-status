import styled from 'styled-components';

const ImgUser = styled.img`
  width: 50px;
  border-radius: 50%;
  object-fit: cover; /* Recorte adecuado si la imagen es más grande */
`;

const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  margin-left: 16px; 
  font-family: Arial, sans-serif;
`;
const StyledH2 = styled.h2`
  font-size: 16px;
    font-weight: bold;
    color: #333;
`;
const StyledP = styled.p`
  margin: 4px 0; /* Espaciado vertical entre párrafos */
    font-size: 14px;
    color: #666; 
`;


const StyledContainer = styled.div`
  display: flex; 
  align-items: center; 
  width: 500px;
  height: auto; 
  padding: 16px; 
  background-color: white; 
  border-radius: 8px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para resaltar la tarjeta */
  margin: 12px 0;

  &:hover {
    transform: scale(1.02); /* Efecto de zoom suave al pasar el mouse */
  }
`;

const StyledContainerCards = styled.div`
display: flex; 
flex-direction: column; 
align-items: center; 
`
export { ImgUser, StyledContainerText, StyledContainer, StyledH2,StyledP, StyledContainerCards };
