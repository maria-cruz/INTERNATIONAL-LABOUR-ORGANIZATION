import React from "react";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import getEmbedUrl from "better-video-embeds";

interface TopicProps {
  // description: string;
  // id: number;
  // media_embed?: string;
  title: string;
}

// const getMediaEmbed = (oembed?: string) => {
//   let parsedOEmbed: { url: string };
//   try {
//     if (typeof oembed !== "string") return { url: "" };
//     parsedOEmbed = JSON.parse(oembed);
//   } catch (e) {
//     return { url: "" };
//   }
//   return parsedOEmbed;
// };

const Topic = ({ title }: TopicProps) => {
  // const oembed = media_embed || "";
  // const mediaEmbed = getMediaEmbed(media_embed);
  // const embedUrl = getEmbedUrl(mediaEmbed?.url);

  // console.log(embedUrl);

  // console.log();
  return (
    <div className="session-panel-item">
      <div className="icon">
        <CheckCircleOutline />
      </div>
      <div className="text">{`${title}`}</div>
    </div>
  );
};

export default Topic;
