import { SoundPack } from "./SoundPack";
import { soundPacks } from "./soundPacks";
import { useState } from "react";

import "./SoundGrid.css";

export const SoundGrid = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<null | number>(null);

  return (
    <div className='SoundGrid'>
      {soundPacks.map((soundPack, index) => (
        <SoundPack
          key={soundPack.title}
          title={soundPack.title}
          imageSource={soundPack.img}
          audio={soundPack.audio}
          isPlaying={currentlyPlaying === index}
          onClick={() => setCurrentlyPlaying(currentlyPlaying === index ? null : index)}
        />
      ))}
    </div>
  );
};