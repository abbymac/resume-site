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
  <Container id="interests">
    <InnerContainer>
      <h1>Art</h1>
      <p style={{ lineHeight: "1.5em" }}>
        I like drawing/taking pictures in my freetime! Check out some of my
        stuff below.
      </p>

      <div>
        <Gallery photos={images} onClick={openLightbox} />
        <ModalGateway
          style={{ width: "80%", margin: "auto" }}
          className="testing"
          name="TESTINGTHISNOW"
        >
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox} style={{ width: "80%" }}>
              <CarouselImages
                className="thisIsATesterTesting"
                currentIndex={currentImage}
                views={images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                  key: x.id,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </InnerContainer>
  </Container>
);

const Container = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  color: #333333;
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const ImageTile = styled(GridListTile)`
  &:hover {
  }
`;

const ModalContain = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImgContain = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselImages = styled(Carousel)`
  width: 65%;
  > img {
    max-height: 100vh !important;
  }
`;

export default Interests;
