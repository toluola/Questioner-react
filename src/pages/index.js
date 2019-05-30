import React from 'react'
import { connect } from 'react-redux';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import TitleBar from '../components/TitleBar';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
import { ConnectedCard } from '../components/Card';

const MainPage = ({ isAuthenticated }) => {
  return (
    <div>
      <Header />
      {isAuthenticated.profile ? <TitleBar content='All Meetups'/> : <div><Hero /> <Menu /></div>}
      <ConnectedCard />
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.State.loggedinUser
})

export default connect(mapStateToProps, null)(MainPage)

