import {
  Outlet
} from "react-router-dom";
import Menu from "./Menu";

export default function MainTemplate() {
  return (
    <div>
      <header>
        <Menu/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}