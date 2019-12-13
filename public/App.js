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
      console.log(recipe, 'RECIPE');
      addRecipe(recipe);
    });
      
  }
  renderHTML() {
    return /*html*/ `
        
            <form id="recipe-form">
                <input name="name" type="text" required placeholder="Recipe Name"><br>
                <p>Directions:</p>
                <textarea rows="14" cols="10" wrap="soft" style="width: 400px; height: 300px;"  name="directions" type="text" required placeholder="Recipe Directions"> </textarea>
                <button id="form-submit">Submit Recipe</button>

            </form>
        
        `;
  }
}
export default App;
