import { useState } from "react";

export default function LikeButton() {
  const [isliked, setIsLiked] = useState(false);
  function handleLike() {
    setIsLiked((like) => !like);
  }
  return <button onClick={handleLike}>{isliked ? "❤️" : "♡"}</button>;
}
