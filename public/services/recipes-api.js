const URL = '/api';

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

export function getTodos() {  
  const url = `${URL}/recipes`;
  return fetchWithError(url);
}

export function addTodo(recipe) {  
  const url = `${URL}/recipes`;
  return fetchWithError(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe)
  });
}

export function updateTodo(recipe) {  
  const url = `${URL}/recipes/${recipe.id}`;
  return fetchWithError(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(recipe)
  });
    
}

export function removeTodo(recipeId) {  
  const url = `${URL}/${recipeId}`;
  return fetchWithError(url, {
    method: 'DELETE'
  });
    
}
