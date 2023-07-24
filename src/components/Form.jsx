import { useState } from "react";
import ButtonContain from "./ButtonContain";

function Form() {
  const [selectedOption, setSelectedOption] = useState("");
  const [totalValue, setTotalValue] = useState(149);

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    let val;
    if(event.target.value=="option1")
    {
          val =1;
    }
    else if(event.target.value=="option2")
    {
        val =2 ;
    }
    else val = 3;
    setSelectedOption(event.target.value);
    var finalOutPut =  document.getElementById(`myPTag${val}`).textContent;
    console.log(finalOutPut);
    parseInt(finalOutPut);
     finalOutPut = Math.ceil((finalOutPut*83.24022)/100);
     console.log(finalOutPut);
      setTotalValue(finalOutPut);
  };
   

  return (
    <>
      <div className="form">
        <div className="progress-bar">
          <div>
            <div className="stage">1</div>
            <p>Sign UP</p>
          </div>
          <div>
            <div className="stage">2</div>
            <p>Subscribe</p>
          </div>
        </div>

        <h1 className="form-header">Select your subcription plan</h1>

        <div className="Input-container">
          {/* Expired */}
          <div className="Expired-text-field1">
            <div className="expired-offer">Offer Expired</div>
            <input className="btn" type="radio" name="foo" value="N" disabled />
            <div className="Expired-text-container">
              <p className="Expired-subsrciption">12 Month Subscription</p>
              <div className="right-text">
                <p className="Expired">
                  Total&nbsp;<span className="ExpiredTotalprice"> ₹99</span>
                </p>
                <p className="ExpiredperPrice">
                  ₹8 <span className="Exprired-month">/mo</span>
                </p>
              </div>
            </div>
          </div>

          {/* non expired fields */}

          <div
            className="text-field1"
            style={{
              backgroundColor: selectedOption === "option1" ? "#D7EDDD" : "",
            }}
          >
            <div className="recommened-offer">Recommended</div>
            <input
              className="btn2"
              type="checkbox"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <div className="text-container">
              <p className="subsrciption">12 Month Subscription</p>
              <div className="right-text">
                <p className="totaltext">
                  Total&nbsp;{" "}<span className="Totalprice">₹</span>
                  <span id="myPTag1" className="Totalprice">
                    179
                  </span>
                </p>
                <p className="perPrice">
                  ₹8 <span className="month">/mo</span>
                </p>
              </div>
            </div>
          </div>

          <div
            className="text-field1"
            style={{
              backgroundColor: selectedOption === "option2" ? "#D7EDDD" : "",
            }}
          >
            <input
              type="checkbox"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="btn2"
            />
            <div className="text-container">
              <p className="subsrciption">6 Month Subscription</p>
              <div className="right-text">
                <p className="totaltext">
                  Total&nbsp;{" "}<span className="Totalprice">₹</span>
                  <span id="myPTag2" className="Totalprice">
                    149
                  </span>
                </p>
                <p className="perPrice">
                  ₹25 <span className="month">/mo</span>
                </p>
              </div>
            </div>
          </div>

          <div
            className="text-field1"
            style={{
              backgroundColor: selectedOption === "option3" ? "#D7EDDD" : "",
            }}
          >
            <input
              className="btn2"
              type="checkbox"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <div className="text-container">
              <p className="subsrciption">3 Month Subscription</p>
              <div className="right-text">
                <p className="totaltext">
                  Total&nbsp;{" "} <span className="Totalprice">₹</span>
                  <span id="myPTag3" className="Totalprice">99
                  </span>
                </p>
                <p className="perPrice">
                  ₹33 <span className="month">/mo</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="summary-container">
          <div className="text-container">
            <p className="SubsFee">Subscription Fee</p>
            <p className="SubsFeeNum">₹18,500</p>
          </div>

          <div className="alert">
            <div className="alert-header">
              <p className="offer">Limited time offer</p>
              <p>- ₹18,401</p>
            </div>
            <div className="alert-body">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                    fill="#DE4313"
                  />
                </svg>
              </i>
              <p className="deadline">Offer valid till 25th March 2023 </p>
            </div>
          </div>
          <div className="text-container-gst">
            <p className="gst">Total (Incl. of 18% GST)</p>
            <p className="finalPrice">{totalValue}</p>
          </div>
        </div>

        <ButtonContain />

        <div className="icon-container">
          <div className="icon"></div>
        </div>
      </div>
    </>
  );
}

export default Form;
