import { MyEmojis } from "./components/myEmojis";
import HomePage from "./pages/HomePage";
import ExamplePage from "./pages/ExamplePage";
import ItemPage from "./pages/ItemPage";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import Page404 from "./pages/404Page";
import MyLibrary from "./pages/MyLibrary";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="fixed top-0 w-full z-10 text-white text-xl bg-gray-900 opacity-80">
          <Link className="m-4" to={"/"}>
            Home Page
          </Link>
          |
          <Link className="m-4" to={"/library"}>
            My Library
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<MyLibrary />} />

          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/emojis" element={<MyEmojis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
