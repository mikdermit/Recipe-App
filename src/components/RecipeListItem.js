import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
    console.log(recipe.tags);
    const tags = recipe.tags.map(tag => (
        <span class="badge text-bg-primary p-1 m-1">{tag}</span>
    ));
    const ingredients = recipe.ingredients.map(ingredient => (
        <li class="list-group-item">{ingredient}</li>
    ));
    const preparation = recipe.preparation.map(instruction => (
        <li class="list-group-item">{instruction}</li>
    ));
    return (
        <div className="col">
            <div className="card">
                <img
                    src={recipe.photo}
                    className="card-img-top"
                    alt={recipe.name}
                    style={{ height: "15rem" }}
                />
                <div className="card-body p-0">
                    <header className="d-flex align-items-center justify-content-between p-3 mb-3">
                        <h4 className="card-title mb-0">{recipe.title}</h4>
                        <h5 className="d-flex">{tags}</h5>
                    </header>
                    <div className="row">
                        <div className="col-6 text-center">
                            <h5 className="mb-2">Ingredients</h5>
                            <ul class="list-group list-group-flush">
                                {ingredients}
                            </ul>
                        </div>
                        <div className="col-6 text-center">
                            <h5 className="mb-2">Preparation</h5>
                            <ul class="list-group list-group-flush">
                                {preparation}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <tr>
        //     <td>{recipe.name}</td>
        //     <td>{recipe.cuisine}</td>
        //     <td>
        //         <img src={recipe.photo} />
        //     </td>
        //     <td className="content_td"><p>{recipe.ingredients}</p></td>
        //     <td className="content_td"><p>{recipe.preparation}</p></td>
        //     <td>
        //         <button name="delete" onClick={deleteRecipe}>Delete</button>
        //     </td>
        // </tr>
    );
}

export default RecipeView;
