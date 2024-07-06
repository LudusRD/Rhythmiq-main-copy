import React, { useState } from 'react';
import GenreSelector from './components/GenreSelector';
import RadioPlayer from './components/RadioPlayer';
import WalletButton from './components/WalletButton';
import './App.css';

function App() {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [currentTrack, setCurrentTrack] = useState(null);

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
        // Логика загрузки треков выбранного жанра
    };

    const handleTrackSelect = (track) => {
        setCurrentTrack(track);
        // Логика воспроизведения выбранного трека
    };

    return (
        <div className="app">
            {!selectedGenre && <GenreSelector onSelectGenre={handleGenreSelect} />}
            {selectedGenre && !currentTrack && (
                <RadioPlayer genre={selectedGenre} onSelectTrack={handleTrackSelect} />
            )}
            {currentTrack && <WalletButton />}
        </div>
    );
}

export default App;