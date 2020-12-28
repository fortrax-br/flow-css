const Components = new Map();
const FLOW_VERSION = '1.0.0';

class ExtendComponent {
  constructor(element, componentKey) {
    if (!element) {
      return;
    }

    this._element = element;
    this.componentKey = componentKey;
    Components.set(this._element, this.componentKey);
  }

  drop() {
    Components.delete(this._element);
    this._element = null;
  }

  getInstance() {
    return Components.get(this._element);
  }

  version() {
    return FLOW_VERSION;
  }
}

export default ExtendComponent;
