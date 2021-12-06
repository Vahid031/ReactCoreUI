import {
    // CCard,
    // CCardBody,
    // CCarousel,
    // CCarouselControl,
    // CCarouselInner,
    // CCarouselItem,
    CCol,
    CRow
  } from '@coreui/react'
import React, { Component } from 'react'
// import { Image } from 'react-bootstrap'
import Test from 'src/components/Form/Test'

export default class Album extends Component {
constructor(){
    super()

this.state = {
    Images :[
    {
        src : "https://images.freeimages.com/images/large-previews/f37/cloudy-scotland-1392088.jpg"
    },
    {
        src:"https://images.freeimages.com/images/large-previews/429/the-glens-1354741.jpg"
    },
    {
        src:"https://images.freeimages.com/images/large-previews/615/corcovado-sunset-1527899.jpg"
    }
]}
}
    

    render() {
        return (
            <CRow>
            {/* <CCol sm="6">

            <CCard>
                <CCardBody>
                    <CCarousel>
              <CCarouselInner>
                  {this.state.Images.map(item =>(

                <CCarouselItem>
                    <Image src={item.src}  fluid />
                </CCarouselItem>
                  ))}
            
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
                </CCardBody>
            </CCard>

            </CCol> */}
            <CCol >
                <Test />
            </CCol>
            </CRow>
        )
    }
}
