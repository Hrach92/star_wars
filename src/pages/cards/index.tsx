import React, { useState } from "react";
import { useGetCharactersQuery } from "../../store/reducer/starWars";
import Pages from "./pagination";
import { Link } from "react-router-dom";

const Cards = (): React.JSX.Element => {
  const [page, setPage] = useState(1);

  const { data: { results } = { results: [] }, isFetching } =
    useGetCharactersQuery(page, {
      refetchOnFocus: true,
    });
  console.log(process.env.REACT_APP_ENDPOINT, 555);

  return (
    <>
      {!isFetching && (
        <div>
          {results.map(({ name, url }: { name: string; url: string }) => {
            const id = url.replace(
              `${process.env.REACT_APP_ENDPOINT}people/`,
              ""
            );
            console.log(id);

            return (
              <Link to={`${id}`}>
                <div key={name}>{name}</div>
              </Link>
            );
          })}
        </div>
      )}
      <Pages setPage={setPage} />
    </>
  );
};
export default Cards;
