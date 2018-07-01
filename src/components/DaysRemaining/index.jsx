import React, { Component } from 'react';


export default class DaysRemaining extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: null,
    }

    this.setDays = this.setDays.bind(this);
  }


  setDays() {
    const { deadline, template } = this.props;
    const end = new Date(deadline);
    const timeDiff = Math.abs(end.getTime() - new Date().getTime());
  
    if (timeDiff < 0) {
      return null;
    }
  
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return this.setState({ days });
  }

  componentDidMount() {
    this.setDays();
  }


  render() {
    const { template } = this.props;
    const { days } = this.state;
    if (!days) {
      null;
    }

    if (!template) {
      return <span>{days}</span>; 
    }

    return <span>{template(days)}</span>;
  }
}