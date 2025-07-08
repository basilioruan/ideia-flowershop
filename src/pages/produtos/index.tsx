import Card from "@/components/card";
import PageTitle from "@/components/page-title";
import produtosMock from "./mock/produtos.mock";
import styles from "./styles.module.css";
import { navigationData } from "@/commons/data/navigation.data";

export default function Produtos() {

  const productsIcon = navigationData.find(h => h.name === 'PRODUTOS')?.icon;

  return (
    <div className={styles.pageContainer}>
      <PageTitle title="Produtos" icon={productsIcon} />
      <div className={styles.container}>
        {produtosMock.map(produto => 
          <Card key={produto.id} id={produto.id} img={produto.img} title={produto.name} description={produto.descricao} /> )}
      </div> 
    </div>
  )
}