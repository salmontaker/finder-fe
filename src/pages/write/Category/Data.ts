import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { IIconProps } from "@fluentui/react";

initializeIcons();

export interface Subcategory {
  name: string;
}

export interface CategoryData {
  name: string;
  subcategories: Subcategory[];
  icon: IIconProps; // 아이콘 정보를 포함
}

export const categories: CategoryData[] = [
  {
    name: "가방",
    subcategories: [{ name: "여성용가방" }, { name: "남성용가방" }, { name: "기타가방" }],
    icon: { iconName: "Toolbox" }
  },
  {
    name: "귀금속",
    subcategories: [
      { name: "반지" },
      { name: "목걸이" },
      { name: "귀걸이" },
      { name: "시계" },
      { name: "기타" }
    ],
    icon: { iconName: "Diamond" }
  },
  {
    name: "도서용품",
    subcategories: [
      { name: "학습서적" },
      { name: "소설" },
      { name: "컴퓨터서적" },
      { name: "만화책" },
      { name: "시타서적" }
    ],
    icon: { iconName: "BookAnswers" }
  },
  {
    name: "서류",
    subcategories: [{ name: "서류" }, { name: "기타물품" }],
    icon: { iconName: "Page" }
  },
  {
    name: "산업용품",
    subcategories: [{ name: "기타물품" }],
    icon: { iconName: "ProductRelease" }
  },
  {
    name: "쇼핑백",
    subcategories: [{ name: "쇼핑백" }],
    icon: { iconName: "OfficeStoreLogo" }
  },
  {
    name: "스포츠용품",
    subcategories: [{ name: "스포츠용품" }],
    icon: { iconName: "Soccer" }
  },
  {
    name: "악기",
    subcategories: [
      { name: "건반악기" },
      { name: "관악기" },
      { name: "타악기" },
      { name: "현악기" },
      { name: "기타악기" }
    ],
    icon: { iconName: "MusicInCollection" }
  },
  {
    name: "유가증권",
    subcategories: [{ name: "어음" }, { name: "상품권" }, { name: "채권" }, { name: "기타" }],
    icon: { iconName: "Financial" }
  },
  {
    name: "의류",
    subcategories: [
      { name: "여성의류" },
      { name: "남성의류" },
      { name: "아기의류" },
      { name: "모자" },
      { name: "신발" },
      { name: "기타의류" }
    ],
    icon: { iconName: "AddFriend" }
  },
  {
    name: "자동차",
    subcategories: [
      { name: "자동차열쇠" },
      { name: "네비게이션" },
      { name: "자동차번호판" },
      { name: "임시번호판" },
      { name: "기타용품" }
    ],
    icon: { iconName: "Car" }
  },
  {
    name: "전자기기",
    subcategories: [
      { name: "태블릿" },
      { name: "스마트워치" },
      { name: "무선이어폰" },
      { name: "카메라" },
      { name: "기타용품" }
    ],
    icon: { iconName: "Repair" }
  },
  {
    name: "지갑",
    subcategories: [{ name: "여성용 지갑" }, { name: "남성용 지갑" }, { name: "기타 지갑" }],
    icon: { iconName: "DocumentSet" }
  },
  {
    name: "증명서",
    subcategories: [{ name: "신분증" }, { name: "면허증" }, { name: "여권" }, { name: "기타" }],
    icon: { iconName: "Certificate" }
  },
  {
    name: "컴퓨터",
    subcategories: [
      { name: "삼성노트북" },
      { name: "LG노트북" },
      { name: "애플노트북" },
      { name: "기타" }
    ],
    icon: { iconName: "LaptopSecure" }
  },
  {
    name: "카드",
    subcategories: [{ name: "신용(체크)카드" }, { name: "일반카드" }, { name: "기타카드" }],
    icon: { iconName: "ContactCard" }
  },
  {
    name: "현금",
    subcategories: [{ name: "현금" }, { name: "수표" }, { name: "외화" }, { name: "기타" }],
    icon: { iconName: "Money" }
  },
  {
    name: "휴대폰",
    subcategories: [
      { name: "삼성휴대폰" },
      { name: "LG휴대폰" },
      { name: "아이폰" },
      { name: "기타휴대폰" },
      { name: "기타통신기기" }
    ],
    icon: { iconName: "CellPhone" }
  },
  {
    name: "기타물품",
    subcategories: [
      { name: "안경" },
      { name: "선글라스" },
      { name: "매장문화재" },
      { name: "기타" }
    ],
    icon: { iconName: "Glasses" }
  },
  {
    name: "유류품",
    subcategories: [{ name: "유류품" }],
    icon: { iconName: "TagUnknown" }
  }
];
