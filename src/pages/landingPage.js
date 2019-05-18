import React from 'react'
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Menu } from '../components/Menu';
import { ConnectedCard } from '../components/Card';

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <ConnectedCard />
    </div>
  )
}
