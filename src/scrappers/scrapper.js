const axios = require("axios");
const cheerio = require("cheerio");
const { matchLink } = require("../helpers/regexFunction");
const { appendToFile } = require("../helpers/createFile");

const scrapper = async (url) => {
  try {
    console.log("URL", url);
    const req = await axios.get(url);
    const html = req.data;
    let value;

    const $ = cheerio.load(html);

    $("a").each(function () {
      const link = $(this).attr("href");
      console.log(link);
      if (link != undefined) {
        value = matchLink(link);
      }
      //   console.log(link);
      //   const value = matchLink(link);
      if (value) {
        appendToFile("../files/output.txt", value);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// scrapper("https://www.bizbuysell.com/business-brokers/new-york/4/");

for (let i = 1; i <= 7; i++) {
  if (i == 1) {
    scrapper("https://www.bizbuysell.com/business-brokers/new-york/");
  }
  scrapper(`https://www.bizbuysell.com/business-brokers/new-york/${i}/`);
}
