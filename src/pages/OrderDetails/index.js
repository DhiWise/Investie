import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getOrders } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Line,
  SelectBox,
  List,
} from "components";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";
import { PieData, COLORS } from "./chartData.js";
import _ from "lodash";

const OrderDetailsPage = () => {
  const [apiData, setapiData] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = { params: { status: "executed,inactive" } };

    getOrders(req)
      .then((res) => {
        setapiData(res);

        toast.success("Success");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happend");
      });
  }
  function handleNavigate1() {
    navigate("/");
  }
  function handleNavigate3() {
    navigate("/");
  }
  function handleNavigate4() {
    navigate("/accountdetails");
  }

  const dates = apiData?.results?.map((data) => {
    return {
      ...data,
      created_at: moment(data?.created_at).format("MMMM"),
    };
  });

  const groupByDate = _.groupBy(dates, "created_at");

  const PieData = [
    { name: "January", c0: 10 },
    { name: "February", c0: 15 },
    { name: "March", c0: 30 },
    {
      name: "April",
      c0: _.sumBy(groupByDate["April"], "quantity"),
    },
    { name: "May", c0: _.sumBy(groupByDate["May"], "quantity") },
    { name: "June", c0: _.sumBy(groupByDate["June"], "quantity") },
    { name: "July", c0: _.sumBy(groupByDate["July"], "quantity") },
    {
      name: "August",
      c0: _.sumBy(groupByDate["August"], "quantity"),
    },
    {
      name: "September",
      c0: _.sumBy(groupByDate["September"], "quantity"),
    },
    {
      name: "October",
      c0: _.sumBy(groupByDate["October"], "quantity"),
    },
    {
      name: "November",
      c0: _.sumBy(groupByDate["November"], "quantity"),
    },
    {
      name: "December",
      c0: _.sumBy(groupByDate["December"], "quantity"),
    },
  ];

  return (
    <>
      <Column
        className="bg-black_900 font-spacegrotesk items-center justify-end mx-[auto] lg:pt-[23px] xl:pt-[26px] 2xl:pt-[30px] 3xl:pt-[36px] w-[100%]"
        compid="4:5416"
        comptype="Column"
      >
        <Column className="w-[88%]" compid="43" comptype="Column">
          <header className="w-[100%]" compid="6" comptype="Header">
            <Row
              className="items-center w-[100%]"
              compid="4:5417"
              comptype="Row"
            >
              <Img
                src="images/img_television.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                compid="4:5428"
                comptype="Image"
                alt="television"
              />
              <Column className="w-[32%]" comptype="Column">
                <Text
                  className="common-pointer font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                  compid="4:5426"
                  comptype="Text"
                  onClick={handleNavigate1}
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
                compid="4:5420"
                comptype="Text"
                onClick={handleNavigate3}
              >
                Desktop
              </Text>
              <Stack
                className="lg:h-[23px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[30%]"
                compid="34"
                comptype="Stack"
              >
                <Text
                  className="absolute font-medium right-[75px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 top-[0] w-[auto]"
                  compid="4:5419"
                  comptype="Text"
                >
                  Order Details
                </Text>
                <Column
                  className="absolute top-[3%] w-[100%]"
                  compid="4:5421"
                  comptype="Column"
                >
                  <Text
                    className="common-pointer font-medium lg:mr-[104px] xl:mr-[119px] 2xl:mr-[134px] 3xl:mr-[160px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]"
                    compid="4:5422"
                    comptype="Text"
                    onClick={handleNavigate4}
                  >
                    Account Details
                  </Text>
                  <Line
                    className="bg-cyan_400 h-[2px] lg:ml-[135px] xl:ml-[135px] ml-[160px] 3xl:ml-[192px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[41%]"
                    compid="4:5423"
                    comptype="Line"
                  />
                </Column>
              </Stack>
              <Img
                src="images/img_profileimglarg.png"
                className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[261px] xl:ml-[298px] 2xl:ml-[336px] 3xl:ml-[403px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                compid="I4:5424;139:669"
                comptype="CircleImage"
                alt="ProfileImgLarg"
              />
            </Row>
          </header>
          <Text
            className="font-medium lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_50 w-[auto]"
            compid="4:5478"
            comptype="Text"
          >
            Order Details
          </Text>
          <Column
            className="bg-gray_901 font-opensans items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] rounded-radius12 w-[100%]"
            compid="4:5479"
            comptype="Column"
          >
            <Row
              className="items-center justify-between mt-[2px] w-[99%]"
              compid="38"
              comptype="Row"
            >
              <Text
                className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5482"
                comptype="Text"
              >
                Orders
              </Text>
              <Text
                className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                comptype="Text"
              >
                Numbers is Quantity of ordered stock.
              </Text>
            </Row>
            <div className="bg-cover bg-repeat lg:h-[200px] xl:h-[229px] h-[257px] 2xl:h-[258px] 3xl:h-[309px] 3xl:p-[49px] lg:w-[199px] xl:w-[100%] w-[257px] 3xl:w-[308px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={PieData} dataKey="c0" nameKey="name" label>
                    {PieData.map((_, index) => (
                      <Cell
                        key={"cell_" + index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <RechartsLegend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Column>
          <Text
            className="font-medium 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_50 w-[auto]"
            compid="4:5506"
            comptype="Text"
          >
            Purchased Stock
          </Text>
          <List
            className="font-spacegrotesk lg:gap-[21px] xl:gap-[24px] 2xl:gap-[28px] 3xl:gap-[33px] grid grid-cols-4 min-h-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
            compid="4:5507"
            comptype="List"
            orientation="horizontal"
          >
            {apiData?.results?.map((apiDataResultsEle, index) => {
              return (
                <React.Fragment key={`apiDataResultsEle${index}`}>
                  <Column
                    className="bg-gray_901 justify-end lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius12 w-[100%]"
                    compid="4:5508"
                    comptype="Column"
                  >
                    <Row
                      className="items-center mr-[auto] mt-[2px] w-[100%]"
                      compid="4:5517"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5519"
                        comptype="Text"
                      >
                        ISIN Number :
                      </Text>
                      <Text
                        className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5518"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.isin}
                      </Text>
                    </Row>
                    <Row
                      className="items-center mr-[auto] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
                      compid="4:5511"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5512"
                        comptype="Text"
                      >
                        Title :
                      </Text>
                      <Text
                        className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5513"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.["isin_title"]}
                      </Text>
                    </Row>
                    <Row
                      className="mr-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                      compid="4:5514"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5515"
                        comptype="Text"
                      >
                        Quantity :
                      </Text>
                      <Text
                        className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5516"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.quantity}
                      </Text>
                    </Row>
                    <Row
                      className="mr-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                      compid="4:5520"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5522"
                        comptype="Text"
                      >
                        Estimated Price :
                      </Text>
                      <Text
                        className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5521"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.["estimated_price"].toLocaleString(
                          "en",
                          {
                            style: "currency",
                            currency: "EUR",
                          }
                        )}
                      </Text>
                    </Row>
                    <Row
                      className="items-center mr-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                      compid="4:5523"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5525"
                        comptype="Text"
                      >
                        Total Price :
                      </Text>
                      <Text
                        className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5524"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.[
                          "estimated_price_total"
                        ].toLocaleString("en", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </Text>
                    </Row>
                    <Row
                      className="items-center mr-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                      compid="4:5526"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5528"
                        comptype="Text"
                      >
                        Venue :
                      </Text>
                      <Text
                        className="font-medium mb-[1px] ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5527"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.venue}
                      </Text>
                    </Row>
                    <Row
                      className="items-center mr-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                      compid="4:5529"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5531"
                        comptype="Text"
                      >
                        Status :
                      </Text>
                      <Text
                        className="font-medium ml-[4px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5530"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.status}
                      </Text>
                    </Row>
                    <Row
                      className="mr-[auto] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]"
                      compid="4:5532"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5534"
                        comptype="Text"
                      >
                        Executed Price :
                      </Text>
                      <Text
                        className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5533"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.["executed_price"].toLocaleString(
                          "en",
                          {
                            style: "currency",
                            currency: "EUR",
                          }
                        )}
                      </Text>
                    </Row>
                    <Row
                      className="mr-[auto] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                      compid="4:5535"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5537"
                        comptype="Text"
                      >
                        Total Executed Price :
                      </Text>
                      <Text
                        className="font-medium ml-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                        compid="4:5536"
                        comptype="Text"
                      >
                        {apiDataResultsEle?.[
                          "executed_price_total"
                        ].toLocaleString("en", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </Text>
                    </Row>
                  </Column>
                </React.Fragment>
              );
            })}
          </List>
        </Column>
        <footer
          className="bg-gray_900 xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] w-[100%]"
          compid="4:5434"
          comptype="Footer"
        >
          <Row
            className="justify-center mx-[auto] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] w-[73%]"
            compid="4:5436"
            comptype="Row"
          >
            <Column className="w-[38%]" compid="4:5453" comptype="Column">
              <Row
                className="items-center w-[65%]"
                compid="4:5454"
                comptype="Row"
              >
                <Img
                  src="images/img_television.svg"
                  className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                  compid="4:5457"
                  comptype="Image"
                  alt="television One"
                />
                <Column className="w-[100%]" comptype="Column">
                  <Text
                    className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
                    compid="4:5455"
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
                compid="4:5475"
                comptype="Text"
              >
                Connect on
              </Text>
              <Img
                src="images/img_group94.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] ml-[3px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[29%]"
                compid="4:5464"
                comptype="Image"
                alt="GroupNinetyFour"
              />
              <Text
                className="font-normal lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_200 w-[auto]"
                compid="4:5476"
                comptype="Text"
              >
                2022 Investie all rights reserved
              </Text>
            </Column>
            <Column
              className="mt-[4px] w-[25%]"
              compid="4:5437"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5438"
                comptype="Text"
              >
                Company
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5439"
                comptype="Text"
              >
                About
              </Text>
              <Text
                className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5440"
                comptype="Text"
              >
                Careers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5441"
                comptype="Text"
              >
                Writers
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5442"
                comptype="Text"
              >
                Blog
              </Text>
            </Column>
            <Column
              className="mt-[2px] w-[25%]"
              compid="4:5443"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5444"
                comptype="Text"
              >
                Contact
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5445"
                comptype="Text"
              >
                Advertise
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5446"
                comptype="Text"
              >
                Market
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5447"
                comptype="Text"
              >
                News letter
              </Text>
            </Column>
            <Column
              className="mt-[4px] w-[12%]"
              compid="4:5448"
              comptype="Column"
            >
              <Text
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_50 w-[auto]"
                compid="4:5449"
                comptype="Text"
              >
                Help
              </Text>
              <Text
                className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5450"
                comptype="Text"
              >
                FAQs
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5451"
                comptype="Text"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_100 w-[auto]"
                compid="4:5452"
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

export default OrderDetailsPage;
