import React, { useEffect, useState, useRef } from 'react';
import './style.styl'
import {
  useParams,
} from "react-router-dom";
import { getSongList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import { createSong, isValidMusic, processSongsUrl } from 'common/js/song'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

function GetSingerDetail (props) {
  const [songs, setSongs] = useState([])
  const [title, setTitle] = useState('')
  const [bgImage, setBgImage] = useState('')
  const bgImageRef = useRef()
  const playBtnRef = useRef()
  const filterRef = useRef()
  const layerRef = useRef()
  const {disc} = props
  let history = useHistory();
  let {id} = useParams();

  const _normalizeSongs = (list) => {
    let ret = []
    list.forEach((musicData) => {
      if (isValidMusic(musicData)) {
        ret.push(createSong(musicData))
      }
    })
    return ret
  }
  const bgStyle = () => {
    return {
      backgroundImage: `url(${bgImage})`
    }
  }
  const back = () => {

  }
  const random = () => {
    // this.randomPlay({
    //   list: this.songs
    // })
  }

  useEffect(() => {
    if (!disc.dissid) {
      history.push('/recommend')
      return
    }
    setTitle(disc.dissname)
    setBgImage(disc.imgurl)
  }, [disc])

  useEffect(() => {
    getSongList(id).then((res) => {
      if (res.code === ERR_OK) {
        processSongsUrl(_normalizeSongs(res.cdlist[0].songlist)).then((songs) => {
          setSongs(songs)
        })
      }
    })
    console.log(bgImageRef.current)
    console.log(filterRef.current)
  }, [id])

  return (
    <>
      <div className="back" onClick={back}>
        <i className="icon-back"></i>
      </div>
      <h1 className="title">{title}</h1>
      <div className="bg-image" style={bgStyle()} ref={bgImageRef}>
        <div className="play-wrapper">
          {songs.length>0 && <div ref={playBtnRef} className="play" onClick={random}>
            <i className="icon-play"></i>
            <span className="text">随机播放全部</span>
          </div>}
        </div>
        <div className="filter" ref={filterRef}></div>
      </div>
      <div className="bg-layer" ref={layerRef}></div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    disc: state.recommend.disc,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GetSingerDetail);