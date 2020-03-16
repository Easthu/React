import React, { Component } from 'react'
import {HashRouter,BrowserRouter,NavLink,Link,Route} from 'react-router-dom'
import './index.css'
import axios from 'axios'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'

function Singer(props){
    return(
        <div className='jump'>
            <span onClick={()=>{
                // console.log(props)
                props.history.go(-1)
                //返回上一级页面
            }}>返回</span>
            <p>跳转页面</p> 
        </div>
    )
}

class Music extends Component {
    constructor(props){
        super(props);
        this.state={
          list:[],
          banner:[],
        }
      }
componentDidMount(){
    // console.log(this)
    let url = '/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.218795579323402'
    axios.get(url)
    .then((res)=>{
        // console.log(res.data.data.list)
        let mlist = res.data.data.list
        this.setState({list:mlist})
        // console.log(this.state.list)
    })
    let bannerurl = '/music/api/getTopBanner?g_tk=1928093487&inCharset=utf8&outCharset=utf-8&notice=0&format=json&platform=yqq.json&hostUin=0&needNewCode=0&-=recom8031774067055915&data=%7B%22comm%22:%7B%22ct%22:24%7D,%22category%22:%7B%22method%22:%22get_hot_category%22,%22param%22:%7B%22qq%22:%22%22%7D,%22module%22:%22music.web_category_svr%22%7D,%22recomPlaylist%22:%7B%22method%22:%22get_hot_recommend%22,%22param%22:%7B%22async%22:1,%22cmd%22:2%7D,%22module%22:%22playlist.HotRecommendServer%22%7D,%22playlist%22:%7B%22method%22:%22get_playlist_by_category%22,%22param%22:%7B%22id%22:8,%22curPage%22:1,%22size%22:40,%22order%22:5,%22titleid%22:8%7D,%22module%22:%22playlist.PlayListPlazaServer%22%7D,%22new_song%22:%7B%22module%22:%22newsong.NewSongServer%22,%22method%22:%22get_new_song_info%22,%22param%22:%7B%22type%22:5%7D%7D,%22new_album%22:%7B%22module%22:%22newalbum.NewAlbumServer%22,%22method%22:%22get_new_album_info%22,%22param%22:%7B%22area%22:1,%22sin%22:0,%22num%22:10%7D%7D,%22new_album_tag%22:%7B%22module%22:%22newalbum.NewAlbumServer%22,%22method%22:%22get_new_album_area%22,%22param%22:%7B%7D%7D,%22toplist%22:%7B%22module%22:%22musicToplist.ToplistInfoServer%22,%22method%22:%22GetAll%22,%22param%22:%7B%7D%7D,%22focus%22:%7B%22module%22:%22QQMusic.MusichallServer%22,%22method%22:%22GetFocus%22,%22param%22:%7B%7D%7D%7D'
    axios.get(bannerurl)
    .then((res)=>{
        // console.log(res.data.data.slider)
        let blist = res.data.data.slider
        this.setState({banner:blist})
        // console.log(this.state.banner)
    })
    new Swiper('.swiper-container',{
        loop: true, // 循环模式选项
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
    });
  }
    render() {
        let list = this.state.list
        let banner = this.state.banner
        // console.log(list)
        return (
            <div className='bg'>
                <div className='title'>
                    <span>MUSIC</span>
                </div>
                <div className='tab'>
                <HashRouter>
                    <NavLink exact to='/recommend' activeClassName='selected' className='nav'> 推荐</NavLink>
                    <NavLink exact to='/singer' activeClassName='selected' className='nav'> 歌手</NavLink>
                    <NavLink exact to='/rank' activeClassName='selected' className='nav'> 排行</NavLink>
                    <NavLink exact to='/my' activeClassName='selected' className='nav'> 我的</NavLink>
                    <Route exact path='/recommend' component={Singer}></Route>
                    <Route exact path='/singer' component={Singer}></Route>
                    <Route exact path='/rank' component={Singer}></Route>
                    <Route exact path='/my' component={Singer}></Route>
                </HashRouter>  
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
            {/* <img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2143733.jpg" alt="" className='img'/> */}
                        {banner.map((item,index)=>{
                            return(
                                <div key={index} className="swiper-slide">
                                    <img src={item.picUrl} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="title1">
                    歌曲推荐列表
                </div>
                <ul>
                    {list.map((item,index)=>{
                        return(
                            <li key={index}>
                                <div className="left">
                                    <img src={item.imgurl} alt=""/>
                                </div>
                                <div className="right">
                                <p className="name">{item.creator.name}</p>
                                <p className="album">{item.dissname}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Music;