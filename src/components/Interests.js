import React from "react";
import styled from "styled-components";
import GridListTile from "@material-ui/core/GridListTile";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Interests = ({
  images,
  openLightbox,
  closeLightbox,
  currentImage,
  viewerIsOpen,
}) => (
  <Container id="interests" viewerIsOpen={viewerIsOpen}>
    <InnerContainer>
      <h1>Art</h1>
      <Text>
        I like to draw in my freetime! Check out some of my stuff below.
      </Text>

      <div>
        <Gallery photos={images} onClick={openLightbox} />
        <ModalContain>
          {viewerIsOpen ? (
            <Modals onClose={closeLightbox}>
              <CarouselImages
                currentIndex={currentImage}
                style={{ width: "80% !important" }}
                views={images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                  key: x.id,
                }))}
                frameProps={{ autoSize: "height" }}
              />
            </Modals>
          ) : null}
        </ModalContain>
      </div>
    </InnerContainer>
  </Container>
);

const Text = styled.p`
  line-height: 1.5em;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    margin: 0 0 20px 0;
    line-height: 1em;
  }
`;

const Container = styled.div`
  width: ${(props) => (props.viewerIsOpen ? "80%" : "100%")};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #333333;
  @media (max-width: 600px) {
    padding: 20px 0;
  }
`;

const Modals = styled(Modal)`
  &.react-images__view {
    max-width: 60%;
    margin: auto;
  }
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const ModalContain = styled(ModalGateway)`
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: center;
  align-items: center;
`;

const CarouselImages = styled(Carousel)`
  width: 65%;
  > img {
    max-height: 100vh !important;
  }
  frameProps= {
     {
      autosize: "height";
    }
  }
`;

export default Interests;
