import { useMoodStore, type Mood } from '../store/moodStore'

export const MoodControls = () => {
  const setMood = useMoodStore((state) => state.setMood);

  const moods: Mood[] = ['calm', 'excited', 'dark'];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {moods.map((m) => (
        <button key={m} onClick={() => setMood(m)}>
          {m.charAt(0).toUpperCase() + m.slice(1)}
        </button>
      ))}
    </div>
  );
};