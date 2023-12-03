import { generatedImage } from "dependencies/constants";
import styles from "./styles.module.css";

const Card = ({ item }: any): React.JSX.Element => {
  const { name } = item;

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${generatedImage()})` }}
    >
      {name}
    </div>
  );
};
export default Card;
