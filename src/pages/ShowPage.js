import React from "react";
import Layout from "../components/Layout/Layout";
import { useShowDataContext } from "../utils/ShowContext";
import {
  Typography,
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { getShowData, getShowRuntime } from "../utils/showDataUtils";

const EpisodeCard = ( {episodeNum} ) => {
  const { currentShow, lessInfoShowJson } = useShowDataContext();
  const { isMovie, showTitle, showPoster } = getShowData(
    currentShow || lessInfoShowJson
  );

  const description = isMovie ? getShowRuntime(currentShow) : `Episode ${episodeNum}`;

  return (
    <>
      <Card
        sx={{
          width: "min(30%, 250px)",
          flexShrink: "0",
          marginBottom: "min(1%, 20px)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={showPoster}
            alt={showTitle}
            sx={{
              height: "min(200px,15vh)",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              textAlign="center"
              variant="h5"
              component="div"
            >
              {showTitle}
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              color="text.secondary"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                "-webkit-line-clamp": "3",
                "-webkit-box-orient": "vertical",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

const SeriesCards = () => {
    // render a card for each episode using a for loop
    const numberOfEpisodes = 10;
    const episodeCards = [];
    for (let i = 1; i <= numberOfEpisodes; i++) {
        episodeCards.push(<EpisodeCard episodeNum={i} />);
    }
    return (
        <>
            {episodeCards}
        </>
    )
};

export default function ShowPage() {
  const { currentShow, lessInfoShowJson } = useShowDataContext();
  const { isMovie, showTitle, showPoster } = getShowData(
    currentShow || lessInfoShowJson
  );

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          height: "100%",
          gap: "min(1%, 20px)",
          padding: "min(1%, 20px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
            height: "50%",
          }}
        >
          <img
            src={showPoster}
            alt={showTitle}
            style={{
              width: "min(30%, 300px)",
              minHeight: "min(45vh, 450px)",
              margin: "1em",
              borderRadius: "1.5em",
              boxShadow: `12px 12px 1em 0px #303030`,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              height: "100%",
              flexGrow: "1",
            }}
          >
            <Typography textAlign="center" variant="h1">
              {showTitle}
            </Typography>
            <Typography
              textAlign="center"
              variant="h4"
              sx={{
                width: "80%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                "-webkit-line-clamp": "3",
                "-webkit-box-orient": "vertical",
              }}
            >
              {currentShow
                ? currentShow.Plot
                : lessInfoShowJson
                ? lessInfoShowJson.Plot
                : null}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            flexGrow: "1",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              padding: "min(5%, 50px) 0 min(4%, 30px) 0", // the formatting for 4 is top, right, bottom, left
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxHeight: "50vh",
            }}
            elevation={2}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: isMovie ? "center" : "flex-start",
                padding: "0 min(3%, 50px)",
                width: "100%",
                gap: "min(3%, 50px)",

                overflowX: "scroll",
                overflowY: "hidden",
                "&::-webkit-scrollbar": {
                  height: "0.8em",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0, 0, 0, 0.30)",
                  borderRadius: "1em",
                },
              }}
            >
              {isMovie ? (
                <EpisodeCard />
              ) : (
                <>
                  <SeriesCards />
                </>
              )}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
}
