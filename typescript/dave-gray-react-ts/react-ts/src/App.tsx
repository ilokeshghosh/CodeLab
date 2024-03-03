import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import { useState } from "react"
import List from "./components/List"
function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title="Hello" />
      <Section title="this title is given in prop">This children of the section</Section>
      <Section >This children of the section</Section>
      <Counter setCount={setCount} >Count is {count}</Counter>

      <List items={['item1', 'item2']} render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
