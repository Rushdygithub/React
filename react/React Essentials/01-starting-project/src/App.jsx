import { CORE_CONCEPTS } from './data';
import Header from './componants/Header/Header';
import CoreConcept from './componants/CoreConcept';
import TabButton from './componants/TabButton'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Core Concept</h2>
        <ul>
        {CORE_CONCEPTS.map((item) => {
          return ( 
            <CoreConcept img={item.image} title={item.title} description={item.description} />
          )
        })}
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Componants</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
