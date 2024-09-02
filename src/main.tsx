import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// const Comp = () => {
//   const [state, setState] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => {
//       console.log(state);
//       setState((prev) => prev + 1);
//     }, 1000);
//     return () => {
//       clearInterval(t);
//     };
//   }, []);
//   return <App />;
// };

createRoot(document.body!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
