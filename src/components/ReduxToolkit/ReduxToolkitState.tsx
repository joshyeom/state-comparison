import ReduxToolkit from "./ReduxToolkit";
import { Provider } from "react-redux";
import store from "../../store/reduxStore/store";

const ReduxTookitState = () => {
    return (
    <Provider store={store}>
        <ReduxToolkit/>
    </Provider>
    )
}

export default ReduxTookitState