import Link from "next/link";

export const metadata = {
    title: "Home",
};

export const api_url = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(api_url);
    const json_data = await response.json();
    return json_data;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}
