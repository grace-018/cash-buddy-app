import { Outlet } from "react-router-dom";
import HeaderPage from "../components/header/HeaderPage";
import NavBar from "../components/navigation/NavBar";

function MainLayout() {
  return (
    <>
      <header>
        <HeaderPage />
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
