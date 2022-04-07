import { useEffect, useState } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Gradient, Card, Wrapper } from "../ui";
import { Link } from "react-router-dom";

function Veggie() {
   const [Veggie, setVeggie] = useState([]);

   const getVeggie = async () => {
      const check = localStorage.getItem("veggie");

      if (check) {
         setVeggie(JSON.parse(check));
      } else {
         const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
         );

         const data = await api.json();
         localStorage.setItem("veggie", JSON.stringify(data.recipes));
         setVeggie(data.recipes);
      }
   };

   useEffect(() => {
      getVeggie();
   }, []);

   return (
      <div>
         <Wrapper>
            <h3>Our Vegetarian Picks</h3>

            <Splide
               options={{
                  perPage: 3,
                  arrows: false,
                  gap: "2rem",
                  pagination: false,
                  drag: "free",
               }}
            >
               {Veggie.map((recipe) => {
                  return (
                     <SplideSlide key={recipe.id}>
                        <Card>
                           <Link to={"/recipe/" + recipe.id}>
                              <p>{recipe.title}</p>
                              <img src={recipe.image} alt={recipe.title} />
                              <Gradient />
                           </Link>
                        </Card>
                     </SplideSlide>
                  );
               })}
            </Splide>
         </Wrapper>
      </div>
   );
}

export default Veggie;
