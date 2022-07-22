import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header"
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/Skeleton";


function App() {
  const[itemsPizza, setItemsPizza] = React.useState([])
  const[isLoader, setIsLoader] = React.useState(true)

  React.useEffect(() => {
    fetch('https://62dad12bd1d97b9e0c46fef9.mockapi.io/items')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setItemsPizza(data)
      setIsLoader()
    })
  },[])
  

  return (
    <div className="wrapper">
      
     <Header />

     <div class="content">
        <div class="container">
          <div class="content__top">
            
            <Categories />
            <Sort />

          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            {isLoader ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) :
            itemsPizza.map((itemPizza) => 
            <PizzaBlock {...itemPizza}/>
          )}
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
