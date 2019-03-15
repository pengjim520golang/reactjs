import React, { Component } from 'react'; 


class Add extends Component {

  constructor(...args){
    super(...args)
  }

  submit(){
      let txtTitle = this.refs["txtTitle"].value;
      let txtContent = this.refs["txtContent"].value;
      fetch("http://localhost:9004/rpc/add",{
        method:"POST", //注意:post尽量大写
        mode:"cors", //允许跨域
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'  //以urlencode方式提交数据
        },
        body:`title=${txtTitle}&content=${txtContent}`
      })
      .then((response)=>{ 
        return response.json().then(data=>({data}));  //如果提交成功才能获取到promise resolve
      })
      .then(({data})=>{
            if(data.status==0){
                window.location.href="/"
            }
      })
  }


  render() {
    return (
       <div>
            <p>
            <label htmlFor="txtTitle">标题:</label>
            <input type="text" id="txtTitle" ref="txtTitle" />
            </p>
            <p>
            <label htmlFor="txtContent">内容:</label>
            <textarea id="txtContent" ref="txtContent" />           
            </p>
            <p>
            <button onClick={this.submit.bind(this)}>发表</button>
            </p>
       </div>
    );
  }
}

export default Add;
