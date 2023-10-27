const Text = (props) => {
  // verificando propiedad
  // console.log(props);
  return (
    <p>
      Yo soy {props.name} {props.lastname} y mi edad es: {props.edad}
    </p>
  );
};

// export child component to Father
export default Text;
