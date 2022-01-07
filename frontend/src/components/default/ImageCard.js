import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import CardImage from "@material-tailwind/react/CardImage";
import Teamwork from "assets/img/teamwork.jpeg";

const colors = {
  blueGray: "bg-blue-gray-500",
  gray: "bg-gray-500",
  brown: "bg-brown-500",
  deepOrange: "bg-deep-orange-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-600",
  lime: "bg-lime-500",
  lightGreen: "bg-light-green-500",
  green: "bg-green-500",
  teal: "bg-teal-500",
  cyan: "bg-cyan-500",
  lightBlue: "bg-light-blue-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  deepPurple: "bg-deep-purple-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  red: "bg-red-500",
};

export default function ImageCard({ color, imageUrl, title, children }) {
  return (
    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
      <Card>
        <CardImage alt="Card Image" src={Teamwork} />
        <CardBody>
          <H6 color={color}>{title}</H6>
          <Paragraph color="blueGray">{children}</Paragraph>
        </CardBody>
      </Card>
    </div>
  );
}