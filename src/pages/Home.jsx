import React from 'react'
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";
import Categories from "../components/Categories";

const Home = ({searcValue, setSearchValue}) => {
    const[itemsPizza, setItemsPizza] = React.useState([])
    const[isLoader, setIsLoader] = React.useState(true)
    const[categoriesId, setCategoriesId] = React.useState(0)
    const[sortType, setSortType] = React.useState({name: "популярности", sortProperty: "rating"})

    const sortBy = sortType.sortProperty.replace()
    const order = sortType.sortProperty.includes()
    const category = categoriesId > 0 ? `category=${categoriesId}` : '';
    const search = searcValue ? `&search=${searcValue}`: '';
    
  
    React.useEffect(() => {
      setIsLoader(true)
      fetch(`https://62dad12bd1d97b9e0c46fef9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search} `
      )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setItemsPizza(data)
        setIsLoader(false)
      })
    },[categoriesId,sortType, searcValue])
    
  return (
    <>
    <div class="content__top">
            
            <Categories categoriesId={categoriesId} onClickCategories={(i) => setCategoriesId(i)}/>
            <Sort sortType={sortType} onChangeSort={(i) => setSortType(i)}/>

          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            {isLoader ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) :
            itemsPizza
            // .filter((obj) => {
            //   if(obj.title.toLowerCase().includes(searcValue.toLowerCase())) {
            //     return true
            //   }
            //   return false
            // })
            .map((itemPizza) => 
            <PizzaBlock {...itemPizza}/>
          )}
            
          </div>
    </>
  )
}

export default Home

