import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 100, startDelay = 500) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (isStarted && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, isStarted]);

  useEffect(() => {
    setDisplayText('');
    setIndex(0);
    setIsStarted(false);
  }, [text]);

  return displayText;
};

export default useTypewriter;