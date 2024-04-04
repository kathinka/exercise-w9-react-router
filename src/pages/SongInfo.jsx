
import { useParams } from "react-router-dom";
import SongsDataFromJson from "../data/songs.json";

export const SongInfo = () => {

  const { songTitle } = useParams();

  const songData = SongsDataFromJson.songs.find((song) => song.title.toLowerCase().replace(/ /g, "-") === songTitle)

if (!songData) return(
  <>
    <h4>Song not found!</h4>
    <link to="/">Back to Home</link>
  </>
)
  return (
    <>
      <div>
        <h4>{songTitle}</h4>
        <div>
          <h5>Title</h5>
          <p>{songData.title}</p>
          <h5>Artist</h5>
          <p>{songData.artist}</p>
          <h5>Album name</h5>
          <p>{songData.album}</p>
          <h5>Released </h5>
          <p>{songData.year}</p>
        </div>


      </div>
    </>
  );
}


export default SongInfo;