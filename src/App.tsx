import './App.css'
import People from "./components/People";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <People />
          </div>
      </Provider>
  )
}

export default App
