const URL = 'https://matts-recipes.herokuapp.com/api/v1';

async function fetchWithError(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  if(response.ok) {
    return data;
  }
  else {
    throw data.error;
  }
}

export function getRecipes() {  
  const url = `${URL}/recipes`;
  return fetchWithError(url);
}

export function addRecipe(recipe) {  
  const url = `${URL}/recipes`;
  return fetchWithError(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe)
  });
}

export function updateRecipe(recipe) {  
  const url = `${URL}/recipes/${recipe.id}`;
  return fetchWithError(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe)
  });
    
}

export function removeRecipe(recipeId) {  
  const url = `${URL}/${recipeId}`;
  return fetchWithError(url, {
    method: 'DELETE'
  });
    
}
