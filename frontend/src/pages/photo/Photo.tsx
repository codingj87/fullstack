import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
`;

const Poster = styled.div`
  background-image: url(${(props: { bg: string }) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export type PhotoPropsType = { id: string; title: string; image: string };

function Photo({ id, title, image }: PhotoPropsType) {
  return (
    <>
      <Container>
        <Link to={`/photoList/${id}`}>
          <Poster bg={image} />
        </Link>
      </Container>
    </>
  );
}

export default Photo;
