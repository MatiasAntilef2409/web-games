import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Loading } from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const GameInfo = lazy(() => import("./pages/GameInfo/GameInfo"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/game-info" element={<GameInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <nav className="nav_page">
        <Link to={"/"}>
          <h3>Home</h3>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
