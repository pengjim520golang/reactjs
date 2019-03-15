import React, { Component } from 'react'; 
import * as time from './common/time'; 

class Details extends Component {

  constructor(...args){
    super(...args)
    this.state = {
        detail:{}
    }
  }

  componentDidMount(){
  
      

      fetch(`http://localhost:9004/rpc/details?id=${this.props.match.params.id}`)
        .then(response=>{return response.json()}) //获取response对象
        .then(item=>{ //获取json对象
           this.setState({
               detail:item 
           })
        })

  }


  render() {
    
    return (
        <div>
            <p><a href="/">返回列表页</a></p>
            <h1>{this.state.detail.title}</h1>
            <p>{time.date( this.state.detail.pub_time )}</p>
            <p>{this.state.detail.content}</p>
        </div>
    );
  }
}

export default Details;
