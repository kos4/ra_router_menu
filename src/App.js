import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainTemplate from "./components/MainTemplate";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";

export default function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <MainTemplate/>,
    children: [
      {
        path: '/',
        exact: true,
        element: <HomePage/>,
      },
      {
        path: '/drift',
        element: <DriftPage/>
      },
      {
        path: '/timeattack',
        element: <TimeAttackPage/>,
      },
      {
        path: '/forza',
        element: <ForzaPage/>
      },
    ]
  }]);

  return (
    <RouterProvider router={router} />
  );
}