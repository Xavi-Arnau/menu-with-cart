import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  const [showModal, setShowModal] = useState(false);

  const newOrder = () => {
    setShowModal(false);
    //and other stuff
  };
  return (
    <Provider store={store}>
      <div>
        <div className="bg-Rose50">
          <div className="flex flex-col md:flex-row w-8/12 mx-auto">
            <div className="md:w-3/5">
              <Menu />
            </div>
            <div className="md:w-2/5">
              <Cart confirm={() => setShowModal(true)} />
            </div>
          </div>
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </Provider>
  );
}

export default App;
