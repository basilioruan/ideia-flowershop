import Image from 'next/image';
import roseImg from '../../public/assets/rose_img.jpg';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <span className={styles.mainText}>Causando sorrisos e emoções </span>
      <span className={styles.secondaryText}>Confira nossos produtos e serviços </span>
      <button className={styles.productBtn}> Produtos </button>
      <Image src={roseImg} className={styles.image} alt="Imagem rosa" />
    </div>
  );
}
