import Subdivisao from "./Subdivisao";
import style from"../styles/linha.module.css"
export default function Linhas(props){
    return(
        <div style={{ flexDirection: props.reverso ? "row-reverse":"none"}} className={style.linhas} >
            <Subdivisao />
            <Subdivisao preta />
            <Subdivisao />
            <Subdivisao preta />
            <Subdivisao />
            <Subdivisao preta />
            <Subdivisao />
            <Subdivisao preta />
        </div>
    )
}