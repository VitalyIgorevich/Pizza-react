import React from 'react'
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";
import Categories from "../components/Categories";

const Home = () => {
    const[itemsPizza, setItemsPizza] = React.useState([])
    const[isLoader, setIsLoader] = React.useState(true)
    const[categoriesId, setCategoriesId] = React.useState(0)
    const[sortType, setSortType] = React.useState({name: "популярности", sortProperty: "rating"})
    
  
    React.useEffect(() => {
      setIsLoader(true)
      fetch(`https://62dad12bd1d97b9e0c46fef9.mockapi.io/items?${
        categoriesId > 0 ? `category=${categoriesId}` : ''
      }&sortBy=${sortType.sortProperty}&order=desc`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setItemsPizza(data)
        setIsLoader(false)
      })
    },[categoriesId,sortType])
    console.log("🚀 ~ categoriesId", categoriesId)
    
    
  
    
  return (
    <>
    <div class="content__top">
            
            <Categories categoriesId={categoriesId} onClickCategories={(i) => setCategoriesId(i)}/>
            <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)}/>

          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            {isLoader ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) :
            itemsPizza.map((itemPizza) => 
            <PizzaBlock {...itemPizza}/>
          )}
            
          </div>
    </>
  )
}

export default Home

