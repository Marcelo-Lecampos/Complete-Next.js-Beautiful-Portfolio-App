import react, { useState } from "react";

function Home() {
  const valueState = useState()
  return (
    <div>
      valueState: {valueState}
      <h1>Hello World</h1>
      <Superman />
    </div>
  );
}

export default Home;
