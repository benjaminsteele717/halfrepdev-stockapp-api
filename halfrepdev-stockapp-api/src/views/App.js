import React from 'react';
import {Provider} from "react-redux"; // Automatically passes the store to all child components
import store from "../redux/store"; // The store and main reducer
import DisplayOnly from "../components/DisplayOnly";
import UpdateOnly from "../components/UpdateOnly";
import DisplayAndUpdate from "../components/DisplayAndUpdate";

const App = () =>
  <Provider store={store}>
      <Container>

      </Container>
  </Provider>

export default App;
