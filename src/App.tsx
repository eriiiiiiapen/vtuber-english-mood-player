import './App.css'
import { useMoodStore } from './store/moodStore'

function App() {
  const { mood, setMood } = useMoodStore();

  const backgroundColor = {
    calm: "#f5f5f5",
    excited: "#ffe066",
    dark: "#1e1e1e",
  }[mood];

  const textColor = mood === "dark" ? "#fff" : "#000";

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor,
          color: textColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          transition: "all 0.3s ease",
        }}
      >
        <h1 style={{ padding: "10px" }}>VTuber Mood Player</h1>
        <p>CurrentMood: {mood}</p>

        <div>
          <button onClick={() => setMood('calm')}>Calm</button>
          <button onClick={() => setMood('excited')}>Excited</button>
          <button onClick={() => setMood('dark')}>Dark</button>
        </div>
      </div>
    </>
  )
}

export default App
