import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>CARRO OCH JOHANS BRÖLLOPSFEST</h1>
      <section>
        hur många kommer: {count}
        <button onClick={() => setCount(count + 1)}>Lägg till deltagare</button>
      </section>
    </div>
  );
}

export default App;
