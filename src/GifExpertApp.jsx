import { useState } from 'react'
import { AddCetegory } from './components/AddCetegory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Jasmin']);
    {/**agrgar la nueva infomracion a mis categorias */}
    const onAddCategory = (newCateory) => {
        if(categories.includes(newCateory)) return;
        setCategories([newCateory, ...categories]);
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCetegory onNewCategory={ event => onAddCategory(event)}/>
        { 
            categories.map( category => (
                <GifGrid key={category} category={category}/>
            ))
        }
       
    </>
  )
}

