import Categories from "./components/Categories";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";

import { Nav, Logo } from "./ui/index";

function App() {
   return (
      <div className="app">
         <BrowserRouter>
            <Nav>
               <GiKnifeFork />
               <Logo to={"/"}>deliciousss</Logo>
            </Nav>
            <Search />
            <Categories />
            <Pages />
         </BrowserRouter>
      </div>
   );
}

export default App;
