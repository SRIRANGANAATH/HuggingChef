import React from "react"
import IngredientsList from "./components/IngredientsList"
import HugRecipe from "./components/HugRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipe,setRecipe]=React.useState("")
    // function toggleRecipeShown() {
    //     setRecipeShown(prevShown => !prevShown)
    // }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    async function showRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setRecipeShown(true)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    // // toggleRecipeShown={toggleRecipeShown}
                    // // aiRecipe={getRecipeFromMistral}
                    // showRecipe={showRecipe}
                    showRecipe={showRecipe}
                />
            }

            {recipeShown && <HugRecipe recipe={recipe} />}
        </main>
    )
}