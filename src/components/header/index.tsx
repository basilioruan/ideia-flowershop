import Image from 'next/image';
import styles from './styles.module.css';
import flowershopIcon from '../../../public/assets/flowershop_icon.png';
import Link from 'next/link';
import headerData from './data/header.data';

export default function Header() {

  return (
    <>
      <header className={styles.header}>
        <section className={styles.icon}>
          <Image src={flowershopIcon} className={styles.image} alt='Ícone Ideia Floricultura' />
        </section>
        <nav className={styles.nav}>
          {headerData.map(link => (
            <Link key={link.name} href={link.href} className={styles.link}>
              <link.icon className={styles.linkIcon} /> {link.name}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}