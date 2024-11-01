import {
  CalendarStrings,
  defaultDatePickerStrings
} from "@fluentui/react-datepicker-compat";

const colorOption = {
  "레드(빨강)": "#f00",
  "엘로우(노랑)": "#ff0",
  "그린(초록)": "#0f0",
  "터키오이스(옥)": "#0ff",
  "블루(파랑)": "#00f",
  "마젠타(자홍)": "#f0f",
  "화이트(흰)": "#fff",
  "그레이(회)": "#ebebeb",
  "라이트그레이(옅은회)": "#d7d7d7",
  "실버(은)": "#c2c2c2",
  "그레이(암회)": "#acacac",
  "알리자린(홍)": "#ee1d24",
  "시안(청록)": "#00aeef",
  "핑크(분홍)": "#ed008c",
  "블랙(검정)": "#000",
  "코럴(산호)": "#f7977a",
  "피치오렌지(오렌지)": "#fdc68c",
  "엘로우(밝은노랑)": "#fff799",
  "라임(라임)": "#c6df9c",
  "네온그린(형광초록)": "#a4d49d",
  "씨그린(노르스름한녹)": "#81ca9d",
  "딥스카이블루(새파란하늘)": "#6ccff7",
  "코발트(짙은청록)": "#7ca6d8",
  "로열블루(밝은남)": "#8293ca",
  "바이올렛(보라)": "#a286bd",
  "퓨시아(자홍)": "#bc8cbf",
  "핑크(연한핑크)": "#f49bc1",
  "레드(연한레드)": "#f5999d",
  "오렌지(연한오렌지)": "#fbaf5a",
  "샤르트뢰즈(역녹)": "#acd372",
  "스트롱시안(진한청록)": "#16bcb4",
  "코발트(밝은남)": "#438ccb",
  "블루(어두운파랑)": "#5e5ca7",
  "레드(연한빨강)": "#f16d7e",
  "오렌지(선명한오렌지)": "#f7941d",
  "에메랄드(선녹)": "#37b44a",
  "다크시안(어두운청록)": "#00a99e",
  "핑크(선명한분홍)": "#ee105a",
  "다크레드(진빨강)": "#9d0a0f",
  "다크오렌지(어두운오렌지)": "#a36209",
  "올리브(녹갈)": "#aba000",
  "라임그린(어두운청록)": "#007236",
  "다크블루(어두운파랑)": "#0076a4",
  "블루바이올렛(남보라)": "#1d1363",
  "다크바이올렛(진보라)": "#450e61",
  "다크핑크(진분홍)": "#9e005c",
  "브라운(갈)": "#7b3000",
  "오렌지(주황)": "#ff8000",
  기타: "#fff"
};

const localizedStrings: CalendarStrings = {
  ...defaultDatePickerStrings,
  shortDays: ["일", "월", "화", "수", "목", "금", "토"],
  months: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],

  shortMonths: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  goToToday: "오늘 날짜로"
};

const onFormatDate = (date?: Date): string => {
  const offset = new Date().getTimezoneOffset() * 60000;
  return date
    ? new Date(date.getTime() - offset).toISOString().split("T")[0]
    : "";
};

export { colorOption, localizedStrings, onFormatDate };
