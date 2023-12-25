import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCarousel from "@/components/MovieCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "@/lib/getMovies";
async function Home() {
  const upcomingMovies = await getUpComingMovies();
  const popularMovies = await getPopularMovies();
  const topRated = await getTopRatedMovies();
  return (
    <main>
      {/* carousel-banner */}
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:mt-48">
        {/* 3 movire carousel */}
        <MovieCarousel movies={upcomingMovies} title="Upcoming" />
        <MovieCarousel movies={topRated} title="Top Rated" />
        <MovieCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}

export default Home;
