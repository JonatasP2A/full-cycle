import Image from 'next/image';

async function getProducts(): Promise<any[]> {
  const response = await fetch('http://localhost:8000/products', {
    next: {
      revalidate: 10,
    },
  });
  return await response.json();
}

async function ProductsListPage() {
  const products = await getProducts();

  return (
    <div>
      <h2>Listagem de produtos</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <Image src={product.image_url} alt="" width={200} height={200} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsListPage;
