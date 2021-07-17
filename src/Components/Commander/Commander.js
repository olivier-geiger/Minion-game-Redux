// library
import React from 'react';

// import
import classes from './Commander.module.css';

// Redux
import { connect } from 'react-redux';

function Commander(props) {
  return (
    <div class={classes.Commander}>
      <button onClick={props.createMinion}>Créer un minion</button>
      <button onClick={props.destroyMinion}>Détruire un minion</button>
      <button onClick={props.createTeam}>Créer une équipe de 5 minions</button>
      <button onClick={props.destroyTeam}>Détruire une équipe de 5 minions</button>
    </div>
  );
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    createMinion: () => dispatch({type: 'CREATE_MINION'}),
    destroyMinion: () => dispatch({type: 'DESTROY_MINION'}),
    createTeam: () => dispatch({type: 'CREATE_TEAM', value: 5}),
    destroyTeam: () => dispatch({type: 'DESTROY_TEAM', value: 5}),
  }
}

export default connect(null, mapDispatchToProps)(Commander);
