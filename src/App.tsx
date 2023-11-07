import "./App.css";
import useCamera from "./hooks/useCamera";

function App() {
  const { getMedia } = useCamera();

  return (
    <>
      <button onClick={getMedia}>Activate</button>
    </>
  );
}

export default App;
