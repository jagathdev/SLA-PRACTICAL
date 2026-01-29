import APIDataFetch from "./APIDataFetch";
import ConditionalRendering, { FormAlert } from "./ConditionalRender";
import Counter from "./Counter";
import List from "./List";
import Parent from "./Parent";
import RenderArr from "./RenderArr";
import Timer from "./Timer";
import TodoApp from "./Todo/TodoApp";

const App = () => {

  const Arr = ["apple", "banana", "orange", "graps"]

  return (
    <>
      {/* <TodoApp />
      <Counter />
      <List />
      <APIDataFetch /> */}
      <ConditionalRendering />
      <RenderArr FruitArray={Arr} />
      <FormAlert />
      <Timer />
    </>
  )
}

export default App;

