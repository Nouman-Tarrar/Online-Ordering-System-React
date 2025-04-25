import React from 'react'
import HeroBanner from './views/home/HeroBanner'
import TopRestaurants from './views/home/TopRestaurants'
import CuisineCategories from './views/home/CuisineCategories'
import CustomerReviews from './views/home/CustomerReviews'
import NewsletterSignup from './views/home/NewsletterSignup'

const App = () => {
  return (
    <>
      <HeroBanner/>
      <TopRestaurants/>
      <CuisineCategories/>
      <CustomerReviews/>
      <NewsletterSignup/>
    </>
  )
}

export default App