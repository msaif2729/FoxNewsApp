import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className=' w-full h-[90%] py-40 flex justify-center items-center'>
        <div className=' w-14 h-14 bg-gray-100 animate-spin md:w-20 md:h-20  border-8 border-t-black border-r-gray-300 border-l-gray-300 border-b-gray-300 rounded-full '> 

        </div>
      </div>
    )
  }
}

export default Spinner