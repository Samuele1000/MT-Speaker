import React, { useState, useEffect } from 'react';
import { playSong, stopSong } from '../utils/api';

const Speaker = ({ speakerId, initialSong, accessList }) => {
    const [currentSong, setCurrentSong] = useState(initialSong);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Logic to check access and initialize speaker state
        if (!accessList.includes(speakerId)) {
            // Handle access denied
        }
    }, [speakerId, accessList]);

    const handlePlay = () => {
        playSong(currentSong);
        setIsPlaying(true);
    };

    const handleStop = () => {
        stopSong();
        setIsPlaying(false);
    };

    return (
        <div className="speaker">
            <h3>Speaker ID: {speakerId}</h3>
            <p>Now Playing: {currentSong}</p>
            <button onClick={isPlaying ? handleStop : handlePlay}>
                {isPlaying ? 'Stop' : 'Play'}
            </button>
        </div>
    );
};

export default Speaker;