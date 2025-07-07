import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomePage from "./routes/Home/HomePage";
import CollectionPage from "./routes/Home/CollectionPage";
import DramaMovies from "./routes/Home/CollectionPage/DramaMovies";
import RomanceMovies from "./routes/Home/CollectionPage/RomanceMovies";
import AdventureMovies from "./routes/Home/CollectionPage/AdventureMovies";
import Anime from "./routes/Home/CollectionPage/Anime";
import ActionMovies from "./routes/Home/CollectionPage/ActionMovies";
import SciFicMovies from "./routes/Home/CollectionPage/SciFicMovies";
import HorrorMovies from "./routes/Home/CollectionPage/HorrorMovies";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<Navigate to={"/home"} />} />
            <Route path="home" element={<HomePage />} />
            <Route path="collection" element={<CollectionPage />} >
              <Route path="drama-movies" element={<DramaMovies />} />
              <Route path="romance-movies" element={<RomanceMovies />} />
              <Route path="adventure-movies" element={<AdventureMovies />} />
              <Route path="animes" element={<Anime />} />
              <Route path="sci-fic-movies" element={<SciFicMovies />} />
              <Route path="action-movies" element={<ActionMovies />} />
              <Route path="horror-movies" element={<HorrorMovies />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
