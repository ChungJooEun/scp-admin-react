const AllActivities = [
  {
    id: 0,
    activityNumber: "00001", // 활동 번호
    name: "활동명 1", // 활동명
    organization: "기관/단체명 1",
    categoryName: "카테고리 1", // 카테고리 명
    recruitmentField: "RECRUITMENT", //
    recruitmentTarget: ["NOMAL", "ORGANIZATION"], // 모집 대상
    location: "활동 장소 1", // 활동 장소
    numberOfPeople: 10, // 필요 인원
    activityTime: 1, // 활동
    state: "POST", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 1", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2021.12.01", // 활동 일시
  },
  {
    id: 1,
    activityNumber: "00002", // 활동 번호
    name: "활동명 2", // 활동명
    organization: "기관/단체명 2",
    categoryName: "카테고리 2", // 카테고리 명
    recruitmentField: "RECRUITMENT", //
    recruitmentTarget: ["NOMAL"], // 모집 대상
    location: "활동 장소 2", // 활동 장소
    numberOfPeople: 10, // 필요 인원
    activityTime: 10, // 활동
    state: "PRIVATE", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 2", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2021.12.03", // 활동 일시
  },
  {
    id: 2,
    activityNumber: "00003", // 활동 번호
    name: "활동명 3", // 활동명
    organization: "기관/단체명 3",
    categoryName: "카테고리 3", // 카테고리 명
    recruitmentField: "CONSUMER", //
    recruitmentTarget: ["ORGANIZATION"], // 모집 대상
    location: "활동 장소 3", // 활동 장소
    numberOfPeople: 10, // 필요 인원
    activityTime: 60, // 활동
    state: "POST", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 3", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2021.12.09", // 활동 일시
  },
  {
    id: 3,
    activityNumber: "00004", // 활동 번호
    name: "활동명 4", // 활동명
    organization: "기관/단체명 4",
    categoryName: "카테고리 2", // 카테고리 명
    recruitmentField: "RECRUITMENT", //
    recruitmentTarget: ["NOMAL", "ORGANIZATION"], // 모집 대상
    location: "활동 장소 4", // 활동 장소
    numberOfPeople: 10, // 필요 인원
    activityTime: 1, // 활동
    state: "POST", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 4", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2021.12.10", // 활동 일시
  },
  {
    id: 4,
    activityNumber: "00005", // 활동 번호
    name: "활동명 5", // 활동명
    organization: "기관/단체명 5",
    categoryName: "카테고리 5", // 카테고리 명
    recruitmentField: "CONSUMER", //
    recruitmentTarget: ["ORGANIZATION"], // 모집 대상
    location: "활동 장소 5", // 활동 장소
    numberOfPeople: 55, // 필요 인원
    activityTime: 31, // 활동
    state: "PRIVATE", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 5", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2022.01.01", // 활동 일시
  },
  {
    id: 5,
    activityNumber: "00006", // 활동 번호
    name: "활동명 6", // 활동명
    organization: "기관/단체명 6",
    categoryName: "카테고리 6", // 카테고리 명
    recruitmentField: "RECRUITMENT", //
    recruitmentTarget: ["NOMAL", "ORGANIZATION"], // 모집 대상
    location: "활동 장소 1", // 활동 장소
    numberOfPeople: 100, // 필요 인원
    activityTime: 5, // 활동
    state: "POST", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 6", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2022.01.15", // 활동 일시
  },
  {
    id: 6,
    activityNumber: "00007", // 활동 번호
    name: "활동명 7", // 활동명
    organization: "기관/단체명 7",
    categoryName: "카테고리 7", // 카테고리 명
    recruitmentField: "CONSUMER", //
    recruitmentTarget: ["ORGANIZATION"], // 모집 대상
    location: "활동 장소 7", // 활동 장소
    numberOfPeople: 12, // 필요 인원
    activityTime: 8, // 활동
    state: "PRIVATE", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 7", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2022.01.22 오전 10시 30분", // 활동 일시
  },
  {
    id: 7,
    activityNumber: "00008", // 활동 번호
    name: "활동명 8", // 활동명
    organization: "기관/단체명 8",
    categoryName: "카테고리 2", // 카테고리 명
    recruitmentField: "RECRUITMENT", //
    recruitmentTarget: ["NOMAL", "ORGANIZATION"], // 모집 대상
    location: "활동 장소 14", // 활동 장소
    numberOfPeople: 20, // 필요 인원
    activityTime: 50, // 활동
    state: "POST", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 8", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2022.02.01 오후 1시", // 활동 일시
  },
  {
    id: 8,
    activityNumber: "00009", // 활동 번호
    name: "활동명 1", // 활동명
    organization: "기관/단체명 9",
    categoryName: "카테고리 1", // 카테고리 명
    recruitmentField: "RECRUITMENT", //
    recruitmentTarget: ["NOMAL", "ORGANIZATION"], // 모집 대상
    location: "활동 장소 9", // 활동 장소
    numberOfPeople: 9, // 필요 인원
    activityTime: 4, // 활동
    state: "POST", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 9", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2022.02.22", // 활동 일시
  },
  {
    id: 9,
    activityNumber: "00010", // 활동 번호
    name: "활동명 2", // 활동명
    organization: "기관/단체명 2",
    categoryName: "카테고리 2", // 카테고리 명
    recruitmentField: "RECRUITMENT", //
    recruitmentTarget: ["NOMAL"], // 모집 대상
    location: "활동 장소 2", // 활동 장소
    numberOfPeople: 10, // 필요 인원
    activityTime: 20, // 활동
    state: "PRIVATE", // 상태
    img: `${process.env.PUBLIC_URL}/assets/images/stories/256_rsz_thomas-russell-751613-unsplash.jpg`, // 이미지
    detail: "상세내용 2", // 상세내용
    target: "대상", // 대상,
    activityDateTime: "2022.03.01", // 활동 일시
  },
];

const ParticipatingUsers = [
  {
    id: 0,
    nickName: "닉네임1",
    userId: "user001",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 1시",
    state: "WATING",
  },
  {
    id: 1,
    nickName: "닉네임2",
    userId: "user002",
    activityDate: "2021.12.03",
    recentActivityDate: "2021.12.03 오후 1시",
    state: "CONFIRMATION",
  },
  {
    id: 2,
    nickName: "닉네임3",
    userId: "user003",
    activityDate: "2021.11.02",
    recentActivityDate: "2021.11.02 오후 2시",
    state: "REJECT",
  },
  {
    id: 3,
    nickName: "닉네임4",
    userId: "user004",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 4시",
    state: "CONFIRMATION",
  },
  {
    id: 4,
    nickName: "닉네임5",
    userId: "user005",
    activityDate: "2021.12.05",
    recentActivityDate: "2021.12.05 오후 5시",
    state: "WAITING",
  },
  {
    id: 5,
    nickName: "닉네임6",
    userId: "user006",
    activityDate: "2021.11.06",
    recentActivityDate: "2021.11.06 오후 1시",
    state: "CONFIRMATION",
  },
  {
    id: 6,
    nickName: "닉네임7",
    userId: "user007",
    activityDate: "2021.12.07",
    recentActivityDate: "2021.12.07 오후 1시",
    state: "CONFIRMATION",
  },
  {
    id: 7,
    nickName: "닉네임8",
    userId: "user008",
    activityDate: "2021.12.03",
    recentActivityDate: "2021.12.03 오후 1시",
    state: "REJECT",
  },
  {
    id: 8,
    nickName: "닉네임9",
    userId: "user009",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 1시",
    state: "CONFIRMATION",
  },
  {
    id: 9,
    nickName: "닉네임10",
    userId: "user010",
    activityDate: "2022.03.01",
    recentActivityDate: "2022.03.01 오후 1시",
    state: "WAITIMG",
  },
];

const ParticipatingOrganization = [
  {
    id: 0,
    name: "기관/단체명 1",
    address: "기관 주소 1",
    contactInfo: "010-0101-0101",
    maximumNumberOfPeople: 15,
    registeredActivities: 30,
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03",
    state: "WATING",
  },
  {
    id: 1,
    name: "기관/단체명 2",
    address: "기관 주소 2",
    contactInfo: "010-0101-0102",
    maximumNumberOfPeople: 25,
    registeredActivities: 32,
    activityDate: "2021.11.23",
    recentActivityDate: "2021.11.23",
    state: "CONFIRMATION",
  },
  {
    id: 2,
    name: "기관/단체명 3",
    address: "기관 주소 3",
    contactInfo: "010-0103-0103",
    maximumNumberOfPeople: 20,
    registeredActivities: 32,
    activityDate: "2021.12.23",
    recentActivityDate: "2021.12.23",
    state: "REJECT",
  },
  {
    id: 3,
    name: "기관/단체명 4",
    address: "기관 주소 4",
    contactInfo: "010-0404-0101",
    maximumNumberOfPeople: 45,
    registeredActivities: 40,
    activityDate: "2021.11.04",
    recentActivityDate: "2021.11.04",
    state: "WATING",
  },
  {
    id: 4,
    name: "기관/단체명 5",
    address: "기관 주소 5",
    contactInfo: "010-0101-0102",
    maximumNumberOfPeople: 25,
    registeredActivities: 32,
    activityDate: "2021.11.23",
    recentActivityDate: "2021.11.23",
    state: "CONFIRMATION",
  },
  {
    id: 5,
    name: "기관/단체명 6",
    address: "기관 주소 6",
    contactInfo: "010-0106-0106",
    maximumNumberOfPeople: 26,
    registeredActivities: 62,
    activityDate: "2021.12.26",
    recentActivityDate: "2021.12.26",
    state: "REJECT",
  },
  {
    id: 6,
    name: "기관/단체명 7",
    address: "기관 주소 7",
    contactInfo: "010-0177-7701",
    maximumNumberOfPeople: 17,
    registeredActivities: 70,
    activityDate: "2021.11.27",
    recentActivityDate: "2021.11.27",
    state: "WATING",
  },
  {
    id: 7,
    name: "기관/단체명 8",
    address: "기관 주소 8",
    contactInfo: "010-0181-0188",
    maximumNumberOfPeople: 85,
    registeredActivities: 12,
    activityDate: "2022.02.23",
    recentActivityDate: "2022.02.23",
    state: "CONFIRMATION",
  },
  {
    id: 8,
    name: "기관/단체명 9",
    address: "기관 주소 9",
    contactInfo: "010-0193-0109",
    maximumNumberOfPeople: 29,
    registeredActivities: 92,
    activityDate: "2022.01.09",
    recentActivityDate: "2021.01.09",
    state: "REJECT",
  },
  {
    id: 9,
    name: "기관/단체명 10",
    address: "기관 주소 10",
    contactInfo: "010-0110-0110",
    maximumNumberOfPeople: 10,
    registeredActivities: 32,
    activityDate: "2021.12.10",
    recentActivityDate: "2021.12.10",
    state: "REJECT",
  },
];

const RegisteredParticipatingUsers = [
  {
    id: 0,
    nickName: "닉네임1",
    userId: "user001",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 1시",
    state: "WATING",
  },
  {
    id: 1,
    nickName: "닉네임2",
    userId: "user002",
    activityDate: "2021.12.03",
    recentActivityDate: "2021.12.03 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 2,
    nickName: "닉네임3",
    userId: "user003",
    activityDate: "2021.11.02",
    recentActivityDate: "2021.11.02 오후 2시",
    state: "WAITIMG",
  },
  {
    id: 3,
    nickName: "닉네임4",
    userId: "user004",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 4시",
    state: "WAITIMG",
  },
  {
    id: 4,
    nickName: "닉네임5",
    userId: "user005",
    activityDate: "2021.12.05",
    recentActivityDate: "2021.12.05 오후 5시",
    state: "WAITING",
  },
  {
    id: 5,
    nickName: "닉네임6",
    userId: "user006",
    activityDate: "2021.11.06",
    recentActivityDate: "2021.11.06 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 6,
    nickName: "닉네임7",
    userId: "user007",
    activityDate: "2021.12.07",
    recentActivityDate: "2021.12.07 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 7,
    nickName: "닉네임8",
    userId: "user008",
    activityDate: "2021.12.03",
    recentActivityDate: "2021.12.03 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 8,
    nickName: "닉네임9",
    userId: "user009",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 9,
    nickName: "닉네임10",
    userId: "user010",
    activityDate: "2022.03.01",
    recentActivityDate: "2022.03.01 오후 1시",
    state: "WAITIMG",
  },
];

const RegisteredParticipatingOrganization = [
  {
    id: 0,
    name: "기관/단체명 1",
    address: "기관 주소 1",
    contactInfo: "010-0101-0101",
    maximumNumberOfPeople: 15,
    registeredActivities: 30,
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03",
    state: "WATING",
  },
  {
    id: 1,
    name: "기관/단체명 2",
    address: "기관 주소 2",
    contactInfo: "010-0101-0102",
    maximumNumberOfPeople: 25,
    registeredActivities: 32,
    activityDate: "2021.11.23",
    recentActivityDate: "2021.11.23",
    state: "WAITING",
  },
  {
    id: 2,
    name: "기관/단체명 3",
    address: "기관 주소 3",
    contactInfo: "010-0103-0103",
    maximumNumberOfPeople: 20,
    registeredActivities: 32,
    activityDate: "2021.12.23",
    recentActivityDate: "2021.12.23",
    state: "WAITING",
  },
  {
    id: 3,
    name: "기관/단체명 4",
    address: "기관 주소 4",
    contactInfo: "010-0404-0101",
    maximumNumberOfPeople: 45,
    registeredActivities: 40,
    activityDate: "2021.11.04",
    recentActivityDate: "2021.11.04",
    state: "WATING",
  },
  {
    id: 4,
    name: "기관/단체명 5",
    address: "기관 주소 5",
    contactInfo: "010-0101-0102",
    maximumNumberOfPeople: 25,
    registeredActivities: 32,
    activityDate: "2021.11.23",
    recentActivityDate: "2021.11.23",
    state: "WAITING",
  },
  {
    id: 5,
    name: "기관/단체명 6",
    address: "기관 주소 6",
    contactInfo: "010-0106-0106",
    maximumNumberOfPeople: 26,
    registeredActivities: 62,
    activityDate: "2021.12.26",
    recentActivityDate: "2021.12.26",
    state: "WAITING",
  },
  {
    id: 6,
    name: "기관/단체명 7",
    address: "기관 주소 7",
    contactInfo: "010-0177-7701",
    maximumNumberOfPeople: 17,
    registeredActivities: 70,
    activityDate: "2021.11.27",
    recentActivityDate: "2021.11.27",
    state: "WATING",
  },
  {
    id: 7,
    name: "기관/단체명 8",
    address: "기관 주소 8",
    contactInfo: "010-0181-0188",
    maximumNumberOfPeople: 85,
    registeredActivities: 12,
    activityDate: "2022.02.23",
    recentActivityDate: "2022.02.23",
    state: "WAITING",
  },
  {
    id: 8,
    name: "기관/단체명 9",
    address: "기관 주소 9",
    contactInfo: "010-0193-0109",
    maximumNumberOfPeople: 29,
    registeredActivities: 92,
    activityDate: "2022.01.09",
    recentActivityDate: "2021.01.09",
    state: "WAITING",
  },
  {
    id: 9,
    name: "기관/단체명 10",
    address: "기관 주소 10",
    contactInfo: "010-0110-0110",
    maximumNumberOfPeople: 10,
    registeredActivities: 32,
    activityDate: "2021.12.10",
    recentActivityDate: "2021.12.10",
    state: "WAITING",
  },
];

const DemandUsers = [
  {
    id: 0,
    nickName: "닉네임1",
    userId: "user001",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 1시",
    state: "WATING",
  },
  {
    id: 1,
    nickName: "닉네임2",
    userId: "user002",
    activityDate: "2021.12.03",
    recentActivityDate: "2021.12.03 오후 1시",
    state: "CONFIRMATION",
  },
  {
    id: 2,
    nickName: "닉네임3",
    userId: "user003",
    activityDate: "2021.11.02",
    recentActivityDate: "2021.11.02 오후 2시",
    state: "REJECT",
  },
  {
    id: 3,
    nickName: "닉네임4",
    userId: "user004",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 4시",
    state: "CONFIRMATION",
  },
  {
    id: 4,
    nickName: "닉네임5",
    userId: "user005",
    activityDate: "2021.12.05",
    recentActivityDate: "2021.12.05 오후 5시",
    state: "WAITING",
  },
  {
    id: 5,
    nickName: "닉네임6",
    userId: "user006",
    activityDate: "2021.11.06",
    recentActivityDate: "2021.11.06 오후 1시",
    state: "CONFIRMATION",
  },
  {
    id: 6,
    nickName: "닉네임7",
    userId: "user007",
    activityDate: "2021.12.07",
    recentActivityDate: "2021.12.07 오후 1시",
    state: "CONFIRMATION",
  },
  {
    id: 7,
    nickName: "닉네임8",
    userId: "user008",
    activityDate: "2021.12.03",
    recentActivityDate: "2021.12.03 오후 1시",
    state: "REJECT",
  },
  {
    id: 8,
    nickName: "닉네임9",
    userId: "user009",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 1시",
    state: "CONFIRMATION",
  },
  {
    id: 9,
    nickName: "닉네임10",
    userId: "user010",
    activityDate: "2022.03.01",
    recentActivityDate: "2022.03.01 오후 1시",
    state: "WAITIMG",
  },
];

const DemandOrganization = [
  {
    id: 0,
    name: "기관/단체명 1",
    address: "기관 주소 1",
    contactInfo: "010-0101-0101",
    maximumNumberOfPeople: 15,
    registeredActivities: 30,
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03",
    state: "WATING",
  },
  {
    id: 1,
    name: "기관/단체명 2",
    address: "기관 주소 2",
    contactInfo: "010-0101-0102",
    maximumNumberOfPeople: 25,
    registeredActivities: 32,
    activityDate: "2021.11.23",
    recentActivityDate: "2021.11.23",
    state: "CONFIRMATION",
  },
  {
    id: 2,
    name: "기관/단체명 3",
    address: "기관 주소 3",
    contactInfo: "010-0103-0103",
    maximumNumberOfPeople: 20,
    registeredActivities: 32,
    activityDate: "2021.12.23",
    recentActivityDate: "2021.12.23",
    state: "REJECT",
  },
  {
    id: 3,
    name: "기관/단체명 4",
    address: "기관 주소 4",
    contactInfo: "010-0404-0101",
    maximumNumberOfPeople: 45,
    registeredActivities: 40,
    activityDate: "2021.11.04",
    recentActivityDate: "2021.11.04",
    state: "WATING",
  },
  {
    id: 4,
    name: "기관/단체명 5",
    address: "기관 주소 5",
    contactInfo: "010-0101-0102",
    maximumNumberOfPeople: 25,
    registeredActivities: 32,
    activityDate: "2021.11.23",
    recentActivityDate: "2021.11.23",
    state: "CONFIRMATION",
  },
  {
    id: 5,
    name: "기관/단체명 6",
    address: "기관 주소 6",
    contactInfo: "010-0106-0106",
    maximumNumberOfPeople: 26,
    registeredActivities: 62,
    activityDate: "2021.12.26",
    recentActivityDate: "2021.12.26",
    state: "REJECT",
  },
  {
    id: 6,
    name: "기관/단체명 7",
    address: "기관 주소 7",
    contactInfo: "010-0177-7701",
    maximumNumberOfPeople: 17,
    registeredActivities: 70,
    activityDate: "2021.11.27",
    recentActivityDate: "2021.11.27",
    state: "WATING",
  },
  {
    id: 7,
    name: "기관/단체명 8",
    address: "기관 주소 8",
    contactInfo: "010-0181-0188",
    maximumNumberOfPeople: 85,
    registeredActivities: 12,
    activityDate: "2022.02.23",
    recentActivityDate: "2022.02.23",
    state: "CONFIRMATION",
  },
  {
    id: 8,
    name: "기관/단체명 9",
    address: "기관 주소 9",
    contactInfo: "010-0193-0109",
    maximumNumberOfPeople: 29,
    registeredActivities: 92,
    activityDate: "2022.01.09",
    recentActivityDate: "2021.01.09",
    state: "REJECT",
  },
  {
    id: 9,
    name: "기관/단체명 10",
    address: "기관 주소 10",
    contactInfo: "010-0110-0110",
    maximumNumberOfPeople: 10,
    registeredActivities: 32,
    activityDate: "2021.12.10",
    recentActivityDate: "2021.12.10",
    state: "REJECT",
  },
];

const RegisteredDemandUsers = [
  {
    id: 0,
    nickName: "닉네임1",
    userId: "user001",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 1시",
    state: "WATING",
  },
  {
    id: 1,
    nickName: "닉네임2",
    userId: "user002",
    activityDate: "2021.12.03",
    recentActivityDate: "2021.12.03 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 2,
    nickName: "닉네임3",
    userId: "user003",
    activityDate: "2021.11.02",
    recentActivityDate: "2021.11.02 오후 2시",
    state: "WAITIMG",
  },
  {
    id: 3,
    nickName: "닉네임4",
    userId: "user004",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 4시",
    state: "WAITIMG",
  },
  {
    id: 4,
    nickName: "닉네임5",
    userId: "user005",
    activityDate: "2021.12.05",
    recentActivityDate: "2021.12.05 오후 5시",
    state: "WAITING",
  },
  {
    id: 5,
    nickName: "닉네임6",
    userId: "user006",
    activityDate: "2021.11.06",
    recentActivityDate: "2021.11.06 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 6,
    nickName: "닉네임7",
    userId: "user007",
    activityDate: "2021.12.07",
    recentActivityDate: "2021.12.07 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 7,
    nickName: "닉네임8",
    userId: "user008",
    activityDate: "2021.12.03",
    recentActivityDate: "2021.12.03 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 8,
    nickName: "닉네임9",
    userId: "user009",
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03 오후 1시",
    state: "WAITIMG",
  },
  {
    id: 9,
    nickName: "닉네임10",
    userId: "user010",
    activityDate: "2022.03.01",
    recentActivityDate: "2022.03.01 오후 1시",
    state: "WAITIMG",
  },
];

const RegisteredDemandOrganization = [
  {
    id: 0,
    name: "기관/단체명 1",
    address: "기관 주소 1",
    contactInfo: "010-0101-0101",
    maximumNumberOfPeople: 15,
    registeredActivities: 30,
    activityDate: "2021.11.03",
    recentActivityDate: "2021.11.03",
    state: "WATING",
  },
  {
    id: 1,
    name: "기관/단체명 2",
    address: "기관 주소 2",
    contactInfo: "010-0101-0102",
    maximumNumberOfPeople: 25,
    registeredActivities: 32,
    activityDate: "2021.11.23",
    recentActivityDate: "2021.11.23",
    state: "WAITING",
  },
  {
    id: 2,
    name: "기관/단체명 3",
    address: "기관 주소 3",
    contactInfo: "010-0103-0103",
    maximumNumberOfPeople: 20,
    registeredActivities: 32,
    activityDate: "2021.12.23",
    recentActivityDate: "2021.12.23",
    state: "WAITING",
  },
  {
    id: 3,
    name: "기관/단체명 4",
    address: "기관 주소 4",
    contactInfo: "010-0404-0101",
    maximumNumberOfPeople: 45,
    registeredActivities: 40,
    activityDate: "2021.11.04",
    recentActivityDate: "2021.11.04",
    state: "WATING",
  },
  {
    id: 4,
    name: "기관/단체명 5",
    address: "기관 주소 5",
    contactInfo: "010-0101-0102",
    maximumNumberOfPeople: 25,
    registeredActivities: 32,
    activityDate: "2021.11.23",
    recentActivityDate: "2021.11.23",
    state: "WAITING",
  },
  {
    id: 5,
    name: "기관/단체명 6",
    address: "기관 주소 6",
    contactInfo: "010-0106-0106",
    maximumNumberOfPeople: 26,
    registeredActivities: 62,
    activityDate: "2021.12.26",
    recentActivityDate: "2021.12.26",
    state: "WAITING",
  },
  {
    id: 6,
    name: "기관/단체명 7",
    address: "기관 주소 7",
    contactInfo: "010-0177-7701",
    maximumNumberOfPeople: 17,
    registeredActivities: 70,
    activityDate: "2021.11.27",
    recentActivityDate: "2021.11.27",
    state: "WATING",
  },
  {
    id: 7,
    name: "기관/단체명 8",
    address: "기관 주소 8",
    contactInfo: "010-0181-0188",
    maximumNumberOfPeople: 85,
    registeredActivities: 12,
    activityDate: "2022.02.23",
    recentActivityDate: "2022.02.23",
    state: "WAITING",
  },
  {
    id: 8,
    name: "기관/단체명 9",
    address: "기관 주소 9",
    contactInfo: "010-0193-0109",
    maximumNumberOfPeople: 29,
    registeredActivities: 92,
    activityDate: "2022.01.09",
    recentActivityDate: "2021.01.09",
    state: "WAITING",
  },
  {
    id: 9,
    name: "기관/단체명 10",
    address: "기관 주소 10",
    contactInfo: "010-0110-0110",
    maximumNumberOfPeople: 10,
    registeredActivities: 32,
    activityDate: "2021.12.10",
    recentActivityDate: "2021.12.10",
    state: "WAITING",
  },
];

export {
  ParticipatingUsers,
  ParticipatingOrganization,
  RegisteredParticipatingUsers,
  RegisteredParticipatingOrganization,
  DemandUsers,
  DemandOrganization,
  RegisteredDemandUsers,
  RegisteredDemandOrganization,
};
export default AllActivities;
