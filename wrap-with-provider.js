import React from "react"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/reduxfolder/store";
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
    setupLocatorUI();
  }

  const WrapRootElement = ({ element }) => {
    // Instantiating store in `wrapRootElement` handler ensures:
    //  - there is fresh store for each SSR page
    //  - it will be called only once in browser, when React mounts

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {element}
            </PersistGate>
        </Provider>
    );
};

export default WrapRootElement;