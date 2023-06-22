import { ProductList } from '../components/ProductList';
import { getProducts } from '../services/api';

export const Products = () => {
    const products = getProducts();
    return (
        <main>
            <ProductList products={products} />
        </main>
    );
};
