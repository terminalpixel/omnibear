import {h, Component} from 'preact';
import {MESSAGE_SUCCESS, MESSAGE_ERROR, MESSAGE_INFO} from '../constants';

export default class Message extends Component {
  render() {
    return (
      <div className={this.getClass()}>
        {this.props.children}
        {this.props.location ? (
          <span>
            {':'}
            <br />
            <a href={this.props.location}>{this.props.location}</a>
          </span>
        ) : null}
      </div>
    );
  }

  getClass() {
    const types = {
      [MESSAGE_INFO]: 'message message--info',
      [MESSAGE_SUCCESS]: 'message message--success',
      [MESSAGE_ERROR]: 'message message--danger',
    };
    return types[this.props.type] || types[MESSAGE_INFO];
  }
}
