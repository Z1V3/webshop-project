const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

// PRODUCT ENDPOINTS
export async function getProducts(filters = {}) {
  let url = new URL(`${BACKEND_URL}/Products`);
  const queryParams = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) queryParams.append(key, value);
  });

  if (queryParams.toString()) url.search = queryParams.toString();

  console.log("Fetching from:", url.toString());
  const response = await fetch(url);
  return handleResponse(response);
}

export async function getProductById(id) {
  const response = await fetch(`${BACKEND_URL}/Products/${id}`);
  return handleResponse(response);
}

export async function getProductsRandom(num) {
  const response = await fetch(`${BACKEND_URL}/Products/Random/${num}`);
  return handleResponse(response);
}


// AUTH ENDPOINTS



// USER ENDPOINTS