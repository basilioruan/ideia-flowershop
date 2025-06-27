import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.css';

export default function Card({img, title, description} : {img: StaticImageData, title: string, description: string}) {
  return (
    <div className={styles.container}>
      <div className="card">
        <div className={styles.header}>
          <Image src={img} className={styles.image} alt="..." />
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text">{description}</p>
          <button className={styles.btnDetail}>Ver detalhes</button>
        </div>
      </div>
    </div>
  );
}