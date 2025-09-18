import { useState } from "react";
import LikeButton from "./LikeButton";
import ReviewButtonComponent from "./ReviewButtonComponent";
import ReviewComponent from "./ReviewComponent";

export default function GameInteractiveComponent() {
  return (
    <>
      <div className="flex gap-2">
        <LikeButton />
        <ReviewButtonComponent />
      </div>
      <ReviewComponent />
    </>
  );
}
