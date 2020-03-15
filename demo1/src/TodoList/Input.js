import React,{ Component} from 'react'
// import { render } from 'react-dom'
class Input extends Component{
    render(){
        console.log(this)
        return(
            <div>
                <input type='text' ref='input'/>
                <button onClick={()=>{
                    let value = this.refs.input.value
                    this.props.addFun(value)
                }}>add</button>
            </div>
        )
    }
}
export default Input