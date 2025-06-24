import { useEffect, useState, useRef } from "react";

export default function useTimer(initialTime = 0) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const savedTime = useRef(initialTime);  // use Ref is used for set the intialTime to reset

  const start = (newTime) => {
    const validTime = parseInt(newTime || savedTime.current);
    if (!isNaN(validTime) && validTime > 0) {
      setTime(validTime);
      savedTime.current = validTime;
      setIsRunning(true);
    }
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(savedTime.current);
  };

  useEffect(() => {
    let id;
    if (isRunning && time > 0) {
      id = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(id);
  }, [isRunning, time]);

  return { time, isRunning, start, pause, reset };
}
