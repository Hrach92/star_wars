import { useParams } from "react-router-dom";
import { useGetCharacterByIdQuery } from "store/reducer/starWars";
import styles from "./styles.module.css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Item = (): React.JSX.Element => {
  const { id } = useParams();
  const [film, setFilm] = useState<string[]>([]);
  const [planet, setPlanet] = useState<string[]>([]);
  const {
    data: {
      name,
      birth_year,
      eye_color,
      films,
      gender,
      hair_color,
      height,
      homeworld,
      mass,
      skin_color,
    } = {},
  } = useGetCharacterByIdQuery(id);

  const setFilmNames = useCallback(() => {
    films?.forEach(async (url: string) => {
      try {
        const res = await axios.get(url);
        setFilm((prev) => [...prev, res?.data?.title]);
      } catch (err: any) {
        console.log(err.message);
      }
    });
  }, [films]);

  const setPlanetsNames = useCallback(async () => {
    try {
      const res = await axios.get(homeworld);
      setPlanet(res?.data?.name);
    } catch (err: any) {
      console.log(err.message);
    }
  }, [homeworld]);

  useEffect(() => {
    setFilmNames();
    setPlanetsNames();
  }, [films, setFilmNames, setPlanetsNames]);

  useEffect(() => {
    setPlanetsNames();
  }, [setPlanetsNames]);

  return (
    <div className={styles.container}>
      <div>
        <span>Name</span>
        <span>{name}</span>
      </div>
      <div>
        <span>Year of birth</span>
        <span>{birth_year}</span>
      </div>
      <div>
        <span>Eye color</span>
        <span>{eye_color}</span>
      </div>
      <div>
        <span>Gender</span>
        <span>{gender}</span>
      </div>
      <div>
        <span>Hair color</span>
        <span>{hair_color}</span>
      </div>
      <div>
        <span>Height</span>
        <span>{height}</span>
      </div>
      <div>
        <span>Skin color</span>
        <span>{skin_color}</span>
      </div>
      <div>
        <span>Mass</span>
        <span>{mass}</span>
      </div>
      <div>
        <span>Films</span>
        <span>{film.join(",")}</span>
      </div>
      <div>
        <span>Home</span>
        <span>{planet}</span>
      </div>
    </div>
  );
};
export default Item;
