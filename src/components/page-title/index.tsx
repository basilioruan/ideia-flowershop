import { IconType } from "react-icons";
import styles from "./styles.module.css";

interface PageTitleProps {
  title: string;
  icon?: IconType;
}

export default function PageTitle({ title, icon: Icon }: PageTitleProps) {
  
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        {Icon && <span className={styles.icon}><Icon /></span>}
        {title}
      </h1>
      <hr className={styles.titleLine} />
    </div>
  );
}