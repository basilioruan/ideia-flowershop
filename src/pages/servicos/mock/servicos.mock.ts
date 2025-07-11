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
    nome: "Decoração para Casamentos",
    descricao: "Transforme seu dia especial em um momento inesquecível com nossa decoração completa para casamentos.",
    preco: "A partir de R$ 800,00",
    categoria: "Casamentos",
    img: rosaImg,
    imagem: "/assets/servico-casamento.jpg",
    detalhes: [
      "Decoração do altar e cerimônia",
      "Arranjos para mesas dos convidados",
      "Buquê da noiva e boutonnieres",
      "Decoração da entrada e corredores",
      "Consultoria personalizada"
    ],
    disponivel: true
  },
  {
    id: 2,
    nome: "Arranjos para Aniversários",
    descricao: "Celebre cada ano de vida com arranjos florais únicos e personalizados para aniversários.",
    preco: "A partir de R$ 150,00",
    categoria: "Aniversários",
    img: rosaImg,
    imagem: "/assets/servico-aniversario.jpg",
    detalhes: [
      "Arranjos temáticos por idade",
      "Decoração de mesa principal",
      "Centros de mesa personalizados",
      "Arranjos para entrada",
      "Flores comestíveis para bolos"
    ],
    disponivel: true
  },
  {
    id: 3,
    nome: "Decoração Residencial",
    descricao: "Traga a natureza para dentro de casa com nossos serviços de decoração floral residencial.",
    preco: "A partir de R$ 200,00",
    categoria: "Residencial",
    img: rosaImg,
    imagem: "/assets/servico-residencial.jpg",
    detalhes: [
      "Arranjos para ambientes internos",
      "Jardins verticais",
      "Vasos decorativos personalizados",
      "Manutenção mensal",
      "Consultoria em paisagismo"
    ],
    disponivel: true
  },
  {
    id: 4,
    nome: "Eventos Corporativos",
    descricao: "Impressione clientes e colaboradores com decorações florais elegantes para eventos empresariais.",
    preco: "A partir de R$ 500,00",
    categoria: "Corporativo",
    img: rosaImg,
    imagem: "/assets/servico-corporativo.jpg",
    detalhes: [
      "Decoração para recepções",
      "Arranjos para salas de reunião",
      "Centros de mesa para eventos",
      "Decoração de stands",
      "Serviço de entrega e montagem"
    ],
    disponivel: true
  },
  {
    id: 5,
    nome: "Cerimônias Religiosas",
    descricao: "Honre momentos sagrados com decorações florais respeitosas e significativas.",
    preco: "A partir de R$ 300,00",
    categoria: "Religioso",
    img: rosaImg,
    imagem: "/assets/servico-religioso.jpg",
    detalhes: [
      "Decoração para batizados",
      "Arranjos para primeira comunhão",
      "Decoração de altares",
      "Coroas de flores",
      "Arranjos memoriais"
    ],
    disponivel: true
  },
  {
    id: 6,
    nome: "Presentes Especiais",
    descricao: "Surpreenda pessoas queridas com arranjos florais únicos e presentes personalizados.",
    preco: "A partir de R$ 80,00",
    categoria: "Presentes",
    img: rosaImg,
    imagem: "/assets/servico-presentes.jpg",
    detalhes: [
      "Buquês personalizados",
      "Cestas de flores",
      "Arranjos em vasos especiais",
      "Cartões personalizados",
      "Entrega em domicílio"
    ],
    disponivel: true
  }
];

export default servicosMock;