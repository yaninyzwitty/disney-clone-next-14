import AiSuggestion from "@/components/AiSuggestion";
import MovieCarousel from "@/components/MovieCarousel";
import {getPopularMovies, getSearchMovies} from "@/lib/getMovies";
import {notFound} from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};
async function SearchPage({params: {term}}: Props) {
  if (!term) {
    notFound();
  }

  const termToUse = decodeURI(term);
  const movies = await getSearchMovies(termToUse);
  const popularMovies = await getPopularMovies();

  //   api call to get movies
  // api call to get popular movies

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 lg:mt-42">
        <h1 className="text-6xl font-bold px-10"> Results for {termToUse} </h1>
        {/* ai suggestion */}

        <AiSuggestion term={termToUse} />
        <MovieCarousel title="Movies" movies={movies} isVertical />
        <MovieCarousel title="You may also like this" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
