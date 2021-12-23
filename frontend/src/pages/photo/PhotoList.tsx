import { Outlet } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Photo, { PhotoPropsType } from "./Photo";

const GET_PHOTOlIST = gql`
  query {
    getPostList {
      result
      objects {
        id
        title
        contents
        image
        writer
        ctime
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const PhotoListComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;
export default function PhotoList() {
  const { loading, error, data } = useQuery(GET_PHOTOlIST);
  console.log(data);
  return (
    <>
      <Container>
        <Header>
          <Title>Codingj87</Title>
          <Subtitle>🤗</Subtitle>
        </Header>
        {loading && <Loading>Loading...</Loading>}
        {error && <div>Error</div>}
        <PhotoListComponent>
          {data?.getPostList?.objects?.map((photo: PhotoPropsType) => (
            <Photo
              key={photo.id}
              id={photo.id}
              title={photo.title}
              image={photo.image}
            />
          ))}
        </PhotoListComponent>
      </Container>
      <Outlet />
    </>
  );
}
