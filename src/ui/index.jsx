import Styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Wrapper = Styled.div`
margin: 4rem 0 ;
`;

export const Card = Styled.div`
min-height : 12rem;
border-radius: 2rem;
overflow: hidden;
position : relative;

   img{
      border-radius: 2rem;
      position: absolute;
      left: 0;
      object-fit: contain;
   }

   p{
      position: absolute;
      z-index: 10;
      bottom: 0;
      text-align: center;
      width: 100%;
      color: white;
      font-size: 0.8rem;
      font-weight: 400;
      height: 20%;

   }
`;

export const Gradient = Styled.div`
   position: absolute;
   z-index: 3;
   width: 100%;
   height: 100%;
   background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export const Grid = Styled(motion.div)`
   display: grid;
   grid-template-columns : repeat(auto-fit, minmax(12rem, 1fr));
   grid-gap: 2rem;
`;

export const FormStyle = Styled.form`
   margin-inline: auto;
  
   div{
       position: relative;
       width: 100%;

   }

   input {
      border: none;
      outline: none;
      background : linear-gradient(35deg, #494949, #313131);
      border-radius: 25px;
      font-size: 1rem;
      color: white;
      font-weight: 300;
      padding: 0.8rem 3rem;
      width: 100%;
   }

   svg{
      color: white;
      position: absolute;
      top: 35%;
      left: 2%;
      font-size: 1rem;
   }

`;

export const DetailWrapper = Styled.div`
   display : flex;
   margin: 5rem 0 5rem 0;

   .active{
       background : linear-gradient(35deg, #494949, #313131);
       color: white;
   }

   h2{
      margin-bottom: 2rem;
   }

   h3{
      font-size : 1rem ;
      line-height: 2;
      font-weight : 400;
   }

   li{
      font-size: 1rem;
      line-height: 2rem;
   }

   ul{
      margin-top: 2rem;
      list-style : number;
   }
`;

export const Button = Styled.button`
   padding: 1rem 2rem;
   color: #313131;
   border: 2px solid black ;
   margin-block: 1rem;
   margin-right : 1.5rem;
   font-weight: 500;
   cursor : pointer;
`;

export const Info = Styled.div`
   margin-left: 3rem;
`;

export const Logo = Styled(Link)`
text-decoration : none;
font-size : 1.5rem;
font-weight: 500;
font-family: 'Lobster', cursive;
`;

export const Nav = Styled.nav`
   padding-block: 2.5rem;
   display: flex;
   justify-content: flex-start;
   align-items: center;

   svg{
      font-size: 2rem;
   }
`;
