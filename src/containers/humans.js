import React, {Component} from 'react';
import TopicsContainer from '../components/topics-container/topics-container';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

export default class HumanS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNightlyTheme: true,
    }
  }

  toggleTheme = (event) => {
    this.setState({isNightlyTheme: !this.state.isNightlyTheme});
  }

  render() {
    const {isNightlyTheme} = this.state;

    return (
      <div className={isNightlyTheme ? 'nightly-theme' : 'brightly-theme'}>
        <div className="content-container">
          <Header />

          <div className="toggle-theme-container">
            <button className="toggle-theme" onClick={this.toggleTheme}>
              Switch to {isNightlyTheme ? 'brightly' : 'nightly'} theme
              <i className={isNightlyTheme ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </div>

          <TopicsContainer />
        </div>

        <Footer />
      </div>
    );
  }
}
