import React from "react";
import ModalProvider from "react-modal";

import { post, postMessages, getTrade } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import * as yup from "yup";
import * as BuyStock from "constants/BuyStock";
import { Column, Text, Input, Datepicker, Row, Button } from "components";

const BuyPopupModal = (props) => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const [apiData2, setapiData2] = React.useState();
  const formValidationSchema = yup.object().shape({
    ["expires_at"]: yup.string().required("Expires_at is required"),
    quantity: yup.string().required("Quantity is required"),
  });
  const form = useForm(
    { isin: "", expires_at: "", quantity: "", venue: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );

  function callApi2(data) {
    const req = {
      data: new URLSearchParams({
        Body: `${data?.results?.quantity} stocks of isin ${data?.results?.isin} at Rs. ${data?.results?.estimated_price} are bought successfully.
      Order ID: ${data?.results?.id}
      Total Price: Rs. ${data?.results?.estimated_price_total}`,
        From: "Enter the phone number given by twilio here",//Exa: +11234567891
        To: "Enter the receiver phone number", //Exa: +911234567891
      }),
    };

    postMessages(req)
      .then((res) => {
        setapiData2(res);

        toast.success("Success");
        props.onRequestClose();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something bad happened ");
      });
  }
  function callApi1(data) {
    const req = { data: { ...data, side: BuyStock.Side } };

    post(req)
      .then((res) => {
        setapiData1(res);

        callApi2(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Can not purchase stock.");
      });
  }

  function callApi() {
    const req = { params: { isin: props?.isin } };
    getTrade(req)
      .then((res) => {
        setapiData(res);
        form.handleChange("price", res?.results?.[0]?.p);
        form.handleChange("volumn", res?.results?.[0]?.v);
        form.handleChange("isin", res?.results?.[0]?.isin);
        form.handleChange("venue", res?.results?.[0]?.mic);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  React.useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[29%]"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column
            className="bg-gray_901 justify-end lg:mb-[261px] xl:mb-[298px] 2xl:mb-[336px] 3xl:mb-[403px] lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius12 w-[100%]"
            compid="4:5819"
            comptype="Column"
          >
            <Text
              className="font-medium lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:mr-[111px] xl:mr-[127px] 2xl:mr-[143px] 3xl:mr-[171px] mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_50 w-[auto]"
              compid="4:5828"
              comptype="Text"
            >
              Buy Stocks
            </Text>
            <Column
              className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] mx-[auto] w-[96%]"
              compid="33"
              comptype="Column"
            >
              {apiData?.results?.map((apiData2ResultsEle) => {
                return (
                  <div>
                    <Text
                      className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                      compid="4:5831"
                      comptype="Text"
                    >
                      ISIN Number
                    </Text>
                    <Input
                      className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
                      compid="4:5832"
                      type="text"
                      name="Group10198"
                      comptype="EditText"
                      value={apiData2ResultsEle?.isin}
                      placeholder="ISIN Number"
                      disabled
                    ></Input>
                    <Text
                      className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                      compid="4:5836"
                      comptype="Text"
                    >
                      Price
                    </Text>
                    <Input
                      className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
                      compid="4:5837"
                      comptype="EditText"
                      name="Group10198 One"
                      placeholder="Price"
                      value={apiData2ResultsEle?.p.toLocaleString("en", {
                        style: "currency",
                        currency: "EUR",
                      })}
                      disabled
                    ></Input>
                    <Text
                      className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                      compid="4:5841"
                      comptype="Text"
                    >
                      Volume
                    </Text>
                    <Input
                      className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
                      compid="4:5842"
                      comptype="EditText"
                      name="Group10198 Two"
                      placeholder="Volume"
                      value={apiData2ResultsEle?.v}
                      disabled
                    ></Input>
                    <Text
                      className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                      compid="4:5846"
                      comptype="Text"
                    >
                      Venue
                    </Text>
                    <Input
                      className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
                      compid="4:5847"
                      comptype="EditText"
                      value={apiData2ResultsEle?.mic}
                      disabled
                      name="Group10198 Three"
                      placeholder="Venue"
                    ></Input>
                    <Text
                      className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                      compid="4:5851"
                      comptype="Text"
                    >
                      Expiry Date
                    </Text>
                    <Datepicker
                      className="bg-bluegray_900 placeholder:bg-transparent border border-bluegray_901 border-solid font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[27px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:pt-[15px] xl:pt-[17px] 2xl:pt-[20px] 3xl:pt-[24px] rounded-radius8 lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      compid="4:5852"
                      comptype="DatePicker"
                      onChange={(e) => {
                        form.handleChange("expires_at", e);
                      }}
                      errors={form?.errors?.["expires_at"]}
                      value={form?.values?.["expires_at"]}
                      name="Group10198 Four"
                      placeholder="Expiry Date"
                    ></Datepicker>
                    <Text
                      className="font-medium lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                      compid="4:5856"
                      comptype="Text"
                    >
                      Side
                    </Text>
                    <Input
                      className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[100%] xl:mt-[7px]"
                      compid="4:5857"
                      comptype="EditText"
                      name="Group10198 Five"
                      placeholder="Side"
                      value={BuyStock.Side}
                      disabled
                    ></Input>
                    <Text
                      className="font-medium lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_100 w-[auto]"
                      compid="4:5861"
                      comptype="Text"
                    >
                      Quantity
                    </Text>
                    <Input
                      className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="2xl:mt-[7px] 3xl:mt-[8px] lg:mt-[5px] w-[100%] xl:mt-[6px]"
                      compid="4:5862"
                      comptype="EditText"
                      onChange={(e) => {
                        form.handleChange("quantity", e.target.value);
                      }}
                      errors={form?.errors?.quantity}
                      value={form?.values?.quantity}
                      name="Group10198 Six"
                      placeholder="Quantity"
                    ></Input>
                    <Row
                      className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                      compid="4:5821"
                      comptype="Row"
                    >
                      <Button
                        className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]"
                        compid="4:5825"
                        comptype="Button"
                        onClick={props.onRequestClose}
                        size="md"
                        variant="OutlineBluegray901"
                      >
                        Cancel
                      </Button>
                      <Button
                        className="common-pointer font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]"
                        compid="4:5822"
                        comptype="Button"
                        onClick={() => {
                          form.handleSubmit(callApi1);
                        }}
                        size="md"
                      >
                        Buy now
                      </Button>
                    </Row>
                  </div>
                );
              })}
            </Column>
          </Column>
        </div>
      </ModalProvider>
      <ToastContainer />
    </>
  );
};

export default BuyPopupModal;
