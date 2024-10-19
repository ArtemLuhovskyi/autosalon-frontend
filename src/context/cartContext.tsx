import { createContext, useContext, useEffect, useState } from 'react';
import { ICars } from '../interfaces/cars';

interface CartContextType {
    addCarToCart: (car: ICars) => void;
    isCarInCart: (id: string | undefined) => boolean;
    removeCarFromCart: () => void; // убираем параметр id, так как теперь только одна машина
    cart: ICars | null; // изменяем тип на ICars | null, так как может быть одна машина или null
}

const CartContext = createContext<CartContextType>({
    addCarToCart: () => {},
    isCarInCart: () => false,
    removeCarFromCart: () => {},
    cart: null, // инициализируем cart как null
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<ICars | null>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : null;
    });

    useEffect(() => {
        if (cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('cart');
        }
    }, [cart]);

    const addCarToCart = (car: ICars) => {
        setCart(car); // добавляем машину в корзину (перезаписываем)
    };

    const isCarInCart = (id: string | undefined): boolean => {
        return cart?.id.toString() === id;
    };

    const removeCarFromCart = () => {
        setCart(null); // очищаем корзину
    };

    return (
        <CartContext.Provider value={{ addCarToCart, isCarInCart, removeCarFromCart, cart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);