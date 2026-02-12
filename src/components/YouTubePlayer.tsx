import YouTube, { type YouTubeProps } from "react-youtube";

export const YoutubePlayer = () => {
    //TODO:URL
    const videoId = '';

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
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