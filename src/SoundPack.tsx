import useSound from 'use-sound';
import { PlayButton } from './PlayButton';

import './SoundPack.css';

type SoundPackProps = {
  title: string;
  imageSource: string;
  audio: string;
  isPlaying: boolean;
  onClick: () => void;
};

export const SoundPack = ({ title, imageSource, audio, isPlaying, onClick }: SoundPackProps) => {
  const [play, { stop }] = useSound(audio);
  isPlaying ? play() : stop();

  return (
    <button className='SoundPack' onClick={onClick}>
      <div className='SoundPack__footer'>
        <div className='SoundPack__footerControl'>
          <PlayButton isPlaying={isPlaying} onClick={onClick} />
          <h4 className='SoundPack__footerTitle'>{title}</h4>
        </div>
      </div>
      <img className='SoundPack__image' src={imageSource} alt={title} />
    </button>
  );
};