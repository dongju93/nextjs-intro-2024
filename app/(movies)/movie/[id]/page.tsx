import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../components/movie-info";

import { Suspense } from "react";

interface MovieDetailsProps {
  params: { id: string };
}

// 영화의 제목을 동적으로 가져오기 위해 사용
export async function generateMetadata({ params: { id } }: MovieDetailsProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetails({
  params: { id },
}: MovieDetailsProps) {
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
