import React from 'react';
import HomePageSlider from '../../Component/HomePageSlider';
import HomeCards from '../../Component/HomePageCards';
import ProductOverView from '../../Component/ProductOverView';
import ProductOverViewCards from '../../Component/ProductOverViewCards';

function HomePage() {
  return <div>

    <HomePageSlider></HomePageSlider>
    <HomeCards></HomeCards>
    <ProductOverView></ProductOverView>
    <ProductOverViewCards></ProductOverViewCards>
  </div>;
}

export default HomePage;
