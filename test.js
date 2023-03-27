const regex =
  /https:\/\/www.bizbuysell\.com\/business-broker\/[a-zA-Z-]+\/[a-zA-Z-]+\/[0-9]+\/\?bp_sreg=48&bp_cpg=[0-9]$/;
const link =
  "https://www.bizbuysell.com/business-broker/jacob-nguyen/northeast-realty-and-management/25545/?bp_sreg=48&bp_cpg=4";

console.log(regex.test(link));
console.log(link.match(regex));
