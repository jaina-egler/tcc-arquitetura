import { useEffect, useState } from "react";
import Card from "../Card"
import styles from "./styles.module.css"
import axios from "axios";

export default function CardList(){

    
    const [cards, setCards] = useState([
        // {id: 1,titulo:"Arquitetura moderna", autor:"Maria",orientador:"José"},
        // {id: 2,titulo:"Arquitetura antiga", autor:"José",orientador:"Maria"}
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/api/publicacoes').then(resposta => setCards(resposta.data))
    },[]);

    return (
        <div className={styles.card_list}>
                {cards.map(c => (
                    <Card 
                    key={c.id}
                    id={c.id}
                    capa={c.capa}
                    titulo={c.titulo}
                    autor={c.autor}
                    orientador={c.orientador}
                    />
                ))}
        </div>
    );
}