import styles from "./styles.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Card({titulo, autor, orientador,capa,id}){
return(
    <div className={styles.card}>
        <Link href={`/visualizar/${id}`}>        
            <Image src={capa} alt={titulo} width="387" height="272"/>
            <div>{titulo}</div>
            <div>Autor(a): {autor}</div>
            <div>Orientador(a): {orientador}</div>
        </Link>

    </div>
);
}