import { h } from 'preact';
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

  const cashEarned = hoursSinceTimestamp * 150;

  return (
    <div>
      <p style={{ color: 'red' }}>⏳ Seconds since timestamp: {secondsSinceTimestamp}</p>
      <p style={{ color: 'orange' }}>🕒 Minutes since timestamp: {minutesSinceTimestamp}</p>
      <p style={{ color: 'yellow' }}>🕐 Hours since timestamp: {hoursSinceTimestamp}</p>
      <p style={{ color: 'green' }}>📅 Days since timestamp: {daysSinceTimestamp}</p>
      <p style={{ color: 'blue' }}>📆 Weeks since timestamp: {weeksSinceTimestamp}</p>
      <p style={{ color: 'purple' }}>🗓️ Months since timestamp: {monthsSinceTimestamp}</p>
      <p style={{ color: 'gold', fontWeight: 'bold' }}>💰: {cashEarned} ₽</p>
    </div>
  );
};

export default TimeSinceTimestamp;