import { HomeOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import SearchComponent from "./search";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <HomeOutlined className={styles.icon} />
      </Link>
      <SearchComponent />
    </div>
  );
};
export default Header;
