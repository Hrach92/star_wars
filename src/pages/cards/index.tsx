import React, { useContext, useState } from "react";
import {
  useFindCharacterQuery,
  useGetCharactersQuery,
} from "../../store/reducer/starWars";
import Pages from "./pagination";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Card from "./card";
import { SearchContext } from "providers/searchProvider";

const Cards = (): React.JSX.Element => {
  const [page, setPage] = useState(1);
  const { text } = useContext(SearchContext);

  const { data: { results } = { results: [] }, isFetching } =
    useGetCharactersQuery(page);

  const { data: { results: searchResult } = { results: [] } } =
    useFindCharacterQuery(text);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {!isFetching &&
          !searchResult.length &&
          results.map((item: any) => {
            const id = item.url.replace(
              `${process.env.REACT_APP_ENDPOINT}people/`,
              ""
            );
            return (
              <Link to={`${id}`} key={item.url} className={styles.link}>
                <Card item={item} />
              </Link>
            );
          })}
        {!isFetching &&
          searchResult.length &&
          searchResult.map((item: any) => {
            const id = item.url.replace(
              `${process.env.REACT_APP_ENDPOINT}people/`,
              ""
            );
            return (
              <Link to={`${id}`} key={item.url} className={styles.link}>
                <Card item={item} />
              </Link>
            );
          })}
      </div>
      <Pages setPage={setPage} />
    </div>
  );
};
export default Cards;
