import './app.css'
import TimeSinceTimestamp from './timestamp'

const timestamp = 1770595200;

export function App() {
  return (
    <>
      <h1>Timestamp {timestamp}</h1>
      <h2>first commit: 1 year, 7 m, 21d, ago (June 7, 2024 at 11:23 AM)</h2>
      <h2>think about it</h2>
      <TimeSinceTimestamp timestamp={timestamp} />
    </>
  )
}
