import { Cars } from "@/types/car";
import Link from "next/link";

interface Props {
  cars: Cars[];
}

const Car = ({ cars }: Props) => {
  return (
    <>
      <title>Cars</title>
      {cars.map((item) => {
        const { id, make, model, year, price } = item;
        return (
          <div key={id}>
            <Link href={`/cars/${id}`}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  padding: "5rem",
                }}
              >
                Make: {make} - Model: {model} - Release year: {year} - Price:{" "}
                {price}$
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Car;

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/cars");
  const data = await response.json();
  console.log("REVALIDATING…");

  return {
    props: {
      cars: data,
    },
    revalidate: 5,
  };
};
