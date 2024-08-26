

// import { useState, useEffect } from 'react';
// import SoundComponent from '../Components/SoundComponent';
// import './IPAChart.css';
// import speakText from './speakText';

// const IPAChart = () => {
//   const [clicks, setClicks] = useState({});
//   const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
//     'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // Simplified symbols array

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       const symbol = event.key.toLowerCase();
//       if (symbols.includes(symbol)) {
//         handleButtonClick(symbol);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const handleButtonClick = (symbol) => {
//     setClicks((prev) => ({
//       ...prev,
//       [symbol]: (prev[symbol] || 0) + 1,
//     }));
//   };

//   const speakText = (text) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     synth.speak(utterance);
//   };

//   const monothongs = {
//     'a': {
//       description: 'Front open unrounded vowel',
//       examples: 'Example of a: apple, ant',
//       braille: 'Braille for a: ⠁',
//     },
//     'ɪ': {
//       description: 'Front close unrounded vowel',
//       examples: 'Example of ɪ: igloo, sit',
//       braille: 'Braille for ɪ: ⠊',
//     },
//     'e': {
//       description: 'Front mid unrounded vowel',
//       examples: 'Example of e: elephant, bed',
//       braille: 'Braille for e: ⠑',
//     },
//     'ɛ': {
//       description: 'Front open-mid unrounded vowel',
//       examples: 'Example of ɛ: bed, pen',
//       braille: 'Braille for ɛ: ⠋',
//     },
//     'æ': {
//       description: 'Front near-open unrounded vowel',
//       examples: 'Example of æ: cat, bat',
//       braille: 'Braille for æ: ⠯',
//     },
//     'ɑ': {
//       description: 'Back open unrounded vowel',
//       examples: 'Example of ɑ: father, car',
//       braille: 'Braille for ɑ: ⠫',
//     },
//     'ɔ': {
//       description: 'Back open-mid rounded vowel',
//       examples: 'Example of ɔ: dog, thought',
//       braille: 'Braille for ɔ: ⠉',
//     },
//     'o': {
//       description: 'Back mid rounded vowel',
//       examples: 'Example of o: go, boat',
//       braille: 'Braille for o: ⠕',
//     },
//     'ʊ': {
//       description: 'Back close rounded vowel',
//       examples: 'Example of ʊ: foot, put',
//       braille: 'Braille for ʊ: ⠳',
//     },
//     'u': {
//       description: 'Back close rounded vowel',
//       examples: 'Example of u: boot, true',
//       braille: 'Braille for u: ⠥',
//     },
//     'ə': {
//       description: 'Mid central unrounded vowel',
//       examples: 'Example of ə: about, sofa',
//       braille: 'Braille for ə: ⠄',
//     },
//     'ɜ': {
//       description: 'Mid central unrounded vowel',
//       examples: 'Example of ɜ: nurse, bird',
//       braille: 'Braille for ɜ: ⠢',
//     },
//     'ʌ': {
//       description: 'Back open-mid unrounded vowel',
//       examples: 'Example of ʌ: strut, mud',
//       braille: 'Braille for ʌ: ⠺',
//     },
//     'ɒ': {
//       description: 'Back open rounded vowel',
//       examples: 'Example of ɒ: lot, hot',
//       braille: 'Braille for ɒ: ⠔',
//     },
//     'ɐ': {
//       description: 'Near-open central vowel',
//       examples: 'Example of ɐ: another, sofa',
//       braille: 'Braille for ɐ: ⠣',
//     },
//     'ɑː': {
//       description: 'Back open unrounded vowel (long)',
//       examples: 'Example of ɑː: far, car',
//       braille: 'Braille for ɑː: ⠏',
//     },
//     'ɔː': {
//       description: 'Back open-mid rounded vowel (long)',
//       examples: 'Example of ɔː: saw, law',
//       braille: 'Braille for ɔː: ⠟',
//     },
//     'ɜː': {
//       description: 'Mid central unrounded vowel (long)',
//       examples: 'Example of ɜː: her, fur',
//       braille: 'Braille for ɜː: ⠗',
//     },
//     'ɪə': {
//       description: 'Diphthong - closing (Front close unrounded vowel)',
//       examples: 'Example of ɪə: near, ear',
//       braille: 'Braille for ɪə: ⠫⠂',
//     },
//     'ɛə': {
//       description: 'Diphthong - closing (Front open-mid unrounded vowel)',
//       examples: 'Example of ɛə: square, air',
//       braille: 'Braille for ɛə: ⠉⠂',
//     },
//     'ʊə': {
//       description: 'Diphthong - closing (Back close rounded vowel)',
//       examples: 'Example of ʊə: sure, poor',
//       braille: 'Braille for ʊə: ⠳⠂',
//     },

//   };

  
  
//   const examples = {
//     a: 'Example of a: apple, ant',
//     b: 'Example of b: bat, tub',
//     c: 'Example of c: cat, cup',
//     d: 'Example of d: dog, pad',
//     e: 'Example of e: elephant, bed',
//     f: 'Example of f: fish, leaf',
//     g: 'Example of g: go, bag',
//     h: 'Example of h: hat, hop',
//     i: 'Example of i: igloo, sit',
//     j: 'Example of j: jug, jet',
//     k: 'Example of k: kite, sock',
//     l: 'Example of l: lion, ball',
//     m: 'Example of m: man, ham',
//     n: 'Example of n: nut, pen',
//     o: 'Example of o: octopus, dog',
//     p: 'Example of p: pet, cup',
//     q: 'Example of q: queen, quack',
//     r: 'Example of r: rat, car',
//     s: 'Example of s: snake, bus',
//     t: 'Example of t: top, pot',
//     u: 'Example of u: umbrella, cup',
//     v: 'Example of v: van, dove',
//     w: 'Example of w: wolf, wing',
//     x: 'Example of x: fox, box',
//     y: 'Example of y: yak, yes',
//     z: 'Example of z: zebra, buzz',
//   };

//   const descriptions = {
//     a: 'Description of a: Front open unrounded vowel',
//     b: 'Description of b: Voiced bilabial plosive',
//     c: 'Description of c: Voiceless alveolar fricative (in some contexts, otherwise similar to k or s)',
//     d: 'Description of d: Voiced alveolar plosive',
//     e: 'Description of e: Front mid unrounded vowel',
//     f: 'Description of f: Voiceless labiodental fricative',
//     g: 'Description of g: Voiced velar plosive',
//     h: 'Description of h: Voiceless glottal fricative',
//     i: 'Description of i: Front close unrounded vowel',
//     j: 'Description of j: Voiced postalveolar affricate',
//     k: 'Description of k: Voiceless velar plosive',
//     l: 'Description of l: Voiced alveolar lateral approximant',
//     m: 'Description of m: Voiced bilabial nasal',
//     n: 'Description of n: Voiced alveolar nasal',
//     o: 'Description of o: Back mid rounded vowel',
//     p: 'Description of p: Voiceless bilabial plosive',
//     q: 'Description of q: Voiceless uvular plosive (rare in English)',
//     r: 'Description of r: Voiced alveolar approximant',
//     s: 'Description of s: Voiceless alveolar fricative',
//     t: 'Description of t: Voiceless alveolar plosive',
//     u: 'Description of u: Back close rounded vowel',
//     v: 'Description of v: Voiced labiodental fricative',
//     w: 'Description of w: Voiced labio-velar approximant',
//     x: 'Description of x: Voiceless velar fricative (in some contexts, otherwise similar to ks or gz)',
//     y: 'Description of y: Voiced palatal approximant',
//     z: 'Description of z: Voiced alveolar fricative',
//   };


//   const brailleRepresentations = {
//     a: 'Braille for a: ⠁',
//     b: 'Braille for b: ⠃',
//     c: 'Braille for c: ⠉',
//     d: 'Braille for d: ⠙',
//     e: 'Braille for e: ⠑',
//     f: 'Braille for f: ⠋',
//     g: 'Braille for g: ⠛',
//     h: 'Braille for h: ⠓',
//     i: 'Braille for i: ⠊',
//     j: 'Braille for j: ⠚',
//     k: 'Braille for k: ⠅',
//     l: 'Braille for l: ⠇',
//     m: 'Braille for m: ⠍',
//     n: 'Braille for n: ⠝',
//     o: 'Braille for o: ⠕',
//     p: 'Braille for p: ⠏',
//     q: 'Braille for q: ⠟',
//     r: 'Braille for r: ⠗',
//     s: 'Braille for s: ⠎',
//     t: 'Braille for t: ⠞',
//     u: 'Braille for u: ⠥',
//     v: 'Braille for v: ⠧',
//     w: 'Braille for w: ⠺',
//     x: 'Braille for x: ⠭',
//     y: 'Braille for y: ⠽',
//     z: 'Braille for z: ⠵',
//   };

//   const renderContent = (symbol) => {
//     const clickCount = clicks[symbol] || 0;
//     const displaySound = clickCount % 4 === 1;

//     if (displaySound) {
//       return <SoundComponent symbol={symbol} type="sound" />;
//     } else if (clickCount % 4 === 2) {
//       speakText(examples[symbol]);
//       return <p>{examples[symbol]}</p>;
//     } else if (clickCount % 4 === 3) {
//       speakText(descriptions[symbol]);
//       return <p>{descriptions[symbol]}</p>;
//     } else if (clickCount % 4 === 0) {
//       speakText(brailleRepresentations[symbol]);
//       return <p>{brailleRepresentations[symbol]}</p>;
//     } else {
//       return null;
//     }
//   };

//   return (
//     <div className="ipa-chart">
//       {symbols.map((symbol) => (
//         <button
//           key={symbol}
//           onClick={() => handleButtonClick(symbol)}
//           className={`ipa-button ipa-button-${symbol}`}
//         >
//           {symbol}
//         </button>
//       ))}
//       <div className="content">
//         {symbols.map((symbol) => (
//           <div key={symbol}>{renderContent(symbol)}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default IPAChart;



// import { useState, useEffect } from 'react';
// import SoundComponent from '../Components/SoundComponent';
// import './IPAChart.css';
// import speakText from './speakText';

// const IPAChart = () => {
//   const [clicks, setClicks] = useState({
//     // Initialize clicks with all symbols and their initial click count set to 0
//     a: 0, ɪ: 0, e: 0, ɛ: 0, æ: 0, ɑ: 0, ɔ: 0, o: 0, ʊ: 0, u: 0, ə: 0, ɜ: 0, ʌ: 0, ɒ: 0, ɐ: 0, 'ɑː': 0, 'ɔː': 0, 'ɜː': 0, 'ɪə': 0, 'ɛə': 0, 'ʊə': 0,
//     p: 0, b: 0, t: 0, d: 0, k: 0, g: 0, 'tʃ': 0, 'dʒ': 0, f: 0, v: 0, s: 0, z: 0, θ: 0, ð: 0, 'ʃ': 0, 'ʒ': 0, h: 0, l: 0, r: 0, w: 0, j: 0, m: 0, n: 0, ŋ: 0,   
//   });
//   const [currentSymbol, setCurrentSymbol] = useState(null);
//   const [currentContent, setCurrentContent] = useState(null);

//   const monophthongs = ['a', 'ɪ', 'e', 'ɛ', 'æ', 'ɑ', 'ɔ', 'o', 'ʊ', 'u', 'ə', 'ɜ', 'ʌ', 'ɒ', 'ɐ', 'ɑː', 'ɔː', 'ɜː', 'ɪə', 'ɛə', 'ʊə'];
//   const consonants = ['p', 'b', 't', 'd', 'k', 'g', 'tʃ', 'dʒ', 'f', 'v', 's', 'z', 'θ', 'ð', 'ʃ', 'ʒ', 'h', 'l', 'r', 'w', 'j', 'm', 'n', 'ŋ'];
//   const allSymbols = [...monophthongs, ...consonants];

//   const examplesMonophthongs = {
//     // Monophthongs examples
//     'a': 'Example of a: apple, ant',
//     'ɪ': 'Example of ɪ: sit, bit',
//     'e': 'Example of e: bed, head',
//     'ɛ': 'Example of ɛ: bet, let',
//     'æ': 'Example of æ: bat, cat',
//     'ɑ': 'Example of ɑ: spa, far',
//     'ɔ': 'Example of ɔ: saw, law',
//     'o': 'Example of o: go, no',
//     'ʊ': 'Example of ʊ: book, look',
//     'u': 'Example of u: boot, toot',
//     'ə': 'Example of ə: sofa, about',
//     'ɜ': 'Example of ɜ: bird, herd',
//     'ʌ': 'Example of ʌ: cut, hut',
//     'ɒ': 'Example of ɒ: cot, lot',
//     'ɐ': 'Example of ɐ: about, comma',
//     'ɑː': 'Example of ɑː: father, car',
//     'ɔː': 'Example of ɔː: thought, law',
//     'ɜː': 'Example of ɜː: bird, herd',
//     'ɪə': 'Example of ɪə: ear, here',
//     'ɛə': 'Example of ɛə: air, care',
//     'ʊə': 'Example of ʊə: tour, sure',
//   };

//   const examplesConsonants = {
//     // Consonants examples
//     'p': 'Example of p: pet, cup',
//     't': 'Example of t: top, pot',
//     'k': 'Example of k: cat, kill',
//     'b': 'Example of b: bat, rib',
//     'd': 'Example of d: dog, mad',
//     'g': 'Example of g: get, egg',
//     'tʃ': 'Example of tʃ: chat, nature',
//     'dʒ': 'Example of dʒ: job, edge',
//     'f': 'Example of f: fun, leaf',
//     'v': 'Example of v: van, have',
//     'θ': 'Example of θ: think, path',
//     'ð': 'Example of ð: this, breathe',
//     's': 'Example of s: sit, bus',
//     'z': 'Example of z: zoo, has',
//     'ʃ': 'Example of ʃ: she, emotion',
//     'ʒ': 'Example of ʒ: pleasure, vision',
//     'h': 'Example of h: hat, ahead',
//     'm': 'Example of m: man, ham',
//     'n': 'Example of n: nut, pen',
//     'ŋ': 'Example of ŋ: sing, ring',
//     'l': 'Example of l: lion, ball',
//     'ɹ': 'Example of ɹ: rat, car',
//     'j': 'Example of j: yes, yellow',
//     'w': 'Example of w: wolf, wing',
//   };

//   const descriptionsMonophthongs = {
//     // Monophthongs descriptions
//     'a': 'Description of a: Front open unrounded vowel',
//     'ɪ': 'Description of ɪ: Front close unrounded vowel',
//     'e': 'Description of e: Front mid unrounded vowel',
//     'ɛ': 'Description of ɛ: Front open-mid unrounded vowel',
//     'æ': 'Description of æ: Front near-open unrounded vowel',
//     'ɑ': 'Description of ɑ: Back open unrounded vowel',
//     'ɔ': 'Description of ɔ: Back open-mid rounded vowel',
//     'o': 'Description of o: Back mid rounded vowel',
//     'ʊ': 'Description of ʊ: Back close rounded vowel',
//     'u': 'Description of u: Back close rounded vowel',
//     'ə': 'Description of ə: Mid central unrounded vowel',
//     'ɜ': 'Description of ɜ: Mid central unrounded vowel',
//     'ʌ': 'Description of ʌ: Back open-mid unrounded vowel',
//     'ɒ': 'Description of ɒ: Back open rounded vowel',
//     'ɐ': 'Description of ɐ: Near-open central vowel',
//     'ɑː': 'Description of ɑː: Back open unrounded vowel (long)',
//     'ɔː': 'Description of ɔː: Back open-mid rounded vowel (long)',
//     'ɜː': 'Description of ɜː: Mid central unrounded vowel (long)',
//     'ɪə': 'Description of ɪə: Diphthong - closing (Front close unrounded vowel)',
//     'ɛə': 'Description of ɛə: Diphthong - closing (Front open-mid unrounded vowel)',
//     'ʊə': 'Description of ʊə: Diphthong - closing (Back close rounded vowel)',
//   };

//   const descriptionsConsonants = {
//     // Consonants descriptions
//     'p': 'Description of p: Voiceless bilabial plosive',
//     't': 'Description of t: Voiceless alveolar plosive',
//     'k': 'Description of k: Voiceless velar plosive',
//     'b': 'Description of b: Voiced bilabial plosive',
//     'd': 'Description of d: Voiced alveolar plosive',
//     'g': 'Description of g: Voiced velar plosive',
//     'tʃ': 'Description of tʃ: Voiceless postalveolar affricate',
//     'dʒ': 'Description of dʒ: Voiced postalveolar affricate',
//     'f': 'Description of f: Voiceless labiodental fricative',
//     'v': 'Description of v: Voiced labiodental fricative',
//     'θ': 'Description of θ: Voiceless dental fricative',
//     'ð': 'Description of ð: Voiced dental fricative',
//     's': 'Description of s: Voiceless alveolar fricative',
//     'z': 'Description of z: Voiced alveolar fricative',
//     'ʃ': 'Description of ʃ: Voiceless postalveolar fricative',
//     'ʒ': 'Description of ʒ: Voiced postalveolar fricative',
//     'h': 'Description of h: Voiceless glottal fricative',
//     'm': 'Description of m: Voiced bilabial nasal',
//     'n': 'Description of n: Voiced alveolar nasal',
//     'ŋ': 'Description of ŋ: Voiced velar nasal',
//     'l': 'Description of l: Voiced alveolar lateral approximant',
//     'ɹ': 'Description of ɹ: Voiced alveolar approximant',
//     'j': 'Description of j: Voiced palatal approximant',
//     'w': 'Description of w: Voiced labio-velar approximant',
//   };

//   const brailleMonophthongs = {
//     // Monophthongs Braille representations
//     'a': 'Braille: ⠁',
//     'ɪ': 'Braille: ⠊',
//     'e': 'Braille: ⠑',
//     'ɛ': 'Braille: ⠻',
//     'æ': 'Braille: ⠿',
//     'ɑ': 'Braille: ⠷',
//     'ɔ': 'Braille: ⠿',
//     'o': 'Braille: ⠕',
//     'ʊ': 'Braille: ⠌',
//     'u': 'Braille: ⠥',
//     'ə': 'Braille: ⠂',
//     'ɜ': 'Braille: ⠜',
//     'ʌ': 'Braille: ⠳',
//     'ɒ': 'Braille: ⠟',
//     'ɐ': 'Braille: ⠹',
//     'ɑː': 'Braille: ⠷',
//     'ɔː': 'Braille: ⠿',
//     'ɜː': 'Braille: ⠜',
//     'ɪə': 'Braille: ⠊⠜',
//     'ɛə': 'Braille: ⠻⠜',
//     'ʊə': 'Braille: ⠌⠜',
//   };

//   const brailleConsonants = {
//     // Consonants Braille representations
//     'p': 'Braille: ⠏',
//     't': 'Braille: ⠞',
//     'k': 'Braille: ⠅',
//     'b': 'Braille: ⠃',
//     'd': 'Braille: ⠙',
//     'g': 'Braille: ⠛',
//     'tʃ': 'Braille: ⠟',
//     'dʒ': 'Braille: ⠿',
//     'f': 'Braille: ⠋',
//     'v': 'Braille: ⠧',
//     'θ': 'Braille: ⠹',
//     'ð': 'Braille: ⠮',
//     's': 'Braille: ⠎',
//     'z': 'Braille: ⠵',
//     'ʃ': 'Braille: ⠱',
//     'ʒ': 'Braille: ⠬',
//     'h': 'Braille: ⠓',
//     'm': 'Braille: ⠍',
//     'n': 'Braille: ⠝',
//     'ŋ': 'Braille: ⠛⠳',
//     'l': 'Braille: ⠇',
//     'ɹ': 'Braille: ⠗',
//     'j': 'Braille: ⠚',
//     'w': 'Braille: ⠺',
//   };

//   const getNextContent = (symbol) => {
//     const clickCount = clicks[symbol];
//     if (clickCount === 0) {
//       return examplesMonophthongs[symbol] || examplesConsonants[symbol];
//     } else if (clickCount === 1) {
//       return descriptionsMonophthongs[symbol] || descriptionsConsonants[symbol];
//     } else if (clickCount === 2) {
//       return brailleMonophthongs[symbol] || brailleConsonants[symbol];
//     } else if (clickCount === 3) {
//       return null;
//     }
//   };

//   const handleSymbolClick = (symbol) => {
//     const newClickCount = (clicks[symbol] + 1) % 4;
//     setClicks({ ...clicks, [symbol]: newClickCount });
//     setCurrentSymbol(symbol);
//     const nextContent = getNextContent(symbol);
//     setCurrentContent(nextContent);
//   };

//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       const key = event.key;
//       if (allSymbols.includes(key)) {
//         handleSymbolClick(key);
//       }
//     };

//     window.addEventListener('keypress', handleKeyPress);
//     return () => {
//       window.removeEventListener('keypress', handleKeyPress);
//     };
//   }, [clicks]);

//   useEffect(() => {
//     if (currentContent) {
//       speakText(currentContent);
//     }
//   }, [currentContent]);

//   return (
//     <div>
//       <h1>IPA Chart</h1>
//       <div>
//         <h2>Monophthongs</h2>
//         <div>
//           {monophthongs.map((symbol) => (
//             <button
//               key={symbol}
//               onClick={() => handleSymbolClick(symbol)}
//             >
//               {symbol}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div>
//         <h2>Consonants</h2>
//         <div>
//           {consonants.map((symbol) => (
//             <button
//               key={symbol}
//               onClick={() => handleSymbolClick(symbol)}
//             >
//               {symbol}
//             </button>
//           ))}
//         </div>
//       </div>
//       <SoundComponent />
//       {currentSymbol && currentContent && (
//         <div>
//           <h2>{currentSymbol}</h2>
//           <p>{currentContent}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IPAChart;







// import { useState, useEffect } from 'react';
// import SoundComponent from '../Components/SoundComponent';
// import './IPAChart.css';
// import speakText from './speakText';

// const IPAChart = () => {
//   const [clicks, setClicks] = useState({
//     // Initialize clicks with all symbols and their initial click count set to 0
//     a: 0, ɪ: 0, e: 0, ɛ: 0, æ: 0, ɑ: 0, ɔ: 0, o: 0, ʊ: 0, u: 0, ə: 0, ɜ: 0, ʌ: 0, ɒ: 0, ɐ: 0, 'ɑː': 0, 'ɔː': 0, 'ɜː': 0, 'ɪə': 0, 'ɛə': 0, 'ʊə': 0,
//     p: 0, b: 0, t: 0, d: 0, k: 0, g: 0, 'tʃ': 0, 'dʒ': 0, f: 0, v: 0, s: 0, z: 0,θ: 0, ð: 0,  'ʃ': 0, 'ʒ': 0, h: 0, l: 0, r: 0,w: 0,j: 0,m:0,n:0, ŋ: 0,   
//   });
//   const [currentSymbol, setCurrentSymbol] = useState(null);
//   const [currentContent, setCurrentContent] = useState(null);

//   const monothongs = ['a', 'ɪ', 'e', 'ɛ', 'æ', 'ɑ', 'ɔ', 'o', 'ʊ', 'u', 'ə', 'ɜ', 'ʌ', 'ɒ', 'ɐ', 'ɑː', 'ɔː', 'ɜː', 'ɪə', 'ɛə', 'ʊə'];
//   const consonants = ['p', 'b', 't', 'd', 'k', 'g', 'tʃ', 'dʒ', 'f', 'v', 's','z','θ', 'ð',   'ʃ', 'ʒ', 'h', 'l', 'r','w','j','m', 'n', 'ŋ',];
//   const allSymbols = [...monothongs, ...consonants];


//   const examplesMonothongs = {
//     // Monophthongs examples
//     'a': 'Example of a: apple, ant',
//     'ɪ': 'Example of ɪ: sit, bit',
//     'e': 'Example of e: bed, head',
//     'ɛ': 'Example of ɛ: bet, let',
//     'æ': 'Example of æ: bat, cat',
//     'ɑ': 'Example of ɑ: spa, far',
//     'ɔ': 'Example of ɔ: saw, law',
//     'o': 'Example of o: go, no',
//     'ʊ': 'Example of ʊ: book, look',
//     'u': 'Example of u: boot, toot',
//     'ə': 'Example of ə: sofa, about',
//     'ɜ': 'Example of ɜ: bird, herd',
//     'ʌ': 'Example of ʌ: cut, hut',
//     'ɒ': 'Example of ɒ: cot, lot',
//     'ɐ': 'Example of ɐ: about, comma',
//     'ɑː': 'Example of ɑː: father, car',
//     'ɔː': 'Example of ɔː: thought, law',
//     'ɜː': 'Example of ɜː: bird, herd',
//     'ɪə': 'Example of ɪə: ear, here',
//     'ɛə': 'Example of ɛə: air, care',
//     'ʊə': 'Example of ʊə: tour, sure',
//   };
//   const examplesConsonants = {
//     // Consonants examples
//     'p': 'Example of p: pet, cup',
//     't': 'Example of t: top, pot',
//     'k': 'Example of k: cat, kill',
//     'b': 'Example of b: bat, rib',
//     'd': 'Example of d: dog, mad',
//     'g': 'Example of g: get, egg',
//     'tʃ': 'Example of tʃ: chat, nature',
//     'dʒ': 'Example of dʒ: job, edge',
//     'f': 'Example of f: fun, leaf',
//     'v': 'Example of v: van, have',
//     'θ': 'Example of θ: think, path',
//     'ð': 'Example of ð: this, breathe',
//     's': 'Example of s: sit, bus',
//     'z': 'Example of z: zoo, has',
//     'ʃ': 'Example of ʃ: she, emotion',
//     'ʒ': 'Example of ʒ: pleasure, vision',
//     'h': 'Example of h: hat, ahead',
//     'm': 'Example of m: man, ham',
//     'n': 'Example of n: nut, pen',
//     'ŋ': 'Example of ŋ: sing, ring',
//     'l': 'Example of l: lion, ball',
//     'ɹ': 'Example of ɹ: rat, car',
//     'j': 'Example of j: yes, yellow',
//     'w': 'Example of w: wolf, wing',
//   };

//   const descriptionsMonothongs = {
//     // Monothongs descriptions
//     'a': 'Description of a: Front open unrounded vowel',
//     'ɪ': 'Description of ɪ: Front close unrounded vowel',
//     'e': 'Description of e: Front mid unrounded vowel',
//     'ɛ': 'Description of ɛ: Front open-mid unrounded vowel',
//     'æ': 'Description of æ: Front near-open unrounded vowel',
//     'ɑ': 'Description of ɑ: Back open unrounded vowel',
//     'ɔ': 'Description of ɔ: Back open-mid rounded vowel',
//     'o': 'Description of o: Back mid rounded vowel',
//     'ʊ': 'Description of ʊ: Back close rounded vowel',
//     'u': 'Description of u: Back close rounded vowel',
//     'ə': 'Description of ə: Mid central unrounded vowel',
//     'ɜ': 'Description of ɜ: Mid central unrounded vowel',
//     'ʌ': 'Description of ʌ: Back open-mid unrounded vowel',
//     'ɒ': 'Description of ɒ: Back open rounded vowel',
//     'ɐ': 'Description of ɐ: Near-open central vowel',
//     'ɑː': 'Description of ɑː: Back open unrounded vowel (long)',
//     'ɔː': 'Description of ɔː: Back open-mid rounded vowel (long)',
//     'ɜː': 'Description of ɜː: Mid central unrounded vowel (long)',
//     'ɪə': 'Description of ɪə: Diphthong - closing (Front close unrounded vowel)',
//     'ɛə': 'Description of ɛə: Diphthong - closing (Front open-mid unrounded vowel)',
//     'ʊə': 'Description of ʊə: Diphthong - closing (Back close rounded vowel)',
//   };
//   const descriptionsConsonants  = {
//     'p': 'Description of p: Voiceless bilabial plosive',
//     't': 'Description of t: Voiceless alveolar plosive',
//     'k': 'Description of k: Voiceless velar plosive',
//     'b': 'Description of b: Voiced bilabial plosive',
//     'd': 'Description of d: Voiced alveolar plosive',
//     'g': 'Description of g: Voiced velar plosive',
//     'tʃ': 'Description of tʃ: Voiceless postalveolar affricate',
//     'dʒ': 'Description of dʒ: Voiced postalveolar affricate',
//     'f': 'Description of f: Voiceless labiodental fricative',
//     'v': 'Description of v: Voiced labiodental fricative',
//     'θ': 'Description of θ: Voiceless dental fricative',
//     'ð': 'Description of ð: Voiced dental fricative',
//     's': 'Description of s: Voiceless alveolar fricative',
//     'z': 'Description of z: Voiced alveolar fricative',
//     'ʃ': 'Description of ʃ: Voiceless postalveolar fricative',
//     'ʒ': 'Description of ʒ: Voiced postalveolar fricative',
//     'h': 'Description of h: Voiceless glottal fricative',
//     'm': 'Description of m: Voiced bilabial nasal',
//     'n': 'Description of n: Voiced alveolar nasal',
//     'ŋ': 'Description of ŋ: Voiced velar nasal',
//     'l': 'Description of l: Voiced alveolar lateral approximant',
//     'ɹ': 'Description of ɹ: Voiced postalveolar approximant',
//     'j': 'Description of j: Voiced palatal approximant',
//     'w': 'Description of w: Voiced labio-velar approximant',
//   };

//   const brailleRepresentationsMonothongs = {
//     // Monophthongs Braille representations
//     'a': 'Braille representation of a: ⠄',
//     'ɪ': 'Braille representation of ɪ: ⠊',
//     'e': 'Braille representation of e: ⠁',
//     'ɛ': 'Braille representation of ɛ: ⠑',
//     'æ': 'Braille representation of æ: ⠆',
//     'ɑ': 'Braille representation of ɑ: ⠕',
//     'ɔ': 'Braille representation of ɔ: ⠛',
//     'o': 'Braille representation of o: ⠕',
//     'ʊ': 'Braille representation of ʊ: ⠥',
//     'u': 'Braille representation of u: ⠥',
//     'ə': 'Braille representation of ə: ⠃',
//     'ɜ': 'Braille representation of ɜ: ⠢',
//     'ʌ': 'Braille representation of ʌ: ⠢',
//     'ɒ': 'Braille representation of ɒ: ⠯',
//     'ɐ': 'Braille representation of ɐ: ⠪',
//     'ɑː': 'Braille representation of ɑː: ⠕',
//     'ɔː': 'Braille representation of ɔː: ⠛',
//     'ɜː': 'Braille representation of ɜː: ⠢',
//     'ɪə': 'Braille representation of ɪə: ⠊',
//     'ɛə': 'Braille representation of ɛə: ⠑',
//     'ʊə': 'Braille representation of ʊə: ⠥',
//   };
//   const brailleRepresentationsConsonants  = {
//     'p': 'Braille representation of p: ⠏',
//     't': 'Braille representation of t: ⠞',
//     'k': 'Braille representation of k: ⠅',
//     'b': 'Braille representation of b: ⠃',
//     'd': 'Braille representation of d: ⠙',
//     'g': 'Braille representation of g: ⠛',
//     'tʃ': 'Braille representation of tʃ: ⠉⠓',
//     'dʒ': 'Braille representation of dʒ: ⠙⠛',
//     'f': 'Braille representation of f: ⠋',
//     'v': 'Braille representation of v: ⠧',
//     'θ': 'Braille representation of θ: ⠹',
//     'ð': 'Braille representation of ð: ⠩',
//     's': 'Braille representation of s: ⠎',
//     'z': 'Braille representation of z: ⠵',
//     'ʃ': 'Braille representation of ʃ: ⠩',
//     'ʒ': 'Braille representation of ʒ: ⠹',
//     'h': 'Braille representation of h: ⠓',
//     'm': 'Braille representation of m: ⠍',
//     'n': 'Braille representation of n: ⠝',
//     'ŋ': 'Braille representation of ŋ: ⠺',
//     'l': 'Braille representation of l: ⠇',
//     'ɹ': 'Braille representation of ɹ: ⠗',
//     'j': 'Braille representation of j: ⠚',
//     'w': 'Braille representation of w: ⠺',
//   };
//   const handleClick = (symbol) => {
//     const clickCount = clicks[symbol];
//     setClicks({ ...clicks, [symbol]: clickCount + 1 });
//     setCurrentSymbol(symbol);
//     setCurrentContent(getContent(symbol, clickCount));
  
//     const contentToSpeak = `Example: ${examplesMonothongs[symbol] || examplesConsonants[symbol]}. 
//       Description: ${descriptionsMonothongs[symbol] || descriptionsConsonants[symbol]}. 
//       Braille Representation: ${brailleRepresentationsMonothongs[symbol] || brailleRepresentationsConsonants[symbol]}`;
//     speakText(contentToSpeak);
//   };

//   useEffect(() => {
//     // Add event listener for keyboard keydown
//     const handleKeyDown = (event) => {
//       const key = event.key.toLowerCase();
//       if (allSymbols.includes(key)) {
//         handleClick(key);
//       }
//     };

//     // Add event listener
//     window.addEventListener('keydown', handleKeyDown);

//     // Remove event listener on cleanup
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   });


//   const getContent = (symbol, clickCount) => {
//     switch (clickCount % 4) {
//       case 0:
//         return ` ${symbol}`;
//       case 1:
//         return ` ${symbol}`;
//       case 2:
//         return `Example: ${examplesMonothongs[symbol] || examplesConsonants[symbol]}`;
//       case 3:
//         return `Description: ${descriptionsMonothongs[symbol] || descriptionsConsonants[symbol]}`;
//       default:
//         return '';
//     }
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       const keyPressed = event.key.toLowerCase();
//       if (allSymbols.includes(keyPressed)) {
//         handleClick(keyPressed);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     if (currentSymbol && currentContent) {
//       speakText(currentContent);
//     }
//   }, [currentContent]);
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       const key = event.key.toLowerCase();
//       if (allSymbols.includes(key)) {
//         setClicks({ ...clicks, [key]: clicks[key] + 1 });
//         setCurrentSymbol(key);
//         setCurrentContent(getContent(key, clicks[key]));
//         const contentToSpeak = `Example: ${examplesMonothongs[key] || examplesConsonants[key]}. 
//         Description: ${descriptionsMonothongs[key] || descriptionsConsonants[key]}. 
//         Braille Representation: ${brailleRepresentationsMonothongs[key] || brailleRepresentationsConsonants[key]}`;
//         speakText(contentToSpeak);
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);

//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [clicks]);

 

//   return (
//     <div className="ipa-chart">
//       <h1>IPA Chart</h1>
//       <h2>Monophthongs</h2>
//       <div className="monothongs-section">
//         {monothongs.map((symbol) => (
//           <button
//             key={symbol}
//             className="monothong-button"
//             onClick={() => handleClick(symbol)}
//           >
//             {symbol}
//           </button>
//         ))}
//       </div>
//       <h2>Consonants</h2>
//       <div className="consonants-section">
//         {consonants.map((symbol) => (
//           <button
//             key={symbol}
//             className="consonant-button"
//             onClick={() => handleClick(symbol)}
//           >
//             {symbol}
//           </button>
//         ))}
//       </div>
//       <div className="content-section">
//         {currentContent && (
//           <>
//             <SoundComponent
//               symbol={currentSymbol}
//               content={currentContent}
//             />
//             <div>
//               <h3>Examples:</h3>
//               <p>{examplesMonothongs[currentSymbol] || examplesConsonants[currentSymbol]}</p>
//               <h3>Description:</h3>
//               <p>{descriptionsMonothongs[currentSymbol] || descriptionsConsonants[currentSymbol]}</p>
//               <h3>Braille Representation:</h3>
//               <p>{brailleRepresentationsMonothongs[currentSymbol] || brailleRepresentationsConsonants[currentSymbol]}</p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IPAChart;




import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SoundComponent from './SoundComponent';
import './IPAChart.css'

const IPAChart = () => {
  const [currentContent, setCurrentContent] = useState(null);
  const [currentSymbol, setCurrentSymbol] = useState(null);
  const [clicks, setClicks] = useState({});
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/exercise');
  };

  const monophthongs = ['i', 'ɪ', 'e', 'ɒ', 'ɑ', 'ɔ', 'ʊ', 'u', 'ʌ', 'ʒ:', 'ə'];
  const consonants = ['p', 'b', 't', 'd', 'k', 'g', 'tʃ', 'dʒ', 'f', 'v', 's', 'z', 'θ', 'ð', 'ʃ', 'h', 'l', 'r', 'w', 'j', 'm', 'n', 'ŋ'];
  const diphthongs = [ 'eɪ', 'əʊ', 'aɪ','ɔɪ',  'æ',  'ɪə',  'eə',  'ʊə',];

  const allSymbols = [...monophthongs, ...consonants, ...diphthongs];

  const examplesMonophthongs = {
    'i': 'meet, see, bee, fleet, machine',
    'ɪ': 'hit, sit, bit, pin, fish',
    'e': 'bed, said, head, bet, dead',
    'ɒ': 'cat, hat, bat, mat, sat',
    'ɑ': 'cart, star, part, father, heart',
    'ɔ': 'saw, law, paw, draw, thought',
    'ʊ': 'put, foot, book, cook, hook',
    'u': 'boot, food, mood, shoot, loose',
    'ʌ': 'cut, nut, but, hut, much',
    'ʒ:': 'treasure, pleasure, measure, leisure, vision',
    'ə': 'sofa, about, comma, sofa, banana',
  };

  const examplesConsonants = {
    'p': 'pat, tap, cap, map, sap',
    'b': 'bat, tab, cab, lab, stab',
    't': 'tap, pat, bat, mat, rat',
    'd': 'dip, lid, red, bid, dad',
    'k': 'kit, cat, back, kick, sick',
    'g': 'gap, tag, bag, dig, rag',
    'tʃ': 'chin, match, rich, catch, itch',
    'dʒ': 'gin, judge, edge, bridge, cage',
    'f': 'fan, fun, fit, calf, safe',
    'v': 'van, vet, very, save, give',
    's': 'sip, sit, pass, sun, mess',
    'z': 'zip, zoo, buzz, jazz, nose',
    'θ': 'thin, bath, myth, both, death',
    'ð': 'then, this, brother, father, together',
    'ʃ': 'ship, fish, wish, hush, rush',
    'h': 'hat, hit, hut, hop, hug',
    'l': 'lip, let, lot, light, hill',
    'r': 'rip, red, rat, rain, car',
    'W': 'win, wet, wax, wait, swim',
    'j': 'yes, yard, yawn, yell, year',
    'm': 'mat, ham, sum, man, map',
    'n': 'nap, tan, pin, can, sun',
    'ŋ': 'sing, ring, long, bring, song',
  };
  

  const examplesDiphthongs = {
    'eɪ': 'say, day, play, way, stay',
    'əʊ': 'go, show, blow, slow, flow',
    'aɪ': 'my, fly, try, high, lie',
    'ɔɪ': 'boy, toy, joy, noise, point',
    'æ': 'how, now, cow, wow, town',
    'ɪə': 'near, ear, beer, fear, cheer',
    'eə': 'hair, fair, care, share, bear',
    'ʊə': 'tour, pure, cure, sure, secure',
  };
  
  const descriptionsMonophthongs = {
    'i': 'Front close unrounded vowel', 'ɪ': 'Front close unrounded vowel', 'e': 'Front mid unrounded vowel', 'ɒ': 'Front near-open unrounded vowel', 'ɑ': 'Back open unrounded vowel', 'ɔ': 'Back open-mid rounded vowel', 'ʊ': 'Back close rounded vowel', 'u': 'Back close rounded vowel', 'ʌ': 'Back open-mid unrounded vowel', 'ʒ:': 'Mid central unrounded vowel', 'ə': 'Mid central unrounded vowel',
  };

  const descriptionsConsonants = {
    'p': 'Voiceless bilabial plosive', 'b': 'Voiced bilabial plosive', 't': 'Voiceless alveolar plosive', 'd': 'Voiced alveolar plosive', 'k': 'Voiceless velar plosive', 'g': 'Voiced velar plosive', 'tʃ': 'Voiceless postalveolar affricate', 'dʒ': 'Voiced postalveolar affricate', 'f': 'Voiceless labiodental fricative', 'v': 'Voiced labiodental fricative', 's': 'Voiceless alveolar fricative', 'z': 'Voiced alveolar fricative', 'θ': 'Voiceless dental fricative', 'ð': 'Voiced dental fricative', 'ʃ': 'Voiceless postalveolar fricative', 'h': 'Voiceless glottal fricative', 'l': 'Alveolar lateral approximant', 'r': 'Alveolar approximant', 'W': 'Labio-velar approximant', 'j': 'Palatal approximant', 'm': 'Bilabial nasal', 'n': 'Alveolar nasal', 'ŋ': 'Velar nasal',
  };

  const descriptionsDiphthongs = {
    'eɪ': 'Diphthong - closing (Front close unrounded vowel)', 'əʊ': 'Diphthong - closing (Back close rounded vowel)', 'aɪ': 'Diphthong - closing (Front close unrounded vowel)', 'ɔɪ': 'Diphthong - closing (Front close unrounded vowel)', 'æ': 'Diphthong - closing (Back close rounded vowel)', 'ɪə': 'Diphthong - closing (Front close unrounded vowel)', 'eə': 'Diphthong - closing (Front open-mid unrounded vowel)', 'ʊə': 'Diphthong - closing (Back close rounded vowel)',
  };

  const brailleRepresentationsMonophthongs = {
    'i': '2 4', 'ɪ': '2 4', 'e': '1 5', 'ɒ': '1', 'ɑ': '1 1', 'ɔ': '1 3 1', 'ʊ': '1 3 6', 'u': '1 3 6 2 4', 'ʌ': '5 1', 'ʒ:': '1 3 5 4', 'ə': '5',
  };

  const brailleRepresentationsConsonants = {
    'p': '1 2 3 4', 'b': '1 2', 't': '2 3 4 5', 'd': '1 4 5', 'k': '1 3', 'g': '1 2 4 5', 'tʃ': '2 4 6', 'dʒ': '1 4 5 6', 'f': '1 2 4', 'v': '1 2 3 6', 's': '3 4', 'z': '1 3 5 6', 'θ': '1 4 5 6', 'ð': '1 4 5 6', 'ʃ': '1 4 6', 'h': '1 2 5', 'l': '1 2 3', 'r': '1 2 3 5', 'W': '2 4 5 6', 'j': '2 4 5', 'm': '1 3 4', 'n': '1 3 4 5', 'ŋ': '1 2 4 5',
  };

  const brailleRepresentationsDiphthongs = {
    'eɪ': '1 5 2 4', 'əʊ': '5 1 3 6', 'aɪ': '1 2 4', 'ɔɪ': '1 3 2 4', 'æ': '1 1 3 6', 'ɪə': '2 4 5', 'eə': '1 5 5', 'ʊə': '1 3 6 5',
  };

  const keyToSymbolMapping = {
    p: 'p', b: 'b', t: 't', d: 'd', k: 'k', g: 'g', T: 'tʃ', D: 'dʒ', f: 'f', v: 'v', s: 's', z: 'z', O:'θ', Q: 'ð', F:'ʃ', h: 'h', l: 'l', r: 'r', w: 'W', j: 'j', m: 'm', n: 'n', N: 'ŋ', i: 'ɪ', I: 'i', e: 'e', a: 'ɒ', A: 'ɑ', C: 'ɔ', u: 'ʊ', U: 'u', V: 'ʌ', Z: 'ʒ', E: 'ə', 1: 'eɪ', 2: 'əʊ', 3: 'aɪ', 4: 'ɔɪ', 5: 'æ', 6: 'ɪə', 7: 'eə', 8: 'ʊə',
  };

  const getDescription = (symbol) => {
    if (descriptionsMonophthongs[symbol]) {
      return descriptionsMonophthongs[symbol];
    } else if (descriptionsConsonants[symbol]) {
      return descriptionsConsonants[symbol];
    } else if (descriptionsDiphthongs[symbol]) {
      return descriptionsDiphthongs[symbol];
    }
    return 'Description not available';
  };

  const getExample = (symbol) => {
    if (examplesMonophthongs[symbol]) {
      return examplesMonophthongs[symbol];
    } else if (examplesConsonants[symbol]) {
      return examplesConsonants[symbol];
    } else if (examplesDiphthongs[symbol]) {
      return examplesDiphthongs[symbol];
    }
    return 'Example not available';
  };

  const getBrailleRepresentation = (symbol) => {
    if (brailleRepresentationsMonophthongs[symbol]) {
      return brailleRepresentationsMonophthongs[symbol];
    } else if (brailleRepresentationsConsonants[symbol]) {
      return brailleRepresentationsConsonants[symbol];
    } else if (brailleRepresentationsDiphthongs[symbol]) {
      return brailleRepresentationsDiphthongs[symbol];
    }
    return 'Braille representation not available';
  };

  const handleButtonClick = (symbol) => {
    let symbolClicks = clicks[symbol] || 0;
    symbolClicks = (symbolClicks + 1) % 4;
  
    setClicks((prevClicks) => ({
      ...prevClicks,
      [symbol]: symbolClicks,
    }));
  
    let content = '';
    let shouldSpeak = false;
    switch (symbolClicks) {
      case 0:
        content = `Examples: ${getExample(symbol)}`;
        shouldSpeak = true;  // Enable speaking for example
        break;
      case 1:
        content = `Sounds: ${symbol}`;
        shouldSpeak = false; // Disable speaking for sound
        break;
      case 2:
        content = `Description: ${getDescription(symbol)}`;
        shouldSpeak = true;  // Enable speaking for description
        break;
      case 3:
        content = `Braille: ${getBrailleRepresentation(symbol)}`;
        shouldSpeak = true;  // Enable speaking for Braille representation
        break;
      default:
        content = 'Unknown content';
        shouldSpeak = false;
    }
    
  
    console.log('Symbol:', symbol);
    console.log('Content:', content); // Debug content
    console.log('Should Speak:', shouldSpeak); // Debug if speaking is enabled
  
    setCurrentSymbol(symbol);
    setCurrentContent(content);
  
    if (shouldSpeak) {
      speakText(content);
    }
  };
  
  
  
  const speakText = (text) => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };
  
  

  const handleKeyPress = (event) => {
    const symbol = keyToSymbolMapping[event.key];
    if (symbol) {
      handleButtonClick(symbol);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [clicks]);

  return (
    <div className="ipa-chart">
      <h1> IPA Chart</h1>


      <h2>CONSONANTS</h2>
      {consonants.map((symbol, index) => (
        <button key={index} onClick={() =>handleButtonClick(symbol)} >
          {symbol}
        </button>
      ))}

      <h2>DIPHTHONGS</h2>
      {diphthongs.map((symbol, index) => (
        <button key={index} onClick={() => handleButtonClick(symbol)}>
          {symbol}
        </button>
      ))}

      <h2>MONOPHTHONGS</h2>
      {monophthongs.map((symbol, index) => (
        <button key={index} onClick={() => handleButtonClick(symbol)}className="symbol-button">
          {symbol}
        </button>
      ))}
      {currentContent && (
        <div className="content">
          <h2> {currentSymbol}</h2>
          <p>{currentContent}</p>
          
        </div>
      )}
<div>
        {/* <p>Sound: {currentSymbol}</p> */}
        {allSymbols && currentSymbol && <SoundComponent symbol={currentSymbol} />}
      </div>

    
      <button onClick={handleNavigate}>Go to Exercise</button>
    </div>
  );
};

export default IPAChart;




//  import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SoundComponent from './SoundComponent';
// import './IPAChart.css'

// const IPAChart = () => {
//   const [currentContent, setCurrentContent] = useState(null);
//   const [currentSymbol, setCurrentSymbol] = useState(null);
//   const [clicks, setClicks] = useState({});
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/exercise');
//   };

//   const monophthongs = ['/i:/', '/i/', '/e/', '/a/', '/a:/', '/ɔ:/', '/ʊ/', '/u:/', '/ʌ/', '/ʒ:/', '/ə/'];
//   const consonants = ['/p/', '/b/', '/t/', '/d/', '/k/', '/g/', '/tʃ/', '/dʒ/', '/f/', '/v/', '/s/', '/z/', '/θ/', '/ð/', 'ʃ', '/h/', '/l/', '/r/', '/w/', '/j/', '/m/', '/n/', '/ŋ/'];
//   const diphthongs = ['/ei/', '/əu/', '/ai/', '/ɔi/', '/ɑu/', '/iə/', '/eə/', '/uə/'];

//   const allSymbols = [...monophthongs, ...consonants, ...diphthongs];

//   const examplesMonophthongs = {
//     '/i:/': 'meet', '/i/': 'hit', '/e/': 'bed', '/a/': 'cat', '/a:/': 'cart', '/ɔ:/': 'saw', '/ʊ/': 'put', '/u:/': 'boot', '/ʌ/': 'cut', '/ʒ:/': 'treasure', '/ə/': 'sofa',
//   };

//   const examplesConsonants = {
//     '/p/': 'pat', '/b/': 'bat', '/t/': 'tap', '/d/': 'dip', '/k/': 'kit', '/g/': 'gap', '/tʃ/': 'chin', '/dʒ/': 'gin', '/f/': 'fan', '/v/': 'van', '/s/': 'sip', '/z/': 'zip', '/θ/': 'thin', '/ð/': 'then', 'ʃ': 'ship', '/h/': 'hat', '/l/': 'lip', '/r/': 'rip', '/w/': 'win', '/j/': 'yes', '/m/': 'mat', '/n/': 'nap', '/ŋ/': 'sing',
//   };

//   const examplesDiphthongs = {
//     '/ei/': 'say', '/əu/': 'go', '/ai/': 'my', '/ɔi/': 'boy', '/ɑu/': 'how', '/iə/': 'near', '/eə/': 'hair', '/uə/': 'tour',
//   };

//   const descriptionsMonophthongs = {
//     '/i:/': 'Front close unrounded vowel', '/i/': 'Front close unrounded vowel', '/e/': 'Front mid unrounded vowel', '/a/': 'Front near-open unrounded vowel', '/a:/': 'Back open unrounded vowel', '/ɔ:/': 'Back open-mid rounded vowel', '/ʊ/': 'Back close rounded vowel', '/u:/': 'Back close rounded vowel', '/ʌ/': 'Back open-mid unrounded vowel', '/ʒ:/': 'Mid central unrounded vowel', '/ə/': 'Mid central unrounded vowel',
//   };

//   const descriptionsConsonants = {
//     '/p/': 'Voiceless bilabial plosive', '/b/': 'Voiced bilabial plosive', '/t/': 'Voiceless alveolar plosive', '/d/': 'Voiced alveolar plosive', '/k/': 'Voiceless velar plosive', '/g/': 'Voiced velar plosive', '/tʃ/': 'Voiceless postalveolar affricate', '/dʒ/': 'Voiced postalveolar affricate', '/f/': 'Voiceless labiodental fricative', '/v/': 'Voiced labiodental fricative', '/s/': 'Voiceless alveolar fricative', '/z/': 'Voiced alveolar fricative', '/θ/': 'Voiceless dental fricative', '/ð/': 'Voiced dental fricative', 'ʃ': 'Voiceless postalveolar fricative', '/h/': 'Voiceless glottal fricative', '/l/': 'Alveolar lateral approximant', '/r/': 'Alveolar approximant', '/w/': 'Labio-velar approximant', '/j/': 'Palatal approximant', '/m/': 'Bilabial nasal', '/n/': 'Alveolar nasal', '/ŋ/': 'Velar nasal',
//   };

//   const descriptionsDiphthongs = {
//     '/ei/': 'Diphthong - closing (Front close unrounded vowel)', '/əu/': 'Diphthong - closing (Back close rounded vowel)', '/ai/': 'Diphthong - closing (Front close unrounded vowel)', '/ɔi/': 'Diphthong - closing (Front close unrounded vowel)', '/ɑu/': 'Diphthong - closing (Back close rounded vowel)', '/iə/': 'Diphthong - closing (Front close unrounded vowel)', '/eə/': 'Diphthong - closing (Front open-mid unrounded vowel)', '/uə/': 'Diphthong - closing (Back close rounded vowel)',
//   };

//   const brailleRepresentationsMonophthongs = {
//     '/i:/': '2 4', '/i/': '2 4', '/e/': '1 5', '/a/': '1', '/a:/': '1 1', '/ɔ:/': '1 3 1', '/ʊ/': '1 3 6', '/u:/': '1 3 6 2 4', '/ʌ/': '5 1', '/ʒ:/': '1 3 5 4', '/ə/': '5',
//   };

//   const brailleRepresentationsConsonants = {
//     '/p/': '1 2 3 4', '/b/': '1 2', '/t/': '2 3 4 5', '/d/': '1 4 5', '/k/': '1 3', '/g/': '1 2 4 5', '/tʃ/': '2 4 6', '/dʒ/': '1 4 5 6', '/f/': '1 2 4', '/v/': '1 2 3 6', '/s/': '3 4', '/z/': '1 3 5 6', '/θ/': '1 4 5 6', '/ð/': '1 4 5 6', 'ʃ': '1 4 6', '/h/': '1 2 5', '/l/': '1 2 3', '/r/': '1 2 3 5', '/w/': '2 4 5 6', '/j/': '2 4 5', '/m/': '1 3 4', '/n/': '1 3 4 5', '/ŋ/': '1 2 4 5',
//   };

//   const brailleRepresentationsDiphthongs = {
//     '/ei/': '1 5 2 4', '/əu/': '5 1 3 6', '/ai/': '1 2 4', '/ɔi/': '1 3 2 4', '/ɑu/': '1 1 3 6', '/iə/': '2 4 5', '/eə/': '1 5 5', '/uə/': '1 3 6 5',
//   };

//   const cycleContent = (symbol) => {
//     const newClicks = clicks[symbol] + 1;
//     setClicks({ ...clicks, [symbol]: newClicks });

//     if (allSymbols.includes(symbol)) {
//       setCurrentSymbol(symbol);

//       if (newClicks % 4 === 1) {
//         setCurrentContent(
//           <div>
//             <h3>Example:</h3>
//             <SoundComponent textToSpeak={examplesMonophthongs[symbol] || examplesConsonants[symbol] || examplesDiphthongs[symbol]} />
//             <p>{examplesMonophthongs[symbol] || examplesConsonants[symbol] || examplesDiphthongs[symbol]}</p>
//           </div>
//         );
//         speakText(examplesMonophthongs[symbol] || examplesConsonants[symbol] || examplesDiphthongs[symbol]);
//       } else if (newClicks % 4 === 2) {
//         setCurrentContent(
//           <div>
//             <h3>Sound:</h3>
//             <SoundComponent textToSpeak={symbol} />
//             <p>{symbol}</p>
//           </div>
//         );
//         speakText(symbol);
//       } else if (newClicks % 4 === 3) {
//         setCurrentContent(
//           <div>
//             <h3>Description:</h3>
//             <SoundComponent textToSpeak={descriptionsMonophthongs[symbol] || descriptionsConsonants[symbol] || descriptionsDiphthongs[symbol]} />
//             <p>{descriptionsMonophthongs[symbol] || descriptionsConsonants[symbol] || descriptionsDiphthongs[symbol]}</p>
//           </div>
//         );
//         speakText(descriptionsMonophthongs[symbol] || descriptionsConsonants[symbol] || descriptionsDiphthongs[symbol]);
//       } else {
//         setCurrentContent(
//           <div>
//             <h3>Braille Representation:</h3>
//             <SoundComponent textToSpeak={brailleRepresentationsMonophthongs[symbol] || brailleRepresentationsConsonants[symbol] || brailleRepresentationsDiphthongs[symbol]} />
//             <p>{brailleRepresentationsMonophthongs[symbol] || brailleRepresentationsConsonants[symbol] || brailleRepresentationsDiphthongs[symbol]}</p>
//           </div>
//         );
//         speakText(brailleRepresentationsMonophthongs[symbol] || brailleRepresentationsConsonants[symbol] || brailleRepresentationsDiphthongs[symbol]);
//       }
      
//     }
//   };

//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       const key = event.key;
//       const symbol = allSymbols.find((sym) => sym === key);
//       if (symbol) {
//         cycleContent(symbol);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [clicks]);

//   return (
//     <div className="ipa-chart" >
//       <h1>IPA Chart</h1>

//       <h2>CONSONANTS</h2>
//       {consonants.map((symbol, index) => (
//         <button key={index} onClick={() => cycleContent(symbol)} >
//           {symbol}
//         </button>
//       ))}

//       <h2>DIPHTHONGS</h2>
//       {diphthongs.map((symbol, index) => (
//         <button key={index} onClick={() => cycleContent(symbol)}>
//           {symbol}
//         </button>
//       ))}

//       <h2>MONOPHTHONGS</h2>
//       {monophthongs.map((symbol, index) => (
//         <button key={index} onClick={() => cycleContent(symbol)}className="symbol-button">
//           {symbol}
//         </button>
//       ))}

//       {currentContent && (
//         <div className="content">
//           <h3>{currentSymbol}</h3>
//           {currentContent}
//         </div>
//       )}

// <button onClick={handleNavigate} style={{ margin: '20px', padding: '10px 20px', backgroundColor: 'green', cursor: 'pointer' }}>Exercise Page</button>
//     </div>
//   );
// };

// export default IPAChart;






