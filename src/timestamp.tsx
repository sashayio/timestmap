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

  const cashEarned = hoursSinceTimestamp * 150;

  // Static calculation for time since 1717750800 to 13.06.2024 13:00 UTC
  const targetTime = 1718276400; // Unix timestamp for 13.06.2024 13:00 UTC
  const staticSecondsSinceTimestamp = targetTime - timestamp;
  const staticMinutesSinceTimestamp = Math.floor(staticSecondsSinceTimestamp / 60);
  const staticHoursSinceTimestamp = Math.floor(staticMinutesSinceTimestamp / 60);
  const staticDaysSinceTimestamp = Math.floor(staticHoursSinceTimestamp / 24);
  const staticWeeksSinceTimestamp = Math.floor(staticDaysSinceTimestamp / 7);
  const staticMonthsSinceTimestamp = Math.floor(staticDaysSinceTimestamp / 30); // Simple assumption: 30 days in a month

  const staticCashEarned = staticHoursSinceTimestamp * 150;

  return (
    <div>
      <h2>Dynamic Calculation (Current Time)</h2>
      <p style={{ color: 'red' }}>⏳ Seconds since timestamp: {secondsSinceTimestamp}</p>
      <p style={{ color: 'orange' }}>🕒 Minutes since timestamp: {minutesSinceTimestamp}</p>
      <p style={{ color: 'yellow' }}>🕐 Hours since timestamp: {hoursSinceTimestamp}</p>
      <p style={{ color: 'green' }}>📅 Days since timestamp: {daysSinceTimestamp}</p>
      <p style={{ color: 'blue' }}>📆 Weeks since timestamp: {weeksSinceTimestamp}</p>
      <p style={{ color: 'purple' }}>🗓️ Months since timestamp: {monthsSinceTimestamp}</p>
      <p style={{ color: 'gold', fontWeight: 'bold' }}>💰: {cashEarned} ₽</p>

      <h2>Static Calculation (Until 13.06.2024 13:00 UTC)</h2>
      <p style={{ color: 'red' }}>⏳ Seconds since timestamp: {staticSecondsSinceTimestamp}</p>
      <p style={{ color: 'orange' }}>🕒 Minutes since timestamp: {staticMinutesSinceTimestamp}</p>
      <p style={{ color: 'yellow' }}>🕐 Hours since timestamp: {staticHoursSinceTimestamp}</p>
      <p style={{ color: 'green' }}>📅 Days since timestamp: {staticDaysSinceTimestamp}</p>
      <p style={{ color: 'blue' }}>📆 Weeks since timestamp: {staticWeeksSinceTimestamp}</p>
      <p style={{ color: 'purple' }}>🗓️ Months since timestamp: {staticMonthsSinceTimestamp}</p>
      <p style={{ color: 'gold', fontWeight: 'bold' }}>💰: {staticCashEarned} ₽</p>
    </div>
  );
};

export default TimeSinceTimestamp;