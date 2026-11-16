import { pair as p } from "./translations.js";
export const reviewed = "2026-11-05";
export const services = [
  {
    name: p(
      "National Cybercrime Reporting Portal",
      "జాతీయ సైబర్ నేరాల ఫిర్యాదు పోర్టల్",
    ),
    organisation: "Ministry of Home Affairs / I4C",
    url: "https://www.cybercrime.gov.in/",
    desc: p(
      "Report cybercrime through the official national portal.",
      "అధికారిక జాతీయ పోర్టల్‌లో సైబర్ నేరాల ఫిర్యాదు చేయండి.",
    ),
  },
  {
    name: p("NPCI payment safety", "NPCI చెల్లింపు భద్రత"),
    organisation: "NPCI",
    url: "https://www.npci.org.in/fraud-awareness",
    desc: p(
      "Read precautions for digital payments and common misleading requests.",
      "డిజిటల్ చెల్లింపులు, తప్పుదారి పట్టించే అభ్యర్థనల పట్ల జాగ్రత్తలు చదవండి.",
    ),
  },
  {
    name: p("National Portal of India", "భారత జాతీయ పోర్టల్"),
    organisation: "National Informatics Centre",
    url: "https://www.india.gov.in/",
    desc: p(
      "Find government information and links to public services.",
      "ప్రభుత్వ సమాచారం, ప్రజా సేవల లింకులు కనుగొనండి.",
    ),
  },
  {
    name: p("DigiLocker", "డిజిలాకర్"),
    organisation: "MeitY",
    url: "https://www.digilocker.gov.in/",
    desc: p(
      "Access digital documents through the official document service.",
      "అధికారిక పత్రాల సేవ ద్వారా డిజిటల్ పత్రాలు పొందండి.",
    ),
  },
  {
    name: p("CERT-In awareness booklets", "CERT-In అవగాహన పుస్తకాలు"),
    organisation: "CERT-In",
    url: "https://www.cert-in.org.in/AwarenessBooklets.jsp",
    desc: p(
      "Read educational material on protecting devices and information.",
      "పరికరాలు, వివరాల రక్షణ గురించి అవగాహన పుస్తకాలు చదవండి.",
    ),
  },
];
// Telugu and English awareness videos selected for the village training programme.
export const videos = [
  {
    id: "YDO5kHMwVbA",
    title: p(
      "Clicked it? I became suspicious and stopped",
      "క్లిక్ చేశావా? అనుమానం వచ్చి ఆపేశా",
    ),
    topic: "messages",
    language: "te",
    organisation: "AP Smart News",
    sourceUrl: "https://youtu.be/YDO5kHMwVbA",
    desc: p(
      "A Telugu cyber-awareness video for students about stopping when a link or message feels suspicious.",
      "లింక్ లేదా సందేశం అనుమానంగా అనిపించినప్పుడు ఆగి పరిశీలించాల్సిన అవసరాన్ని విద్యార్థులకు వివరించే తెలుగు సైబర్ అవగాహన వీడియో.",
    ),
  },
  {
    id: "3gssW1n67GU",
    title: p("UPI fraud awareness in Telugu", "తెలుగులో UPI మోసాల అవగాహన"),
    topic: "payments",
    language: "te",
    organisation: "NPCI",
    sourceUrl: "https://www.youtube.com/watch?v=3gssW1n67GU",
    desc: p(
      "NPCI explains common UPI fraud methods and the precautions people should follow while making digital payments.",
      "డిజిటల్ చెల్లింపులు చేసేటప్పుడు ఎదురయ్యే సాధారణ UPI మోసాలు, పాటించాల్సిన జాగ్రత్తలను NPCI తెలుగులో వివరిస్తుంది.",
    ),
  },
  {
    id: "mSf0-L7ulD8",
    title: p(
      "UPI fraud awareness: Digital Payment Abhiyan",
      "UPI మోసాల అవగాహన: డిజిటల్ పేమెంట్ అభియాన్",
    ),
    topic: "payments",
    language: "te",
    organisation: "DSCI",
    sourceUrl: "https://www.youtube.com/watch?v=mSf0-L7ulD8",
    desc: p(
      "A Telugu explanation of UPI payment fraud, including the rule that a UPI PIN is entered to send money, not to receive it.",
      "UPI ద్వారా డబ్బు పంపేటప్పుడే PIN నమోదు చేయాలి, డబ్బు స్వీకరించడానికి PIN అవసరం లేదనే ముఖ్యమైన నియమంతో UPI మోసాలను తెలుగులో వివరిస్తుంది.",
    ),
  },
  {
    id: "UasqK0JA6co",
    title: p("UPI fraud awareness", "UPI మోసాల అవగాహన – ఆంగ్లం"),
    topic: "payments",
    language: "en",
    organisation: "NPCI",
    sourceUrl: "https://www.youtube.com/watch?v=UasqK0JA6co",
    desc: p(
      "An English awareness video from NPCI explaining common UPI fraud methods and how to avoid them.",
      "సాధారణ UPI మోసాల పద్ధతులు, వాటిని ఎలా నివారించాలో NPCI ఆంగ్లంలో వివరించే అవగాహన వీడియో.",
    ),
  },
  {
    id: "Nq1eq2S9iRQ",
    title: p(
      "UPI fraud awareness: Digital Payment Abhiyan",
      "UPI మోసాల అవగాహన: డిజిటల్ పేమెంట్ అభియాన్ – ఆంగ్లం",
    ),
    topic: "payments",
    language: "en",
    organisation: "DSCI",
    sourceUrl: "https://www.youtube.com/watch?v=Nq1eq2S9iRQ",
    desc: p(
      "An English explanation of UPI payment fraud, including that a UPI PIN is used to send money and is not required to receive it.",
      "UPI ద్వారా డబ్బు పంపడానికి PIN వాడతారు, డబ్బు స్వీకరించడానికి PIN అవసరం లేదనే విషయంతో UPI మోసాలను ఆంగ్లంలో వివరిస్తుంది.",
    ),
  },
];
export const gallery = []; // Add real team photographs only. See README.
export const helpSituations = [
  [
    p(
      "I received a suspicious call or message",
      "అనుమానాస్పద కాల్ లేదా సందేశం వచ్చింది",
    ),
    p(
      "Pause. Do not reply, open unexpected links or share codes. Verify the request through a separate contact you trust. Keep relevant messages if you need to report.",
      "ఆగండి. బదులివ్వకండి, అనుకోని లింకులు తెరవకండి, కోడ్‌లు చెప్పకండి. వేరే నమ్మకమైన మార్గంలో అభ్యర్థనను నిర్ధారించండి. ఫిర్యాదు అవసరమైతే సంబంధిత సందేశాలు ఉంచుకోండి.",
    ),
  ],
  [
    p("I shared confidential information", "రహస్య సమాచారం ఇచ్చేశాను"),
    p(
      "Stop contact with the unknown person. If banking details or codes were shared, contact your bank or provider through official support immediately. Change affected passwords through the genuine app or website, preferably on a trusted device.",
      "తెలియని వ్యక్తితో సంప్రదింపు ఆపండి. బ్యాంకు వివరాలు లేదా కోడ్‌లు ఇచ్చి ఉంటే వెంటనే అధికారిక బ్యాంకు లేదా సేవ సహాయం పొందండి. నమ్మకమైన పరికరంలో అసలు యాప్ లేదా వెబ్‌సైట్ ద్వారా ప్రభావిత పాస్‌వర్డ్‌లు మార్చండి.",
    ),
  ],
  [
    p(
      "I noticed an unauthorised transaction",
      "నా అనుమతి లేని లావాదేవీ కనిపించింది",
    ),
    p(
      "Contact your bank or payment provider promptly using trusted in-app support or official contact details. Call 1930 for financial cyber fraud and report at the official cybercrime portal. Keep transaction IDs, dates, amounts and messages for official reporting.",
      "యాప్‌లోని నమ్మకమైన సహాయం లేదా అధికారిక వివరాలతో వెంటనే బ్యాంకు లేదా చెల్లింపు సేవను సంప్రదించండి. ఆర్థిక సైబర్ మోసానికి 1930కి కాల్ చేసి అధికారిక సైబర్ నేరాల పోర్టల్‌లో ఫిర్యాదు చేయండి. అధికారిక ఫిర్యాదుకు లావాదేవీ ID, తేదీ, మొత్తం, సందేశాలు ఉంచుకోండి.",
    ),
  ],
  [
    p(
      "Someone is impersonating me online",
      "ఆన్‌లైన్‌లో ఎవరో నాలా నటిస్తున్నారు",
    ),
    p(
      "Preserve the account address and relevant screenshots. Report impersonation using the platform’s official reporting feature. Tell your contacts through a trusted channel and use the cybercrime portal to report cybercrime.",
      "ఖాతా చిరునామా, సంబంధిత స్క్రీన్‌షాట్‌లు ఉంచుకోండి. వేదిక అధికారిక ఫిర్యాదు సదుపాయంతో అనుకరణను నివేదించండి. మీ పరిచయాలకు నమ్మకమైన మార్గంలో తెలియజేయండి. సైబర్ నేరాన్ని పోర్టల్‌లో ఫిర్యాదు చేయండి.",
    ),
  ],
  [
    p(
      "I need help understanding a digital service",
      "డిజిటల్ సేవను అర్థం చేసుకోవడానికి సహాయం కావాలి",
    ),
    p(
      "Read the relevant guide and use support on the service’s verified official website. A trusted family member may help you understand the steps; keep passwords, PINs and OTPs private.",
      "సంబంధిత మార్గదర్శిని చదివి సేవ అధికారిక వెబ్‌సైట్‌లో సహాయం పొందండి. దశలు అర్థం చేసుకోవడానికి నమ్మకమైన కుటుంబ సభ్యుల సహాయం తీసుకోవచ్చు; పాస్‌వర్డ్, PIN, OTP రహస్యంగా ఉంచండి.",
    ),
  ],
];
