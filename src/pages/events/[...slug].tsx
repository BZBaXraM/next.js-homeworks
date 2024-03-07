import React from "react";

type Props = {
  slug: string[];
};

const EventDetails = ({ slug }: Props) => {
  if (Number(slug) % 15 === 0) {
    return (
      <div>
        <h1>FizzBuzz</h1>
      </div>
    );
  }
  if (Number(slug) % 3 === 0) {
    return (
      <div>
        <h1>Fizz</h1>
      </div>
    );
  }
  if (Number(slug) % 5 === 0) {
    return (
      <div>
        <h1>Buzz</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default EventDetails;

export function getServerSideProps(context: any) {
  return {
    props: {
      slug: context.params.slug,
    },
  };
}
