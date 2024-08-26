import  { useState } from 'react';
import PhoneticButton from './PhoneticButton';

const PhoneticChart = () => {
  const [displayContent, setDisplayContent] = useState({
    example: '',
    sound: '',
    braille: '',
    description: ''
  });

  const handleButtonClick = (type) => {
    const content = {
      example: 'Example: Apple',
      sound: 'Sound: /æ/',
      braille: 'Braille: ⠁⠏⠏⠇⠑',
      description: 'Description: The sound is a front open-mid vowel.'
    };
    setDisplayContent((prevContent) => ({
      ...prevContent,
      [type]: content[type]
    }));
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center space-x-4 mb-8">
        {['example', 'sound', 'braille', 'description'].map((type) => (
          <PhoneticButton
            key={type}
            label={type.charAt(0).toUpperCase() + type.slice(1)}
            onClick={() => handleButtonClick(type)}
          />
        ))}
      </div>
      <div className="space-y-4">
        {Object.entries(displayContent).map(([key, value]) => (
          <div key={key} className="border p-4 rounded bg-gray-100 text-center text-lg">
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneticChart;
