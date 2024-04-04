import { Link } from "react-router-dom";
import Songs from "../data/songs.json";
import PropTypes from 'prop-types';


export const SongList = ({ title }) => {

  SongList.propTypes = {
    title: PropTypes.string.isRequired,
  };
  console.log(Songs.songs)
  const songs = Songs.songs;
  return <>
    <h3>{title}</h3>
    <ul>
      {songs.map((song, key) => (
        <li key={key}>
          <Link to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`}>{song.title} - {song.artist} </Link>
        </li>
      ))}
    </ul>
  </>;



}