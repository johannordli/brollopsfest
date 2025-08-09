import { useState } from 'react';

import Header from './components/header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <h1>Välkommen till Carro och Johans bröllopsfest</h1>
        <section>
          hur många kommer: {count}
          <button onClick={() => setCount(count + 1)}>Lägg till deltagare</button>
        </section>
      </main>
    </>
  );
}

export default App;
