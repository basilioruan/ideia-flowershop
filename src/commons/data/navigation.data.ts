import { IconType } from "react-icons";
import { GiFlowerPot } from 'react-icons/gi';
import { IoIosHome } from 'react-icons/io';
import { TbShovelPitchforks } from 'react-icons/tb';
import { FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
import { NavigationEnum } from "../enums/navigation.enum";

export interface INavLink {
  name: string,
  icon: IconType,
  href: string
}

export const navigationData: INavLink[] = [
  {
    name: NavigationEnum.INICIO,
    icon: IoIosHome,
    href: '/'
  },
  {
    name: NavigationEnum.PRODUTOS,
    icon: GiFlowerPot,
    href: '/produtos'
  },
  {
    name: NavigationEnum.SERVICOS,
    icon: TbShovelPitchforks,
    href: '/servicos'
  },
  {
    name: NavigationEnum.QUEM_SOMOS,
    icon: FaInfoCircle,
    href: '/quem-somos'
  },
  {
    name: NavigationEnum.FALE_CONOSCO,
    icon: FaPhoneAlt,
    href: '/'
  }
];

export default navigationData;