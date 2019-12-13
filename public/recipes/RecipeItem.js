import Component from './Component.js';

class RecipeItem extends Component {
  renderHTML() {
    const recipe = this.props.recipe;
    return `
        <li>
            <h2>${recipe.name}</h2>
            <p>${recipe.ingredients}</p>
    </li>
        `;
  }
}
export default RecipeItem;
