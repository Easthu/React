import React from 'react'
import { Component} from 'react'
import Input from './Input.js'
import List from './List.js'
class Todolist extends Component{
    constructor(){
        super()
        //初始化state 数据
        this.state={
            datas:[{msg:'今天周末，嘿嘿嘿',finish:true},
            {msg:'明天周一，嘿嘿嘿',finish:false},
            {msg:'后天周二，嘿嘿嘿',finish:false},
        ]
        }
    }
    add(msg){
        //添加数据的方法
        let datas = this.state.datas
        console.log(datas)
        datas.push({msg:msg,finish:false})
        this.setState({datas})
    }
    del(index){
        //删除数据的方法 传给list 子组件调用
        let datas = this.state.datas
        datas.splice(index,1)
        this.setState({datas})
    }
    update(index){
        //跟新数据的方法 传给list 子组件调用
        let datas = this.state.datas
        datas[index].finish = true
        this.setState({datas})
    }
    render(){
        let datas  = this.state.datas
        // console.log(datas)
        return(
            <div>
                <Input addFun= {this.add.bind(this)}></Input>
                <hr/>
                <List list= { datas } delFun={ this.del.bind(this) } updateFun={ this.update.bind(this) }></List>
            </div>
        )
    }

}
export default Todolist