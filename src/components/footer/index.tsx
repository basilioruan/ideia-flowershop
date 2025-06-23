import Link from 'next/link';
import styles from './styles.module.css';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {

  const instagramPath = 'http://instagram.com/ideasfloricultura';

  const getCurrentYear = () => (new Date().getFullYear());

  return (
    <>
      <div className={styles.container}>
        <section className={styles.socialMedia}>
          <span className={styles.socialMediaText}> Acesse nosso Instagram! </span>
          <Link href={instagramPath} target='_blank'> <FaInstagram className={styles.socialMediaIcon} /> </Link>
        </section>
        <section>
          <span> {getCurrentYear()}© Ideias Floricultura | Macuco de Minas - MG </span>
        </section>
      </div>
    </>
  );

}