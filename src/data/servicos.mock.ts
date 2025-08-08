import rosaImg from '../../public/assets/buque_rosas.jpg';
import { StaticImageData } from 'next/image';

export interface Plano {
  nome: string;
  valor: number;
  descricao?: string;
  itens?: string[];
}

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
  planos?: Plano[];
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
    disponivel: true,
    planos: [
      {
        nome: "Básico",
        valor: 1200,
        descricao: "Perfeito para cerimônias íntimas e elegantes",
        itens: [
          "Decoração do altar",
          "Buquê da noiva",
          "Boutonnieres para noivo",
          "Arranjos para 4 mesas",
          "Consultoria básica"
        ]
      },
      {
        nome: "Padrão",
        valor: 2500,
        descricao: "A escolha ideal para a maioria dos casamentos",
        itens: [
          "Decoração completa do altar",
          "Buquê da noiva + reserva",
          "Boutonnieres para noivo e padrinhos",
          "Arranjos para até 10 mesas",
          "Decoração da entrada",
          "Flores para damas de honra",
          "Consultoria personalizada"
        ]
      },
      {
        nome: "Premium",
        valor: 4800,
        descricao: "Experiência completa e luxuosa para seu grande dia",
        itens: [
          "Decoração completa e luxuosa",
          "Múltiplos buquês personalizados",
          "Boutonnieres premium",
          "Arranjos ilimitados para mesas",
          "Decoração entrada + cerimônia",
          "Flores para toda comitiva",
          "Arranjos para carro dos noivos",
          "Consultoria VIP + acompanhamento",
          "Flores extras para fotos"
        ]
      }
    ]
  }
];

export default servicosMock;