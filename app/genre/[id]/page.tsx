import MovieCarousel from "@/components/MovieCarousel";
import {getDiscoverMovies} from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
async function GenrePage({params: {id}, searchParams: {genre}}: Props) {
  const movies = await getDiscoverMovies(id);
  console.log(movies);
  return (
    <div className="max-w-7xl mx-auto">
      {/* ai azure suggestion */}
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
      </div>
      <MovieCarousel title={`Genre`} movies={movies} isVertical />
    </div>
  );
}

export default GenrePage;
