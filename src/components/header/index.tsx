import { HomeOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import SearchComponent from "./search";
import { useContext } from "react";
import { SearchContext } from "providers/searchProvider";

const Header = () => {
  const { setText } = useContext(SearchContext);

  return (
    <div className={styles.header}>
      <Link to="/">
        <HomeOutlined className={styles.icon} onClick={() => setText("")} />
      </Link>
      <SearchComponent setText={setText} />
    </div>
  );
};
export default Header;
