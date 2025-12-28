'use client';
import React, { useEffect, useState } from 'react'
import TopMenuBar from '../TopMenuBar/TopMenuBar';
import Footer from '../components/global/footer/footer';
import Products from '../Products/Products';

const Menus = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchItems() {
      const res = await fetch("https://amarkitchen-server.vercel.app/v1/items"); // via Next proxy
      const data = await res.json();
      setItems(data.data);
    }
    fetchItems();
  }, []);
  return (
    <>
      <TopMenuBar />
      {items.length === 0 ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <span className="loading loading-dots loading-xl text-primary"></span>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <Products key={item._id} product={item} />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Menus