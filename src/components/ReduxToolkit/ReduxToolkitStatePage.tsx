import ReduxToolkitPage from "./ReduxToolkitPage";
import { Provider } from "react-redux";
import store from "../../store/reduxStore/store";

const ReduxTookitStatePage = () => {
    return (
    <Provider store={store}>
        <ReduxToolkitPage/>
    </Provider>
    )
}

export default ReduxTookitStatePage