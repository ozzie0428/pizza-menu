import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <div className='contact'>
              <h1>Store Hours</h1>
              <p>
                  <strong>
                      Sunday-Thursday
                  </strong>
                  " 11:00am to 12:00am | "
                  <strong>
                  Sunday-Thursday
                  </strong>
                  " 11:00am to 1:00am"
              </p>
              <div>
                  <p>
                      <strong>
                          Phone:
                      </strong>
                      "404-555-1234"
                  </p>
                  <p>
                      <strong>
                          Email:
                      </strong>
                      " pizzaheaven@yes.please"
                  </p>
              </div>
            </div>
        )
    }
}
