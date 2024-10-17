import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "#F5EFFF",
});

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const audioRef = React.useRef(null);
  const duration = 240 + 48;
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(true);
  const [volume, setVolume] = React.useState(30);

  const handlePlayPause = () => {
    if (paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPaused(!paused);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue / 100;
  };

  const handleTimeUpdate = () => {
    setPosition(audioRef.current.currentTime);
  };

  const handleSliderChange = (event, newValue) => {
    audioRef.current.currentTime = newValue;
    setPosition(newValue);
  };

  const formatDuration = (value) => {
    const roundedValue = Math.floor(value); 
    const minute = Math.floor(roundedValue / 60);
    const secondLeft = roundedValue - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative", p: 3 }}>
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src="/static/music/IMG_66C92896CA6C-1.jpeg"
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              WWJ
            </Typography>
            <Typography noWrap>
              <b>คำอวยพร</b>
            </Typography>
          </Box>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={handleSliderChange}
          sx={{
            color: "rgba(0,0,0,0.87)",
            height: 4,
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        >
          <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={handlePlayPause}
          >
            {paused ? (
              <PlayArrowRounded sx={{ fontSize: "3rem" }} />
            ) : (
              <PauseRounded sx={{ fontSize: "3rem" }} />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" />
          </IconButton>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            mb: 1,
            px: 1,
          }}
          alignItems="center"
        >
          <VolumeDownRounded />
          <Slider
            aria-label="Volume"
            value={volume}
            onChange={handleVolumeChange}
            sx={{
              color: "rgba(0,0,0,0.87)",
            }}
          />
          <VolumeUpRounded />
        </Stack>
      </Widget>
      <WallPaper />
      <audio
        ref={audioRef}
        src="/static/music/bd.mp3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setPosition(0)}
      />
    </Box>
  );
}
