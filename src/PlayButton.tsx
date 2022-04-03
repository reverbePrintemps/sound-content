import playIcon from './assets/svg/icons/play-icon.svg';
import pauseIcon from './assets/svg/icons/pause-icon.svg';

import './PlayButton.css';

export type PlayButtonProps = {
  isPlaying: boolean;
  onClick: () => void;
};

export const PlayButton = ({ isPlaying, onClick }: PlayButtonProps) => {
  return <button className='PlayButton' onClick={onClick}>
    <img className='PlayButton__image' src={isPlaying ? pauseIcon : playIcon} alt="Play or pause icon" />
  </button>;
};
