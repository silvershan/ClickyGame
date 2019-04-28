import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar"



  class App extends Component {
    state = {
      friends,
      clickedFriends: [],
      score: 0
    };
  

    imageClick = event => {
      const currentFriends = event.target.alt;
      const FriendsAlreadyClicked =
        this.state.clickedFriends.indexOf(currentFriends) > -1;
  
  //If click on friend already selected, will reset game
      if (FriendsAlreadyClicked) {
        this.setState({
          friends: this.state.friends.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFriends: [],
          score: 0
        });
          alert("You guessed incorrectly. Play again?");
  
  //If click on friend not yet selected, score increments
      } else {
        this.setState(
          {
            friends: this.state.friends.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedFriends: this.state.clickedFriends.concat(
              currentFriends
            ),
            score: this.state.score + 1
          },
  //If all 12 friends guessed correctly, will display win message      
          () => {
            if (this.state.score === 12) {
              alert("Yay! You Win!");
              this.setState({
                friends: this.state.friends.sort(function(a, b) {
                  return 0.5 - Math.random();
                }),
                clickedFriends: [],
                score: 0
              });
            }
          }
        );
      }
    };
  
  //Renders different components on page
    render() {
      return (
        <div>
          <Navbar
            score={this.state.score}
            topscore={this.state.topscore}
          />
          <Jumbotron />
          <Wrapper />
          <div className="wrapper">
            {this.state.friends.map(friends => (
              <FriendCard
                imageClick={this.imageClick}
                id={friends.id}
                key={friends.id}
                image={friends.image}
              />
            ))}
          </div>
          <Footer />
        </div>
      );
    }
  }
  export default App;