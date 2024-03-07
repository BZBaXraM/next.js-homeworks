type Props = {
  slug: string[];
};

const UsersPage = ({ slug }: Props) => {
  return (
    <div>
      <h1>User: {slug}</h1>
    </div>
  );
};

export default UsersPage;

export function getServerSideProps(context: any) {
  console.log(`context: ${context}`);
  return {
    props: {
      slug: context.params.slug,
    },
  };
}
