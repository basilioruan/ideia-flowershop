import Card from "@/components/card";
import produtosMock from "./mock/produtos.mock";
import styles from "./styles.module.css";

export default function Produtos() {

  return (
    <div className={styles.container}>
      {produtosMock.map(produto => <Card key={produto.id} img={produto.img} title={produto.name} description={produto.descricao} /> )}
    </div> 
  )
}