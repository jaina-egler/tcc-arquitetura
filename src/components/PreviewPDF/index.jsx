import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css"
import axios from "axios";

export default function PreviewPDF(){

    const router = useRouter();
    const {id} = router.query


    const [publicacao, setPublicacao] = useState
    ({});

    useEffect(() => {
        //Consultar API
        axios.get(`/api/publicacoes/${id}`)
        .then(resposta => setPublicacao
            (resposta.data));
    },[router])

    return(
        <div>
            <p>Título: {publicacao.titulo} </p>
            <p>Autor: {publicacao.autor} </p>
            <p>Orientador: {publicacao.orientador}</p>
            <iframe className={styles.PDFiframe} src={publicacao.arquivo} frameborder="0"></iframe>
        </div>
    );
}