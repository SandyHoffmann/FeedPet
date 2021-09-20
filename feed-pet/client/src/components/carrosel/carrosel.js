import React, { Component } from 'react'
 
import { Carousel } from 'react-circular-carousel'
import MediaCard from '../Card/Card'
 
export class Example extends Component {
  render() {
    return (
      <Carousel height={25} width={25} id={0} >
        <MediaCard 
        style= {{
            height: '500%',
            width: '500%'
        }}
        
        />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        
      </Carousel>
    )
  }
}

