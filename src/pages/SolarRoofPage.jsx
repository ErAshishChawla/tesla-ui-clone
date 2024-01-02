import StormNight from "/storm-night.png";

import { useState, useEffect } from "react";
import Preview from "../components/Preview";
import Button from "../components/Button";
import CenterContent from "../components/CenterContent";
import Title from "../components/Title";
import Description from "../components/Description";
import ContentGroup from "../components/ContentGroup";
import { TbSolarPanel2 } from "react-icons/tb";

function SolarRoofPage({ elementRef }) {
  const getShowInfo = () => {
    return window.innerWidth >= 1128 ? true : false;
  };

  const [showInfo, setShowInfo] = useState(getShowInfo);
  useEffect(() => {
    const handleResize = () => {
      setShowInfo(getShowInfo);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const info = [
    {
      top: (
        <div className="text-4xl mb-2">
          <TbSolarPanel2 />
        </div>
      ),
      bottom: (
        <div className="text-md text-center">
          Beautiful Solar
          <br />
          Without Compromise
        </div>
      ),
    },
    {
      top: <div className="text-4xl mb-2">25-Year</div>,
      bottom: (
        <div className="text-md text-center">
          Tile <br />
          Warranty
        </div>
      ),
    },
    {
      top: <div className="text-4xl mb-2">24/7</div>,
      bottom: (
        <div className="text-md text-center">
          Outage
          <br />
          Protection
        </div>
      ),
    },
  ];

  const renderedInfo = info.map((item) => {
    return (
      <div
        className="flex flex-col justify-center items-center"
        key={crypto.randomUUID()}
      >
        {item.top}
        {item.bottom}
      </div>
    );
  });

  return (
    <Preview background={StormNight} elementRef={elementRef}>
      <CenterContent>
        <ContentGroup>
          <Title className="mb-2 text-white">Solar Roof</Title>
          <Description className="text-xl text-white font-light text-center">
            Transform your roof and produce clean energy
          </Description>
        </ContentGroup>

        <ContentGroup className="sm:flex-row sm:max-w-[55rem]">
          {showInfo && (
            <div className="flex justify-around items-center grow text-white mr-6">
              {renderedInfo}
            </div>
          )}
          <Button
            rounded
            outline
            light
            className="py-4 text-md uppercase justify-center grow max-w-[25rem]"
          >
            Order Now
          </Button>
        </ContentGroup>
      </CenterContent>
    </Preview>
  );
}

export default SolarRoofPage;
