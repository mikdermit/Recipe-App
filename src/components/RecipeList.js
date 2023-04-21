import React from "react";
import RecipeView from "./RecipeListItem.js";
import RecipeCreate from "./RecipeCreate.js";

function RecipeList({ recipes, createRecipe, deleteRecipe }) {
    return (
        <div id="recipe-list" className="container-fluid p-4">
            <div className="d-flex justify-content-end mb-3">
                <RecipeCreate createRecipe={createRecipe} />
            </div>
            <div class="row row-cols-1 row-cols-lg-2 g-2">
                {recipes.map((recipe, index) => (
                    <RecipeView
                        deleteRecipe={() => deleteRecipe(index)}
                        key={index}
                        recipe={recipe}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecipeList;
