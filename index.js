const data = require("./data");

function extractData(str, serialNo) {
  const ApplicationNo = str.match(/Application No.[0-9]*/i)[0].split(".")[1];
  const Batch = str.match(/Batch[0-9]*/i)[0].split("h")[1];
  const AccountNo = str
    .match(/Account No.*F/i)[0]
    .slice(0, -1)
    .split(".")[1];
  const ApplicationDate = str
    .match(/Application NO.[0-9]*Date[0-9&-]*/i)[0]
    .split("Date")[1];
  const ScoNO = str.match(/SCO No.[0-9]*/i)[0].split(".")[1];
  const ScoDate = str.match(/SCO No.[0-9]*Date[0-9$-]*/i)[0].split("Date")[1];
  const AmmountOfSecurityDeposit = str
    .match(/Ammount of Security Deposit[0-9]*/i)[0]
    .split("Deposit")[1];
  const DateOfPayment = str
    .match(/Ammount of Security Deposit[0-9]*Date of Payment[0-9&-]*/i)[0]
    .split("Payment")[1];
  const SanctionedLoad = str
    .match(/Sanctioned Load[0-9]*/i)[0]
    .split("Load")[1];

  const Name = str
    .match(/Name & Father\/Husband Name[a-z (\/)]*CN/i)[0]
    .slice(0, -2)
    .split("d Name")[1];
  const Address = str
    .match(/Address[a-z| |0-9]*Mo/i)[0]
    .slice(0, -2)
    .split("Address")[1];

  const MobileNo = str.match(/Mobile No.*[0-9]*/i)[0].split("No.")[1];

  return {
    serialNo,
    RouteNo: "",
    tf: "",
    DOC: "",
    MeterNo: "",
    Miwf: "",
    Batch,
    AccountNo,
    ApplicationNo,
    ApplicationDate,
    ScoNO,
    ScoDate,
    AmmountOfSecurityDeposit,
    DateOfPayment,
    SanctionedLoad,
    Name_Address: Name + " / " + Address,
    MobileNo,
  };
}

for (let text in data) {
  console.log(getData(data[text], text));
}
