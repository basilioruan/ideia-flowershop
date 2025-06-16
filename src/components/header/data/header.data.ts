import { IconType } from "react-icons";
import { GiFlowerPot } from 'react-icons/gi';
import { IoIosHome } from 'react-icons/io';
import { TbShovelPitchforks } from 'react-icons/tb';
import { FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

interface INavLink {
  name: string,
  icon: IconType,
  href: string
}

const headerData: INavLink[] = [
  {
    name: 'INÍCIO',
    icon: IoIosHome,
    href: '/'
  },
  {
    name: 'PRODUTOS',
    icon: GiFlowerPot,
    href: '/'
  },
  {
    name: 'SERVIÇOS',
    icon: TbShovelPitchforks,
    href: '/'
  },
  {
    name: 'QUEM SOMOS',
    icon: FaInfoCircle,
    href: '/'
  },
  {
    name: 'FALE CONOSCO',
    icon: FaPhoneAlt,
    href: '/'
  }
];

export default headerData;