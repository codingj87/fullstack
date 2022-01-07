import React from "react";
import H2 from "@material-tailwind/react/Heading2";
import LeadText from "@material-tailwind/react/LeadText";

const Header = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <H2 color="white">What is your favorite Shoes?</H2>
            <div className="text-gray-200">
              <LeadText color="gray-200">
                "For God so loved the world that he gave his one and only Son,
                that whoever believes in him shall not perish but have eternal
                life." - John 3:16
              </LeadText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
