
import React, { useState, useEffect } from 'react';
import './style.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getPageList
} from '../../store/modules/medical';

function HooksDemo (props) {
  console.log(111)
  console.log(props)
  const { history } = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
  });

  const toSinger = () => {
    history.push('/singer')
  }
  
  return (
    <div>
      <p>You clicked recommend {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      <br />
      <button onClick={toSinger}>toSinger</button>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    pageIndex: state.medical.get('pageIndex')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPageList
  }, dispatch);
}

// export default HooksDemo;
export default connect(mapStateToProps, mapDispatchToProps)(HooksDemo);