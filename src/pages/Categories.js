import {useState} from "react";


function Categories({surveys, history, setSelectedCategory}) {

 function handleChange(event) {
     setSelectedCategory(event.target.value);
     history.push(`/category`);
 }

    return (
       <>
            <h1>Categories</h1>
            <form onChange={handleChange}>  
<label> Select Cars </label>  
<select>  
<option value = "Food">Food</option>   
                            
<option value = "Pop Culture">Pop Cultue</option>     

<option value = "Travel">Travel</option> 
 
<option value = "Art">Art</option>

<option value = "Sports">Sports</option>

<option value = "Misc">Misc</option>   
 
</select>  
</form>  

        </>
    )
}

export default Categories