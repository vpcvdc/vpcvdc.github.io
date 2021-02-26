import { Component } from "react";
import { createPortal } from "react-dom";

const portal = document.getElementById("portal");
export default class Portal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    portal.appendChild(this.el);
  }

  componentWillUnmount() {
    portal.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}
