import Todo from "./pages/todo/Todo";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SingleTask from "./pages/singleTask/SingleTask";
import NotFound from "./pages/notFound/NotFound";
import  Counter from "./components/Counter";
import  Message from "./components/Message";

const routes = [
  {
    path: "/",
    element: <Todo />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/task/:taskId",
    element: <SingleTask />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/message",
    element: <Message />,
  },
];

export { routes };