import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/default/StatusCard";
import Teamwork from "assets/img/teamwork.jpeg";
import ImageCard from "./ImageCard";
import { gql, useQuery } from "@apollo/client";

const GET_POST_lIST = gql`
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

export default function PostSection() {
  const { loading, error, data } = useQuery(GET_POST_lIST);

  console.log(data);

  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="red" icon="stars" title="New Balance">
            Divide details about your product or agency work into parts. A
            paragraph describing a feature will be enough.
          </StatusCard>
          <StatusCard color="lightBlue" icon="autorenew" title="PUMA">
            Keep you user engaged by providing meaningful information. Remember
            that by this time, the user is curious.
          </StatusCard>
          <StatusCard color="teal" icon="fingerprint" title="Nike">
            Write a few lines about each one. A paragraph describing a feature
            will be enough. Keep you user engaged!
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          {/* <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray">Working with us is a pleasure</H4>
            <LeadText color="blueGray">
              Don't let your uses guess by attaching tooltips and popoves to any
              element. Just make sure you enable them first via JavaScript.
            </LeadText>
            <LeadText color="blueGray">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              Just make sure you enable them first via JavaScript.
            </LeadText>
            <a
              href="#pablo"
              className="font-medium text-light-blue-500 mt-2 inline-block"
            >
              Read More
            </a>
          </div> */}
          <ImageCard color="lightBlue" imageUrl="autorenew" title="PUMA">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens.
          </ImageCard>
        </div>
      </div>
    </section>
  );
}
