import { MyEmojis } from "./components/myEmojis";
import HomePage from "./pages/HomePage";
import ExamplePage from "./pages/ExamplePage";
import ItemPage from "./pages/ItemPage";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import Page404 from "./pages/404Page";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to={"/"}> Home Page </Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/example" element={<ExamplePage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/emojis" element={<MyEmojis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
