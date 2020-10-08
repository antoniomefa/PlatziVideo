import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ searchresults, mylist, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {
        searchresults.length > 0 && (
          <Categories title='Resultados de la búsqueda'>
            <Carousel>
              {
                searchresults.map((item) => (
                  <CarouselItem
                    key={item.id}
                    {...item}
                  />
                ))
              }
            </Carousel>
          </Categories>
        )
      }

      {
        mylist.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {
                mylist.map((item) => (
                  <CarouselItem
                    key={item.id}
                    {...item}
                    isList
                  />
                ))
              }
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchresults: state.searchresults,
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
