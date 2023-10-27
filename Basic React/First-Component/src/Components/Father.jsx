// calling child component
import Text from "./Text";

import Count from "./counter/Counter";

// "name" is the props that we send
const Father = () => {
  return (
    <div>
      <p>Hijo primero del componente padre</p>
      <p>Hijo segundo del componente padre</p>
      <Text name="Juan Neftaly" lastname="Castellanos" edad={20} />
      <Text name="Pepe" lastname="Henandez" edad={10} />
      <Count />
    </div>
  );
};

// export the component
export default Father;
