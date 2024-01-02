import { useState, useEffect } from "react";
import Preview from "../components/Preview";
import Button from "../components/Button";
import CenterContent from "../components/CenterContent";
import Title from "../components/Title";
import Description from "../components/Description";
import ContentGroup from "../components/ContentGroup";
import ModelS from "/model-s.jpg";

function ModelSPage() {
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
      top: <div className="text-4xl mb-2">396 mi</div>,
      bottom: <div className="text-md">Range (EPA est.)</div>,
    },
    {
      top: <div className="text-4xl mb-2">1.99 s</div>,
      bottom: <div className="text-md">0-60 mph</div>,
    },
    {
      top: <div className="text-4xl mb-2">200 mph</div>,
      bottom: <div className="text-md">Top Speed</div>,
    },
    {
      top: <div className="text-4xl mb-2">1,020 hp</div>,
      bottom: <div className="text-md">Peak Power</div>,
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
    <Preview background={ModelS}>
      <CenterContent>
        <ContentGroup>
          <Title className="mb-2">Model S</Title>
          <Description className="text-xl font-light text-center">
            Plaid
          </Description>
        </ContentGroup>

        <ContentGroup className="sm:flex-row sm:max-w-[65rem]">
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

export default ModelSPage;
