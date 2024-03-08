import axios from "axios";
import Link from "next/link";

type Props = {
  items: Todo[];
};

export type Todo = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

export default function TodoPage({ items }: Props) {
  return (
    <div>
      <h1>Todo Page</h1>
      <ul>
        {items.map((item) => (
          <Link key={item.id} href={`/todos/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export async function getServerSideProps() {
  const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
  const data = await response.data;

  return {
    props: {
      items: data,
    },
  };
}
