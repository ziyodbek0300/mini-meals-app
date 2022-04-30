import React from 'react'
import { CategoryItem } from './CategoryItem'

function CategoryList({ catalog = []}) {
  return (
    <div className='list'>
        {catalog.map(el => (
            <CategoryItem {...el} key={el.idCategory} />
        ))}
    </div>
  )
}
export {CategoryList}