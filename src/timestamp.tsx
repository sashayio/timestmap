import { useState, useEffect } from 'preact/hooks';

interface TimeSinceTimestampProps {
  timestamp: number;
}

const TimeSinceTimestamp: preact.FunctionComponent<TimeSinceTimestampProps> = ({ timestamp }) => {
  const [currentTime, setCurrentTime] = useState<number>(Math.floor(Date.now() / 1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const secondsSinceTimestamp = currentTime - timestamp;
  const minutesSinceTimestamp = Math.floor(secondsSinceTimestamp / 60);
  const hoursSinceTimestamp = Math.floor(minutesSinceTimestamp / 60);
  const daysSinceTimestamp = Math.floor(hoursSinceTimestamp / 24);
  const weeksSinceTimestamp = Math.floor(daysSinceTimestamp / 7);
  const monthsSinceTimestamp = Math.floor(daysSinceTimestamp / 30); // Простое предположение: 30 дней в месяце

  return (
    <div>
      <p>Seconds since timestamp: {secondsSinceTimestamp}</p>
      <p>Minutes since timestamp: {minutesSinceTimestamp}</p>
      <p>Hours since timestamp: {hoursSinceTimestamp}</p>
      <p>Days since timestamp: {daysSinceTimestamp}</p>
      <p>Weeks since timestamp: {weeksSinceTimestamp}</p>
      <p>Months since timestamp: {monthsSinceTimestamp}</p>
    </div>
  );
};

export default TimeSinceTimestamp;
