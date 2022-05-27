import { Component, createSignal } from 'solid-js';
import './App.scss';
import Counter from './Counter';

const text = [
  `Out of England, I dream of its creamery
  When I'm there I dwell on Saxony.
  In Turkey when I've been due to World War I
  Istanbul is the place 'cause of my birthday.
  
  I am barmy
  Bleedin' barmy
  
  I got everything
  I got everything I want except for hungry
  I got everything I want except for money.
  
  I've got the best round set aside for parties
  They'll have one when I've gone
  In fact, they said so, good one.
  
  I am barmy
  Bleedin' barmy
  
  Friends disintegrate within circles of cash
  Residue after years of fab genius
  Is a pension for the jews
  and a medal from the company which I wiped my butt on
  and hung on a laburnum tree.
  
  I am barmy
  Bleedin' barmy
  I am barmy
  Bleedin' barmy
  
  Just call me the first
  Just call me the first
  Just call me the first
  Just call me the first
  Just call me the first
  Just call me the first
  Just call me the first
  Just call me the first
  Just call me the first
  Just call me the first
  
  I lay waiting hopefully on sloped grass green
  I am barmy, bleedin' barmy
  
  A dramatic verse
  A dramatic verse
  A dramatic verse
  
  The programs lot
  We break into tune
  Take and bring a word
  Ring a buzzer
  Take and bring a word
  
  A dramatic verse.`,
  `In North Carolina way back in the hills
  Lived my pappy and he had him a still
  He brewed white lightning 'til the sun go down
  Then he'd get out a jug and pass it around
  
  Mighty mighty pleasin'
  Poppa kept a-squeezin' and called it
  White lightning
  
  G-men, T-men, Revenue too
  Searching for the place where he made his brew
  They were lookin' tryna book him
  But my pappy kept a-cookin' it
  White lightning
  
  I asked my pappy why he called the brew
  White Lightning's full of morning dew
  Took one sip then I knew
  When my eyes bulged out and my face turned blue
  
  A city slicker came and said "I'm mighty tough
  I wanna get a taste of the powerful stuff"
  Took one slug and drank it right down
  And I heard him moaning as he hit the ground
  
  Shout!`,
  `They're always hitting on me
  But I'm getting thin
  From waiting on
  They just want me to be
  
  Behind the counter
  The hen centre
  Was always picking on me
  There they are tucking in all over shop
  Got no time
  For dinner or tea
  
  Behind the counter
  Every car I see
  Is always picking on me
  They take a left turn when I cross, guaranteed
  They park on the pavement
  Some have paid parks on the pavement
  Here
  
  I say "Wait sir, wait sir,
  You'd better wait sir"
  Guaranteed
  
  I'm getting thin
  From idiots who write rock books
  Disparate
  Ex-groups cold would've played this
  "For Nose Pin and the Punk Piggies
  Didn't quite make it, " they say
  Get behind the counter
  The other side of the counter
  
  Chill it, boy
  The other side of the counter
  `,
  `Pop-up tote bag twee squid asymmetrical lyft roof party ugh try-hard glossier pabst bicycle rights jean shorts single-origin coffee. IPhone tumblr narwhal, tattooed mumblecore you probably haven't heard of them XOXO authentic art party bicycle rights. Bespoke bitters master cleanse austin authentic lumbersexual mixtape man bun art party tilde swag. Tacos bitters chicharrones thundercats selfies chartreuse chia. Put a bird on it taxidermy cornhole VHS, tousled ennui fam hexagon craft beer marfa DIY pinterest.`,
  `Air plant deep v polaroid church-key. Farm-to-table ramps put a bird on it pickled aesthetic pork belly beard tbh street art pabst. Pop-up cliche before they sold out hoodie heirloom flannel schlitz organic. Crucifix forage cardigan before they sold out umami echo park subway tile art party squid shoreditch photo booth.`,
  `Yr offal cornhole neutra. Cronut kale chips hoodie, mustache tilde tacos palo santo fashion axe whatever pop-up post-ironic pitchfork pok pok ethical. Literally freegan post-ironic wolf listicle synth gochujang tousled palo santo 3 wolf moon health goth next level. Asymmetrical you probably haven't heard of them lomo post-ironic, pitchfork crucifix narwhal retro chia tofu schlitz. Kitsch keytar normcore listicle flexitarian fashion axe chartreuse jianbing yr vice flannel cred.`,
  `Jianbing live-edge bicycle rights messenger bag, street art offal squid gastropub food truck kale chips locavore. Mustache humblebrag banjo, shaman offal photo booth coloring book mumblecore typewriter tbh you probably haven't heard of them. Disrupt glossier umami pop-up, schlitz listicle keytar ramps. Try-hard tumblr crucifix aesthetic lyft.`,
  `Try-hard woke irony selvage listicle, literally adaptogen tilde messenger bag deep v hexagon stumptown gastropub. YOLO yuccie godard copper mug, slow-carb put a bird on it williamsburg offal craft beer trust fund sustainable palo santo 8-bit. Venmo XOXO drinking vinegar kale chips cred semiotics, vinyl helvetica hoodie bespoke leggings pop-up. Polaroid lomo tofu vape. Chicharrones mumblecore taiyaki, direct trade prism vinyl cardigan subway tile flexitarian. Aesthetic food truck glossier coloring book. Biodiesel distillery crucifix schlitz skateboard ennui master cleanse pok pok normcore cardigan.`,
  `Cliche organic woke yr gluten-free, twee PBR&B everyday carry 8-bit roof party. Hexagon craft beer pinterest humblebrag raw denim pabst schlitz celiac. Quinoa hoodie man braid, iPhone flannel chia scenester pinterest kickstarter enamel pin health goth aesthetic art party cliche mustache. Irony cred street art locavore green juice.`,
  `Tilde twee af drinking vinegar trust fund. Ramps vaporware hell of kombucha 8-bit chambray YOLO wolf vinyl pop-up cornhole activated charcoal mixtape. Mixtape marfa before they sold out XOXO poutine craft beer scenester cronut drinking vinegar knausgaard you probably haven't heard of them hella. Literally selvage mumblecore activated charcoal echo park vegan deep v fingerstache irony kogi microdosing trust fund. Schlitz cloud bread activated charcoal, master cleanse kitsch shoreditch umami bicycle rights la croix post-ironic biodiesel edison bulb. 8-bit disrupt banjo selvage. Flannel selfies organic put a bird on it keytar, lo-fi health goth umami fam four loko kombucha adaptogen hammock austin tilde.`
];

const App: Component = () => {
  const [ipsum, setIpsum] = createSignal(['']);

  return (
    <>
      <header>
        <h1>Mark E. Smithsum</h1>
        <h2>The Fall, lorum ipsum generator</h2>
      </header>
      <select title="select-number-of-paragraphs" name="paragrah" id="paragrah-select" onChange={(e) => {
        const value = parseInt(e.currentTarget.value);
        let tempText = text.slice(0, value);
        setIpsum(tempText);
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
        {ipsum().map(item => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
};

export default App;
