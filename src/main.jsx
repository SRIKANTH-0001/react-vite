import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 2000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
<>
<App />
<Header/>
</>
);