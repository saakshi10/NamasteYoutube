import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";
import store from "./utils/store";
import MainContainer from "./components/body/main-container/main-container";
import WatchPage from "./components/body/watch-page/watch-page";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "/watch",
                element: <WatchPage />,
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <RouterProvider router={appRouter} />
                {/* <Body /> */}
            </div>
        </Provider>
    );
}

export default App;
