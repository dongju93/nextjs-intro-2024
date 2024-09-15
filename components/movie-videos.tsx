import { api_url } from "../components/urls";

const getVideo = async (id: string) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new Error("Error in fetching videos");
    const response = await fetch(`${api_url}/${id}/videos`);
    return response.json();
};

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideo(id);
    // return <h6>{JSON.stringify(videos)}</h6>;
    return <h6>{JSON.stringify(videos)}</h6>;
}
