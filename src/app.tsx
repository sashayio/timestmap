import './app.css'
import TimeSinceTimestamp from './timestamp'

const timestamp = 1744714500;

export function App() {
  return (
    <>
      <h1 style={{color: 'gold'}}>Пожалуйста</h1>
      <h1>Timestamp {timestamp}</h1>
      <TimeSinceTimestamp timestamp={timestamp} />
    </>
  )
}
