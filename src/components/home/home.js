import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../header/header';
import Game from '../game/game'
import Controller from '../controller/controller';

import { generate } from '../../logic/generator';
import { puzzle } from '../../logic/puzzler';

import { BOX_SIZE as boxSize } from '../../constants/game';

import {
  setSolution,
  setPuzzled
} from '../../actions/actions';

const Home = ({
  setSolution,
  setPuzzled
}) => {

  const solution = generate(boxSize ** 2);
  setSolution(solution);

  const puzzled = puzzle(boxSize ** 2);
  setPuzzled(puzzled);

  return (
    <div>
      <Header />
      <Game
        solution={solution}
        puzzled={puzzled}
        boxSize={boxSize} />
      <Controller />
    </div>
  );
}

const mapStateToProps = ({ solution }) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSolution,
  setPuzzled
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
