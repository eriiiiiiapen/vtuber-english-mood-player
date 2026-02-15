import { useState } from "react";
import { useVideoStore } from "../store/videoStore";

export const VideoInput = () => {
    const [url, setUrl] = useState<string>('');
    const setVideoId = useVideoStore((state) => state.setVideoId);

    const handleApply = () => {
        try {
            const parsedUrl = new URL(url);
            const id = parsedUrl.searchParams.get('v');

            if(id) {
                setVideoId(id);
                setUrl('');
            } else {
                alert('有効なYouTubeのURLを入力してください');
            }
        } catch (e) {
            if (url.length === 11) {
                setVideoId(url);
                setUrl('');
            } else {
                alert('正しいURLまたは動画IDを入力してください');
            }
        }
    }

    return (
    <div style={{ margin: '20px 0', display: 'flex', gap: '8px' }}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="YouTube URL or ID"
        style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button onClick={handleApply} style={{ padding: '8px 16px' }}>
        Load Video
      </button>
    </div>
  );
}