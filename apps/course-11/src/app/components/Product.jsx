import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, setAvailable, setDiscounted } from '../redux/actions';

export function Product({ item }) {
    const dispatch = useDispatch();
    const handleDiscounted = () => {
        dispatch(setDiscounted(item.id, true));
    };

    const handleAvailable = () => {
        dispatch(setAvailable(item.id, true));
    };

    const handleDelete = () => {
        dispatch(deleteProduct(item.id));
    };
    return (
        <div>
            <p>
                #{item.id} ({item.name}) {item.discounted && `[${item.discounted ? 'Zniżka' : 'Bez zniżki'}]`} {item.available && `[${item.available ? 'Dostępny' : 'Niedostępny'}]`}
            </p>
            <button onClick={handleDiscounted}>Ustaw status jako "w promocji"</button>
            <button onClick={handleAvailable}>Ustaw status jako dostępny do sprzedaży</button>
            <button onClick={handleDelete}>Usuń</button>
        </div>
    );
}
export default Product;
