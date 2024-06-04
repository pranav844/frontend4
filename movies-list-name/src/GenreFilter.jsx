import React from 'react';

function GenreFilter({ genres, onSelectGenre }) {
  return (
    <div>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onSelectGenre(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
