import { pair as p } from "./translations.js";
export const scenarios = [
  {
    id: "bank-call",
    topic: "calls",
    title: p(
      "“I’m calling from your bank…”",
      "“మీ బ్యాంకు నుంచి మాట్లాడుతున్నాను…”",
    ),
    message: p(
      "Caller: “I need to update your account. Tell me the OTP that just arrived.”",
      "కాలర్: “మీ ఖాతాను అప్‌డేట్ చేయాలి. ఇప్పుడే వచ్చిన OTP చెప్పండి.”",
    ),
    choices: [
      p(
        "End the call and contact my bank myself",
        "కాల్ ముగించి బ్యాంకును నేనే సంప్రదిస్తాను",
      ),
      p("Share the OTP to finish the update", "అప్‌డేట్ కోసం OTP చెబుతాను"),
      p(
        "Ask the caller to send an identity card",
        "కాలర్‌ను గుర్తింపు కార్డు పంపమంటాను",
      ),
    ],
    feedback: [
      p(
        "Good pause. Use contact details inside your bank app or on your bank card.",
        "మంచి నిర్ణయం. బ్యాంకు యాప్‌లో లేదా కార్డుపై ఉన్న సంప్రదింపు వివరాలు వాడండి.",
      ),
      p(
        "An OTP can authorise sensitive activity. Keep it private and end the call.",
        "OTPతో ముఖ్యమైన చర్యకు అనుమతి ఇవ్వవచ్చు. దాన్ని రహస్యంగా ఉంచి కాల్ ముగించండి.",
      ),
      p(
        "An identity card image can be copied. It cannot independently verify a caller.",
        "గుర్తింపు కార్డు చిత్రాన్ని కాపీ చేయవచ్చు. దానితో కాలర్‌ను నిర్ధారించలేం.",
      ),
    ],
    sign: p(
      "An unexpected caller asks for a confidential code.",
      "అనుకోని కాలర్ రహస్య కోడ్ అడుగుతున్నారు.",
    ),
    next: p(
      "Contact the bank using a number you independently know is official. Never disclose OTPs, PINs or passwords.",
      "అధికారికమని స్వతంత్రంగా తెలిసిన నంబర్ ద్వారా బ్యాంకును సంప్రదించండి. OTP, PIN, పాస్‌వర్డ్ చెప్పకండి.",
    ),
  },
  {
    id: "prize",
    topic: "messages",
    title: p("A prize you didn’t enter for", "పాల్గొనకుండానే బహుమతి వచ్చిందా?"),
    message: p(
      "Message: “Congratulations! You won a phone. Pay ₹499 today to release your prize.”",
      "సందేశం: “అభినందనలు! మీకు ఫోన్ బహుమతి వచ్చింది. పొందడానికి ఇవాళే ₹499 చెల్లించండి.”",
    ),
    choices: [
      p(
        "Pause and verify with the organiser independently",
        "ఆగి నిర్వాహకులతో స్వతంత్రంగా నిర్ధారించుకుంటాను",
      ),
      p("Pay before the offer expires", "ఆఫర్ ముగిసేలోగా చెల్లిస్తాను"),
      p(
        "Forward it so friends can claim too",
        "స్నేహితులూ పొందాలని వారికి పంపుతాను",
      ),
    ],
    feedback: [
      p(
        "A safer choice. Do not use the message’s own contact details as proof.",
        "జాగ్రత్తైన నిర్ణయం. సందేశంలోని సంప్రదింపు వివరాలనే రుజువుగా తీసుకోకండి.",
      ),
      p(
        "An upfront fee and time pressure are reasons to stop and check.",
        "ముందస్తు రుసుము, సమయ ఒత్తిడి ఉంటే ఆగి పరిశీలించాలి.",
      ),
      p(
        "Forwarding unverified offers can expose others to the same request.",
        "నిర్ధారించని ఆఫర్ పంపితే ఇతరులూ ప్రమాదంలో పడవచ్చు.",
      ),
    ],
    sign: p(
      "Unexpected reward, advance payment and urgency.",
      "అనుకోని బహుమతి, ముందస్తు చెల్లింపు, తొందరపెట్టడం.",
    ),
    next: p(
      "Do not pay or share information. Verify through a known official source.",
      "చెల్లించకండి, వివరాలు ఇవ్వకండి. తెలిసిన అధికారిక మార్గంలో నిర్ధారించుకోండి.",
    ),
  },
  {
    id: "delivery",
    topic: "messages",
    title: p("“Your parcel is waiting”", "“మీ పార్సెల్ వేచి ఉంది”"),
    message: p(
      "Message: “Address missing. Update now at example.com/parcel or your package will be returned.”",
      "సందేశం: “చిరునామా లేదు. example.com/parcelలో ఇప్పుడే మార్చండి. లేకపోతే పార్సెల్ వెనక్కి వెళ్తుంది.”",
    ),
    choices: [
      p(
        "Open the delivery app I already use",
        "నేను వాడే డెలివరీ యాప్‌ను తెరుస్తాను",
      ),
      p(
        "Open the link and enter my details",
        "లింక్ తెరిచి నా వివరాలు ఇస్తాను",
      ),
      p("Reply with my address", "నా చిరునామాను బదులుగా పంపుతాను"),
    ],
    feedback: [
      p(
        "Check the order in your existing app or an independently verified official website.",
        "మీ యాప్‌లో లేదా స్వతంత్రంగా నిర్ధారించిన అధికారిక వెబ్‌సైట్‌లో ఆర్డర్ చూడండి.",
      ),
      p(
        "An unfamiliar link could collect private details. Verify the delivery first.",
        "తెలియని లింక్ వ్యక్తిగత వివరాలు సేకరించవచ్చు. ముందుగా డెలివరీని నిర్ధారించండి.",
      ),
      p(
        "Replying can reveal information to an unverified sender.",
        "బదులిస్తే నిర్ధారించని వ్యక్తికి వివరాలు చేరవచ్చు.",
      ),
    ],
    sign: p(
      "An unfamiliar link paired with a threat of a returned parcel.",
      "తెలియని లింక్‌తో పాటు పార్సెల్ వెనక్కి వెళ్తుందని ఒత్తిడి.",
    ),
    next: p(
      "Check whether you expect a parcel. Use your known delivery service directly.",
      "పార్సెల్ రావాల్సి ఉందో చూడండి. తెలిసిన డెలివరీ సేవను నేరుగా వాడండి.",
    ),
  },
  {
    id: "job",
    topic: "messages",
    title: p(
      "A job offer with an upfront fee",
      "ముందస్తు రుసుము అడిగే ఉద్యోగం",
    ),
    message: p(
      "Message: “You are selected for a work-from-home role. Pay ₹1,500 for registration before your interview.”",
      "సందేశం: “ఇంటి నుంచి చేసే ఉద్యోగానికి ఎంపికయ్యారు. ఇంటర్వ్యూ ముందు రిజిస్ట్రేషన్‌కు ₹1,500 చెల్లించండి.”",
    ),
    choices: [
      p(
        "Check the employer’s official careers page",
        "సంస్థ అధికారిక ఉద్యోగాల పేజీ చూస్తాను",
      ),
      p("Pay the registration fee", "రిజిస్ట్రేషన్ రుసుము చెల్లిస్తాను"),
      p("Send identity documents first", "ముందు గుర్తింపు పత్రాలు పంపుతాను"),
    ],
    feedback: [
      p(
        "Verify the vacancy and hiring process independently before sharing or paying.",
        "వివరాలు ఇవ్వడానికి, చెల్లించడానికి ముందు ఉద్యోగం, ఎంపిక విధానాన్ని నిర్ధారించండి.",
      ),
      p(
        "A request for advance money needs careful checking. Do not rush.",
        "ముందస్తు డబ్బు అభ్యర్థనను జాగ్రత్తగా పరిశీలించాలి. తొందరపడకండి.",
      ),
      p(
        "Identity documents are sensitive. Do not send them to an unverified recruiter.",
        "గుర్తింపు పత్రాలు ముఖ్యమైనవి. నిర్ధారించని రిక్రూటర్‌కు పంపకండి.",
      ),
    ],
    sign: p(
      "Selection without checks and money requested before an interview.",
      "పరిశీలన లేకుండానే ఎంపిక, ఇంటర్వ్యూకు ముందే డబ్బు అడగడం.",
    ),
    next: p(
      "Contact the organisation through its independently verified official website.",
      "స్వతంత్రంగా నిర్ధారించిన అధికారిక వెబ్‌సైట్ ద్వారా సంస్థను సంప్రదించండి.",
    ),
  },
  {
    id: "remote-access",
    topic: "calls",
    title: p(
      "“Install this app so I can help”",
      "“సహాయం కోసం ఈ యాప్ పెట్టండి”",
    ),
    message: p(
      "Caller: “I can fix your payment. Install this screen-sharing app and give me access.”",
      "కాలర్: “మీ చెల్లింపు సమస్య పరిష్కరిస్తాను. ఈ స్క్రీన్ షేరింగ్ యాప్ పెట్టి యాక్సెస్ ఇవ్వండి.”",
    ),
    choices: [
      p(
        "Decline and use support inside my payment app",
        "తిరస్కరించి చెల్లింపు యాప్‌లో సహాయం పొందుతాను",
      ),
      p(
        "Install it and allow screen sharing",
        "ఇన్‌స్టాల్ చేసి స్క్రీన్ షేరింగ్ అనుమతిస్తాను",
      ),
      p(
        "Keep my payment app open while they watch",
        "వారు చూస్తుండగా చెల్లింపు యాప్ తెరిచి ఉంచుతాను",
      ),
    ],
    feedback: [
      p(
        "Using known in-app support avoids handing device access to an unverified caller.",
        "యాప్‌లోని తెలిసిన సహాయం వాడితే తెలియని కాలర్‌కు పరికరం యాక్సెస్ ఇవ్వాల్సిన అవసరం లేదు.",
      ),
      p(
        "Remote access may expose your screen and controls. Do not grant it to unknown callers.",
        "రిమోట్ యాక్సెస్‌తో తెర, నియంత్రణలు ఇతరులకు అందవచ్చు. తెలియని కాలర్లకు ఇవ్వకండి.",
      ),
      p(
        "Sharing a payment screen can reveal sensitive details. End the session.",
        "చెల్లింపు తెర చూపితే రహస్య వివరాలు బయటపడవచ్చు. సెషన్ ముగించండి.",
      ),
    ],
    sign: p(
      "An unsolicited request for screen sharing or device control.",
      "అడగకుండానే స్క్రీన్ షేరింగ్ లేదా పరికర నియంత్రణ కోరడం.",
    ),
    next: p(
      "If access was granted, stop the connection and contact your bank using trusted support.",
      "యాక్సెస్ ఇచ్చి ఉంటే కనెక్షన్ ఆపి, నమ్మకమైన సహాయం ద్వారా బ్యాంకును సంప్రదించండి.",
    ),
  },
  {
    id: "relative",
    topic: "messages",
    title: p(
      "A familiar photo. An urgent request.",
      "తెలిసిన ఫోటో. అత్యవసర అభ్యర్థన.",
    ),
    message: p(
      "New account: “It’s me, Ravi. My phone broke. Send ₹3,000 now. Please don’t call.”",
      "కొత్త ఖాతా: “నేను రవిని. ఫోన్ పాడైంది. ఇప్పుడే ₹3,000 పంపు. దయచేసి కాల్ చేయకు.”",
    ),
    choices: [
      p(
        "Call Ravi on the number I already know",
        "నాకు తెలిసిన రవి నంబర్‌కు కాల్ చేస్తాను",
      ),
      p(
        "Send money because I recognise the photo",
        "ఫోటో తెలుసు కాబట్టి డబ్బు పంపుతాను",
      ),
      p(
        "Ask a personal question and then pay",
        "వ్యక్తిగత ప్రశ్న అడిగి చెల్లిస్తాను",
      ),
    ],
    feedback: [
      p(
        "A separate trusted contact method is a safer way to verify.",
        "వేరే నమ్మకమైన సంప్రదింపు మార్గంలో నిర్ధారించుకోవడం మంచిది.",
      ),
      p(
        "A name and photo can be copied. They do not establish identity.",
        "పేరు, ఫోటో కాపీ చేయవచ్చు. వాటితో వ్యక్తిని నిర్ధారించలేం.",
      ),
      p(
        "Personal facts may be public or known to others. Verify through a separate known channel.",
        "వ్యక్తిగత విషయాలు ఇతరులకు తెలిసి ఉండవచ్చు. వేరే తెలిసిన మార్గంలో నిర్ధారించండి.",
      ),
    ],
    sign: p(
      "A new account, pressure to pay and refusal of a call.",
      "కొత్త ఖాతా, చెల్లించాలని ఒత్తిడి, కాల్ వద్దనడం.",
    ),
    next: p(
      "Speak with the person using their previously known number before making a payment.",
      "చెల్లించే ముందు ఆ వ్యక్తికి ఇప్పటికే తెలిసిన నంబర్‌లో మాట్లాడండి.",
    ),
  },
  {
    id: "account-block",
    topic: "messages",
    title: p("“Your account will be blocked”", "“మీ ఖాతా బ్లాక్ అవుతుంది”"),
    message: p(
      "Message: “Your account closes in 10 minutes. Verify your password at example.com/verify.”",
      "సందేశం: “10 నిమిషాల్లో మీ ఖాతా మూసేస్తాం. example.com/verifyలో పాస్‌వర్డ్ నిర్ధారించండి.”",
    ),
    choices: [
      p(
        "Open the official app myself to check",
        "అధికారిక యాప్‌ను నేనే తెరిచి చూస్తాను",
      ),
      p(
        "Type my password into the linked page",
        "లింక్‌లోని పేజీలో పాస్‌వర్డ్ ఇస్తాను",
      ),
      p("Reply with my account details", "నా ఖాతా వివరాలు బదులుగా పంపుతాను"),
    ],
    feedback: [
      p(
        "Good. Use a trusted route to check your account and contact official support if needed.",
        "మంచిది. తెలిసిన మార్గంలో ఖాతా చూసి అవసరమైతే అధికారిక సహాయం పొందండి.",
      ),
      p(
        "Pressure can make it harder to check a link. Do not submit passwords there.",
        "ఒత్తిడితో లింక్ పరిశీలించడం కష్టం. అక్కడ పాస్‌వర్డ్ ఇవ్వకండి.",
      ),
      p(
        "Keep account information private. An unexpected sender has not been verified.",
        "ఖాతా వివరాలు రహస్యంగా ఉంచండి. అనుకోని పంపినవారిని నిర్ధారించలేదు.",
      ),
    ],
    sign: p(
      "An immediate deadline and a link asking for a password.",
      "వెంటనే గడువు, పాస్‌వర్డ్ అడిగే లింక్.",
    ),
    next: p(
      "Ignore the supplied link. Check the official service through your known app or saved address.",
      "పంపిన లింక్ వాడకండి. తెలిసిన యాప్ లేదా భద్రపరిచిన చిరునామాతో అధికారిక సేవ చూడండి.",
    ),
  },
  {
    id: "screenshot",
    topic: "payments",
    title: p(
      "“I paid. Here’s the screenshot.”",
      "“చెల్లించాను. ఇదిగో స్క్రీన్‌షాట్.”",
    ),
    message: p(
      "A buyer sends a picture showing ₹800 paid and asks you to hand over the goods immediately.",
      "కొనుగోలుదారు ₹800 చెల్లించినట్లు చిత్రం పంపి వెంటనే వస్తువులు ఇవ్వమంటున్నారు.",
    ),
    choices: [
      p(
        "Check the transaction in my own payment app",
        "నా చెల్లింపు యాప్‌లో లావాదేవీ చూస్తాను",
      ),
      p(
        "Hand over goods based on the screenshot",
        "స్క్రీన్‌షాట్ చూసి వస్తువులు ఇస్తాను",
      ),
      p(
        "Enter my PIN to receive the money",
        "డబ్బు అందుకోవడానికి నా PIN ఇస్తాను",
      ),
    ],
    feedback: [
      p(
        "Use your own transaction records to confirm the payment and its status.",
        "మీ సొంత లావాదేవీ రికార్డుల్లో చెల్లింపు, స్థితిని నిర్ధారించండి.",
      ),
      p(
        "A screenshot can be altered or unrelated to your account. Check your own records.",
        "స్క్రీన్‌షాట్ మార్చవచ్చు లేదా మీ ఖాతాకు సంబంధం లేకపోవచ్చు. మీ రికార్డులు చూడండి.",
      ),
      p(
        "You do not need to enter a UPI PIN to receive money. Never share it.",
        "డబ్బు అందుకోవడానికి UPI PIN నమోదు అవసరం లేదు. దాన్ని చెప్పకండి.",
      ),
    ],
    sign: p(
      "A screenshot is offered as the only proof and you are hurried.",
      "స్క్రీన్‌షాట్ మాత్రమే రుజువుగా చూపి తొందరపెట్టడం.",
    ),
    next: p(
      "Check the amount, sender and final status in your own payment app or bank record.",
      "మీ చెల్లింపు యాప్ లేదా బ్యాంకు రికార్డులో మొత్తం, పంపినవారు, తుది స్థితి చూడండి.",
    ),
  },
].map((s) => ({
  ...s,
  sourceOrganisation: "NPCI / CERT-In",
  sourceUrl: "https://www.npci.org.in/fraud-awareness",
  reviewed: "2026-11-05",
}));
