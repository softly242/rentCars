import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
/* import { Home } from 'pages/Home';
import { Catalog } from 'pages/Catalog';
import { Favorites } from 'pages/Favorites'; */
import { SharedLayout } from './ SharedLayout /SharedLayout';
/* import CarList from "../pages/CarList"; */
/* import NotFound from 'pages/NotFound'; */

const CarList= lazy(() => import('../pages/CarList'));
const Home = lazy(() => import("../pages/Home"));
const Favorites = lazy(() => import("../pages/Favorites"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/carlist" element={<CarList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
