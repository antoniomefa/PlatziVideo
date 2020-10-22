import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, searchresults, searchVideo }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleResults = (event) => {
    searchVideo(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='search'
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleResults}
        //ref={(element) => (element || {}).onsearch = handleResults}
        list='data'
      />
      <datalist id='data'>
        {searchresults.map((item, key) => <option key={key} value={item.title} />)}
      </datalist>
    </section>
  );
};

const mapStateToProps = (state) => ({
  searchresults: state.searchresults,
});

const mapDispatchToProps = {
  searchVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
