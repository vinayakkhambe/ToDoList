import { Component } from "react";
import { Todo } from "./Todo";
import styles from "./List.module.css";


export class List extends Component {
  render() {

     const {todos} = this.props;
    return (
      
       
      <table >
        <tbody>
      {todos.map( (todo,i) => 
       (
        <tr key={i}>
          <td className={styles.td}>{todo.text}</td>
          <td> <img  className={styles.img}  src="
          https://cdn-icons-png.flaticon.com/128/1828/1828843.png" onClick={() => this.props.handleRemove(i)}></img>
          </td>
        </tr>
       ) )}
       </tbody>
      </table>
       

      
    );
  }
}
