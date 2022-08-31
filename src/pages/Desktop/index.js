import React from "react";

import { useNavigate } from "react-router-dom";
import { get } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuyPopupModal from "modals/BuyPopup";
import { Column, Row, Img, Text, Line, Grid, Button } from "components";

const DesktopPage = () => {
  const [apiData4, setapiData4] = React.useState();
  const [isin, setIsin] = React.useState();
  const navigate = useNavigate();
  const [isOpenBuyPopupModal, setBuyPopupModal] = React.useState(false);
  React.useEffect(() => {
    callApi4();
  }, []);

  function callApi4() {
    const req = { params: { limit: "12" } };

    get(req)
      .then((res) => {
        setapiData4(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happend at the server side.");
      });
  }
  function handleNavigate7() {
    navigate("/accountdetails");
  }
  function handleNavigate8() {
    navigate("/orderdetails");
  }
  function handleOpenBuyPopupModal(isin) {
    setIsin(isin);
    setBuyPopupModal(true);
  }
  function handleCloseBuyPopupModal() {
    setBuyPopupModal(false);
  }

  return (
    <>
      <Column
        className="bg-black_900 font-spacegrotesk items-center justify-end mx-[auto] lg:pt-[23px] xl:pt-[26px] 2xl:pt-[30px] 3xl:pt-[36px] w-[100%]"
        compid="4:4945"
        comptype="Column"
      >
        <Column className="w-[88%]" compid="31" comptype="Column">
          <header className="w-[100%]" compid="5" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4:4946"
              comptype="Row"
            >
              <Img
                src="images/img_television.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                compid="4:4957"
                comptype="Image"
                alt="television"
              />
              <Column className="w-[32%]" comptype="Column">
                <Text
                  className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                  compid="4:4955"
                  comptype="Text"
                >
                  Investie
                </Text>
                <Text
                  className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[13px] xl:text-[13px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                  comptype="Text"
                >
                  Made with ❤️ using DhiWise
                </Text>
              </Column>
              <Column
                className="items-center 2xl:ml-[324px] 3xl:ml-[389px] w-[6%]"
                compid="4:4950"
                comptype="Column"
              >
                <Text
                  className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                  compid="4:4951"
                  comptype="Text"
                >
                  Desktop
                </Text>
                <Line
                  className="bg-cyan_400 h-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]"
                  compid="4:4952"
                  comptype="Line"
                />
              </Column>
              <Text
                className="common-pointer font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                compid="4:4948"
                comptype="Text"
                onClick={handleNavigate7}
              >
                Account Details
              </Text>
              <Text
                className="common-pointer font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                compid="4:4949"
                comptype="Text"
                onClick={handleNavigate8}
              >
                Order Details
              </Text>
              <Img
                src="images/img_profileimglarg.png"
                className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[261px] xl:ml-[298px] 2xl:ml-[336px] 3xl:ml-[403px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="I4:4953;139:669"
                comptype="CircleImage"
                alt="ProfileImgLarg"
              />
            </Row>
          </header>
          <Text
            className="font-medium ml-[2px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_50 w-[auto]"
            compid="4:4964"
            comptype="Text"
          >
            Stocks
          </Text>
          <Grid
            className="lg:gap-[21px] xl:gap-[24px] gap-[28px] 3xl:gap-[33px] grid grid-cols-4 lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[100%]"
            compid="32"
            comptype="Grid"
          >
            {apiData4?.results?.map((apiData4ResultsEle, index) => {
              return (
                <React.Fragment key={`apiData4ResultsEle${index}`}>
                  <Column
                    className="bg-gray_901 lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius12 w-[100%]"
                    compid="4:4966"
                    comptype="Column"
                  >
                    <Row
                      className="items-center mr-[auto] mt-[2px] w-[100%]"
                      compid="4:4969"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[25%]"
                        compid="4:4970"
                        comptype="Text"
                      >
                        Name :
                      </Text>
                      <Text
                        className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:4971"
                        comptype="Text"
                      >
                        {apiData4ResultsEle?.name}
                      </Text>
                    </Row>
                    <Row
                      className="items-center mr-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                      compid="4:4972"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[25%]"
                        compid="4:4973"
                        comptype="Text"
                      >
                        Title :
                      </Text>
                      <Text
                        className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:4974"
                        comptype="Text"
                      >
                        {apiData4ResultsEle?.title}
                      </Text>
                    </Row>
                    <Row
                      className="items-center mr-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                      compid="4:4975"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:4976"
                        comptype="Text"
                      >
                        ISIN Number :
                      </Text>
                      <Text
                        className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:4977"
                        comptype="Text"
                      >
                        {apiData4ResultsEle?.isin}
                      </Text>
                    </Row>
                    <Row
                      className="mr-[auto] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[39%]"
                      compid="4:4978"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:4979"
                        comptype="Text"
                      >
                        Type :
                      </Text>
                      <Text
                        className="font-medium mb-[2px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:4980"
                        comptype="Text"
                      >
                        {apiData4ResultsEle?.type}
                      </Text>
                    </Row>
                    <Row
                      className="items-end lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]"
                      compid="16"
                      comptype="Row"
                    >
                      <Column
                        className="w-[68%]"
                        compid="4:4981"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_50 w-[auto]"
                          compid="4:5000"
                          comptype="Text"
                        >
                          Venue Details
                        </Text>
                        {apiData4ResultsEle?.venues?.map((venueDetail) => {
                          return (
                            <div>
                              <Row
                                className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]"
                                compid="4:4982"
                                comptype="Row"
                              >
                                <Text
                                  className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[100%]"
                                  compid="4:4983"
                                  comptype="Text"
                                >
                                  Name :
                                </Text>
                                <Text
                                  className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[100%]"
                                  compid="4:4984"
                                  comptype="Text"
                                >
                                  {venueDetail?.name}
                                </Text>
                              </Row>
                              <Row
                                className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                                compid="4:4985"
                                comptype="Row"
                              >
                                <Text
                                  className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                                  compid="4:4987"
                                  comptype="Text"
                                >
                                  Title :
                                </Text>
                                <Text
                                  className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                                  compid="4:4986"
                                  comptype="Text"
                                >
                                  {venueDetail?.title}
                                </Text>
                              </Row>
                              <Row
                                className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[54%]"
                                compid="4:4988"
                                comptype="Row"
                              >
                                <Text
                                  className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                                  compid="4:4990"
                                  comptype="Text"
                                >
                                  Mic :
                                </Text>
                                <Text
                                  className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                                  compid="4:4989"
                                  comptype="Text"
                                >
                                  {venueDetail?.mic}
                                </Text>
                              </Row>
                              <Row
                                className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[57%]"
                                compid="4:4994"
                                comptype="Row"
                              >
                                <Text
                                  className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                                  compid="4:4996"
                                  comptype="Text"
                                >
                                  Is Open :
                                </Text>
                                {venueDetail?.is_open ? (
                                  <Text
                                    className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_300 w-[auto]"
                                    compid="4:4995"
                                    comptype="Text"
                                  >
                                    Yes
                                  </Text>
                                ) : (
                                  <Text
                                    className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red-500 w-[auto]"
                                    compid="4:4995"
                                    comptype="Text"
                                  >
                                    No
                                  </Text>
                                )}
                              </Row>
                              <Row
                                className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[69%]"
                                compid="4:4997"
                                comptype="Row"
                              >
                                <Text
                                  className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                                  compid="4:4999"
                                  comptype="Text"
                                >
                                  Tradeable :
                                </Text>
                                {venueDetail?.tradable ? (
                                  <Text
                                    className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_300 w-[auto]"
                                    compid="4:4998"
                                    comptype="Text"
                                  >
                                    Yes
                                  </Text>
                                ) : (
                                  <Text
                                    className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red-500 w-[auto]"
                                    compid="4:4995"
                                    comptype="Text"
                                  >
                                    No
                                  </Text>
                                )}
                              </Row>
                              <Row
                                className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[69%]"
                                compid="4:4991"
                                comptype="Row"
                              >
                                <Text
                                  className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                                  compid="4:4993"
                                  comptype="Text"
                                >
                                  Currency :
                                </Text>
                                <Text
                                  className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                                  compid="4:4992"
                                  comptype="Text"
                                >
                                  {venueDetail?.currency}
                                </Text>
                              </Row>{" "}
                            </div>
                          );
                        })}
                      </Column>
                      <Button
                        className="common-pointer font-medium lg:mt-[152px] xl:mt-[174px] 2xl:mt-[196px] 3xl:mt-[235px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[32%]"
                        compid="4:5001"
                        comptype="Button"
                        onClick={() =>
                          handleOpenBuyPopupModal(apiData4ResultsEle?.isin)
                        }
                      >
                        Buy now
                      </Button>
                    </Row>
                  </Column>
                </React.Fragment>
              );
            })}
          </Grid>
        </Column>
        <footer
          className="bg-gray_900 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]"
          compid="4:5270"
          comptype="Footer"
        >
          <Row
            className="justify-center mx-[auto] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] w-[73%]"
            compid="4:5272"
            comptype="Row"
          >
            <Column className="w-[38%]" compid="4:5289" comptype="Column">
              <Row
                className="items-center w-[65%]"
                compid="4:5290"
                comptype="Row"
              >
                <Img
                  src="images/img_television.svg"
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  compid="4:5293"
                  comptype="Image"
                  alt="television One"
                />
                <Column className="w-[100%]" comptype="Column">
                  <Text
                    className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                    compid="4:5291"
                    comptype="Text"
                  >
                    Investie
                  </Text>
                  <Text
                    className="common-pointer font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[13px] xl:text-[13px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                    comptype="Text"
                  >
                    Made with ❤️ using DhiWise
                  </Text>
                </Column>
              </Row>
              <Text
                className="font-normal ml-[2px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_50 w-[auto]"
                compid="4:5311"
                comptype="Text"
              >
                Connect on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-[3px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[29%]"
                compid="4:5300"
                comptype="Image"
                alt="GroupNinetyFour"
              />
              <Text
                className="font-normal lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_200 w-[auto]"
                compid="4:5312"
                comptype="Text"
              >
                2022 Investie all rights reserved
              </Text>
            </Column>
            <Column
              className="mt-[4px] w-[25%]"
              compid="4:5273"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5274"
                comptype="Text"
              >
                Company
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5275"
                comptype="Text"
              >
                About
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5276"
                comptype="Text"
              >
                Careers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5277"
                comptype="Text"
              >
                Writers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5278"
                comptype="Text"
              >
                Blog
              </Text>
            </Column>
            <Column
              className="mt-[2px] w-[25%]"
              compid="4:5279"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5280"
                comptype="Text"
              >
                Contact
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5281"
                comptype="Text"
              >
                Advertise
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5282"
                comptype="Text"
              >
                Market
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5283"
                comptype="Text"
              >
                News letter
              </Text>
            </Column>
            <Column
              className="mt-[4px] w-[12%]"
              compid="4:5284"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5285"
                comptype="Text"
              >
                Help
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5286"
                comptype="Text"
              >
                FAQs
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5287"
                comptype="Text"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5288"
                comptype="Text"
              >
                Privacy Policy
              </Text>
            </Column>
          </Row>
        </footer>
      </Column>

      <ToastContainer />
      {isOpenBuyPopupModal ? (
        <BuyPopupModal
          isin={isin}
          isOpen={isOpenBuyPopupModal}
          onRequestClose={handleCloseBuyPopupModal}
        />
      ) : null}
    </>
  );
};

export default DesktopPage;
