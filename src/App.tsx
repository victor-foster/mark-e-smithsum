import { Component, createSignal } from 'solid-js';
import Header from './Header';
import { lyrics } from './lyrics';
import './App.scss';

const generate = (size = 1) => {
  const truncate = (paragraph = '') => {
    const paragraphLength = (min = 31, max = 82) => {
      return Math.round(Math.random() * (max - min) + min);
    };

    const truncated = `${paragraph.split(' ').splice(0, paragraphLength()).join(' ')}.`;
    return truncated;
  };

  const byRandom = () => 0.5 - Math.random();

  return [...lyrics]
    .sort(byRandom)
    .slice(0, size)
    .map((paragraph: string) => truncate(paragraph));
};

const App: Component = () => {
  const [smithsum, setSmithsum] = createSignal(['']);

  return (
    <>
      <Header />
      <select
        title='select-number-of-paragraphs'
        name='paragrah'
        id='paragrah-select'
        onChange={(e) => {
          const size = parseInt(e.currentTarget.value, 10) ?? 1;
          setSmithsum(generate(size));
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
        {smithsum()
          .filter((ipsum) => Boolean(ipsum))
          .map((item) => (
            <p>{item}</p>
          ))}
      </div>
    </>
  );
};

export default App;
