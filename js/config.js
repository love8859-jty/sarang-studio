/* =====================================================================
   사랑이야기스튜디오 — 기본 정보 설정 파일
   ---------------------------------------------------------------------
   ★ 전화번호, 주소, 영업시간, 가격, 갤러리 사진은 모두 이 파일에서 고치면
     홈페이지 전체에 자동으로 반영됩니다.
   ★ 따옴표("") 안의 글자만 바꿔주세요. 쉼표(,)와 괄호는 지우지 마세요.
   ※ 아래 정보는 네이버 플레이스(2026년 9월 기준)를 참고해 넣었습니다.
   ===================================================================== */

window.STUDIO = {
  name: "사랑이야기스튜디오",
  nameEn: "LOVESTORY STUDIO",
  slogan: "1996년부터, 구미 가족의 가장 행복한 순간을 기록합니다",

  phone: "054-455-8859",                       // 대표 전화번호
  mobile: "",                                  // 문자 받을 휴대폰 번호 (넣으면 휴대폰에서 '문자로 문의'가 동작합니다)
  address: "경북 구미시 금오산로14길 2 (원평동 427-1)",
  addressDetail: "금오산 사거리에서 금오산 방향 100m 우측 건물 · 금오초등학교 맞은편 · 다담뜰 뷔페 5m 전",
  parking: "무료 주차 10대 가능 (건물 뒤 전용주차장, 건물 앞·옆). 도착 전 문의해 주세요.",
  transit: "대경선 구미역에서 가까워요",
  mapSearch: "사랑이야기스튜디오 구미",
  mapLat: "36.1249955",                         // 지도 위치 (위도)
  mapLng: "128.3334216",                        // 지도 위치 (경도)
  naverPlace: "https://map.naver.com/p/entry/place/12029069",

  hours: [
    ["월 · 목 · 금 · 토", "09:00 – 18:00"],
    ["일요일", "09:00 – 17:00"],
    ["점심시간", "12:00 – 13:00"],
    ["화 · 수요일", "정기휴무"],
  ],
  hoursNote: "모든 촬영은 예약 후 방문하시면 기다림 없이 촬영하실 수 있어요. 화·수요일은 정기휴무입니다.",

  // 링크가 없으면 "" 로 비워두세요. 비어 있으면 버튼이 자동으로 숨겨집니다.
  naverBooking: "https://m.booking.naver.com/booking/6/bizes/145890",   // 네이버 예약
  naverTalk: "https://talk.naver.com/wcbz2s",                           // 네이버 톡톡 상담
  kakao: "",          // 카카오톡 채널 채팅 주소가 생기면 넣어주세요
  instagram: "https://www.instagram.com/gumi_studio_lovestory",
  cafe: "https://cafe.naver.com/gumils",
  blog: "",

  owner: "정태영",
  bizInfo: "대표 정태영 · 경북 구미시 금오산로14길 2",

  // 가격표 위에 표시되는 안내 문구 (필요 없으면 "" 로 비워주세요)
  priceNotice: "네이버 플레이스 이벤트 가격 기준입니다. 이벤트 가격은 바뀔 수 있으니 예약 시 한 번 더 확인해 주세요.",

  // 네이버 방문자 리뷰 (숫자가 바뀌면 여기서 고쳐주세요)
  review: {
    score: "4.94",
    count: "344",
    asOf: "2026년 9월 기준",
    keywords: [["친절해요", 245], ["자연스럽게 연출해줘요", 205], ["시설이 깔끔해요", 165], ["분위기가 편안해요", 133], ["보정을 꼼꼼하게 해줘요", 98], ["가격이 합리적이에요", 74]],
  },
};

/* ---------------------------------------------------------------------
   촬영 분야 (메뉴와 첫 화면 카드에 쓰입니다)
   --------------------------------------------------------------------- */
window.CATEGORIES = [
  { key: "family",   name: "가족사진",     en: "Family",   page: "family.html",   img: "images/family-big.jpg",          desc: "우리 네 식구부터 3대 대가족, 칠순·팔순 기념까지" },
  { key: "remind",   name: "리마인드웨딩", en: "Remind Wedding", page: "remind.html", img: "images/remind-couple.jpg", desc: "결혼기념일, 회갑·칠순, 다시 입는 웨딩드레스" },
  { key: "friends",  name: "우정사진",     en: "Friendship", page: "friends.html", img: "images/friends-ribbon.jpg",     desc: "오랜 친구, 동창, 모임과 함께 남기는 추억" },
  { key: "id",       name: "증명사진",     en: "ID Photo", page: "id-photo.html", img: "images/id-1.jpg",               desc: "취업·이력서·자격증, 인상이 좋아 보이는 증명사진" },
  { key: "passport", name: "여권사진",     en: "Passport", page: "passport.html", img: "images/passport-1.jpg",         desc: "외교부 규격에 맞춘 정확한 여권사진" },
  { key: "profile",  name: "프로필사진",   en: "Profile",  page: "profile.html",  img: "images/profile-1.jpg",          desc: "SNS·명함·오디션·회사 소개용 개인 프로필" },
];

/* ---------------------------------------------------------------------
   가격표
   - price: 화면에 크게 표시되는 가격
   - was: 원래 가격 (있으면 줄 그어서 함께 표시, 없으면 "" 또는 지우기)
   - best: true 로 두면 '추천' 표시가 붙습니다.
   --------------------------------------------------------------------- */
window.PRICES = {
  family: [
    { name: "소가족 사진", people: "2 ~ 4인", was: "300,000원", price: "100,000원", items: ["28×36cm 고급 몰딩 액자 1개", "포켓사진 (촬영 인원수만큼)", "미니 탁상액자 1개", "웹용 액자 작업본 파일 제공", "캐주얼 흰셔츠 무료 제공"] },
    { name: "대가족 사진", people: "5인 이상", was: "610,000원", price: "380,000원", best: true, items: ["28×36cm 고급 몰딩 액자 1개", "부모님 메이크업 & 헤어 풀케어", "부모님 드레스 & 턱시도 제공", "지갑용 사진 (인원수만큼) · 미니 탁상액자 1개", "웹용 액자 작업본 파일 제공", "캐주얼 흰셔츠 무료 대여", "5인 기준 · 1인 추가 5만원 (반려견도 1인)"] },
    { name: "칠순 · 팔순 상차림", people: "부부 2인 기준", was: "560,000원", price: "280,000원", items: ["28×36cm 고급 몰딩 액자 1개", "부부 메이크업 & 헤어 풀케어", "부부 한복 포함", "포켓사진 2매 · 미니 탁상액자 1개", "웹용 액자 작업본 파일 제공"] },
  ],
  remind: [
    { name: "리마인드웨딩", people: "부부 2인", was: "560,000원", price: "280,000원", best: true, items: ["28×36cm 고급 몰딩 액자 1개", "부부 메이크업 & 헤어 풀케어", "부부 드레스 & 턱시도 포함", "포켓사진 2매 · 미니 탁상액자 1개", "웹용 액자 작업본 파일 제공"] },
    { name: "웨딩촬영", people: "2인", was: "910,000원", price: "680,000원", items: ["28×36cm 아크릴 베젤 액자 1개", "12×17cm 사진 3장 출력", "부부 메이크업 & 헤어 풀케어", "부부 드레스 & 턱시도 포함", "포켓사진 2매 · 미니 탁상액자 1개", "웹용 액자 작업본 파일 제공"] },
  ],
  friends: [
    { name: "우정사진", people: "2 ~ 4인", price: "1인 50,000원", items: ["12×17cm 1장 + 5×7cm 1장 (동일 사진)", "의상 1벌 직접 준비 (흰셔츠 무료 대여)", "드레스·파티복·한복·경성복·교복 대여 1벌 3만원", "메이크업 & 헤어 추가 시 할인", "웹용 액자 작업본 파일 제공"] },
    { name: "우정사진", people: "5인 이상", price: "1인 30,000원", best: true, items: ["12×17cm 1장 + 5×7cm 1장 (동일 사진)", "의상 1벌 직접 준비 (흰셔츠 무료 대여)", "드레스·파티복·한복·경성복·교복 대여 1벌 3만원", "메이크업 & 헤어 추가 시 할인", "웹용 액자 작업본 파일 제공"] },
  ],
  id: [
    { name: "증명 · 여권사진", people: "1인", price: "30,000원", best: true, items: ["용도에 맞는 규격으로 촬영", "세부 구성은 전화로 안내해 드려요"] },
  ],
  passport: [
    { name: "증명 · 여권사진", people: "1인", price: "30,000원", best: true, items: ["외교부 여권 규격 3.5×4.5cm", "세부 구성은 전화로 안내해 드려요"] },
  ],
  profile: [
    { name: "프로필사진 기본촬영", people: "1인", price: "100,000원", best: true, items: ["용도와 분위기에 맞춘 촬영", "세부 구성은 상담 시 안내해 드려요"] },
  ],
};

/* ---------------------------------------------------------------------
   갤러리 사진 목록
   - 새 사진은 images 폴더에 넣고, 아래에 한 줄 추가하면 됩니다.
   - cat 은 family / remind / friends / id / passport / profile 중 하나
   --------------------------------------------------------------------- */
window.GALLERY = [
  { src: "images/family-big.jpg",              cat: "family",  alt: "3대 대가족이 흑백 의상으로 하트를 만든 가족사진" },
  { src: "images/family-denim.jpg",            cat: "family",  alt: "청청 데님 의상으로 맞춘 활기찬 가족사진" },
  { src: "images/family-chair.jpg",            cat: "family",  alt: "나무 의자에 앉은 흑백 코디 가족사진" },
  { src: "images/family-balloon.jpg",          cat: "family",  alt: "풍선을 들고 웃는 다섯 식구 가족사진" },
  { src: "images/family-hanbok.jpg",           cat: "family",  alt: "명절 한복을 입은 가족사진" },
  { src: "images/remind-couple.jpg",           cat: "remind",  alt: "턱시도와 웨딩드레스를 입은 부부 리마인드웨딩" },
  { src: "images/remind-mother-daughters.jpg", cat: "remind",  alt: "엄마와 두 딸이 함께 입은 웨딩드레스" },
  { src: "images/friends-ribbon.jpg",          cat: "friends", alt: "컬러 리본 머리띠를 한 친구들의 우정사진" },
  { src: "images/friends-lying.jpg",           cat: "friends", alt: "화이트 셔츠를 맞춰 입은 친구들의 우정사진" },
  // 증명·여권·프로필 사진이 준비되면 아래처럼 추가하세요.
  // { src: "images/id-1.jpg",       cat: "id",       alt: "증명사진" },
  // { src: "images/passport-1.jpg", cat: "passport", alt: "여권사진" },
  // { src: "images/profile-1.jpg",  cat: "profile",  alt: "프로필사진" },
];
