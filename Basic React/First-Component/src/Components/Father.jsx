// learning props
// this function gets the prop
const Text = (props) => {
  // verificando propiedad
  // console.log(props);
  return (
    <p>
      Yo soy {props.name} {props.lastname} y mi edad es: {props.edad}
    </p>
  );
};

// "name" is the props that we send
const Father = () => {
  return (
    <div>
      <p>Hijo primero del componente padre</p>
      <p>Hijo segundo del componente padre</p>
      <Text name="Juan Neftaly" lastname="Castellanos" edad={20} />
      <Text name="Pepe" lastname="Henandez" edad={10} />
    </div>
  );
};

// export the component
export default Father;
