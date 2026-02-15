import { useMoodStore } from '../store/moodStore'

export const MoodDisplay = () => {
  const mood = useMoodStore((state) => state.mood);

  return (
    <>
      <h3 style={{ fontWeight: '600' }}>VTuber Mood Player</h3>
      <p>Current Mood: {mood}</p>
    </>
  );
};