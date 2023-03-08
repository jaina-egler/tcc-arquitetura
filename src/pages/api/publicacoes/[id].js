
import { publicacoes } from "../../../../dados";

export default function PublicacoesId(req, res){

    const { id } = req.query;

    const publicacaoFiltrada = publicacoes.
    find(p => p.id == id)

    return res.status(200).json(publicacaoFiltrada)
}