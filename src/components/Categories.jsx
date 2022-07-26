import React from 'react'

const Categories = ({categoriesId, onClickCategories}) => {
  const categories = ["Все","Мясные","Вегетарианская","Гриль", "Острые", "Закрытые"]

 return (
    <div class="categories">
    <ul>
      {categories.map((value,i) => 
        <li onClick={() => onClickCategories(i)} className={categoriesId === i ? "active" : ''} >{value}</li>
      )}
    </ul>
  </div>
)}

export default Categories