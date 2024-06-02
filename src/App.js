import ChildProp1 from "./Components/Children/ChildProp1";
import ChildProp2 from "./Components/Children/ChildProp2";

function App() {
  return (
    <>
      <ChildProp1>
        <ChildProp2 />
      </ChildProp1>
    </>
  );
}
export default App;
