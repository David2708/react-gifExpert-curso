import { useState } from 'react'; 

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('')

    const OnInputChanged = (event) => {
        setInputValue( event.target.value )
    }

    const OnSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 2 ) return;

        // setCategories( categories  => [inputValue, ...categories])
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={OnSubmit} >
            <input 
                type="text"
                placeholder="Buscar Gif..."
                value={inputValue}
                onChange={ OnInputChanged }
            />  
        </form>
    )
}
