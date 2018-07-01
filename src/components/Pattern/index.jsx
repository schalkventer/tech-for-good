import React, { Component } from 'react';
import Markup from './partials/Markup';


export default class Pattern extends Component {
  constructor(props) {
    super(props);
    const { iframes } = this.props;

    this.state = {
      selected: iframes[0].filename,
    }

    this.events = {
      setSelected: this.setSelected.bind(this),
    }
  }

  setSelected(selected) {
    this.setState({ selected })
  }

  render() {
    const { title, iframes, description, responsive, code } = this.props;
    const { selected } = this.state;
    const { setSelected } = this.events;
    return <Markup {...{ title, iframes, description, responsive, selected, setSelected, code }} />
  }
}