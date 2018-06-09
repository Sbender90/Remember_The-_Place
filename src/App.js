import React, { Component } from 'react';
import pictures from "./pictures.json";
import PicturesCard from "./components/PicturesCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import './App.css';



class App extends Component {
  state = {
    pictures: pictures,
    score: 0,
    top_score: 0,
    selectedCards: []
  }

  clickedPicture = (id) => {
    // const [pageBody] = document.getElementsByTagName('body');

    if (this.state.selectedCards.includes(id)) {
      this.setState({score: 0, selectedCards: []})

      // pageBody.classList.add('shakeWrapper')
      this.setState({footerText: 'You picked that already! Start Over.'})
      setTimeout(() => {
        // pageBody.classList.remove('shakeWrapper');
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800)

    } else {
      this.setState({selectedCards: [...this.state.selectedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
        this.setState({footerText: 'You Won! Play again?'})
        this.setState({score: 0, selectedCards: [], pictures: pictures})
        setTimeout(() => {
          this.setState({footerText: ''})
        }, 1800)
      } 
    }
  }

  


  reArrangePictures = (pictures) => {
    let currentIndex = pictures.length;

    // for (var i =0; i < pictures.length - 1; i++){
    //   var j = i + Math.floor(Math.random() * (pictures.length - 1));

    //   var temp = pictures[j];
    //   pictures[j] = pictures[i];
    //   pictures[i] = temp;
    // }
    // return pictures;



    // old try giving me the same errors as above
    while (0 !== currentIndex) {
      
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      let temporaryValue = pictures[currentIndex];
      pictures[currentIndex] = pictures[randomIndex];
      pictures[randomIndex] = temporaryValue;
    }

    this.setState({pictures:pictures});
  }


  renderPicutres = () => {
    return this.state.pictures.map(picture => (
      <section className='colTest' key={picture.id} id={picture.id}>
        <PicturesCard 
          name={picture.name}
          image={picture.image}
          reArrangePictures={() => {this.reArrangePictures(this.state.cards)}}
          clickedPicture={() => {this.clickedPicture(picture.id)}}/>
          
      </section>
    ))
  }

  render() {
    return (
      <div className="container-fluid">
      <Navbar score={this.state.score} top_score={this.state.topScore}/>
      <Modal />
      
      <div className="container row pictureWrapper">
      {this.renderPicutres(this.state.pictures)}
      </div>
      <Footer text={this.state.footerText}/>
      </div>
    )
  }

}


// class App extends Component {
//   state = {
//     pictures
//   }

//   removePicture = id => {
//     const filteredPictures = this.state.pictures.filter(picture => picture.id !== id);
//     this.setState({ filteredPictures });
//   }

//   render () {
//     return (

     
//       <Wrapper>
//         <Navbar />
//         <Score />
//         <Title>Click to get points</Title>

//         {this.state.pictures.map(picture => (
//           <PictureCard
//             id={picture.id}
//             key={picture.id}
//             name={picture.name}
//             image={picture.image}
//             removePicture={this.removePicture}
//             />
//         ))}
//         <Footer />
//         </Wrapper>
//     );
//   }}

export default App;
