import Component from '../Component.js';
import Header from '../common/Header.js';
import RecipeList from './RecipeList.js';
import { getRecipes } from '../services/recipes-api.js';



class App extends Component {
  async onRender(element) {
    const header = new Header();
    const headerDOM = header.renderDOM();
    element.prepend(headerDOM);
       
    const recipeList = new RecipeList({ allRecipes: [] });
    const recipeListDOM = recipeList.renderDOM();
        
    const recipeSection = element.querySelector('.recipe-section');
    recipeSection.appendChild(recipeListDOM);

    const allRecipes = await getRecipes();
    
    recipeList.update({ allRecipes });

   
        
  }
  renderHTML(){
    return `
        <main>
            
            <section class='recipe-section'>
      
            </section>
            
        </main>
        `;
        
  }
}




export default App;
