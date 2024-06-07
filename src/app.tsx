import './app.css'
import TimeSinceTimestamp from './timestamp'

const timestamp = 1717189200;

export function App() {
  return (
    <>
      <h1>Timestamp</h1>
      <TimeSinceTimestamp timestamp={timestamp} />,
    </>
  )
}
