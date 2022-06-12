import { Component, createSignal } from 'solid-js';
import Header from './Header';
import { lyrics } from './lyrics';
import './App.scss';

const truncate = (str = '') => {
  const numberOfWords = (min = 45, max = 84) => {
    return parseInt(Math.random() * (max - min) + min, 10);
  };

  return `${str.split(' ').splice(0, numberOfWords()).join(' ')}.`;
};

const lyricsFor = (numberOfParagraphs = 1) => {
  const randomizedLyrics = [...lyrics].sort(() => 0.5 - Math.random());
  return randomizedLyrics.slice(0, numberOfParagraphs).map((p) => truncate(p));
};

const App: Component = () => {
  const [ipsum, setIpsum] = createSignal(['']);

  return (
    <>
      <Header />
      <select
        title='select-number-of-paragraphs'
        name='paragrah'
        id='paragrah-select'
        onChange={(e) => {
          const numberOfParagraphs = parseInt(e.currentTarget.value, 10) ?? 1;

          setIpsum(lyricsFor(numberOfParagraphs));
        }}
      >
        <option value=''>Select paragraghs</option>
        <option value='1'>1 paragraph</option>
        <option value='2'>2 paragraphs</option>
        <option value='3'>3 paragraphs</option>
        <option value='5'>5 paragraphs</option>
        <option value='9'>9 paragraphs</option>
        <option value='13'>13 paragraphs</option>
      </select>
      <button>Shout!</button>
      <div class='ipsum'>
        {ipsum()
          .filter((ipsum) => Boolean(ipsum))
          .map((item) => (
            <p>{item}</p>
          ))}
      </div>
    </>
  );
};

export default App;
