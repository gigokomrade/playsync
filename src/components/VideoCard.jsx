import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, useMediaQuery } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)"); // Adjust the max-width as needed
  const cardWidth = isSmallScreen ? "100%" : "auto";

  const cardStyle = {
    margin: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: cardWidth,
    overflow: "hidden", // Prevent horizontal scrolling
  };

  const contentStyle = {
    backgroundColor: "#161e16",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    overflow: "hidden", // Prevent horizontal scrolling
  };

  return (
    <Card sx={cardStyle}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: "100%", paddingTop: "56.25%" }}
        />
      </Link>

      <CardContent sx={contentStyle}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#2ecc71"
            sx={{ fontSize: { xs: 16, md: 18 } }}
          >
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {snippet?.channelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 18, color: "white", ml: "10px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
