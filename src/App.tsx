import { Component, createSignal } from 'solid-js';
import './App.scss';
import Counter from './Counter';

const App: Component = () => {
  // const [counter, setCounter] = createSignal(0);
  // setInterval(setCounter, 1000, (c: number) => c + 1);

  return (
    <>
      <header>
        <h1>Mark E. Smithsum</h1>
        <h2>The Fall, lorum ipsum generator</h2>
      </header>
      <select title="select-number-of-paragraphs" name="paragrah" id="paragrah-select" onchange="generateIpsum(this)">
        <option value="">Select paragraghs</option>
        <option value="1">1 paragraph</option>
        <option value="2">2 paragraphs</option>
        <option value="3">3 paragraphs</option>
        <option value="5">5 paragraphs</option>
        <option value="9">9 paragraphs</option>
        <option value="13">13 paragraphs</option>
      </select>
      <button>Shout!</button>
      <div class="ipsum">
        <h2>Shout!</h2>
        <p>Here's a dance that is pure hell
          Enter at your peril
          Take five deadbeat steps, do a stroll
          Act like you just got outta jail
          You must be repellent
          They're always hitting on me
          But I'm getting thin
          From waiting on
          They just want me to be
        </p>
        <p>
          Turn left side and shout "come back here!"
          Then hot-tail it right outta there
          You are now descendant
          You are now descendant
          Behind the counter
          The hen centre
          Was always picking on me
          There they are tucking in all over shop
          Got no time
          For dinner or tea
        </p>
        <p>
          And you got a man on your trail
          And you are descendant
          Of a vicious criminal
          I'm getting thin
          From idiots who write rock books
          Disparate
          Ex-groups cold would've played this
          "For Nose Pin and the Punk Piggies
          Didn't quite make it, " they say
          Get behind the counter
          The other side of the counter
        </p>
      </div>
    </>
  );
};

export default App;
