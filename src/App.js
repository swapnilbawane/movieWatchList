import "./styles.css";
import { movies } from "./data.js";
// Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.

// const getIt = (movies) =>
// movies.map(({ title, director }) => console.log(`${title} and ${director}`));

function GetMovies(movieList) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Here's a list of movies you asked</h1>{" "}
      {/* <strong> Movie Details: </strong> */}
      <ul style={{ textAlign: "left", listStyle: "none" }}>
        {movies.map((movieItem) => (
          <li key={movieItem.id}>
            <p> </p>
            <strong> Movie Title: </strong>
            <em> {movieItem.title} </em>
            <br />
            <strong> Movie Director: </strong>
            <em> {movieItem.director} </em>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <GetMovies movieList={movies} />
    </div>
  );
}
