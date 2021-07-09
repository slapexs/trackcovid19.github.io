// const { default: axios } = require("axios");
const fetchData = async () => {
  const url = await fetch("https://covid19.th-stat.com/json/covid19v2/getTodayCases.json");
  const res = await url.json();
  //   Confirmed
  document.querySelector("#confirmed").innerHTML = new Intl.NumberFormat(
    "en-US",
    {
      maximumSignificantDigits: 3,
    },
  ).format(res.Confirmed);

  //   Recovered
  document.querySelector("#recovered").innerHTML = new Intl.NumberFormat(
    "en-US",
    {
      maximumSignificantDigits: 3,
    },
  ).format(res.Recovered);

  //   Hospitalized
  document.querySelector("#Hospitalized").innerHTML = new Intl.NumberFormat(
    "en-US",
    {
      maximumSignificantDigits: 3,
    },
  ).format(res.Hospitalized);

  //   Deaths
  document.querySelector("#deaths").innerHTML = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(res.Deaths);

  //   newconfirmed
  document.querySelector("#newconfirmed").innerHTML = new Intl.NumberFormat(
    "en-US",
    {
      maximumSignificantDigits: 3,
    },
  ).format(res.NewConfirmed);

  //   Lastupdate
  document.querySelector("#lastupdate").innerHTML = res.UpdateDate;
  document.querySelector("#source").innerHTML = 'กรมควมคุมโรค';

  return res;
};

const result = fetchData();
