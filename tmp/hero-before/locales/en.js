// 번역 작업 안내
// 아래 문구 묶음은 페이지 상단 → 하단 순서입니다. 각 묶음 안에서도 화면 등장 순서를 따릅니다.
// 따옴표 안의 문구만 수정하세요. 키 이름, 배열 순서, 하단 export 연결은 변경하지 않습니다.
// \n은 의도한 줄바꿈입니다. 이미지 설명(Alt)과 접근성 문구도 번역 대상입니다.
// 여러 곳에서 쓰는 공통 문구는 첫 등장 위치에 한 번만 둡니다.
// 현재 화면에 직접 연결되지 않은 문구는 해당 묶음 끝에 보존합니다.
// 한국어 문구 변경 시 index.html도 함께 수정합니다.(외국어x) 이미지 경로·통계 숫자는 HTML에서 관리합니다.

// ── 01. 페이지 제목 ──
const pageTitle = "HEUNG-K Hospital | English Website";

// ── 02. 언어 메뉴 제목 ──
const languageLabel = "Select Language";

// ── 03. 상단 헤더 ──
const header = {
  "languageButton": "global",
  "phoneLabel": "시안용 임시 전화번호(수정안해도 됨 일단)",
  "navLabel": "Main Menu"
};

// ── 04. 언어 선택 ──
const languageNames = {
  "ko": "Korean",
  "en": "English",
  "zh": "Chinese",
  "ja": "Japanese",
  "ru": "Russian",
  "mn": "Mongolian",
  "hi": "Hindi",
  "ar": "Arabic",
  "vi": "Vietnamese"
};

// ── 05. 홈 링크 ──
const homeLabel = "HEUNG-K Hospital Home";

// ── 06. 상단 내비게이션 ──
const nav = {
  "about": "ABOUT HEUNG-K",
  "specialties": "SPECIALTIES",
  "doctors": "OUR DOCTORS",
  "facilities": "FACILITIES",
  "inquiry": "CONTACT",
  "location": "LOCATION"
};

// ── 07. 메인 비주얼 ──
const hero = {
  "period": "Annually",
  "unit": "Cases",
  "title": "The More Complex the Joint Surgery, the More Experience Matters",
  "descriptionFirst": "With extensive surgical experience and ongoing international medical exchange, HEUNG-K Hospital specializes in complex joint surgery and revision joint replacement.",
  "descriptionSecond": "We carefully consider each patient's condition and treatment history, continuously advancing our expertise in joint treatment to find the best approach, even for complex surgical cases."
};

// ── 08. About HEUNG-K · 병원 소개 ──
const about = {
  "kicker": "About HEUNG-K",
  "title": "Beyond Joint & Spine Expertise,\nSetting Higher Standards in Treatment.",
  "description": [
    "HEUNG-K Hospital specializes in joint and spine treatment, including the knee, hip, shoulder, hand, and foot.\nWith extensive clinical experience, we provide comprehensive services from diagnosis and treatment to surgery and rehabilitation.",
    "Through continued research, education, and international medical exchange, we strive to help patients return to healthier, more active lives."
  ],
  "statsLabel": "HEUNG-K Hospital at a Glance",
  "statLabels": {
    "bed": "Hospital Beds",
    "doctor": "Outpatients",
    "iv": "Inpatients",
    "world": "International Patients",
    "stethoscope": "Surgeries"
  },
  "galleryLabel": "HEUNG-K Hospital Clinical Care and Medical Exchange",
  "photoAlt": {
    "row1-1": "Medical Team During Surgery",
    "row1-2": "Medical Team During a Patient Consultation",
    "row1-3": "Presentation at an International Conference",
    "row1-4": "Medical Consultation",
    "row1-5": "Medical Exchange in the Operating Room",
    "row2-1": "Visit to a Medical Institution Abroad",
    "row2-2": "International Medical Exchange",
    "row2-3": "Medical Team Participating in Surgery",
    "row2-4": "Meeting with Medical Professionals",
    "row2-5": "Medical Training Session",
    "row2-6": "International Medical Trainees",
    "row2-7": "Group Photo of Training Participants"
  },
  "pause": "사진 움직임 멈추기 안해도됨",
  "resume": "사진 움직임 재생 안해도됨"
};

// ── 09. GLOBAL EXCELLENCE · HSS 교류 ──
const global = {
  "kicker": "GLOBAL EXCELLENCE",
  "leadStart": "The Global Standard in Orthopedic Surgery",
  "hospital": " Experience It",
  "leadEnd": " at HEUNG-K Hospital.",
  "description": "By learning from leading medical institutions worldwide and sharing our expertise globally,\nHEUNG-K Hospital continues to advance joint and spine treatment.",
  "awardsLabel": "HSS Orthopedic Rankings",
  "yearsUnit": "YEARS",
  "newsweek": "Ranked No. 1 Worldwide in Orthopedics for 5 Consecutive Years",
  "usnews": "Ranked No. 1 in the U.S. for Orthopedics for 17 Consecutive Years",
  "hssTitle": "HSS: The Global Standard in Orthopedics",
  "hssDescription": "Located in Manhattan, New York, Hospital for Special Surgery (HSS) is a world-renowned orthopedic hospital at the forefront of patient care, research, education, and medical innovation.",
  "imageAlt": {
    "hssSnf": "Dr. Jong-Keun Kim, Medical Director, Visiting the HSS SNF Joint Replacement and Reconstruction Center",
    "surgeryExchange": "Medical Team Exchanging Expertise During Surgery at HSS",
    "hssBuilding": "Exterior View of HSS in New York",
    "hssVisit": "Dr. Jong-Keun Kim, Medical Director, Outside an HSS Operating Room",
    "surgeryTeam": "Medical Team Participating in Surgery at HSS",
    "colleagues": "Dr. Jong-Keun Kim, Medical Director, with the HSS Medical Team",
    "operatingRoom": "Clinical Exchange in an HSS Operating Room",
    "hssLobby": "Dr. Jong-Keun Kim, Medical Director, Visiting HSS",
    "visitorTeam": "Group Photo with HSS Medical Staff During a Training Visit",
    "surgicalDiscussion": "Medical Team Exchanging Clinical Experience and Insights During Surgery"
  },
  "hssExchangeTitle": "Learning from HSS,\nSharing HEUNG-K's Expertise with the World",
  "hssExchangeFirst": "Dr. Jong-Keun Kim, Medical Director of HEUNG-K Hospital, gained firsthand experience in advanced orthopedic practice and research through the HSS Academic Visitor Program (AVP) and Cornell University's Visiting Scholar Program.",
  "hssExchangeSecond": "He continues to exchange expertise in joint replacement surgery with HSS medical professionals, sharing HEUNG-K Hospital's extensive experience and techniques in MIS-TKA.",
  "watermark": "HSS IN KOREA"
};

// ── 10. APKASS · 국제 학술대회 ──
const apkass = {
  "logoKasAlt": "Korean Arthroscopy Society Logo",
  "logoApkassAlt": "APKASS 2026 KOREA Logo",
  "eyebrow": "A Global Forum for the Latest Advances in Orthopedics",
  "leadership": "INTERNATIONAL ACADEMIC LEADERSHIP",
  "apkass": "APKASS",
  "year": "2026",
  "korea": "KOREA",
  "ickas": "ICKAS",
  "description": "An international conference bringing together experts from the Asia-Pacific region and beyond to share the latest research and advances in treatment",
  "founder01Alt": "Group Photo of APKASS 2026 Conference Participants",
  "founder02Alt": "HEUNG-K Hospital Receiving a Commemorative Plaque as an Official Partner Hospital of APKASS 2026",
  "hospital": "HEUNG-K Hospital,",
  "partnership": "Official Partner Hospital of APKASS 2026",
  "contributor": "OFFICIAL INSTITUTIONAL CONTRIBUTOR",
  "founder": "FOUNDER",
  "chairpersonAlt": "Dr. Jong-Keun Kim, Medical Director, Featured on a Conference Presentation Screen",
  "name": "Jong-Keun Kim",
  "role": "Medical Director",
  "session": "Chairing an Academic Session at APKASS 2026",
  "session01Alt": "Dr. Jong-Keun Kim, Medical Director, Chairing a Session at APKASS 2026",
  "session02Alt": "Presentations and Discussions at an APKASS 2026 Session",
  "gallery01Alt": "Experts Attending a Lecture at an International Conference",
  "gallery02Alt": "Participants Attending an Academic Session",
  "gallery03Alt": "Dr. Jong-Keun Kim, Medical Director, Engaging with International Experts",
  "gallery04Alt": "International Expert Speaking at APKASS 2026",
  "gallery05Alt": "Main Auditorium at an International Conference",
  "gallery06Alt": "Presentations and Discussions at an International Academic Session",
  "gallery07Alt": "Participants Listening to a Conference Session"
};

// ── 11. MIS TKA · 최소침습 수술 ──
const mis = {
  "kicker": "MIS TKA · Minimally Invasive TKA",
  "title": "Minimally Invasive Total Knee Arthroplasty",
  "description": "Minimally invasive total knee arthroplasty (MIS-TKA) uses a smaller incision to reduce damage to surrounding soft tissues. This approach can help reduce postoperative pain, support faster rehabilitation, promote an earlier return to daily activities, and improve patient satisfaction.",
  "imageAlt": {
    "kneeVisual": "Bone Structure of the Knee Joint",
    "incisionComparison": "Illustration Comparing the Knee Incision Length with the Length of an Index Finger"
  },
  "claimStartFirst": "Worldwide",
  "claimStartSecond": "A One-of-a-Kind Surgical Technique",
  "claimEndFirst": "A Truly",
  "claimEndSecond": "Minimally Invasive Approach",
  "questionLabel": "Question",
  "questionFirst": "What Makes It ",
  "questionStrong": "Different?",
  "differenceFirst": "Two incisions of approximately 3-4 cm each are made above and below the patella to access the knee joint.",
  "differenceSecond": "Compared with the conventional 7-9 cm incision (about the length of an index finger),",
  "differenceThird": "this approach aims to reduce incision size and damage to surrounding soft tissues.",
  "captionName": "MIS TKA",
  "captionSuffix": " · Minimally Invasive TKA",
  "benefitTitle": "Smaller Incisions, Better Recovery",
  "benefitIntro": "HEUNG-K's MIS-TKA aims to minimize incisions and tissue damage, reduce postoperative discomfort, and support faster rehabilitation and an earlier return to daily life.",
  "benefit1Title": "Surgery with Minimal Incisions",
  "benefit1Description": "No Thigh Incision\nMinimal Shin Incision",
  "benefit2Title": "Only Essential Incisions",
  "benefit2Description": "Approximately 3-4 cm Incisions Above and Below the Patella\nMinimizing Incisions to Access the Surgical Area",
  "benefit3Title": "Precision Minimally Invasive Knee Replacement",
  "benefit3Description": "Surgery Performed Within the Knee Joint\nwith Precision and Care."
};

// ── 12. 차별화된 치료 · JK Minimal ──
const treatment = {
  "hospital": "HEUNG-K Hospital",
  "titleFirst": " Provides",
  "titleSecond": "Differentiated Treatment",
  "titleThird": "Tailored to Your Needs",
  "intro": "HEUNG-K Hospital's specialized approach to treatment\nfor precise, systematic surgery",
  "imageAlt": {
    "patentFrame": "Patent Certificate: Tibial Template and Handle for Minimally Invasive Total Knee Arthroplasty (Patent No. 10-2622418)",
    "jkMinimal": "JK Minimal Tibial and Femoral Sizing Instruments",
    "psi": "PSI Tailored to the Patient's Bone Anatomy",
    "mako": "MAKO Robotic System for Total Knee Arthroplasty"
  },
  "systemName": "InJury Knee Minimal:",
  "systemShortName": "JK Minimal",
  "patentEmphasis": "Minimally Invasive Joint Replacement Surgery",
  "patentDescription": "Tibial and Femoral Sizing Instruments",
  "methodLabel": "Features of JK Minimal",
  "maximum": "Maximum ",
  "efficiency": "Efficiency",
  "methodDescription": "Development of JK Minimal (InJury Knee Minimal), a Knee Replacement System Designed to Maximize Surgical Space Through Minimal Incisions",
  "minimumInjury": "Minimal ",
  "injury": "Tissue Damage",
  "minimumIncision": "Minimal ",
  "incision": "Incisions",
  "strategiesTitle": "A Tailored Strategy to Improve Surgical Success and Patient Satisfaction",
  "psiTitle": "PSI",
  "psiSubtitle": "Patient-Specific Joint Replacement",
  "psiDescription": "3D Patient-Specific Instrumentation (PSI) Tailored to Each Patient's Bone Anatomy Enables Precise Implant Placement",
  "makoTitle": "MAKO",
  "makoSubtitle": "Robotic-Assisted Joint Replacement Surgery",
  "makoDescription": "CT-Based 3D Surgical Planning Guides Precise Robotic Bone Resection, Combining Robotic Precision with Minimally Invasive Expertise",
  "windowTitle": "Mobile Window Technique",
  "windowSubtitle": "Creating Surgical Space Through Minimal Incisions",
  "windowDescription": "An Efficient Surgical Technique That Maximizes the Use of Surgical Space Through the Mobile Window Technique"
};

// ── 13. 절개 비교 · 치료 장점 ──
const incision = {
  "titleAccent": "Small Incisions",
  "title": "A Visible Difference",
  "imageAlt": {
    "case68": "Comparison of Incision Sites on Both Knees of a 68-Year-Old Female Patient",
    "case72": "Comparison of Incision Sites on Both Knees of a 72-Year-Old Female Patient",
    "case79": "Comparison of Incision Sites on Both Knees of a 79-Year-Old Male Patient"
  },
  "otherHospital": "Other Hospital",
  "ourHospital": "HEUNG-K Hospital",
  "ageUnit": "years old",
  "femalePatient": "Female Patient",
  "malePatient": "Male Patient",
  "benefitsAccent": "Minimally Invasive Knee Replacement Surgery",
  "benefitsTitle": "Benefits",
  "painTitle": "Reduced Postoperative Pain",
  "painDescription": "By minimizing incisions and damage to surrounding soft tissues (muscles and ligaments), this approach may reduce postoperative pain and the need for pain medication.",
  "movementTitle": "Improved Joint Mobility\nEarlier Walking After Surgery",
  "movementDescription": "Reduced tissue damage may limit scar tissue formation within the joint, improving mobility and allowing earlier walking after surgery.",
  "scarTitle": "Minimal Scarring",
  "scarDescription": "Smaller incisions may leave less noticeable scars and improve patient satisfaction.",
  "recoveryTitle": "Shorter Hospital Stay and Faster Return to Daily Activities",
  "recoveryDescription": "Faster recovery may shorten hospital stays and help patients return to daily activities sooner."
};

// ── 14. 카데바 워크숍 ──
const cadaver = {
  "kicker": "MIS TKA · CADAVER WORKSHOP",
  "title": "International Training Center for Minimally Invasive and Patient-Specific Joint Replacement",
  "word": "CADAVER",
  "workshopLabel": "MIS TKA CADAVER WORKSHOP",
  "workshop": "Cadaver Workshops Successfully Held for Two Consecutive Years, 2025 and 2026",
  "training": "Training in Minimally Invasive Total Knee Arthroplasty",
  "hospital": "HEUNG-K Hospital ",
  "descriptionFirst": "hosts cadaver workshops for orthopedic surgeons from Korea and abroad,",
  "descriptionSecond": "sharing MIS-TKA surgical techniques and clinical expertise,",
  "descriptionThird": "while promoting ongoing medical education and academic exchange.",
  "imageAlt": {
    "workshopGroupFramed": "Group Photo of Medical Professionals Attending a Cadaver Workshop in a Gold Frame",
    "workshopCollageFramed": "Gold-Framed Photo Collage of Cadaver Workshop Lectures, Hands-On Training, and Medical Exchange",
    "trophy": "Gold Hand-Shaped Trophy Displayed in the Cadaver Workshop Section"
  }
};

// ── 15. 연구 및 학술 활동 ──
const research = {
  "titleAccent": "Clinical Experience",
  "titleRest": "Drives Research Advances",
  "descriptionFirst": "Building on extensive clinical experience, we pursue ongoing research",
  "descriptionSecond": "and share our findings at national and international conferences and in academic journals.",
  "kicker": "RESEARCH & PUBLICATIONS",
  "sliderLabel": "Photo of HEUNG-K Hospital’s Medical Team at an Academic Event",
  "carouselRole": "carousel",
  "slideRole": "slide",
  "imageAlt": {
    "aaosPresentation": "Dr. Jong-Keun Kim, Medical Director, Presenting at an International Orthopedic Conference",
    "yonseiWorkshop": "Medical Professionals Engaging in Academic Exchange at a Cadaver Workshop at Yonsei University",
    "koaPresentation": "Medical Team Presenting Clinical Research Findings at an Orthopedic Conference",
    "publication01": "Framed Research Publication by HEUNG-K Hospital's Medical Team 1",
    "publication02": "Framed Research Publication by HEUNG-K Hospital's Medical Team 2",
    "publication03": "Framed Research Publication by HEUNG-K Hospital's Medical Team 3",
    "publication04": "Framed Research Publication by HEUNG-K Hospital's Medical Team 4",
    "publication05": "Framed Research Publication by HEUNG-K Hospital's Medical Team 5",
    "publication06": "Framed Research Publication by HEUNG-K Hospital's Medical Team 6",
    "publication07": "Framed Research Publication by HEUNG-K Hospital's Medical Team 7",
    "publication08": "Framed Research Publication by HEUNG-K Hospital's Medical Team 8"
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
  "doctorsLabel": "HEUNG-K Hospital Medical Staff",
  "parkJinHyung": "Dr. Jin-Hyoung Park",
  "kimJunSung": "Dr. Junsung Kim",
  "jungSeungJin": "Dr. Seung Jin Jung",
  "kimSeHoon": "Dr. Sehun Kim",
  "leeMyungChul": "Dr. Myung Chul Lee, Honorary Director",
  "kimJongGeun": "Dr. Jong-Keun Kim, Medical Director",
  "leeSuGeon": "Dr. Su-Keon Lee",
  "leeJunYoung": "Dr. Joon Young Lee",
  "leeKyungHwa": "Dr. Gyeong Hwa Lee",
  "joNamIk": "Dr. Nam Ik Cho",
  "yoonSangHoon": "Dr. Sang Hoon Yoon"
};

// ── 17. 전담센터 퀵메뉴 ──
const centerMenu = {
  "label": "Go to Specialty Centers",
  "title": "QUICK\nMENU",
  "kneeLabel": "Go to Knee Center",
  "knee": "KNEE\nCENTER",
  "shoulderLabel": "Go to Shoulder Center",
  "shoulder": "SHOULDER\nCENTER",
  "hand-footLabel": "Go to Hand & Foot Center",
  "hand-foot": "HAND & FOOT\nCENTER",
  "spineLabel": "Go to Spine Center",
  "spine": "SPINE\nCENTER"
};

// ── 18. 무릎전담센터 · 배너 ──
const knee = {
  "hospital": "HEUNG-K Hospital",
  "title": "Knee Center",
  "descriptionFirst": "From precise diagnosis and non-surgical treatment to complex surgery and rehabilitation.",
  "descriptionSecond": "Our specialized knee treatment system delivers comprehensive, high-quality care.",
  "service1": "Robot-Assisted MIS Total Knee Arthroplasty (MAKO system)",
  "service2": "Knee Revision Surgery",
  "service3": "Stem Cell Cartilage Regeneration (CARTISTEM)",
  "service4": "Autologous Chondrocyte Implantation (CartiLife)",
  "service5": "Corrective Osteotomy",
  "service6": "Meniscus Surgery",
  "service7": "Cruciate Ligament Reconstruction and Revision Surgery (ACL / PCL)",
  "service8": "Sports Injury Diagnosis and Treatment",
  "imageAlt": {
    "kimJongGeun": "Dr. Jong-Keun Kim, Medical Director",
    "leeJunYoung": "Dr. Joon Young Lee",
    "chosunArticle": "Chosun Ilbo Article: Minimally Invasive Knee Replacement Surgery Reduces Pain and Speeds Up Recovery"
  },
  "articleOpen": "View Enlarged Chosun Ilbo Article (Opens in a New Window)"
};

// ── 19. 무릎전담센터 · 치료 상세 (공통 펼침/접힘 문구 포함) ──
const centerTreatmentsKnee = {
  "kneeLabel": "Knee Center Treatments",
  "makoTitle": "Robot-Assisted MIS Total Knee Arthroplasty (MAKO)",
  "mako687_1179": "Combining HEUNG-K Hospital's Minimally Invasive Expertise with Advanced Robotic Technology",
  "imageAlt": {
    "introRobotSystem": "MAKO Robotic-Assisted Joint Replacement System",
    "doctorExperience": "Medical Team Performing Surgery",
    "makoSystem": "MAKO Robotic Surgical System",
    "planCt": "Preoperative Assessment and Surgical Planning",
    "customPlan": "Patient-Specific Surgery",
    "safeOperation": "Surgery Performed with a Focus on Patient Safety",
    "implant": "Optimal Joint Implant Placement",
    "before": "Preoperative X-ray Showing Leg Alignment",
    "planning": "MAKO Preoperative Surgical Planning Screen",
    "operating": "Robotic-Assisted Surgery Using the MAKO System",
    "after": "Postoperative X-ray Showing Leg Alignment After Joint Replacement",
    "accuracy": "MAKO Surgical Planning Screen Showing Joint Spacing and Alignment Angles",
    "makoRobot": "MAKO Robotic Arm for Precise Bone Resection",
    "safetyArm": "MAKO Screen Showing the Planned Bone Resection Area",
    "safetyBoundary": "Illustration of the MAKO Robotic Arm's Haptic Safety Boundaries",
    "minimalIncision": "HEUNG-K Hospital Video on Minimally Invasive Robotic-Assisted Joint Replacement Surgery",
    "incisionStandard": "Conventional Robotic-Assisted Joint Replacement Surgery: 15-20 cm Incision",
    "incisionMako": "HEUNG-K Hospital's Minimally Invasive Robotic-Assisted Joint Replacement Surgery: 7-9 cm Incision",
    "case75Combined": "HEUNG-K Hospital Minimally Invasive Robotic-Assisted Joint Replacement Case: 7.5 cm Incision",
    "case70Combined": "HEUNG-K Hospital Minimally Invasive Robotic-Assisted Joint Replacement Case: 7 cm Incision"
  },
  "makoToggleContext": "MAKO Details ",
  "seeMore": "SEE MORE",
  "seeLess": "SEE LESS",
  "mako995_5015": "More Accuracy, More Precision, More Safety",
  "mako995_5017": "Robotic-assisted knee replacement combines surgical expertise with robotic precision.",
  "mako995_5018": "Preoperative CT scans provide a 3D view of the knee to plan implant size, placement, and bone resection. During surgery, the surgeon assesses joint balance and guides the robotic arm to precisely resect bone within the planned boundaries and position the implant.",
  "makoDoctorPrefix": "Surgeon's ",
  "makoDoctorExperience": "Expertise",
  "makoRobotPrefix": "Robotic ",
  "makoRobotAccuracy": "Precision",
  "mako995_5031": "HEUNG-K Hospital's Robotic-Assisted Knee Replacement Procedure",
  "mako995_5038": "Preoperative Assessment and Planning",
  "mako995_5039": "A preoperative CT scan creates a 3D model of the knee to plan implant size, placement, and bone resection.",
  "mako995_5047": "Patient-Specific Surgery",
  "mako995_5048": "During surgery, the plan is adjusted in real time based on joint deformity and ligament condition to improve precision.",
  "mako995_5056": "Safety-Focused Surgery",
  "mako995_5057": "The surgeon guides the robotic arm for precise bone resection within planned boundaries. Haptic technology helps keep the cutting tool within these limits, protecting surrounding blood vessels, nerves, and soft tissues.",
  "mako995_5063": "Optimal Implant Placement",
  "mako995_5064": "The procedure concludes with precise placement of the selected implant in its planned position.",
  "before": "BEFORE",
  "makoPrecisionCaption": "Precision Surgery with the MAKO Robotic System",
  "after": "AFTER",
  "makoFeaturesLead": "Robotic-Assisted Knee Replacement,",
  "makoFeaturesQuestion": "What Makes MAKO Different?",
  "mako995_5091": "Precise Surgical Planning",
  "mako995_5093": "Personalized Surgical Planning Based on 3D CT Imaging",
  "mako995_5095": "3D CT imaging provides a detailed analysis of each patient's knee anatomy and alignment, guiding personalized planning of bone resection, implant size, and placement.",
  "mako995_5096": "During surgery, bone resection and joint spacing can be adjusted in 0.5 mm increments, and angles in 0.5-degree increments, helping improve leg alignment and natural knee movement.",
  "mako995_5104": "Precise Bone Resection",
  "mako995_5106": "Precise Bone Resection with Robotic Assistance",
  "mako995_5108": "Bone is precisely resected according to the planned position, angle, and depth.",
  "mako995_5118": "Surgical Safety",
  "mako995_5120": "Reduced Surgical Risks",
  "mako995_5122": "MAKO's haptic technology sets virtual boundaries based on the surgical plan and controls robotic arm movement to keep the cutting tool within them. This helps protect surrounding blood vessels, nerves, and ligaments while reducing unnecessary bone resection.",
  "makoMinimalHighlight": "The World's Smallest",
  "makoMinimalTitle": "Minimally Invasive Robotic Knee Replacement!",
  "mako995_5129": "HEUNG-K Hospital combines MAKO-assisted precision bone resection with minimally invasive surgery using 7-10 cm incisions.",
  "mako995_5130": "This approach aims to minimize both incision size and surrounding soft tissue damage, supporting faster recovery.",
  "makoVideoLink": "Watch on YouTube (New Window)",
  "makoPrecisionPrefix": "Robotic Precision, ",
  "makoPrecisionHighlight": "Smaller Incisions",
  "mako995_5137": "Typical Incision Length in Robotic-Assisted Knee Replacement",
  "makoIncisionHighlight": "HEUNG-K Hospital's Minimally Invasive MAKO-Assisted Knee Replacement",
  "makoIncisionSuffix": "Incision Length",
  "mako995_5144": "HEUNG-K Hospital's Minimally Invasive Robotic Knee Replacement Cases",
  "makoBenefitsPrefix": "HEUNG-K Hospital ",
  "makoBenefitsHighlight": "Minimally Invasive Robotic-Assisted Knee Replacement",
  "makoBenefitsSuffix": "Benefits",
  "makoBenefit1Title": "Reduced Postoperative Pain",
  "makoBenefit1Body": "Smaller incisions may reduce damage to surrounding soft tissues (muscles and ligaments), helping relieve postoperative pain and reduce the need for pain medication.",
  "makoBenefit2Title": "Improved Joint Mobility\nEarlier Walking After Surgery",
  "makoBenefit2Body": "Reduced tissue damage may limit scar tissue formation within the joint, improving mobility and allowing earlier walking after surgery.",
  "makoBenefit3Title": "Minimal Scarring",
  "makoBenefit3Body": "Smaller incisions may leave less noticeable scars and improve patient satisfaction.",
  "makoBenefit4Title": "Shorter Hospital Stay and Faster Return to Daily Activities",
  "makoBenefit4Body": "Faster recovery may shorten hospital stays and help patients return to daily activities sooner.",
  "cartistemTitle": "Umbilical Cord-derived Stem Cell (CARTISTEM®)",
  "cartistemDescription": "Systematic Treatment Tailored to Each Patient's Knee Cartilage Defect",
  "cartistemHeroAlt": "HEUNG-K Hospital Medical Team Viewing an Arthroscopic Image During CARTISTEM Treatment",
  "cartistemToggleContext": "CARTISTEM Details ",
  "cartistemIntroTitle": "CARTISTEM is a treatment for knee cartilage defects using mesenchymal stem cells derived from donated umbilical cord blood.",
  "cartistemIntroFirst": "Stem cells are like 'seeds' that can develop into different types of cells in the body.",
  "cartistemIntroSecond": "When implanted into damaged knee cartilage, these stem cells interact with surrounding tissues and can differentiate into cartilage cells. Through paracrine signaling, they also release growth factors and signaling molecules that may reduce inflammation and promote cartilage regeneration, supporting the formation of new cartilage.",
  "cartistemPreparationTitle": "CARTISTEM Preparation Process",
  "cartistemPreparation1Title": "CARTISTEM Inspection and Preparation",
  "cartistemPreparation1Body": "Check the condition and components of CARTISTEM before use",
  "cartistemPreparation2Title": "Opening the Sterile Packaging",
  "cartistemPreparation2Body": "Prepare for treatment under sterile conditions",
  "cartistemPreparation3Title": "Stem Cell Mixing",
  "cartistemPreparation3Body": "Mix umbilical cord blood-derived mesenchymal stem cells with hyaluronic acid",
  "cartistemPreparation4Title": "Ready for Implantation",
  "cartistemPreparation4Body": "Complete the final preparation for application to the cartilage defect",
  "cartistemBenefitsTitle": "Benefits of CARTISTEM",
  "cartistemBenefit1": "Applicable to Large Cartilage Defects Without Age Restrictions",
  "cartistemBenefit2": "Potential for Effective Cartilage Regeneration After a Single Treatment",
  "cartistemBenefit3": "No Donor Site Damage, as the Patient's Own Cartilage Is Not Harvested",
  "cartistemBenefit4": "Minimally Invasive Arthroscopic Surgery Without Large Incisions",
  "cartistemSurgeryTitle": "CARTISTEM Surgical Procedure",
  "cartistemSurgery1": "Identify the Cartilage Defect Using Arthroscopy",
  "cartistemSurgery2": "Prepare the Cartilage Defect Site",
  "cartistemSurgery3": "Create 3-5 mm Holes at the Cartilage Defect Site",
  "cartistemSurgery4": "CARTISTEM Implantation",
  "cartistemResultsTitle": "Before and After CARTISTEM Treatment",
  "cartistemBeforeAlt": "Arthroscopic Image of a Cartilage Defect Before CARTISTEM Treatment",
  "cartistemBefore": "before",
  "cartistemAfterAlt": "Arthroscopic Image of Knee Cartilage One Year After CARTISTEM Treatment",
  "cartistemAfter": "after",
  "cartistemAfterTime": "One Year After Treatment",
  "cartilifeTitle": "Costal Autologous Chondrocyte Implantation (CartiLife®)",
  "cartilifeDescription": "Specialized Autologous Costal Chondrocyte Therapy for Knee Cartilage Regeneration",
  "cartilifeHeroAlt": "HEUNG-K Hospital Medical Team Viewing an Arthroscopic Image During CARTILIFE Surgery",
  "cartilifeToggleContext": "CARTILIFE Details ",
  "cartilifeIntroTitle": "Advanced Cartilage Regeneration Therapy Using Autologous Costal Chondrocytes",
  "cartilifeIntroBody": "Costal cartilage is harvested from the patient's 8th-10th ribs, and the isolated chondrocytes are cultured for approximately 6-7 weeks to form small spherical implants. These are then implanted into the knee cartilage defect to promote the regeneration of healthy, functional cartilage.",
  "cartilifeProcessTitle": "CARTILIFE Process",
  "cartilifeHarvest1Alt": "Harvesting Autologous Costal Cartilage",
  "cartilifeHarvest2Alt": "Illustration Showing the Costal Cartilage Harvest Site",
  "cartilifeHarvest3Alt": "Harvested Costal Cartilage Tissue",
  "cartilifeHarvest4Alt": "Processing of the Harvested Costal Cartilage Tissue",
  "cartilifeStep1": "Step 1",
  "cartilifeStep1Body": "Harvested from the 8th-10th Costal Cartilage",
  "cartilifeCultureDiagramAlt": "Process of Creating Bead-Shaped Cartilage Tissue Through Cell Isolation, Expansion, and Chondrogenic Culture",
  "cartilifeCulture1Alt": "Implant Preparation Tools for Cultured Chondrocytes",
  "cartilifeCulture2Alt": "Preparing the Cultured Chondrocytes",
  "cartilifeCulture3Alt": "Bead-Shaped Chondrocyte Implantation Tool",
  "cartilifeStep2": "Step 2",
  "cartilifeStep2Body": "Cell Isolation / Expansion - Chondrogenic Culture - Formation of Small Bead-Shaped Cartilage Tissue (about 1.5 mm in diameter)",
  "cartilifeImplant1Alt": "Illustration of Autologous Chondrocyte Implantation by Arthroscopy or Open Surgery",
  "cartilifeImplant2Alt": "Arthroscopic Image of Bead-Shaped Autologous Chondrocyte Implantation into a Cartilage Defect",
  "cartilifeStep3": "Step 3",
  "cartilifeStep3Body": "Bead-Shaped Autologous Chondrocyte Implantation",
  "cartilifeResultsTitle": "Before and After CARTILIFE Treatment",
  "cartilifeBeforeAlt": "Arthroscopic Image of a Cartilage Defect Before CARTILIFE Treatment",
  "cartilifeBefore": "before",
  "cartilifeAfter1Alt": "First Arthroscopic Image of Regenerated Cartilage One Year After CARTILIFE Treatment",
  "cartilifeAfter2Alt": "Second Arthroscopic Image of Regenerated Cartilage One Year After CARTILIFE Treatment",
  "cartilifeAfter": "after",
  "cartilifeAfterTime": "One Year After Treatment",
  "megacartiTitle": "Allocostal Cartilage (MegaCarti®)",
  "megacartiDescription": "Tailored Care for Cartilage Damage: HEUNG-K Hospital's Microfracture and MEGACARTI Treatment",
  "megacartiHeroAlt": "HEUNG-K Hospital Medical Team Performing MEGACARTI Arthroscopic Surgery",
  "megacartiToggleContext": "MEGACARTI Details ",
  "megacartiIntroTitle": "MEGACARTI is a cartilage repair material used after microfracture to protect blood clots and support cell retention and cartilage regeneration.",
  "megacartiIntroFirst": "Microfracture creates small holes in the bone beneath damaged cartilage, allowing bone marrow stem cells and growth factors to reach the affected area. This stimulates natural healing, but the resulting fibrocartilage is less strong and durable than normal hyaline cartilage.",
  "megacartiIntroSecond": "To address these limitations, MEGACARTI uses allogeneic costal cartilage particles containing type II collagen to protect blood clots and help bone marrow-derived cells remain at the defect site, supporting cartilage regeneration.",
  "megacartiGalleryLabel": "MEGACARTI Procedure Images",
  "megacartiSurgery1Alt": "Arthroscopic Image Showing the Cartilage Damage",
  "megacartiSurgery2Alt": "Arthroscopic Image After Debridement of the Damaged Cartilage",
  "megacartiSurgery3Alt": "Arthroscopic Image of the Microfracture Site",
  "megacartiSurgery4Alt": "Arthroscopic Image of MEGACARTI Applied to the Microfracture Site",
  "cruciateTitle": "Cruciate Ligament Reconstruction (ACL/PCL)",
  "cruciateDescription": "Anatomically Precise Cruciate Ligament Reconstruction with Maximum Preservation of Remaining Ligament Tissue",
  "cruciateHeroAlt": "HEUNG-K Hospital Medical Team Performing Arthroscopic Cruciate Ligament Surgery",
  "cruciateToggleContext": "Cruciate Ligament Reconstruction Details ",
  "cruciateIntroFirst": "The cruciate ligaments prevent excessive forward and backward movement of the knee and help maintain stability during rotation.",
  "cruciateIntroSecond": "When a cruciate ligament tear causes persistent knee instability, reconstruction may help restore stability and reduce the risk of further damage to the meniscus and articular cartilage.",
  "cruciateProcessTitle": "Cruciate Ligament Reconstruction Procedure",
  "cruciateStep1Body": "Assess the Tear and Preserve Remaining Ligament Tissue",
  "cruciateStep1": "Step 1",
  "cruciateStep2Body": "Prepare the Graft and Create Precise Bone Tunnels",
  "cruciateStep2": "Step 2",
  "cruciateStep3Body": "Insert and Secure the Graft",
  "cruciateStep3": "Step3",
  "cruciateHospital": "HEUNG-K Hospital",
  "cruciateProcessBody": "preserves remaining ligament tissue, creates small, precisely positioned bone tunnels, and securely fixes an autograft or allograft suited to the patient's condition. This helps restore knee stability and function.",
  "cruciateAclTitle": "ACL Reconstruction Case",
  "cruciateAclBeforeAlt": "Arthroscopic Image of a Torn ACL Before Surgery",
  "cruciateAclBefore": "Torn ACL - Before Surgery",
  "cruciateAclAfterAlt": "Arthroscopic Image of a Reconstructed ACL After Surgery",
  "cruciateAclAfter": "Reconstructed ACL - After Surgery",
  "cruciatePclTitle": "PCL Reconstruction Case",
  "cruciatePclBeforeAlt": "Arthroscopic Image of a Torn PCL Before Surgery",
  "cruciatePclBefore": "Torn PCL - Before Surgery",
  "cruciatePclAfterAlt": "Arthroscopic Image of a Reconstructed PCL After Surgery",
  "cruciatePclAfter": "Reconstructed PCL - After Surgery",
  "cruciateBenefitsTitle": "Features of Cruciate Ligament Reconstruction",
  "cruciateBenefit1Title": "Precise Anatomic Reconstruction",
  "cruciateBenefit1Body": "Precisely positioned bone tunnels based on each patient's anatomy help restore knee stability and function.",
  "cruciateBenefit2Title": "Preservation of Remaining Ligament Tissue",
  "cruciateBenefit2Body": "Preserving viable ligament tissue may support proprioception and graft integration.",
  "cruciateBenefit3Title": "Minimally Invasive Arthroscopic Surgery",
  "cruciateBenefit3Body": "Arthroscopic surgery uses small incisions to access the joint, helping reduce tissue damage and scarring.",
  "cruciateBenefit4Title": "Combined Anterolateral Ligament (ALL) Reconstruction",
  "cruciateBenefit4Body": "For severe rotational instability or a high risk of re-injury, ALL reconstruction may be performed alongside ACL reconstruction to improve rotational stability.",
  "cruciateBenefit5Title": "Complex Revision Cruciate Ligament Reconstruction",
  "cruciateBenefit5Body": "For recurrent tears or persistent instability, previous bone tunnels and grafts are carefully assessed to plan individualized revision surgery.",
  "cruciateBenefit6Title": "Specialized Rehabilitation by a National Team Sports Medical Specialist",
  "cruciateBenefit6Body": "Drawing on experience treating national team athletes, we provide personalized, progressive rehabilitation to support a safe return to daily activities and sports."
};

// ── 20. 어깨전담센터 · 배너 ──
const shoulder = {
  "awardAlt": "Shoulder Center Recognition Plaque",
  "hospital": "HEUNG-K Hospital",
  "title": "Shoulder Center",
  "description1": "From precise diagnosis and non-surgical treatment to complex surgery and rehabilitation.",
  "description2": "Our specialized shoulder treatment system aims to provide comprehensive, high-quality treatment.",
  "service1": "Rotator Cuff Tear and Tendinopathy",
  "service2": "Shoulder instability and recurrent dislocation",
  "service3": "Frozen shoulder (adhesive capsulitis)",
  "service4": "Shoulder impingement syndrome",
  "service5": "Calcific tendinitis of the shoulder",
  "service6": "Sports-related shoulder injuries",
  "aacAlt": "Asian Arthroscopy Society (AAC) Logo",
  "kossmAlt": "Korean Orthopaedic Society for Sports Medicine (KOSSM) Logo",
  "affiliation": "Asia Arthroscopy Congress (AAC)\nMember of the Promotion & Finance Committee",
  "doctorAlt": "Dr. Su-Keon Lee"
};

// ── 21. 어깨전담센터 · 치료 상세 ──
const centerTreatmentsShoulder = {
  "rotatorListLabel": "Shoulder Center Treatment",
  "rotatorTitle": "Rotator Cuff Tear Surgery",
  "rotatorDescription": "Surgery Using an Arthroscopic Camera and Specialized Instruments to View and Treat the Joint",
  "rotatorHeroAlt": "HEUNG-K Hospital Medical Team Performing Arthroscopic Rotator Cuff Repair",
  "rotatorToggleContext": "Rotator Cuff Repair Details ",
  "rotatorRepairTitle": "Arthroscopic Rotator Cuff Repair",
  "rotatorRepairBody1": "Arthroscopic rotator cuff repair uses 2-3 small incisions (5-7 mm each) to insert a camera and specialized instruments, allowing surgeons to examine and repair damaged tissue during the same procedure.",
  "rotatorRepairBody2": "Small incisions may reduce postoperative pain, scarring, bleeding, and infection risk, potentially allowing faster recovery.",
  "rotatorCasesTitle": "HEUNG-K Hospital's Before-and-After Surgical Cases",
  "rotatorRepairBefore1Alt": "Arthroscopic Image of a Torn Rotator Cuff Before Repair",
  "rotatorRepairBefore2Alt": "Shoulder MRI Before Rotator Cuff Repair",
  "rotatorBefore": "Before Surgery",
  "rotatorRepairAfter1Alt": "Arthroscopic Image of the Repaired Rotator Cuff",
  "rotatorRepairAfter2Alt": "Shoulder MRI After Rotator Cuff Repair",
  "rotatorAfter": "After Surgery",
  "rotatorPatchTitle": "Patch-Augmented Rotator Cuff Repair",
  "rotatorPatchAlt": "Illustration of Patch Augmentation Over the Rotator Cuff Repair Site",
  "rotatorPatchLead": "This treatment reinforces a weakened rotator cuff with a patch to improve repair stability and reduce the risk of re-tear.",
  "rotatorPatchBody1": "When the tear is large or the tendon tissue is too weak for repair alone, the torn tendon is first repaired arthroscopically, then reinforced with a human dermal allograft patch or a collagen patch.",
  "rotatorPatchBody2": "These patches support the weakened tendon, reduce stress on the repair site, and help promote tissue healing for more stable recovery. They may be considered especially in large rotator cuff tears or when severe tendon degeneration increases the risk of re-tear.",
  "rotatorPatchBefore1Alt": "Shoulder MRI Before Patch Augmentation",
  "rotatorPatchBefore2Alt": "Arthroscopic Image of the Rotator Cuff Before Patch Augmentation",
  "rotatorPatchAfter1Alt": "Shoulder MRI After Patch Augmentation",
  "rotatorPatchAfter2Alt": "Arthroscopic Image of the Patch-Augmented Rotator Cuff Repair Site",
  "rotatorPrpTitle": "Platelet-Rich Plasma (PRP) Therapy",
  "rotatorPrpLead": "Patch augmentation reinforces a weakened rotator cuff, improves repair stability, and reduces the risk of re-tear.",
  "rotatorPrpBody1": "During rotator cuff repair, blood is drawn from the patient and processed to isolate platelet-rich plasma (PRP), which is then applied to the repair site.",
  "rotatorPrpBody2": "PRP contains growth factors that may support tendon healing and recovery at the repair site. Depending on the tear size and tendon condition, it may be used alongside patch augmentation.",
  "rotatorPrpProcessTitle": "PRP Preparation Process",
  "rotatorPrp1Alt": "Blood Collection for PRP Preparation",
  "rotatorPrpStep1": "Step 1",
  "rotatorPrpStep1Body": "PRP Preparation Process",
  "rotatorPrp2Alt": "Centrifuge Used to Process the Collected Blood",
  "rotatorPrpStep2": "Step 2",
  "rotatorPrpStep2Body": "Centrifugation",
  "rotatorPrp3Alt": "Extracting PRP from the Separated Blood",
  "rotatorPrpStep3": "Step 3",
  "rotatorPrpStep3Body": "PRP Extraction",
  "rotatorPrp4Alt": "PRP Prepared for Surgical Use",
  "rotatorPrpStep4": "Step 4",
  "rotatorPrpStep4Body": "PRP Ready for Use",
  "arthroplastyTitle": "Shoulder Arthroplasty",
  "arthroplastyDescription": "Shoulder arthroplasty replaces damaged joint surfaces with artificial implants to restore function when severe bone or cartilage damage or rotator cuff dysfunction affects the shoulder.",
  "arthroplastyHeroAlt": "HEUNG-K Hospital Medical Team Performing Shoulder Arthroplasty",
  "arthroplastyToggleContext": "Shoulder Arthroplasty Details ",
  "arthroplastyTsaTitle": "Total Shoulder Arthroplasty (TSA)",
  "arthroplastyTsaLead": "Less Pain, Smoother Recovery",
  "arthroplastyTsaBody1": "Anatomic shoulder replacement preserves the joint's natural structure while replacing damaged surfaces to relieve pain and restore shoulder mobility.",
  "arthroplastyTsaBody2": "It is commonly performed for severe osteoarthritis or joint damage from fractures, aiming to relieve pain and restore shoulder function.",
  "arthroplastyTsaCasesTitle": "Anatomic Total Shoulder Arthroplasty",
  "arthroplastyTsaBeforeAlt": "Shoulder X-ray Before Anatomic Total Shoulder Arthroplasty",
  "arthroplastyBefore": "Before Surgery",
  "arthroplastyTsaAfterAlt": "Shoulder X-ray After Anatomic Total Shoulder Arthroplasty",
  "arthroplastyAfter": "After Surgery",
  "arthroplastyRsaTitle": "Reverse Shoulder Arthroplasty (RSA)",
  "arthroplastyRsaLead": "This procedure uses the deltoid muscle to compensate for a damaged rotator cuff, helping restore shoulder function and mobility.",
  "arthroplastyRsaBody1": "Reverse shoulder arthroplasty reverses the ball-and-socket arrangement of the shoulder joint, allowing the deltoid muscle to help lift the arm when the rotator cuff is damaged.",
  "arthroplastyRsaBody2": "RSA is commonly considered for severe rotator cuff tears that cannot be adequately treated arthroscopically, particularly when patients cannot actively raise their arm (pseudoparalysis). By relying on the deltoid muscle, it can help restore shoulder movement and range of motion.",
  "arthroplastyRsaCasesTitle": "HEUNG-K Hospital's Before-and-After Surgical Cases",
  "arthroplastyRsaBeforeAlt": "Shoulder X-ray Before Reverse Shoulder Arthroplasty",
  "arthroplastyRsaAfterAlt": "Shoulder X-ray After Reverse Shoulder Arthroplasty"
};

// ── 22. 손발전담센터 · 배너 ──
const handFoot = {
  "hospital": "HEUNG-K Hospital",
  "title": "Hand & Foot Center",
  "description1": "From precise diagnosis and non-surgical treatment to complex surgery and rehabilitation.",
  "description2": "Our specialized hand and foot treatment system aims to provide comprehensive, high-quality treatment.",
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
  "arthroscopyListLabel": "Hand & Foot Center Treatment",
  "micaTitle": "Minimally Invasive Hallux Valgus Surgery (MICA)",
  "micaDescription": "A minimally invasive hallux valgus procedure that precisely corrects foot deformity through very small incisions.",
  "micaHeroAlt": "HEUNG-K Hospital Medical Team Performing Minimally Invasive Hallux Valgus Surgery",
  "micaToggleContext": "MICA Details ",
  "micaLead": "MICA is a minimally invasive hallux valgus procedure that uses 2-3 mm incisions to precisely correct the deformed bone, helping reduce pain and support faster recovery.",
  "micaBody1": "Performed under local or regional anesthesia, MICA uses 2-3 mm skin incisions (about 3-5 small portals). Guided by real-time fluoroscopy, specialized instruments are inserted to precisely cut and realign the deformed bone.",
  "micaBody2": "The prominent bone is then trimmed, and the corrected bone is securely fixed with specialized screws.",
  "micaStepsHeading": "MICA Procedure",
  "micaStep1": "Minimally Invasive Access to the Area Requiring Correction",
  "micaStep2": "Precise Metatarsal Osteotomy Under Real-Time C-Arm Guidance",
  "micaStep3": "Realignment of the Osteotomized Bone",
  "micaStep4": "Removal of the Prominent Bone",
  "micaStep5": "Secure Fixation with Specialized Screws",
  "micaComparisonHeading": "Comparison with Conventional Open Surgery",
  "micaOpenHeading": "Conventional Open Surgery",
  "micaMicaHeading": "MICA Surgery",
  "micaOpenAlt": "Illustration of Incision Sites in Conventional Open Surgery",
  "micaPhotosLabel": "Comparison Image",
  "micaMicaAlt": "Illustration of the Small Incision Sites in MICA Surgery",
  "micaCompare1Open": "Performed Through a 4-10 cm Incision",
  "micaCompare1Label": "Incision Size",
  "micaCompare1Mica": "Minimally Invasive Surgery Through Small Openings of About 2 mm",
  "micaCompare2Open": "40-50 Minutes",
  "micaCompare2Label": "Operating Time",
  "micaCompare2Mica": "Within 15-20 Minutes",
  "micaCompare3Open": "Bleeding and Complications During Surgery",
  "micaCompare3Label": "Bleeding and Complications",
  "micaCompare3Mica": "Minimized Bleeding and Complications",
  "micaCompare4Open": "Postoperative Pain",
  "micaCompare4Label": "Pain",
  "micaCompare4Mica": "Minimized Postoperative Pain",
  "micaCompare5Open": "Postoperative Scarring",
  "micaCompare5Label": "Scarring",
  "micaCompare5Mica": "Minimal Postoperative Scarring",
  "micaCasesHeading": "Before and After MICA Surgery",
  "micaBeforeXrayAlt": "X-ray of Hallux Valgus Before MICA Surgery with Red Alignment Guide Lines",
  "micaBefore": "Before Surgery",
  "micaAfterXrayAlt": "X-ray of the Corrected Foot After MICA Surgery with Mint Alignment Guide Lines",
  "micaAfter": "After Surgery",
  "micaBeforePhotoAlt": "Bilateral Foot X-rays Before MICA Surgery with Red Alignment Guide Lines",
  "micaAfterPhotoAlt": "Bilateral Foot X-rays After MICA Surgery with Mint Alignment Guide Lines",
  "arthroscopyTitle": "Wrist & Ankle Arthroscopy",
  "arthroscopyDescription": "A minimally invasive procedure that uses small incisions to examine the wrist and ankle joints and precisely diagnose and treat joint damage.",
  "arthroscopyHeroAlt": "HEUNG-K Hospital Medical Team Performing Wrist and Ankle Arthroscopy",
  "arthroscopyToggleContext": "Wrist & Ankle Arthroscopy Details ",
  "arthroscopyWristAlt": "Illustration of Wrist Arthroscopy Showing the Joint Interior",
  "arthroscopyWristLead": "Wrist arthroscopy is a minimally invasive procedure that allows surgeons to examine and treat conditions inside the wrist joint.",
  "arthroscopyWristBody1": "Unlike traditional open surgery, wrist arthroscopy uses small incisions of approximately 5-10 mm to insert a camera and view joint structures in real time using high-resolution imaging.",
  "arthroscopyWristBody2": "This enables precise diagnosis and treatment of ligament, cartilage, and triangular fibrocartilage complex (TFCC) injuries.",
  "arthroscopyWristIndicationsPrefix": "When Is ",
  "arthroscopyWristIndicationsEmphasis": "Wrist Arthroscopy",
  "arthroscopyWristIndicationsSuffix": "Needed?",
  "arthroscopyWrist1Title": "Triangular Fibrocartilage Complex (TFCC) Injury",
  "arthroscopyWrist1Body": "Damage to the tissue supporting the little-finger side of the wrist can cause pain and limited movement.",
  "arthroscopyWrist2Title": "Wrist Ligament Tears and Instability",
  "arthroscopyWrist2Body": "Damaged wrist ligaments can cause pain and joint instability.",
  "arthroscopyWrist3Title": "Early-Stage Wrist Arthritis",
  "arthroscopyWrist3Body": "Early cartilage wear in the wrist can cause pain, stiffness, and restricted movement.",
  "arthroscopyWrist4Title": "Removal of Intra-Articular Loose Bodies",
  "arthroscopyWrist4Body": "Removes loose bone or cartilage fragments that cause pain or catching in the wrist joint.",
  "arthroscopyWrist5Title": "Chronic Wrist Pain of Unknown Cause",
  "arthroscopyWrist5Body": "Helps identify and treat the cause of persistent wrist pain when other examinations are inconclusive.",
  "arthroscopyAnkleAlt": "Illustration of Ankle Arthroscopy Showing the Joint Interior",
  "arthroscopyAnkleLead": "A minimally invasive procedure that uses small incisions and an arthroscope to diagnose and treat conditions inside the ankle joint.",
  "arthroscopyAnkleBody1": "Ankle arthroscopy uses incisions smaller than 1 cm to insert an arthroscope and specialized instruments for diagnosis and treatment.",
  "arthroscopyAnkleBody2": "Because the ankle joint is smaller than the knee or shoulder, a 2.5 mm arthroscope designed for small joints is used for precise treatment.",
  "arthroscopyAnkleIndicationsPrefix": "When Is ",
  "arthroscopyAnkleIndicationsEmphasis": "Ankle Arthroscopy",
  "arthroscopyAnkleIndicationsSuffix": "Needed?",
  "arthroscopyAnkle1Title": "Persistent Pain After an Ankle Sprain",
  "arthroscopyAnkle1Body": "Evaluates and treats joint damage when pain or discomfort persists after an ankle sprain.",
  "arthroscopyAnkle2Title": "Cartilage Damage and Osteochondritis Dissecans (OCD)",
  "arthroscopyAnkle2Body": "Diagnoses and treats cartilage and bone damage that causes ankle pain or restricted movement.",
  "arthroscopyAnkle3Title": "Intra-Articular Loose Bodies",
  "arthroscopyAnkle3Body": "Removes loose bone or cartilage fragments causing pain or catching inside the joint.",
  "arthroscopyAnkle4Title": "Ankle Impingement Syndrome",
  "arthroscopyAnkle4Body": "Diagnoses and treats painful impingement of bone or soft tissue during ankle movement.",
  "arthroscopyAnkle5Title": "Assessment of Ankle Instability",
  "arthroscopyAnkle5Body": "Helps identify causes of instability by examining the joint in patients with recurrent ankle sprains or giving way.",
  "arthroscopyBenefitsHeadingEmphasis": "HEUNG-K Hospital",
  "arthroscopyBenefitsHeadingSuffix": "What Sets Our Wrist & Ankle Arthroscopy Apart?",
  "arthroscopyBenefits1Title": "Precise Diagnosis and Treatment",
  "arthroscopyBenefits1Body": "Directly identifies and treats subtle ligament and cartilage damage that may be difficult to detect on MRI or X-rays.",
  "arthroscopyBenefits2Title": "Preservation of Joint Function",
  "arthroscopyBenefits2Body": "Targets damaged areas while preserving as much healthy tissue as possible.",
  "arthroscopyBenefits3Title": "Smaller Incisions, Less Pain and Scarring",
  "arthroscopyBenefits3Body": "Small incisions of approximately 0.5-1 cm help minimize tissue damage, scarring, pain, and bleeding.",
  "arthroscopyBenefits4Title": "Reduced Risk of Postoperative Complications",
  "arthroscopyBenefits4Body": "Precise, minimally invasive techniques may reduce tissue damage and the risk of complications such as infection and inflammation, supporting faster recovery.",
  "arthroscopyBenefits5Title": "Faster Recovery and Return to Daily Activities",
  "arthroscopyBenefits5Body": "Shorter procedures and faster recovery may help patients return to daily activities sooner."
};

// ── 24. 척추전담센터 · 배너 ──
const spine = {
  "hospital": "HEUNG-K Hospital",
  "title": "Spine Center",
  "description1": "From precise diagnosis and non-surgical treatment to complex surgery and rehabilitation.",
  "description2": "Our specialized spine treatment system aims to provide comprehensive, high-quality treatment.",
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
  "bessListLabel": "Spine Center Treatment",
  "bessTitle": "Biportal Endoscopic Spine Surgery (BESS)",
  "bessDescription": "A minimally invasive spinal procedure that uses a magnified endoscopic view to precisely remove tissue compressing the nerves.",
  "bessHeroAlt": "Biportal Endoscopic Spine Surgery Guided by Endoscopic Imaging",
  "bessToggleContext": "BESS Details ",
  "bessLead": "A minimally invasive spinal procedure using two small incisions for enhanced visualization and precise treatment.",
  "bessBody1": "BESS uses two small incisions: one for the endoscope and the other for surgical instruments to remove tissue compressing the spinal nerves.",
  "bessBody2": "Independent movement of the endoscope and instruments provides a wide, magnified view for precise surgery.",
  "bessIntroAlt": "Postoperative Photo Showing 9 mm and 7 mm BESS Incisions",
  "bessBenefitsHeading": "Benefits of BESS",
  "bessBenefit1Title": "Minimally Invasive Surgery",
  "bessBenefit1Body": "Incisions as small as 0.7 cm may help reduce muscle damage, pain, and postoperative inflammation.",
  "bessBenefit2Title": "Precise Diagnosis and Treatment",
  "bessBenefit2Body": "High-resolution endoscopic imaging allows detailed examination and treatment of spinal conditions.",
  "bessBenefit3Title": "Reduced Risk of Complications",
  "bessBenefit3Body": "Targeted treatment helps preserve healthy surrounding tissues and may reduce postoperative complications.",
  "bessBenefit4Title": "Faster Recovery and Return to Daily Activities",
  "bessBenefit4Body": "Reduced tissue damage may support faster recovery and an earlier return to daily activities.",
  "bessCasesHeading": "Before and After BESS Surgery",
  "bessBefore1Alt": "Preoperative MRI Showing Nerve Compression Before BESS",
  "bessBefore": "Before Surgery",
  "bessAfter1Alt": "Postoperative MRI Highlighting the Decompressed Nerve After BESS",
  "bessAfter": "After Surgery",
  "bessBefore2Alt": "Endoscopic Image of the Affected Area Before BESS",
  "bessAfter2Alt": "Endoscopic Image of the Treated Area After BESS",
  "fusionTitle": "Minimally Invasive Spinal Fusion",
  "fusionDescription": "A minimally invasive spinal procedure combining nerve decompression and spinal stabilization through small incisions.",
  "fusionHeroAlt": "HEUNG-K Hospital Medical Team Performing Minimally Invasive Spinal Fusion",
  "fusionToggleContext": "Minimally Invasive Spinal Fusion Details ",
  "fusionLead": "A minimally invasive spinal fusion procedure using an interbody cage and screws to stabilize the spine.",
  "fusionBody1": "Through four small incisions, damaged bone and ligament tissue are removed to relieve nerve compression. The affected disc is then removed, an interbody cage is inserted for support, and the vertebrae are secured with specialized screws.",
  "fusionBody2": "Compared with traditional open fusion, this approach uses smaller incisions and aims to reduce tissue damage. It may be considered for spondylolisthesis, severe spinal stenosis with instability, or cases where decompression alone cannot maintain spinal stability.",
  "fusionIntroAlt": "Illustration of an Interbody Cage and Fixation Screws Supporting the Spine",
  "fusionBenefitsHeading": "Benefits of Biportal Endoscopic Spinal Fusion",
  "fusionBenefit1Body": "Specialized instruments, including spinal endoscopes and surgical microscopes, support precise surgery.",
  "fusionBenefit2Body": "May reduce tissue damage compared with conventional surgery and help lower the risk of recurrence.",
  "fusionBenefit3Body": "May shorten hospital stays and rehabilitation, supporting an earlier return to daily activities.",
  "fusionBenefit4Body": "Enhanced surgical visualization allows precise treatment of affected areas.",
  "fusionComparisonHeading": "Comparison with Conventional Spinal Fusion",
  "fusionOpenHeading": "Conventional Spinal Fusion",
  "fusionFusionHeading": "Biportal Endoscopic Spinal Fusion",
  "fusionCompare1Open": "20 cm",
  "fusionCompare1Label": "Incision Size",
  "fusionCompare1Fusion": "2-3 cm",
  "fusionCompare2Open": "Potential for Lasting Muscle and Ligament Damage",
  "fusionCompare2Label": "Muscle Damage",
  "fusionCompare2Fusion": "Reduced Muscle Damage",
  "fusionCompare3Open": "Larger Incisions May Increase Infection and Complication Risks",
  "fusionCompare3Label": "Complications",
  "fusionCompare3Fusion": "Potentially Lower Risk of Infection and Complications",
  "fusionCompare4Open": "Greater Postoperative Pain May Require More Pain Medication",
  "fusionCompare4Label": "Pain",
  "fusionCompare4Fusion": "Less Postoperative Pain May Reduce the Need for Pain Medication",
  "fusionCompare5Open": "Greater Blood Loss May Require Transfusion",
  "fusionCompare5Label": "Blood Loss",
  "fusionCompare5Fusion": "Smaller Incisions and Reduced Blood Loss",
  "fusionCompare6Open": "Rehabilitation May Take Up to One Year, Delaying Return to Daily Activities",
  "fusionCompare6Label": "Recovery Time",
  "fusionCompare6Fusion": "May Return to Vigorous Exercise After 6 Months",
  "fusionCompare7Open": "4 Hours",
  "fusionCompare7Label": "Operating Time",
  "fusionCompare7Fusion": "2-3 Hours",
  "fusionCasesHeading": "Biportal Endoscopic Spinal Fusion Cases",
  "fusionBefore1Alt": "Lateral Lumbar Spine X-ray Before Spinal Fusion",
  "fusionBefore": "Before Surgery",
  "fusionAfter1Alt": "Lateral Lumbar Spine X-ray Showing Fixation Hardware After Spinal Fusion",
  "fusionAfter": "After Surgery",
  "fusionBefore2Alt": "Frontal Lumbar Spine X-ray Before Spinal Fusion",
  "fusionAfter2Alt": "Frontal Lumbar Spine X-ray Showing Fixation Hardware After Spinal Fusion"
};

// ── 26. 의료진 상세 소개 ──
const doctors = {
  "kicker": "OUR DOCTORS",
  "galleryLabel": "HEUNG-K Hospital Medical Team in Clinical Practice and Research",
  "row1Label": "Upper Row of Medical Team Photos",
  "photo01Alt": "HEUNG-K Hospital Medical Team Performing Surgery",
  "photo02Alt": "Medical Team Performing Surgery Using Arthroscopic Imaging",
  "photo03Alt": "Medical Team Discussing a Case in the Operating Room",
  "photo04Alt": "Medical Team Assessing a Patient's Knee",
  "photo05Alt": "HEUNG-K Hospital Medical Team Collaborating During Surgery",
  "photo06Alt": "Medical Professional Consulting with a Patient",
  "photo07Alt": "Medical Professional Explaining Diagnostic Images",
  "row2Label": "Lower Row of Medical Team Photos",
  "photo08Alt": "Medical Team Examining the Surgical Site",
  "photo09Alt": "HEUNG-K Hospital Medical Team Preparing for Surgery",
  "photo10Alt": "Medical Professional Delivering a Medical Lecture",
  "photo11Alt": "Medical Team Performing Endoscopic Surgery",
  "photo12Alt": "Medical Team Focused on Surgery",
  "photo13Alt": "Medical Professionals Participating in Surgical Training",
  "photo14Alt": "HEUNG-K Hospital Medical Team in the Operating Room",
  "pause": "Pause Photo Slideshow",
  "resume": "Play Photo Slideshow",
  "hospital": "HEUNG-K Hospital",
  "title": "Meet Our Doctors",
  "carouselLabel": "HEUNG-K Hospital Doctors Introduction Slideshow",
  "profiles": [
    {
      "slideLabel": "Dr. Jong-Keun Kim - Medical Director Profile",
      "portraitAlt": "Dr. Jong-Keun Kim, Medical Director",
      "specialty": "Orthopedic Surgeon",
      "name": "Jong-Keun Kim",
      "role": "Medical Director",
      "specialties": "Knee (Minimally Invasive Knee Replacement / Patient-Specific Instrumentation (PSI) / Arthroscopy), Revision Joint Replacement, Stem Cell Therapy, Chondrocyte Implantation, Hip (Joint Replacement / Arthroscopy), Sports Injuries, Foot & Ankle",
      "careers": [
        [
          "Ph.D., Seoul National University College of Medicine",
          "Master's Degree, Seoul National University College of Medicine",
          "Bachelor's Degree, Yonsei University College of Medicine",
          "Clinical Consultant, Department of Orthopedic Surgery, Seoul National University Hospital",
          "Adjunct Professor, Department of Orthopedic Surgery, Seoul National University College of Medicine",
          "Clinical Fellow, Department of Orthopedic Surgery, Seoul National University College of Medicine",
          "Head of the Department of Orthopedic Surgery, Hanil General Hospital",
          "Orthopedic Specialist, Gachon University Gil Medical Center"
        ],
        [
          "Invited Participant, HSS Academic Visitor Program (AVP), Hospital for Special Surgery (Manhattan, New York, USA)",
          "Visiting Scholar, Cornell University (Manhattan, New York, USA)",
          "Robotic-Assisted Joint Replacement Training, Stryker Center (Mahwah, New Jersey, USA)",
          "Asia-Pacific Advanced ATTUNE Course (Bangkok, Thailand)",
          "AO Trauma Principles Course Certification"
        ]
      ]
    },
    {
      "slideLabel": "Dr. Su-Keon Lee - Profile",
      "portraitAlt": "Dr. Su-Keon Lee",
      "specialty": "Orthopedic Surgeon",
      "name": "Su-Keon Lee ",
      "role": "Dr.",
      "specialties": "Shoulder (Arthroscopy / Joint Replacement), Elbow, Sports Injuries, Shoulder Fractures",
      "careers": [
        [
          "Ph.D., Yonsei University College of Medicine",
          "Master's Degree, Yonsei University College of Medicine",
          "Bachelor's Degree, Yonsei University College of Medicine",
          "Adjunct Professor, Yonsei University College of Medicine",
          "Senior Head, Department of Orthopedic Surgery, Gwangmyeong Sungae Hospital",
          "Professor, Kwandong University College of Medicine",
          "Member, Society History Committee, The Korean Orthopaedic Association",
          "Board Member, Gyeonggi Branch, The Korean Orthopaedic Association"
        ],
        [
          "Medical Company Commander, Republic of Korea Army Special Warfare Command",
          "Clinical Fellow, Severance Hospital, Yonsei University College of Medicine",
          "Resident and Intern, Severance Hospital, Yonsei University College of Medicine",
          "Designated Interpreter for the Initial JCI Accreditation Survey, Severance Hospital"
        ]
      ]
    },
    {
      "slideLabel": "Dr. Myung Chul Lee - Honorary Director Profile",
      "portraitAlt": "Dr. Myung Chul Lee, Honorary Director",
      "specialty": "Specialist in Internal Medicine and Nuclear Medicine",
      "name": "Myung Chul Lee",
      "role": "Honorary Director",
      "careers": [
        [
          "Emeritus Professor, Seoul National University College of Medicine",
          "Head of the Hospital History Research Office, Seoul National University Hospital",
          "Vice Chairman, Seoul National University Development Foundation",
          "Associate Dean for Academic Affairs, Seoul National University College of Medicine",
          "Professor and Chair, Department of Nuclear Medicine, Seoul National University College of Medicine",
          "President, Gachon University Gil Medical Center (Vice President, Gachon University Medical Campus)",
          "Director, Armed Forces Capital Hospital",
          "President, The Korean Academy of Science and Technology (KAST); Vice Chair, Presidential Advisory Council on Science and Technology",
          "Lifetime Member, The Korean Academy of Science and Technology (KAST) and National Academy of Medicine of Korea",
          "President, Korean Association for Radiation Promotion",
          "Chairman of the Board, Institut Pasteur Korea"
        ],
        [
          "Inducted into the Korean Academy of Medical Sciences Hall of Fame (2024)",
          "Recipient of the Order of Science and Technology Merit, Changjo Medal (1st Class)",
          "President, World Federation of Nuclear Medicine and Biology (WFNMB)",
          "President, World Council on Isotopes (WCI)",
          "Research Fellow, Johns Hopkins University School of Medicine",
          "Graduate, Seoul National University College of Medicine",
          "Ph.D. in Internal Medicine, Seoul National University College of Medicine",
          "Specialist in Internal Medicine and Nuclear Medicine"
        ]
      ]
    },
    {
      "slideLabel": "Dr. Joon Young Lee - Profile",
      "portraitAlt": "Dr. Joon Young Lee",
      "specialty": "Orthopedic Surgeon",
      "name": "Joon Young Lee",
      "role": "Dr.",
      "specialties": "Knee (Minimally Invasive Knee Replacement / Patient-Specific Instrumentation (PSI) / Arthroscopy), Sports Injuries (Cruciate Ligament Tears), Hip Replacement, Stem Cell Therapy, Foot Conditions",
      "careers": [
        [
          "Master's Degree, Seoul National University College of Medicine",
          "Adjunct Professor, Department of Orthopedic Surgery, Seoul National University Hospital",
          "Clinical Consultant, Department of Orthopedic Surgery, Seoul National University Hospital",
          "Clinical Fellow, Department of Orthopedic Surgery, Seoul National University Hospital",
          "Resident, Department of Orthopedic Surgery, Seoul National University Hospital",
          "Outstanding Medical Intern, Seoul National University Hospital",
          "Head of Aviation Medicine Clinic, 11th and 16th Fighter Wings, Republic of Korea Air Force",
          "Bachelor's Degree, Chung-Ang University College of Medicine"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Sehun Kim - Profile",
      "portraitAlt": "Dr. Sehun Kim",
      "specialty": "Orthopedic Surgeon",
      "name": "Sehun Kim",
      "role": "Dr.",
      "specialties": "Hand & Foot Disorders, Hand & Foot Microsurgery, Growth Clinic",
      "careers": [
        [
          "Orthopedic Surgeon, Samsung Medical Center",
          "Medical Intern, Samsung Medical Center",
          "Master's Degree, Kyungpook National University School of Medicine",
          "Clinical Professor, Department of Orthopedic Surgery (Hand, Foot, and Pediatric Orthopedics), SMG-SNU Boramae Medical Center",
          "Clinical Instructor, Department of Orthopedic Surgery, Seoul National University Hospital",
          "Chief, Department of Orthopedic Surgery, Hanil General Hospital"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Nam Ik Cho - Center Director Profile",
      "portraitAlt": "Dr. Nam Ik Cho, Spine Center Director",
      "specialty": "Spine Surgeon",
      "name": "Nam Ik Cho",
      "role": "Spine Center Director",
      "specialties": "Endoscopic Spine Surgery, Cervical Artificial Disc Replacement, Complex Revision Spine Surgery, Minimally Invasive Spinal Fusion, Osteoporotic Fractures, Non-Surgical Injection Therapy, Cervical and Lumbar Disc Disorders, Spinal Stenosis, Spondylolisthesis, Traumatic Spinal Fractures, Scoliosis",
      "careers": [
        [
          "Graduate, Korea University College of Medicine",
          "Medical Intern, Korea University College of Medicine Affiliated Hospital",
          "Orthopedic Surgeon, Bundang Jesaeng Hospital",
          "Clinical Fellow in Spine Surgery, Department of Orthopedic Surgery, Asan Medical Center",
          "Clinical Fellow, Scoliosis Center, Department of Orthopedic Surgery, Asan Medical Center",
          "Adjunct Professor, Department of Orthopedic Surgery, Asan Medical Center",
          "Former Medical Director, Just Hospital",
          "Former Director, Spine Center, Pyeongchon Woori Hospital",
          "Former Director, Spine Center, Yonsei Barocheok Hospital"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Sang Hoon Yoon - Profile",
      "portraitAlt": "Dr. Sang Hoon Yoon",
      "specialty": "Neurosurgeon",
      "name": "Sang Hoon Yoon",
      "role": "Dr.",
      "specialties": "Spinal Disorders (Cervical, Thoracic, and Lumbar), Neurological Disorders, Non-Surgical Injections and Procedures, Spinal Tumors, Minimally Invasive Spine Surgery, Gait Problems Related to Spinal Disorders, Obesity Treatment",
      "careers": [
        [
          "Doctoral Degree in Medicine, Seoul National University",
          "Master's Degree in Medicine, Seoul National University",
          "Resident, Department of Neurosurgery, Seoul National University Hospital",
          "Professor, Department of Neurosurgery and Spine Center, Seoul National University Bundang Hospital",
          "Head of the Department of Neurosurgery, Armed Forces Capital Hospital",
          "Director, Clinical Medical Research Center, Armed Forces Capital Hospital"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Seung Jin Jung - Profile",
      "portraitAlt": "Dr. Seung Jin Jung",
      "specialty": "Family Medicine Specialist",
      "name": "Seung Jin Jung",
      "role": "Dr.",
      "specialties": "Gastrointestinal Disorders, Upper Gastrointestinal Endoscopy & Colonoscopy, Weight Management, Chronic Disease Management, Abdominal Ultrasound",
      "careers": [
        [
          "Ph.D., Korea University College of Medicine",
          "Master's Degree, Korea University College of Medicine",
          "Bachelor's Degree, Korea University College of Medicine",
          "Adjunct Professor, Korea University College of Medicine",
          "Resident, Korea University Guro Hospital",
          "Director, Health Promotion Center, Gimpo Woori Hospital"
        ],
        [
          "Director of Medical Education and Training, Gimpo Woori Hospital",
          "Head of the Department of Family Medicine, Gimpo Woori Hospital",
          "Head of the Department of Family Medicine, Cheongju Hana Hospital",
          "Head of the Department of Family Medicine, Sahmyook Medical Center"
        ]
      ]
    },
    {
      "slideLabel": "Dr. Gyeong Hwa Lee - Profile",
      "portraitAlt": "Dr. Gyeong Hwa Lee",
      "specialty": "Internal Medicine Specialist",
      "name": "Gyeong Hwa Lee",
      "role": "Dr.",
      "specialties": "Gastroenterology, Upper Gastrointestinal Endoscopy & Colonoscopy, Chronic Disease Management",
      "careers": [
        [
          "Completed Clinical Fellowship in Gastroenterology, NHIS Ilsan Hospital",
          "Graduate, Gachon University School of Medicine",
          "Completed Internship and Residency, Gachon University Gil Medical Center",
          "Board-Certified Specialist in Gastrointestinal Endoscopy"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Jin-Hyoung Park - Profile",
      "portraitAlt": "Dr. Jin-Hyoung Park",
      "specialty": "Anesthesiologist",
      "name": "Jin-Hyoung Park",
      "role": "Dr.",
      "specialties": "Complex Regional Anesthesia, Geriatric Anesthesia, Anesthesia for Patients with Chronic Conditions",
      "careers": [
        [
          "Adjunct Professor, Seoul National University College of Medicine",
          "Clinical Assistant Professor, Seoul National University Bundang Hospital, Seoul National University College of Medicine",
          "Clinical Fellow, Samsung Medical Center",
          "Resident and Intern, Samsung Medical Center",
          "Master's Degree, Sungkyunkwan University School of Medicine",
          "Bachelor's Degree, Konyang University College of Medicine"
        ],
        []
      ]
    },
    {
      "slideLabel": "Dr. Junsung Kim - Profile",
      "portraitAlt": "Dr. Junsung Kim",
      "specialty": "Radiologist",
      "name": "Junsung Kim",
      "role": "Dr.",
      "specialties": "MRI & CT Interpretation, Echocardiography, Ultrasound (Musculoskeletal, Abdominal, Thyroid, Head & Neck, Breast, Thoracic)",
      "careers": [
        [
          "Clinical Fellow, Department of Radiology, Asan Medical Center",
          "Clinical Assistant Professor, Department of Radiology, Kangbuk Samsung Hospital",
          "Completed Doctoral Coursework, The Catholic University of Korea College of Medicine",
          "Completed Master's Coursework, The Catholic University of Korea College of Medicine",
          "Bachelor's Degree, The Catholic University of Korea College of Medicine",
          "Head of the Department of Radiology, Armed Forces Yangju Hospital",
          "Resident, Department of Radiology, Seoul St. Mary's Hospital",
          "Medical Intern, Catholic Medical Center"
        ],
        []
      ]
    }
  ],
  "openDetails": "View Doctor Profile",
  "specialtiesHeading": "Areas of Expertise",
  "careerHeading": "Education & Experience",
  "previous": "Previous Doctor",
  "next": "Next Doctor",
  "slidePause": "Pause Doctor Slideshow",
  "slideResume": "Play Doctor Slideshow",
  "dialogLabel": "Doctor Profile",
  "closeDetails": "Close Doctor Profile",
  "specialty": "Orthopedic Surgeon",
  "name": "Jong-Keun Kim",
  "role": "Medical Director",
  "portraitAlt": "Dr. Jong-Keun Kim, Medical Director",
  "specialties": "Knee (Minimally Invasive Knee Replacement / Patient-Specific Instrumentation (PSI) / Arthroscopy), Revision Joint Replacement, Stem Cell Therapy, Chondrocyte Implantation, Hip (Joint Replacement / Arthroscopy), Sports Injuries, Foot & Ankle",
  "career01": "Ph.D., Seoul National University College of Medicine",
  "career02": "Master's Degree, Seoul National University College of Medicine",
  "career03": "Bachelor's Degree, Yonsei University College of Medicine",
  "career04": "Clinical Consultant, Department of Orthopedic Surgery, Seoul National University Hospital",
  "career05": "Adjunct Professor, Department of Orthopedic Surgery, Seoul National University College of Medicine",
  "career06": "Clinical Fellow, Department of Orthopedic Surgery, Seoul National University College of Medicine",
  "career07": "Head of the Department of Orthopedic Surgery, Hanil General Hospital",
  "career08": "Orthopedic Specialist, Gachon University Gil Medical Center",
  "career09": "Invited Participant, HSS Academic Visitor Program (AVP), Hospital for Special Surgery (Manhattan, New York, USA)",
  "career10": "Visiting Scholar, Cornell University (Manhattan, New York, USA)",
  "career11": "Robotic-Assisted Joint Replacement Training, Stryker Center (Mahwah, New Jersey, USA)",
  "career12": "Asia-Pacific Advanced ATTUNE Course (Bangkok, Thailand)",
  "career13": "AO Trauma Principles Course Certification"
};

// ── 27. 흥K병원 둘러보기 ──
const facilities = {
  "kicker": "FACILITIES",
  "title": "Explore HEUNG-K Hospital",
  "description": "We put patients first,\nstriving not only to provide better treatment but also to help them return to everyday life.",
  "floorsLabel": "Select a Floor",
  "floors": {
    "5": {
      "description": "Joint & Spine Center, Radiology Center (X-ray, MRI-1, CT), Rehabilitation & Manual Therapy Center",
      "heading": "5F - Joint & Spine Center",
      "label": "5F"
    },
    "6": {
      "description": "Internal Medicine Center, Health Screening Center, Central Operating Center, Growth Clinic, Endoscopy Center",
      "heading": "6F - Central Operating Center",
      "label": "6F"
    },
    "7": {
      "description": "Inpatient Ward",
      "heading": "7F - Inpatient Ward",
      "label": "7F"
    },
    "8": {
      "description": "Inpatient Ward, MRI-2, Laboratory Medicine Center, Conference Room, Administrative Offices",
      "heading": "8F - Inpatient Ward",
      "label": "8F"
    },
    "9": {
      "description": "Rooftop Garden",
      "heading": "9F - Rooftop Garden",
      "label": "9F"
    }
  },
  "previous": "Previous Photo Gallery",
  "thumbnails": "Photo Gallery",
  "next": "Next Photo Gallery",
  "pending": "In Preparation"
};

// ── 28. 흥K 360 SERVICE ──
const service360 = {
  "allInOne": "All-in-One",
  "wordmarkAlt": "360° Care",
  "titleStart": "From Arrival to Treatment and Departure,",
  "titleJoin": " Seamlessly Connected by ",
  "titleBrand": "HEUNG-K",
  "introStart": "Whether you're visiting Korea for treatment or living here as an international patient, HEUNG-K Hospital offers our ",
  "introEmphasis": "All-in-One 360° Care System",
  "introEnd": "to make your care more convenient and coordinated.",
  "distance": "Just 25 Minutes from Incheon Airport!",
  "overviewTitle": "HEUNG-K Hospital's ",
  "overviewEmphasis": "360° Care for International Patients",
  "overviewDescription": "From consultations and appointments to examinations, surgery, interpretation, accommodation, transportation, and post-treatment care, our coordinated support helps ease the challenges of staying in Korea so patients can focus on treatment and recovery.",
  "step1Alt": "Illustration of Online Booking and Scheduling",
  "step1": "Online Booking & Scheduling",
  "step2Alt": "Illustration of Airport Pickup Service",
  "step2": "Airport Pickup",
  "step3Alt": "Illustration of Registration and Medical Examinations",
  "step3": "Registration & Examinations",
  "step4Alt": "Illustration of Medical Consultation",
  "step4": "Medical Consultation",
  "step5Alt": "Illustration of Surgery",
  "step5": "Surgery",
  "step6Alt": "Illustration of Rehabilitation",
  "step6": "Rehabilitation",
  "step7Alt": "Illustration of Return Travel",
  "step7": "Return Home",
  "hotelCost": "Accommodation costs are not included.",
  "pickupHeading": "AIRPORT PICKUP SERVICE",
  "pickupTitle": "A Comfortable Journey from Airport to Hospital",
  "pickupDescription": "HEUNG-K Hospital offers pickup services from Incheon International Airport\nto ensure a comfortable arrival for patients and their companions.",
  "advanceReservation": "ADVANCE RESERVATION REQUIRED",
  "pickupAlt": "Patient and Companion Traveling by Car from the Airport",
  "accommodationHeading": "ACCOMMODATION",
  "accommodationTitle": "Accommodation for a Comfortable Treatment Journey",
  "accommodationDescription": "HEUNG-K Hospital helps international patients and their companions find and book accommodations near the hospital and in key areas of Siheung and Incheon for a comfortable stay during treatment.",
  "reservation": "RESERVATION",
  "hotelListLabel": "Browse Accommodation Options by Swiping Left or Right",
  "hotel1Alt": "Paradise City Hotel",
  "hotel2Alt": "Sheraton Grand Incheon Hotel",
  "hotel3Alt": "Wave M Hotel East",
  "hotel4Alt": "Le Collective Siheung Wavepark",
  "hotel5Alt": "Mockup of the INSPIRE Resort Card",
  "pauseHotels": "Pause Hotel Slideshow",
  "playHotels": "Play Hotel Slideshow"
};

// ── 29. 진료 예약 ──
const reservation = {
  "kicker": "RESERVATION",
  "title": "Book an Appointment",
  "description": "Please enter your information exactly as it appears on your passport.",
  "painLegend": "Select Pain Area",
  "painTitle": "Where Are You Experiencing Pain?",
  "kneeAlt": "Knee Pain Area Illustration",
  "knee": "Knee",
  "shoulderAlt": "Shoulder Pain Area Illustration",
  "shoulder": "Shoulder",
  "handAlt": "Hand and Elbow Pain Area Illustration",
  "hand": "Hand & Elbow",
  "footAlt": "Foot and Ankle Pain Area Illustration",
  "foot": "Foot & Ankle",
  "spineAlt": "Lower Back Pain Area Illustration",
  "spine": "Lower Back",
  "patientLegend": "Patient Information",
  "patientTitle": "Please Enter Your Information",
  "givenName": "First Name",
  "familyName": "Last Name",
  "birthday": "Date of Birth",
  "gender": "Gender",
  "symptoms": "Symptoms",
  "nationality": "Nationality",
  "email": "Email Address",
  "phone": "Phone Number",
  "appointmentDate": "Preferred Appointment Date",
  "insurance": "Insurance",
  "insuranceYes": "Yes",
  "insuranceNational": "Korean National Health Insurance (NHIS)",
  "insuranceInternational": "International Health Insurance",
  "insuranceNone": "No",
  "otherInsurance": "Other Insurance",
  "consent": "I consent to the collection and use of my personal information.",
  "submit": "Request an Appointment",
  "unavailable": "Online appointment requests are not yet available. Please contact the hospital for assistance."
};

// ── 30. 진료 예약 · 성별/국적 선택 항목 ──
const reviewOptions = {
  "genderChoose": "Please Select",
  "male": "Male",
  "female": "Female",
  "unspecified": "Prefer Not to Say",
  "nationalityChoose": "Please Select",
  "korea": "South Korea",
  "usa": "United States",
  "uk": "United Kingdom",
  "china": "China",
  "japan": "Japan",
  "russia": "Russia",
  "mongolia": "Mongolia",
  "india": "India",
  "saudi": "Saudi Arabia",
  "vietnam": "Vietnam",
  "other": "Other"
};

// ── 31. 고객문의센터 · 지도 ──
const customerCenter = {
  "kicker": "CS CENTER",
  "title": "Patient Support Center",
  "description": "We provide prompt, accurate assistance with medical consultations, appointments, hospitalization, and treatment.\nAt HEUNG-K Hospital, our support team takes the time to understand each patient's needs and provide attentive, personalized service.",
  "hours": "Clinic Hours",
  "closed": "Closed on Sundays and Public Holidays",
  "day0": "Weekdays (Mon-Fri)",
  "day1": "Weekday Evening Hours",
  "day2": "Saturday",
  "day3": "Lunch Break",
  "address": "HEUNG-K Hospital, 5F-8F, 22, Neunggokbeonyeong-gil, Siheung-si, Gyeonggi-do, South Korea",
  "copyAddress": "Copy Hospital Address",
  "mapTitle": "HEUNG-K Hospital Location on Google Maps",
  "phone": "Phone",
  "copyPhone": "Copy Phone Number",
  "fax": "Fax",
  "copyFax": "Copy Fax Number",
  "email": "Email",
  "copyEmail": "Copy Email Address",
  "copyDone": "Copied to Clipboard",
  "copyFailed": "Press and hold or select the text to copy it.",
  "openMap": "View on Google Maps"
};

// ── 32. 오시는 길 · 푸터 ──
const contact = {
  "kicker": "CONTACT",
  "title": "Directions",
  "incheonAlt": "View of Incheon International Airport",
  "incheon": "Incheon International Airport",
  "incheonTime": "25 Minutes",
  "carLabel": "By Car or Taxi",
  "carDescription": "Search for HEUNG-K Hospital in your navigation app or enter the address below.",
  "address": "22, Neunggokbeonyeong-gil, Siheung-si, Gyeonggi-do, South Korea",
  "subwayLabel": "By Subway",
  "incheonRail": "Take the AREX All-Stop Train from Incheon Airport Terminal 1 or Terminal 2 Station.",
  "incheonStep0": "Get off at Gimpo International Airport Station.",
  "incheonStep1": "Transfer to the Seohae Line toward Wonsi.",
  "incheonStep2": "Get off at Siheung Neunggok Station and take Exit 3.",
  "gimpoAlt": "View of Gimpo International Airport",
  "gimpo": "Gimpo International Airport",
  "gimpoTime": "30 Minutes",
  "gimpoRail": "Take the Seohae Line to Siheung Neunggok Station, travel 9 stops, and use Exit 3.",
  "gimpoStep0": "Take the Seohae Line toward Wonsi from Gimpo International Airport Station.",
  "gimpoStep1": "Travel 9 stops and get off at Siheung Neunggok Station.",
  "gimpoStep2": "Get off at Siheung Neunggok Station and take Exit 3.",
  "logoAlt": "HEUNG-K Hospital",
  "footerLabel0": "Medical Director, HEUNG-K Hospital",
  "footerValue0": "Jong-Keun Kim",
  "footerLabel1": "Business Registration Number",
  "footerLabel2": "Address",
  "footerValue2": "HEUNG-K Hospital, 5F-8F, 22, Neunggokbeonyeong-gil, Siheung-si, Gyeonggi-do 14999, South Korea",
  "footerLabel3": "TEL",
  "footerLabel4": "FAX",
  "footerLabel5": "E.MAIL",
  "blogLabel": "HEUNG-K Hospital Naver Blog",
  "kakaoLabel": "HEUNG-K Hospital KakaoTalk Channel",
  "youtubeLabel": "HEUNG-K Hospital YouTube Channel",
  "instagramLabel": "HEUNG-K Hospital Instagram",
  "copyright": "Copyright(C) 2024 흥K병원. All rights reserved."
};

// 사이트 연결용: 위 문구들을 기존 번역 키 구조로 모읍니다. 이 아래는 수정하지 않습니다.
const quickMenu = {
  "label": "Quick menu",
  "open": "Open quick menu",
  "close": "Close quick menu",
  "phone": "Call us",
  "reserve": "Appointment",
  "email": "Email us",
  "hours": "Opening hours",
  "weekdays": "MON–FRI",
  "saturday": "SAT"
};

const doctorMenu = {
  "label": "Choose doctors by department",
  "knee": "Knee Center",
  "shoulder": "Shoulder Center",
  "handFoot": "Hand & Foot Center",
  "spine": "Spine Center",
  "internal": "Internal Medicine",
  "radiology": "Radiology",
  "anesthesia": "Anesthesiology & Pain Medicine"
};

// 검색 결과 및 공유 미리보기 문구. 기존 본문 번역은 유지합니다.
const seo = {
  "title": "HEUNG-K Hospital | Joint & Spine Care in Korea",
  "description": "Explore knee, shoulder, hand, foot and spine care at HEUNG-K Hospital in Siheung, Korea. Meet our doctors and find appointments, facilities and international patient services."
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
