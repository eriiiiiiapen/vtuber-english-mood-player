import './App.css'
import { MoodControls } from './components/MoodControls';
import { MoodDisplay } from './components/MoodDisplay';
import { useMoodStore } from './store/moodStore'

function App() {
  const mood = useMoodStore((state) => state.mood);

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
        <MoodDisplay />
        <MoodControls />
      </div>
    </>
  )
}

export default App
