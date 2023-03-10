import Link from "next/link";
import Header from "../components/Header"
import CardList from "../components/CardList"

export default function Home() {
  return (
    <>
    <Header></Header>
    Página inicial
    <Link href="/visualizar">Visualizar</Link>
    <CardList/>
    </>
  )
}
