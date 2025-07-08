import { Produto } from '@/types/produto.types';
import rosaImg from '../../../../public/assets/buque_rosas.jpg';

const produtosMock = [
  {
    id: 1,
    name: "Rosa Vermelha",
    descricao: "Rosas vermelhas clássicas, símbolo do amor e paixão. Perfeitas para ocasiões especiais e declarações românticas.",
    img: rosaImg,
    preco: 45.90,
    categoria: "Flores",
    disponivel: true,
    prontaEntrega: true
  },
  {
    id: 2,
    name: "Girassol Gigante",
    descricao: "Girassóis vibrantes que trazem alegria e energia positiva para qualquer ambiente. Ideais para decoração.",
    img: rosaImg,
    preco: 32.50,
    categoria: "Flores",
    disponivel: true,
    prontaEntrega: true
  },
  {
    id: 3,
    name: "Lavanda Francesa",
    descricao: "Lavanda aromática com propriedades relaxantes. Perfeita para jardins e ambientes que buscam tranquilidade.",
    img: rosaImg,
    preco: 28.90,
    categoria: "Aromáticas",
    disponivel: true,
    prontaEntrega: false
  },
  {
    id: 4,
    name: "Bromélia Tropical",
    descricao: "Planta tropical exótica com cores vibrantes. Ideal para decoração interna e externa em climas quentes.",
    img: rosaImg,
    preco: 65.00,
    categoria: "Tropicais",
    disponivel: false,
    prontaEntrega: true
  },
  {
    id: 5,
    name: "Petúnia Colorida",
    descricao: "Petúnias em cores variadas, perfeitas para jardins e vasos. Florescem durante toda a temporada.",
    img: rosaImg,
    preco: 18.90,
    categoria: "Flores",
    disponivel: true,
    prontaEntrega: false
  },
  {
    id: 6,
    name: "Orquídea Phalaenopsis",
    descricao: "Orquídea elegante e sofisticada, símbolo de luxo e refinamento. Cuidados especiais inclusos.",
    img: rosaImg,
    preco: 89.90,
    categoria: "Orquídeas",
    disponivel: true,
    prontaEntrega: false
  },
  {
    id: 7,
    name: "Suculenta Mix",
    descricao: "Conjunto de suculentas variadas, fáceis de cuidar e perfeitas para iniciantes na jardinagem.",
    img: rosaImg,
    preco: 24.90,
    categoria: "Suculentas",
    disponivel: true,
    prontaEntrega: false
  },
  {
    id: 8,
    name: "Tulipa Holandesa",
    descricao: "Tulipas importadas da Holanda em cores vibrantes. Símbolo da primavera e renovação.",
    img: rosaImg,
    preco: 52.90,
    categoria: "Flores",
    disponivel: true,
    prontaEntrega: true
  }
] as Produto[];

export default produtosMock;