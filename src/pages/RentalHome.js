/*eslint-disable */

import React from 'react'

class RentalHome extends React.Component {
    constructor(){
        super()
        this.state = {
            
            rentals: [{
                _id: "1",
                title: "Nice view on ocean",
                city: "San Francisco",
                category: "condo",
                image: "http://via.placeholder.com/350x250",
                numOfRooms: 4,
                shared: true,
                description: "Ocean looks lovely at this side of the city",
                dailyPrice: 43
              },
              {
                _id: "2",
                title: "Modern apartment in center",
                city: "New York",
                category: "apartment",
                image: "http://via.placeholder.com/350x250",
                numOfRooms: 1,
                shared: false,
                description: "Very nice apartment in center of the city",
                dailyPrice: 11
              },
              {
                _id: "3",
                title: "Old house in nature",
                city: "Bratislava",
                category: "house",
                image: "http://via.placeholder.com/350x250",
                numOfRooms: 5,
                shared: true,
                description: "Old house, nicely located by the ocean",
                dailyPrice: 23
              }]
        }
    }
    render() {
        const { rentals } = this.state

        return  (
            <div className="card-list">
            <div className="container">
              <h1 className="page-title">Your Home All Around the World</h1>
              <div className="row">
                  { // begin JS

                      rentals.map((rental) => {
                          return(
                            <div key={rental._id} className="col-md-3">
                            <div className="card bwm-card">
                                <img className="card-img-top" src={rental.image} alt={rental.title} />
                                <div className="card-body">
                                <h6 className="card-subtitle mb-0 text-muted">
                                {rental.shared ? 'Shared ':'Whole '}{rental.category} &#183; {rental.city}
                                </h6>
                          <h5 className="card-title big-font">{rental.description}</h5>
                                <p className="card-text">{rental.dailyPrice} &#183; Free Cancelation</p>
                                </div>
                            </div>
                            </div>
                          )
                      })
                  }
                
              </div>
            </div>
          </div>
        )
    }

}
export default RentalHome;