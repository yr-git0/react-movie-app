import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>{movieInfo.title}</h1>
    </div>
  );
}

export default Detail;
