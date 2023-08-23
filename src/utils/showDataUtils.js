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

export function getShowRuntime(showData) {
    const unparsedRuntimeString = showData?.Runtime; // "xx..xxx min"
    const runtime = parseInt(unparsedRuntimeString.split(" ")[0]); // "xx..xxx min" -> "xx..xxx"
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    let formattedRuntimeString = "";
    if (hours === 1) formattedRuntimeString += `${hours} hour`;
    if (hours > 1) formattedRuntimeString += `${hours} hours`;
    if (minutes === 1) formattedRuntimeString += ` ${minutes} minute`;
    if (minutes > 1) formattedRuntimeString += ` ${minutes} minutes`;
  
    return formattedRuntimeString;
  }