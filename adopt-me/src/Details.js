import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city}, {state}{" "}
        </h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              onClick={this.toggleModal}
              style={{ backgroundColor: theme }}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No, I'm a Monster</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);
export default () => {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
};
