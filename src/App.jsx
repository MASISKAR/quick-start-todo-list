import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import NavBar from "./components/NavBar/NavBar";
import {routes} from './routes';
import {store} from './redux/store';

function App() {
  const isLoading = useSelector((store)=>store.loader.isLoading);
  return (
    <Provider store={store}>
    <BrowserRouter>
      <main>
        <NavBar />
        <Routes>
          {routes.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Routes>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {isLoading && <Loader />}
      </main>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
