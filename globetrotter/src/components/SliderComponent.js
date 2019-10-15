import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer  } from
"mdbreact";
import styled from 'styled-components';

const SliderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 91.5vh;
`;

const SliderText = styled.p`
  position: absolute;
  top: 90%;
  left: 75vw;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  font-family: "Roboto", sans-serif;
`;


const CarouselComponent = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={6}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/lagos.jpg"
                alt="Lagos"
              />
              <SliderText>Lagos, Nigeria</SliderText>
          </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/boston.jpg"
                alt="Boston"
              />
              <SliderText>Boston, USA</SliderText>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/sydney.jpg"
                alt="Sydney"
              />
              <SliderText>Sydney, Australia</SliderText>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/havana.jpg"
                alt="Havana"
              />
              <SliderText>Havana, Cuba</SliderText>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/dublin.jpg"
                alt="Dublin"
              />
              <SliderText>Dublin, Ireland</SliderText>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <SliderImage
                className="d-block w-100"
                src="/images/seoul.jpg"
                alt="Seoul"
              />
              <SliderText>Seoul, South Korea</SliderText>
            </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselComponent;