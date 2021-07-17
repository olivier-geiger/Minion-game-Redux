// library
import React, { useState } from 'react';

// import
import classes from './App.module.css';

// Component
import Header from './Components/Header/Header';
import Commander from './Components/Commander/Commander';

// Redux
import { connect } from 'react-redux';

function App(props) {

  return (
    <div className={classes.App}>
      <Header />

      <div className='container'>
        <div className={classes.content}>
          <h1>À la conquête du monde</h1>
          <div className={classes.minions}>
            <span>{props.minions}</span>
            minions infiltrés
          </div>
        </div>

        <Commander />
      </div>
    </div>
  );
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    minions: state.minions,
  };
};

// mapDispatchToProps

export default connect(mapStateToProps)(App);
