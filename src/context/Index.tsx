"use client"

import Product from '@/models/productModel';
import React, { createContext, useContext, useState } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
}

interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (index: number) => void;
}

const AppContext = createContext<any>([]) 


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [cart, setCart] = useState([])
    const addToCart = (product: Product) => {
        const newCart:any = [...cart, product];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const removeFromCart = (index: number) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    return (
        <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </AppContext.Provider>
    );
};

export const useCart = () => {
    return useContext(AppContext) as CartContextType;
}
