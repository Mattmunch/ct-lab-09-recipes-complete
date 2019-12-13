import Component from '../Component.js';

class RecipeItem extends Component {
  renderHTML() {
    const recipe = this.props.recipe;
    return `
        <li id="${recipe._id}">
            <h2>${recipe.name}</h2>
            <p>${recipe.ingredients}</p>
            <p>${recipe.instructions}</p>
    </li>
        `;
  }
}
export default RecipeItem;
