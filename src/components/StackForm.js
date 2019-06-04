import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import { 
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from 'react-bootstrap';

import { addStack } from '../actions';

export const INITIAL_STATE = {
  title: '',
  cards: [],
};

export class StackForm extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  addCard() {
    const { cards } = this.state;

    this.setState({
      cards: [
        ...cards,
        {
          id: v4(),
          prompt: '',
          answer: '',
        },
      ],
    });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleCardChange(e, i, property) {
    const { cards } = this.state;

    this.setState({
      cards: [
        ...cards.slice(0, i),
        {
          ...cards[i],
          [property]: e.target.value,
        },
        ...cards.slice(i+1),
      ],
    });
  }

  addStack() {
    const { addStack } = this.props;
    
    addStack({
      ...this.state,
      id: v4(),
    });

    this.setState(INITIAL_STATE);
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline className="form">
          <FormGroup className="form__group">
            <FormLabel className="form__label">
              Title:
            </FormLabel>
            <FormControl
              value={this.state.title}
              className="form__control"
              onChange={(e) => this.handleTitleChange(e)}
            />
          </FormGroup>
          {
            cards.map((card, i) => (
              <FormGroup key={card.id} className="form__group">
                <FormLabel className="form__label">
                  Prompt:
                </FormLabel>
                <FormControl
                  value={card.prompt}
                  className="form__control"
                  onChange={(e) => this.handleCardChange(e, i, 'prompt')}
                />
                <FormLabel className="form__label">
                  Answer:
                </FormLabel>
                <FormControl
                  value={card.answer}
                  className="form__control"
                  onChange={(e) => this.handleCardChange(e, i, 'answer')}
                />
              </FormGroup>
            ))
          }
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>
          Add Card
        </Button>
        <Button
          onClick={() => this.addStack()}
        >
          Save the Stack
        </Button>
      </div>
    )
  }
}

export default connect(
  null,
  { addStack },
)(StackForm);