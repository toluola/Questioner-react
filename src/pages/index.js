import React from 'react'
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { ConnectedCard } from '../components/Card';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <ConnectedCard />
      <Footer />
    </div>
  )
}
