import { useState } from "react";

export function AddCategory({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      onNewCategory(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input 
      type="text" 
      placeholder="Buscar Gifs" 
      value= {inputValue}
      onChange= {handleInputChange}
      />
    </form>

  );
}
