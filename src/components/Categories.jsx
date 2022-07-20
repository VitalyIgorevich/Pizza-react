import React from 'react'

const Categories = () => {
  const[activeCategories, setActiveCategories] = React.useState(0)

  const categories = ["Все","Мясные","Вегетарианская","Гриль", "Острые", "Закрытые"]
  
  return (
    <div class="categories">
    <ul>
      <li className="active" >Все</li>
      <li>Мясные</li>
      <li>Вегетарианская</li>
      <li>Гриль</li>
      <li>Острые</li>
      <li>Закрытые</li>
    </ul>
  </div>
)}

export default Categories