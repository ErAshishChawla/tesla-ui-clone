import Preview from "../components/Preview";
import Button from "../components/Button";
import CenterContent from "../components/CenterContent";
import Title from "../components/Title";
import Description from "../components/Description";
import ContentGroup from "../components/ContentGroup";
import SolarPanel from "/solar-panel.jpg";

function SolarPanelPage() {
  return (
    <Preview background={SolarPanel}>
      <CenterContent>
        <ContentGroup>
          <Title className="mb-2">Solar Panels</Title>
          <Description className="text-xl font-light text-center">
            Order Online For{" "}
            <span className="underline underline-offset-[5px]">
              Touchless Delivery
            </span>
          </Description>
        </ContentGroup>

        <ContentGroup className="sm:flex-row sm:max-w-[50rem]">
          <Button
            className="w-full mb-4 py-4 text-md uppercase justify-center sm:mr-4 sm:mb-0"
            rounded
            dark
          >
            Custom Order
          </Button>
          <Button
            rounded
            light
            className="w-full py-4 text-md uppercase justify-center"
          >
            Existing Inventory
          </Button>
        </ContentGroup>
      </CenterContent>
    </Preview>
  );
}

export default SolarPanelPage;
