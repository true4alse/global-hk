// 번역 작업 안내
// 아래 문구 묶음은 페이지 상단 → 하단 순서입니다. 각 묶음 안에서도 화면 등장 순서를 따릅니다.
// 따옴표 안의 문구만 수정하세요. 키 이름, 배열 순서, 하단 export 연결은 변경하지 않습니다.
// \n은 의도한 줄바꿈입니다. 이미지 설명(Alt)과 접근성 문구도 번역 대상입니다.
// 여러 곳에서 쓰는 공통 문구는 첫 등장 위치에 한 번만 둡니다.
// 현재 화면에 직접 연결되지 않은 문구는 해당 묶음 끝에 보존합니다.
// 한국어 문구 변경 시 index.html도 함께 수정합니다.(외국어x) 이미지 경로·통계 숫자는 HTML에서 관리합니다.

// ── 01. 페이지 제목 ──
const pageTitle = "兴K医院 | 中文官网";

// ── 02. 언어 메뉴 제목 ──
const languageLabel = "选择语言";

// ── 03. 상단 헤더 ──
const header = {
  "languageButton": "global",
  "phoneLabel": "시안용 임시 전화번호(수정안해도 됨 일단)",
  "navLabel": "主菜单"
};

// ── 04. 언어 선택 ──
const languageNames = {
  "ko": "韩语",
  "en": "英语",
  "zh": "中文",
  "ja": "日语",
  "ru": "俄语",
  "mn": "蒙古语",
  "hi": "印地语",
  "ar": "阿拉伯语",
  "vi": "越南语"
};

// ── 05. 홈 링크 ──
const homeLabel = "兴K医院首页";

// ── 06. 상단 내비게이션 ──
const nav = {
  "about": "医院介绍",
  "specialties": "特色诊疗",
  "doctors": "医生团队",
  "facilities": "医院设施",
  "inquiry": "咨询预约",
  "location": "交通指南"
};

// ── 07. 메인 비주얼 ──
const hero = {
    researchTitle: "超越诊疗，以科研与教育\n创造更美好的日常。",
    researchLabel: "超越诊疗，以科研与教育 创造更美好的日常。",
  "period": "每年",
  "unit": "例",
  "title": "关节手术越复杂, 临床经验越重要",
  "descriptionFirst": "兴K医院依托丰富的手术经验和持续的国际医疗交流, 专注于高难度关节手术及人工关节翻修术。",
  "descriptionSecond": "我们细致评估患者病情及既往治疗史, 不断精进关节诊疗技术, 为复杂病例制定适宜的治疗方案。",
  "carouselLabel": "兴K医院诊疗特色",
  "minimalTitle": "小切口人工关节置换术",
  "orKicker": "为安全手术提供保障",
  "orClean": "高洁净手术环境",
  "orRooms": "配备5间手术室",
  "orSpecialty": "麻醉疼痛医学科",
  "orStaff": "专科医生常驻",
  "nursingWards": "所有病房",
  "nursingHours": "24小时",
  "nursingService": "护理陪护一体化服务",
  "nursingDescription": "提供24小时护理，让患者安心住院。",
  "rehabLead": "根据患者的康复阶段",
  "rehabPersonal": "一对一个性化",
  "rehabTreatment": "康复治疗",
  "rehabDescription": "基于个体功能评估，提供系统的康复治疗，帮助恢复身体功能并重返日常生活。",
  "orPhotoAlt": "医疗团队在手术室进行手术",
  "rehabPhotoAlt": "个性化康复治疗设施",
  "previous": "上一张",
  "next": "下一张",
  "pause": "暂停自动轮播",
  "play": "开始自动轮播"
};

// ── 08. About HEUNG-K · 병원 소개 ──
const about = {
  "kicker": "About HEUNG-K",
  "title": "不止于关节与脊柱诊疗的专业实力,\n更致力于树立高质量治疗的新标准。",
  "description": [
    "兴K医院专注于膝关节、髋关节、肩关节、脊柱及手足部疾病的诊疗。\n凭借丰富的临床经验, 为患者提供涵盖诊断、治疗、手术及康复的系统化医疗服务。",
    "我们持续推进医学研究、专业培训和国际医疗交流, 帮助患者恢复健康、重返日常生活。"
  ],
  "statsLabel": "兴K医院概况",
  "statLabels": {
    "bed": "床位数",
    "doctor": "门诊患者人数",
    "iv": "住院患者人数",
    "world": "国际患者人数",
    "stethoscope": "手术例数"
  },
  "galleryLabel": "兴K医院诊疗及医疗交流掠影",
  "photoAlt": {
    "row1-1": "正在进行手术的医疗团队",
    "row1-2": "正在与患者沟通的医护人员",
    "row1-3": "国际学术会议发言",
    "row1-4": "诊疗咨询",
    "row1-5": "手术室内的临床交流",
    "row2-1": "访问海外医疗机构",
    "row2-2": "国际医疗团队交流",
    "row2-3": "参与手术的医疗团队",
    "row2-4": "与医疗专家交流",
    "row2-5": "医学培训现场",
    "row2-6": "国际进修医师",
    "row2-7": "培训参与者合影"
  },
  "pause": "사진 움직임 멈추기 안해도됨",
  "resume": "사진 움직임 재생 안해도됨"
};

// ── 09. GLOBAL EXCELLENCE · HSS 교류 ──
const global = {
  "kicker": "GLOBAL EXCELLENCE",
  "leadStart": "国际领先的骨科手术标准, ",
  "hospital": "在兴K医院",
  "leadEnd": "亲身体验。",
  "description": "汲取国际先进经验, 分享临床实践成果。\n兴K医院深耕关节与脊柱诊疗, 持续优化治疗方案。",
  "awardsLabel": "HSS骨科排名历年成绩",
  "yearsUnit": "YEARS",
  "newsweek": "连续5年位居全球骨科排名第一",
  "usnews": "连续17年位居美国骨科排名第一",
  "hssTitle": "HSS: 全球骨科医疗的标杆",
  "hssDescription": "位于纽约曼哈顿的特种外科医院(Hospital for Special Surgery, HSS)是国际知名的骨科专科医院, 在临床诊疗、科研、教育和医疗创新领域均处于领先地位。",
  "imageAlt": {
    "hssSnf": "兴K医院代表院长Jong-Keun Kim参访HSS SNF人工关节置换与重建中心",
    "surgeryExchange": "医疗团队在HSS手术现场交流临床经验",
    "hssBuilding": "纽约HSS医院外景",
    "hssVisit": "兴K医院代表院长Jong-Keun Kim在HSS手术室外",
    "surgeryTeam": "参与HSS手术的医疗团队",
    "colleagues": "兴K医院代表院长Jong-Keun Kim与HSS医疗团队合影",
    "operatingRoom": "HSS手术室内的临床交流",
    "hssLobby": "兴K医院代表院长Jong-Keun Kim参访HSS",
    "visitorTeam": "与HSS医疗团队的研修访问纪念合影",
    "surgicalDiscussion": "医疗团队在手术过程中交流临床经验与治疗见解"
  },
  "hssExchangeTitle": "向HSS学习先进经验,\n分享兴K医院的专业技术",
  "hssExchangeFirst": "兴K医院代表院长Jong-Keun Kim受邀参加HSS学术访问项目(AVP)及康奈尔大学访问学者项目, 积累了国际先进骨科临床与科研经验。",
  "hssExchangeSecond": "他与当地医疗团队交流人工关节置换术经验, 分享兴K医院在微创全膝关节置换术(MIS-TKA)方面的技术与心得, 持续开展国际学术交流。",
  "watermark": "HSS IN KOREA"
};

// ── 10. APKASS · 국제 학술대회 ──
const apkass = {
  "logoKasAlt": "韩国关节镜学会标志",
  "logoApkassAlt": "APKASS 2026 KOREA标志",
  "eyebrow": "汇聚骨科前沿成果的国际学术平台",
  "leadership": "INTERNATIONAL ACADEMIC LEADERSHIP",
  "apkass": "APKASS",
  "year": "2026",
  "korea": "KOREA",
  "ickas": "ICKAS",
  "description": "汇聚亚太地区及世界各国专家, 共同分享最新研究成果与临床诊疗进展的国际学术会议",
  "founder01Alt": "APKASS 2026国际学术会议参会人员合影",
  "founder02Alt": "兴K医院获颁APKASS 2026官方合作医院纪念牌匾",
  "hospital": "兴K医院 — ",
  "partnership": "APKASS 2026官方合作医院",
  "contributor": "OFFICIAL INSTITUTIONAL CONTRIBUTOR",
  "founder": "FOUNDER",
  "chairpersonAlt": "国际学术会议展示屏幕上的兴K医院代表院长Jong-Keun Kim",
  "name": "Jong-Keun Kim",
  "role": "代表院长",
  "session": "担任APKASS 2026学术会议分会场主持人",
  "session01Alt": "兴K医院代表院长Jong-Keun Kim担任APKASS 2026学术会议分会场主持人",
  "session02Alt": "APKASS 2026学术会议专题报告与讨论现场",
  "gallery01Alt": "参加国际学术会议并聆听讲座的专家",
  "gallery02Alt": "专注聆听学术报告的参会人员",
  "gallery03Alt": "兴K医院代表院长Jong-Keun Kim与国际专家交流",
  "gallery04Alt": "在APKASS 2026大会上发表演讲的国际专家",
  "gallery05Alt": "国际学术会议主会场全景",
  "gallery06Alt": "国际学术会议专题报告与讨论现场",
  "gallery07Alt": "认真聆听学术报告的参会人员"
};

// ── 11. MIS TKA · 최소침습 수술 ──
const mis = {
  "kicker": "MIS TKA · Minimally Invasive TKA",
  "title": "微创全膝关节置换术",
  "description": "微创全膝关节置换术通过缩小切口, 减少周围软组织损伤, 有助于减轻术后疼痛、加快康复, 促进患者尽早恢复日常生活。",
  "imageAlt": {
    "kneeVisual": "膝关节骨骼结构",
    "incisionComparison": "膝关节手术切口位置与食指长度对比示意图"
  },
  "claimStartFirst": "全球",
  "claimStartSecond": "独一无二的技术",
  "claimEndFirst": "真正意义上的",
  "claimEndSecond": "微创小切口",
  "questionLabel": "Question",
  "questionFirst": "有什么 ",
  "questionStrong": "不同？",
  "differenceFirst": "分别在髌骨上缘和下缘做约3-4cm的小切口, 在膝关节内完成手术。",
  "differenceSecond": "与传统手术约7-9cm(约一根食指长)的切口相比,",
  "differenceThird": "旨在尽可能缩小切口范围, 减少周围组织损伤。",
  "captionName": "MIS TKA",
  "captionSuffix": " · Minimally Invasive TKA",
  "benefitTitle": "小切口, 助力更快康复",
  "benefitIntro": "兴K医院的MIS-TKA通过缩小切口、减少组织损伤, 帮助减轻术后负担, 兼顾手术治疗与术后康复。",
  "benefit1Title": "减少切口损伤",
  "benefit1Description": "无需在大腿部位切开\n尽量缩小小腿部位的切口",
  "benefit2Title": "仅做必要的切口",
  "benefit2Description": "上下各做约3-4cm的小切口\n以尽可能小的切口进入手术部位",
  "benefit3Title": "微创精准人工关节置换术",
  "benefit3Description": "在膝关节内进行手术\n精准完成人工关节置换。"
};

// ── 12. 차별화된 치료 · JK Minimal ──
const treatment = {
  "hospital": "兴K医院",
  "titleFirst": "致力于",
  "titleSecond": "提供差异化的",
  "titleThird": "诊疗服务。",
  "intro": "精准、规范的手术\n源于兴K医院的特色诊疗方案",
  "imageAlt": {
    "patentFrame": "微创全膝关节置换术用胫骨尺寸测量手动器械专利证书, 专利号: 第10-2622418号",
    "jkMinimal": "JK Minimal胫骨及股骨尺寸测量器械",
    "psi": "根据患者骨骼结构定制的PSI个性化手术器械",
    "mako": "MAKO人工关节置换手术机器人"
  },
  "systemName": "InJury Knee Minimal:",
  "systemShortName": "JK Minimal",
  "patentEmphasis": "微创全膝关节置换术",
  "patentDescription": "胫骨及股骨尺寸测量器械",
  "methodLabel": "JK Minimal的技术特点",
  "maximum": "最大化",
  "efficiency": "效率",
  "methodDescription": "研发人工关节置换系统 (InJury Knee Minimal / JK Minimal), 使有限切口内的手术空间得到充分利用。",
  "minimumInjury": "最小化",
  "injury": "组织损伤",
  "minimumIncision": "最小化",
  "incision": "手术切口",
  "strategiesTitle": "旨在提高手术成功率与患者满意度的个性化方案",
  "psiTitle": "PSI",
  "psiSubtitle": "个性化人工关节置换术",
  "psiDescription": "采用依据患者骨骼结构定制的3D手术器械(PSI), 辅助精准植入人工关节假体。",
  "makoTitle": "MAKO",
  "makoSubtitle": "机器人辅助人工关节置换术",
  "makoDescription": "基于CT影像制定个性化三维手术方案, 在预定范围内精准截骨, 将机器人技术的精准性与微创手术经验相结合。",
  "windowTitle": "Mobile Window Technique",
  "windowSubtitle": "小切口下确保充足的手术操作空间",
  "windowDescription": "通过移动窗口技术(Mobile Window Technique), 更充分地利用小切口下的手术空间。"
};

// ── 13. 절개 비교 · 치료 장점 ──
const incision = {
  "titleAccent": "小切口",
  "title": "肉眼可见的差异",
  "imageAlt": {
    "case68": "68岁女性患者双膝手术切口对比",
    "case72": "72岁女性患者双膝手术切口对比",
    "case79": "79岁男性患者双膝手术切口对比"
  },
  "otherHospital": "其他医院",
  "ourHospital": "兴K医院",
  "ageUnit": "岁",
  "femalePatient": "女性患者",
  "malePatient": "男性患者",
  "benefitsAccent": "微创全膝关节置换术",
  "benefitsTitle": "的优势",
  "painTitle": "减轻术后疼痛",
  "painDescription": "缩小切口并减少肌肉、韧带等软组织损伤, 有助于减轻术后疼痛及止痛药使用量。",
  "movementTitle": "关节活动更顺畅\n有助于早期下地行走",
  "movementDescription": "减少组织损伤有助于降低关节内粘连风险, 改善关节活动度, 促进术后早期行走。",
  "scarTitle": "减少术后瘢痕",
  "scarDescription": "切口较小, 术后瘢痕通常更不明显, 有助于提高患者满意度。",
  "recoveryTitle": "缩短住院时间, 更快恢复日常生活",
  "recoveryDescription": "有助于加快康复、缩短住院时间, 早日恢复日常生活。"
};

// ── 14. 카데바 워크숍 ──
const cadaver = {
  "kicker": "MIS TKA · CADAVER WORKSHOP",
  "title": "国际微创与个性化人工关节置换术培训中心",
  "word": "CADAVER",
  "workshopLabel": "MIS TKA CADAVER WORKSHOP",
  "workshop": "2025、2026连续两年成功举办CADAVER研修班",
  "training": "微创全膝关节置换术技术培训",
  "hospital": "兴K医院",
  "descriptionFirst": "面向国内外骨科专科医生举办CADAVER Workshop,",
  "descriptionSecond": "分享微创全膝关节置换术的手术技术与临床经验,",
  "descriptionThird": "持续开展医师培训与学术交流。",
  "imageAlt": {
    "workshopGroupFramed": "金色相框中的CADAVER Workshop参训医师合影",
    "workshopCollageFramed": "金色相框内展示的CADAVER Workshop授课、实操及医师交流照片",
    "trophy": "装饰CADAVER Workshop展示区的金色手形奖杯"
  }
};

// ── 15. 연구 및 학술 활동 ──
const research = {
  "titleAccent": "将临床经验",
  "titleRest": "转化为科研成果",
  "descriptionFirst": "依托临床经验开展持续研究,",
  "descriptionSecond": "并通过国内外学术会议及专业期刊分享研究成果。",
  "kicker": "RESEARCH & PUBLICATIONS",
  "sliderLabel": "医疗团队学术活动照片",
  "carouselRole": "carousel",
  "slideRole": "slide",
  "imageAlt": {
    "aaosPresentation": "在国际骨科学术会议上发表报告的兴K医院代表院长Jong-Keun Kim",
    "yonseiWorkshop": "在延世大学CADAVER Workshop上交流的医疗团队",
    "koaPresentation": "在骨科学术会议上展示临床研究成果的医疗团队",
    "publication01": "兴K医院医疗团队研究论文展示框 1",
    "publication02": "兴K医院医疗团队研究论文展示框 2",
    "publication03": "兴K医院医疗团队研究论文展示框 3",
    "publication04": "兴K医院医疗团队研究论文展示框 4",
    "publication05": "兴K医院医疗团队研究论文展示框 5",
    "publication06": "兴K医院医疗团队研究论文展示框 6",
    "publication07": "兴K医院医疗团队研究论文展示框 7",
    "publication08": "兴K医院医疗团队研究论文展示框 8"
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
  "doctorsLabel": "兴K医院医疗团队",
  "parkJinHyung": "Dr. Jin-Hyoung Park",
  "kimJunSung": "Dr. Junsung Kim",
  "jungSeungJin": "Dr. Seung Jin Jung",
  "kimSeHoon": "Dr. Sehun Kim",
  "leeMyungChul": "Dr. Myung Chul Lee, 名誉院长",
  "kimJongGeun": "Dr. Jong-Keun Kim, 代表院长",
  "leeSuGeon": "Dr. Su-Keon Lee",
  "leeJunYoung": "Dr. Joon Young Lee",
  "leeKyungHwa": "Dr. Gyeong Hwa Lee",
  "joNamIk": "Dr. Nam Ik Cho",
  "yoonSangHoon": "Dr. Sang Hoon Yoon"
};

// ── 17. 전담센터 퀵메뉴 ──
const centerMenu = {
  "label": "专科中心快捷入口",
  "title": "QUICK\nMENU",
  "kneeLabel": "前往膝关节专科中心",
  "knee": "KNEE\nCENTER",
  "shoulderLabel": "前往肩关节专科中心",
  "shoulder": "SHOULDER\nCENTER",
  "hand-footLabel": "前往手足专科中心",
  "hand-foot": "HAND & FOOT\nCENTER",
  "spineLabel": "前往脊柱专科中心",
  "spine": "SPINE\nCENTER"
};

// ── 18. 무릎전담센터 · 배너 ──
const knee = {
  "hospital": "兴K医院",
  "title": "膝关节专科中心",
  "descriptionFirst": "涵盖精准诊断、保守治疗、高难度手术及术后康复。",
  "descriptionSecond": "以专业化诊疗体系, 为膝关节疾病提供系统治疗。",
  "service1": "Robot-Assisted MIS Total Knee Arthroplasty (MAKO system)",
  "service2": "Knee Revision Surgery",
  "service3": "Stem Cell Cartilage Regeneration (CARTISTEM)",
  "service4": "Autologous Chondrocyte Implantation (CartiLife)",
  "service5": "Corrective Osteotomy",
  "service6": "Meniscus Surgery",
  "service7": "Cruciate Ligament Reconstruction and Revision Surgery (ACL / PCL)",
  "service8": "Sports Injury Diagnosis and Treatment",
  "imageAlt": {
    "kimJongGeun": "Jong-Keun Kim代表院长",
    "leeJunYoung": "Dr. Joon Young Lee",
    "chosunArticle": "朝鲜日报报道：微创膝关节置换术, 减轻疼痛并加快康复"
  },
  "articleOpen": "放大查看朝鲜日报报道图片(在新窗口打开)"
};

// ── 19. 무릎전담센터 · 치료 상세 (공통 펼침/접힘 문구 포함) ──
const centerTreatmentsKnee = {
  "kneeLabel": "膝关节专科中心治疗",
  "makoTitle": "Robot-Assisted MIS Total Knee Arthroplasty (MAKO)",
  "mako687_1179": "融合兴K医院的微创手术经验与先进机器人技术",
  "imageAlt": {
    "introRobotSystem": "MAKO机器人人工关节手术系统",
    "doctorExperience": "手术中的医疗团队",
    "makoSystem": "MAKO机器人手术设备",
    "planCt": "术前检查与规划",
    "customPlan": "个性化手术",
    "safeOperation": "安全手术操作",
    "implant": "精准植入最适合的人工关节",
    "before": "术前下肢力线X线片",
    "planning": "MAKO术前规划界面",
    "operating": "应用MAKO机器人的手术",
    "after": "人工关节置换术后下肢力线X线片",
    "accuracy": "显示关节间隙与角度的MAKO手术规划界面",
    "makoRobot": "用于精准截骨的MAKO机器人机械臂",
    "safetyArm": "显示预定截骨范围的MAKO界面",
    "safetyBoundary": "机器人机械臂触觉反馈安全范围示意",
    "minimalIncision": "兴K医院微创机器人人工关节手术介绍视频",
    "incisionStandard": "一般机器人人工关节手术的切口长度为15-20cm",
    "incisionMako": "兴K医院微创机器人人工关节手术的切口长度为7-9cm",
    "case75Combined": "兴K医院微创机器人人工关节手术案例, 切口长度7.5cm",
    "case70Combined": "兴K医院微创机器人人工关节手术案例, 切口长度7cm"
  },
  "makoToggleContext": "MAKO详细介绍 ",
  "seeMore": "SEE MORE",
  "seeLess": "SEE LESS",
  "mako995_5015": "更准确, 更精准, 更安全",
  "mako995_5017": "机器人辅助膝关节置换术结合医生的临床经验与机器人的精准操作。",
  "mako995_5018": "根据术前CT影像对患者膝关节进行三维分析, 规划人工关节假体的尺寸、植入位置及截骨范围。术中, 医生在评估关节平衡的同时亲自操作机械臂, 在预定范围内精准截骨并植入人工关节假体。",
  "makoDoctorPrefix": "医生的 ",
  "makoDoctorExperience": "经验",
  "makoRobotPrefix": "机器人的 ",
  "makoRobotAccuracy": "精准性",
  "mako995_5031": "兴K医院机器人辅助膝关节置换术流程",
  "mako995_5038": "术前检查与规划",
  "mako995_5039": "术前通过CT建立膝关节三维模型, 规划假体尺寸、植入位置及截骨范围。",
  "mako995_5047": "个性化手术",
  "mako995_5048": "术中根据患者的关节畸形及韧带状态实时调整手术方案, 提高手术精准度。",
  "mako995_5056": "安全实施手术",
  "mako995_5057": "医生亲自操作机器人机械臂, 在预定范围内精准截骨。触觉反馈技术通过自动限制机械臂的运动范围, 防止截骨工具超出预定边界, 有助于保护周围血管、神经及软组织。",
  "mako995_5063": "精准植入适合患者的人工关节",
  "mako995_5064": "将适合患者的人工关节假体精准植入预定位置, 完成手术。",
  "before": "BEFORE",
  "makoPrecisionCaption": "MAKO机器人辅助精准手术",
  "after": "AFTER",
  "makoFeaturesLead": "机器人辅助关节置换术,",
  "makoFeaturesQuestion": "MAKO机器人有何不同?",
  "mako995_5091": "精准的术前规划",
  "mako995_5093": "基于3D CT影像制定个性化手术方案",
  "mako995_5095": "通过3D CT分析患者的膝关节形态及畸形程度, 规划截骨范围、假体尺寸与植入位置。",
  "mako995_5096": "术中可对截骨范围及关节间隙进行精细调整, 调整单位为0.5mm, 角度调整单位为0.5度, 有助于矫正下肢力线, 改善膝关节活动。",
  "mako995_5104": "精准截骨",
  "mako995_5106": "借助机器人机械臂实现精准截骨",
  "mako995_5108": "按照预定的位置、角度及截骨量精准完成截骨。",
  "mako995_5118": "手术安全性",
  "mako995_5120": "降低术中风险",
  "mako995_5122": "MAKO的触觉反馈技术根据手术方案设定虚拟安全边界, 自动限制机械臂的运动范围, 防止截骨工具超出预定边界, 有助于保护周围血管、神经及韧带, 减少不必要的骨切除。",
  "makoMinimalHighlight": "全球最小切口的",
  "makoMinimalTitle": "微创机器人辅助关节置换术!",
  "mako995_5129": "兴K医院采用MAKO机器人辅助精准截骨技术, 开展切口长度为7-10cm的微创关节置换术。",
  "mako995_5130": "不仅缩小皮肤切口, 还尽量减少周围软组织损伤, 帮助患者加快术后康复。",
  "makoVideoLink": "在YouTube观看视频(在新窗口打开)",
  "makoPrecisionPrefix": "保持机器人手术的精准性, ",
  "makoPrecisionHighlight": "进一步减轻切口创伤",
  "mako995_5137": "一般机器人辅助关节置换术的切口长度",
  "makoIncisionHighlight": "兴K医院MAKO机器人辅助微创关节置换术",
  "makoIncisionSuffix": "的切口长度",
  "mako995_5144": "兴K医院微创机器人辅助关节置换术案例",
  "makoBenefitsPrefix": "兴K医院 ",
  "makoBenefitsHighlight": "微创机器人辅助关节置换术",
  "makoBenefitsSuffix": "的优势",
  "makoBenefit1Title": "减轻术后疼痛",
  "makoBenefit1Body": "通过尽量缩小手术切口, 减少对周围软组织(肌肉、韧带等)的损伤, 有助于减轻术后疼痛, 减少止痛药的使用。",
  "makoBenefit2Title": "关节活动更顺畅\n有助于早期下地行走",
  "makoBenefit2Body": "由于组织损伤较小, 可减少关节内粘连, 有助于改善关节活动度, 促进术后早期下地行走。",
  "makoBenefit3Title": "减少术后瘢痕",
  "makoBenefit3Body": "通过缩小手术切口, 使术后瘢痕更小、更不明显, 有助于提高患者满意度。",
  "makoBenefit4Title": "缩短住院时间, 更快恢复日常生活",
  "makoBenefit4Body": "有助于加快术后康复, 缩短住院时间, 让患者更早恢复日常生活。",
  "cartistemTitle": "Umbilical Cord–derived Stem Cell (CARTISTEM®)",
  "cartistemDescription": "根据患者膝关节软骨缺损情况, 提供系统化的个性化治疗",
  "cartistemHeroAlt": "兴K医院医疗团队通过关节镜影像确认CARTISTEM治疗部位",
  "cartistemToggleContext": "CARTISTEM详细介绍 ",
  "cartistemIntroTitle": "CARTISTEM是一种利用捐赠脐带血中提取的间充质干细胞治疗膝关节软骨缺损的细胞治疗药物。",
  "cartistemIntroFirst": "干细胞如同‘种子’, 具有分化为多种细胞的潜能。",
  "cartistemIntroSecond": "将这些健康的‘种子’植入软骨再生能力下降的膝关节部位后, 干细胞可与周围组织相互作用, 并向软骨细胞分化。同时, 通过分泌多种生长因子和信号分子的旁分泌作用, 有助于减轻炎症、促进受损软骨修复, 为新生软骨的形成提供支持。",
  "cartistemPreparationTitle": "CARTISTEM制备流程",
  "cartistemPreparation1Title": "CARTISTEM检查与准备",
  "cartistemPreparation1Body": "检查治疗所用CARTISTEM的状态及配套组件",
  "cartistemPreparation2Title": "拆开无菌包装",
  "cartistemPreparation2Body": "在无菌条件下进行治疗准备",
  "cartistemPreparation3Title": "干细胞混合",
  "cartistemPreparation3Body": "将脐带血来源间充质干细胞与透明质酸混合",
  "cartistemPreparation4Title": "完成移植前准备",
  "cartistemPreparation4Body": "完成最终配制, 准备用于软骨缺损部位",
  "cartistemBenefitsTitle": "CARTISTEM的优势",
  "cartistemBenefit1": "无明确年龄限制, 也可用于较大面积的软骨缺损",
  "cartistemBenefit2": "单次治疗有望获得良好的软骨再生效果",
  "cartistemBenefit3": "无需采集患者自身软骨, 避免供区损伤",
  "cartistemBenefit4": "无需大切口, 可借助关节镜进行微创手术",
  "cartistemSurgeryTitle": "CARTISTEM手术流程",
  "cartistemSurgery1": "通过关节镜确认软骨缺损部位",
  "cartistemSurgery2": "清理并修整软骨缺损部位",
  "cartistemSurgery3": "在软骨缺损部位制作3-5mm的骨孔",
  "cartistemSurgery4": "CARTISTEM移植",
  "cartistemResultsTitle": "CARTISTEM治疗前后对比",
  "cartistemBeforeAlt": "CARTISTEM治疗前软骨缺损部位的关节镜图像",
  "cartistemBefore": "before",
  "cartistemAfterAlt": "CARTISTEM治疗1年后软骨部位的关节镜图像",
  "cartistemAfter": "after",
  "cartistemAfterTime": "治疗1年后",
  "cartilifeTitle": "Costal Autologous Chondrocyte Implantation (CartiLife®)",
  "cartilifeDescription": "提供专业的自体肋软骨细胞治疗, 促进膝关节软骨再生",
  "cartilifeHeroAlt": "兴K医院医疗团队正在查看CARTILIFE关节镜手术画面",
  "cartilifeToggleContext": "CARTILIFE详细介绍 ",
  "cartilifeIntroTitle": "利用自体肋软骨细胞促进受损关节软骨再生的先进治疗技术",
  "cartilifeIntroBody": "采集患者自身第8-10肋软骨组织, 将分离出的软骨细胞培养约6-7周, 制成微小球状软骨组织, 再移植至膝关节软骨缺损部位, 以促进健康且具有正常功能的软骨组织再生。",
  "cartilifeProcessTitle": "CARTILIFE治疗流程",
  "cartilifeHarvest1Alt": "自体肋软骨组织采集手术",
  "cartilifeHarvest2Alt": "肋骨软骨组织采集部位示意图",
  "cartilifeHarvest3Alt": "采集的肋软骨组织",
  "cartilifeHarvest4Alt": "采集后肋软骨组织的处理过程",
  "cartilifeStep1": "STEP 1",
  "cartilifeStep1Body": "从第8-10肋软骨采集组织",
  "cartilifeCultureDiagramAlt": "经过细胞分离、扩增及软骨分化培养, 形成微球状软骨组织的过程",
  "cartilifeCulture1Alt": "培养软骨细胞移植准备器械",
  "cartilifeCulture2Alt": "培养软骨细胞的移植准备过程",
  "cartilifeCulture3Alt": "微球状软骨组织移植器械",
  "cartilifeStep2": "STEP 2",
  "cartilifeStep2Body": "细胞分离与扩增 - 软骨分化培养 - 形成微球状软骨组织(直径约1.5mm)",
  "cartilifeImplant1Alt": "关节镜或开放手术下自体软骨细胞移植示意图",
  "cartilifeImplant2Alt": "关节镜下将微球状自体软骨组织移植至软骨缺损部位的图像",
  "cartilifeStep3": "STEP 3",
  "cartilifeStep3Body": "实施微球状自体软骨组织移植术",
  "cartilifeResultsTitle": "CARTILIFE治疗前后对比",
  "cartilifeBeforeAlt": "CARTILIFE治疗前软骨缺损部位的关节镜图像",
  "cartilifeBefore": "before",
  "cartilifeAfter1Alt": "CARTILIFE治疗1年后再生软骨的第一张关节镜图像",
  "cartilifeAfter2Alt": "CARTILIFE治疗1年后再生软骨的第二张关节镜图像",
  "cartilifeAfter": "after",
  "cartilifeAfterTime": "治疗1年后",
  "megacartiTitle": "Allocostal Cartilage (MegaCarti®)",
  "megacartiDescription": "针对软骨损伤提供细致治疗, 兴K医院的微骨折术与MegaCarti治疗。",
  "megacartiHeroAlt": "兴K医院医疗团队正在进行MegaCarti关节镜手术",
  "megacartiToggleContext": "MegaCarti详细介绍 ",
  "megacartiIntroTitle": "MegaCarti是用于微骨折术后的软骨修复辅助材料, 可保护血凝块、帮助细胞附着, 支持软骨再生。",
  "megacartiIntroFirst": "微骨折术是一种在受损软骨下方骨面制造微小骨孔, 促使骨髓中的干细胞和生长因子到达损伤部位, 从而促进软骨修复的治疗方法。其原理类似于利用人体自然愈合能力促进组织再生。但新形成的组织多为纤维软骨, 其强度和耐久性低于正常关节软骨中的透明软骨。",
  "megacartiIntroSecond": "为弥补上述局限, MegaCarti可作为微骨折术后的软骨组织补充材料使用。其所含的异体肋软骨颗粒富含II型胶原, 可保护血凝块, 并帮助骨髓来源细胞稳定停留于损伤部位, 从而辅助软骨再生。",
  "megacartiGalleryLabel": "MegaCarti手术过程图片",
  "megacartiSurgery1Alt": "确认软骨损伤部位的关节镜图像",
  "megacartiSurgery2Alt": "清理受损软骨部位后的关节镜图像",
  "megacartiSurgery3Alt": "实施微骨折术部位的关节镜图像",
  "megacartiSurgery4Alt": "在微骨折部位应用MegaCarti的关节镜图像",
  "cruciateTitle": "Cruciate Ligament Reconstruction (ACL/PCL)",
  "cruciateDescription": "尽可能保留残余韧带的精准解剖重建术",
  "cruciateHeroAlt": "兴K医院医疗团队正在进行交叉韧带关节镜手术",
  "cruciateToggleContext": "交叉韧带重建术详细介绍 ",
  "cruciateIntroFirst": "交叉韧带可限制膝关节过度前后移位, 并维持旋转稳定性。",
  "cruciateIntroSecond": "当交叉韧带断裂导致膝关节持续不稳定时, 可考虑进行重建术, 以恢复关节稳定性, 并降低半月板及关节软骨进一步受损的风险。",
  "cruciateProcessTitle": "交叉韧带重建术流程",
  "cruciateStep1Body": "确认撕裂情况并尽量保留残余韧带",
  "cruciateStep1": "STEP 1",
  "cruciateStep2Body": "准备移植物并精准建立骨隧道",
  "cruciateStep2": "STEP 2",
  "cruciateStep3Body": "植入移植物并进行牢固固定",
  "cruciateStep3": "STEP 3",
  "cruciateHospital": "兴K医院",
  "cruciateProcessBody": "在尽可能保留残余韧带组织的同时, 于精准位置建立较小的骨隧道, 并牢固固定适合患者情况的自体肌腱或同种异体肌腱, 重建受损的交叉韧带, 帮助恢复膝关节的稳定性与功能。",
  "cruciateAclTitle": "前交叉韧带重建术案例",
  "cruciateAclBeforeAlt": "前交叉韧带断裂 - 术前关节镜图像",
  "cruciateAclBefore": "前交叉韧带断裂 - 术前",
  "cruciateAclAfterAlt": "前交叉韧带重建后 - 术后关节镜图像",
  "cruciateAclAfter": "前交叉韧带重建后 - 术后",
  "cruciatePclTitle": "后交叉韧带重建术案例",
  "cruciatePclBeforeAlt": "后交叉韧带断裂 - 术前关节镜图像",
  "cruciatePclBefore": "后交叉韧带断裂 - 术前",
  "cruciatePclAfterAlt": "后交叉韧带重建后 - 术后关节镜图像",
  "cruciatePclAfter": "后交叉韧带重建后 - 术后",
  "cruciateBenefitsTitle": "交叉韧带重建术的特点",
  "cruciateBenefit1Title": "精准解剖重建",
  "cruciateBenefit1Body": "根据患者的解剖结构, 在准确位置建立骨隧道, 帮助恢复膝关节的稳定性与正常功能。",
  "cruciateBenefit2Title": "保留残余韧带",
  "cruciateBenefit2Body": "尽可能保留可保留的韧带组织, 有助于恢复膝关节本体感觉, 促进移植肌腱稳定愈合。",
  "cruciateBenefit3Title": "小切口关节镜手术",
  "cruciateBenefit3Body": "通过小切口观察关节内部并进行手术, 减少周围组织损伤及术后瘢痕。",
  "cruciateBenefit4Title": "同期重建前外侧韧带",
  "cruciateBenefit4Body": "对于旋转不稳定较严重或再次断裂风险较高的患者, 可在重建前交叉韧带的同时重建前外侧韧带, 进一步增强膝关节的旋转稳定性。",
  "cruciateBenefit5Title": "高难度交叉韧带翻修术",
  "cruciateBenefit5Body": "对于韧带再次断裂或术后持续存在关节不稳定的患者, 通过精准评估原有骨隧道及移植肌腱的状态, 制定个性化翻修手术方案。",
  "cruciateBenefit6Title": "具有国家队运动员诊疗经验的专业康复团队",
  "cruciateBenefit6Body": "凭借国家队运动员的诊疗经验, 根据患者情况开展分阶段康复训练, 帮助患者安全恢复日常活动并重返运动。"
};

// ── 20. 어깨전담센터 · 배너 ──
const shoulder = {
  "awardAlt": "肩关节专科中心贡献奖牌",
  "hospital": "兴K医院",
  "title": "肩关节专科中心",
  "description1": "从精准诊断、非手术治疗到高难度手术及术后康复, 提供全方位诊疗服务。",
  "description2": "专注肩关节疾病, 提供系统化诊疗服务。",
  "service1": "Rotator cuff tear and Tendinopathy",
  "service2": "Shoulder instability and recurrent dislocation",
  "service3": "Frozen shoulder (adhesive capsulitis)",
  "service4": "Shoulder impingement syndrome",
  "service5": "Calcific tendinitis of the shoulder",
  "service6": "Sports-related shoulder injuries",
  "aacAlt": "亚洲关节镜学会(AAC)标志",
  "kossmAlt": "韩国骨科运动医学会(KOSSM)标志",
  "affiliation": "Asia Arthroscopy Congress (AAC)\nMember of the Promotion & Finance Committee",
  "doctorAlt": "Dr. Su-Keon Lee"
};

// ── 21. 어깨전담센터 · 치료 상세 ──
const centerTreatmentsShoulder = {
  "rotatorListLabel": "肩关节专科中心治疗",
  "rotatorTitle": "Rotator Cuff Tear Surgery",
  "rotatorDescription": "借助关节镜及专用器械观察关节内部并治疗损伤",
  "rotatorHeroAlt": "兴K医院医疗团队正在进行关节镜下肩袖修复手术",
  "rotatorToggleContext": "肩袖撕裂手术详细介绍 ",
  "rotatorRepairTitle": "Arthroscopic Rotator Cuff Repair",
  "rotatorRepairBody1": "通过2-3个约5-7mm的小切口置入关节镜及专用器械, 直视关节内部, 同步完成损伤评估与治疗。",
  "rotatorRepairBody2": "由于手术切口较小, 有助于减轻术后疼痛, 减少瘢痕、出血及感染风险, 缩短术后恢复时间。",
  "rotatorCasesTitle": "兴K医院手术前后对比案例",
  "rotatorRepairBefore1Alt": "肩袖修复术前撕裂部位的关节镜图像",
  "rotatorRepairBefore2Alt": "肩袖修复术前肩关节MRI影像",
  "rotatorBefore": "术前",
  "rotatorRepairAfter1Alt": "肩袖修复术后缝合部位的关节镜图像",
  "rotatorRepairAfter2Alt": "肩袖修复术后肩关节MRI影像",
  "rotatorAfter": "术后",
  "rotatorPatchTitle": "Patch-Augmented Rotator Cuff Repair",
  "rotatorPatchAlt": "肩袖缝合部位补片增强示意图",
  "rotatorPatchLead": "通过补片增强薄弱的肩袖组织, 提高缝合部位的稳定性, 降低再次撕裂的风险。",
  "rotatorPatchBody1": "对于大范围肩袖撕裂或肌腱薄弱、单纯缝合难以稳定修复的患者, 可在关节镜缝合后使用人源异体真皮补片或胶原补片加固。",
  "rotatorPatchBody2": "补片可支撑薄弱肌腱、减轻缝合部位负担, 并辅助组织修复。可用于大范围肩袖撕裂、严重肌腱退变或再撕裂风险较高的患者。",
  "rotatorPatchBefore1Alt": "补片增强修复术前肩关节MRI影像",
  "rotatorPatchBefore2Alt": "补片增强修复术前肩袖关节镜图像",
  "rotatorPatchAfter1Alt": "补片增强修复术后肩关节MRI影像",
  "rotatorPatchAfter2Alt": "补片增强后的肩袖缝合部位关节镜图像",
  "rotatorPrpTitle": "Platelet-Rich Plasma (PRP) Therapy",
  "rotatorPrpLead": "通过补片增强薄弱的肩袖组织, 提高缝合部位的稳定性, 降低再次撕裂的风险。",
  "rotatorPrpBody1": "在肩袖修复术中采集患者自身血液, 分离出富血小板血浆(PRP), 并将其应用于肩袖缝合部位。",
  "rotatorPrpBody2": "PRP富含多种参与组织修复的生长因子, 有助于促进受损肌腱的修复及缝合部位愈合。根据患者的肩袖撕裂程度及肌腱状况, 可与补片增强修复术联合应用。",
  "rotatorPrpProcessTitle": "PRP制备流程",
  "rotatorPrp1Alt": "采集血液用于制备PRP",
  "rotatorPrpStep1": "STEP 1",
  "rotatorPrpStep1Body": "PRP制备流程",
  "rotatorPrp2Alt": "用于离心分离采集血液的设备",
  "rotatorPrpStep2": "STEP 2",
  "rotatorPrpStep2Body": "离心分离",
  "rotatorPrp3Alt": "从离心分离后的血液中提取PRP的过程",
  "rotatorPrpStep3": "STEP 3",
  "rotatorPrpStep3Body": "PRP提取",
  "rotatorPrp4Alt": "已完成制备、可用于手术的PRP",
  "rotatorPrpStep4": "STEP 4",
  "rotatorPrpStep4Body": "PRP制备完成",
  "arthroplastyTitle": "Shoulder Arthroplasty",
  "arthroplastyDescription": "当肩关节骨骼和软骨严重受损, 或肩袖功能下降导致关节无法正常活动时, 通过去除受损关节面并植入人工关节假体来恢复关节功能的手术",
  "arthroplastyHeroAlt": "兴K医院医疗团队正在进行肩关节置换手术",
  "arthroplastyToggleContext": "肩关节置换术详细介绍 ",
  "arthroplastyTsaTitle": "Total Shoulder Arthroplasty (TSA)",
  "arthroplastyTsaLead": "减轻疼痛, 助力肩关节自然活动!",
  "arthroplastyTsaBody1": "通过植入符合肩关节正常解剖结构的人工关节假体, 减轻关节面磨损或损伤引起的疼痛, 帮助恢复肩关节活动功能。",
  "arthroplastyTsaBody2": "主要适用于严重退行性关节炎或骨折造成的关节面重度损伤, 有助于缓解疼痛并恢复肩关节的基本功能。",
  "arthroplastyTsaCasesTitle": "解剖型全肩关节置换术",
  "arthroplastyTsaBeforeAlt": "解剖型全肩关节置换术前肩关节X线片",
  "arthroplastyBefore": "术前",
  "arthroplastyTsaAfterAlt": "解剖型全肩关节置换术后肩关节X线片",
  "arthroplastyAfter": "术后",
  "arthroplastyRsaTitle": "Reverse Shoulder Arthroplasty (RSA)",
  "arthroplastyRsaLead": "利用三角肌的力量代偿受损肩袖功能, 帮助恢复肩关节活动能力的人工关节置换术。",
  "arthroplastyRsaBody1": "通过植入球窝位置与正常肩关节相反的人工关节假体, 利用三角肌代偿受损肩袖的功能, 帮助患者抬起手臂。",
  "arthroplastyRsaBody2": "反向肩关节置换术是目前常用的肩关节置换方式之一, 适用于关节镜治疗难以恢复功能、严重肩袖撕裂导致肩关节功能明显丧失的患者, 尤其适用于无法主动抬臂的假性瘫痪患者。对于符合适应证的患者, 有助于改善肩关节活动范围和上肢功能。",
  "arthroplastyRsaCasesTitle": "兴K医院手术前后对比案例",
  "arthroplastyRsaBeforeAlt": "反向肩关节置换术前肩关节X线片",
  "arthroplastyRsaAfterAlt": "反向肩关节置换术后肩关节X线片"
};

// ── 22. 손발전담센터 · 배너 ──
const handFoot = {
  "hospital": "兴K医院",
  "title": "手足专科中心",
  "description1": "从精准诊断、非手术治疗到高难度手术及术后康复, 提供全方位诊疗服务。",
  "description2": "依托专业化的手足部疾病诊疗体系, 不断提升诊疗质量。",
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
  "arthroscopyListLabel": "手足专科中心治疗",
  "micaTitle": "Minimally Invasive Hallux Valgus Surgery (MICA)",
  "micaDescription": "通过微小切口精准矫正足部畸形的拇外翻手术。",
  "micaHeroAlt": "兴K医院医疗团队正在进行微创拇外翻矫正手术",
  "micaToggleContext": "MICA微创拇外翻矫正术详细介绍 ",
  "micaLead": "通过2-3mm的微小切口精准矫正足部骨骼畸形, 有助于减轻术后疼痛, 促进康复。",
  "micaBody1": "MICA是一种微创拇外翻矫正术。在局部麻醉下, 通过约3-5个2-3mm的小切口, 在实时X线透视引导下使用专用器械精准截骨, 并矫正骨骼排列。",
  "micaBody2": "随后去除部分突出的骨组织, 并使用专用螺钉牢固固定。",
  "micaStepsHeading": "MICA手术流程",
  "micaStep1": "通过微小切口进入需要矫正的部位",
  "micaStep2": "在C形臂X线机实时透视引导下精准截骨",
  "micaStep3": "调整截骨后的骨骼至正确排列位置",
  "micaStep4": "去除部分突出的骨组织",
  "micaStep5": "使用专用螺钉牢固固定截骨部位",
  "micaComparisonHeading": "与传统开放手术的对比",
  "micaOpenHeading": "传统开放手术",
  "micaMicaHeading": "MICA手术",
  "micaOpenAlt": "传统开放手术足部切口位置示意图",
  "micaPhotosLabel": "对比图片",
  "micaMicaAlt": "MICA手术足部微小切口位置示意图",
  "micaCompare1Open": "平均切口长度约4-10cm",
  "micaCompare1Label": "切口大小",
  "micaCompare1Mica": "通过约2mm的微小切口进行微创手术",
  "micaCompare2Open": "约需40-50分钟",
  "micaCompare2Label": "手术时间",
  "micaCompare2Mica": "15-20分钟以内",
  "micaCompare3Open": "术中出血及不良反应",
  "micaCompare3Label": "出血及不良反应",
  "micaCompare3Mica": "尽量减少术中出血及不良反应",
  "micaCompare4Open": "术后疼痛",
  "micaCompare4Label": "疼痛",
  "micaCompare4Mica": "尽量减轻术后疼痛",
  "micaCompare5Open": "术后形成瘢痕",
  "micaCompare5Label": "术后瘢痕",
  "micaCompare5Mica": "术后瘢痕相对不明显",
  "micaCasesHeading": "MICA手术前后对比",
  "micaBeforeXrayAlt": "MICA术前拇外翻X线片及红色骨骼排列参考线",
  "micaBefore": "术前",
  "micaAfterXrayAlt": "MICA术后足部矫正X线片及薄荷绿色骨骼排列参考线",
  "micaAfter": "术后",
  "micaBeforePhotoAlt": "MICA术前双足X线片及红色骨骼排列参考线",
  "micaAfterPhotoAlt": "MICA术后双足X线片及薄荷绿色骨骼排列参考线",
  "arthroscopyTitle": "Wrist & Ankle Arthroscopy",
  "arthroscopyDescription": "通过微小切口直接观察腕关节及踝关节内部, 精准诊断并治疗细微病变的关节镜手术。",
  "arthroscopyHeroAlt": "兴K医院医疗团队正在进行腕关节及踝关节镜手术",
  "arthroscopyToggleContext": "腕关节及踝关节镜手术详细介绍 ",
  "arthroscopyWristAlt": "腕关节镜检查关节内部的示意图",
  "arthroscopyWristLead": "腕关节镜手术是一种能够直接观察腕关节内部, 并同时进行诊断和治疗的微创手术。",
  "arthroscopyWristBody1": "过去通常需要较大切口才能检查或治疗损伤部位, 如今可通过约5mm至1cm的小切口置入关节镜, 借助高清影像实时观察关节内部结构并进行手术。",
  "arthroscopyWristBody2": "通过关节镜可在精准诊断的同时, 治疗韧带、软骨及三角纤维软骨复合体(TFCC)等组织损伤。",
  "arthroscopyWristIndicationsPrefix": "哪些情况下需要 ",
  "arthroscopyWristIndicationsEmphasis": "腕关节镜",
  "arthroscopyWristIndicationsSuffix": "检查或治疗?",
  "arthroscopyWrist1Title": "三角纤维软骨复合体(TFCC)损伤",
  "arthroscopyWrist1Body": "支撑手腕小指侧的组织受损, 导致疼痛或活动不适。",
  "arthroscopyWrist2Title": "腕关节韧带撕裂及不稳定",
  "arthroscopyWrist2Body": "稳定腕关节的韧带受损, 导致疼痛、关节松动或不稳定。",
  "arthroscopyWrist3Title": "早期腕关节炎",
  "arthroscopyWrist3Body": "腕关节软骨开始磨损, 出现疼痛、僵硬及活动受限等症状。",
  "arthroscopyWrist4Title": "关节内游离体清除",
  "arthroscopyWrist4Body": "清除腕关节内的骨或软骨碎片, 缓解由此引起的疼痛和关节卡顿。",
  "arthroscopyWrist5Title": "原因不明的慢性腕关节疼痛",
  "arthroscopyWrist5Body": "对持续存在但难以明确病因的腕关节疼痛进行检查, 查找病因并改善症状。",
  "arthroscopyAnkleAlt": "踝关节镜检查关节内部的示意图",
  "arthroscopyAnkleLead": "通过踝部微小切口置入关节镜, 直接观察并治疗踝关节内部病变的微创手术。",
  "arthroscopyAnkleBody1": "踝关节镜手术通过小于1cm的切口置入关节镜及专用手术器械, 对关节病变进行诊断和治疗。",
  "arthroscopyAnkleBody2": "由于踝关节结构比膝关节和肩关节更小, 对操作精度要求更高, 因此采用直径2.5mm的小关节专用关节镜进行治疗。",
  "arthroscopyAnkleIndicationsPrefix": "哪些情况下需要 ",
  "arthroscopyAnkleIndicationsEmphasis": "踝关节镜",
  "arthroscopyAnkleIndicationsSuffix": "检查或治疗?",
  "arthroscopyAnkle1Title": "踝关节扭伤后持续慢性疼痛",
  "arthroscopyAnkle1Body": "对踝关节扭伤后长期存在的疼痛或不适, 检查关节内部是否受损并进行相应治疗。",
  "arthroscopyAnkle2Title": "软骨损伤及剥脱性骨软骨炎(OCD)",
  "arthroscopyAnkle2Body": "检查并治疗踝关节软骨及骨组织损伤引起的疼痛和活动受限。",
  "arthroscopyAnkle3Title": "关节内游离体",
  "arthroscopyAnkle3Body": "清除关节内引起疼痛或关节卡顿的骨或软骨碎片。",
  "arthroscopyAnkle4Title": "踝关节撞击综合征",
  "arthroscopyAnkle4Body": "检查并治疗踝关节活动时因周围组织或骨骼相互撞击引起的疼痛。",
  "arthroscopyAnkle5Title": "辅助诊断踝关节不稳定",
  "arthroscopyAnkle5Body": "对经常扭伤或感觉不稳的踝关节进行关节镜检查, 帮助查明关节不稳定的原因。",
  "arthroscopyBenefitsHeadingEmphasis": "兴K医院",
  "arthroscopyBenefitsHeadingSuffix": "的腕关节及踝关节镜治疗有何不同?",
  "arthroscopyBenefits1Title": "精准诊断与治疗",
  "arthroscopyBenefits1Body": "可直接观察并治疗MRI或X线等影像检查难以发现的细微韧带及软骨损伤。",
  "arthroscopyBenefits2Title": "保护关节功能",
  "arthroscopyBenefits2Body": "尽可能保留正常组织, 仅针对病变部位进行治疗。",
  "arthroscopyBenefits3Title": "小切口, 尽量减轻疼痛与瘢痕",
  "arthroscopyBenefits3Body": "采用约0.5-1cm的小切口, 有助于减少皮肤瘢痕及周围组织损伤, 减轻术后疼痛和出血。",
  "arthroscopyBenefits4Title": "降低术后并发症风险",
  "arthroscopyBenefits4Body": "通过精准操作减少不必要的组织损伤, 有助于降低感染、炎症等术后并发症风险, 促进术后安全康复。",
  "arthroscopyBenefits5Title": "有助于加快康复, 早日恢复日常生活",
  "arthroscopyBenefits5Body": "手术时间较短, 术后恢复较快, 有助于患者早日恢复日常生活。"
};

// ── 24. 척추전담센터 · 배너 ──
const spine = {
  "hospital": "兴K医院",
  "title": "脊柱专科中心",
  "description1": "从精准诊断、非手术治疗到高难度手术及术后康复, 提供全方位诊疗服务。",
  "description2": "依托专业化的脊柱疾病诊疗体系, 不断提升诊疗质量。",
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
  "bessListLabel": "脊柱专科中心治疗",
  "bessTitle": "Biportal Endoscopic Spine Surgery (BESS)",
  "bessDescription": "借助放大的内镜视野, 精准清除压迫神经的病变组织。",
  "bessHeroAlt": "在内镜影像引导下进行的双通道脊柱内镜手术",
  "bessToggleContext": "BESS双通道脊柱内镜手术详细介绍 ",
  "bessLead": "通过两个小切口获得清晰视野, 精准处理脊柱病变的微创手术。",
  "bessBody1": "双通道脊柱内镜手术(BESS)通过两个小切口分别置入内镜和手术器械, 清除压迫神经的病变组织, 是一种微创脊柱手术。",
  "bessBody2": "内镜与手术器械可独立操作, 在获得清晰、放大视野的同时实现精细的手术操作。",
  "bessIntroAlt": "标注9mm和7mm切口尺寸的BESS术后照片",
  "bessBenefitsHeading": "BESS的优势",
  "bessBenefit1Title": "微创手术",
  "bessBenefit1Body": "通过约0.7cm的小切口进行手术, 有助于减少肌肉损伤、疼痛及术后炎症风险。",
  "bessBenefit2Title": "精准诊断与治疗",
  "bessBenefit2Body": "借助高清内镜摄像系统精细观察脊柱内部情况, 实现精准诊断与治疗。",
  "bessBenefit3Title": "降低并发症风险",
  "bessBenefit3Body": "在尽可能保护周围正常组织的同时精准处理病变部位, 有助于降低术后并发症风险。",
  "bessBenefit4Title": "加快康复, 早日恢复日常生活",
  "bessBenefit4Body": "通过尽量减少组织损伤, 有助于加快术后康复, 促进患者顺利恢复日常生活。",
  "bessCasesHeading": "BESS手术前后对比",
  "bessBefore1Alt": "BESS术前神经受压部位的MRI影像",
  "bessBefore": "术前",
  "bessAfter1Alt": "标注神经减压部位的BESS术后MRI影像",
  "bessAfter": "术后",
  "bessBefore2Alt": "BESS术前病变部位的内镜图像",
  "bessAfter2Alt": "BESS术后治疗部位的内镜图像",
  "fusionTitle": "Minimally Invasive Spinal Fusion",
  "fusionDescription": "通过小切口同时进行神经减压与脊柱固定的微创脊柱手术。",
  "fusionHeroAlt": "兴K医院医疗团队正在进行微创脊柱融合术",
  "fusionToggleContext": "微创脊柱融合术详细介绍 ",
  "fusionLead": "通过椎间融合器和固定螺钉稳定脊柱的微创融合术。",
  "fusionBody1": "在腰部建立4个微小切口, 清除造成疼痛和神经压迫的受损骨组织及韧带组织, 并切除病变椎间盘。随后植入椎间融合器提供支撑, 并使用椎弓根螺钉固定椎骨, 以维持脊柱稳定。",
  "fusionBody2": "与传统开放式脊柱融合术相比, 该手术能够减少切口范围及周围组织损伤。适用于腰椎滑脱症、伴有脊柱不稳定的严重椎管狭窄, 以及单纯减压术难以维持脊柱稳定的患者。",
  "fusionIntroAlt": "支撑椎骨的椎间融合器与固定螺钉结构示意图",
  "fusionBenefitsHeading": "双通道内镜脊柱融合术的优势",
  "fusionBenefit1Body": "使用手术显微镜、脊柱内镜等精密器械, 实现高精度手术操作",
  "fusionBenefit2Body": "与传统手术相比, 组织损伤更小, 复发风险极低",
  "fusionBenefit3Body": "住院及康复治疗时间较短, 有助于早日恢复日常生活",
  "fusionBenefit4Body": "与传统手术相比, 手术视野更清晰, 便于精细处理病变部位",
  "fusionComparisonHeading": "与传统螺钉固定手术的对比",
  "fusionOpenHeading": "传统螺钉固定手术",
  "fusionFusionHeading": "双通道内镜脊柱融合术",
  "fusionCompare1Open": "20cm",
  "fusionCompare1Label": "切口大小",
  "fusionCompare1Fusion": "2~3cm",
  "fusionCompare2Open": "可能造成肌肉及韧带组织永久性损伤",
  "fusionCompare2Label": "肌肉损伤",
  "fusionCompare2Fusion": "尽量减少肌肉损伤",
  "fusionCompare3Open": "皮肤切口较大, 感染及并发症发生风险较高",
  "fusionCompare3Label": "不良反应",
  "fusionCompare3Fusion": "感染及其他并发症发生风险显著降低",
  "fusionCompare4Open": "术后疼痛较明显, 需要使用较多止痛药物",
  "fusionCompare4Label": "疼痛",
  "fusionCompare4Fusion": "术后疼痛较轻, 止痛药等药物的使用时间较短",
  "fusionCompare5Open": "术中失血较多, 可能需要输血",
  "fusionCompare5Label": "出血",
  "fusionCompare5Fusion": "手术创伤较小, 失血量较少",
  "fusionCompare6Open": "出院后需进行约1年的康复治疗, 恢复日常生活较慢",
  "fusionCompare6Label": "恢复时间",
  "fusionCompare6Fusion": "术后6个月可进行较为积极的运动",
  "fusionCompare7Open": "4小时",
  "fusionCompare7Label": "手术时间",
  "fusionCompare7Fusion": "2-3小时",
  "fusionCasesHeading": "双通道内镜脊柱融合术治疗案例",
  "fusionBefore1Alt": "脊柱融合术前腰椎侧位X线片",
  "fusionBefore": "术前",
  "fusionAfter1Alt": "显示内固定器械的脊柱融合术后腰椎侧位X线片",
  "fusionAfter": "术后",
  "fusionBefore2Alt": "脊柱融合术前腰椎正位X线片",
  "fusionAfter2Alt": "显示内固定器械的脊柱融合术后腰椎正位X线片"
};

// ── 26. 의료진 상세 소개 ──
const doctors = {
  "kicker": "OUR DOCTORS",
  "galleryLabel": "兴K医院医疗团队诊疗与科研活动现场",
  "row1Label": "医疗团队照片上排",
  "photo01Alt": "专注于手术的兴K医院医疗团队",
  "photo02Alt": "医疗团队通过关节镜影像进行手术",
  "photo03Alt": "在手术室交流意见的医疗团队",
  "photo04Alt": "共同评估患者膝关节状况的医疗团队",
  "photo05Alt": "手术中协同配合的兴K医院医疗团队",
  "photo06Alt": "在诊室为患者提供诊疗咨询的医护人员",
  "photo07Alt": "向患者讲解检查影像的医护人员",
  "row2Label": "医疗团队照片下排",
  "photo08Alt": "检查手术部位的医疗团队",
  "photo09Alt": "正在进行术前准备的兴K医院医疗团队",
  "photo10Alt": "正在进行医学授课的医疗人员",
  "photo11Alt": "正在进行内镜手术的医疗团队",
  "photo12Alt": "在手术室专注工作的医疗团队",
  "photo13Alt": "参加手术培训的医疗人员",
  "photo14Alt": "手术现场的兴K医院医疗团队",
  "pause": "暂停图片滚动",
  "resume": "继续图片滚动",
  "hospital": "兴K医院",
  "title": "医疗团队介绍",
  "carouselLabel": "兴K医院医疗团队介绍幻灯片",
  "profiles": [
    {
      "slideLabel": "Jong-Keun Kim代表院长介绍",
      "portraitAlt": "Jong-Keun Kim代表院长",
      "specialty": "骨科专科医生",
      "name": "Jong-Keun Kim",
      "role": "代表院长",
      "specialties": "膝关节(微创关节置换术 / 个性化PSI手术 / 关节镜手术)、人工关节翻修术、干细胞治疗、软骨细胞移植、髋关节(人工关节置换术 / 关节镜手术)、运动损伤、足部疾病",
      "careers": [
        [
          "首尔大学医学院博士",
          "首尔大学医学院硕士",
          "延世大学医学院学士",
          "首尔大学医院骨科临床顾问",
          "首尔大学医学院骨科外聘教授",
          "首尔大学医学院骨科临床讲师",
          "韩国电力附属韩一医院骨科主任",
          "嘉泉大学吉医院骨科专科医生"
        ],
        [
          "受邀参加美国纽约HSS(Hospital for Special Surgery)学术访问项目(AVP), 接受专业研修(Manhattan, New York, USA)",
          "美国纽约康奈尔大学(Cornell University)访问学者(Visiting Scholar)研修(Manhattan, New York, USA)",
          "美国Stryker Center机器人辅助关节置换术专业研修(Mahwah, New Jersey, USA)",
          "亚太地区Advanced Attune Course专业培训(Bangkok, Thailand)",
          "AO trauma Principle course certification"
        ]
      ]
    },
    {
      "slideLabel": "Dr. Su-Keon Lee个人简介",
      "portraitAlt": "Dr. Su-Keon Lee",
      "specialty": "骨科专科医生",
      "name": "Su-Keon Lee",
      "role": "院长",
      "specialties": "肩关节(关节镜手术 / 人工关节置换术)、肘关节疾病、运动损伤、肩部骨折",
      "careers": [
        [
          "延世大学医学院博士",
          "延世大学医学院硕士",
          "延世大学医学院学士",
          "延世大学医学院外聘教授",
          "光明圣爱医院骨科首席主任",
          "关东医科大学教授",
          "韩国骨科学会学会史委员会委员",
          "韩国骨科学会地方分会理事"
        ],
        [
          "韩国特种作战司令部医疗连连长",
          "延世大学医学院新村Severance医院临床讲师",
          "延世大学医学院新村Severance医院住院医师、实习医师",
          "新村Severance医院JCI首次认证评审英语翻译专职医师"
        ]
      ]
    },
    {
      "slideLabel": "Myung Chul Lee名誉院长介绍",
      "portraitAlt": "Dr. Myung Chul Lee, 名誉院长",
      "specialty": "内科及核医学科专科医生",
      "name": "Myung Chul Lee",
      "role": "名誉院长",
      "careers": [
        [
          "首尔大学医学院名誉教授",
          "首尔大学医院院史研究室主任",
          "首尔大学发展基金会副理事长",
          "首尔大学医学院教务副院长",
          "首尔大学医学院核医学教研室教授、主任教授",
          "嘉泉大学吉医院院长(医学校区副校长)",
          "韩国国军首都医院院长",
          "韩国科学技术翰林院院长、国家科学技术咨询会议副议长",
          "终身会员：韩国科学技术翰林院、韩国医学翰林院",
          "韩国放射线振兴协会会长",
          "(现任)韩国巴斯德研究所理事长"
        ],
        [
          "2024年入选大韩医学会名人堂",
          "荣获韩国科学技术勋章创造章(一级)",
          "世界核医学会会长",
          "世界同位素组织会长",
          "美国约翰斯·霍普金斯大学医学院研究员",
          "毕业于首尔大学医学院",
          "首尔大学医学院内科学博士",
          "内科及核医学科专科医生"
        ]
      ]
    },
    {
      "slideLabel": "Dr. Joon Young Lee个人简介",
      "portraitAlt": "Dr. Joon Young Lee",
      "specialty": "骨科专科医生",
      "name": "Joon Young Lee",
      "role": "院长",
      "specialties": "膝关节(微创关节置换术 / 个性化PSI手术 / 关节镜手术)、运动损伤(交叉韧带撕裂)、髋关节置换术、干细胞治疗、足部疾病",
      "careers": [
        [
          "首尔大学医学院硕士",
          "首尔大学医院骨科外聘教授",
          "首尔大学医院骨科临床顾问",
          "首尔大学医院骨科临床讲师",
          "首尔大学医院骨科住院医师",
          "首尔大学医院优秀实习医师",
          "韩国空军第11及第16战斗机联队航空医疗诊疗室主任",
          "中央大学医学院学士"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Sehun Kim个人简介",
      "portraitAlt": "Dr. Sehun Kim",
      "specialty": "骨科专科医生",
      "name": "Sehun Kim",
      "role": "院长",
      "specialties": "手足部疾病、手足部显微外科手术、生长发育门诊",
      "careers": [
        [
          "三星首尔医院骨科专科医生",
          "三星首尔医院实习医师",
          "庆北大学医学专门研究生院硕士",
          "首尔大学波拉梅医院骨科临床教授(手足外科、儿童骨科)",
          "首尔大学医院骨科专任讲师",
          "韩国电力附属韩一医院科室主任"
        ],
        []
      ]
    },
    {
      "slideLabel": "Nam Ik Cho中心主任介绍",
      "portraitAlt": "Nam Ik Cho中心主任",
      "specialty": "脊柱外科专科医生",
      "name": "Nam Ik Cho",
      "role": "中心主任",
      "specialties": "脊柱内镜治疗、颈椎人工椎间盘置换术、高难度脊柱翻修术、微创脊柱融合术、骨质疏松性骨折、非手术注射治疗、颈椎及腰椎间盘疾病、椎管狭窄症、脊椎滑脱症、脊柱创伤性骨折、脊柱侧弯",
      "careers": [
        [
          "毕业于高丽大学医学院",
          "高丽大学医学院附属医院实习医师",
          "盆唐济生医院骨科专科医生",
          "首尔峨山医院骨科脊柱专科进修医师",
          "首尔峨山医院骨科脊柱侧弯中心专科进修医师",
          "首尔峨山医院骨科外聘教授",
          "曾任JUST医院代表院长",
          "曾任坪村我们医院脊柱中心主任",
          "曾任延世Baro Cheok医院脊柱中心主任"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Sang Hoon Yoon个人简介",
      "portraitAlt": "Dr. Sang Hoon Yoon",
      "specialty": "神经外科专科医生",
      "name": "Sang Hoon Yoon",
      "role": "院长",
      "specialties": "脊柱疾病(颈椎 / 胸椎 / 腰椎)、脑神经疾病、非手术注射治疗及介入治疗、脊柱肿瘤、微创脊柱手术、脊柱疾病相关步行功能问题、肥胖治疗",
      "careers": [
        [
          "首尔大学医学博士",
          "首尔大学医学硕士",
          "首尔大学医院神经外科住院医师",
          "盆唐首尔大学医院神经外科及脊柱中心教授",
          "韩国国军首都医院神经外科主任",
          "韩国国军首都医院临床医学研究中心主任"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Seung Jin Jung个人简介",
      "portraitAlt": "Dr. Seung Jin Jung",
      "specialty": "全科医学科专科医生",
      "name": "Seung Jin Jung",
      "role": "院长",
      "specialties": "消化内科、胃肠镜检查、肥胖专科门诊、慢性疾病管理、消化系统超声检查",
      "careers": [
        [
          "高丽大学医学院博士",
          "高丽大学医学院硕士",
          "高丽大学医学院学士",
          "高丽大学医学院外聘教授",
          "高丽大学九老医院住院医师",
          "金浦我们医院健康促进中心主任"
        ],
        [
          "金浦我们医院教学培训部主任",
          "金浦我们医院家庭医学科主任",
          "清州Hana医院家庭医学科主任",
          "三育首尔医院家庭医学科主任"
        ]
      ]
    },
    {
      "slideLabel": "Dr. Gyeong Hwa Lee个人简介",
      "portraitAlt": "Dr. Gyeong Hwa Lee",
      "specialty": "内科专科医生",
      "name": "Gyeong Hwa Lee",
      "role": "院长",
      "specialties": "消化内科、胃肠镜检查、慢性疾病管理",
      "careers": [
        [
          "完成国民健康保险公团一山医院消化内科专科进修",
          "毕业于嘉泉大学医学专门研究生院",
          "完成嘉泉大学吉医院实习医师及住院医师培训",
          "消化内镜专科认证医师"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Jin-Hyoung Park个人简介",
      "portraitAlt": "Dr. Jin-Hyoung Park",
      "specialty": "麻醉与疼痛医学科专科医生",
      "name": "Jin-Hyoung Park",
      "role": "院长",
      "specialties": "高难度区域麻醉、老年患者麻醉、慢性疾病患者麻醉",
      "careers": [
        [
          "首尔大学医学院外聘教授",
          "首尔大学医学院盆唐首尔大学医院临床助理教授",
          "三星首尔医院临床讲师",
          "三星首尔医院住院医师、实习医师",
          "成均馆大学医学院硕士",
          "建阳大学医学院学士"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Junsung Kim个人简介",
      "portraitAlt": "Dr. Junsung Kim",
      "specialty": "放射科专科医生",
      "name": "Junsung Kim",
      "role": "院长",
      "specialties": "MRI及CT专业影像诊断、超声心动图(Echo)、超声检查(肌肉骨骼系统 / 腹部 / 甲状腺 / 头颈部 / 乳腺 / 胸部)",
      "careers": [
        [
          "首尔峨山医院放射科临床讲师",
          "江北三星医院放射科临床助理教授",
          "天主教大学医学院博士课程修毕",
          "天主教大学医学院硕士课程修毕",
          "天主教大学医学院学士",
          "韩国国军杨州医院放射科主任",
          "天主教大学首尔圣母医院放射科住院医师",
          "天主教中央医疗院实习医师"
        ],
        []
      ]
    }
  ],
  "openDetails": "查看医生详细介绍",
  "specialtiesHeading": "主要诊疗领域",
  "careerHeading": "教育背景及工作经历",
  "previous": "上一位医生",
  "next": "下一位医生",
  "slidePause": "暂停医生介绍自动轮播",
  "slideResume": "继续医生介绍自动轮播",
  "dialogLabel": "医生详细介绍",
  "closeDetails": "关闭医生详细介绍",
  "specialty": "骨科专科医生",
  "name": "Jong-Keun Kim",
  "role": "代表院长",
  "portraitAlt": "Jong-Keun Kim代表院长",
  "specialties": "膝关节(微创关节置换术 / 个性化PSI手术 / 关节镜手术)、人工关节翻修术、干细胞治疗、软骨细胞移植、髋关节(人工关节置换术 / 关节镜手术)、运动损伤、足部疾病",
  "career01": "首尔大学医学院博士",
  "career02": "首尔大学医学院硕士",
  "career03": "延世大学医学院学士",
  "career04": "首尔大学医院骨科临床顾问",
  "career05": "首尔大学医学院骨科外聘教授",
  "career06": "首尔大学医学院骨科临床讲师",
  "career07": "韩国电力附属韩一医院骨科主任",
  "career08": "嘉泉大学吉医院骨科专科医生",
  "career09": "受邀参加美国纽约HSS(Hospital for Special Surgery)学术访问项目(AVP), 接受专业研修(Manhattan, New York, USA)",
  "career10": "美国纽约康奈尔大学(Cornell University)访问学者(Visiting Scholar)研修(Manhattan, New York, USA)",
  "career11": "美国Stryker Center机器人辅助关节置换术专业研修(Mahwah, New Jersey, USA)",
  "career12": "亚太地区Advanced Attune Course专业培训(Bangkok, Thailand)",
  "career13": "AO trauma Principle course certification"
};

// ── 27. 흥K병원 둘러보기 ──
const facilities = {
  "kicker": "FACILITIES",
  "title": "兴K医院设施导览",
  "description": "始终坚持以患者为中心,\n不仅关注治疗效果, 更致力于帮助患者恢复健康的日常生活。",
  "floorsLabel": "选择楼层设施",
  "floors": {
    "5": {
      "description": "关节与脊柱中心、医学影像中心(X-ray、MRI-1、CT)、康复与手法治疗中心",
      "heading": "5F - 关节与脊柱中心",
      "label": "5楼"
    },
    "6": {
      "description": "内科中心、健康体检中心、中央手术中心、生长发育门诊中心、内镜中心",
      "heading": "6F - 中央手术中心",
      "label": "6楼"
    },
    "7": {
      "description": "住院病区",
      "heading": "7F - 住院病区",
      "label": "7楼"
    },
    "8": {
      "description": "住院病区、MRI-2、检验医学中心、大会议室、行政办公室",
      "heading": "8F - 住院病区",
      "label": "8楼"
    },
    "9": {
      "description": "屋顶花园",
      "heading": "9F - 屋顶花园",
      "label": "9楼"
    }
  },
  "previous": "上一组照片",
  "thumbnails": "照片列表",
  "next": "下一组照片",
  "pending": "照片准备中"
};

// ── 28. 흥K 360 SERVICE ──
const service360 = {
  "allInOne": "All-in-One",
  "wordmarkAlt": "360°全方位医疗服务",
  "titleStart": "从入境、治疗到回国,",
  "titleJoin": " 全程贴心陪伴的 ",
  "titleBrand": "兴K医院",
  "introStart": "为了让海外来韩患者及居住在韩国的外籍患者享受更加便捷、舒适的医疗服务, 兴K医院推出 ",
  "introEmphasis": "All-in-One 360°全方位医疗服务体系",
  "introEnd": ", 为患者提供一站式医疗支持。",
  "distance": "距仁川国际机场仅25分钟!",
  "overviewTitle": "兴K医院面向国际患者的 ",
  "overviewEmphasis": "360°全方位医疗服务",
  "overviewDescription": "提供咨询预约、检查治疗、翻译、住宿与交通协助及术后康复管理等一站式支持, 减轻国际患者的就医负担。",
  "step1Alt": "在线预约及日程安排示意图",
  "step1": "在线预约及日程安排",
  "step2Alt": "机场接送服务示意图",
  "step2": "机场接机",
  "step3Alt": "挂号及检查流程示意图",
  "step3": "挂号及检查",
  "step4Alt": "诊疗流程示意图",
  "step4": "诊疗",
  "step5Alt": "手术流程示意图",
  "step5": "手术",
  "step6Alt": "康复流程示意图",
  "step6": "康复",
  "step7Alt": "回国流程示意图",
  "step7": "回国",
  "hotelCost": "酒店住宿费用需自行承担。",
  "pickupHeading": "AIRPORT PICKUP SERVICE",
  "pickupTitle": "从机场到医院, 轻松便捷",
  "pickupDescription": "为方便患者及陪同家属前来就诊,\n兴K医院提供仁川国际机场接机服务。",
  "advanceReservation": "ADVANCE RESERVATION REQUIRED",
  "pickupAlt": "从机场乘车前往医院的患者及陪同家属",
  "accommodationHeading": "ACCOMMODATION",
  "accommodationTitle": "就医住宿指南",
  "accommodationDescription": "兴K医院提供医院周边及始兴、仁川地区的酒店信息与预订协助, 方便海外患者及家属入住。",
  "reservation": "RESERVATION",
  "hotelListLabel": "推荐酒店列表 - 请左右滑动查看",
  "hotel1Alt": "Paradise City酒店",
  "hotel2Alt": "仁川喜来登大酒店",
  "hotel3Alt": "Wave M Hotel East",
  "hotel4Alt": "Le Collective Siheung Wavepark",
  "hotel5Alt": "INSPIRE度假村卡片设计示意图",
  "pauseHotels": "暂停酒店列表自动轮播",
  "playHotels": "继续酒店列表自动轮播"
};

// ── 29. 진료 예약 ──
const reservation = {
  "kicker": "RESERVATION",
  "title": "预约就诊",
  "description": "请按照护照上的信息填写患者资料。",
  "painLegend": "选择疼痛部位",
  "painTitle": "您的疼痛部位在哪里?",
  "kneeAlt": "膝关节疼痛部位示意图",
  "knee": "膝关节",
  "shoulderAlt": "肩关节疼痛部位示意图",
  "shoulder": "肩关节",
  "handAlt": "手部及肘部疼痛部位示意图",
  "hand": "手部及肘部",
  "footAlt": "足部及踝部疼痛部位示意图",
  "foot": "足部及踝部",
  "spineAlt": "腰部疼痛部位示意图",
  "spine": "腰部",
  "patientLegend": "患者信息",
  "patientTitle": "请填写患者信息",
  "givenName": "名",
  "familyName": "姓",
  "birthday": "出生日期",
  "gender": "性别",
  "symptoms": "症状",
  "nationality": "国籍",
  "email": "电子邮箱",
  "phone": "联系电话",
  "appointmentDate": "期望就诊日期",
  "insurance": "医疗保险",
  "insuranceYes": "有",
  "insuranceNational": "韩国国民健康保险",
  "insuranceInternational": "国际医疗保险",
  "insuranceNone": "无",
  "otherInsurance": "其他保险",
  "consent": "我同意个人信息的收集与使用。",
  "submit": "提交预约申请",
  "unavailable": "在线预约服务正在筹备中, 请直接联系医院咨询。"
};

// ── 30. 진료 예약 · 성별/국적 선택 항목 ──
const reviewOptions = {
  "genderChoose": "请选择",
  "male": "男性",
  "female": "女性",
  "unspecified": "不愿透露",
  "nationalityChoose": "请选择",
  "korea": "韩国",
  "usa": "美国",
  "uk": "英国",
  "china": "中国",
  "japan": "日本",
  "russia": "俄罗斯",
  "mongolia": "蒙古",
  "india": "印度",
  "saudi": "沙特阿拉伯",
  "vietnam": "越南",
  "other": "其他"
};

// ── 31. 고객문의센터 · 지도 ──
const customerCenter = {
  "kicker": "CS CENTER",
  "title": "客户咨询中心",
  "description": "兴K医院客户服务中心提供诊疗、预约、住院及治疗相关咨询。\n我们将根据患者需求, 提供及时、细致的服务。",
  "hours": "门诊时间",
  "closed": "周日及法定节假日休诊",
  "day0": "周一至周五",
  "day1": "工作日晚间门诊",
  "day2": "周六",
  "day3": "午休时间",
  "address": "韩国京畿道始兴市能谷繁荣路22号5-8楼 兴K医院",
  "copyAddress": "复制医院地址",
  "mapTitle": "兴K医院Google地图位置",
  "phone": "咨询电话",
  "copyPhone": "复制咨询电话",
  "fax": "传真",
  "copyFax": "复制传真号码",
  "email": "电子邮箱",
  "copyEmail": "复制电子邮箱地址",
  "copyDone": "已复制。",
  "copyFailed": "请长按或选中需要复制的内容进行复制。",
  "openMap": "在Google地图中查看"
};

// ── 32. 오시는 길 · 푸터 ──
const contact = {
  "kicker": "CONTACT",
  "title": "交通指南",
  "incheonAlt": "仁川国际机场外景",
  "incheon": "仁川国际机场",
  "incheonTime": "25分钟",
  "carLabel": "自驾或乘坐出租车",
  "carDescription": "在导航中搜索'兴K医院'或输入以下地址",
  "address": "韩国京畿道始兴市能谷繁荣路22号",
  "subwayLabel": "乘坐地铁",
  "incheonRail": "从仁川机场第1或第2航站楼乘坐机场铁路普通列车",
  "incheonStep0": "在金浦机场站下车",
  "incheonStep1": "换乘开往元时方向的西海线",
  "incheonStep2": "在始兴能谷站下车, 从3号出口出站",
  "gimpoAlt": "金浦国际机场外景",
  "gimpo": "金浦国际机场",
  "gimpoTime": "30分钟",
  "gimpoRail": "乘坐西海线，经过9站后在始兴陵谷站下车，从3号出口出站。",
  "gimpoStep0": "在金浦机场站乘坐开往元时方向的西海线",
  "gimpoStep1": "乘坐9站后在始兴能谷站下车",
  "gimpoStep2": "在始兴能谷站下车, 从3号出口出站",
  "logoAlt": "兴K医院",
  "footerLabel0": "兴K医院代表院长",
  "footerValue0": "Jong-Keun Kim",
  "footerLabel1": "企业注册号码",
  "footerLabel2": "地址",
  "footerValue2": "14999 ) 韩国京畿道始兴市能谷繁荣路22号5-8楼 兴K医院",
  "footerLabel3": "TEL",
  "footerLabel4": "FAX",
  "footerLabel5": "E.MAIL",
  "blogLabel": "兴K医院Naver博客",
  "kakaoLabel": "兴K医院KakaoTalk频道",
  "youtubeLabel": "兴K医院YouTube频道",
  "instagramLabel": "兴K医院Instagram账号",
  "copyright": "Copyright(C) 2024 흥K병원. All rights reserved."
};

// 사이트 연결용: 위 문구들을 기존 번역 키 구조로 모읍니다. 이 아래는 수정하지 않습니다.
const quickMenu = {
  "label": "快捷菜单",
  "open": "打开快捷菜单",
  "close": "关闭快捷菜单",
  "phone": "电话咨询",
  "reserve": "预约就诊",
  "email": "邮件咨询",
  "hours": "门诊时间",
  "weekdays": "周一至周五",
  "saturday": "周六"
};

const doctorMenu = {
  "label": "按科室选择医生",
  "knee": "膝关节中心",
  "shoulder": "肩关节中心",
  "handFoot": "手足中心",
  "spine": "脊柱中心",
  "internal": "内科",
  "radiology": "放射科",
  "anesthesia": "麻醉疼痛科"
};

// 검색 결과 및 공유 미리보기 문구. 기존 본문 번역은 유지합니다.
const seo = {
  "title": "兴K医院 | 韩国关节与脊柱诊疗及国际患者服务",
  "description": "了解韩国京畿道始兴市兴K医院的膝、肩、手足及脊柱诊疗、医疗团队和院内设施，查看国际患者预约、来院交通及医疗服务指南。"
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
