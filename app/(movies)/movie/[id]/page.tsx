import { api_url } from "../../../(home)/page";

export const metadata = {
    title: "Details",
};

const getMovie = async (id: string) => {
    const response = await fetch(`${api_url}/${id}`);
    return response.json();
};

const getVideo = async (id: string) => {
    const response = await fetch(`${api_url}/${id}/videos`);
    return response.json();
};

export default async function MovieDetails({
    params: { id },
}: {
    params: { id: string };
}) {
    const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
    console.log(video);
    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    );
}
