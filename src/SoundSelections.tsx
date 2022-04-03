import { SoundGrid } from "./SoundGrid";
import { SectionDescription } from "./SectionDescription";

import './SoundSelections.css';

const description = "The sounds for making any kind of music are part of Live. The Core Library—included with all editions of Live—comes with rich collections of vintage synths, analog drum machines, multi-sampled drums, electric pianos and other acoustic instruments. Plus there are Curated Collections, toolkits of curated sounds from selected scenes—Instrument Racks, clips and samples, designed to be molded and shaped into something new.";

export const SoundSelections = () => {
  return (
    <div className="SoundSelections">
      <SoundGrid />
      <SectionDescription title="Sound selections" description={description} />
    </div>
  );
};