import React, { Component } from "react";
// import { render } from "react-dom";
class List extends Component {
  render() {
    let { list } = this.props;
    console.log({list})
    return (
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item.msg}
              <button
                onClick={() => {
                  this.props.delFun(index);
                }}>
                删除
              </button>
              {list.finish ? (
                <span>已完成</span>
              ) : (
                <button
                  onClick={() => {
                    this.props.updataFun(index);
                  }}>
                  待完成
                </button>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default List;
