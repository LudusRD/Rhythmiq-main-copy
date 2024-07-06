import React from 'react';

function RadioPlayer({ genre, onSelectTrack }) {
    // Логика загрузки и воспроизведения треков выбранного жанра

    const tracks = []; // Загруженные треки

    const handleTrackSelect = (track) => {
        onSelectTrack(track);
    };

    return (
        <div className="radio-player">
            <h2>Жанр: {genre}</h2>
            <div className="track-list">
                {tracks.map((track, index) => (
                    <div key={index} className="track-item" onClick={() => handleTrackSelect(track)}>
                        <img src={track.coverUrl} alt="Обложка трека" />
                        <div className="track-info">
                            <h3>{track.title}</h3>
                            <p>{track.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RadioPlayer;