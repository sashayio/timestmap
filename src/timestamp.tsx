import { useState, useEffect } from 'preact/hooks';

interface TimeSinceTimestampProps {
  timestamp: number;
}

const TimeSinceTimestamp: preact.FunctionComponent<TimeSinceTimestampProps> = ({ timestamp }) => {
  const [currentTime, setCurrentTime] = useState(Math.floor(Date.now() / 1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const secondsSinceTimestamp = currentTime - timestamp;

  return (
    <div>
      <p>Seconds since timestamp: {secondsSinceTimestamp}</p>
    </div>
  );
};

export default TimeSinceTimestamp;
