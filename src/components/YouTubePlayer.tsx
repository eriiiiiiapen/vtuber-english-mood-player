import YouTube, { type YouTubeProps } from "react-youtube";
import { useVideoStore } from "../store/videoStore";
import { useLearningStore } from "../store/learningStore";

export const YoutubePlayer = () => {
    const videoId = useVideoStore((state) => state.videoId);
    const setPlayer = useVideoStore((state) => state.setPlayer);
    const level = useLearningStore((state) => state.level);

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        setPlayer(event.target);
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            cc_load_policy: 0, 
        },
    };

    const getOpacity = () => {
        if (level === 2) return 0.3; // 英語薄め
        if (level === 3) return 0;   // 字幕なし
        return 1;                    // 普通
    };

    return (
        <>
            <div style={{ position: 'relative', width: '640px', height: '390px' }}>
                <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white">
                    <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
                </div>

                <div style={{
                    position: 'absolute', bottom: '10%', left: 0, right: 0, textAlign: 'center',
                    pointerEvents: 'none', color: 'white', fontSize: '24px', fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    opacity: getOpacity(),
                }}>
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '4px 12px' }}>
                        <div style={{ fontSize: '20px' }}>This is English Caption</div>
                        {level === 0 && <div style={{ fontSize: '16px', color: '#ccc' }}>日本語字幕</div>}
                    </div>
                </div>
            </div>
        </>
    )
}