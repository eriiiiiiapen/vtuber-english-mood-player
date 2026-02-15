import YouTube, { type YouTubeProps } from "react-youtube";
import { useVideoStore } from "../store/videoStore";

export const YoutubePlayer = () => {
    //TODO:URL
    const videoId = '';
    const setPlayer = useVideoStore((state) => state.setPlayer);

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        setPlayer(event.target);
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white">
            <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
        </div>
    )
}