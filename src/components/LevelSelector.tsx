import { useLearningStore, type LearningLevel } from "../store/learningStore";

export const LevelSelector = () => {
    const level = useLearningStore((state) => state.level);
    const setLevel = useLearningStore((state) => state.setLevel);

    const labels = ["1回目:日英", "2回目:日なし", "3回目:英薄め", "4回目:なし"];

    return (
        <div style={{ margin: '20px', display: 'flex', gap: '5px' }}>
            {labels.map((label, index) => (
                <button
                    key={index}
                    onClick={() => setLevel(index as LearningLevel)}
                    style={{
                        padding: '8px',
                        backgroundColor: level === index ? '#4CAF50' : '#eee',
                        color: level === index ? 'white' : 'black'
                    }}
                >
                    { label }
                </button>
            ))}
        </div>
    )
}