// learning props
// this function gets the prop
const Text = (propiedad) => {
  console.log(propiedad);
  return <p>Soy un componete papu</p>;
};

// "name" is the props that we send
const Father = () => {
  return (
    <div>
      <p>Hijo primero del componente padre</p>
      <p>Hijo segundo del componente padre</p>
      <Text name="Juan Neftaly" lastname="Castellanos" />
    </div>
  );
};

// export the component
export default Father;
