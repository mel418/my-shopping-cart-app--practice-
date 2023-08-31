async function productList() {
  try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      const PRODUCTS = Array.isArray(products) ? products : [products];
      return PRODUCTS;
  } catch (error) {
      console.error('Error fetching data:', error);
      return [];
  }
}

const PRODUCTS = await productList();

export { productList , PRODUCTS }

