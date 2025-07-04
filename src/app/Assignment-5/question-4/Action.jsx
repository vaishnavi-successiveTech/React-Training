const fetchProducts= async({ page, limit })=> {
  const skip = (page - 1) * limit;
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  const data = await res.json();
  return {
    products: data.products,
    total: data.total
  };
}

export default fetchProducts;
