import Image from 'next/image';
import styles from './styles.module.css';
import flowershopIcon from '../../../public/assets/flowershop_icon.png';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.icon}>
          <Image src={flowershopIcon} className={styles.image} alt='Ícone Ideia Floricultura' />
        </section>
        <nav className={styles.nav}>
          <Link href='/' className={styles.link}>
            INÍCIO
          </Link>

          <Link href='/' className={styles.link}>
            PRODUTOS
          </Link>

          <Link href='/' className={styles.link}>
            SERVIÇOS
          </Link>

          <Link href='/' className={styles.link}>
            QUEM SOMOS
          </Link>

          <Link href='/'>
            FALE CONOSCO
          </Link>
        </nav>
      </header>
    </>
  );
}