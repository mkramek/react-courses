import { useSelector } from 'react-redux';
import { Product } from './Product';
import { StatusFilters } from '../redux/constants';

const getProducts = (products, statusFilter) => {
    switch (statusFilter) {
        case StatusFilters.available:
            return products.filter((prod) => prod.available);
        case StatusFilters.discounted:
            return products.filter((prod) => prod.discounted);
        default:
            return products;
    }
};

export const ProductList = () => {
    const products = useSelector((state) => state.products);
    const filter = useSelector((state) => state.filters.status);

    const availableProducts = getProducts(products, filter);

    return (
        <ul>
            {availableProducts.map((item) => (
                <li key={item.id}>
                    <Product item={item} />
                </li>
            ))}
        </ul>
    );
};
