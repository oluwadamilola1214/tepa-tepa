// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Exercise.css';

// const questions = [
//   { question: 'What is the IPA symbol for the sound in "see"?', options: ['A. ɪ', 'B. e', 'C. ɒ', 'D. ɔ'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "cat"?', options: ['A. u', 'B. æ', 'C. ʊ', 'D. ɒ'], correct: 'B' },
//   { question: 'What is the IPA symbol for the sound in "goat"?', options: ['A. ɪ', 'B. ʌ', 'C. əʊ', 'D. ʒ'], correct: 'C' },
//   { question: 'Which IPA symbol represents the sound in "boot"?', options: ['A. u', 'B. i', 'C. ɑ', 'D. ɔ'], correct: 'A' },
//   { question: 'What is the IPA symbol for the sound in "thought"?', options: ['A. ɒ', 'B. ɔ', 'C. ə', 'D. ʊ'], correct: 'B' },
//   { question: 'Which IPA symbol represents the sound in "strut"?', options: ['A. e', 'B. ʒ', 'C. ʌ', 'D. k'], correct: 'C' },
//   { question: 'What is the IPA symbol for the sound in "pet"?', options: ['A. p', 'B. b', 'C. d', 'D. g'], correct: 'A' },
//   { question: 'Which IPA symbol represents the voiceless dental fricative in "think"?', options: ['A. ʃ', 'B. θ', 'C. s', 'D. ð'], correct: 'A' },
//   { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. ʒ', 'B. u', 'C. ɔ', 'D. ə'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "foot"?', options: ['A. ʌ', 'B. ɒ', 'C. ʊ', 'D. e'], correct: 'C' },
//   { question: 'What is the IPA symbol for the sound in "fleece"?', options: ['A. i', 'B. ɪ', 'C. ʒ', 'D. ɜ'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "bath"?', options: ['A. ɑ', 'B. b', 'C. ɔ', 'D. ɒ'], correct: 'A' },
//   { question: 'What is the IPA symbol for the sound in "happy"?', options: ['A. i', 'B. i', 'C. ə', 'D. l'], correct: 'B' },
//   { question: 'Which IPA symbol represents the sound in "lot"?', options: ['A. ɒ', 'B. ɔ', 'C. ʒ', 'D. i'], correct: 'A' },
//   { question: 'What is the IPA symbol for the sound in "goose"?', options: ['A. u', 'B. ʊ', 'C. ɒ', 'D. ʒ'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "kit"?', options: ['A. ɪ', 'B. i', 'C. ʒ', 'D. e'], correct: 'A' },
//   { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. ʒ', 'B. g', 'C. ʌ', 'D. ɑ'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "strut"?', options: ['A. ʌ', 'B. æ', 'C. ɪ', 'D. i'], correct: 'A' },
//   { question: 'What is the IPA symbol for the sound in "price"?', options: ['A. aɪ', 'B. eɪ', 'C. ɔɪ', 'D. əʊ'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "mouth"?', options: ['A. aʊ', 'B. aɪ', 'C. eɪ', 'D. ɔɪ'], correct: 'A' },
//   { question: 'What is the IPA symbol for the sound in "choice"?', options: ['A. eɪ', 'B. ɔɪ', 'C. aɪ', 'D. aʊ'], correct: 'B' },
//   { question: 'Which IPA symbol represents the sound in "near"?', options: ['A. ɪə', 'B. eə', 'C. ʊə', 'D. aɪ'], correct: 'A' },
//   { question: 'What is the IPA symbol for the sound in "square"?', options: ['A. ʊə', 'B. ɪə', 'C. eə', 'D. aɪ'], correct: 'C' },
//   { question: 'Which IPA symbol represents the sound in "cure"?', options: ['A. ɪə', 'B. ʊə', 'C. eə', 'D. ɔɪ'], correct: 'B' },
//   { question: 'What is the IPA symbol for the sound in "face"?', options: ['A. eɪ', 'B. ɔɪ', 'C. aɪ', 'D. aʊ'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "goat"?', options: ['A. eɪ', 'B. əʊ', 'C. aɪ', 'D. aʊ'], correct: 'B' },
//   { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. ʒ', 'B. æ', 'C. ʌ', 'D. ɑ'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "foot"?', options: ['A. ʌ', 'B. ɒ', 'C. ʊ', 'D. e'], correct: 'C' },
//   { question: 'What is the IPA symbol for the sound in "fleece"?', options: ['A. i', 'B. ɪ', 'C. ʒ', 'D. p'], correct: 'A' },
//   { question: 'Which IPA symbol represents the sound in "kit"?', options: ['A. ɪ', 'B. i', 'C. ʒ', 'D. e'], correct: 'A' },
// ];

// const soundFiles = {
 
//     p: '../../../public/Sounds/p.mp3',
//     b: '../../../public/Sounds/b.mp3',
//     t: '../../../public/Sounds/t.mp3',
//     d: '../../../public/Sounds/d.mp3',
//     k: '../../../public/Sounds/k.mp3',
//     g: '../../../public/Sounds/g.mp3',
//     tʃ: '../../../public/Sounds/tʃ.mp3',
//     dʒ: '../../../public/Sounds/dʒ.mp3',
//     f: '../../../public/Sounds/f.mp3',
//     v: '../../../public/Sounds/v.mp3',
//     s: '../../../public/Sounds/s.mp3',
//     z: '../../../public/Sounds/z.mp3',
//     θ: '../../../public/Sounds/θ.mp3',
//     ð: '../../../public/Sounds/ð.mp3',
//     ʃ: '../../../public/Sounds/ʃ.mp3',
//     h: '../../../public/Sounds/h.mp3',
//     l: '../../../public/Sounds/l.mp3',
//     r: '../../../public/Sounds/r.mp3',
//     w: '../../../public/Sounds/w.mp3',
//     j: '../../../public/Sounds/j.mp3',
//     m: '../../../public/Sounds/m.mp3',
//     n: '../../../public/Sounds/n.mp3',
//     ŋ: '../../../public/Sounds/ŋ.mp3',
//     ɪ: '../../../public/Sounds/ɪ.mp3',
//     i: '../../../public/Sounds/i.mp3',
//     e: '../../../public/Sounds/e.mp3',
//     ɒ: '../../../public/Sounds/ɒ.mp3',
//     ɑ: '../../../public/Sounds/ɑ.mp3',
//     ɔ: '../../../public/Sounds/ɔ.mp3',
//     ʊ: '../../../public/Sounds/ʊ.mp3',
//     u: '../../../public/Sounds/u.mp3',
//     ʌ: '../../../public/Sounds/ʌ.mp3',
//     ʒ: '../../../public/Sounds/ʒ.mp3',
//     ə: '../../../public/Sounds/ə.mp3',
//     eɪ: '../../../public/Sounds/eɪ.mp3',
//     əʊ: '../../../public/Sounds/əʊ.mp3',
//     aɪ: '../../../public/Sounds/aɪ.mp3',
//     ɔɪ: '../../../public/Sounds/ɔɪ.mp3',
//      æ:  '../../../public/Sounds/æ.mp3',
//     ɪə: '../../../public/Sounds/ɪə.mp3',
//     eə: '../../../public/Sounds/eə.mp3',
//     ʊə: '../../../public/Sounds/ʊə.mp3',
//   };
  
 
//   // Add other symbols and their paths as needed


// const Exercise = () => {
//   const navigate = useNavigate();
//   const [answers, setAnswers] = useState(Array(questions.length).fill(''));
//   const [showDialog, setShowDialog] = useState(false);



//   const handleAnswerChange = (index, answer) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = answer;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = () => {
//     setShowDialog(true);
//     setTimeout(() => {
//       setShowDialog(false);
//       navigate('/results', { state: { questions, answers } });
//     }, 2000); // Adjust the duration as needed
//   };

//   const speakText = (text) => {
//     if (!window.speechSynthesis) {
//       console.error('Speech synthesis not supported');
//       return;
//     }
//     window.speechSynthesis.cancel(); // Stop any ongoing speech
//     // const utterance = new SpeechSynthesisUtterance(text);
//     // utterance.onend = () => console.log(`Finished speaking: ${text}`);
//     // utterance.onerror = (e) => console.error('SpeechSynthesisUtterance error:', e);
//     // window.speechSynthesis.speak(utterance);
//   };

//   const playAudio = (symbol) => {
//     const audio = new Audio(soundFiles[symbol]);
//     audio.onerror = (e) => console.error('Audio playback error:', e);
//     audio.play().catch(error => console.error('Audio playback error:', error));
//   };

//   const handleOptionClick = (index, option) => {
//     const optionText = option.split('. ')[1]; // Extract option text
//     speakText(optionText);
//     const symbol = option.split(' ')[1]; // Extract IPA symbol from option
//     if (symbol) {
//       playAudio(symbol); // Play audio for the selected symbol
//     }
//   };

//   return (
//     <div className="exercise-container">
//       <h1>IPA Symbols Quiz</h1>
//       {questions.map((q, index) => (
//         <div key={index} className="question-container">
//           <p>Question {index + 1}: {q.question}</p>
//           <ul>
//             {q.options.map((option, i) => (
//               <li key={i}>
//                 <input
//                   type="radio"
//                   id={`q${index}opt${i}`}
//                   name={`q${index}`}
//                   value={option[0]}
//                   checked={answers[index] === option[0]}
//                   onChange={() => handleAnswerChange(index, option[0])}
//                 />
//                 <label
//                   htmlFor={`q${index}opt${i}`}
//                   onClick={() => handleOptionClick(index, option)}
//                 >
//                   {option}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit</button>
//       {showDialog && <div className="dialog">Submitting...</div>}
//     </div>
//   );
// };

// export default Exercise;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './Exercise.css';


const questions = [
   { question: 'What is the IPA symbol for the sound in "see"?', options: ['A. ɪ', 'B. e', 'C. ɒ', 'D. ɔ'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "cat"?', options: ['A. u', 'B. æ', 'C. l', 'D. ɒ'], correct: 'B' },
   { question: 'What is the IPA symbol for the sound in "goat"?', options: ['A. ɪ', 'B. ʌ', 'C. əʊ', 'D. ʒ'], correct: 'C' },
   { question: 'Which IPA symbol represents the sound in "boot"?', options: ['A. u', 'B. i', 'C. ɑ', 'D. ɔ'], correct: 'A' },
   { question: 'What is the IPA symbol for the sound in "thought"?', options: ['A. ɒ', 'B. ɔ', 'C. ə', 'D. ʊ'], correct: 'B' },
   { question: 'Which IPA symbol represents the sound in "strut"?', options: ['A. e', 'B. ʒ', 'C. ʌ', 'D. k'], correct: 'C' },
   { question: 'What is the IPA symbol for the sound in "pet"?', options: ['A. p', 'B. b', 'C. d', 'D. g'], correct: 'A' },
   { question: 'Which IPA symbol represents the voiceless dental fricative in "think"?', options: ['A. ʃ', 'B. θ', 'C. s', 'D. ð'], correct: 'A' },
   { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. ʒ', 'B. u', 'C. ɔ', 'D. ə'], correct: 'A' },
   { question: 'Which IPA symbol represents the sound in "foot"?', options: ['A. ʌ', 'B. ɒ', 'C. ʊ', 'D. e'], correct: 'C' },
   { question: 'What is the IPA symbol for the sound in "fleece"?', options: ['A. i', 'B. ɪ', 'C. ʒ', 'D. ɜ'], correct: 'A' },
   { question: 'Which IPA symbol represents the sound in "bath"?', options: ['A. ɑ', 'B. b', 'C. ɔ', 'D. ɒ'], correct: 'A' },
   { question: 'What is the IPA symbol for the sound in "happy"?', options: ['A. i', 'B. i', 'C. ə', 'D. l'], correct: 'B' },
   { question: 'Which IPA symbol represents the sound in "lot"?', options: ['A. ɒ', 'B. ɔ', 'C. ʒ', 'D. i'], correct: 'A' },
   { question: 'What is the IPA symbol for the sound in "goose"?', options: ['A. u', 'B. ʊ', 'C. ɒ', 'D. ʒ'], correct: 'A' },
   { question: 'Which IPA symbol represents the sound in "kit"?', options: ['A. ɪ', 'B. i', 'C. ʒ', 'D. e'], correct: 'A' },
   { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. ʒ', 'B. g', 'C. ʌ', 'D. ɑ'], correct: 'A' },
   { question: 'Which IPA symbol represents the sound in "strut"?', options: ['A. ʌ', 'B. æ', 'C. ɪ', 'D. i'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "price"?', options: ['A. aɪ', 'B. eɪ', 'C. ɔɪ', 'D. əʊ'], correct: 'A' },
   { question: 'Which IPA symbol represents the sound in "mouth"?', options: ['A. aʊ', 'B. aɪ', 'C. eɪ', 'D. ɔɪ'], correct: 'A' },
   { question: 'What is the IPA symbol for the sound in "choice"?', options: ['A. eɪ', 'B. ɔɪ', 'C. aɪ', 'D. aʊ'], correct: 'B' },
   { question: 'Which IPA symbol represents the sound in "near"?', options: ['A. ɪə', 'B. eə', 'C. ʊə', 'D. aɪ'], correct: 'A' },
   { question: 'What is the IPA symbol for the sound in "square"?', options: ['A. ʊə', 'B. ɪə', 'C. eə', 'D. aɪ'], correct: 'C' },
   { question: 'Which IPA symbol represents the sound in "cure"?', options: ['A. ɪə', 'B. ʊə', 'C. eə', 'D. ɔɪ'], correct: 'B' },
   { question: 'What is the IPA symbol for the sound in "face"?', options: ['A. eɪ', 'B. ɔɪ', 'C. aɪ', 'D. aʊ'], correct: 'A' },
   { question: 'Which IPA symbol represents the sound in "goat"?', options: ['A. eɪ', 'B. əʊ', 'C. aɪ', 'D. aʊ'], correct: 'B' },
   { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. ʒ', 'B. æ', 'C. ʌ', 'D. ɑ'], correct: 'A' },
   { question: 'Which IPA symbol represents the sound in "foot"?', options: ['A. ʌ', 'B. ɒ', 'C. ʊ', 'D. e'], correct: 'C' },
   { question: 'What is the IPA symbol for the sound in "fleece"?', options: ['A. i', 'B. ɪ', 'C. ʒ', 'D. p'], correct: 'A' },
   { question: 'Which IPA symbol represents the sound in "kit"?', options: ['A. ɪ', 'B. i', 'C. ʒ', 'D. e'], correct: 'A' },
];

 const soundFiles = {
 
     p: '../../../public/Sounds/p.mp3',
     b: '../../../public/Sounds/b.mp3',
     t: '../../../public/Sounds/t.mp3',
     d: '../../../public/Sounds/d.mp3',
     k: '../../../public/Sounds/k.mp3',
     g: '../../../public/Sounds/g.mp3',
    tʃ: '../../../public/Sounds/tʃ.mp3',
    dʒ: '../../../public/Sounds/dʒ.mp3',
    f: '../../../public/Sounds/f.mp3',
    v: '../../../public/Sounds/v.mp3',
    s: '../../../public/Sounds/s.mp3',
    z: '../../../public/Sounds/z.mp3',
    θ: '../../../public/Sounds/θ.mp3',
    ð: '../../../public/Sounds/ð.mp3',
    ʃ: '../../../public/Sounds/ʃ.mp3',
    h: '../../../public/Sounds/h.mp3',
   l: '../../../public/Sounds/l.mp3',
    r: '../../../public/Sounds/r.mp3',
     w: '../../../public/Sounds/w.mp3',
    j: '../../../public/Sounds/j.mp3',
    m: '../../../public/Sounds/m.mp3',
    n: '../../../public/Sounds/n.mp3',
    ŋ: '../../../public/Sounds/ŋ.mp3',
    ɪ: '../../../public/Sounds/ɪ.mp3',
    i: '../../../public/Sounds/i.mp3',
    e: '../../../public/Sounds/e.mp3',
     ɒ: '../../../public/Sounds/ɒ.mp3',
    ɑ: '../../../public/Sounds/ɑ.mp3',
    ɔ: '../../../public/Sounds/ɔ.mp3',
    ʊ: '../../../public/Sounds/ʊ.mp3',
    u: '../../../public/Sounds/u.mp3',
    ʌ: '../../../public/Sounds/ʌ.mp3',
     ʒ: '../../../public/Sounds/ʒ.mp3',
     ə: '../../../public/Sounds/ə.mp3',
     eɪ: '../../../public/Sounds/eɪ.mp3',
    əʊ: '../../../public/Sounds/əʊ.mp3',
     aɪ: '../../../public/Sounds/aɪ.mp3',
     ɔɪ: '../../../public/Sounds/ɔɪ.mp3',
     æ:  '../../../public/Sounds/æ.mp3',
    ɪə: '../../../public/Sounds/ɪə.mp3',
    eə: '../../../public/Sounds/eə.mp3',
    ʊə: '../../../public/Sounds/ʊə.mp3',
  };
  
 



  const Exercise = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [showDialog, setShowDialog] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
  
    const questionsPerPage = 15;
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  
    const handleAnswerChange = (index, answer) => {
      const newAnswers = [...answers];
      newAnswers[index + indexOfFirstQuestion] = answer;
      setAnswers(newAnswers);
    };
  
    const handleSubmit = () => {
      setShowDialog(true);
      setTimeout(() => {
        setShowDialog(false);
        navigate('/results', { state: { questions, answers } });
      }, 2000);
    };
  
    const speakText = (text, onEndCallback) => {
      if (!window.speechSynthesis) {
        console.error('Speech synthesis not supported');
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = onEndCallback;
      utterance.onerror = (e) => console.error('SpeechSynthesisUtterance error:', e);
      window.speechSynthesis.speak(utterance);
    };
  
    const playAudio = (symbol, onEndCallback) => {
      const audio = new Audio(soundFiles[symbol]);
      audio.onerror = (e) => console.error('Audio playback error:', e);
      audio.onended = onEndCallback;
      audio.play().catch(error => console.error('Audio playback error:', error));
    };
  
    const handleOptionClick = (symbol) => {
      if (symbol) {
        playAudio(symbol);
      }
    };
  
    const repeatQuestion = (question) => {
      speakText(question.question, () => {
        let optionIndex = 0;
        const playNextOption = () => {
          if (optionIndex < question.options.length) {
            const symbol = question.options[optionIndex].split(' ')[1];
            if (symbol) {
              playAudio(symbol, playNextOption); // Play the sound file for each option
            }
            optionIndex++;
          }
        };
        playNextOption();
      });
    };
  
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
  
    return (
      <div className="exercise-container">
        <h1>IPA Symbols Quiz</h1>
        {currentQuestions.map((q, index) => (
          <div key={index} className="question-container">
            <p>Question {index + 1 + indexOfFirstQuestion}: {q.question}</p>
            <ul>
              {q.options.map((option, i) => {
                const symbol = option.split(' ')[1];
                return (
                  <li key={i}>
                    <input
                      type="radio"
                      id={`${q}${index}opt${i}`}
                      name={`${q}${index}`}
                      value={option[0]}
                      checked={answers[index + indexOfFirstQuestion] === option[0]}
                      onChange={() => handleAnswerChange(index, option[0])}
                    />
                    <label
                      htmlFor={`${q}${index}opt${i}`}
                      onClick={() => handleOptionClick(symbol)}
                    >
                      {option}
                    </label>
                  </li>
                );
              })}
            </ul>
            <button onClick={() => repeatQuestion(q)}>Repeat</button>
          </div>
        ))}
        <div className="navigation-buttons">
          {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
          {currentPage < Math.ceil(questions.length / questionsPerPage) && <button onClick={nextPage}>Next</button>}
          {currentPage === Math.ceil(questions.length / questionsPerPage) && <button onClick={handleSubmit}>Submit</button>}
        </div>
        {showDialog && <div className="dialog">Submitting...</div>}
      </div>
    );
  };
  
  export default Exercise;