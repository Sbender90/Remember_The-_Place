import React, { Component } from 'react';
import pictures from "./pictures.json";
import PictureCard from "./components/PicturesCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Score from "./components/Score";
import './App.css';

class App extends Component {
  state = {
    pictures
  }

  removePicture = id => {
    const filteredPictures = this.state.pictures.filter(picture => picture.id !== id);
    this.setState({ filteredPictures });
  }

  render () {
    return (

     
      <Wrapper>
        <Navbar />
        <Score />
        <Title>Click to get points</Title>

        {this.state.pictures.map(picture => (
          <PictureCard
            id={picture.id}
            key={picture.id}
            name={picture.name}
            image={picture.image}
            removePicture={this.removePicture}
            />
        ))}
        </Wrapper>
    );
  }}

export default App;
