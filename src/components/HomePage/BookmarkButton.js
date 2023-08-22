import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event propagation
    e.nativeEvent.stopImmediatePropagation(); // Prevent event propagation
    setIsBookmarked(!isBookmarked);
  };

  return (
    <>
      {isBookmarked ? (
        <BookmarkIcon
          onClick={handleBookmarkClick}
          sx={{
            color: "primary.main",
            cursor: "pointer",
            position: "absolute",
            top: "min(2%, 20px)",
            right: "min(2%, 20px)",
            zIndex: "1", // To make sure the icon is on top of the card
          }}
        />
      ) : (
        <BookmarkBorderIcon
          onClick={handleBookmarkClick}
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "min(2%, 20px)",
            right: "min(2%, 20px)",
            zIndex: "1", // To make sure the icon is on top of the card
          }}
        />
      )}
    </>
  );
}
