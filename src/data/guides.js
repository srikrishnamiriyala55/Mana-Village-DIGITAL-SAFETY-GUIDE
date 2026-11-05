import { pair as p } from "./translations.js";
export const guides = [
  {
    id: "screen-lock",
    icon: "LockKeyhole",
    topic: "basics",
    time: 3,
    title: p("Give your phone a screen lock", "మీ ఫోన్‌కు లాక్ పెట్టండి"),
    intro: p(
      "A screen lock helps protect your phone when it is out of your hands.",
      "ఫోన్ మీ చేతిలో లేనప్పుడు స్క్రీన్ లాక్ రక్షణ కల్పిస్తుంది.",
    ),
    steps: [
      p(
        "Open Settings and look for Security, Lock screen or Face ID & Passcode.",
        "సెట్టింగ్స్‌లో Security, Lock screen లేదా Face ID & Passcode చూడండి.",
      ),
      p(
        "Choose a strong PIN or password that others cannot easily guess.",
        "ఇతరులు సులభంగా ఊహించలేని PIN లేదా పాస్‌వర్డ్ ఎంచుకోండి.",
      ),
      p(
        "Set the phone to lock automatically after a short period. Check that it locks.",
        "కొద్దిసేపు వాడకపోతే స్వయంగా లాక్ అయ్యేలా పెట్టండి. లాక్ అవుతుందో చూడండి.",
      ),
    ],
    care: p(
      "Do not use your birthday or tell others your screen-lock code. Never enter it on this website.",
      "పుట్టిన తేదీని కోడ్‌గా పెట్టకండి. కోడ్ ఇతరులకు చెప్పకండి. ఈ వెబ్‌సైట్‌లో నమోదు చేయకండి.",
    ),
    q: p("Which is a better screen-lock choice?", "ఫోన్ లాక్‌కు ఏది మంచిది?"),
    options: [
      p(
        "A hard-to-guess code kept private",
        "రహస్యంగా ఉంచే, ఊహించడం కష్టమైన కోడ్",
      ),
      p("My birthday shared with everyone", "అందరికీ తెలిసిన నా పుట్టిన తేదీ"),
    ],
    explain: p(
      "A private, hard-to-guess code adds protection when your phone is unattended.",
      "ఫోన్ మీ దగ్గర లేనప్పుడు ఊహించడం కష్టమైన రహస్య కోడ్ రక్షణ ఇస్తుంది.",
    ),
  },
  {
    id: "trusted-apps",
    icon: "Download",
    topic: "basics",
    time: 4,
    title: p("Choose apps you can trust", "నమ్మకమైన యాప్‌లను ఎంచుకోండి"),
    intro: p(
      "Use your phone’s official app store and check who made the app.",
      "ఫోన్ అధికారిక యాప్ స్టోర్ వాడండి. యాప్‌ను ఎవరు తయారు చేశారో చూడండి.",
    ),
    steps: [
      p(
        "Open Google Play or Apple’s App Store directly.",
        "నేరుగా Google Play లేదా Apple App Store తెరవండి.",
      ),
      p(
        "Check the developer name against the organisation’s official website.",
        "యాప్ తయారీదారు పేరును సంస్థ అధికారిక వెబ్‌సైట్‌తో పోల్చండి.",
      ),
      p(
        "Read permissions and reviews before installing. Keep only apps you need.",
        "ఇన్‌స్టాల్ చేసే ముందు అనుమతులు, సమీక్షలు చదవండి. అవసరమైన యాప్‌లే ఉంచండి.",
      ),
    ],
    care: p(
      "A store listing does not guarantee safety. Avoid app files sent in messages and fake update pop-ups.",
      "స్టోర్‌లో ఉందంటే పూర్తిగా సురక్షితమని కాదు. సందేశాల్లో వచ్చిన యాప్ ఫైళ్లు, నకిలీ అప్‌డేట్ సూచనలను నివారించండి.",
    ),
    q: p(
      "Where should you start when installing an app?",
      "యాప్ ఇన్‌స్టాల్ చేయడానికి ఎక్కడ ప్రారంభించాలి?",
    ),
    options: [
      p("The official app store", "అధికారిక యాప్ స్టోర్"),
      p("An unknown message attachment", "తెలియని సందేశంలోని ఫైల్"),
    ],
    explain: p(
      "Start with the official store, then check the developer and permissions.",
      "అధికారిక స్టోర్‌లో మొదలుపెట్టి, తయారీదారు మరియు అనుమతులను పరిశీలించండి.",
    ),
  },
  {
    id: "permissions",
    icon: "SlidersHorizontal",
    topic: "privacy",
    time: 4,
    title: p("Decide what your apps can access", "యాప్ అనుమతులను పరిశీలించండి"),
    intro: p(
      "App permissions control access to your camera, contacts, location and more.",
      "కెమెరా, పరిచయాలు, లొకేషన్ వంటి వాటికి యాప్ యాక్సెస్‌ను అనుమతులు నియంత్రిస్తాయి.",
    ),
    steps: [
      p(
        "Open Settings, then Apps or Privacy and the permission manager.",
        "సెట్టింగ్స్‌లో Apps లేదా Privacy, తరువాత అనుమతుల విభాగం తెరవండి.",
      ),
      p(
        "Select an app and review what it can access.",
        "ఒక యాప్ ఎంచుకుని దానికి ఉన్న అనుమతులు చూడండి.",
      ),
      p(
        "Allow only access needed for the feature you use. Choose “while using” where suitable.",
        "మీరు వాడే పనికి అవసరమైన అనుమతులే ఇవ్వండి. తగిన చోట “వాడుతున్నప్పుడు మాత్రమే” ఎంచుకోండి.",
      ),
    ],
    care: p(
      "An unnecessary permission can expose information. A calculator should not need your contacts.",
      "అనవసర అనుమతి వివరాలను బయటపెట్టవచ్చు. కాలిక్యులేటర్‌కు మీ పరిచయాలు అవసరం ఉండకూడదు.",
    ),
    q: p(
      "A torch app asks for your contacts. What should you do?",
      "టార్చ్ యాప్ పరిచయాల అనుమతి అడిగితే ఏం చేయాలి?",
    ),
    options: [
      p(
        "Decline and review whether I need the app",
        "తిరస్కరించి ఆ యాప్ అవసరమో చూడాలి",
      ),
      p("Allow every permission", "అన్ని అనుమతులు ఇవ్వాలి"),
    ],
    explain: p(
      "Give access only when it is needed and you understand why.",
      "ఎందుకు అవసరమో అర్థమైనప్పుడు మాత్రమే అనుమతి ఇవ్వండి.",
    ),
  },
  {
    id: "website-address",
    icon: "Globe",
    topic: "websites",
    time: 5,
    title: p("Take a closer look at a link", "వెబ్ చిరునామాను పరిశీలించండి"),
    intro: p(
      "A familiar logo is easy to copy. Check the actual website address before entering information.",
      "తెలిసిన లోగోను కాపీ చేయడం సులభం. వివరాలు నమోదు చేసే ముందు అసలు వెబ్ చిరునామా చూడండి.",
    ),
    steps: [
      p(
        "Read the address in the browser bar. Check spelling and the main domain.",
        "బ్రౌజర్ చిరునామా బార్‌లో స్పెల్లింగ్, ప్రధాన డొమైన్ చూడండి.",
      ),
      p(
        "For example, india.gov.in.example.com belongs to example.com, not india.gov.in.",
        "ఉదాహరణకు india.gov.in.example.com అనేది example.comకు చెందుతుంది; india.gov.inకు కాదు.",
      ),
      p(
        "Use a known official directory or type an independently verified address yourself.",
        "తెలిసిన అధికారిక డైరెక్టరీ వాడండి లేదా స్వతంత్రంగా నిర్ధారించిన చిరునామాను మీరే టైప్ చేయండి.",
      ),
    ],
    care: p(
      "HTTPS encrypts the connection. It does not prove that the website or its offer is genuine.",
      "HTTPS కనెక్షన్‌ను గుప్తీకరిస్తుంది. వెబ్‌సైట్ లేదా ఆఫర్ నిజమైనదని అది నిరూపించదు.",
    ),
    q: p(
      "Does a padlock or HTTPS prove a website is genuine?",
      "తాళం గుర్తు లేదా HTTPS ఉంటే వెబ్‌సైట్ నిజమైనదేనా?",
    ),
    options: [
      p(
        "No. Check the domain and source too",
        "కాదు. డొమైన్, మూలాన్ని కూడా చూడాలి",
      ),
      p("Yes, always", "అవును, ఎప్పుడూ"),
    ],
    explain: p(
      "An encrypted connection can still lead to a misleading website.",
      "గుప్తీకరించిన కనెక్షన్ కూడా తప్పుదారి పట్టించే వెబ్‌సైట్‌కు తీసుకెళ్లవచ్చు.",
    ),
  },
  {
    id: "wifi",
    icon: "Wifi",
    topic: "basics",
    time: 3,
    title: p(
      "Connect to Wi-Fi carefully",
      "Wi-Fiకి జాగ్రత్తగా కనెక్ట్ అవ్వండి",
    ),
    intro: p(
      "Choose a connection you know, especially when dealing with private information.",
      "ముఖ్యంగా వ్యక్తిగత వివరాలు వాడేటప్పుడు తెలిసిన కనెక్షన్ ఎంచుకోండి.",
    ),
    steps: [
      p(
        "Confirm the network name with the owner before connecting.",
        "కనెక్ట్ అయ్యే ముందు యజమానితో నెట్‌వర్క్ పేరు నిర్ధారించుకోండి.",
      ),
      p(
        "Prefer your trusted mobile data or home network for sensitive tasks.",
        "రహస్య పనులకు నమ్మకమైన మొబైల్ డేటా లేదా ఇంటి నెట్‌వర్క్ వాడండి.",
      ),
      p(
        "Turn off automatic connections to open networks and forget networks you no longer need.",
        "ఓపెన్ నెట్‌వర్క్‌లకు ఆటో కనెక్షన్ ఆపండి. అవసరం లేని నెట్‌వర్క్‌లను తొలగించండి.",
      ),
    ],
    care: p(
      "A familiar network name alone does not prove who operates it. Avoid private transactions on unknown Wi-Fi.",
      "తెలిసిన పేరు ఉన్నంత మాత్రాన నెట్‌వర్క్ ఎవరిదో నిర్ధారణ కాదు. తెలియని Wi-Fiలో రహస్య లావాదేవీలు చేయకండి.",
    ),
    q: p(
      "Which connection is preferable for a sensitive task?",
      "రహస్య పనికి ఏ కనెక్షన్ మంచిది?",
    ),
    options: [
      p("My trusted mobile data", "నా నమ్మకమైన మొబైల్ డేటా"),
      p("An unknown open Wi-Fi network", "తెలియని ఓపెన్ Wi-Fi"),
    ],
    explain: p(
      "A trusted connection reduces exposure to unknown network operators.",
      "నమ్మకమైన కనెక్షన్ వాడితే తెలియని నెట్‌వర్క్ నిర్వాహకుల నుంచి ప్రమాదం తగ్గుతుంది.",
    ),
  },
  {
    id: "updates",
    icon: "RefreshCw",
    topic: "basics",
    time: 3,
    title: p("Keep your phone up to date", "ఫోన్‌ను అప్‌డేట్‌గా ఉంచండి"),
    intro: p(
      "Updates can fix security problems as well as improve how your phone works.",
      "అప్‌డేట్‌లు భద్రత లోపాలను సరిచేసి ఫోన్ పనితీరును మెరుగుపరచగలవు.",
    ),
    steps: [
      p(
        "Open Settings and find System update or Software update.",
        "సెట్టింగ్స్‌లో System update లేదా Software update చూడండి.",
      ),
      p(
        "Check for updates using a trusted connection with enough charge and storage.",
        "నమ్మకమైన కనెక్షన్, తగిన ఛార్జింగ్, ఖాళీ స్థలం ఉన్నప్పుడు అప్‌డేట్‌లు చూడండి.",
      ),
      p(
        "Update your apps through the official app store.",
        "అధికారిక యాప్ స్టోర్ ద్వారా యాప్‌లను అప్‌డేట్ చేయండి.",
      ),
    ],
    care: p(
      "Do not install an update from an unexpected message link. Open Settings or the app store yourself.",
      "అనుకోకుండా వచ్చిన సందేశంలోని అప్‌డేట్ లింక్ వాడకండి. సెట్టింగ్స్ లేదా స్టోర్ మీరే తెరవండి.",
    ),
    q: p(
      "Where should you check for a phone software update?",
      "ఫోన్ సాఫ్ట్‌వేర్ అప్‌డేట్ ఎక్కడ చూడాలి?",
    ),
    options: [
      p("Inside the phone Settings", "ఫోన్ సెట్టింగ్స్‌లో"),
      p("In an unexpected pop-up link", "అనుకోకుండా వచ్చిన పాప్‌అప్ లింక్‌లో"),
    ],
    explain: p(
      "The phone’s own Settings is a better starting point than an unexpected link.",
      "అనుకోని లింక్ కంటే ఫోన్ సెట్టింగ్స్‌లో చూడడం మంచిది.",
    ),
  },
  {
    id: "messaging-privacy",
    icon: "MessageCircle",
    topic: "privacy",
    time: 4,
    title: p(
      "Keep your messages personal",
      "సందేశాల్లో వ్యక్తిగత వివరాలు కాపాడండి",
    ),
    intro: p(
      "A few privacy choices help you control what others can see and share.",
      "కొన్ని గోప్యత ఎంపికలతో ఇతరులకు ఏం కనిపించాలో నియంత్రించవచ్చు.",
    ),
    steps: [
      p(
        "Review who can see your photo, status and last-seen information.",
        "మీ ఫోటో, స్టేటస్, చివరిగా చూసిన సమయం ఎవరికి కనిపిస్తాయో చూడండి.",
      ),
      p(
        "Choose who can add you to groups. Enable two-step verification if available.",
        "మిమ్మల్ని గ్రూపుల్లో ఎవరు చేర్చవచ్చో ఎంచుకోండి. అందుబాటులో ఉంటే రెండు దశల ధృవీకరణ పెట్టండి.",
      ),
      p(
        "Verify unusual requests by calling a number you already trust.",
        "అసాధారణ అభ్యర్థనలను మీకు ఇప్పటికే తెలిసిన నంబర్‌కు కాల్ చేసి నిర్ధారించుకోండి.",
      ),
    ],
    care: p(
      "Messages and photos can be forwarded. Never send PINs, passwords or OTPs in a chat.",
      "సందేశాలు, ఫోటోలు ఇతరులకు పంపవచ్చు. చాట్‌లో PIN, పాస్‌వర్డ్, OTP పంపకండి.",
    ),
    q: p(
      "A relative’s new account asks for money urgently. What next?",
      "బంధువు కొత్త ఖాతా అత్యవసరంగా డబ్బు అడిగితే?",
    ),
    options: [
      p(
        "Call their previously known number",
        "వారికి తెలిసిన పాత నంబర్‌కు కాల్ చేయాలి",
      ),
      p(
        "Pay immediately based on their photo",
        "వారి ఫోటో చూసి వెంటనే చెల్లించాలి",
      ),
    ],
    explain: p(
      "A profile photo or name can be copied. Verify independently.",
      "ప్రొఫైల్ ఫోటో, పేరు కాపీ చేయవచ్చు. స్వతంత్రంగా నిర్ధారించుకోండి.",
    ),
  },
  {
    id: "public-services",
    icon: "Landmark",
    topic: "websites",
    time: 5,
    title: p(
      "Find an official public service",
      "అధికారిక ప్రజా సేవలను కనుగొనండి",
    ),
    intro: p(
      "Start from a verified official directory rather than an unsolicited message.",
      "అనుకోని సందేశం నుంచి కాకుండా నిర్ధారించిన అధికారిక డైరెక్టరీ నుంచి ప్రారంభించండి.",
    ),
    steps: [
      p(
        "Open the Useful Services page here and choose the relevant official organisation.",
        "ఇక్కడ ఉపయోగకర సేవల పేజీ తెరిచి సంబంధిత అధికారిక సంస్థను ఎంచుకోండి.",
      ),
      p(
        "Check the full address, organisation and service before continuing.",
        "కొనసాగించే ముందు పూర్తి చిరునామా, సంస్థ, సేవను పరిశీలించండి.",
      ),
      p(
        "Read what the official service requires. Ask trusted support if unsure.",
        "అధికారిక సేవకు ఏం అవసరమో చదవండి. సందేహం ఉంటే నమ్మకమైన సహాయం పొందండి.",
      ),
    ],
    care: p(
      "Search advertisements are not proof of official status. Enter confidential information only on the verified official service.",
      "సెర్చ్ ప్రకటనలు అధికారికతకు రుజువు కావు. నిర్ధారించిన అధికారిక సేవలోనే రహస్య వివరాలు ఇవ్వండి.",
    ),
    q: p(
      "Where should you enter details required for an official service?",
      "అధికారిక సేవకు అవసరమైన వివరాలు ఎక్కడ ఇవ్వాలి?",
    ),
    options: [
      p(
        "Only on the verified official service",
        "నిర్ధారించిన అధికారిక సేవలో మాత్రమే",
      ),
      p("On this learning website", "ఈ అభ్యాస వెబ్‌సైట్‌లో"),
    ],
    explain: p(
      "This educational website never collects personal service details.",
      "ఈ అవగాహన వెబ్‌సైట్ వ్యక్తిగత సేవా వివరాలను సేకరించదు.",
    ),
  },
].map((g) => ({
  ...g,
  sourceOrganisation: "CERT-In",
  sourceUrl: "https://www.cert-in.org.in/PDF/ISA_Booklet.pdf",
  reviewed: "2026-11-05",
}));
