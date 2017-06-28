import React from 'react'
import NavB from './Nav.jsx'
import Listings from './Listings.jsx'
import SelectedListing from './SelectedListing.jsx'
import Signup from './Signup.jsx'
import Booking from './Booking.jsx'
var $ = require('jquery');

class App extends React.Component {
	constructor (props) {
		super(props);
    this.state = {
    	currentRender: 'landing',
      listings: [],
      listing: {}
      // dummydata
      currentUser: {
      	id: 3,
      	username: 'Shihao',
      }
    };
	}

	currentRender() {
		var render = this.state.currentRender;
		if (render === 'landing') {
			return <Listings 
				onListingClick={this.handleSelectListing.bind(this)} 
				onBookingClick={this.handleBookingClick.bind(this)}
				listings={this.state.listings}
			/>;
		} else if (render === 'selectedListing') {
			return <SelectedListing 
				onBackClick={this.handleBackClick.bind(this)} 
				onBookingClick={this.handleBookingClick.bind(this)}
				listing={this.state.listing}
			/>;
		} else if (render === 'booking') {
			return <Booking 
				listing={this.state.listing}
				onBackClick={this.handleBackClick.bind(this)} 
			/>
		}
	}

	handleSelectListing(listing) {
		console.log('button clicked!', listing);
		this.setState({
			listing: listing,
			currentRender: 'selectedListing'
		});
	}

	handleBackClick() {
		this.setState({
			currentRender: 'landing'
		})
	}

	handleBookingClick(listing) {
		this.setState({
			listing: listing,
			currentRender: 'booking'
		})
	}

	handleConfirmBooking(listing) {
		// send ajax post request to the server
			// if successful, 
				// render button to say 'Booked!' on booking page
				// pop-up alert to the user
	}

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/listings',
      success: (data) => {
        this.setState({
          listings: JSON.parse(data)
        })
      },
      error: (err) => {
        console.log('failed', err);
      }

    });
  }

	render () {
		return (
			  <div>
			    <NavB/>
			    {this.currentRender()}
			    <Signup />
			  </div>
		)
	}
}

export default App
