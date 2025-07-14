import rosaImg from '../../../../public/assets/buque_rosas.jpg';
import { StaticImageData } from 'next/image';

export interface Servico {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  categoria: string;
  img: StaticImageData;
  imagem: string;
  detalhes: string[];
  disponivel: boolean;
}

const servicosMock: Servico[] = [
  {
    id: 1,
    nome: "Decoração Completa para Casamentos",
    descricao: "Transforme seu dia especial em um momento inesquecível com nossa decoração completa para casamentos.",
    preco: "A partir de R$ 1.200,00",
    categoria: "Casamento Completo",
    img: rosaImg,
    imagem: "/assets/servico-casamento.jpg",
    detalhes: [
      "Decoração do altar e cerimônia",
      "Arranjos para mesas dos convidados",
      "Buquê da noiva personalizado",
      "Boutonnieres para noivo e padrinhos",
      "Decoração da entrada principal",
      "Flores para damas de honra",
      "Arranjos para o carro dos noivos",
      "Consultoria personalizada de cores e estilo"
    ],
    disponivel: true
  }
];

export default servicosMock;