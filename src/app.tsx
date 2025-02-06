import './app.css'
import TimeSinceTimestamp from './timestamp'

const timestamp = 1738879200;

export function App() {
  return (
    <>
      <h1>Timestamp {timestamp}</h1>
      <TimeSinceTimestamp timestamp={timestamp} />
    </>
  )
}
