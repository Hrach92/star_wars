import React, { useCallback, useState } from "react";
import { useGetCharactersQuery } from "../../store/reducer/starWars";

const Cards = (): React.JSX.Element => {
  const [page, setPage] = useState(1);
  const { data: { results } = { results: [] }, isLoading } =
    useGetCharactersQuery(page);
  console.log(results);
  const onLeft = useCallback(() => setPage((prev) => prev + 1), []);

  return (
    <>
      {!isLoading && (
        <div>
          {results.map(({ name }: { name: string }) => {
            return <div key={name}>{name}</div>;
          })}
          <button onClick={onLeft}>right</button>
        </div>
      )}
    </>
  );
};
export default Cards;
