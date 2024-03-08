import axios from "axios";
import { Todo } from ".";

interface Props {
  todoItems: Todo[];
}

export default function TodoItem({ todoItems }: Props) {
  return (
    <div>
      <h1>Todo Items</h1>
      {todoItems.map((item) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <h2>{title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = axios.get("http://jsonplaceholder.typicode.com/todos");
  const data = (await response).data;

  return {
    props: {
      todoItems: data,
    },
  };
}
