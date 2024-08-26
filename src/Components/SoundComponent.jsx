import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SoundComponent = ({ symbol }) => {
  const playSound = () => {
    const filePath = `public/Sounds/${(symbol)}.mp3`;
    console.log(`Attempting to load sound from: ${filePath}`); // Debug line
    const audio = new Audio(filePath);

    audio.play()
      .then(() => console.log(`Playing sound for ${symbol}`))
      .catch(error => console.error(`Error playing sound for ${symbol}:`, error));
  };

  useEffect(() => {
    if (symbol) {
      playSound();
    }
  }, [symbol]);

  return <p></p>;
};

SoundComponent.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default SoundComponent;






