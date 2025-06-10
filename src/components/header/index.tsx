import Image from 'next/image';
import styles from './styles.module.css';
import flowershopIcon from '../../../public/assets/flowershop_icon.png';
import Link from 'next/link';
import { GiFlowerPot } from 'react-icons/gi';
import { IoIosHome } from 'react-icons/io';
import { TbShovelPitchforks } from 'react-icons/tb';
import { FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.icon}>
          <Image src={flowershopIcon} className={styles.image} alt='Ícone Ideia Floricultura' />
        </section>
        <nav className={styles.nav}>
          <Link href='/' className={styles.link}>
            <IoIosHome className={styles.linkIcon} /> INÍCIO
          </Link>

          <Link href='/' className={styles.link}>
            <GiFlowerPot className={styles.linkIcon} />  PRODUTOS
          </Link>

          <Link href='/' className={styles.link}>
            <TbShovelPitchforks className={styles.linkIcon} /> SERVIÇOS
          </Link>

          <Link href='/' className={styles.link}>
            <FaInfoCircle className={styles.linkIcon} /> QUEM SOMOS
          </Link>

          <Link href='/'>
            <FaPhoneAlt className={styles.linkIcon} /> FALE CONOSCO
          </Link>
        </nav>
      </header>
    </>
  );
}