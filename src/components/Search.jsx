import React, { useState } from "react";
import { FormStyle } from "../ui";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
   const [search, setSeatch] = useState("");

   const navigate = useNavigate();

   const submitHandler = (e) => {
      e.preventDefault();
      navigate("/searched/" + search);
   };

   const inputChangeHandler = (e) => {
      const { value } = e.target;

      setSeatch(value);
   };
   return (
      <FormStyle onSubmit={submitHandler}>
         <div>
            <FaSearch />
            <input type="text" value={search} onChange={inputChangeHandler} />
         </div>
      </FormStyle>
   );
}

export default Search;
