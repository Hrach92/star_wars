import React from "react";
import { Pagination } from "./style";

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
    />
  );
};

export default Pages;
