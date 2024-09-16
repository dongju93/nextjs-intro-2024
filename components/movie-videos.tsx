import { api_url } from "../components/urls";
import styles from "../styles/movie-videos.module.css";

const getVideo = async (id: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("Error in fetching videos");
  const response = await fetch(`${api_url}/${id}/videos`);
  return response.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((videos) => (
        <iframe
          key={videos.id}
          src={`https://youtube.com/embed/${videos.key}`}
        />
      ))}
    </div>
  );
}
