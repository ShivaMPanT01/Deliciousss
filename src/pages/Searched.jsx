import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid } from "../ui";
import Styled from "styled-components";

function Searched() {
   const [searchedRecipe, setSearchRecipe] = useState([]);

   const params = useParams();

   const { search } = params;

   const getSearched = async (name) => {
      const response = await fetch(
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );

      const reciepes = await response.json();
      console.log(reciepes);
      setSearchRecipe(reciepes.results);
   };

   useEffect(() => {
      getSearched(search);
   }, [search]);

   return (
      <Grid>
         {searchedRecipe.map((item) => {
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

export default Searched;
