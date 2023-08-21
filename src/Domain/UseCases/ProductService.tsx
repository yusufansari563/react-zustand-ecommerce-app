export const ProductGet = async () => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => data)
};
