import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailWrapper, Info } from "../ui";

function Recipe() {
   const [recipeDetails, setRecipeDetails] = useState({});
   const [activeButton, setActiveButton] = useState("instruction");

   const params = useParams();

   const { name } = params;

   const fetchRecipe = useCallback(async () => {
      const response = await fetch(
         `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );

      const data = await response.json();

      console.log(data);
      setRecipeDetails(data);
   }, [name]);

   useEffect(() => {
      fetchRecipe(name);
   }, [name, fetchRecipe]);

   return (
      <DetailWrapper>
         <div>
            <h2>{recipeDetails.title}</h2>
            <img src={recipeDetails.image} alt={recipeDetails.title} />
         </div>
         <Info>
            <Button
               className={activeButton === "instruction" ? "active" : ""}
               onClick={() => setActiveButton("instruction")}
            >
               Instruction
            </Button>
            <Button
               className={activeButton === "ingrediants" ? "active" : ""}
               onClick={() => setActiveButton("ingrediants")}
            >
               Ingrediants
            </Button>
            {activeButton === "instruction" ? (
               <div>
                  <h3
                     dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
                  ></h3>
                  <h3
                     dangerouslySetInnerHTML={{
                        __html: recipeDetails.instruction,
                     }}
                  ></h3>
               </div>
            ) : (
               <ul>
                  {recipeDetails.extendedIngredients.map((ingredient) => {
                     return <li key={ingredient.id}>{ingredient.original}</li>;
                  })}
               </ul>
            )}
         </Info>
      </DetailWrapper>
   );
}

export default Recipe;
