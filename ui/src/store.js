import { makeAutoObservable } from "mobx";

class Store {
  clicked = false;
  _h = false;
  coords = { x: 0, y: 0 };
  el = null;
  selectedElProps = null;
  constructor() {
    makeAutoObservable(this);
  }
  setClicked(state) {
    this.clicked = state;
  }
  set_h(state) {
    this._h = state;
  }
  setCoords(coords) {
    this.coords = coords || { x: 0, y: 0 };
  }
  setEl(el) {
    this.el = el;
  }
  setSelectedElProps(props) {
    this.selectedElProps = props;
  }
}

export const store = new Store();
