import Component from '../Component.js';

class Header extends Component {
  renderHTML() {
    return /*html*/`
            <header>
                <img class="logo" src="assets/awesome-logo.png" alt="awesome Logo">
                <h1>Matt's Recipes</h1>
                <nav>
                    <a href="./">Home</a>
                    <a href="/recipes/recipes.html">Recipes</a>
                </nav>
            </header>
        `;
  }
}

export default Header;
