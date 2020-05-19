
import React, { useEffect } from 'react';
import GetSwiperList from './swiperList'
import GetDiscList from './discList'
import './style.styl'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDisc } from 'store/modules/recommend'

function RecommendPage (props) {
  const { setDisc } = props
  useEffect(() => {
  }, [])

  return (
    <div className="recommend_wrapper">
      <div className="recommend_container">
        <GetSwiperList/>
        <GetDiscList
          callsetDisc={item => setDisc(item)}
        />
        {props.children}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setDisc
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendPage);