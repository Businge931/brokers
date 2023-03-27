const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { appendToFile } = require("../helpers/createFile");
// const { matchPhone } = require("../helpers/regexFunctions");

const brokerscraper = async (url) => {
  let phone;
  let brokerName;
  const brokerObj = new Object();

  try {
    const req = await axios.get(url);
    const html = await req.data;
    const $ = cheerio.load(html);

    //Get name
    brokerName = $(
      "#ctl00_ctl00_Content_ContentPlaceHolder1_ctl02_BrokerTopInfo_lblName"
    ).text();

    //get phone number
    phone = $("#brokerPhoneHref").text();

    brokerObj.Broker_Name = brokerName;
    brokerObj.Phone_Number = phone.trim();

    console.log(brokerObj);

    appendToFile("../files/final.txt", JSON.stringify(brokerObj));
  } catch (error) {
    console.log("error is", error.stack);
  }
};

const readF = fs.readFileSync("../files/output.txt", "utf-8");
const brokers = readF.split("\n");

console.log(brokers.length);

for (let i = 0; i <= brokers.length; i++) {
  brokerscraper(brokers[i]);
}
