// 번역 작업 안내
// 아래 문구 묶음은 페이지 상단 → 하단 순서입니다. 각 묶음 안에서도 화면 등장 순서를 따릅니다.
// 따옴표 안의 문구만 수정하세요. 키 이름, 배열 순서, 하단 export 연결은 변경하지 않습니다.
// \n은 의도한 줄바꿈입니다. 이미지 설명(Alt)과 접근성 문구도 번역 대상입니다.
// 여러 곳에서 쓰는 공통 문구는 첫 등장 위치에 한 번만 둡니다.
// 현재 화면에 직접 연결되지 않은 문구는 해당 묶음 끝에 보존합니다.
// 한국어 문구 변경 시 index.html도 함께 수정합니다.(외국어x) 이미지 경로·통계 숫자는 HTML에서 관리합니다.

// ── 01. 페이지 제목 ──
const pageTitle = "Bệnh viện Heung-K | Trang web tiếng Việt";

// ── 02. 언어 메뉴 제목 ──
const languageLabel = "Chọn ngôn ngữ";

// ── 03. 상단 헤더 ──
const header = {
  "languageButton": "global",
  "phoneLabel": "시안용 임시 전화번호(수정안해도 됨 일단)",
  "navLabel": "Menu chính"
};

// ── 04. 언어 선택 ──
const languageNames = {
  "ko": "Tiếng Hàn",
  "en": "Tiếng Anh",
  "zh": "Tiếng Trung",
  "ja": "Tiếng Nhật",
  "ru": "Tiếng Nga",
  "mn": "Tiếng Mông Cổ",
  "hi": "Tiếng Hindi",
  "ar": "Tiếng Ả Rập",
  "vi": "Tiếng Việt"
};

// ── 05. 홈 링크 ──
const homeLabel = "Trang chủ Bệnh viện Heung-K";

// ── 06. 상단 내비게이션 ──
const nav = {
  "about": "Giới thiệu",
  "specialties": "Chuyên khoa",
  "doctors": "Đội ngũ bác sĩ",
  "facilities": "Cơ sở vật chất",
  "inquiry": "Liên hệ",
  "location": "Đường đi"
};

// ── 07. 메인 비주얼 ──
const hero = {
    researchTitle: "Vượt trên điều trị, bằng nghiên cứu và đào tạo,\nhướng tới cuộc sống tốt đẹp hơn.",
    researchLabel: "Vượt trên điều trị, bằng nghiên cứu và đào tạo, hướng tới cuộc sống tốt đẹp hơn.",
  "period": "Hằng năm",
  "unit": "Ca phẫu thuật",
  "title": "Phẫu thuật khớp càng khó, kinh nghiệm càng quan trọng",
  "descriptionFirst": "Bệnh viện Heung-K chuyên thực hiện các ca phẫu thuật khớp phức tạp, bao gồm thay lại khớp nhân tạo, dựa trên kinh nghiệm phẫu thuật phong phú và hợp tác y khoa quốc tế thường xuyên.",
  "descriptionSecond": "Chúng tôi đánh giá kỹ tình trạng và tiền sử điều trị của từng bệnh nhân, đồng thời không ngừng nâng cao chuyên môn để lựa chọn phương pháp phù hợp, kể cả với những ca phẫu thuật khó.",
  "carouselLabel": "Các dịch vụ nổi bật của Bệnh viện Heung-K",
  "minimalTitle": "Thay khớp nhân tạo qua đường mổ nhỏ",
  "orKicker": "Vì sự an toàn trong phẫu thuật",
  "orClean": "Độ sạch cao",
  "orRooms": "Vận hành 5 phòng mổ",
  "orSpecialty": "Chuyên khoa gây mê và điều trị đau",
  "orStaff": "Bác sĩ chuyên khoa thường trực",
  "nursingWards": "Tại tất cả các khoa nội trú",
  "nursingHours": "24 giờ",
  "nursingService": "Dịch vụ điều dưỡng và chăm sóc tích hợp",
  "nursingDescription": "Chăm sóc điều dưỡng suốt 24 giờ giúp người bệnh an tâm trong thời gian nằm viện.",
  "rehabLead": "Phù hợp với từng giai đoạn hồi phục",
  "rehabPersonal": "Cá nhân hóa một kèm một",
  "rehabTreatment": "Phục hồi chức năng",
  "rehabDescription": "Dựa trên đánh giá chức năng của từng người bệnh, chương trình phục hồi có hệ thống giúp khôi phục chức năng cơ thể và trở lại sinh hoạt hằng ngày.",
  "orPhotoAlt": "Đội ngũ y tế thực hiện phẫu thuật trong phòng mổ",
  "rehabPhotoAlt": "Cơ sở phục hồi chức năng cá nhân hóa",
  "previous": "Trang chiếu trước",
  "next": "Trang chiếu tiếp theo",
  "pause": "Dừng trình chiếu tự động",
  "play": "Bật trình chiếu tự động"
};

// ── 08. About HEUNG-K · Giới thiệu bệnh viện ──
const about = {
  "kicker": "About HEUNG-K",
  "title": "Không ngừng nâng cao chuyên môn điều trị khớp và cột sống,\nhướng tới chuẩn mực chăm sóc mới.",
  "description": [
    "Bệnh viện Heung-K chuyên điều trị các bệnh lý về khớp gối, khớp háng, khớp vai, cột sống, bàn tay và bàn chân.\nVới kinh nghiệm lâm sàng phong phú, chúng tôi chăm sóc toàn diện từ chẩn đoán, điều trị, phẫu thuật đến phục hồi chức năng.",
    "Chúng tôi không ngừng nghiên cứu, đào tạo và trao đổi y khoa quốc tế, giúp bệnh nhân sớm trở lại cuộc sống khỏe mạnh, năng động."
  ],
  "statsLabel": "Tổng quan về Bệnh viện Heung-K",
  "statLabels": {
    "bed": "Số giường bệnh",
    "doctor": "Bệnh nhân ngoại trú",
    "iv": "Bệnh nhân nội trú",
    "world": "Bệnh nhân quốc tế",
    "stethoscope": "Số ca phẫu thuật"
  },
  "galleryLabel": "Hoạt động khám chữa bệnh và trao đổi chuyên môn tại Bệnh viện Heung-K",
  "photoAlt": {
    "row1-1": "Đội ngũ y tế đang thực hiện phẫu thuật",
    "row1-2": "Đội ngũ y tế đang tư vấn cho bệnh nhân",
    "row1-3": "Thuyết trình tại hội nghị khoa học quốc tế",
    "row1-4": "Tư vấn khám chữa bệnh",
    "row1-5": "Trao đổi chuyên môn y khoa tại phòng phẫu thuật",
    "row2-1": "Thăm các cơ sở y tế ở nước ngoài",
    "row2-2": "Giao lưu chuyên môn với đội ngũ y tế quốc tế",
    "row2-3": "Đội ngũ y tế tham gia phẫu thuật",
    "row2-4": "Gặp gỡ đội ngũ y tế",
    "row2-5": "Hoạt động đào tạo y khoa",
    "row2-6": "Đội ngũ bác sĩ quốc tế tham gia chương trình đào tạo",
    "row2-7": "Ảnh tập thể các học viên tham gia đào tạo"
  },
  "pause": "사진 움직임 멈추기 안해도됨",
  "resume": "사진 움직임 재생 안해도됨"
};

// ── 09. GLOBAL EXCELLENCE · HSS 교류 ──
const global = {
  "kicker": "GLOBAL EXCELLENCE",
  "leadStart": "Trải nghiệm chuẩn mực phẫu thuật chỉnh hình quốc tế tại ",
  "hospital": "Bệnh viện Heung-K",
  "leadEnd": ".",
  "description": "Học hỏi từ các cơ sở y tế hàng đầu thế giới, đồng thời chia sẻ kinh nghiệm với cộng đồng y khoa quốc tế.\nBệnh viện Heung-K không ngừng nâng cao chất lượng điều trị khớp và cột sống.",
  "awardsLabel": "Thứ hạng chuyên khoa Chấn thương Chỉnh hình của HSS",
  "yearsUnit": "YEARS",
  "newsweek": "Đứng đầu thế giới về chỉnh hình 5 năm liên tiếp",
  "usnews": "Đứng đầu Hoa Kỳ về chỉnh hình 17 năm liên tiếp",
  "hssTitle": "HSS – Chuẩn mực hàng đầu thế giới về chỉnh hình",
  "hssDescription": "HSS (Hospital for Special Surgery) tại Manhattan, New York là một trong những bệnh viện chuyên khoa chỉnh hình hàng đầu thế giới, tiên phong trong khám chữa bệnh, nghiên cứu, đào tạo và đổi mới y khoa.",
  "imageAlt": {
    "hssSnf": "Giám đốc Bệnh viện Jong-Keun Kim thăm Trung tâm Tái tạo Khớp HSS SNF",
    "surgeryExchange": "Đội ngũ y tế trao đổi kinh nghiệm tại phòng phẫu thuật HSS",
    "hssBuilding": "Toàn cảnh Bệnh viện HSS tại New York",
    "hssVisit": "Giám đốc Bệnh viện Jong-Keun Kim trước phòng phẫu thuật HSS",
    "surgeryTeam": "Đội ngũ y tế tham gia phẫu thuật tại HSS",
    "colleagues": "Giám đốc Bệnh viện Jong-Keun Kim cùng đội ngũ y tế HSS",
    "operatingRoom": "Trao đổi chuyên môn tại phòng phẫu thuật HSS",
    "hssLobby": "Giám đốc Bệnh viện Jong-Keun Kim trong chuyến thăm HSS",
    "visitorTeam": "Ảnh lưu niệm cùng đội ngũ y tế HSS trong chuyến đào tạo",
    "surgicalDiscussion": "Đội ngũ y tế trao đổi kinh nghiệm và chuyên môn trong ca phẫu thuật"
  },
  "hssExchangeTitle": "Học hỏi từ HSS,\nchia sẻ chuyên môn của Heung-K",
  "hssExchangeFirst": "Giám đốc đại diện Jong-Keun Kim đã tham gia HSS Academic Visitor Program (AVP) và chương trình Visiting Scholar của Đại học Cornell, tiếp cận các hoạt động lâm sàng và nghiên cứu chỉnh hình tiên tiến.",
  "hssExchangeSecond": "Ông thường xuyên trao đổi kinh nghiệm phẫu thuật thay khớp với các bác sĩ tại HSS, đồng thời chia sẻ kỹ thuật và kinh nghiệm phẫu thuật MIS TKA của Bệnh viện Heung-K, góp phần thúc đẩy hợp tác y khoa quốc tế.",
  "watermark": "HSS IN KOREA"
};

// ── 10. APKASS · 국제 학술대회 ──
const apkass = {
  "logoKasAlt": "Logo Hội Nội soi Khớp Hàn Quốc",
  "logoApkassAlt": "Logo APKASS 2026 KOREA",
  "eyebrow": "Diễn đàn học thuật quốc tế hội tụ những tri thức mới",
  "leadership": "INTERNATIONAL ACADEMIC LEADERSHIP",
  "apkass": "APKASS",
  "year": "2026",
  "korea": "KOREA",
  "ickas": "ICKAS",
  "description": "Hội nghị khoa học quốc tế quy tụ các chuyên gia trên thế giới để chia sẻ nghiên cứu và tiến bộ điều trị mới nhất",
  "founder01Alt": "Ảnh lưu niệm tập thể tại hội nghị APKASS 2026",
  "founder02Alt": "Lễ trao kỷ niệm chương công nhận Bệnh viện Heung-K là bệnh viện đối tác chính thức của APKASS 2026",
  "hospital": "Bệnh viện Heung-K — ",
  "partnership": "đối tác bệnh viện chính thức của APKASS 2026",
  "contributor": "OFFICIAL INSTITUTIONAL CONTRIBUTOR",
  "founder": "FOUNDER",
  "chairpersonAlt": "Giám đốc đại diện Jong-Keun Kim được giới thiệu trên màn hình tại hội nghị khoa học quốc tế",
  "name": "Jong-Keun Kim",
  "role": "Giám đốc đại diện",
  "session": "Chủ tọa phiên khoa học tại APKASS 2026",
  "session01Alt": "Giám đốc đại diện Jong-Keun Kim chủ tọa phiên khoa học tại APKASS 2026",
  "session02Alt": "Phiên báo cáo và thảo luận khoa học tại APKASS 2026",
  "gallery01Alt": "Các chuyên gia tham dự và lắng nghe bài giảng tại hội nghị quốc tế",
  "gallery02Alt": "Đại biểu tập trung theo dõi phiên khoa học",
  "gallery03Alt": "Giám đốc đại diện Jong-Keun Kim giao lưu với chuyên gia quốc tế",
  "gallery04Alt": "Chuyên gia quốc tế trình bày tại APKASS 2026",
  "gallery05Alt": "Toàn cảnh hội trường chính của hội nghị khoa học quốc tế",
  "gallery06Alt": "Phiên khoa học quốc tế với các bài trình bày và thảo luận",
  "gallery07Alt": "Đại biểu chăm chú lắng nghe tại phiên khoa học"
};

// ── 11. MIS TKA · 최소침습 수술 ──
const mis = {
  "kicker": "MIS TKA · Minimally Invasive TKA",
  "title": "Phẫu thuật thay khớp gối với đường mổ tối thiểu",
  "description": "Phẫu thuật thay khớp gối với đường mổ tối thiểu giúp hạn chế tổn thương mô mềm, giảm đau sau mổ, hỗ trợ phục hồi chức năng sớm và nhanh chóng trở lại sinh hoạt thường ngày, đồng thời nâng cao sự hài lòng của bệnh nhân.",
  "imageAlt": {
    "kneeVisual": "Cấu trúc xương khớp gối",
    "incisionComparison": "Hình minh họa so sánh vị trí đường mổ ở gối với chiều dài ngón trỏ"
  },
  "claimStartFirst": "Kỹ thuật",
  "claimStartSecond": "độc nhất trên thế giới",
  "claimEndFirst": "Đúng nghĩa",
  "claimEndSecond": "Đường mổ tối thiểu",
  "questionLabel": "Question",
  "questionFirst": "Điều gì",
  "questionStrong": "tạo nên sự khác biệt?",
  "differenceFirst": "Phẫu thuật được thực hiện trong khớp gối qua hai đường rạch khoảng 3–4 cm, lần lượt ở phía trên và dưới xương bánh chè.",
  "differenceSecond": "So với đường mổ truyền thống khoảng 7–9 cm (tương đương chiều dài ngón trỏ),",
  "differenceThird": "kỹ thuật này hướng tới giảm tối đa chiều dài đường mổ và tổn thương các mô xung quanh.",
  "captionName": "MIS TKA",
  "captionSuffix": " · Minimally Invasive TKA",
  "benefitTitle": "Vết mổ nhỏ, phục hồi khác biệt",
  "benefitIntro": "MIS TKA tại Bệnh viện Heung-K hướng tới giảm tổn thương mô và gánh nặng sau mổ, giúp bệnh nhân phục hồi chức năng sớm và nhanh trở lại sinh hoạt thường ngày.",
  "benefit1Title": "Phẫu thuật với đường mổ nhỏ",
  "benefit1Description": "Không rạch vùng đùi\nHạn chế tối đa đường rạch vùng cẳng chân",
  "benefit2Title": "Chỉ thực hiện các đường rạch cần thiết",
  "benefit2Description": "Hai đường rạch trên và dưới, mỗi đường khoảng 3–4 cm\nTiếp cận chính xác vùng cần phẫu thuật",
  "benefit3Title": "Thay khớp gối chính xác, ít xâm lấn",
  "benefit3Description": "Phẫu thuật bên trong khớp gối\nThực hiện thay khớp nhân tạo với độ chính xác cao."
};

// ── 12. 차별화된 치료 · JK Minimal ──
const treatment = {
  "hospital": "Bệnh viện Heung-K",
  "titleFirst": " mang đến",
  "titleSecond": " giải pháp điều trị chuyên biệt",
  "titleThird": " cho từng bệnh nhân.",
  "intro": "Giải pháp riêng của Bệnh viện Heung-K\ncho phẫu thuật chính xác và bài bản",
  "imageAlt": {
    "patentFrame": "Bằng sáng chế số 10-2622418 về dụng cụ đo kích thước xương chày trong phẫu thuật thay khớp gối toàn phần ít xâm lấn",
    "jkMinimal": "Dụng cụ JK Minimal đo kích thước xương chày và xương đùi",
    "psi": "Dụng cụ phẫu thuật PSI thiết kế theo cấu trúc xương của bệnh nhân",
    "mako": "Robot hỗ trợ phẫu thuật thay khớp MAKO"
  },
  "systemName": "InJury Knee Minimal:",
  "systemShortName": "JK Minimal",
  "patentEmphasis": "Phẫu thuật thay khớp gối với đường mổ tối thiểu",
  "patentDescription": "Dụng cụ đo kích thước xương chày và xương đùi",
  "methodLabel": "Ưu điểm của JK Minimal",
  "maximum": "Tối đa",
  "efficiency": "Hiệu quả",
  "methodDescription": "Phát triển hệ thống thay khớp nhân tạo (InJury Knee Minimal / JK Minimal), tối ưu không gian thao tác ngay cả với đường mổ tối thiểu",
  "minimumInjury": "Tối thiểu",
  "injury": "Tổn thương",
  "minimumIncision": "Tối thiểu",
  "incision": "Đường mổ",
  "strategiesTitle": "Giải pháp cá thể hóa nhằm cải thiện kết quả phẫu thuật và sự hài lòng của bệnh nhân",
  "psiTitle": "PSI",
  "psiSubtitle": "Thay khớp nhân tạo cá thể hóa",
  "psiDescription": "Sử dụng dụng cụ phẫu thuật 3D cá thể hóa (PSI) theo cấu trúc xương để đặt khớp nhân tạo chính xác",
  "makoTitle": "MAKO",
  "makoSubtitle": "Phẫu thuật thay khớp bằng robot",
  "makoDescription": "Lập kế hoạch phẫu thuật 3D cá thể hóa dựa trên CT, giúp cắt xương chính xác trong phạm vi đã định, kết hợp độ chính xác của robot với kỹ thuật ít xâm lấn",
  "windowTitle": "Mobile Window Technique",
  "windowSubtitle": "Tạo không gian phẫu thuật qua đường mổ tối thiểu",
  "windowDescription": "Kỹ thuật Mobile Window Technique giúp tận dụng tối đa không gian thao tác qua đường mổ nhỏ"
};

// ── 13. 절개 비교 · 치료 장점 ──
const incision = {
  "titleAccent": "Đường mổ nhỏ",
  "title": "Khác biệt thấy rõ",
  "imageAlt": {
    "case68": "So sánh vết mổ ở hai đầu gối của bệnh nhân nữ 68 tuổi",
    "case72": "So sánh vết mổ ở hai đầu gối của bệnh nhân nữ 72 tuổi",
    "case79": "So sánh vết mổ ở hai đầu gối của bệnh nhân nam 79 tuổi"
  },
  "otherHospital": "Bệnh viện khác",
  "ourHospital": "Bệnh viện Heung-K",
  "ageUnit": "tuổi",
  "femalePatient": "Bệnh nhân nữ",
  "malePatient": "Bệnh nhân nam",
  "benefitsAccent": "Phẫu thuật thay khớp gối với đường mổ tối thiểu",
  "benefitsTitle": "Ưu điểm",
  "painTitle": "Giảm đau sau phẫu thuật",
  "painDescription": "Đường mổ nhỏ giúp hạn chế tổn thương mô mềm (cơ, dây chằng...), từ đó giảm đau sau mổ và giảm nhu cầu dùng thuốc giảm đau.",
  "movementTitle": "Vận động khớp linh hoạt\nCó thể đi lại sớm",
  "movementDescription": "Ít tổn thương mô giúp giảm nguy cơ dính khớp, cải thiện khả năng vận động và giúp bệnh nhân đi lại sớm sau phẫu thuật.",
  "scarTitle": "Hạn chế sẹo",
  "scarDescription": "Đường mổ nhỏ giúp sẹo sau phẫu thuật ít lộ rõ hơn, góp phần nâng cao sự hài lòng của bệnh nhân.",
  "recoveryTitle": "Rút ngắn thời gian nằm viện, sớm trở lại sinh hoạt",
  "recoveryDescription": "Phục hồi nhanh hơn giúp rút ngắn thời gian nằm viện và sớm trở lại sinh hoạt thường ngày."
};

// ── 14. 카데바 워크숍 ──
const cadaver = {
  "kicker": "MIS TKA · CADAVER WORKSHOP",
  "title": "Trung tâm Đào tạo Quốc tế về Phẫu thuật Thay khớp Ít xâm lấn và Cá thể hóa",
  "word": "CADAVER",
  "workshopLabel": "MIS TKA CADAVER WORKSHOP",
  "workshop": "Tổ chức thành công hội thảo CADAVER trong hai năm liên tiếp 2025 và 2026",
  "training": "Đào tạo kỹ thuật thay khớp với đường mổ tối thiểu",
  "hospital": "Bệnh viện Heung-K",
  "descriptionFirst": "tổ chức hội thảo CADAVER dành cho các bác sĩ chuyên khoa chấn thương chỉnh hình trong và ngoài nước,",
  "descriptionSecond": "chia sẻ kỹ thuật và kinh nghiệm lâm sàng về phẫu thuật thay khớp với đường mổ tối thiểu,",
  "descriptionThird": "đồng thời duy trì hoạt động đào tạo bác sĩ và trao đổi học thuật.",
  "imageAlt": {
    "workshopGroupFramed": "Ảnh tập thể các bác sĩ tham dự hội thảo CADAVER trong khung ảnh vàng",
    "workshopCollageFramed": "Khung ảnh vàng ghi lại các buổi giảng dạy, thực hành và giao lưu tại hội thảo CADAVER",
    "trophy": "Cúp hình bàn tay màu vàng trang trí khu vực hội thảo CADAVER"
  }
};

// ── 15. 연구 및 학술 활동 ──
const research = {
  "titleAccent": "Kinh nghiệm lâm sàng",
  "titleRest": "thúc đẩy nghiên cứu",
  "descriptionFirst": "Không ngừng nghiên cứu dựa trên kinh nghiệm lâm sàng phong phú,",
  "descriptionSecond": "chúng tôi chia sẻ kết quả nghiên cứu qua các hội nghị và tạp chí y khoa trong nước và quốc tế.",
  "kicker": "RESEARCH & PUBLICATIONS",
  "sliderLabel": "Hình ảnh hoạt động học thuật của đội ngũ y tế",
  "carouselRole": "carousel",
  "slideRole": "slide",
  "imageAlt": {
    "aaosPresentation": "Giám đốc đại diện Jong-Keun Kim trình bày tại hội nghị chỉnh hình quốc tế",
    "yonseiWorkshop": "Đội ngũ y tế trao đổi chuyên môn tại hội thảo CADAVER, Đại học Yonsei",
    "koaPresentation": "Đội ngũ y tế trình bày kết quả nghiên cứu lâm sàng tại hội nghị chỉnh hình",
    "publication01": "Khung trưng bày bài báo nghiên cứu của Bệnh viện Heung-K 1",
    "publication02": "Khung trưng bày bài báo nghiên cứu của Bệnh viện Heung-K 2",
    "publication03": "Khung trưng bày bài báo nghiên cứu của Bệnh viện Heung-K 3",
    "publication04": "Khung trưng bày bài báo nghiên cứu của Bệnh viện Heung-K 4",
    "publication05": "Khung trưng bày bài báo nghiên cứu của Bệnh viện Heung-K 5",
    "publication06": "Khung trưng bày bài báo nghiên cứu của Bệnh viện Heung-K 6",
    "publication07": "Khung trưng bày bài báo nghiên cứu của Bệnh viện Heung-K 7",
    "publication08": "Khung trưng bày bài báo nghiên cứu của Bệnh viện Heung-K 8"
  },
  "photoCaption1": "AAOS PRESENTATION",
  "photoCaption2": "CADAVER WORKSHOP",
  "photoCaption3": "ORTHOPAEDIC RESEARCH PRESENTATION",
  "controlsLabel": "사진 슬라이드 제어-안해도됨",
  "previous": "이전 사진-안해도됨",
  "photoPause": "사진 자동 재생 멈추기-안해도됨",
  "photoPlay": "사진 자동 재생 시작-안해도됨",
  "next": "다음 사진-안해도됨",
  "publications": "PUBLICATIONS",
  "marqueeLabel": "연구 논문 액자-안해도됨",
  "marqueePause": "액자 움직임 멈추기-안해도됨",
  "marqueePlay": "액자 움직임 시작-안해도됨"
};

// ── 16. 전문 진료 분야 · 의료진 개요 ──
const specialty = {
  "kicker": "SPECIALTIES",
  "titleFirst": "SPECIALTY",
  "titleSecond": "CENTER",
  "doctorsLabel": "Đội ngũ bác sĩ Bệnh viện Heung-K",
  "parkJinHyung": "Dr. Jin-Hyoung Park",
  "kimJunSung": "Dr. Junsung Kim",
  "jungSeungJin": "Dr. Seung Jin Jung",
  "kimSeHoon": "Dr. Sehun Kim",
  "leeMyungChul": "Dr. Myung Chul Lee - Giám đốc danh dự",
  "kimJongGeun": "Dr. Jong-Keun Kim - Giám đốc đại diện",
  "leeSuGeon": "Dr. Su-Keon Lee",
  "leeJunYoung": "Dr. Joon Young Lee",
  "leeKyungHwa": "Dr. Gyeong Hwa Lee",
  "joNamIk": "Dr. Nam Ik Cho",
  "yoonSangHoon": "Dr. Sang Hoon Yoon"
};

// ── 17. 전담센터 퀵메뉴 ──
const centerMenu = {
  "label": "Truy cập nhanh các trung tâm chuyên khoa",
  "title": "QUICK\nMENU",
  "kneeLabel": "Đến Trung tâm Chuyên khoa Khớp gối",
  "knee": "KNEE\nCENTER",
  "shoulderLabel": "Đến Trung tâm Chuyên khoa Khớp vai",
  "shoulder": "SHOULDER\nCENTER",
  "hand-footLabel": "Đến Trung tâm Chuyên khoa Bàn tay và Bàn chân",
  "hand-foot": "HAND & FOOT\nCENTER",
  "spineLabel": "Đến Trung tâm Chuyên khoa Cột sống",
  "spine": "SPINE\nCENTER"
};

// ── 18. 무릎전담센터 · 배너 ──
const knee = {
  "hospital": "Bệnh viện Heung-K",
  "title": "Trung tâm Chuyên khoa Khớp gối",
  "descriptionFirst": "Từ chẩn đoán chính xác, điều trị không phẫu thuật đến phẫu thuật phức tạp và phục hồi chức năng.",
  "descriptionSecond": "Chăm sóc chuyên sâu, toàn diện các bệnh lý khớp gối.",
  "service1": "Robot-Assisted MIS Total Knee Arthroplasty (MAKO system)",
  "service2": "Knee Revision Surgery",
  "service3": "Stem Cell Cartilage Regeneration (CARTISTEM)",
  "service4": "Autologous Chondrocyte Implantation (CartiLife)",
  "service5": "Corrective Osteotomy",
  "service6": "Meniscus Surgery",
  "service7": "Cruciate Ligament Reconstruction and Revision Surgery (ACL / PCL)",
  "service8": "Sports Injury Diagnosis and Treatment",
  "imageAlt": {
    "kimJongGeun": "Dr. Jong-Keun Kim – Giám đốc đại diện",
    "leeJunYoung": "Dr. Joon Young Lee",
    "chosunArticle": "Bài báo Chosun Ilbo: Thay khớp gối với đường mổ nhỏ giúp giảm đau, phục hồi nhanh hơn"
  },
  "articleOpen": "Phóng to ảnh bài báo Chosun Ilbo (mở cửa sổ mới)"
};

// ── 19. 무릎전담센터 · 치료 상세 (공통 펼침/접힘 문구 포함) ──
const centerTreatmentsKnee = {
  "kneeLabel": "Các phương pháp điều trị tại Trung tâm Chuyên khoa Khớp gối",
  "makoTitle": "Robot-Assisted MIS Total Knee Arthroplasty (MAKO)",
  "mako687_1179": "Kết hợp công nghệ robot tiên tiến với chuyên môn phẫu thuật ít xâm lấn của Bệnh viện Heung-K!",
  "imageAlt": {
    "introRobotSystem": "Hệ thống robot hỗ trợ thay khớp MAKO",
    "doctorExperience": "Ê-kíp y tế đang phẫu thuật",
    "makoSystem": "Thiết bị phẫu thuật robot MAKO",
    "planCt": "Thăm khám và lập kế hoạch trước phẫu thuật",
    "customPlan": "Phẫu thuật cá thể hóa",
    "safeOperation": "Thực hiện phẫu thuật an toàn",
    "implant": "Đặt khớp nhân tạo ở vị trí tối ưu",
    "before": "Ảnh X-quang trục chi dưới trước phẫu thuật",
    "planning": "Màn hình lập kế hoạch phẫu thuật MAKO",
    "operating": "Phẫu thuật với robot MAKO",
    "after": "Ảnh X-quang trục chi dưới sau thay khớp",
    "accuracy": "Màn hình MAKO kiểm tra khe khớp và góc độ",
    "makoRobot": "Cánh tay robot MAKO hỗ trợ cắt xương chính xác",
    "safetyArm": "Màn hình MAKO hiển thị phạm vi cắt xương theo kế hoạch",
    "safetyBoundary": "Minh họa vùng an toàn của cánh tay robot nhờ công nghệ phản hồi xúc giác",
    "minimalIncision": "Video giới thiệu phẫu thuật thay khớp bằng robot với đường mổ tối thiểu tại Bệnh viện Heung-K",
    "incisionStandard": "Đường mổ thay khớp bằng robot thông thường: 15–20 cm",
    "incisionMako": "Đường mổ thay khớp bằng robot tại Bệnh viện Heung-K: 7–9 cm",
    "case75Combined": "Ca thay khớp bằng robot với đường mổ tối thiểu tại Bệnh viện Heung-K: 7,5 cm",
    "case70Combined": "Ca thay khớp bằng robot với đường mổ tối thiểu tại Bệnh viện Heung-K: 7 cm"
  },
  "makoToggleContext": "Chi tiết về MAKO ",
  "seeMore": "SEE MORE",
  "seeLess": "SEE LESS",
  "mako995_5015": "Chính xác hơn, chuẩn xác hơn, an toàn hơn",
  "mako995_5017": "Phẫu thuật thay khớp gối bằng robot là kỹ thuật tiên tiến kết hợp kinh nghiệm phẫu thuật của bác sĩ với độ chính xác của robot.",
  "mako995_5018": "Dựa trên hình ảnh CT, bác sĩ phân tích cấu trúc khớp gối 3D để lập kế hoạch về kích thước, vị trí đặt khớp nhân tạo và phạm vi cắt xương. Trong phẫu thuật, bác sĩ kiểm tra độ cân bằng khớp, trực tiếp điều khiển cánh tay robot để cắt xương chính xác theo kế hoạch và đặt khớp nhân tạo.",
  "makoDoctorPrefix": "Kinh nghiệm của ",
  "makoDoctorExperience": "bác sĩ",
  "makoRobotPrefix": "Độ chính xác của ",
  "makoRobotAccuracy": "robot",
  "mako995_5031": "Quy trình thay khớp bằng robot tại Bệnh viện Heung-K",
  "mako995_5038": "Thăm khám và lập kế hoạch trước phẫu thuật",
  "mako995_5039": "Chụp CT trước mổ để tái tạo hình ảnh 3D khớp gối, từ đó lập kế hoạch về kích thước, vị trí đặt khớp nhân tạo và phạm vi cắt xương.",
  "mako995_5047": "Phẫu thuật cá thể hóa",
  "mako995_5048": "Trong quá trình phẫu thuật, bác sĩ điều chỉnh kế hoạch theo thời gian thực dựa trên mức độ biến dạng khớp và tình trạng dây chằng để tăng độ chính xác.",
  "mako995_5056": "Thực hiện phẫu thuật an toàn",
  "mako995_5057": "Bác sĩ trực tiếp điều khiển cánh tay robot để cắt xương chính xác trong phạm vi đã định. Công nghệ phản hồi xúc giác (haptic) tự động kiểm soát chuyển động của robot, ngăn dụng cụ vượt khỏi phạm vi cắt xương, giúp bảo vệ mạch máu, dây thần kinh và mô mềm xung quanh.",
  "mako995_5063": "Đặt khớp nhân tạo ở vị trí tối ưu",
  "mako995_5064": "Bác sĩ đặt chính xác khớp nhân tạo phù hợp nhất với bệnh nhân vào vị trí đã lên kế hoạch để hoàn tất phẫu thuật.",
  "before": "BEFORE",
  "makoPrecisionCaption": "Phẫu thuật chính xác với robot MAKO",
  "after": "AFTER",
  "makoFeaturesLead": "Phẫu thuật thay khớp bằng robot,",
  "makoFeaturesQuestion": "Robot MAKO có gì khác biệt?",
  "mako995_5091": "Lập kế hoạch phẫu thuật chính xác",
  "mako995_5093": "Lập kế hoạch cá thể hóa bằng hình ảnh CT 3D",
  "mako995_5095": "Hình ảnh CT 3D giúp phân tích chi tiết hình dạng và mức độ biến dạng khớp gối của từng bệnh nhân, từ đó lập kế hoạch cá thể hóa về phạm vi cắt xương, kích thước và vị trí đặt khớp nhân tạo.",
  "mako995_5096": "Trong phẫu thuật, phạm vi cắt xương và khe khớp được điều chỉnh chính xác đến 0,5 mm, góc độ đến 0,5°. Nhờ đó, trục chi dưới được điều chỉnh phù hợp, giúp khớp gối vận động tự nhiên.",
  "mako995_5104": "Cắt xương chính xác",
  "mako995_5106": "Cắt xương chính xác bằng cánh tay robot",
  "mako995_5108": "Cắt xương đúng vị trí, góc độ và lượng xương theo kế hoạch.",
  "mako995_5118": "An toàn trong phẫu thuật",
  "mako995_5120": "Giảm rủi ro trong phẫu thuật",
  "mako995_5122": "Công nghệ phản hồi xúc giác (haptic) của MAKO thiết lập vùng an toàn ảo theo kế hoạch phẫu thuật và tự động kiểm soát cánh tay robot, ngăn dụng cụ cắt vượt khỏi phạm vi đã định. Nhờ đó, giúp bảo vệ mạch máu, dây thần kinh, dây chằng và hạn chế cắt xương không cần thiết.",
  "makoMinimalHighlight": "Nhỏ nhất thế giới",
  "makoMinimalTitle": "Phẫu thuật thay khớp bằng robot với đường mổ tối thiểu!",
  "mako995_5129": "Bệnh viện Heung-K sử dụng robot MAKO để cắt xương chính xác, kết hợp kỹ thuật phẫu thuật với đường mổ tối thiểu 7–10 cm.",
  "mako995_5130": "Không chỉ giảm chiều dài đường mổ, kỹ thuật này còn hạn chế tổn thương mô mềm xung quanh, giúp bệnh nhân phục hồi nhanh hơn.",
  "makoVideoLink": "Xem video trên YouTube (mở cửa sổ mới)",
  "makoPrecisionPrefix": "Giữ nguyên độ chính xác của robot, ",
  "makoPrecisionHighlight": "giảm tối đa tổn thương do đường mổ",
  "mako995_5137": "Chiều dài đường mổ trong phẫu thuật thay khớp bằng robot thông thường",
  "makoIncisionHighlight": "Phẫu thuật thay khớp ít xâm lấn bằng robot MAKO tại Bệnh viện Heung-K",
  "makoIncisionSuffix": "Chiều dài đường mổ",
  "mako995_5144": "Các ca thay khớp bằng robot với đường mổ tối thiểu tại Bệnh viện Heung-K",
  "makoBenefitsPrefix": "Bệnh viện Heung-K",
  "makoBenefitsHighlight": "Phẫu thuật thay khớp bằng robot với đường mổ tối thiểu",
  "makoBenefitsSuffix": "Ưu điểm",
  "makoBenefit1Title": "Giảm đau sau phẫu thuật",
  "makoBenefit1Body": "Đường mổ nhỏ giúp hạn chế tổn thương mô mềm (cơ, dây chằng...), từ đó giảm đau sau mổ và giảm nhu cầu dùng thuốc giảm đau.",
  "makoBenefit2Title": "Vận động khớp linh hoạt\nCó thể đi lại sớm",
  "makoBenefit2Body": "Ít tổn thương mô giúp giảm nguy cơ dính khớp, cải thiện khả năng vận động và giúp bệnh nhân đi lại sớm sau phẫu thuật.",
  "makoBenefit3Title": "Hạn chế sẹo",
  "makoBenefit3Body": "Đường mổ nhỏ giúp sẹo sau phẫu thuật ít lộ rõ hơn, góp phần nâng cao sự hài lòng của bệnh nhân.",
  "makoBenefit4Title": "Rút ngắn thời gian nằm viện, sớm trở lại sinh hoạt",
  "makoBenefit4Body": "Phục hồi nhanh hơn giúp rút ngắn thời gian nằm viện và sớm trở lại sinh hoạt thường ngày.",
  "cartistemTitle": "Umbilical Cord–derived Stem Cell (CARTISTEM®)",
  "cartistemDescription": "Điều trị chuyên sâu theo tình trạng tổn thương sụn khớp gối của từng bệnh nhân",
  "cartistemHeroAlt": "Đội ngũ y tế Bệnh viện Heung-K quan sát hình ảnh nội soi khớp trong điều trị CARTISTEM",
  "cartistemToggleContext": "Chi tiết về CARTISTEM",
  "cartistemIntroTitle": "CARTISTEM là sản phẩm điều trị tổn thương sụn khớp gối bằng tế bào gốc trung mô từ máu cuống rốn hiến tặng.",
  "cartistemIntroFirst": "Có thể hình dung tế bào gốc như những “hạt giống” có khả năng biệt hóa thành nhiều loại tế bào trong cơ thể.",
  "cartistemIntroSecond": "Khi được cấy vào vùng sụn khớp gối suy giảm khả năng tái tạo, tế bào gốc tương tác với mô xung quanh và biệt hóa thành tế bào sụn. Đồng thời, thông qua tác dụng cận tiết (paracrine), chúng giải phóng các yếu tố tăng trưởng và phân tử tín hiệu, giúp giảm viêm, thúc đẩy tái tạo sụn tổn thương và hình thành mô sụn mới khỏe mạnh.",
  "cartistemPreparationTitle": "Quy trình chuẩn bị CARTISTEM",
  "cartistemPreparation1Title": "Kiểm tra và chuẩn bị CARTISTEM",
  "cartistemPreparation1Body": "Kiểm tra tình trạng và các thành phần của CARTISTEM trước điều trị",
  "cartistemPreparation2Title": "Mở bao bì vô trùng",
  "cartistemPreparation2Body": "Chuẩn bị điều trị trong điều kiện vô trùng",
  "cartistemPreparation3Title": "Trộn tế bào gốc",
  "cartistemPreparation3Body": "Trộn tế bào gốc trung mô từ máu cuống rốn với axit hyaluronic",
  "cartistemPreparation4Title": "Hoàn tất chuẩn bị cấy ghép",
  "cartistemPreparation4Body": "Hoàn tất pha chế để cấy vào vùng khuyết sụn",
  "cartistemBenefitsTitle": "Ưu điểm của CARTISTEM",
  "cartistemBenefit1": "Không giới hạn độ tuổi, áp dụng được cho cả vùng khuyết sụn rộng",
  "cartistemBenefit2": "Kỳ vọng tái tạo sụn hiệu quả chỉ sau một lần điều trị",
  "cartistemBenefit3": "Không cần lấy sụn tự thân, tránh tổn thương vùng lấy mô",
  "cartistemBenefit4": "Có thể phẫu thuật ít xâm lấn qua nội soi khớp, không cần đường mổ lớn",
  "cartistemSurgeryTitle": "Quy trình phẫu thuật CARTISTEM",
  "cartistemSurgery1": "Xác định vùng khuyết sụn qua nội soi khớp",
  "cartistemSurgery2": "Chuẩn bị bề mặt vùng khuyết sụn",
  "cartistemSurgery3": "Tạo các lỗ xương 3–5 mm tại vùng khuyết sụn",
  "cartistemSurgery4": "Cấy ghép CARTISTEM",
  "cartistemResultsTitle": "So sánh trước và sau điều trị CARTISTEM",
  "cartistemBeforeAlt": "Hình ảnh nội soi vùng khuyết sụn trước điều trị CARTISTEM",
  "cartistemBefore": "before",
  "cartistemAfterAlt": "Hình ảnh nội soi vùng sụn sau 1 năm điều trị CARTISTEM",
  "cartistemAfter": "after",
  "cartistemAfterTime": "Sau 1 năm điều trị",
  "cartilifeTitle": "Costal Autologous Chondrocyte Implantation (CartiLife®)",
  "cartilifeDescription": "Điều trị tái tạo sụn khớp gối bằng tế bào sụn sườn tự thân",
  "cartilifeHeroAlt": "Đội ngũ y tế Bệnh viện Heung-K quan sát hình ảnh nội soi khớp trong phẫu thuật CartiLife",
  "cartilifeToggleContext": "Chi tiết về CartiLife",
  "cartilifeIntroTitle": "Liệu pháp tái tạo sụn tiên tiến sử dụng tế bào sụn sườn tự thân để tái tạo sụn khớp bị tổn thương",
  "cartilifeIntroBody": "Bác sĩ lấy sụn sườn số 8–10 của bệnh nhân, phân lập và nuôi cấy tế bào trong khoảng 6–7 tuần để tạo thành các vi hạt hình cầu. Sau đó, các vi hạt này được cấy vào vùng khuyết sụn khớp gối, giúp tái tạo lớp sụn khỏe mạnh và có chức năng.",
  "cartilifeProcessTitle": "Quy trình điều trị CartiLife",
  "cartilifeHarvest1Alt": "Phẫu thuật lấy mô sụn sườn tự thân",
  "cartilifeHarvest2Alt": "Hình minh họa vị trí lấy sụn sườn",
  "cartilifeHarvest3Alt": "Mô sụn sườn đã lấy",
  "cartilifeHarvest4Alt": "Quy trình xử lý mô sụn sườn đã lấy",
  "cartilifeStep1": "STEP 1",
  "cartilifeStep1Body": "Lấy sụn sườn số 8–10",
  "cartilifeCultureDiagramAlt": "Quy trình phân lập, tăng sinh và nuôi cấy biệt hóa tế bào thành mô sụn dạng hạt cầu",
  "cartilifeCulture1Alt": "Dụng cụ chuẩn bị cấy ghép tế bào sụn đã nuôi cấy",
  "cartilifeCulture2Alt": "Quá trình chuẩn bị tế bào sụn đã nuôi cấy",
  "cartilifeCulture3Alt": "Dụng cụ cấy ghép mô sụn dạng hạt cầu",
  "cartilifeStep2": "STEP 2",
  "cartilifeStep2Body": "Phân lập và tăng sinh tế bào – Nuôi cấy tạo sụn – Tạo mô sụn dạng hạt cầu (đường kính khoảng 1,5 mm)",
  "cartilifeImplant1Alt": "Hình minh họa cấy ghép tế bào sụn tự thân qua nội soi khớp hoặc phẫu thuật mở",
  "cartilifeImplant2Alt": "Hình ảnh nội soi cấy ghép mô sụn tự thân dạng hạt cầu vào vùng khuyết sụn",
  "cartilifeStep3": "STEP 3",
  "cartilifeStep3Body": "Cấy ghép mô sụn tự thân dạng hạt cầu",
  "cartilifeResultsTitle": "So sánh trước và sau điều trị CartiLife",
  "cartilifeBeforeAlt": "Hình ảnh nội soi vùng khuyết sụn trước điều trị CartiLife",
  "cartilifeBefore": "before",
  "cartilifeAfter1Alt": "Hình ảnh nội soi thứ nhất về sụn tái tạo sau 1 năm điều trị CartiLife",
  "cartilifeAfter2Alt": "Hình ảnh nội soi thứ hai về sụn tái tạo sau 1 năm điều trị CartiLife",
  "cartilifeAfter": "after",
  "cartilifeAfterTime": "Sau 1 năm điều trị",
  "megacartiTitle": "Allocostal Cartilage (MegaCarti®)",
  "megacartiDescription": "Điều trị tổn thương sụn chuyên sâu bằng kỹ thuật vi khoan và MegaCarti tại Bệnh viện Heung-K.",
  "megacartiHeroAlt": "Ê-kíp y tế Bệnh viện Heung-K thực hiện phẫu thuật nội soi khớp với MegaCarti",
  "megacartiToggleContext": "Chi tiết về MegaCarti",
  "megacartiIntroTitle": "MegaCarti là vật liệu bổ sung mô sụn, giúp bảo vệ cục máu đông sau vi khoan, hỗ trợ tế bào bám giữ và thúc đẩy tái tạo sụn.",
  "megacartiIntroFirst": "Vi khoan là kỹ thuật tái tạo sụn bằng cách tạo các lỗ nhỏ trên xương dưới sụn tổn thương, giúp tế bào gốc và yếu tố tăng trưởng từ tủy xương đi vào vùng tổn thương. Cơ chế này tận dụng khả năng tự chữa lành của cơ thể, tương tự quá trình hình thành da non. Tuy nhiên, mô sụn mới chủ yếu là sụn xơ, có độ bền và khả năng chịu lực thấp hơn sụn hyalin tự nhiên.",
  "megacartiIntroSecond": "MegaCarti là vật liệu bổ sung mô sụn được sử dụng sau vi khoan nhằm khắc phục hạn chế này. Các hạt sụn sườn đồng loại chứa collagen type II giúp bảo vệ cục máu đông, giữ ổn định tế bào từ tủy xương tại vùng tổn thương và hỗ trợ tái tạo sụn.",
  "megacartiGalleryLabel": "Hình ảnh quy trình phẫu thuật MegaCarti",
  "megacartiSurgery1Alt": "Hình ảnh nội soi xác định vùng sụn tổn thương",
  "megacartiSurgery2Alt": "Hình ảnh nội soi vùng sụn sau khi làm sạch mô tổn thương",
  "megacartiSurgery3Alt": "Hình ảnh nội soi vùng sụn sau vi khoan",
  "megacartiSurgery4Alt": "Hình ảnh nội soi quá trình đưa MegaCarti vào vùng vi khoan",
  "cruciateTitle": "Cruciate Ligament Reconstruction (ACL/PCL)",
  "cruciateDescription": "Tái tạo dây chằng chéo chính xác theo giải phẫu, bảo tồn tối đa phần dây chằng còn lại",
  "cruciateHeroAlt": "Ê-kíp y tế Bệnh viện Heung-K thực hiện phẫu thuật nội soi tái tạo dây chằng chéo",
  "cruciateToggleContext": "Chi tiết về phẫu thuật tái tạo dây chằng chéo",
  "cruciateIntroFirst": "Dây chằng chéo giúp ngăn khớp gối di chuyển quá mức ra trước hoặc ra sau và duy trì sự ổn định khi xoay gối.",
  "cruciateIntroSecond": "Khi đứt dây chằng chéo gây mất vững khớp gối kéo dài, có thể cân nhắc phẫu thuật tái tạo để khôi phục độ vững của khớp và giảm nguy cơ tổn thương thêm sụn chêm và sụn khớp.",
  "cruciateProcessTitle": "Quy trình tái tạo dây chằng chéo",
  "cruciateStep1Body": "Đánh giá tổn thương và bảo tồn phần dây chằng còn lại",
  "cruciateStep1": "STEP 1",
  "cruciateStep2Body": "Chuẩn bị gân ghép và tạo đường hầm xương chính xác",
  "cruciateStep2": "STEP 2",
  "cruciateStep3Body": "Đưa gân ghép vào và cố định vững chắc",
  "cruciateStep3": "Step3",
  "cruciateHospital": "Bệnh viện Heung-K",
  "cruciateProcessBody": "tái tạo dây chằng chéo bằng cách bảo tồn tối đa mô dây chằng còn lại, tạo các đường hầm xương nhỏ đúng vị trí giải phẫu và cố định chắc chắn gân tự thân hoặc gân đồng loại phù hợp với từng bệnh nhân, giúp phục hồi độ vững và chức năng khớp gối.",
  "cruciateAclTitle": "Ca phẫu thuật tái tạo dây chằng chéo trước",
  "cruciateAclBeforeAlt": "Hình ảnh nội soi dây chằng chéo trước bị đứt trước phẫu thuật",
  "cruciateAclBefore": "Dây chằng chéo trước bị đứt – Trước phẫu thuật",
  "cruciateAclAfterAlt": "Hình ảnh nội soi dây chằng chéo trước đã tái tạo sau phẫu thuật",
  "cruciateAclAfter": "Dây chằng chéo trước đã tái tạo – Sau phẫu thuật",
  "cruciatePclTitle": "Ca phẫu thuật tái tạo dây chằng chéo sau",
  "cruciatePclBeforeAlt": "Hình ảnh nội soi dây chằng chéo sau bị đứt trước phẫu thuật",
  "cruciatePclBefore": "Dây chằng chéo sau bị đứt – Trước phẫu thuật",
  "cruciatePclAfterAlt": "Hình ảnh nội soi dây chằng chéo sau đã tái tạo sau phẫu thuật",
  "cruciatePclAfter": "Dây chằng chéo sau đã tái tạo – Sau phẫu thuật",
  "cruciateBenefitsTitle": "Đặc điểm của phẫu thuật tái tạo dây chằng chéo",
  "cruciateBenefit1Title": "Tái tạo chính xác theo giải phẫu",
  "cruciateBenefit1Body": "Tạo đường hầm xương đúng vị trí theo cấu trúc giải phẫu của từng bệnh nhân, giúp phục hồi độ vững và chức năng khớp gối.",
  "cruciateBenefit2Title": "Bảo tồn dây chằng còn lại",
  "cruciateBenefit2Body": "Bảo tồn tối đa mô dây chằng còn lại, hỗ trợ phục hồi cảm giác bản thể của khớp gối và giúp gân ghép tích hợp ổn định.",
  "cruciateBenefit3Title": "Phẫu thuật nội soi khớp với đường mổ nhỏ",
  "cruciateBenefit3Body": "Phẫu thuật qua đường rạch nhỏ dưới hướng dẫn nội soi, giúp hạn chế tổn thương mô xung quanh và giảm sẹo.",
  "cruciateBenefit4Title": "Tái tạo đồng thời dây chằng trước ngoài",
  "cruciateBenefit4Body": "Khi khớp gối mất vững xoay nghiêm trọng hoặc có nguy cơ tái đứt cao, có thể tái tạo đồng thời dây chằng trước ngoài và dây chằng chéo trước để tăng độ vững khi xoay gối.",
  "cruciateBenefit5Title": "Phẫu thuật tái tạo lại dây chằng chéo phức tạp",
  "cruciateBenefit5Body": "Với trường hợp tái đứt hoặc mất vững kéo dài sau phẫu thuật trước đó, bác sĩ đánh giá kỹ đường hầm xương và gân ghép cũ để thực hiện phẫu thuật lại phù hợp.",
  "cruciateBenefit6Title": "Phục hồi chức năng chuyên sâu từ đội ngũ y tế thể thao cấp quốc gia",
  "cruciateBenefit6Body": "Dựa trên kinh nghiệm điều trị vận động viên đội tuyển quốc gia, chúng tôi xây dựng chương trình phục hồi chức năng theo từng giai đoạn, phù hợp với bệnh nhân, giúp trở lại sinh hoạt và thể thao an toàn."
};

// ── 20. 어깨전담센터 · 배너 ──
const shoulder = {
  "awardAlt": "Kỷ niệm chương ghi nhận đóng góp của Trung tâm Chuyên khoa Khớp vai",
  "hospital": "Bệnh viện Heung-K",
  "title": "Trung tâm Chuyên khoa Khớp vai",
  "description1": "Từ chẩn đoán chính xác, điều trị không phẫu thuật đến phẫu thuật phức tạp và phục hồi chức năng.",
  "description2": "Chăm sóc chuyên sâu, toàn diện các bệnh lý khớp vai.",
  "service1": "Rotator cuff tear and Tendinopathy",
  "service2": "Shoulder instability and recurrent dislocation",
  "service3": "Frozen shoulder (adhesive capsulitis)",
  "service4": "Shoulder impingement syndrome",
  "service5": "Calcific tendinitis of the shoulder",
  "service6": "Sports-related shoulder injuries",
  "aacAlt": "Logo Hiệp hội Nội soi Khớp Châu Á (AAC)",
  "kossmAlt": "Logo Hội Y học Thể thao Chỉnh hình Hàn Quốc (KOSSM)",
  "affiliation": "Asia Arthroscopy Congress (AAC)\nMember of the Promotion & Finance Committee",
  "doctorAlt": "Dr. Su-Keon Lee"
};

// ── 21. 어깨전담센터 · 치료 상세 ──
const centerTreatmentsShoulder = {
  "rotatorListLabel": "Các phương pháp điều trị tại Trung tâm Chuyên khoa Khớp vai",
  "rotatorTitle": "Rotator Cuff Tear Surgery",
  "rotatorDescription": "Phẫu thuật bằng cách đưa dụng cụ chuyên dụng và camera nội soi vào khớp để quan sát trực tiếp và điều trị tổn thương",
  "rotatorHeroAlt": "Ê-kíp y tế Bệnh viện Heung-K thực hiện phẫu thuật nội soi điều trị rách chóp xoay",
  "rotatorToggleContext": "Chi tiết về phẫu thuật điều trị rách chóp xoay",
  "rotatorRepairTitle": "Arthroscopic Rotator Cuff Repair",
  "rotatorRepairBody1": "Bác sĩ đưa camera và dụng cụ nội soi vào khớp qua 2–3 đường rạch nhỏ (mỗi đường 5–7 mm), vừa quan sát vừa điều trị tổn thương.",
  "rotatorRepairBody2": "Đường mổ nhỏ có thể giúp giảm đau, hạn chế sẹo, chảy máu và nguy cơ nhiễm trùng, đồng thời hỗ trợ hồi phục sớm.",
  "rotatorCasesTitle": "Hình ảnh trước và sau phẫu thuật tại Bệnh viện Heung-K",
  "rotatorRepairBefore1Alt": "Hình ảnh nội soi vùng rách chóp xoay trước phẫu thuật khâu phục hồi",
  "rotatorRepairBefore2Alt": "Hình ảnh MRI vai trước phẫu thuật khâu phục hồi chóp xoay",
  "rotatorBefore": "Trước phẫu thuật",
  "rotatorRepairAfter1Alt": "Hình ảnh nội soi vùng chóp xoay đã khâu phục hồi",
  "rotatorRepairAfter2Alt": "Hình ảnh MRI vai sau phẫu thuật khâu phục hồi chóp xoay",
  "rotatorAfter": "Sau phẫu thuật",
  "rotatorPatchTitle": "Patch-Augmented Rotator Cuff Repair",
  "rotatorPatchAlt": "Hình minh họa miếng vá gia cố vùng khâu gân chóp xoay",
  "rotatorPatchLead": "Gia cố gân chóp xoay suy yếu bằng miếng vá, giúp tăng độ vững của mối khâu và giảm nguy cơ rách lại.",
  "rotatorPatchBody1": "Khi vết rách chóp xoay lớn hoặc mô gân yếu khiến việc khâu đơn thuần khó đảm bảo độ vững, bác sĩ khâu phục hồi gân rách qua nội soi khớp, sau đó gia cố bằng miếng vá trung bì đồng loại có nguồn gốc từ người hoặc miếng vá collagen.",
  "rotatorPatchBody2": "Miếng vá giúp nâng đỡ gân suy yếu, giảm lực tác động lên vùng khâu và hỗ trợ tái tạo mô, giúp gân hồi phục ổn định. Phương pháp này đặc biệt phù hợp với trường hợp rách chóp xoay diện rộng hoặc gân thoái hóa nặng, có nguy cơ rách lại cao.",
  "rotatorPatchBefore1Alt": "Hình ảnh MRI vai trước phẫu thuật gia cố bằng miếng vá",
  "rotatorPatchBefore2Alt": "Hình ảnh nội soi chóp xoay trước phẫu thuật gia cố bằng miếng vá",
  "rotatorPatchAfter1Alt": "Hình ảnh MRI vai sau phẫu thuật gia cố bằng miếng vá",
  "rotatorPatchAfter2Alt": "Hình ảnh nội soi vùng khâu chóp xoay được gia cố bằng miếng vá",
  "rotatorPrpTitle": "Platelet-Rich Plasma (PRP) Therapy",
  "rotatorPrpLead": "Gia cố gân chóp xoay suy yếu bằng miếng vá, giúp tăng độ vững của mối khâu và giảm nguy cơ rách lại.",
  "rotatorPrpBody1": "Trong phẫu thuật khâu phục hồi chóp xoay, bác sĩ lấy máu tự thân của bệnh nhân, tách huyết tương giàu tiểu cầu (PRP) rồi đưa vào vùng khâu gân.",
  "rotatorPrpBody2": "PRP chứa nhiều yếu tố tăng trưởng tham gia quá trình lành mô, hỗ trợ tái tạo gân tổn thương và phục hồi vùng khâu. Tùy kích thước vết rách và tình trạng gân, PRP có thể kết hợp với kỹ thuật gia cố bằng miếng vá.",
  "rotatorPrpProcessTitle": "Quy trình chuẩn bị PRP",
  "rotatorPrp1Alt": "Lấy máu để chuẩn bị PRP",
  "rotatorPrpStep1": "STEP 1",
  "rotatorPrpStep1Body": "Chuẩn bị PRP",
  "rotatorPrp2Alt": "Thiết bị ly tâm máu đã lấy",
  "rotatorPrpStep2": "STEP 2",
  "rotatorPrpStep2Body": "Ly tâm",
  "rotatorPrp3Alt": "Quy trình tách PRP từ máu sau ly tâm",
  "rotatorPrpStep3": "STEP 3",
  "rotatorPrpStep3Body": "Chiết tách PRP",
  "rotatorPrp4Alt": "PRP đã sẵn sàng sử dụng trong phẫu thuật",
  "rotatorPrpStep4": "STEP 4",
  "rotatorPrpStep4Body": "Hoàn tất chuẩn bị PRP",
  "arthroplastyTitle": "Shoulder Arthroplasty",
  "arthroplastyDescription": "Phẫu thuật thay khớp vai nhân tạo bằng cách loại bỏ bề mặt khớp bị tổn thương và thay thế bằng khớp nhân tạo khi xương, sụn khớp bị hư hại nghiêm trọng hoặc chức năng chóp xoay suy giảm.",
  "arthroplastyHeroAlt": "Ê-kíp y tế Bệnh viện Heung-K thực hiện phẫu thuật thay khớp vai",
  "arthroplastyToggleContext": "Chi tiết về phẫu thuật thay khớp vai",
  "arthroplastyTsaTitle": "Total Shoulder Arthroplasty (TSA)",
  "arthroplastyTsaLead": "Giảm đau, phục hồi vận động tự nhiên!",
  "arthroplastyTsaBody1": "Phẫu thuật thay khớp vai theo cấu trúc giải phẫu tự nhiên, giúp giảm đau do mòn hoặc tổn thương bề mặt khớp và phục hồi khả năng vận động vai.",
  "arthroplastyTsaBody2": "Thường áp dụng cho trường hợp thoái hóa khớp nặng hoặc gãy xương gây tổn thương nghiêm trọng bề mặt khớp, giúp giảm đau và phục hồi chức năng cơ bản của vai.",
  "arthroplastyTsaCasesTitle": "Phẫu thuật thay khớp vai toàn phần theo giải phẫu",
  "arthroplastyTsaBeforeAlt": "Hình ảnh X-quang vai trước phẫu thuật thay khớp vai theo giải phẫu",
  "arthroplastyBefore": "Trước phẫu thuật",
  "arthroplastyTsaAfterAlt": "Hình ảnh X-quang vai sau phẫu thuật thay khớp vai theo giải phẫu",
  "arthroplastyAfter": "Sau phẫu thuật",
  "arthroplastyRsaTitle": "Reverse Shoulder Arthroplasty (RSA)",
  "arthroplastyRsaLead": "Thay khớp vai đảo ngược giúp cơ delta bù đắp chức năng chóp xoay bị tổn thương, hỗ trợ phục hồi vận động vai.",
  "arthroplastyRsaBody1": "Phẫu thuật thay khớp vai bằng cách đảo ngược vị trí chỏm cầu và ổ khớp, giúp bệnh nhân nâng cánh tay nhờ cơ delta thay vì chóp xoay bị tổn thương.",
  "arthroplastyRsaBody2": "Đây là một trong những kỹ thuật thay khớp vai ngày càng phổ biến, được áp dụng khi tổn thương không thể phục hồi bằng nội soi khớp hoặc rách chóp xoay gây mất chức năng vai nghiêm trọng, đặc biệt trong trường hợp liệt giả không thể nâng tay. So với thay khớp vai thông thường, phương pháp này có ưu điểm giúp tăng biên độ và sự linh hoạt khi vận động.",
  "arthroplastyRsaCasesTitle": "Các ca phẫu thuật trước và sau điều trị tại Bệnh viện Heung-K",
  "arthroplastyRsaBeforeAlt": "Hình ảnh X-quang vai trước phẫu thuật thay khớp vai đảo ngược",
  "arthroplastyRsaAfterAlt": "Hình ảnh X-quang vai sau phẫu thuật thay khớp vai đảo ngược"
};

// ── 22. 손발전담센터 · 배너 ──
const handFoot = {
  "hospital": "Bệnh viện Heung-K",
  "title": "Trung tâm Chuyên khoa Bàn tay và Bàn chân",
  "description1": "Từ chẩn đoán chính xác, điều trị không phẫu thuật đến phẫu thuật phức tạp và phục hồi chức năng.",
  "description2": "Chăm sóc chuyên sâu, toàn diện các bệnh lý bàn tay và bàn chân.",
  "service1": "Hallux valgus (bunion) correction",
  "service2": "Ankle Sprain and Ligament Reconstruction",
  "service3": "Achilles tendon rupture and tendinopathy",
  "service4": "Plantar Fasciitis and Heel Pain",
  "service5": "Carpal Tunnel Syndrome",
  "service6": "TFCC Tears and Wrist Instability",
  "service7": "Trigger Finger",
  "doctorAlt": "Dr. Sehun Kim"
};

// ── 23. 손발전담센터 · 치료 상세 ──
const centerTreatmentsHandFoot = {
  "arthroscopyListLabel": "Các phương pháp điều trị tại Trung tâm Chuyên khoa Bàn tay và Bàn chân",
  "micaTitle": "Minimally Invasive Hallux Valgus Surgery (MICA)",
  "micaDescription": "Phẫu thuật chỉnh hình ngón chân cái vẹo ngoài bằng đường mổ nhỏ, ít xâm lấn và chính xác.",
  "micaHeroAlt": "Ê-kíp y tế Bệnh viện Heung-K thực hiện phẫu thuật ít xâm lấn điều trị ngón chân cái vẹo ngoài",
  "micaToggleContext": "Chi tiết về phẫu thuật MICA",
  "micaLead": "Phẫu thuật MICA chỉnh hình xương bàn chân biến dạng qua các đường rạch nhỏ 2–3 mm, giúp giảm đau và phục hồi nhanh.",
  "micaBody1": "MICA là kỹ thuật phẫu thuật ít xâm lấn điều trị ngón chân cái vẹo ngoài. Dưới gây tê vùng, bác sĩ tạo khoảng 3–5 đường rạch nhỏ 2–3 mm, đưa dụng cụ chuyên dụng vào để cắt xương và chỉnh lại trục xương dưới hướng dẫn của hình ảnh X-quang tăng sáng thời gian thực.",
  "micaBody2": "Sau đó, bác sĩ loại bỏ phần xương nhô ra và cố định chắc chắn bằng vít chuyên dụng.",
  "micaStepsHeading": "Quy trình phẫu thuật MICA",
  "micaStep1": "Tiếp cận vùng cần chỉnh hình bằng kỹ thuật ít xâm lấn",
  "micaStep2": "Cắt xương bàn chân chính xác dưới hướng dẫn C-arm thời gian thực",
  "micaStep3": "Điều chỉnh xương đã cắt về đúng trục",
  "micaStep4": "Loại bỏ phần xương nhô ra",
  "micaStep5": "Cố định chắc chắn bằng vít chuyên dụng",
  "micaComparisonHeading": "So sánh với phẫu thuật mở truyền thống",
  "micaOpenHeading": "Phẫu thuật mở truyền thống",
  "micaMicaHeading": "Phẫu thuật MICA",
  "micaOpenAlt": "Hình minh họa đường mổ trong phẫu thuật mở truyền thống",
  "micaPhotosLabel": "Hình ảnh so sánh",
  "micaMicaAlt": "Hình minh họa các đường rạch nhỏ trong phẫu thuật MICA",
  "micaCompare1Open": "Đường mổ trung bình 4–10 cm",
  "micaCompare1Label": "Kích thước đường mổ",
  "micaCompare1Mica": "Phẫu thuật ít xâm lấn qua các lỗ nhỏ khoảng 2 mm",
  "micaCompare2Open": "Thời gian phẫu thuật 40–50 phút",
  "micaCompare2Label": "Thời gian phẫu thuật",
  "micaCompare2Mica": "Trong vòng 15–20 phút",
  "micaCompare3Open": "Chảy máu và biến chứng trong phẫu thuật",
  "micaCompare3Label": "Chảy máu và biến chứng",
  "micaCompare3Mica": "Hạn chế tối đa chảy máu và biến chứng trong phẫu thuật",
  "micaCompare4Open": "Đau sau phẫu thuật",
  "micaCompare4Label": "Mức độ đau",
  "micaCompare4Mica": "Giảm đau tối đa sau phẫu thuật",
  "micaCompare5Open": "Để lại sẹo sau phẫu thuật",
  "micaCompare5Label": "Sẹo sau phẫu thuật",
  "micaCompare5Mica": "Hầu như không để lại sẹo",
  "micaCasesHeading": "So sánh trước và sau phẫu thuật MICA",
  "micaBeforeXrayAlt": "Ảnh X-quang ngón chân cái vẹo ngoài trước phẫu thuật MICA với đường chỉ dẫn trục màu đỏ",
  "micaBefore": "Trước phẫu thuật",
  "micaAfterXrayAlt": "Ảnh X-quang bàn chân đã chỉnh hình sau phẫu thuật MICA với đường chỉ dẫn trục màu xanh bạc hà",
  "micaAfter": "Sau phẫu thuật",
  "micaBeforePhotoAlt": "Ảnh X-quang hai bàn chân trước phẫu thuật MICA với đường chỉ dẫn trục màu đỏ",
  "micaAfterPhotoAlt": "Ảnh X-quang hai bàn chân sau phẫu thuật MICA với đường chỉ dẫn trục màu xanh bạc hà",
  "arthroscopyTitle": "Wrist & Ankle Arthroscopy",
  "arthroscopyDescription": "Phẫu thuật nội soi khớp qua đường rạch nhỏ, giúp quan sát trực tiếp, chẩn đoán và điều trị chính xác tổn thương ở cổ tay và cổ chân.",
  "arthroscopyHeroAlt": "Ê-kíp y tế Bệnh viện Heung-K thực hiện phẫu thuật nội soi khớp cổ tay và cổ chân",
  "arthroscopyToggleContext": "Chi tiết về phẫu thuật nội soi khớp cổ tay và cổ chân",
  "arthroscopyWristAlt": "Hình minh họa phẫu thuật nội soi quan sát bên trong khớp cổ tay",
  "arthroscopyWristLead": "Nội soi khớp cổ tay là phương pháp phẫu thuật ít xâm lấn, cho phép quan sát trực tiếp và điều trị tổn thương bên trong khớp.",
  "arthroscopyWristBody1": "Trước đây, việc kiểm tra và điều trị tổn thương thường cần đường mổ tương đối lớn. Hiện nay, bác sĩ có thể đưa ống nội soi qua đường rạch nhỏ khoảng 5 mm–1 cm, quan sát cấu trúc khớp theo thời gian thực qua hình ảnh độ phân giải cao.",
  "arthroscopyWristBody2": "Nhờ đó, bác sĩ có thể vừa chẩn đoán vừa điều trị tổn thương dây chằng, sụn và phức hợp sụn sợi tam giác (TFCC).",
  "arthroscopyWristIndicationsPrefix": "Khi nào",
  "arthroscopyWristIndicationsEmphasis": "nội soi khớp cổ tay",
  "arthroscopyWristIndicationsSuffix": "là cần thiết?",
  "arthroscopyWrist1Title": "Tổn thương phức hợp sụn sợi tam giác (TFCC)",
  "arthroscopyWrist1Body": "Tổn thương cấu trúc nâng đỡ phía ngón út của cổ tay, gây đau và hạn chế vận động.",
  "arthroscopyWrist2Title": "Rách dây chằng và mất vững cổ tay",
  "arthroscopyWrist2Body": "Dây chằng cổ tay bị tổn thương, gây đau và khiến khớp cổ tay mất ổn định.",
  "arthroscopyWrist3Title": "Thoái hóa khớp cổ tay giai đoạn đầu",
  "arthroscopyWrist3Body": "Sụn khớp bắt đầu bị bào mòn, gây đau, cứng khớp và khó vận động cổ tay.",
  "arthroscopyWrist4Title": "Loại bỏ dị vật tự do trong khớp",
  "arthroscopyWrist4Body": "Loại bỏ các mảnh xương hoặc sụn nhỏ trong khớp cổ tay gây đau và kẹt khớp.",
  "arthroscopyWrist5Title": "Đau cổ tay mạn tính chưa rõ nguyên nhân",
  "arthroscopyWrist5Body": "Giúp tìm nguyên nhân và điều trị đau cổ tay kéo dài khi các xét nghiệm khác chưa xác định được nguyên nhân.",
  "arthroscopyAnkleAlt": "Hình minh họa phẫu thuật nội soi quan sát bên trong khớp cổ chân",
  "arthroscopyAnkleLead": "Phẫu thuật nội soi khớp cổ chân là kỹ thuật ít xâm lấn, đưa ống nội soi qua đường rạch nhỏ để quan sát và điều trị tổn thương bên trong khớp.",
  "arthroscopyAnkleBody1": "Bác sĩ tạo đường rạch dưới 1 cm ở cổ chân, đưa ống nội soi và dụng cụ chuyên dụng vào khớp để chẩn đoán và điều trị.",
  "arthroscopyAnkleBody2": "Do khớp cổ chân nhỏ và đòi hỏi thao tác chính xác hơn khớp gối hoặc vai, bác sĩ sử dụng ống nội soi chuyên dụng cho khớp nhỏ có đường kính 2,5 mm.",
  "arthroscopyAnkleIndicationsPrefix": "Khi nào",
  "arthroscopyAnkleIndicationsEmphasis": "nội soi khớp cổ chân",
  "arthroscopyAnkleIndicationsSuffix": "là cần thiết?",
  "arthroscopyAnkle1Title": "Đau mạn tính sau bong gân cổ chân",
  "arthroscopyAnkle1Body": "Kiểm tra và điều trị tổn thương bên trong khớp khi đau hoặc khó chịu kéo dài sau bong gân cổ chân.",
  "arthroscopyAnkle2Title": "Tổn thương sụn và viêm xương sụn bóc tách (OCD)",
  "arthroscopyAnkle2Body": "Chẩn đoán và điều trị tổn thương sụn và xương khớp cổ chân gây đau hoặc hạn chế vận động.",
  "arthroscopyAnkle3Title": "Dị vật tự do trong khớp",
  "arthroscopyAnkle3Body": "Loại bỏ các mảnh xương hoặc sụn nhỏ gây đau và kẹt khớp.",
  "arthroscopyAnkle4Title": "Hội chứng chèn ép cổ chân",
  "arthroscopyAnkle4Body": "Chẩn đoán và điều trị tình trạng mô hoặc xương quanh khớp va chạm khi vận động, gây đau cổ chân.",
  "arthroscopyAnkle5Title": "Hỗ trợ chẩn đoán mất vững cổ chân",
  "arthroscopyAnkle5Body": "Nội soi kiểm tra khớp để xác định nguyên nhân khi cổ chân thường xuyên bị lật hoặc mất vững.",
  "arthroscopyBenefitsHeadingEmphasis": "Bệnh viện Heung-K",
  "arthroscopyBenefitsHeadingSuffix": "có gì khác biệt trong điều trị nội soi khớp cổ tay và cổ chân?",
  "arthroscopyBenefits1Title": "Chẩn đoán và điều trị chính xác",
  "arthroscopyBenefits1Body": "Quan sát và điều trị trực tiếp cả những tổn thương nhỏ ở dây chằng và sụn khó phát hiện qua MRI hoặc X-quang.",
  "arthroscopyBenefits2Title": "Bảo tồn chức năng khớp",
  "arthroscopyBenefits2Body": "Bảo tồn tối đa mô lành, chỉ điều trị vùng tổn thương.",
  "arthroscopyBenefits3Title": "Đường mổ nhỏ, giảm đau và sẹo",
  "arthroscopyBenefits3Body": "Đường rạch nhỏ khoảng 0,5–1 cm giúp hạn chế sẹo, giảm tổn thương mô xung quanh, đau và chảy máu.",
  "arthroscopyBenefits4Title": "Giảm nguy cơ biến chứng sau phẫu thuật",
  "arthroscopyBenefits4Body": "Phẫu thuật chính xác, hạn chế tổn thương mô không cần thiết, giúp giảm nguy cơ nhiễm trùng, viêm và hỗ trợ phục hồi nhanh, an toàn.",
  "arthroscopyBenefits5Title": "Phục hồi nhanh, sớm trở lại sinh hoạt",
  "arthroscopyBenefits5Body": "Thời gian phẫu thuật ngắn và phục hồi nhanh giúp bệnh nhân sớm trở lại sinh hoạt thường ngày."
};

// ── 24. 척추전담센터 · 배너 ──
const spine = {
  "hospital": "Bệnh viện Heung-K",
  "title": "Trung tâm Chuyên khoa Cột sống",
  "description1": "Từ chẩn đoán chính xác, điều trị không phẫu thuật đến phẫu thuật phức tạp và phục hồi chức năng.",
  "description2": "Chăm sóc chuyên sâu, toàn diện các bệnh lý cột sống.",
  "service1": "Cervical and Lumbar Disc Herniation",
  "service2": "Spinal Stenosis",
  "service3": "Chronic Neck and Low Back Pain",
  "service4": "Spondylolisthesis",
  "service5": "Spinal Compression Fractures",
  "service6": "Biportal Endoscopic Spine Surgery (BESS)",
  "service7": "Minimally Invasive Spinal Fusion",
  "doctorChoAlt": "Dr. Nam Ik Cho",
  "doctorYoonAlt": "Dr. Sang Hoon Yoon"
};

// ── 25. 척추전담센터 · 치료 상세 ──
const centerTreatmentsSpine = {
  "bessListLabel": "Các phương pháp điều trị tại Trung tâm Chuyên khoa Cột sống",
  "bessTitle": "Biportal Endoscopic Spine Surgery (BESS)",
  "bessDescription": "Phẫu thuật cột sống nội soi với hình ảnh phóng đại, giúp loại bỏ chính xác tổn thương gây chèn ép thần kinh.",
  "bessHeroAlt": "Phẫu thuật nội soi cột sống hai cổng dưới hướng dẫn của màn hình nội soi",
  "bessToggleContext": "Chi tiết về phẫu thuật nội soi cột sống hai cổng BESS",
  "bessLead": "Phẫu thuật nội soi cột sống ít xâm lấn qua hai đường rạch nhỏ, cho tầm nhìn rộng và thao tác chính xác.",
  "bessBody1": "BESS là phẫu thuật cột sống ít xâm lấn qua hai đường rạch nhỏ: một đường cho ống nội soi và một đường cho dụng cụ xử lý tổn thương chèn ép thần kinh.",
  "bessBody2": "Ống nội soi và dụng cụ phẫu thuật hoạt động độc lập, giúp mở rộng trường nhìn và thao tác chính xác dưới hình ảnh phóng đại.",
  "bessIntroAlt": "Hình ảnh hai vết mổ 9 mm và 7 mm sau phẫu thuật BESS",
  "bessBenefitsHeading": "Ưu điểm của BESS",
  "bessBenefit1Title": "Phẫu thuật ít xâm lấn",
  "bessBenefit1Body": "Đường rạch nhỏ khoảng 0,7 cm giúp hạn chế tối đa tổn thương cơ, đau và nguy cơ viêm sau phẫu thuật.",
  "bessBenefit2Title": "Chẩn đoán và điều trị chính xác",
  "bessBenefit2Body": "Camera nội soi độ phân giải cao cho phép quan sát chi tiết cấu trúc cột sống, hỗ trợ chẩn đoán và điều trị chính xác.",
  "bessBenefit3Title": "Giảm nguy cơ biến chứng",
  "bessBenefit3Body": "Điều trị chính xác vùng tổn thương, bảo vệ tối đa mô lành xung quanh, giúp giảm nguy cơ biến chứng sau phẫu thuật.",
  "bessBenefit4Title": "Phục hồi nhanh, sớm trở lại sinh hoạt",
  "bessBenefit4Body": "Ít tổn thương mô giúp bệnh nhân phục hồi nhanh và sớm trở lại sinh hoạt thường ngày.",
  "bessCasesHeading": "So sánh trước và sau phẫu thuật BESS",
  "bessBefore1Alt": "Hình ảnh MRI vùng chèn ép thần kinh trước phẫu thuật BESS",
  "bessBefore": "Trước phẫu thuật",
  "bessAfter1Alt": "Hình ảnh MRI đánh dấu vùng giải ép thần kinh sau phẫu thuật BESS",
  "bessAfter": "Sau phẫu thuật",
  "bessBefore2Alt": "Hình ảnh nội soi vùng tổn thương trước phẫu thuật BESS",
  "bessAfter2Alt": "Hình ảnh nội soi vùng đã điều trị sau phẫu thuật BESS",
  "fusionTitle": "Minimally Invasive Spinal Fusion",
  "fusionDescription": "Phẫu thuật cột sống ít xâm lấn, kết hợp giải ép thần kinh và cố định cột sống qua đường mổ nhỏ.",
  "fusionHeroAlt": "Ê-kíp y tế Bệnh viện Heung-K thực hiện phẫu thuật hàn xương cột sống ít xâm lấn",
  "fusionToggleContext": "Chi tiết về phẫu thuật hàn xương cột sống ít xâm lấn",
  "fusionLead": "Phẫu thuật hàn xương cột sống ít xâm lấn, sử dụng lồng ghép đĩa đệm và vít để cố định vững chắc cột sống.",
  "fusionBody1": "Bác sĩ tạo bốn đường rạch nhỏ ở vùng thắt lưng để giải ép thần kinh, sau đó lấy bỏ đĩa đệm bệnh lý, đặt lồng ghép đĩa đệm và cố định đốt sống bằng vít chuyên dụng nhằm duy trì độ vững của cột sống.",
  "fusionBody2": "So với phẫu thuật hàn xương cột sống mở truyền thống, kỹ thuật ít xâm lấn giúp giảm chiều dài đường mổ và tổn thương mô xung quanh. Phương pháp này có thể áp dụng cho trượt đốt sống, hẹp ống sống nặng kèm mất vững cột sống hoặc khi giải ép đơn thuần không đủ duy trì độ vững.",
  "fusionIntroAlt": "Hình minh họa lồng ghép đĩa đệm và vít cố định cột sống",
  "fusionBenefitsHeading": "Ưu điểm của phẫu thuật hàn xương cột sống nội soi hai cổng",
  "fusionBenefit1Body": "Độ chính xác cao nhờ sử dụng kính hiển vi phẫu thuật, nội soi cột sống và dụng cụ chuyên dụng",
  "fusionBenefit2Body": "Ít tổn thương cơ thể hơn và nguy cơ tái phát cực thấp so với phẫu thuật truyền thống",
  "fusionBenefit3Body": "Rút ngắn thời gian nằm viện và phục hồi chức năng, giúp sớm trở lại sinh hoạt",
  "fusionBenefit4Body": "Trường nhìn rộng hơn phẫu thuật truyền thống, thuận lợi cho thao tác chính xác",
  "fusionComparisonHeading": "So sánh với phẫu thuật cố định cột sống bằng vít truyền thống",
  "fusionOpenHeading": "Phẫu thuật cố định cột sống bằng vít truyền thống",
  "fusionFusionHeading": "Phẫu thuật hàn xương cột sống nội soi hai cổng",
  "fusionCompare1Open": "20 cm",
  "fusionCompare1Label": "Chiều dài đường mổ",
  "fusionCompare1Fusion": "2–3 cm",
  "fusionCompare2Open": "Gây tổn thương vĩnh viễn cơ và dây chằng",
  "fusionCompare2Label": "Tổn thương cơ",
  "fusionCompare2Fusion": "Hạn chế tối đa tổn thương cơ",
  "fusionCompare3Open": "Đường mổ lớn làm tăng nguy cơ nhiễm trùng và biến chứng",
  "fusionCompare3Label": "Biến chứng",
  "fusionCompare3Fusion": "Giảm đáng kể nguy cơ nhiễm trùng và biến chứng",
  "fusionCompare4Open": "Đau nhiều sau phẫu thuật, cần dùng thuốc giảm đau kéo dài",
  "fusionCompare4Label": "Mức độ đau",
  "fusionCompare4Fusion": "Ít đau sau mổ, thời gian dùng thuốc giảm đau ngắn",
  "fusionCompare5Open": "Mất máu nhiều, cần truyền máu",
  "fusionCompare5Label": "Chảy máu",
  "fusionCompare5Fusion": "Vết mổ nhỏ, ít mất máu",
  "fusionCompare6Open": "Cần phục hồi chức năng trong 1 năm sau xuất viện, chậm trở lại sinh hoạt",
  "fusionCompare6Label": "Thời gian phục hồi",
  "fusionCompare6Fusion": "Có thể vận động thể thao tích cực sau 6 tháng phẫu thuật",
  "fusionCompare7Open": "4 giờ",
  "fusionCompare7Label": "Thời gian phẫu thuật",
  "fusionCompare7Fusion": "2–3 giờ",
  "fusionCasesHeading": "Ca điều trị bằng phẫu thuật hàn xương cột sống nội soi hai cổng",
  "fusionBefore1Alt": "Ảnh X-quang nghiêng cột sống thắt lưng trước phẫu thuật hàn xương",
  "fusionBefore": "Trước phẫu thuật",
  "fusionAfter1Alt": "Ảnh X-quang nghiêng cột sống thắt lưng sau phẫu thuật, cho thấy dụng cụ cố định",
  "fusionAfter": "Sau phẫu thuật",
  "fusionBefore2Alt": "Ảnh X-quang thẳng cột sống thắt lưng trước phẫu thuật hàn xương",
  "fusionAfter2Alt": "Ảnh X-quang thẳng cột sống thắt lưng sau phẫu thuật, cho thấy dụng cụ cố định"
};

// ── 26. 의료진 상세 소개 ──
const doctors = {
  "kicker": "OUR DOCTORS",
  "galleryLabel": "Đội ngũ y tế Bệnh viện Heung-K trong công tác khám chữa bệnh và nghiên cứu",
  "row1Label": "Hàng ảnh đội ngũ y tế phía trên",
  "photo01Alt": "Đội ngũ y tế Bệnh viện Heung-K tập trung thực hiện phẫu thuật",
  "photo02Alt": "Đội ngũ y tế phẫu thuật dưới hướng dẫn của hình ảnh nội soi khớp",
  "photo03Alt": "Đội ngũ y tế trao đổi trong phòng phẫu thuật",
  "photo04Alt": "Đội ngũ y tế cùng kiểm tra tình trạng khớp gối của bệnh nhân",
  "photo05Alt": "Đội ngũ y tế Bệnh viện Heung-K phối hợp trong phẫu thuật",
  "photo06Alt": "Bác sĩ tư vấn cho bệnh nhân tại phòng khám",
  "photo07Alt": "Bác sĩ giải thích hình ảnh chẩn đoán cho bệnh nhân",
  "row2Label": "Hàng ảnh đội ngũ y tế phía dưới",
  "photo08Alt": "Đội ngũ y tế kiểm tra vùng phẫu thuật",
  "photo09Alt": "Đội ngũ y tế Bệnh viện Heung-K chuẩn bị phẫu thuật",
  "photo10Alt": "Bác sĩ giảng dạy y khoa",
  "photo11Alt": "Đội ngũ y tế thực hiện phẫu thuật nội soi",
  "photo12Alt": "Đội ngũ y tế tập trung trong phòng phẫu thuật",
  "photo13Alt": "Đội ngũ y tế tham gia đào tạo phẫu thuật",
  "photo14Alt": "Đội ngũ y tế Bệnh viện Heung-K tại phòng phẫu thuật",
  "pause": "Tạm dừng chuyển động ảnh",
  "resume": "Tiếp tục chuyển động ảnh",
  "hospital": "Bệnh viện Heung-K",
  "title": "Đội ngũ bác sĩ",
  "carouselLabel": "Trình chiếu giới thiệu đội ngũ bác sĩ Bệnh viện Heung-K",
  "profiles": [
    {
      "slideLabel": "Giới thiệu Dr. Jong-Keun Kim – Giám đốc đại diện",
      "portraitAlt": "Dr. Jong-Keun Kim – Giám đốc đại diện",
      "specialty": "Bác sĩ chuyên khoa Chấn thương Chỉnh hình",
      "name": "Dr. Jong-Keun Kim",
      "role": "Giám đốc đại diện",
      "specialties": "Khớp gối (thay khớp nhân tạo ít xâm lấn / PSI cá thể hóa theo bệnh nhân / nội soi khớp), phẫu thuật thay lại khớp nhân tạo, điều trị bằng tế bào gốc, ghép tế bào sụn, khớp háng (thay khớp nhân tạo / nội soi khớp), chấn thương thể thao, bàn chân",
      "careers": [
        [
          "Tiến sĩ Y khoa, Đại học Quốc gia Seoul",
          "Thạc sĩ Y khoa, Đại học Quốc gia Seoul",
          "Cử nhân Y khoa, Đại học Yonsei",
          "Cố vấn lâm sàng Khoa Chấn thương Chỉnh hình, Bệnh viện Đại học Quốc gia Seoul",
          "Giảng viên thỉnh giảng Khoa Chấn thương Chỉnh hình, Trường Y Đại học Quốc gia Seoul",
          "Giảng viên lâm sàng Khoa Chấn thương Chỉnh hình, Trường Y Đại học Quốc gia Seoul",
          "Trưởng khoa Chấn thương Chỉnh hình, Bệnh viện Hanil trực thuộc Tập đoàn Điện lực Hàn Quốc",
          "Bác sĩ chuyên khoa, Bệnh viện Gil thuộc Đại học Gachon"
        ],
        [
          "Được mời tham gia chương trình AVP (Academic Visiting Program) và đào tạo chuyên sâu tại HSS (Hospital for Special Surgery), New York, Hoa Kỳ",
          "Đào tạo với tư cách học giả thỉnh giảng (Visiting Scholar) tại Cornell University, New York, Hoa Kỳ",
          "Đào tạo về phẫu thuật thay khớp nhân tạo bằng robot tại Stryker Center, New Jersey, Hoa Kỳ",
          "Tham gia khóa đào tạo Advanced Attune Course khu vực Châu Á – Thái Bình Dương (Bangkok, Thái Lan)",
          "AO trauma Principle course certification"
        ]
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Su-Keon Lee",
      "portraitAlt": "Dr. Su-Keon Lee",
      "specialty": "Bác sĩ chuyên khoa Chấn thương Chỉnh hình",
      "name": "Dr. Su-Keon Lee",
      "role": "Bác sĩ",
      "specialties": "Khớp vai (nội soi khớp / thay khớp nhân tạo), khuỷu tay, chấn thương thể thao, gãy xương vùng vai",
      "careers": [
        [
          "Tiến sĩ Y khoa, Đại học Yonsei",
          "Thạc sĩ Y khoa, Đại học Yonsei",
          "Cử nhân Y khoa, Đại học Yonsei",
          "Giảng viên thỉnh giảng, Trường Y Đại học Yonsei",
          "Trưởng khoa Chấn thương Chỉnh hình, Bệnh viện Gwangmyeong Sungae",
          "Giáo sư, Trường Y Đại học Kwandong",
          "Ủy viên phụ trách công tác học thuật, Hội Chấn thương Chỉnh hình Hàn Quốc",
          "Ủy viên ban điều hành chi hội Gyeonggi, Hội Chấn thương Chỉnh hình Hàn Quốc"
        ],
        [
          "Đại đội trưởng Đại đội Quân y, Lực lượng Đặc nhiệm Hàn Quốc",
          "Giảng viên lâm sàng, Bệnh viện Severance Sinchon thuộc Trường Y Đại học Yonsei",
          "Bác sĩ nội trú và thực tập, Bệnh viện Severance Sinchon thuộc Trường Y Đại học Yonsei",
          "Bác sĩ phụ trách phiên dịch tiếng Anh trong đợt đánh giá JCI đầu tiên tại Bệnh viện Severance Sinchon"
        ]
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Myung Chul Lee – Giám đốc danh dự",
      "portraitAlt": "Dr. Myung Chul Lee – Giám đốc danh dự",
      "specialty": "Bác sĩ chuyên khoa Nội và Y học hạt nhân",
      "name": "Dr. Myung Chul Lee",
      "role": "Giám đốc danh dự",
      "careers": [
        [
          "Giáo sư danh dự, Trường Y Đại học Quốc gia Seoul",
          "Trưởng phòng Nghiên cứu Lịch sử Bệnh viện, Bệnh viện Đại học Quốc gia Seoul",
          "Phó Chủ tịch Quỹ Phát triển Đại học Quốc gia Seoul",
          "Phó Hiệu trưởng phụ trách đào tạo, Trường Y Đại học Quốc gia Seoul",
          "Giáo sư và Trưởng bộ môn Y học hạt nhân, Trường Y Đại học Quốc gia Seoul",
          "Giám đốc Bệnh viện Gil thuộc Đại học Gachon (Phó Hiệu trưởng Cơ sở Y khoa)",
          "Giám đốc Bệnh viện Quân y Thủ đô Hàn Quốc",
          "Chủ tịch Viện Hàn lâm Khoa học và Công nghệ Hàn Quốc, Phó Chủ tịch Hội đồng Tư vấn Khoa học và Công nghệ Quốc gia",
          "Hội viên trọn đời: Viện Hàn lâm Khoa học và Công nghệ Hàn Quốc, Viện Hàn lâm Y học Quốc gia Hàn Quốc",
          "Chủ tịch Hiệp hội Xúc tiến Công nghệ Bức xạ Hàn Quốc",
          "Hiện là Chủ tịch Hội đồng quản trị Viện Pasteur Hàn Quốc"
        ],
        [
          "Được vinh danh tại Đại sảnh Danh dự của Hiệp hội Y học Hàn Quốc năm 2024",
          "Được trao Huân chương Khoa học và Công nghệ hạng Nhất (Huân chương Sáng tạo)",
          "Chủ tịch Liên đoàn Y học hạt nhân Thế giới",
          "Chủ tịch Tổ chức Đồng vị Thế giới",
          "Nghiên cứu viên, Trường Y Đại học Johns Hopkins, Hoa Kỳ",
          "Tốt nghiệp Trường Y Đại học Quốc gia Seoul",
          "Tiến sĩ Nội khoa, Trường Y Đại học Quốc gia Seoul",
          "Bác sĩ chuyên khoa Nội và Y học hạt nhân"
        ]
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Joon Young Lee",
      "portraitAlt": "Dr. Joon Young Lee",
      "specialty": "Bác sĩ chuyên khoa Chấn thương Chỉnh hình",
      "name": "Dr. Joon Young Lee",
      "role": "Bác sĩ",
      "specialties": "Khớp gối (thay khớp nhân tạo ít xâm lấn / PSI cá thể hóa theo bệnh nhân / nội soi khớp), chấn thương thể thao (rách dây chằng chéo), thay khớp háng nhân tạo, điều trị bằng tế bào gốc, bàn chân",
      "careers": [
        [
          "Thạc sĩ Y khoa, Đại học Quốc gia Seoul",
          "Giảng viên thỉnh giảng Khoa Chấn thương Chỉnh hình, Bệnh viện Đại học Quốc gia Seoul",
          "Cố vấn lâm sàng Khoa Chấn thương Chỉnh hình, Bệnh viện Đại học Quốc gia Seoul",
          "Giảng viên lâm sàng Khoa Chấn thương Chỉnh hình, Bệnh viện Đại học Quốc gia Seoul",
          "Bác sĩ nội trú Khoa Chấn thương Chỉnh hình, Bệnh viện Đại học Quốc gia Seoul",
          "Bác sĩ thực tập xuất sắc, Bệnh viện Đại học Quốc gia Seoul",
          "Trưởng phòng khám Quân y Hàng không, Không đoàn 11 và 16, Không quân Hàn Quốc",
          "Cử nhân Y khoa, Đại học Chung-Ang"
        ],
        []
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Sehun Kim",
      "portraitAlt": "Dr. Sehun Kim",
      "specialty": "Bác sĩ chuyên khoa Chấn thương Chỉnh hình",
      "name": "Dr. Sehun Kim",
      "role": "Bác sĩ",
      "specialties": "Bàn tay và bàn chân, vi phẫu bàn tay và bàn chân, khám và điều trị các vấn đề về tăng trưởng",
      "careers": [
        [
          "Bác sĩ chuyên khoa Chấn thương Chỉnh hình, Trung tâm Y tế Samsung Seoul",
          "Bác sĩ thực tập, Trung tâm Y tế Samsung Seoul",
          "Thạc sĩ Y khoa, Trường Y Sau đại học Đại học Quốc gia Kyungpook",
          "Giáo sư lâm sàng Khoa Chấn thương Chỉnh hình (bàn tay, bàn chân, nhi khoa), Bệnh viện Boramae thuộc Đại học Quốc gia Seoul",
          "Giảng viên chuyên trách Khoa Chấn thương Chỉnh hình, Bệnh viện Đại học Quốc gia Seoul",
          "Trưởng khoa, Bệnh viện Hanil trực thuộc Tập đoàn Điện lực Hàn Quốc"
        ],
        []
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Nam Ik Cho – Trưởng trung tâm",
      "portraitAlt": "Dr. Nam Ik Cho – Trưởng trung tâm",
      "specialty": "Bác sĩ chuyên khoa Phẫu thuật Cột sống",
      "name": "Dr. Nam Ik Cho",
      "role": "Trưởng trung tâm",
      "specialties": "Phẫu thuật nội soi cột sống, thay đĩa đệm nhân tạo cột sống cổ, phẫu thuật lại cột sống phức tạp, phẫu thuật hàn xương cột sống ít xâm lấn, gãy xương do loãng xương, điều trị bằng tiêm không phẫu thuật, thoát vị đĩa đệm cột sống cổ và thắt lưng, hẹp ống sống, trượt đốt sống, gãy xương cột sống do chấn thương, vẹo cột sống",
      "careers": [
        [
          "Tốt nghiệp Trường Y Đại học Korea",
          "Bác sĩ thực tập tại Bệnh viện trực thuộc Trường Y Đại học Korea",
          "Bác sĩ chuyên khoa Chấn thương Chỉnh hình, Bệnh viện Bundang Jesaeng",
          "Bác sĩ chuyên sâu về cột sống, Khoa Chấn thương Chỉnh hình, Trung tâm Y tế Asan Seoul",
          "Bác sĩ chuyên sâu tại Trung tâm Vẹo cột sống, Khoa Chấn thương Chỉnh hình, Trung tâm Y tế Asan Seoul",
          "Giảng viên thỉnh giảng Khoa Chấn thương Chỉnh hình, Trung tâm Y tế Asan Seoul",
          "Nguyên Giám đốc đại diện Bệnh viện Just",
          "Nguyên Giám đốc Trung tâm Cột sống, Bệnh viện Pyeongchon Woori",
          "Nguyên Giám đốc Trung tâm Cột sống, Bệnh viện Yonsei Barocheok"
        ],
        []
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Sang Hoon Yoon",
      "portraitAlt": "Dr. Sang Hoon Yoon",
      "specialty": "Bác sĩ chuyên khoa Ngoại Thần kinh",
      "name": "Dr. Sang Hoon Yoon",
      "role": "Bác sĩ",
      "specialties": "Bệnh lý cột sống (cổ / ngực / thắt lưng), bệnh lý thần kinh não, điều trị bằng tiêm và thủ thuật không phẫu thuật, u cột sống, phẫu thuật cột sống ít xâm lấn, điều trị rối loạn đi lại liên quan đến bệnh lý cột sống, điều trị béo phì",
      "careers": [
        [
          "Tiến sĩ Y khoa, Đại học Quốc gia Seoul",
          "Thạc sĩ Y khoa, Đại học Quốc gia Seoul",
          "Bác sĩ nội trú Khoa Ngoại Thần kinh, Bệnh viện Đại học Quốc gia Seoul",
          "Giáo sư Khoa Ngoại Thần kinh và Trung tâm Cột sống, Bệnh viện Đại học Quốc gia Seoul Bundang",
          "Trưởng khoa Ngoại Thần kinh, Bệnh viện Quân y Thủ đô Hàn Quốc",
          "Giám đốc Trung tâm Nghiên cứu Y học Lâm sàng, Bệnh viện Quân y Thủ đô Hàn Quốc"
        ],
        []
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Seung Jin Jung",
      "portraitAlt": "Dr. Seung Jin Jung",
      "specialty": "Bác sĩ chuyên khoa Y học Gia đình",
      "name": "Dr. Seung Jin Jung",
      "role": "Bác sĩ",
      "specialties": "Tiêu hóa, nội soi dạ dày và đại tràng, điều trị béo phì, bệnh mạn tính, siêu âm tiêu hóa",
      "careers": [
        [
          "Tiến sĩ Y khoa, Đại học Korea",
          "Thạc sĩ Y khoa, Đại học Korea",
          "Cử nhân Y khoa, Đại học Korea",
          "Giảng viên thỉnh giảng, Trường Y Đại học Korea",
          "Bác sĩ nội trú, Bệnh viện Guro thuộc Đại học Korea",
          "Giám đốc Trung tâm Nâng cao Sức khỏe, Bệnh viện Gimpo Woori"
        ],
        [
          "Trưởng bộ phận Đào tạo Y khoa, Bệnh viện Gimpo Woori",
          "Trưởng khoa Y học Gia đình, Bệnh viện Gimpo Woori",
          "Trưởng khoa Y học Gia đình, Bệnh viện Cheongju Hana",
          "Trưởng khoa Y học Gia đình, Bệnh viện Sahmyook Seoul"
        ]
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Gyeong Hwa Lee",
      "portraitAlt": "Dr. Gyeong Hwa Lee",
      "specialty": "Bác sĩ chuyên khoa Nội",
      "name": "Dr. Gyeong Hwa Lee",
      "role": "Bác sĩ",
      "specialties": "Tiêu hóa, nội soi dạ dày và đại tràng, bệnh mạn tính",
      "careers": [
        [
          "Hoàn thành chương trình đào tạo chuyên sâu về Tiêu hóa tại Bệnh viện Ilsan thuộc Cơ quan Bảo hiểm Y tế Quốc gia Hàn Quốc",
          "Tốt nghiệp Trường Y Sau đại học Đại học Gachon",
          "Hoàn thành chương trình bác sĩ thực tập và nội trú tại Bệnh viện Gil thuộc Đại học Gachon",
          "Bác sĩ chuyên khoa sâu về Nội soi Tiêu hóa"
        ],
        []
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Jin-Hyoung Park",
      "portraitAlt": "Dr. Jin-Hyoung Park",
      "specialty": "Bác sĩ chuyên khoa Gây mê Hồi sức",
      "name": "Dr. Jin-Hyoung Park",
      "role": "Bác sĩ",
      "specialties": "Gây tê vùng phức tạp, gây mê cho người cao tuổi, gây mê cho bệnh nhân mắc bệnh mạn tính",
      "careers": [
        [
          "Giảng viên thỉnh giảng, Trường Y Đại học Quốc gia Seoul",
          "Phó Giáo sư lâm sàng, Bệnh viện Đại học Quốc gia Seoul Bundang thuộc Trường Y Đại học Quốc gia Seoul",
          "Giảng viên lâm sàng, Trung tâm Y tế Samsung Seoul",
          "Bác sĩ nội trú và thực tập, Trung tâm Y tế Samsung Seoul",
          "Thạc sĩ Y khoa, Trường Y Đại học Sungkyunkwan",
          "Cử nhân Y khoa, Trường Y Đại học Konyang"
        ],
        []
      ]
    },
    {
      "slideLabel": "Giới thiệu Dr. Junsung Kim",
      "portraitAlt": "Dr. Junsung Kim",
      "specialty": "Bác sĩ chuyên khoa Chẩn đoán Hình ảnh",
      "name": "Dr. Junsung Kim",
      "role": "Bác sĩ",
      "specialties": "Đọc và phân tích chuyên sâu hình ảnh MRI, CT, siêu âm tim (Echo), siêu âm (cơ xương khớp / ổ bụng / tuyến giáp / đầu và cổ / vú / lồng ngực)",
      "careers": [
        [
          "Giảng viên lâm sàng Khoa Chẩn đoán Hình ảnh, Trung tâm Y tế Asan Seoul",
          "Phó Giáo sư lâm sàng Khoa Chẩn đoán Hình ảnh, Bệnh viện Kangbuk Samsung",
          "Hoàn thành chương trình đào tạo Tiến sĩ Y khoa, Trường Y Đại học Công giáo Hàn Quốc",
          "Hoàn thành chương trình đào tạo Thạc sĩ Y khoa, Trường Y Đại học Công giáo Hàn Quốc",
          "Cử nhân Y khoa, Trường Y Đại học Công giáo Hàn Quốc",
          "Trưởng khoa Chẩn đoán Hình ảnh, Bệnh viện Quân y Yangju",
          "Bác sĩ nội trú Khoa Chẩn đoán Hình ảnh, Bệnh viện Seoul St. Mary's thuộc Đại học Công giáo Hàn Quốc",
          "Bác sĩ thực tập, Trung tâm Y tế Công giáo Hàn Quốc"
        ],
        []
      ]
    }
  ],
  "openDetails": "Xem thông tin chi tiết về bác sĩ",
  "specialtiesHeading": "Chuyên khoa điều trị chính",
  "careerHeading": "Học vấn và kinh nghiệm",
  "previous": "Bác sĩ trước",
  "next": "Bác sĩ tiếp theo",
  "slidePause": "Tạm dừng tự động chuyển bác sĩ",
  "slideResume": "Tiếp tục tự động chuyển bác sĩ",
  "dialogLabel": "Thông tin chi tiết về bác sĩ",
  "closeDetails": "Đóng thông tin chi tiết về bác sĩ",
  "specialty": "Bác sĩ chuyên khoa Chấn thương Chỉnh hình",
  "name": "Dr. Jong-Keun Kim",
  "role": "Giám đốc đại diện",
  "portraitAlt": "Dr. Jong-Keun Kim - Giám đốc đại diện",
  "specialties": "Khớp gối (thay khớp nhân tạo ít xâm lấn / PSI cá thể hóa theo bệnh nhân / nội soi khớp), phẫu thuật thay lại khớp nhân tạo, điều trị bằng tế bào gốc, ghép tế bào sụn, khớp háng (thay khớp nhân tạo / nội soi khớp), chấn thương thể thao, bàn chân",
  "career01": "Tiến sĩ Y khoa, Đại học Quốc gia Seoul",
  "career02": "Thạc sĩ Y khoa, Đại học Quốc gia Seoul",
  "career03": "Cử nhân Y khoa, Đại học Yonsei",
  "career04": "Cố vấn lâm sàng Khoa Chấn thương Chỉnh hình, Bệnh viện Đại học Quốc gia Seoul",
  "career05": "Giảng viên thỉnh giảng Khoa Chấn thương Chỉnh hình, Trường Y Đại học Quốc gia Seoul",
  "career06": "Giảng viên lâm sàng Khoa Chấn thương Chỉnh hình, Trường Y Đại học Quốc gia Seoul",
  "career07": "Trưởng khoa Chấn thương Chỉnh hình, Bệnh viện Hanil trực thuộc Tập đoàn Điện lực Hàn Quốc",
  "career08": "Bác sĩ chuyên khoa, Bệnh viện Gil thuộc Đại học Gachon",
  "career09": "Được mời tham gia chương trình AVP (Academic Visiting Program) và đào tạo chuyên sâu tại HSS (Hospital for Special Surgery), New York, Hoa Kỳ",
  "career10": "Đào tạo với tư cách học giả thỉnh giảng (Visiting Scholar) tại Cornell University, New York, Hoa Kỳ",
  "career11": "Đào tạo về phẫu thuật thay khớp nhân tạo bằng robot tại Stryker Center, New Jersey, Hoa Kỳ",
  "career12": "Tham gia khóa đào tạo Advanced Attune Course khu vực Châu Á - Thái Bình Dương (Bangkok, Thái Lan)",
  "career13": "AO trauma Principle course certification"
};

// ── 27. 흥K병원 둘러보기 ──
const facilities = {
  "kicker": "FACILITIES",
  "title": "Khám phá Bệnh viện Heung-K",
  "description": "Luôn đặt bệnh nhân lên hàng đầu,\nchúng tôi không chỉ hướng đến điều trị tốt hơn mà còn nỗ lực giúp bệnh nhân trở lại cuộc sống thường ngày.",
  "floorsLabel": "Chọn cơ sở vật chất theo tầng",
  "floors": {
    "5": {
      "description": "Trung tâm Khớp và Cột sống, Trung tâm Chẩn đoán Hình ảnh (X-ray, MRI-1, CT), Trung tâm Phục hồi chức năng và Trị liệu bằng tay",
      "heading": "5F - Trung tâm Khớp và Cột sống",
      "label": "Tầng 5"
    },
    "6": {
      "description": "Trung tâm Nội khoa, Trung tâm Khám sức khỏe, Trung tâm Phẫu thuật Trung tâm, Trung tâm Tăng trưởng, Trung tâm Nội soi",
      "heading": "6F - Trung tâm Phẫu thuật Trung tâm",
      "label": "Tầng 6"
    },
    "7": {
      "description": "Khu điều trị nội trú",
      "heading": "7F - Khu điều trị nội trú",
      "label": "Tầng 7"
    },
    "8": {
      "description": "Khu điều trị nội trú, MRI-2, Trung tâm Xét nghiệm Y khoa, Phòng hội nghị lớn, Văn phòng hành chính",
      "heading": "8F - Khu điều trị nội trú",
      "label": "Tầng 8"
    },
    "9": {
      "description": "Vườn trên sân thượng",
      "heading": "9F - Vườn trên sân thượng",
      "label": "Tầng 9"
    }
  },
  "previous": "Danh sách ảnh trước",
  "thumbnails": "Danh sách ảnh",
  "next": "Danh sách ảnh tiếp theo",
  "pending": "Đang chuẩn bị hình ảnh"
};

// ── 28. 흥K 360 SERVICE ──
const service360 = {
  "allInOne": "All-in-One",
  "wordmarkAlt": "Chăm sóc 360°",
  "titleStart": "Từ nhập cảnh, điều trị đến khi về nước",
  "titleJoin": " – kết nối trọn vẹn cùng ",
  "titleBrand": "Heung-K",
  "introStart": "Để giúp bệnh nhân từ nước ngoài và người nước ngoài sinh sống tại Hàn Quốc được khám chữa bệnh thuận tiện và hiệu quả hơn, Bệnh viện Heung-K triển khai ",
  "introEmphasis": "hệ thống chăm sóc toàn diện 360°",
  "introEnd": ".",
  "distance": "Chỉ 25 phút từ Sân bay Incheon!",
  "overviewTitle": "Dịch vụ dành cho bệnh nhân quốc tế tại Bệnh viện Heung-K – ",
  "overviewEmphasis": "Chăm sóc 360°",
  "overviewDescription": "Hệ thống 360° kết nối tư vấn, đặt lịch, xét nghiệm, phẫu thuật, phiên dịch, lưu trú, di chuyển và chăm sóc sau điều trị, giúp bệnh nhân quốc tế yên tâm điều trị và hồi phục tại Hàn Quốc.",
  "step1Alt": "Hình ảnh hướng dẫn đặt lịch trực tuyến và sắp xếp lịch trình",
  "step1": "Đặt lịch trực tuyến và sắp xếp lịch trình",
  "step2Alt": "Hình ảnh hướng dẫn dịch vụ đón tại sân bay",
  "step2": "Đón tại sân bay",
  "step3Alt": "Hình ảnh hướng dẫn đăng ký khám và xét nghiệm",
  "step3": "Đăng ký khám và xét nghiệm",
  "step4Alt": "Hình ảnh hướng dẫn khám bệnh",
  "step4": "Khám bệnh",
  "step5Alt": "Hình ảnh hướng dẫn phẫu thuật",
  "step5": "Phẫu thuật",
  "step6Alt": "Hình ảnh hướng dẫn phục hồi chức năng",
  "step6": "Phục hồi chức năng",
  "step7Alt": "Hình ảnh hướng dẫn trở về nước",
  "step7": "Trở về nước",
  "hotelCost": "Chi phí khách sạn do bệnh nhân tự chi trả.",
  "pickupHeading": "AIRPORT PICKUP SERVICE",
  "pickupTitle": "Thoải mái di chuyển từ sân bay đến bệnh viện",
  "pickupDescription": "Bệnh viện Heung-K cung cấp dịch vụ đón tại Sân bay Quốc tế Incheon,\ngiúp bệnh nhân và người đi cùng đến bệnh viện thuận tiện, thoải mái.",
  "advanceReservation": "ADVANCE RESERVATION REQUIRED",
  "pickupAlt": "Bệnh nhân và người đi cùng di chuyển bằng ô tô từ sân bay",
  "accommodationHeading": "ACCOMMODATION",
  "accommodationTitle": "Lưu trú thuận tiện trong thời gian điều trị",
  "accommodationDescription": "Bệnh viện Heung-K giới thiệu khách sạn gần bệnh viện và tại Siheung, Incheon, đồng thời hỗ trợ đặt phòng cho bệnh nhân quốc tế và người đi cùng.",
  "reservation": "RESERVATION",
  "hotelListLabel": "Danh sách khách sạn lưu trú — Vuốt sang trái hoặc phải để xem",
  "hotel1Alt": "Khách sạn Paradise City",
  "hotel2Alt": "Khách sạn Sheraton Grand Incheon",
  "hotel3Alt": "Khách sạn Wave M East",
  "hotel4Alt": "Le Collective Siheung Wave Park",
  "hotel5Alt": "Hình ảnh minh họa thẻ khu nghỉ dưỡng Inspire",
  "pauseHotels": "Tạm dừng tự động chuyển khách sạn",
  "playHotels": "Tiếp tục tự động chuyển khách sạn"
};

// ── 29. 진료 예약 ──
const reservation = {
  "kicker": "RESERVATION",
  "title": "Đặt lịch khám",
  "description": "Vui lòng nhập thông tin bệnh nhân đúng như trên hộ chiếu.",
  "painLegend": "Chọn vị trí đau",
  "painTitle": "Bạn bị đau ở đâu?",
  "kneeAlt": "Hướng dẫn vị trí đau ở khớp gối",
  "knee": "Đầu gối",
  "shoulderAlt": "Hướng dẫn vị trí đau ở vai",
  "shoulder": "Vai",
  "handAlt": "Hướng dẫn vị trí đau ở bàn tay và khuỷu tay",
  "hand": "Bàn tay và khuỷu tay",
  "footAlt": "Hướng dẫn vị trí đau ở bàn chân và cổ chân",
  "foot": "Bàn chân và cổ chân",
  "spineAlt": "Hướng dẫn vị trí đau ở thắt lưng",
  "spine": "Thắt lưng",
  "patientLegend": "Thông tin bệnh nhân",
  "patientTitle": "Vui lòng nhập thông tin bệnh nhân",
  "givenName": "Tên",
  "familyName": "Họ",
  "birthday": "Ngày sinh",
  "gender": "Giới tính",
  "symptoms": "Triệu chứng",
  "nationality": "Quốc tịch",
  "email": "Email",
  "phone": "Số điện thoại",
  "appointmentDate": "Ngày khám mong muốn",
  "insurance": "Bảo hiểm",
  "insuranceYes": "Có",
  "insuranceNational": "Bảo hiểm Y tế Quốc gia Hàn Quốc",
  "insuranceInternational": "Bảo hiểm y tế quốc tế",
  "insuranceNone": "Không",
  "otherInsurance": "Bảo hiểm khác",
  "consent": "Tôi đồng ý với việc thu thập và sử dụng thông tin cá nhân.",
  "submit": "Gửi yêu cầu đặt lịch",
  "unavailable": "Chức năng đặt lịch trực tuyến đang được chuẩn bị. Vui lòng liên hệ bệnh viện."
};

// ── 30. 진료 예약 · 성별/국적 선택 항목 ──
const reviewOptions = {
  "genderChoose": "Vui lòng chọn",
  "male": "Nam",
  "female": "Nữ",
  "unspecified": "Không muốn trả lời",
  "nationalityChoose": "Vui lòng chọn",
  "korea": "Hàn Quốc",
  "usa": "Hoa Kỳ",
  "uk": "Vương quốc Anh",
  "china": "Trung Quốc",
  "japan": "Nhật Bản",
  "russia": "Nga",
  "mongolia": "Mông Cổ",
  "india": "Ấn Độ",
  "saudi": "Ả Rập Xê Út",
  "vietnam": "Việt Nam",
  "other": "Khác"
};

// ── 31. 고객문의센터 · 지도 ──
const customerCenter = {
  "kicker": "CS CENTER",
  "title": "Trung tâm Hỗ trợ Khách hàng",
  "description": "Trung tâm Hỗ trợ Khách hàng Bệnh viện Heung-K tư vấn về khám chữa bệnh, đặt lịch, nhập viện và điều trị.\nChúng tôi hỗ trợ nhanh chóng, tận tình theo nhu cầu của từng bệnh nhân.",
  "hours": "Giờ khám bệnh",
  "closed": "Nghỉ Chủ nhật và các ngày lễ",
  "day0": "Thứ Hai – Thứ Sáu",
  "day1": "Khám buổi tối các ngày trong tuần",
  "day2": "Thứ Bảy",
  "day3": "Giờ nghỉ trưa",
  "address": "Bệnh viện Heung-K, Tầng 5–8, số 22 Neunggokbeonyeong-gil, Siheung, Gyeonggi-do",
  "copyAddress": "Sao chép địa chỉ bệnh viện",
  "mapTitle": "Vị trí Bệnh viện Heung-K trên Google Maps",
  "phone": "Số điện thoại liên hệ",
  "copyPhone": "Sao chép số điện thoại",
  "fax": "Fax",
  "copyFax": "Sao chép số fax",
  "email": "Email",
  "copyEmail": "Sao chép email",
  "copyDone": "Đã sao chép.",
  "copyFailed": "Vui lòng nhấn giữ hoặc chọn nội dung cần sao chép.",
  "openMap": "Xem trên Google Maps"
};

// ── 32. 오시는 길 · 푸터 ──
const contact = {
  "kicker": "CONTACT",
  "title": "Hướng dẫn đến bệnh viện",
  "incheonAlt": "Toàn cảnh Sân bay Quốc tế Incheon",
  "incheon": "Sân bay Quốc tế Incheon",
  "incheonTime": "25 phút",
  "carLabel": "Di chuyển bằng ô tô hoặc taxi",
  "carDescription": "Tìm “Bệnh viện Heung-K” trên ứng dụng bản đồ hoặc nhập địa chỉ dưới đây",
  "address": "Số 22 Neunggokbeonyeong-gil, Siheung, Gyeonggi-do",
  "subwayLabel": "Di chuyển bằng tàu điện ngầm",
  "incheonRail": "Đi tàu thường tuyến đường sắt sân bay từ Nhà ga 1 hoặc Nhà ga 2 Sân bay Incheon",
  "incheonStep0": "Xuống tại ga Sân bay Gimpo",
  "incheonStep1": "Chuyển sang tuyến Seohae hướng đi Wonsi",
  "incheonStep2": "Xuống tại ga Siheung Neunggok, ra Cửa số 3",
  "gimpoAlt": "Toàn cảnh Sân bay Quốc tế Gimpo",
  "gimpo": "Sân bay Quốc tế Gimpo",
  "gimpoTime": "30 phút",
  "gimpoRail": "Đi tuyến Seohae qua 9 ga, xuống tại ga Siheung Neunggok và ra cửa số 3.",
  "gimpoStep0": "Đi tuyến Seohae hướng Wonsi từ ga Sân bay Gimpo",
  "gimpoStep1": "Đi qua 9 ga, xuống tại ga Siheung Neunggok",
  "gimpoStep2": "Xuống tại ga Siheung Neunggok, ra Cửa số 3",
  "logoAlt": "Bệnh viện Heung-K",
  "footerLabel0": "Giám đốc đại diện Bệnh viện Heung-K",
  "footerValue0": "Dr. Jong-Keun Kim",
  "footerLabel1": "Mã số đăng ký kinh doanh",
  "footerLabel2": "Địa chỉ",
  "footerValue2": "14999) Bệnh viện Heung-K, Tầng 5–8, số 22 Neunggokbeonyeong-gil, Siheung, Gyeonggi-do",
  "footerLabel3": "TEL",
  "footerLabel4": "FAX",
  "footerLabel5": "E.MAIL",
  "blogLabel": "Blog Naver của Bệnh viện Heung-K",
  "kakaoLabel": "Kênh KakaoTalk của Bệnh viện Heung-K",
  "youtubeLabel": "Kênh YouTube của Bệnh viện Heung-K",
  "instagramLabel": "Instagram của Bệnh viện Heung-K",
  "copyright": "Copyright(C) 2024 흥K병원. All rights reserved."
};

// 사이트 연결용: 위 문구들을 기존 번역 키 구조로 모읍니다. 이 아래는 수정하지 않습니다.
const quickMenu = {
  "label": "Menu nhanh",
  "open": "Mở menu nhanh",
  "close": "Đóng menu nhanh",
  "phone": "Gọi điện",
  "reserve": "Đặt lịch khám",
  "email": "Gửi email",
  "hours": "Giờ khám bệnh",
  "weekdays": "THỨ 2–6",
  "saturday": "THỨ 7"
};

const doctorMenu = {
  "label": "Chọn bác sĩ theo chuyên khoa",
  "knee": "Trung tâm Khớp gối",
  "shoulder": "Trung tâm Vai",
  "handFoot": "Trung tâm Bàn tay & Bàn chân",
  "spine": "Trung tâm Cột sống",
  "internal": "Nội khoa",
  "radiology": "Chẩn đoán hình ảnh",
  "anesthesia": "Gây mê & Điều trị đau"
};

// 검색 결과 및 공유 미리보기 문구. 기존 본문 번역은 유지합니다.
const seo = {
  "title": "Bệnh viện Heung-K | Điều trị khớp và cột sống tại Hàn Quốc",
  "description": "Tìm hiểu dịch vụ điều trị đầu gối, vai, bàn tay, bàn chân và cột sống tại Bệnh viện Heung-K ở Siheung, Hàn Quốc. Thông tin bác sĩ, đặt lịch và hỗ trợ bệnh nhân quốc tế."
};

export default {
  seo,
  quickMenu,
  doctorMenu,
  pageTitle,
  languageLabel,
  header,
  languageNames,
  homeLabel,
  nav,
  hero,
  about,
  global,
  apkass,
  mis,
  treatment,
  incision,
  cadaver,
  research,
  specialty,
  centerMenu,
  knee,
  centerTreatments: {
    ...centerTreatmentsKnee,
    ...centerTreatmentsShoulder,
    ...centerTreatmentsHandFoot,
    ...centerTreatmentsSpine,
  },
  shoulder,
  handFoot,
  spine,
  doctors,
  facilities,
  service360,
  reservation,
  reviewOptions,
  customerCenter,
  contact,
};
