import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div>
        <input
          ref={node => { this.input = node }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              onSubmit(this.input.value)
              this.input.value = '';
            }
          }}
        />
      </div>
    );
  }
}

export default TodoInput;
