import style from "./MainStyles/DateDisplay.module.scss";

export const DateDisplay = () => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const todayDate = new Date();

  const todayDay = todayDate.getDate();

  const todayDayWeek = week[todayDate.getDay()];

  const todayMonth = months[todayDate.getMonth()];

  const todayYear = todayDate.getFullYear();

  return (
    <div className={style.display}>
      <p>
        {todayDayWeek}, {todayMonth} {todayDay}, {todayYear}
      </p>
    </div>
  );
};
