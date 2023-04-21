import React, { useState } from "react";
import {
    Button,
    ButtonToolbar,
    FlexboxGrid,
    Form,
    Input,
    Modal,
    Schema,
    TagInput,
    TagPicker,
    Uploader
} from "rsuite";
import { RecipeTags } from "../data/RecipeData";

// define required values for form
const { StringType, ArrayType } = Schema.Types;

const model = Schema.Model({
    title: StringType().isRequired("This field is required."),
    tags: ArrayType().isRequired("This field is required."),
    photo: StringType().isRequired("This field is required."),
    ingredients: ArrayType().isRequired("This field is required."),
    preparation: ArrayType().isRequired("This field is required.")
});

function RecipeCreate({ createRecipe }) {
    const formRef = React.useRef();
    // define default form state
    const initialFormState = {
        title: "",
        tags: [],
        photo: "",
        ingredients: [],
        preparation: []
    };
    // set initial form state
    const [formValue, setFormValue] = useState({ ...initialFormState });
    const [formError, setFormError] = useState({});
    const [ingredient, setIngredient] = useState("");
    const [preparation, setPreparation] = useState("");
    const [display, setDisplay] = useState(false);
    const handleIngredients = e => {
        if (formValue.ingredients) {
            formValue.ingredients.push(ingredient);
            setIngredient("");
        }
    };
    const handlePreparation = e => {
        if (formValue.preparation) {
            formValue.preparation.push(preparation);
            setPreparation("");
        }
    };
    // toggle modal display
    const toggleDisplay = () => setDisplay(!display);
    // when content is entered, update content
    const handleChange = ({ target }) =>
        setFormValue({ ...formValue, [target.name]: target.value });
    // when the form is submitted
    const handleSubmit = event => {
        if (!formRef.current.check()) {
            return;
        } else {
            // prevent page reload
            event.preventDefault();
            // create new recipe
            createRecipe(formValue);
            // clear form
            setFormValue({ ...initialFormState });
        }
    };
    console.log(formValue, formError);
    return (
        <>
            <ButtonToolbar>
                <Button
                    size="lg"
                    onClick={toggleDisplay}
                    color="green"
                    appearance="primary"
                >
                    Create
                </Button>
            </ButtonToolbar>

            <Modal open={display} onClose={toggleDisplay}>
                <Modal.Header>
                    <Modal.Title>Create Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        ref={formRef}
                        onChange={setFormValue}
                        onCheck={setFormError}
                        formValue={formValue}
                        model={model}
                        fluid
                    >
                        <Form.Group
                            className={`mb-0 ${
                                formError.title ? "has-error" : ""
                            }`}
                        >
                            <Form.ControlLabel>Title</Form.ControlLabel>
                            <Input
                                name="title"
                                value={formValue.title}
                                onChange={e =>
                                    setFormValue({ ...formValue, title: e })
                                }
                            />
                            <Form.HelpText>{formError.title}</Form.HelpText>
                        </Form.Group>
                        <Form.Group
                            className={`mb-0 ${
                                formError.photo ? "has-error" : ""
                            }`}
                        >
                            <Form.ControlLabel>Photo URL</Form.ControlLabel>
                            <Input
                                name="photo"
                                value={formValue.photo}
                                onChange={e =>
                                    setFormValue({ ...formValue, photo: e })
                                }
                            />
                            <Form.HelpText>{formError.photo}</Form.HelpText>
                        </Form.Group>
                        <Form.Group
                            className={`mb-0 ${
                                formError.tags ? "has-error" : ""
                            }`}
                        >
                            <Form.ControlLabel>Tags</Form.ControlLabel>
                            <TagPicker
                                className="w-100"
                                name="tags"
                                value={formValue.tags}
                                data={RecipeTags}
                                onChange={e =>
                                    setFormValue({ ...formValue, tags: e })
                                }
                            />
                            <Form.HelpText>{formError.tags}</Form.HelpText>
                        </Form.Group>
                        <Form.Group
                            className={`mb-0 ${
                                formError.ingredients ? "has-error" : ""
                            }`}
                        >
                            <Form.ControlLabel>
                                Ingredients
                                <Button
                                    className="plus"
                                    color="link"
                                    appearance="primary"
                                    onClick={handleIngredients}
                                >
                                    <i class="fa-solid fa-plus" />
                                </Button>
                            </Form.ControlLabel>

                            <Input
                                value={ingredient}
                                onChange={setIngredient}
                            />
                            <Form.HelpText>
                                {formError.ingredients}
                            </Form.HelpText>
                        </Form.Group>
                        {formValue.ingredients.length > 0 ? (
                            <ol class="list-group list-group-flush mb-2">
                                {formValue.ingredients.map(ingredient => (
                                    <li class="list-group-item">
                                        {ingredient}
                                    </li>
                                ))}
                            </ol>
                        ) : null}
                        <Form.Group
                            className={`mb-0 ${
                                formError.preparation ? "has-error" : ""
                            }`}
                        >
                            <Form.ControlLabel>
                                Preparation Steps
                                <Button
                                    className="plus"
                                    color="link"
                                    appearance="primary"
                                    onClick={handlePreparation}
                                >
                                    <i class="fa-solid fa-plus" />
                                </Button>
                            </Form.ControlLabel>

                            <Input
                                value={preparation}
                                onChange={setPreparation}
                            />
                            <Form.HelpText>
                                {formError.preparation}
                            </Form.HelpText>
                        </Form.Group>
                        {formValue.preparation.length > 0 ? (
                            <ol class="list-group list-group-flush mb-2">
                                {formValue.preparation.map(instruction => (
                                    <li class="list-group-item">
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        ) : null}
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button
                        onClick={toggleDisplay}
                        className="btn-danger"
                        appearance="default"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        color="green"
                        appearance="primary"
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        // <form name="create" onSubmit={handleSubmit}>
        //   <table>
        //     <tbody>
        //       <tr>
        //         <td htmlFor="name">
        //           <input
        //             id="name"
        //             type="text"
        //             name="name"
        //             onChange={handleChange}
        //             value={formData.name}
        //             placeholder="Name"
        //           />
        //         </td>
        //         <td htmlFor="cuisine">
        //           <input
        //             id="cuisine"
        //             type="text"
        //             name="cuisine"
        //             onChange={handleChange}
        //             value={formData.cuisine}
        //             placeholder="Cuisine"
        //           />
        //         </td>
        //         <td htmlFor="photo">
        //           <input
        //             id="photo"
        //             type="url"
        //             name="photo"
        //             onChange={handleChange}
        //             value={formData.photo}
        //             placeholder="URL"
        //           />
        //         </td>
        //         <td htmlFor="ingredients">
        //           <textarea
        //             id="ingredients"
        //             name="ingredients"
        //             onChange={handleChange}
        //             value={formData.ingredients}
        //             placeholder="Ingredients"
        //           />
        //         </td>
        //         <td htmlFor="preparation">
        //           <textarea
        //             id="preparation"
        //             name="preparation"
        //             onChange={handleChange}
        //             value={formData.preparation}
        //             placeholder="Preparation"
        //           />
        //         </td>
        //         <td>
        //           <button type="submit">Create</button>
        //         </td>
        //       </tr>
        //     </tbody>
        //   </table>
        // </form>
    );
}

export default RecipeCreate;
