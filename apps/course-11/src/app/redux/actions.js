export const addProduct = ({ id, name, price }) => {
    return {
        type: "products/add",
        payload: { id, name, price }
    }
}

export const deleteProduct = (id) => {
    return {
        type: "products/delete",
        payload: id
    }
}

export const setAvailable = (id, availability) => {
    return {
        type: "products/setAvailability",
        payload: { id, availability }
    }
}

export const setDiscounted = (id, discounted) => {
    return {
        type: "products/setDiscounted",
        payload: { id, discounted }
    }
}

export const setFilters = (filter) => {
    return {
        type: "search/setFilters"
    }
}