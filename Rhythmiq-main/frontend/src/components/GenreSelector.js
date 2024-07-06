import React from 'react';

function GenreSelector({ onSelectGenre }) {
    const genres = ['Рок', 'Поп', 'Рэп'];

    return (
        <div className="genre-selector">
            <h2>Выберите жанр:</h2>
            <div className="genre-buttons">
                {genres.map((genre, index) => (
                    <button key={index} onClick={() => onSelectGenre(genre)}>{genre}</button>
                ))}
            </div>
        </div>
    );
}

export default GenreSelector;