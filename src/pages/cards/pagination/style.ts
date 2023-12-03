import { Pagination as AntPagination, PaginationProps } from "antd";
import { FC } from "react";
import styled from "styled-components";

export const Pagination: FC<PaginationProps> = styled(AntPagination)`
  width: fit-content;
  padding: 15px 0 25px;

  .ant-pagination-item {
    background: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7) !important;
  }
  .ant-pagination-item-active {
    border: 0px;
    background: grey;
    opacity: 0.6;

    a {
      color: white !important;
    }
  }
`;
