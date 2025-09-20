export default function ReviewButton({ isReviewing, ...props }) {
  return (
    <div>
      <button {...props}>{isReviewing ? "Save Review" : "Add a Review"}</button>
    </div>
  );
}
