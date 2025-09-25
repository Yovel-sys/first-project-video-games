export default function TopBar({ likeCount }) {
  return (
    <div className="fixed h-10 w-full bg-gray-700 text-white text-2xl">
      <div className="flex mr-4.5 items-end justify-end">{likeCount}♥︎</div>
    </div>
  );
}
