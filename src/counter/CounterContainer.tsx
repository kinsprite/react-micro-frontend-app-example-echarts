import { connect } from 'react-redux';

import {
  onRest, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync, onIncrementThunk, onIncrementEpic,
} from './actionCreators';
import Counter from './Counter';

const mapStateToProps = (state /* , ownProps */) => ({
  counter: state['app-example-echarts'].counter.counter, // our app id: 'app-example-echarts'
});

const mapDispatchToProps = {
  onRest, onIncrement, onDecrement, onIncrementIfOdd, onIncrementAsync, onIncrementThunk, onIncrementEpic,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
