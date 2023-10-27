// learning props
const Text = () => {
  return <p>Soy un componete papu</p>;
};

const Father = () => {
  return (
    <div>
      <p>Hijo primero del componente padre</p>
      <p>Hijo segundo del componente padre</p>
      <Text />
    </div>
  );
};

// export the component
export default Father;
