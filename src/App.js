import React, { useState } from "react";
import "./styles/App.css";
import RecipeCreate from "./components/RecipeCreate";
import RecipeList from "./components/RecipeList";
import { RecipeData } from "./data/RecipeData";

function App() {
    const [recipes, setRecipes] = useState(RecipeData);

    const deleteRecipe = deleteIndex => {
        return setRecipes(
            recipes.filter((recipe, index) => index !== deleteIndex)
        );
    };

    const createRecipe = formData => {
        return setRecipes([...recipes, formData]);
    };

    return (
        <div className="App">
            <header className="py-2">
                <h1>Delicious Food Recipes</h1>
            </header>
            <RecipeList
                recipes={recipes}
                createRecipe={createRecipe}
                deleteRecipe={deleteRecipe}
            />
        </div>
    );
}

export default App;
