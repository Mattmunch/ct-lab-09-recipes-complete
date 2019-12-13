import Component from './Component.js';
import Header from './common/Header.js';
import { addRecipe } from './services/recipes-api.js';


class App extends Component {
  onRender(form) {
    const header = new Header();
    form.prepend(header.renderDOM());
      
    
    form.addEventListener('submit', () => {
      event.preventDefault();
      const formData = new FormData(form);
      const recipe = {
        name: formData.get('name'),
        directions: formData.get('directions')
      };
      addRecipe(recipe);
      console.log(recipe, 'FORM DATA');
    });
      
  }
  renderHTML() {
    return /*html*/ `
        
            <form id="recipe-form">
                <input name="name" type="text" placeholder="Recipe Name">
                <input name="directions" type="text" placeholder="Recipe Directions">
                <button id="form-submit">Submit Recipe</button>

            </form>
        
        `;
  }
}
export default App;
