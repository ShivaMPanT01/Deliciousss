import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import Styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
   return (
      <List>
         <SLink to={"/cuisine/italian"}>
            <FaPizzaSlice />
            <h3>Italian</h3>
         </SLink>
         <SLink to={"/cuisine/american"}>
            <FaHamburger />
            <h3>American</h3>
         </SLink>
         <SLink to={"/cuisine/thai"}>
            <GiNoodles />
            <h3>Thai</h3>
         </SLink>
         <SLink to={"/cuisine/japanese"}>
            <GiChopsticks />
            <h3>Japanese</h3>
         </SLink>
      </List>
   );
}

const List = Styled.div`
    display: flex;
    justify-content : center;
    margin-block : 2rem;
`;

const SLink = Styled(NavLink)`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   margin-right: 2rem;
   text-decoration: none;
   background: linear-gradient(35deg, #494949, #313131);
   width: 4rem;
   height: 4rem;
   cursor: pointer;

   h3{
      margin: 0;
      color: white;
      line-height: 1.5rem;
      font-size: 0.5rem;
   }

   svg{
      color: white;
      font-size: 1.5rem;
   }

   &.active,
   &:active,
   &:hover{
      background: linear-gradient(to right , #f27121, #e94057);

   }
`;

export default Categories;
