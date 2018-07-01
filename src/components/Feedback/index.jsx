import React from 'react';


export class Feedback extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      success: false
    }
    
    this.events = {
      triggerSuccess: this.triggerSuccess.bind(this),
      createModal: this.createModal.bind(this),
      removeModal: this.removeModal.bind(this),
    }
  }
  
  triggerSuccess() {
    const { removeModal } = this.events;
    this.setState({ success: true })
    removeModal();  
  }
  
  createModal(content) {
    const { createModal } = this.props;
    createModal(content)
  }

  sendFeedback() {
    const { removeModal } = this.props;
    
  }
  
  render() {
    const { success } = this.state;
    const { createModal, triggerSuccess, sendFeedback } = this.events;
    return <Markup {...{ success, createModal, triggerSuccess, sendFeedback }} />
  }
}