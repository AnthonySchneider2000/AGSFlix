export function getShowData(showData) {
  const isMovie = showData?.Type === "movie";
  const showTitle = showData ? showData.Title : "Placeholder Title";
  const showPoster = showData ? showData.Poster : null;
  const showPlot = showData ? showData.Plot : null;

  return {
    isMovie,
    showTitle,
    showPoster,
    showPlot,
  };
}
