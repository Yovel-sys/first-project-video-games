import "./app.css";
import GameComponent from "./components/GameComponent";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <div className="h-24 w-15 bg-red-500">library?</div>
      <GameComponent />
    </>
  );
}
