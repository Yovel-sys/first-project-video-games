export default function Header({ mainHeader, seconderyHeader, image }) {
  return (
    <div
      id="header"
      className="flex flex-col items-center justify-center text-center mt-10 bg-gray-300"
    >
      <img className="w-full object-cover object-center" src={image} alt="" />
      <h1>{mainHeader}</h1>
      <h2>{seconderyHeader}</h2>
    </div>
  );
}
