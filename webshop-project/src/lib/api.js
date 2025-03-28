const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

// PRODUCT ENDPOINTS

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/Products`);
  return handleResponse(response);
}

export async function getProductById(id) {
  const response = await fetch(`${API_BASE_URL}/Products/${id}`);
  return handleResponse(response);
}

export async function getProductsRandom(num) {
  const response = await fetch(`${API_BASE_URL}/Products/Random/${num}`);
  return handleResponse(response);
}

export async function getDecorations() {
  const response = await fetch(`${API_BASE_URL}/Products/Decorations`);
  return handleResponse(response);
}

export async function getPaintings() {
  const response = await fetch(`${API_BASE_URL}/Products/Paintings`);
  return handleResponse(response);
}

export async function getWearables() {
  const response = await fetch(`${API_BASE_URL}/Products/Wearables`);
  return handleResponse(response);
}

// AUTH ENDPOINTS



// USER ENDPOINTS