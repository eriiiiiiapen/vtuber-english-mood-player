import './App.css'
import { MoodControls } from './components/MoodControls';
import { MoodDisplay } from './components/MoodDisplay';
import { VideoInput } from './components/VideoInput';
import { YoutubePlayer } from './components/YouTubePlayer';
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
        <VideoInput />
        <YoutubePlayer />
        <MoodDisplay />
        <MoodControls />
      </div>
    </>
  )
}

export default App
