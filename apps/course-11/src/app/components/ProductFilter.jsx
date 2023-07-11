import { useSelector } from 'react-redux';
import { StatusFilters } from '../redux/constants';
import { FilterButton } from './FilterButton';

export const ProductFilter = () => {
    const filter = useSelector((state) => state.filters.status);

    return (
        <>
            <FilterButton selected={filter === StatusFilters.all}>All</FilterButton>
            <FilterButton selected={filter === StatusFilters.available}>Available</FilterButton>
            <FilterButton selected={filter === StatusFilters.discounted}>Discounted</FilterButton>
        </>
    );
};
