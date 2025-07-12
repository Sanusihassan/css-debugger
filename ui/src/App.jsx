

import { Inspector } from './components/Inspector';
import { createContext, useEffect, useRef, useState } from 'react';

import Draggable from 'react-draggable';

import { ElementsEditor } from "./components/ElementsEditor";
import ElementInfo from './components/ElementInfo';
import { observer } from 'mobx-react';

import { store } from './store';

export function toggleDebugger() {
  let body = document.body;
  if (store.clicked && !store.selectedElProps) {
    body.setAttribute("data-start-debugger", "");
  } else {
    body.removeAttribute("data-start-debugger");
  }
}
function App() {

  useEffect(() => {
    document.documentElement.addEventListener("mousemove", e => {
      if (!store.selectedElProps) {
        store.setEl(e.target);
        store.set_h(e.target.classList.length);
        store.setCoords({ x: e.clientX, y: e.clientY });
      }

    });
  }, []);

  return (

    <div className='app'>
      <div className="container">

        <Draggable handle=".css-debugger-handle">
          <div className="inspector css-debugger-ignore">
            <button className="css-debugger-btn css-debugger-ignore" onClick={() => {
              store.setClicked(!store.clicked);
              toggleDebugger();
            }} >
              <Inspector clicked={store.clicked} />
            </button>
            <ElementsEditor />
          </div>
        </Draggable>
        {ElementInfo(false)}


        {/* <div className="test">test</div> */}
        <div className="row">
          <div className="card col-3 mt-4">
            <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div className="card col-3 mt-4">
            <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default observer(App);


// export default App
