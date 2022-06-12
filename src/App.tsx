import { Component, createSignal } from 'solid-js';
import './App.scss';
import Counter from './Counter';
import { barmy } from './lyrics/barmy';
import { behindTheCounter } from './lyrics/behind-the-counter';
import { bloodOuttaStone } from './lyrics/blood-outta-stone';
import { bombast } from './lyrics/bombast';
import { bury } from './lyrics/bury';
import { cabItUp } from './lyrics/cab-it-up';
import { couldntGetAhead } from './lyrics/couldnt-get-ahead';
import { cruisersCreek } from './lyrics/cruisers-creek';
import { deadbeatDescedant } from './lyrics/dead-beat-descendant';
import { distilledMugArt } from './lyrics/distilled-mug-art';
import { flatOfAngles } from './lyrics/flat-of-angles';
import { gibbusGibson } from './lyrics/gibbus-gibson';
import { iFeelVoxish } from './lyrics/i-feel-voxish';
import { itsACurse } from './lyrics/its-a-curse';
import { justStepSWays } from './lyrics/just-step-sways';
import { livingTooLate } from './lyrics/living-too-late';
import { newBigPrinz } from './lyrics/new-big-prinz';
import { paranoiaMan } from './lyrics/paranoia-man-in-cheap-shit-room';
import { rudeAllTheTime } from './lyrics/rude-all-the-time';
import { shoulderPads } from './lyrics/shoulder-pads';
import { sirWilliamWray } from './lyrics/sir-william-wray';
import { takingOff } from './lyrics/taking-off';
import { theSteakPlace } from './lyrics/the-steak-place';
import { imTotallyWired } from './lyrics/totally-wired';
import { victrolaTime } from './lyrics/victrola-time';
import { vixen } from './lyrics/vixen';
import { whiteLightning } from './lyrics/white-lightning';
import { wiseOlMan } from './lyrics/wise-ol-man';

let text = [
  barmy, behindTheCounter, bloodOuttaStone, bombast, bury, cabItUp, 
  couldntGetAhead, cruisersCreek, deadbeatDescedant, distilledMugArt, 
  flatOfAngles, gibbusGibson, iFeelVoxish, itsACurse, justStepSWays, livingTooLate, newBigPrinz,
  paranoiaMan, rudeAllTheTime, shoulderPads, sirWilliamWray, takingOff,
  theSteakPlace, imTotallyWired, victrolaTime, vixen, whiteLightning, wiseOlMan
];

const getRandomItem = () => {
  const randomIndex = Math.floor(Math.random() * text.length);
  const item = text[randomIndex];
  return item;
}

const fetchLyric = async (songName) => (await fetch(`/lyrics/${songName}.md`)).json();

const App: Component = () => {
  const [ipsum, setIpsum] = createSignal(['']);

  return (
    <>
      <header>
        <h1 class='the-fall'>The Fall</h1>
      </header>
      <select title="select-number-of-paragraphs" name="paragrah" id="paragrah-select" onChange={(e) => {
        const numberOfParagraphs = parseInt(e.currentTarget.value);
        const results = Array.from({ length: numberOfParagraphs }, () => getRandomItem());
        setIpsum(results);
      }}>
        <option value="">Select paragraghs</option>
        <option value="1">1 paragraph</option>
        <option value="2">2 paragraphs</option>
        <option value="3">3 paragraphs</option>
        <option value="5">5 paragraphs</option>
        <option value="9">9 paragraphs</option>
        <option value="13">13 paragraphs</option>
      </select>
      <button>Shout!</button>
      <div class='ipsum'>
        {ipsum().filter(ipsum => !!ipsum).map(item => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
};

export default App;
