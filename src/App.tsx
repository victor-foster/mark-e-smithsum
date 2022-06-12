import { Component, createSignal } from 'solid-js';
import './App.scss';
import Header from './Header';
import { lyrics } from './lyrics';

const getRandomLyrics = () => {
	const randomIndex = Math.floor(Math.random() * lyrics.length);
	const item = lyrics[randomIndex];
	return item;
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
					const results = Array.from({ length: numberOfParagraphs }, () => getRandomLyrics());
					setIpsum(results);
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
