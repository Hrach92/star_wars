import React from "react";
import { Pagination } from "antd";
import styles from "./styles.module.css";

type PageTypes = {
  setPage?: (e: number) => void;
};

const Pages: React.FC<PageTypes> = ({ setPage = () => {} }) => {
  return (
    <Pagination
      defaultCurrent={1}
      total={50}
      onChange={(e) => {
        setPage(e);
      }}
      className={styles.pages}
    />
  );
};

export default Pages;
