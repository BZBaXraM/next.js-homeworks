import { Cars } from "@/types/car";
import { useRouter } from "next/router";

interface Props {
  car: Cars;
}

const CarsDetails = ({ car }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <h1
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          padding: "5rem",
        }}
      >
        Loading...
      </h1>
    );
  }

  const { make, model, price } = car;
  return (
    <div>
      <h2
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          padding: "5rem",
        }}
      >
        {make} - {model} - {price}$
      </h2>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const {
    params: { carId },
  } = context;
  const response = await fetch(`http://localhost:4000/cars/${carId}`);
  if (!response.ok) {
    return new Error("An error occurred while fetching the data…");
  }

  const data = await response.json();
  return {
    props: {
      car: data,
    },
  };
};
export const getStaticPaths = () => {
  return {
    paths: [{ params: { carId: "1" } }, { params: { carId: "2" } }],
    fallback: true,
  };
};

export default CarsDetails;
