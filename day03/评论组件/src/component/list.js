import React, { Component } from 'react'; 
import Item from './item'
import * as time from './common/time'

class List extends Component {

  constructor(...args){
    super(...args)
    //声明一个items状态用于获取数据库中的相关数据
    this.state = {
        items:[]
    }
  }

  //发送ajax请求
  componentDidMount(){
      //发请求给http://localhost:9004/rpc/list
      fetch("http://localhost:9004/rpc/list")
        .then(response=>{return response.json()}) //获取response对象
        .then(items=>{ //获取json对象
            this.setState({items})
        })

    
  }


  render() {
    //获取items
    let items = this.state.items.map( (item,index)=>{
        return  <Item key={item.id} title={item.title} time={time.date( item.pub_time )} id={item.id} />
    })

    return (
       <div>
            <p><a href="/add">发表评论</a></p>
           {items}

          
       </div>
    );
  }
}

export default List;
