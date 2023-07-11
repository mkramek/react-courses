import React from 'react';
import { ProductList } from './components/ProductList';
import { ProductFilter } from './components/ProductFilter';

export function App() {
    return (
        <div>
            <ProductFilter />
            <ProductList />
        </div>
    );
}
export default App;
