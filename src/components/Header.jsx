export default function Header({ mainHeader, seconderyHeader }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 bg-gray-300 opacity-70">
      <h1>{mainHeader}</h1>
      <h2>{seconderyHeader}</h2>
    </div>
  );
}
