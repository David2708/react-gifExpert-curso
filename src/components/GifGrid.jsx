
import React, { useEffect, useState } from 'react'
import { useFechGifs } from '../hooks/useFechGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFechGifs( category )


    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }

            <div className="card-grid" >
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id} 
                            {...image}
                        />
                    ) )
                }
            </div>
        </>
    )
}
