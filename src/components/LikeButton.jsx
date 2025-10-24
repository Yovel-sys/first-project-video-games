export default function LikeButton({ isLiked, onLike }) {
  return (
    <>
      <div className="flex gap-2 mt-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLike();
          }}
        >
          {isLiked ? "❤️" : "♡"}
        </button>
      </div>
    </>
  );
}
