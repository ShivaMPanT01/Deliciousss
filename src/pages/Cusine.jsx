import { useEffect, useState } from "react";
import Styled from "styled-components";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Grid } from "../ui";

function Cusine() {
   const [cusinie, setCuisine] = useState([]);
   const params = useParams();

   const cusinieType = params.type;

   const getCuisine = async (name) => {
      const response = await fetch(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );

      const reciepes = await response.json();
      console.log(reciepes);
      setCuisine(reciepes.results);
   };

   useEffect(() => {
      getCuisine(cusinieType);
   }, [cusinieType]);

   return (
      <Grid
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >
         {cusinie.map((item) => {
            return (
               <Card key={item.id}>
                  <Link to={"/recipe/" + item.id}>
                     <img src={item.image} alt={item.title} />
                     <h4>{item.title}</h4>
                  </Link>
               </Card>
            );
         })}
      </Grid>
   );
}

const Card = Styled.div`
 img{
      width: 100%;
      border-radius: 2rem;
   }

   h4{
      text-align: center;
      padding: 1rem;
   }
`;
export default Cusine;
