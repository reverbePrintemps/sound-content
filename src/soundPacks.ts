// Cover images
import chopAndSwing from "./assets/images/sound_packs/chop-and-swing.jpg";
import coreLibrary from "./assets/images/sound_packs/core-library.jpg";
import drumBooth from "./assets/images/sound_packs/drum-booth.jpg";
import drumEssentials from "./assets/images/sound_packs/drum-essentials.jpg";
import electricKeyboards from "./assets/images/sound_packs/electric-keyboards.jpg";
import glitchAndWash from "./assets/images/sound_packs/glitch-and-wash.jpg";
import punchAndTilt from "./assets/images/sound_packs/punch-and-tilt.jpg";
import skitterAndStep from "./assets/images/sound_packs/skitter-and-step.jpg";
import synthEssentials from "./assets/images/sound_packs/synth-essentials.jpg";

// Audio previews
const drumEssentialsAudio = require("./assets/audio/WCP_133_Percussion_Full_02.wav");
const drumBoothAudio = require("./assets/audio/BSD_126_BigAndBouncy_FullMix.wav");
const coreLibraryAudio = require("./assets/audio/KMF_126_Cowbell_1.wav");
const synthEssentialsAudio = require("./assets/audio/TRW_80_C_Drone_Chord_Synth.wav");
const electricKeyboardsAudio = require("./assets/audio/VK2_70_Eb_Rhodes_32.wav");
const glitchAndWashAudio = require("./assets/audio/RES_G_SynthBass_27.wav");
const skitterAndStepAudio = require("./assets/audio/SIG_126_G_Catwalk_Synth.wav");
const punchAndTiltAudio = require("./assets/audio/WCP_124_Percussion_Full_03.wav");
const chopAndSwingAudio = require("./assets/audio/FLP_110_D_FG_06.wav");

export const soundPacks = [
  { title: "Drum Essentials", img: drumEssentials, audio: drumEssentialsAudio },
  { title: "Core Library", img: coreLibrary, audio: coreLibraryAudio },
  {
    title: "Synth Essentials",
    img: synthEssentials,
    audio: synthEssentialsAudio,
  },
  { title: "Drum Booth", img: drumBooth, audio: drumBoothAudio },
  { title: "Punch and Tilt", img: punchAndTilt, audio: punchAndTiltAudio },
  {
    title: "Electric Keyboards",
    img: electricKeyboards,
    audio: electricKeyboardsAudio,
  },
  {
    title: "Skitter and Step",
    img: skitterAndStep,
    audio: skitterAndStepAudio,
  },
  { title: "Chop and Swing", img: chopAndSwing, audio: chopAndSwingAudio },
  { title: "Glitch and Wash", img: glitchAndWash, audio: glitchAndWashAudio },
];
