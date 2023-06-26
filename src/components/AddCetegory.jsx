import { useState } from "react"

export const AddCetegory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('Jasmin');
    {/*event.target.value es para obtener el valor del elmemto html al que esta asociado al evento*/ }
    const OnInputChange = (event) =>{
        setinputValue(event.target.value)
    }
    {/**.trim() se utiliza para eliminar los epsacios de adelnate y atras */}
    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setinputValue('')
    }
    {/**Input para ingresra un nuevo elmento */}
    {/**OnSubmit se ejecuta cuando el usuario envia el fromualrio o da enter */}
  return (
    <form onSubmit={  (event) => onSubmit(event)}>
        <input 
            type="text"
            placeholder="Buscar gifs" 
            value={inputValue}
            onChange={ (event) => OnInputChange(event)}
        />
    </form>
    
  )
}
