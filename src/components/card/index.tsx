import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { Produto } from '@/types';

interface CardProps {
  id?: number;
  img: Produto['img'];
  title: string;
  description: string;
}

export default function Card({img, title, description, id}: CardProps) {
  const router = useRouter();

  const handleVerDetalhes = () => {
    if (id) {
      router.push(`/produto-detail/${id}`);
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