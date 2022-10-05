import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCocktailListQuery } from "../../api/cocktail/cocktailApi";
import { Cocktail } from "../../models/cocktail";
import { getDetailCocktail } from "./homeSclice";
import List from "./components/list/list";

const Home: FC = () => {
  const { data, error, isLoading } = useGetCocktailListQuery({
    country: "Turkey",
  });
  const navigate = useNavigate();

  const cocktailList = useSelector((state: any) => state.home.cocktailList);
  const dispatch = useDispatch();
//   const handleDelete = (university: University) => {
//     dispatch(deleteUniversity(university));
//   };

  const handleDetail = (cocktail: Cocktail) => {
    console.log("handleDetail")
    dispatch(getDetailCocktail(cocktail.drinkId));
    navigate(`/cocktail/${cocktail.drinkId}`);
  };

  return (
    <>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <List cocktailList={cocktailList} handleDetail={handleDetail} />
        ) : null}
      </div>
    </>
  );
};

export default Home;