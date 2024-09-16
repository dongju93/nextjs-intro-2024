import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";

import { Suspense } from "react";

export const metadata = {
  title: "Details",
};

export default async function MovieDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
