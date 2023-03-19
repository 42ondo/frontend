const titleSetList = [
  { title: "열정적인", description: "열정넘치는 평가의 달인입니다" },
  { title: "자신있는", description: "자신감 넘치는 평가자입니다" },
  { title: "활기찬", description: "활기찬 평가를 지향합니다" },
  { title: "철저한", description: "철저하게 평가해 드립니다." },
  { title: "부지런한", description: "꾸준하고 성실한 카뎃입니다." },
  { title: "안정적인", description: "신뢰성 있는 평가를 지향합니다." },
  { title: "솔직한", description: "솔직한 평가를 추구합니다." },
  { title: "차분한", description: "차분하고 고요하게 평가해 드립니다" },
  { title: "독립적인", description: "독립적인 평가 성향입니다." },
  { title: "낙천적인", description: "낙천적인 평가 성향입니다." },
];

const defaultTitleSet = {
  title: "수줍은",
  description: "평가를 수줍어 하시는군요!",
};

export const determineTitleSet = (ondo) => {
  const index = 9 - Math.floor(ondo / 10);

  return titleSetList[index] || defaultTitleSet;
};
