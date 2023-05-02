import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import Todo from "./components/todo/Todo";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
    errorElement: <div>404 not found!</div>,
  },
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
