import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ExpensePage from "../components/expense/ExpensePage";
import IncomePage from "../components/income/IncomePage";
import NotFoundPage from "../components/NotFound/NotFoundPage";
import IncExpReport from "../components/IncExpReport/IncExpReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ExpensePage />,
      },
      {
        path: "/expense",
        element: <ExpensePage />,
      },
      {
        path: "/income",
        element: <IncomePage />,
      },
      {
        path: "/report",
        element: <IncExpReport />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
