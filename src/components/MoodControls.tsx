import { useMoodStore, type Mood } from '../store/moodStore'
import { useVideoStore } from '../store/videoStore'

export const MoodControls = () => {
  const { mood, setMood } = useMoodStore();
  const addMoment = useVideoStore((state) => state.addMoment);
  const moments = useVideoStore((state) => state.moments);
  const clearMoments = useVideoStore((state) => state.clearMoments);

  const moods: Mood[] = ['calm', 'excited', 'dark'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        {moods.map((m) => (
          <button 
            key={m} 
            onClick={() => setMood(m)}
            style={{ border: mood === m ? '2px solid blue' : '1px solid gray' }}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      <button 
        onClick={() => addMoment(mood)}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#ff4081', 
          color: 'white', 
          fontWeight: 'bold',
          borderRadius: '50px' 
        }}
      >
        CLIP IT! (Laughed)
      </button>
      <br />

      {moments.length > 0 &&
      <div style={{ textAlign: 'left', width: '100%', marginBottom: '100px' }}>
        <h3>Laugh Logs</h3>
        <ul>
          {moments.map((m) => (
            <li key={m.id}>
              {m.timestamp}s - <span style={{fontSize: '0.8rem'}}>[{m.mood}]</span>
            </li>
          ))}
        </ul>
        {moments.length > 0 && <button onClick={clearMoments}>Clear All</button>}
      </div>}
    </div>
  );
};