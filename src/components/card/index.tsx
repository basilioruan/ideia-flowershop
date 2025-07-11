import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

interface CardProps {
  id?: number;
  img: StaticImageData;
  title: string;
  description: string;
  url: string;
}

export default function Card({id, img, title, description, url}: CardProps) {
  const router = useRouter();

  const handleVerDetalhes = () => {
    if (id) {
      router.push(`${url}/${id}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className="card">
        <div className={styles.header}>
          <Image src={img} className={styles.image} alt={title} />
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text">{description}</p>
          <button 
            className={styles.btnDetail}
            onClick={handleVerDetalhes}
            disabled={!id}
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}