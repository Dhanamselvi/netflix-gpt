import useNowPlayingMovies from "../hooks/useNowPalyingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{
    useNowPlayingMovies();

    return (
        <div>
            <Header/>
            {/* 
                MainContainer
                    -VideoBackground
                    -VideoTitle
                SecondaryContainer
                    -MovieList
                        -MovieCard
                            -MoviePoster
                            -MovieTitle
                            -MovieRating
            */}
            <MainContainer/>
            <SecondaryContainer/>
            
        </div>
    )
}
export default Browse