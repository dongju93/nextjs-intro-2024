import { api_url } from "../components/urls";
import styles from "../styles/movie.module.css";

const getMovie = async (id: string) => {
  const response = await fetch(`${api_url}/${id}`);
  return response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
