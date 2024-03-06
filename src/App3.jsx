// import { useState } from "react";

// let counter = 4;



// function App() {
//   return (
//       <div>
//           <CardWrapper>
//               <TodoMain/>
//           </CardWrapper>
//       </div>
//   )
// }

// function TodoMain() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Go To Gym",
//       description: "Go To Gym Today",
//     },
//     {
//       id: 2,
//       title: "Go To Class",
//       description: "Go To Class",
//     },
//     {
//       id: 3,
//       title: "Go For Dinner",
//       description: "Go To Dinning Hall",
//     },
//   ]);
//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: counter++,
//         title: Math.random(),
//         description: Math.random(),
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a ToDo</button>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );

//   function Todo({ title, description }) {
//     return (
//       <div>
//         <h1>{title}</h1>
//         <h5>{description}</h5>
//       </div>
//     );
//   }
// }

// function CardWrapper(TodoMain) {
//   return (
//     <span
//       style={{
//         border: "2px solid black",
//         padding: "10px",
//         marginLeft: "5px",
//         borderRadius: "9px",
//       }}
//     >
//       {TodoMain}
//     </span>
//   );
// }

// export default App;