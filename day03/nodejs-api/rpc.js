const express = require("express")
const db = require("./common/db")
const time = require("./common/time")
//用于编写bbs论坛的api
module.exports = function(){
    let router = express.Router()

    //获取bbs_list的接口:http://localhost:9004/rpc/list
    router.get("/list",(req,res)=>{
        db.pool.query("select * from bbs_list order by id desc",(err,data)=>{
            if(!err){
                //允许ajax跨域访问
                res.setHeader('Access-Control-Allow-Origin',"*");
                //清除缓存
                res.setHeader("Cache-Control","no-cache"); 
                res.send(data).end();
            }
            
        })
    })


    //获取bbs_list的接口:http://localhost:9004/rpc/details?id=1
    router.get("/details",(req,res)=>{
        db.pool.query("select * from bbs_list where id=? limit 1",[req.query.id],(err,data)=>{
            if(!err){
                //允许ajax跨域访问
                res.setHeader('Access-Control-Allow-Origin',"*");
                //清除缓存
                res.setHeader("Cache-Control","no-cache"); 
                res.send(data[0]).end();
            }
            
        })
    })

    //添加帖子
    router.post("/add",(req,res)=>{
        let title = req.body.title 
        let content = req.body.content
        let now = time.now()
        let topic_id = 1
        let user_id = 1
        let is_top = 0
        db.pool.query("insert into bbs_list(title,content,pub_time,topic_id,user_id,is_top)values(?,?,?,?,?,?)",[title,content,now,topic_id,user_id,is_top],err=>{
            if(!err){
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Cache-Control","no-cache"); 
                res.send({status:0,message:"ok"}).end(); 
            }
        })
    })

    return router
}