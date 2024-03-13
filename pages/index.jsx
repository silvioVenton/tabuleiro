



import Linhas from "@/component/Linhas";
import style from"../styles/Home.module.css"

export default function Home(props) {
  return (
    
    <div className={style.main}>
            <Linhas />
            <Linhas reverso />
            <Linhas />
            <Linhas reverso />
            <Linhas />
            <Linhas reverso />
            <Linhas />
            <Linhas reverso />
            
            
        </div>
     
    
  );
}
