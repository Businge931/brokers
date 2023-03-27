exports.matchLink = (link) => {
  const regex =
    /https:\/\/www.bizbuysell\.com\/business-broker\/[a-zA-Z-]+\/[a-zA-Z-]+\/[0-9]+\/\?bp_sreg=48&bp_cpg=[0-9]$/;
  const matchedLink = link.match(regex);
  if (regex.test(link)) {
    console.log(matchedLink[0]);
    return matchedLink[0];
  }
};

// exports.matchPhone = (num) => {
//   const regex = /[0-9]+/;
//   const phoneNumber = num.match(regex);
//   return phoneNumber[0];
// };
