import Component from './Component.js';
import RecipeItem from './RecipeItem.js';

class RecipeList extends Component {
  renderHTML() {
    return `
        <ul class="recipe-list"></ul>
        `;
  }
  onRender(element) {
    const allRecipes = this.props.allRecipes;
    allRecipes.forEach(recipe => {
      const props = { recipe };
      const recipeItem = new RecipeItem(props);
      const recipeItemDOM = recipeItem.renderDOM();
            
      element.appendChild(recipeItemDOM);
    });
  }
}


export default RecipeList;
