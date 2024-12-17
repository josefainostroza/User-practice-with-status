import { CARDINFO } from "../../constants/cardInfo"
import { ImgUser } from "./containerCards.styles"

const ContainerCard = () => {
return (
    <>
    {CARDINFO.map(cardInfo => {
        return (
            <>
            <h1>Lista de usuarios</h1>
            <div>
<input></input>
<checkbox>Sólo activos</checkbox>
<select>Por defecto</select>
            </div>
            <ImgUser src={cardInfo.profileImage} /> 
<div>
    <h2>{cardInfo.name}</h2>
    <p>{cardInfo.username}</p>
    <p>{cardInfo.active}</p>
<button>Ver Detalles</button>
</div>
</>
        )
    })}
    </>
)

}