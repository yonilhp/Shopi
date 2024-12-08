//Esta funcion calcula el precio total de la nueva orden

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => {
        if (typeof product.price === 'number') {
            sum += product.price; // Sumar solo si el precio es un número
        }
    });
    return sum;
}