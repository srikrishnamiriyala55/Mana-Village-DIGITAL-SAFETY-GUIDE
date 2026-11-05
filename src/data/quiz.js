import { pair as p } from "./translations.js";
import { guides } from "./guides.js";
const extra = [
  [
    "payments",
    p("What should you check before paying?", "చెల్లించే ముందు ఏం చూడాలి?"),
    p("The recipient and amount", "అందుకునే వ్యక్తి, మొత్తం"),
    p("Only the colour of the app", "యాప్ రంగు మాత్రమే"),
    p(
      "Confirm whom you are paying and how much before authorising.",
      "అనుమతి ఇచ్చే ముందు ఎవరికి ఎంత చెల్లిస్తున్నారో నిర్ధారించండి.",
    ),
  ],
  [
    "payments",
    p(
      "Do you need a UPI PIN to receive money?",
      "డబ్బు అందుకోవడానికి UPI PIN అవసరమా?",
    ),
    p("No", "అవసరం లేదు"),
    p("Yes, share it with the sender", "అవును, పంపేవారికి చెప్పాలి"),
    p(
      "Receiving money does not require your UPI PIN. Keep it private.",
      "డబ్బు అందుకోవడానికి UPI PIN అవసరం లేదు. దాన్ని రహస్యంగా ఉంచండి.",
    ),
  ],
  [
    "payments",
    p(
      "Someone sends a payment screenshot. How do you confirm?",
      "చెల్లింపు స్క్రీన్‌షాట్ పంపితే ఎలా నిర్ధారిస్తారు?",
    ),
    p(
      "Check my own app or bank transaction record",
      "నా యాప్ లేదా బ్యాంకు లావాదేవీ రికార్డు చూస్తాను",
    ),
    p("Trust the screenshot alone", "స్క్రీన్‌షాట్ మాత్రమే నమ్ముతాను"),
    p(
      "An image can be changed. Check your own transaction status.",
      "చిత్రాన్ని మార్చవచ్చు. మీ లావాదేవీ స్థితి చూడండి.",
    ),
  ],
  [
    "calls",
    p(
      "A bank caller asks for your OTP. What next?",
      "బ్యాంకు కాలర్ OTP అడిగితే?",
    ),
    p(
      "End the call and contact official bank support",
      "కాల్ ముగించి అధికారిక బ్యాంకు సహాయం పొందుతాను",
    ),
    p("Read out the OTP", "OTP చెబుతాను"),
    p(
      "Never disclose confidential codes to callers.",
      "రహస్య కోడ్‌లను కాలర్లకు ఎప్పుడూ చెప్పకండి.",
    ),
  ],
  [
    "messages",
    p(
      "A prize message asks for an advance fee. What is safer?",
      "బహుమతికి ముందస్తు రుసుము అడిగితే ఏది మంచిది?",
    ),
    p("Pause and verify independently", "ఆగి స్వతంత్రంగా నిర్ధారించుకోవడం"),
    p("Pay immediately", "వెంటనే చెల్లించడం"),
    p(
      "Unexpected rewards with advance fees require caution.",
      "ముందస్తు రుసుము అడిగే అనుకోని బహుమతుల పట్ల జాగ్రత్త అవసరం.",
    ),
  ],
  [
    "messages",
    p(
      "A delivery link is unfamiliar. What should you do?",
      "డెలివరీ లింక్ తెలియనిదైతే?",
    ),
    p(
      "Check my known delivery app directly",
      "తెలిసిన డెలివరీ యాప్‌లో నేరుగా చూస్తాను",
    ),
    p("Enter my address into the link", "లింక్‌లో చిరునామా ఇస్తాను"),
    p(
      "Verify an expected order through a trusted route.",
      "తెలిసిన మార్గంలో ఆర్డర్‌ను నిర్ధారించుకోండి.",
    ),
  ],
  [
    "calls",
    p(
      "An unknown caller asks for remote access. What is safer?",
      "తెలియని కాలర్ రిమోట్ యాక్సెస్ అడిగితే?",
    ),
    p("Decline and use trusted support", "తిరస్కరించి నమ్మకమైన సహాయం పొందడం"),
    p("Install and share my screen", "ఇన్‌స్టాల్ చేసి తెర చూపించడం"),
    p(
      "Remote access can expose your screen and device controls.",
      "రిమోట్ యాక్సెస్‌తో తెర, పరికర నియంత్రణలు ఇతరులకు అందవచ్చు.",
    ),
  ],
  [
    "privacy",
    p(
      "A relative’s photo appears on a new account asking for money. What next?",
      "కొత్త ఖాతాలో బంధువు ఫోటోతో డబ్బు అడిగితే?",
    ),
    p(
      "Call their already-known number",
      "వారికి తెలిసిన పాత నంబర్‌కు కాల్ చేస్తాను",
    ),
    p("Pay because the photo matches", "ఫోటో సరిపోయింది కాబట్టి చెల్లిస్తాను"),
    p(
      "Photos can be copied. Verify using a separate trusted channel.",
      "ఫోటోలు కాపీ చేయవచ్చు. వేరే నమ్మకమైన మార్గంలో నిర్ధారించండి.",
    ),
  ],
  [
    "messages",
    p(
      "Does urgency prove a message is genuine?",
      "తొందరపెట్టే సందేశం నిజమైనదని భావించవచ్చా?",
    ),
    p("No, pause and independently check", "కాదు, ఆగి స్వతంత్రంగా చూడాలి"),
    p("Yes, act immediately", "అవును, వెంటనే చర్య తీసుకోవాలి"),
    p(
      "Pressure is a reason to check, not proof of identity.",
      "ఒత్తిడి ఉంటే పరిశీలించాలి. అది గుర్తింపుకు రుజువు కాదు.",
    ),
  ],
  [
    "payments",
    p(
      "Where should you seek help for an unauthorised transaction?",
      "అనుమతి లేని లావాదేవీకి ఎక్కడ సహాయం పొందాలి?",
    ),
    p(
      "My bank or provider and official reporting channels",
      "నా బ్యాంకు లేదా సేవ, అధికారిక ఫిర్యాదు మార్గాలు",
    ),
    p(
      "A stranger promising guaranteed recovery",
      "డబ్బు తిరిగి ఇప్పిస్తానని హామీ ఇచ్చే అపరిచితుడు",
    ),
    p(
      "Contact trusted official support promptly. Recovery cannot be guaranteed.",
      "వెంటనే నమ్మకమైన అధికారిక సహాయం పొందండి. డబ్బు తిరిగి వస్తుందని హామీ లేదు.",
    ),
  ],
  [
    "websites",
    p(
      "Does a search advertisement prove a service is official?",
      "సెర్చ్ ప్రకటన ఉంటే సేవ అధికారికమైనదేనా?",
    ),
    p(
      "No, verify the organisation and full domain",
      "కాదు, సంస్థను పూర్తి డొమైన్‌ను నిర్ధారించాలి",
    ),
    p(
      "Yes, the first result is always official",
      "అవును, మొదటి ఫలితం ఎప్పుడూ అధికారికమే",
    ),
    p(
      "Advertising placement is not proof of official status.",
      "ప్రకటనగా కనిపించడం అధికారికతకు రుజువు కాదు.",
    ),
  ],
  [
    "privacy",
    p(
      "What personal details should you submit on this learning website?",
      "ఈ అభ్యాస వెబ్‌సైట్‌లో ఏ వ్యక్తిగత వివరాలు ఇవ్వాలి?",
    ),
    p("None", "ఏవీ ఇవ్వకూడదు"),
    p("My Aadhaar, PIN and bank account", "నా ఆధార్, PIN, బ్యాంకు ఖాతా"),
    p(
      "This website is for learning and does not collect confidential details.",
      "ఈ వెబ్‌సైట్ అభ్యాసం కోసమే. రహస్య వివరాలు సేకరించదు.",
    ),
  ],
];
export const quizBank = [
  ...guides.map((g) => ({
    id: g.id,
    topic: g.topic,
    q: g.q,
    options: g.options,
    correct: 0,
    explain: g.explain,
  })),
  ...extra.map(([topic, q, a, b, explain], i) => ({
    id: "q" + i,
    topic,
    q,
    options: [a, b],
    correct: 0,
    explain,
  })),
].map((q) => ({
  ...q,
  options: [
    ...q.options,
    p(
      "I’m not sure — I need to revisit this topic",
      "నాకు తెలియదు — ఈ అంశం మళ్లీ చదవాలి",
    ),
  ],
}));
// Rotate and shuffle both questions and answers for each new attempt.
export function makeAttempt() {
  const shuffled = [...quizBank];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return {
    items: shuffled
      .slice(0, 10)
      .map((q) => ({
        id: q.id,
        order: [0, 1, 2].sort(() => Math.random() - 0.5),
      })),
    index: 0,
    answers: [],
    finished: false,
  };
}
