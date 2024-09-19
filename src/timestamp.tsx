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
  const monthsSinceTimestamp = Math.floor(daysSinceTimestamp / 30); // Simple assumption: 30 days in a month
  const titleDate = new Date(timestamp * 1000);

  const formattedDate = titleDate.toLocaleDateString('ru-RU'); // Форматирует дату как 19.09.2024
  const formattedTime = titleDate.toLocaleTimeString('ru-RU'); // Форматирует время как 09:17:47

  const titleDateString = `${formattedDate}, ${formattedTime}`;

  return (
    <div>
      <h2 style={{color: 'gold'}}>{titleDateString}</h2>
      <p style={{ color: 'red' }}>⏳ Seconds since timestamp: {secondsSinceTimestamp}</p>
      <p style={{ color: 'orange' }}>🕒 Minutes since timestamp: {minutesSinceTimestamp}</p>
      <p style={{ color: 'yellow' }}>🕐 Hours since timestamp: {hoursSinceTimestamp}</p>
      <p style={{ color: 'green' }}>📅 Days since timestamp: {daysSinceTimestamp}</p>
      <p style={{ color: 'blue' }}>📆 Weeks since timestamp: {weeksSinceTimestamp}</p>
      <p style={{ color: 'purple' }}>🗓️ Months since timestamp: {monthsSinceTimestamp}</p>
    </div>
  );
};

export default TimeSinceTimestamp;