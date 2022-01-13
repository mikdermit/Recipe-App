import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // define default form state
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  // set initial form state
  const [ formData, setFormData ] = useState({ ...initialFormState }) 
  // when content is entered, update content
  const handleChange = ({ target }) => setFormData({...formData, [target.name]: target.value})
  // when the form is submitted
  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault()
    // create new recipe
    createRecipe(formData)
    // clear form
    setFormData({ ...initialFormState })
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td htmlFor="cuisine">
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td htmlFor="photo">
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td htmlFor="ingredients">
              <textarea
                id="ingredients"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td htmlFor="preparation">
              <textarea
                id="preparation"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
