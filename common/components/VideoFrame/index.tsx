import React from "react";
import getEmbedUrl from "better-video-embeds";

interface VideoFrameProps {
  url?: string;
}

const VideoFrame = ({ url }: VideoFrameProps) => {
  const isVideoURLMissing = !url;
  if (isVideoURLMissing) return <div />;
  const embedLink = getEmbedUrl(url);

  return (
    <div className={"video-container"}>
      <iframe src={embedLink} frameBorder="0">
        Browser not compatible.
      </iframe>
    </div>
  );
};

export default VideoFrame;
