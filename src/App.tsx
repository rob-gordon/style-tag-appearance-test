import "./styles.css";
import styled from "styled-components";
import { lazy, Suspense, useState } from "react";
const Lazy = lazy(() => import("./Lazy"));
const Lazy2 = lazy(() => import("./Lazy2"));
const Lazy3 = lazy(() => import("./Lazy3"));
const Lazy4 = lazy(() => import("./Lazy4"));

const One = styled.div`
  color: red;
`;

function App() {
  const [show, setShow] = useState(3);
  return (
    <div className="App">
      <One>Hello CodeSandbox</One>
      <button onClick={() => setShow((x) => (x + 1) % 3)}>Show</button>
      {show === 3 ? null : show === 0 ? (
        <Lazy>Lazy</Lazy>
      ) : show === 1 ? (
        <Lazy2>Lazy</Lazy2>
      ) : show === 2 ? (
        <Lazy3>Lazy</Lazy3>
      ) : (
        <Lazy4>Lazy</Lazy4>
      )}
    </div>
  );
}

export default function () {
  return (
    <Suspense fallback={<div />}>
      <App />
    </Suspense>
  );
}
