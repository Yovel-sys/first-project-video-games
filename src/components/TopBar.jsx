export default function TopBar({ likeCount }) {
  return (
    <div className="h-10 w-full bg-black text-white text-2xl opacity-100">
      <div className="fixed ml-61 text-white">{likeCount}♥︎</div>
    </div>
  );
}
