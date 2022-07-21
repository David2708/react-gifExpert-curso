import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        const categoriesLower = categories.map( category => category.toLowerCase() );

        if( categoriesLower.includes(newCategory.toLowerCase()) ) return;
        setCategories( [newCategory, ...categories]  )
    }
    
    
    return (
        <>
            {/* titulo */}
            <div>GifExpertApp</div>

            {/* input */}
            <AddCategory 
                onNewCategory = { newCategory => onAddCategory(newCategory)}
            />

            
            {
                categories.map( (category) => (
                    <GifGrid 
                    categories={categories}
                        category={category} 
                        key={category}
                    />
                ))
            }
            


                {/* Gif Items  */}
        </>
    )
}
