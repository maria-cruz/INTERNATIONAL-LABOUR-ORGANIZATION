const parseMediaEmbed = (oembed?: string) => {
  let parsedOEmbed: { url: string };
  try {
    if (typeof oembed !== "string") return { url: "" };
    parsedOEmbed = JSON.parse(oembed);
  } catch (e) {
    return { url: "" };
  }
  return parsedOEmbed;
};

export default parseMediaEmbed;
