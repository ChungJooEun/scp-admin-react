const convertDashToDot = (dateString) => {
  if (dateString === null || dateString === "-") return "-";

  return dateString.replace(/-/gi, ".");
};

const convertDateString = (dateStr) => {
  if (dateStr === null) return "";

  // tue dec 28 시간 KST 2021
  let dateAry = dateStr.split(" ");

  // Dec 17, 2021 시간
  let date = new Date(
    `${dateAry[1]} ${dateAry[2]}, ${dateAry[5]} ${dateAry[3]}`
  );

  let str = "" + date.getFullYear() + "-";

  if (date.getMonth() < 9) {
    str += "0" + (date.getMonth() + 1) + "-";
  } else {
    str += date.getMonth() + 1 + "-";
  }

  if (date.getDate() < 10) {
    str += "0" + date.getDate();
  } else {
    str += date.getDate();
  }
  return convertDashToDot(str);
};

const convertDateFormat = (dateString) => {
  if (dateString === null) return "";

  let dateAry = dateString.split(" ");

  let result = dateAry[0].replace(/-/gi, ".");

  // let time = dateAry[1].split(":");
  // result += ` ${time[0]}시${time[1]}분${time[2]}초`;
  result += ` ${dateAry[1]}`;

  return result;
};

const convertDateStr = (dateObject) => {
  if (dateObject === null) return "";

  let dateStr = dateObject.getFullYear() + "-";

  if (dateObject.getMonth() <= 8) {
    dateStr += "0" + (dateObject.getMonth() + 1) + "-";
  } else {
    dateStr += dateObject.getMonth() + 1 + "-";
  }

  if (dateObject.getDate() <= 9) {
    dateStr += "0" + dateObject.getDate();
  } else {
    dateStr += dateObject.getDate();
  }

  return dateStr;
};

const parsingMonthDate = (dateString) => {
  let ary = dateString.split("-");

  return `${ary[1]}/${ary[2]}`;
};

const parsingYMDate = (dateString) => {
  let ary = dateString.split("-");

  return `${ary[0]}/${ary[1]}`
}

export {
  convertDateString,
  convertDateFormat,
  convertDateStr,
  parsingMonthDate,
  parsingYMDate,
};

export default convertDashToDot;
