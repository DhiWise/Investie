import React from "react";

import { useNavigate } from "react-router-dom";
import { get1 } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Column, Row, Img, Text, Line, Input } from "components";

const AccountDetailsPage = () => {
  const [apiData3, setapiData3] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi3();
  }, []);

  function callApi3() {
    const req = {};

    get1(req)
      .then((res) => {
        setapiData3(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happend!");
      });
  }
  function handleNavigate2() {
    navigate("/");
  }
  function handleNavigate5() {
    navigate("/orderdetails");
  }
  function handleNavigate6() {
    navigate("/");
  }

  return (
    <>
      <Column
        className="bg-black_900 font-spacegrotesk items-center justify-end mx-[auto] lg:pt-[23px] xl:pt-[26px] 2xl:pt-[30px] 3xl:pt-[36px] w-[100%]"
        compid="4:5313"
        comptype="Column"
      >
        <header className="w-[88%]" compid="2" comptype="Header">
          <Row className="items-center w-[100%]" compid="4:5314" comptype="Row">
            <Img
              src="images/img_television.svg"
              className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              compid="4:5325"
              comptype="Image"
              alt="television"
            />
            <Column className="w-[32%]" comptype="Column">
              <Text
                className="common-pointer font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                compid="4:5323"
                comptype="Text"
                onClick={handleNavigate2}
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
            <Text
              className="common-pointer font-medium 2xl:ml-[323px] 3xl:ml-[387px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
              compid="4:5317"
              comptype="Text"
              onClick={handleNavigate6}
            >
              Desktop
            </Text>
            <Column
              className="items-center lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[11%]"
              compid="4:5318"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                compid="4:5319"
                comptype="Text"
              >
                Account Details
              </Text>
              <Line
                className="bg-cyan_400 h-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                compid="4:5320"
                comptype="Line"
              />
            </Column>
            <Text
              className="common-pointer font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
              compid="4:5316"
              comptype="Text"
              onClick={handleNavigate5}
            >
              Order Details
            </Text>
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[261px] xl:ml-[298px] 2xl:ml-[336px] 3xl:ml-[403px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
              compid="I4:5321;139:669"
              comptype="CircleImage"
              alt="ProfileImgLarg"
            />
          </Row>
        </header>
        <Column
          className="lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[38%]"
          compid="15"
          comptype="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compid="9"
            comptype="Row"
          >
            <Column className="w-[49%]" compid="4:5376" comptype="Column">
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                compid="4:5377"
                comptype="Text"
              >
                First Name
              </Text>
              <Input
                value={apiData3?.results?.firstname}
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
                compid="4:5378"
                comptype="EditText"
                name="Group10198"
                placeholder="Jenny"
                disabled
              ></Input>
            </Column>
            <Column className="w-[49%]" compid="4:5381" comptype="Column">
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                compid="4:5382"
                comptype="Text"
              >
                Last Name
              </Text>
              <Input
                value={apiData3?.results?.lastname}
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
                compid="4:5383"
                comptype="EditText"
                name="Group10198 One"
                placeholder="Wilson"
                disabled
              ></Input>
            </Column>
          </Row>
          <Text
            className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
            compid="4:5387"
            comptype="Text"
          >
            Email
          </Text>
          <Input
            value={apiData3?.results?.email}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
            compid="4:5388"
            type="email"
            comptype="EditText"
            name="email"
            placeholder="jenny@gmail.com"
            disabled
          ></Input>
          <Text
            className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
            compid="4:5392"
            comptype="Text"
          >
            Phone number
          </Text>
          <Input
            value={apiData3?.results?.phone}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
            compid="4:5393"
            comptype="EditText"
            name="Group10198 Two"
            placeholder="+1 432 2322 333"
            disabled
          ></Input>
          <Text
            className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
            compid="4:5397"
            comptype="Text"
          >
            Mode
          </Text>
          <Input
            value={apiData3?.mode}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
            compid="4:5398"
            comptype="EditText"
            name="Group10198 Three"
            placeholder="Mode"
            disabled
          ></Input>
          <Text
            className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
            compid="4:5402"
            comptype="Text"
          >
            Balance
          </Text>
          <Input
            value={apiData3?.results?.balance.toLocaleString("en", {
              style: "currency",
              currency: "EUR",
            })}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
            compid="4:5403"
            comptype="EditText"
            name="price"
            placeholder="$43443"
            disabled
          ></Input>
          <Text
            className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
            compid="4:5407"
            comptype="Text"
          >
            Cash to invest
          </Text>
          <Input
            value={apiData3?.results?.["cash_to_invest"].toLocaleString("en", {
              style: "currency",
              currency: "EUR",
            })}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
            compid="4:5408"
            comptype="EditText"
            name="price One"
            placeholder="$43443"
            disabled
          ></Input>
          <Text
            className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
            compid="4:5412"
            comptype="Text"
          >
            Amount bought intraday
          </Text>
          <Input
            value={apiData3?.results?.["amount_bought_intraday"].toLocaleString(
              "en",
              {
                style: "currency",
                currency: "EUR",
              }
            )}
            className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
            wrapClassName="2xl:mt-[7px] 3xl:mt-[8px] lg:mt-[5px] w-[100%] xl:mt-[6px]"
            compid="4:5413"
            comptype="EditText"
            name="price Two"
            placeholder="$43443"
            disabled
          ></Input>
        </Column>
        <footer
          className="bg-gray_900 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]"
          compid="4:5331"
          comptype="Footer"
        >
          <Row
            className="justify-center mx-[auto] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] w-[73%]"
            compid="4:5333"
            comptype="Row"
          >
            <Column className="w-[38%]" compid="4:5350" comptype="Column">
              <Row
                className="items-center w-[65%]"
                compid="4:5351"
                comptype="Row"
              >
                <Img
                  src="images/img_television.svg"
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  compid="4:5354"
                  comptype="Image"
                  alt="television One"
                />
                <Column className="w-[100%]" comptype="Column">
                  <Text
                    className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                    compid="4:5352"
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
                compid="4:5372"
                comptype="Text"
              >
                Connect on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-[3px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[29%]"
                compid="4:5361"
                comptype="Image"
                alt="GroupNinetyFour"
              />
              <Text
                className="font-normal lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_200 w-[auto]"
                compid="4:5373"
                comptype="Text"
              >
                2022 Investie all rights reserved
              </Text>
            </Column>
            <Column
              className="mt-[4px] w-[25%]"
              compid="4:5334"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5335"
                comptype="Text"
              >
                Company
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5336"
                comptype="Text"
              >
                About
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5337"
                comptype="Text"
              >
                Careers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5338"
                comptype="Text"
              >
                Writers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5339"
                comptype="Text"
              >
                Blog
              </Text>
            </Column>
            <Column
              className="mt-[2px] w-[25%]"
              compid="4:5340"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5341"
                comptype="Text"
              >
                Contact
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5342"
                comptype="Text"
              >
                Advertise
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5343"
                comptype="Text"
              >
                Market
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5344"
                comptype="Text"
              >
                News letter
              </Text>
            </Column>
            <Column
              className="mt-[4px] w-[12%]"
              compid="4:5345"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5346"
                comptype="Text"
              >
                Help
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5347"
                comptype="Text"
              >
                FAQs
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5348"
                comptype="Text"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5349"
                comptype="Text"
              >
                Privacy Policy
              </Text>
            </Column>
          </Row>
        </footer>
      </Column>

      <ToastContainer />
    </>
  );
};

export default AccountDetailsPage;
