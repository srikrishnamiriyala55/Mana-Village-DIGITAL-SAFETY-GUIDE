import React, { useState, useEffect, useContext, createContext } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  ShieldCheck,
  WifiOff,
  Download,
  ArrowUpRight,
  MapPin,
  X,
  Menu,
  Search,
  ArrowRight,
  House,
  BookOpen,
  LifeBuoy,
  CircleCheck,
  Languages,
  CirclePlay,
  CornerRightDown,
  Smartphone,
  ScanLine,
  ShieldQuestion,
  Clock3,
  Bookmark,
  Lightbulb,
  KeyRound,
  Hand,
  MessageCircle,
  Ellipsis,
  Printer,
  Info,
  ExternalLink,
  Volume2,
  ArrowLeft,
  TriangleAlert,
  ChevronRight,
  FlaskConical,
  Phone,
  BadgeCheck,
  Landmark,
  PhoneCall,
  CreditCard,
  UserRound,
  ChevronDown,
  NotebookPen,
  Sprout,
  Signpost,
  LockKeyhole,
  SlidersHorizontal,
  Globe,
  Wifi,
  RefreshCw,
} from "lucide-react";
const Icons = {
  ShieldCheck,
  WifiOff,
  Download,
  ArrowUpRight,
  MapPin,
  X,
  Menu,
  Search,
  ArrowRight,
  House,
  BookOpen,
  LifeBuoy,
  CircleCheck,
  Languages,
  CirclePlay,
  CornerRightDown,
  Smartphone,
  ScanLine,
  ShieldQuestion,
  Clock3,
  Bookmark,
  Lightbulb,
  KeyRound,
  Hand,
  MessageCircle,
  Ellipsis,
  Printer,
  Info,
  ExternalLink,
  Volume2,
  ArrowLeft,
  TriangleAlert,
  ChevronRight,
  FlaskConical,
  Phone,
  BadgeCheck,
  Landmark,
  PhoneCall,
  CreditCard,
  UserRound,
  ChevronDown,
  NotebookPen,
  Sprout,
  Signpost,
  LockKeyhole,
  SlidersHorizontal,
  Globe,
  Wifi,
  RefreshCw,
};
import { ui, pair as p } from "./data/translations";
import { guides } from "./data/guides";
import { scenarios } from "./data/scenarios";
import { quizBank, makeAttempt } from "./data/quiz";
import { services, videos, helpSituations, gallery } from "./data/resources";
import Village from "./components/Village";
import "./styles.css";

const Ctx = createContext();
const useApp = () => useContext(Ctx);
function Icon({ name, size = 21, ...props }) {
  const I = Icons[name] || Icons.ShieldCheck;
  return <I size={size} strokeWidth={1.7} aria-hidden="true" {...props} />;
}
function load(key, fallback) {
  try {
    const x = JSON.parse(localStorage.getItem("mana-" + key));
    return x ?? fallback;
  } catch {
    return fallback;
  }
}
const paths = [
  ["home", "/"],
  ["learn", "/learn"],
  ["upi", "/upi"],
  ["scams", "/scams"],
  ["practice", "/practice"],
  ["videos", "/videos"],
  ["services", "/services"],
  ["help", "/help"],
  ["about", "/about"],
];
function App() {
  const [lang, setLang] = useState(() =>
    load("language", "en") === "te" ? "te" : "en",
  );
  const [size, setSize] = useState(() =>
    [0, 1, 2].includes(load("size", 0)) ? load("size", 0) : 0,
  );
  const [completed, setCompleted] = useState(() => {
    const x = load("completed", []);
    return Array.isArray(x)
      ? x.filter((id) => guides.some((g) => g.id === id))
      : [];
  });
  const [saved, setSaved] = useState(() => {
    const x = load("bookmarks", []);
    return Array.isArray(x)
      ? x.filter((id) => guides.some((g) => g.id === id))
      : [];
  });
  const [quiz, setQuiz] = useState(() => {
    const x = load("quiz", null);
    return x &&
      Array.isArray(x.items) &&
      x.items.length === 10 &&
      x.items.every(
        (i) => quizBank.some((q) => q.id === i.id) && Array.isArray(i.order),
      ) &&
      Array.isArray(x.answers) &&
      Number.isInteger(x.index) &&
      x.index >= 0 &&
      x.index < 10
      ? x
      : null;
  });
  const [storageError, setStorageError] = useState(false);
  const [offlineUnavailable, setOfflineUnavailable] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);
  const [installEvent, setInstallEvent] = useState(null);
  const [installInfo, setInstallInfo] = useState(false);
  const [notice, setNotice] = useState("");
  const t = (x) =>
    typeof x === "string" ? (ui[x]?.[lang] ?? x) : (x?.[lang] ?? "");
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.size = size;
    window.speechSynthesis?.cancel();
  }, [lang, size]);
  useEffect(() => {
    try {
      for (const [k, v] of Object.entries({
        language: lang,
        size,
        completed,
        bookmarks: saved,
        quiz,
      }))
        localStorage.setItem("mana-" + k, JSON.stringify(v));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [lang, size, completed, saved, quiz]);
  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    const offlineFailed = () => setOfflineUnavailable(true);
    const install = (e) => {
      e.preventDefault();
      setInstallEvent(e);
    };
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    window.addEventListener("mana-offline-unavailable", offlineFailed);
    window.addEventListener("beforeinstallprompt", install);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
      window.removeEventListener("mana-offline-unavailable", offlineFailed);
      window.removeEventListener("beforeinstallprompt", install);
    };
  }, []);
  function reset() {
    if (window.confirm(t("resetConfirm"))) {
      setCompleted([]);
      setSaved([]);
      setQuiz(null);
      setNotice("resetDone");
    }
  }
  const value = {
    lang,
    setLang,
    t,
    size,
    setSize,
    completed,
    setCompleted,
    saved,
    setSaved,
    quiz,
    setQuiz,
    reset,
    online,
  };
  return (
    <Ctx.Provider value={value}>
      <a className="skip" href="#main">
        {t("skip")}
      </a>
      <Header />
      {!online && (
        <div className="status" role="status">
          <Icon name="WifiOff" />
          {t("offline")}
        </div>
      )}
      {storageError && (
        <div className="status" role="status">
          {t("storageError")}
        </div>
      )}
      {offlineUnavailable && (
        <div className="status" role="status">
          {t(
            p(
              "Offline saving is unavailable in this browser. Keep an internet connection to continue learning.",
              "ఈ బ్రౌజర్‌లో ఆఫ్‌లైన్ భద్రపరచడం అందుబాటులో లేదు. నేర్చుకోవడానికి ఇంటర్నెట్ కనెక్షన్ ఉంచుకోండి.",
            ),
          )}
        </div>
      )}
      <main id="main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:id" element={<Lesson />} />
          <Route path="/upi" element={<UPI />} />
          <Route path="/scams" element={<Scams />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <div className="container footer-grid">
          <div>
            <Link className="brand" to="/">
              <span className="brand-icon">
                <Icon name="ShieldCheck" size={29} />
              </span>
              <span>
                <strong>{t("brand")}</strong>
                <small>{t("tagline")}</small>
              </span>
            </Link>
            <p>{t("footerLine")}</p>
            <small>{t("college")}</small>
          </div>
          <div>
            <strong>{t("privacy")}</strong>
            <p>{t("privacyNote")}</p>
            <button className="text-button" onClick={reset}>
              {t("reset")}
            </button>
            <span role="status">{notice && t(notice)}</span>
          </div>
          <div>
            <strong>{t("textSize")}</strong>
            <SizeControl />
            <button
              className="text-button"
              onClick={async () => {
                if (installEvent) {
                  await installEvent.prompt();
                  setInstallEvent(null);
                } else setInstallInfo(!installInfo);
              }}
            >
              <Icon name="Download" size={16} />
              {t("install")}
            </button>
            {installInfo && <p>{t("installHelp")}</p>}
            <Link to="/about">
              {t("about")} <Icon name="ArrowUpRight" size={14} />
            </Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026–2027 {t("brand")}</span>
          <span>{t("education")}</span>
          <span className="online-dot">
            {online ? t("online") : t(p("Offline", "ఆఫ్‌లైన్"))}
          </span>
        </div>
      </footer>
      <MobileNav />
      <ScrollManager />
    </Ctx.Provider>
  );
}
function ScrollManager() {
  const loc = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.speechSynthesis?.cancel();
    document.querySelector("main")?.focus({ preventScroll: true });
  }, [loc.pathname]);
  return null;
}
function SizeControl() {
  const { size, setSize, t } = useApp();
  return (
    <div className="size-control" role="group" aria-label={t("textSize")}>
      {[0, 1, 2].map((n) => (
        <button
          key={n}
          className={size === n ? "selected" : ""}
          onClick={() => setSize(n)}
          aria-pressed={size === n}
          aria-label={t(
            p(
              ["Standard text", "Large text", "Extra large text"][n],
              ["సాధారణ అక్షరాలు", "పెద్ద అక్షరాలు", "మరింత పెద్ద అక్షరాలు"][n],
            ),
          )}
          style={{ fontSize: 14 + n * 3 }}
        >
          A{n === 2 ? "+" : ""}
        </button>
      ))}
    </div>
  );
}
function Header() {
  const { t, lang, setLang } = useApp();
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const loc = useLocation();
  useEffect(() => {
    setMenu(false);
    setSearch(false);
  }, [loc.pathname]);
  return (
    <header>
      <div className="container header-top">
        <Link className="brand" to="/">
          <span className="brand-icon">
            <Icon name="ShieldCheck" size={29} />
          </span>
          <span>
            <strong>{t("brand")}</strong>
            <small>{t("tagline")}</small>
          </span>
        </Link>
        <div className="header-right">
          <span className="village-location">
            <Icon name="MapPin" size={16} />
            {t(p("Venkatapuram, Andhra Pradesh", "వెంకటాపురం, ఆంధ్ర ప్రదేశ్"))}
          </span>
          <SizeControl />
          <div
            className="language"
            aria-label={t(p("Choose language", "భాష ఎంచుకోండి"))}
          >
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={lang === "en" ? "selected" : ""}
            >
              English
            </button>
            <button
              onClick={() => setLang("te")}
              aria-pressed={lang === "te"}
              className={lang === "te" ? "selected" : ""}
              lang="te"
            >
              తెలుగు
            </button>
          </div>
          <button
            className="icon-button mobile-menu"
            aria-expanded={menu}
            aria-label={t(menu ? "close" : "menu")}
            onClick={() => setMenu(!menu)}
          >
            <Icon name={menu ? "X" : "Menu"} />
          </button>
        </div>
      </div>
      <div className="nav-border">
        <div className="container nav-row">
          <nav
            className={menu ? "desktop-nav open" : "desktop-nav"}
            aria-label={t(p("Main navigation", "ప్రధాన మెను"))}
          >
            {paths.map(([key, path]) => (
              <NavLink end={path === "/"} key={key} to={path}>
                {t(key)}
                {key === "help" && <Icon name="ArrowUpRight" size={14} />}
              </NavLink>
            ))}
          </nav>
          <button
            className="icon-button search-button"
            onClick={() => setSearch(!search)}
            aria-expanded={search}
            aria-label={t("search")}
          >
            <Icon name={search ? "X" : "Search"} size={19} />
          </button>
        </div>
      </div>
      {search && (
        <form
          className="container header-search"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/learn?q=" + encodeURIComponent(query));
            setSearch(false);
          }}
        >
          <label htmlFor="global-search">{t("search")}</label>
          <div className="search-field">
            <Icon name="Search" />
            <input
              autoFocus
              id="global-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchHint")}
            />
            <button type="submit" className="button primary">
              {t(p("Search", "వెతకండి"))}
            </button>
          </div>
        </form>
      )}
    </header>
  );
}
function MobileNav() {
  const { t } = useApp();
  return (
    <nav
      className="bottom-nav"
      aria-label={t(p("Quick navigation", "త్వరిత మెను"))}
    >
      {[
        ["home", "/", "House"],
        ["learn", "/learn", "BookOpen"],
        ["practice", "/practice", "ShieldCheck"],
        ["help", "/help", "LifeBuoy"],
      ].map(([k, to, i]) => (
        <NavLink key={k} to={to} end={to === "/"}>
          <Icon name={i} />
          <span>
            {t(
              k === "practice"
                ? p("Practise", "అభ్యాసం")
                : k === "learn"
                  ? p("Learn", "నేర్చుకోండి")
                  : k,
            )}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}
function Action({ to, children, secondary = false, ...props }) {
  return (
    <Link
      to={to}
      className={"button " + (secondary ? "secondary" : "primary")}
      {...props}
    >
      {children}
      <Icon name="ArrowRight" size={18} />
    </Link>
  );
}
function PageTitle({ eyebrow, title, desc }) {
  const { t } = useApp();
  return (
    <div className="page-title">
      {eyebrow && <div className="eyebrow">{t(eyebrow)}</div>}
      <h1>{t(title)}</h1>
      {desc && <p>{t(desc)}</p>}
    </div>
  );
}
function GuideCard({ g, index }) {
  const { t, saved, setSaved } = useApp();
  return (
    <article className="guide-card">
      <div className={"guide-visual visual-" + (index % 3)}>
        <Icon name={g.icon} size={45} />
        <span className="visual-orbit" />
        <button
          className={"save-button " + (saved.includes(g.id) ? "is-saved" : "")}
          aria-label={
            t(saved.includes(g.id) ? "saved" : "bookmark") + ": " + t(g.title)
          }
          aria-pressed={saved.includes(g.id)}
          onClick={() =>
            setSaved(
              saved.includes(g.id)
                ? saved.filter((x) => x !== g.id)
                : [...saved, g.id],
            )
          }
        >
          <Icon name="Bookmark" size={19} />
        </button>
      </div>
      <div className="guide-body">
        <div className="meta">
          <span>{t(g.topic)}</span>
          <span>
            <Icon name="Clock3" size={13} />
            {g.time} {t("min")}
          </span>
        </div>
        <h3>
          <Link to={"/learn/" + g.id}>{t(g.title)}</Link>
        </h3>
        <Link className="arrow-link" to={"/learn/" + g.id}>
          {t("readGuide")}
          <Icon name="ArrowRight" size={17} />
        </Link>
      </div>
    </article>
  );
}
function Home() {
  const { t } = useApp();
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="location-pill">
              <span />
              {t("location")}
            </div>
            <h1>
              {t("heroA")}
              <br />
              <em>{t("heroB")}</em>
            </h1>
            <p>{t("heroDesc")}</p>
            <div className="hero-actions">
              <Action to="/learn">{t("start")}</Action>
              <Link className="plain-action" to="/practice">
                <Icon name="CirclePlay" />
                {t("tryScenario")}
              </Link>
            </div>
            <div className="hero-benefits">
              <span>
                <Icon name="CircleCheck" size={15} />
                {t("free")}
              </span>
              <span>
                <Icon name="Languages" size={15} />
                {t("bilingual")}
              </span>
              <span>
                <Icon name="WifiOff" size={15} />
                {t("offlineReady")}
              </span>
            </div>
          </div>
          <div className="hero-illustration">
            <Village
              label={t(
                p(
                  "Homes and a tree around a phone protected by a shield",
                  "రక్షణ కవచంతో ఉన్న ఫోన్ చుట్టూ ఇళ్లు, చెట్టు",
                ),
              )}
            />
            <div className="art-note">
              <span>
                <Icon name="ShieldCheck" size={22} />
              </span>
              <div>
                <strong>
                  {t(
                    p(
                      "A little awareness. A lot of confidence.",
                      "అవగాహనతో ముందడుగు. నమ్మకంతో జీవితం.",
                    ),
                  )}
                </strong>
                <small>
                  {t(
                    p(
                      "Learn together. Stay safer together.",
                      "కలిసి నేర్చుకుందాం. జాగ్రత్తగా ఉందాం.",
                    ),
                  )}
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pathways section">
        <div className="section-heading">
          <div>
            <h2>{t("want")}</h2>
            <p>{t("ownPace")}</p>
          </div>
          <span className="handwritten">
            {t(p("Let’s take the first step", "మొదటి అడుగు వేద్దాం"))}
            <Icon name="CornerRightDown" size={22} />
          </span>
        </div>
        <div className="path-grid">
          {[
            ["phone", "phoneDesc", "Smartphone", "/learn"],
            ["pay", "payDesc", "ScanLine", "/upi"],
            ["check", "checkDesc", "ShieldQuestion", "/scams"],
          ].map(([title, desc, icon, to], i) => (
            <Link className={"path-card path-" + i} to={to} key={title}>
              <span className="path-icon">
                <Icon name={icon} size={30} />
              </span>
              <div>
                <h3>{t(title)}</h3>
                <p>{t(desc)}</p>
                <span className="arrow-link">
                  {t("explore")}
                  <Icon name="ArrowRight" size={17} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="learning-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                {t(p("LEARN IN FIVE MINUTES", "ఐదు నిమిషాల్లో నేర్చుకోండి"))}
              </div>
              <h2>{t("five")}</h2>
              <p>{t("fiveSub")}</p>
            </div>
            <Link className="arrow-link" to="/learn">
              {t("allGuides")}
              <Icon name="ArrowRight" size={17} />
            </Link>
          </div>
          <div className="home-learn-grid">
            <div className="three-guides">
              {[guides[0], guides[1], guides[3]].map((g, i) => (
                <GuideCard key={g.id} g={g} index={i} />
              ))}
            </div>
            <aside className="reminder">
              <div className="reminder-label">
                <Icon name="Lightbulb" size={19} />
                {t("safety")}
              </div>
              <div className="reminder-icon">
                <Icon name="KeyRound" size={34} />
              </div>
              <h3>{t("reminder")}</h3>
              <p>{t("reminderDesc")}</p>
              <small>{t("generalTip")}</small>
            </aside>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="feature-grid">
          <div className="feature-copy">
            <div className="eyebrow terracotta">{t("signature")}</div>
            <h2>{t("scenarioTitle")}</h2>
            <p>{t("scenarioSub")}</p>
            <Link className="arrow-link" to="/practice">
              {t(p("Explore all 8 scenarios", "మొత్తం 8 సందర్భాలు చూడండి"))}
              <Icon name="ArrowRight" size={17} />
            </Link>
            <div className="three-steps">
              {[
                ["Hand", "Pause", "ఆగండి"],
                ["Search", "Check", "పరిశీలించండి"],
                ["ShieldCheck", "Protect", "రక్షించుకోండి"],
              ].map(([i, en, te]) => (
                <span key={i}>
                  <Icon name={i} />
                  {t(p(en, te))}
                </span>
              ))}
            </div>
          </div>
          <ScenarioCard scenario={scenarios[0]} compact />
        </div>
      </section>
      <section className="container">
        <Progress />
      </section>
      <section className="container help-strip">
        <div className="help-strip-icon">
          <Icon name="LifeBuoy" size={32} />
        </div>
        <div>
          <h2>
            {t(p("Something doesn’t feel right?", "ఏదైనా అనుమానంగా ఉందా?"))}
          </h2>
          <p>
            {t(
              p(
                "Take a breath. Find the next step and official support.",
                "ప్రశాంతంగా ఉండండి. తదుపరి చర్య, అధికారిక సహాయం తెలుసుకోండి.",
              ),
            )}
          </p>
        </div>
        <Action to="/help">{t("help")}</Action>
      </section>
    </>
  );
}
function Progress() {
  const { t, completed, saved, quiz } = useApp();
  const score = quiz?.finished
    ? quiz.answers.filter((a) => a.correct).length
    : null;
  return (
    <div className="progress-panel">
      <div>
        <div className="eyebrow">
          {t(p("YOUR OWN PACE", "మీకు అనుకూలమైన వేగంతో"))}
        </div>
        <h2>{t("progress")}</h2>
        <p>{t("progressSub")}</p>
        <div className="progress-count">
          <strong>
            {completed.length}
            <span> / 8</span>
          </strong>
          <span>{t("completed")}</span>
        </div>
        <progress
          value={completed.length}
          max="8"
          aria-label={t("completed")}
        />
        <Link className="arrow-link" to="/summary">
          {t("summary")}
          <Icon name="Printer" size={17} />
        </Link>
        {score !== null && (
          <p>
            {t("quizLast")}: {score}/10
          </p>
        )}
      </div>
      <div className="saved-guides">
        <h3>
          <Icon name="Bookmark" size={20} />
          {t("bookmarks")}
        </h3>
        {saved.length ? (
          saved.map((id) => {
            const g = guides.find((g) => g.id === id);
            return (
              g && (
                <Link key={id} to={"/learn/" + id}>
                  {t(g.title)}
                  <Icon name="ArrowRight" size={17} />
                </Link>
              )
            );
          })
        ) : (
          <p>{t("noBookmarks")}</p>
        )}
      </div>
    </div>
  );
}
function matches(item, query) {
  return JSON.stringify([
    item.title,
    item.intro,
    item.message,
    item.topic,
    item.steps,
  ])
    .toLocaleLowerCase()
    .includes(query.toLocaleLowerCase().trim());
}
function Learn() {
  const { t } = useApp();
  const loc = useLocation();
  const [query, setQuery] = useState(
    new URLSearchParams(loc.search).get("q") || "",
  );
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    setQuery(new URLSearchParams(loc.search).get("q") || "");
  }, [loc.search]);
  const gs = guides.filter(
    (g) => matches(g, query) && (filter === "all" || g.topic === filter),
  );
  const ss = query
    ? scenarios.filter(
        (s) => matches(s, query) && (filter === "all" || s.topic === filter),
      )
    : [];
  return (
    <div className="container page">
      <PageTitle
        eyebrow={p("ONE SIMPLE STEP AT A TIME", "ఒక్కో సులభమైన దశతో")}
        title="learn"
        desc={p(
          "Practical guides for a more confident digital everyday. Start anywhere.",
          "రోజువారీ డిజిటల్ వాడకంలో నమ్మకం పెంచే మార్గదర్శినులు. ఎక్కడైనా ప్రారంభించండి.",
        )}
      />
      <label className="search-field">
        <Icon name="Search" />
        <input
          aria-label={t("search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchHint")}
        />
        {query && (
          <button
            className="icon-button"
            onClick={() => setQuery("")}
            aria-label={t(p("Clear search", "వెతికిన పదం తొలగించండి"))}
          >
            <Icon name="X" />
          </button>
        )}
      </label>
      <Filters
        values={[
          "all",
          "basics",
          "privacy",
          "websites",
          "payments",
          "calls",
          "messages",
        ]}
        selected={filter}
        onChange={setFilter}
      />
      <div className="guides-grid">
        {gs.map((g, i) => (
          <GuideCard key={g.id} g={g} index={i} />
        ))}
      </div>
      {ss.length > 0 && (
        <>
          <h2>
            {t(p("Matching practice scenarios", "సరిపోయే అభ్యాస సందర్భాలు"))}
          </h2>
          <div className="simple-grid">
            {ss.map((s) => (
              <Link
                key={s.id}
                className="simple-card"
                to={"/practice?scenario=" + s.id}
              >
                <Icon name="MessageCircle" />
                <h3>{t(s.title)}</h3>
                <span className="arrow-link">
                  {t("tryScenario")}
                  <Icon name="ArrowRight" />
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
      {!gs.length && !ss.length && <Empty />}
    </div>
  );
}
function Filters({ values, selected, onChange }) {
  const { t } = useApp();
  return (
    <div
      className="filters"
      role="group"
      aria-label={t(p("Filter by topic", "అంశం ప్రకారం వడపోయండి"))}
    >
      {values.map((k) => (
        <button
          key={k}
          onClick={() => onChange(k)}
          aria-pressed={k === selected}
          className={k === selected ? "selected" : ""}
        >
          {t(k)}
        </button>
      ))}
    </div>
  );
}
function Empty({ children }) {
  const { t } = useApp();
  return (
    <div className="empty" role="status">
      <Icon name="Search" size={30} />
      <p>{children || t("empty")}</p>
    </div>
  );
}
function Source({
  url = "https://www.npci.org.in/fraud-awareness",
  organisation = "NPCI",
}) {
  const { t } = useApp();
  return (
    <div className="source">
      <Icon name="BookOpen" size={15} />
      <span>
        {t("sources")}:{" "}
        <a href={url} target="_blank" rel="noreferrer">
          {organisation}
          <Icon name="ExternalLink" size={12} />
        </a>{" "}
        · {t("reviewed")}
      </span>
    </div>
  );
}
function Speak({ text }) {
  const { lang, t } = useApp();
  const [voices, setVoices] = useState([]);
  const [reading, setReading] = useState(false);
  useEffect(() => {
    const get = () => setVoices(window.speechSynthesis?.getVoices() || []);
    get();
    window.speechSynthesis?.addEventListener("voiceschanged", get);
    return () => {
      window.speechSynthesis?.removeEventListener("voiceschanged", get);
      window.speechSynthesis?.cancel();
    };
  }, []);
  useEffect(() => {
    setReading(false);
  }, [lang]);
  const voice = voices.find((v) => v.lang.startsWith(lang));
  return (
    <div className="speech">
      <button
        className="button secondary"
        disabled={!voice}
        onClick={() => {
          if (reading) {
            window.speechSynthesis.cancel();
            setReading(false);
          } else {
            const u = new SpeechSynthesisUtterance(text);
            u.voice = voice;
            u.lang = voice.lang;
            u.onend = () => setReading(false);
            u.onerror = () => setReading(false);
            window.speechSynthesis.speak(u);
            setReading(true);
          }
        }}
      >
        <Icon name="Volume2" />
        {t(reading ? "stop" : "listen")}
      </button>
      {!voice && <small>{t("noVoice")}</small>}
    </div>
  );
}
function Lesson() {
  const { id } = useParams();
  const { t, completed, setCompleted, saved, setSaved } = useApp();
  const g = guides.find((g) => g.id === id);
  const [answer, setAnswer] = useState(null);
  useEffect(() => setAnswer(null), [id]);
  if (!g) return <NotFound />;
  return (
    <div className="container page narrow">
      <Link to="/learn" className="arrow-link">
        <Icon name="ArrowLeft" size={18} />
        {t("back")}
      </Link>
      <div className="lesson-heading">
        <div className="lesson-icon">
          <Icon name={g.icon} size={55} />
        </div>
        <span className="eyebrow">
          {t(g.topic)} · {g.time} {t("min")}
        </span>
        <h1>{t(g.title)}</h1>
        <p className="lead">{t(g.intro)}</p>
      </div>
      <Speak
        text={[t(g.title), t(g.intro), ...g.steps.map(t), t(g.care)].join(". ")}
      />
      <ol className="lesson-steps">
        {g.steps.map((s, i) => (
          <li key={i}>
            <span>{i + 1}</span>
            <p>{t(s)}</p>
          </li>
        ))}
      </ol>
      <p className="muted device-note">
        <Icon name="Info" size={18} />
        {t("deviceNote")}
      </p>
      <div className="warning-box">
        <h3>
          <Icon name="TriangleAlert" />
          {t("careful")}
        </h3>
        <p>{t(g.care)}</p>
      </div>
      <div className="question-card">
        <div className="eyebrow">{t("quickCheck")}</div>
        <h2>{t(g.q)}</h2>
        <div className="options">
          {g.options.map((a, i) => (
            <button
              className={answer === i ? "chosen" : ""}
              key={i}
              aria-pressed={answer === i}
              onClick={() => setAnswer(i)}
            >
              {t(a)}
              <Icon name="ChevronRight" size={18} />
            </button>
          ))}
        </div>
        {answer !== null && (
          <div className="feedback" role="status">
            <strong>{t(answer === 0 ? "correct" : "incorrect")}</strong>
            <p>{t(g.explain)}</p>
          </div>
        )}
      </div>
      <div className="lesson-actions">
        <button
          className="button primary"
          onClick={() =>
            setCompleted(
              completed.includes(id)
                ? completed.filter((x) => x !== id)
                : [...completed, id],
            )
          }
          aria-pressed={completed.includes(id)}
        >
          <Icon name="CircleCheck" />
          {t(completed.includes(id) ? "done" : "complete")}
        </button>
        <button
          className="button secondary"
          onClick={() =>
            setSaved(
              saved.includes(id)
                ? saved.filter((x) => x !== id)
                : [...saved, id],
            )
          }
          aria-pressed={saved.includes(id)}
        >
          <Icon name="Bookmark" />
          {t(saved.includes(id) ? "saved" : "bookmark")}
        </button>
      </div>
      <Source url={g.sourceUrl} organisation={g.sourceOrganisation} />
    </div>
  );
}
function ScenarioCard({ scenario: s, compact = false }) {
  const { t } = useApp();
  const [choice, setChoice] = useState(null);
  const [step, setStep] = useState(false);
  useEffect(() => {
    setChoice(null);
    setStep(false);
  }, [s.id]);
  return (
    <article className="scenario-card">
      <div className="scenario-top">
        <span>
          <Icon name="MessageCircle" size={16} />
          {t("fictional")}
        </span>
        <Icon name="Ellipsis" />
      </div>
      <div className="scenario-content">
        <h3>{t(s.title)}</h3>
        <blockquote>{t(s.message)}</blockquote>
        <strong className="what-do">{t("whatDo")}</strong>
        <div className="options">
          {s.choices.map((a, i) => (
            <button
              key={i}
              className={choice === i ? "chosen" : ""}
              aria-pressed={choice === i}
              onClick={() => {
                setChoice(i);
                setStep(false);
              }}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + i)}
              </span>
              {t(a)}
              <Icon name="ArrowRight" size={16} />
            </button>
          ))}
        </div>
        {choice !== null && (
          <div className="feedback" role="status">
            <strong>{t(choice === 0 ? "correct" : "incorrect")}</strong>
            <p>{t(s.feedback[choice])}</p>
            {!compact && !step && (
              <button
                className="button secondary"
                onClick={() => setStep(true)}
              >
                {t(p("What happens next?", "తరువాత ఏం జరుగుతుంది?"))}
                <Icon name="ArrowRight" size={16} />
              </button>
            )}
            {step && (
              <p>
                {t(
                  choice === 0
                    ? p(
                        "You have stopped the pressure and can check the request through a trusted channel.",
                        "మీరు ఒత్తిడి నుంచి బయటపడి నమ్మకమైన మార్గంలో అభ్యర్థనను పరిశీలించవచ్చు.",
                      )
                    : p(
                        "If you already acted, stop further sharing or payment. Use Get Help to find the steps relevant to what happened.",
                        "ఇప్పటికే చర్య తీసుకుని ఉంటే మరిన్ని వివరాలు ఇవ్వడం, చెల్లించడం ఆపండి. జరిగినదానికి తగిన చర్యల కోసం సహాయం పేజీ చూడండి.",
                      ),
                )}
              </p>
            )}
            <h4>{t("warning")}</h4>
            <p>{t(s.sign)}</p>
            <h4>{t("safer")}</h4>
            <p>{t(s.next)}</p>
            {step && (
              <Link className="arrow-link" to="/help">
                {t("help")}
                <Icon name="ArrowRight" size={16} />
              </Link>
            )}
            <small>{t("caution")}</small>
            <button
              className="text-button"
              onClick={() => {
                setChoice(null);
                setStep(false);
              }}
            >
              {t("tryAgain")}
            </button>
          </div>
        )}
      </div>
      {!compact && (
        <Source url={s.sourceUrl} organisation={s.sourceOrganisation} />
      )}
    </article>
  );
}
function UPI() {
  const { t } = useApp();
  const [checked, setChecked] = useState([]);
  const [answer, setAnswer] = useState(null);
  const rules = [
    [
      p("Check who you are paying", "ఎవరికి చెల్లిస్తున్నారో చూడండి"),
      p(
        "Check the displayed recipient name and UPI address against the person or shop you intend to pay.",
        "చూపిన గ్రహీత పేరు, UPI చిరునామాను మీరు చెల్లించాలనుకున్న వ్యక్తి లేదా దుకాణంతో పోల్చండి.",
      ),
    ],
    [
      p("Check the amount", "మొత్తం చూడండి"),
      p(
        "Read the amount yourself before authorising. Pause if the request is unexpected.",
        "అనుమతి ఇచ్చే ముందు మొత్తం మీరే చదవండి. అనుకోని అభ్యర్థన అయితే ఆగండి.",
      ),
    ],
    [
      p(
        "Understand what you authorise",
        "దేనికి అనుమతి ఇస్తున్నారో తెలుసుకోండి",
      ),
      p(
        "Read the payment screen carefully. Never approve an unexpected request just because a caller tells you to. You do not need a UPI PIN to receive money.",
        "చెల్లింపు తెర జాగ్రత్తగా చదవండి. కాలర్ చెప్పారని అనుకోని అభ్యర్థనకు అనుమతి ఇవ్వకండి. డబ్బు అందుకోవడానికి UPI PIN అవసరం లేదు.",
      ),
    ],
    [
      p("Keep your codes private", "కోడ్‌లు రహస్యంగా ఉంచండి"),
      p(
        "Never share your UPI PIN or OTP. Do not enter them into message links or share your screen with an unknown caller.",
        "UPI PIN, OTP ఎవరికీ చెప్పకండి. సందేశ లింకుల్లో నమోదు చేయకండి. తెలియని కాలర్‌కు తెర చూపకండి.",
      ),
    ],
    [
      p("Confirm inside your own app", "మీ సొంత యాప్‌లో నిర్ధారించండి"),
      p(
        "Check the transaction history and status in your payment app or bank record. A message or screenshot alone is not confirmation. Use in-app help for an unclear status.",
        "చెల్లింపు యాప్ లేదా బ్యాంకు రికార్డులో లావాదేవీల చరిత్ర, స్థితి చూడండి. సందేశం లేదా స్క్రీన్‌షాట్ మాత్రమే నిర్ధారణ కాదు. స్థితి తెలియకపోతే యాప్‌లో సహాయం పొందండి.",
      ),
    ],
    [
      p("Verify a surprising request", "అనుకోని అభ్యర్థనను నిర్ధారించండి"),
      p(
        "Contact the person through a number you already trust. Find bank support inside your app or on official bank materials.",
        "ఇప్పటికే తెలిసిన నంబర్ ద్వారా వ్యక్తిని సంప్రదించండి. బ్యాంకు సహాయ వివరాలు యాప్‌లో లేదా అధికారిక బ్యాంకు పత్రాల్లో చూడండి.",
      ),
    ],
  ];
  return (
    <div className="container page">
      <PageTitle
        eyebrow={p("BEFORE YOU TAP PAY", "చెల్లించే ముందు")}
        title="upi"
        desc={p(
          "A few calm checks can make everyday payments safer.",
          "కొన్ని ప్రశాంతమైన పరిశీలనలు రోజువారీ చెల్లింపులను మరింత సురక్షితం చేస్తాయి.",
        )}
      />
      <div className="upi-layout">
        <div>
          {rules.map(([title, desc], i) => (
            <article className="rule" key={i}>
              <span>{i + 1}</span>
              <div>
                <h2>{t(title)}</h2>
                <p>{t(desc)}</p>
              </div>
            </article>
          ))}
          <Source />
          <Source
            url="https://support.google.com/pay/india/answer/9851787/protecting-against-fraud-or-unauthorised-activity?hl=en-IN"
            organisation="Google Pay Help"
          />
        </div>
        <aside>
          <div className="practice-phone">
            <div className="practice-banner">
              <Icon name="FlaskConical" size={17} />
              {t(
                p(
                  "Practice only — no real money",
                  "అభ్యాసం మాత్రమే — నిజమైన డబ్బు కాదు",
                ),
              )}
            </div>
            <div className="phone-speaker" />
            <div className="payment-avatar">V</div>
            <small>{t(p("Made-up recipient", "కల్పిత గ్రహీత"))}</small>
            <h3>{t(p("Village Demo Store", "గ్రామ డెమో దుకాణం"))}</h3>
            <span className="fictional-id">village-demo@example</span>
            <div className="payment-amount">₹250</div>
            <p>
              {t(
                p(
                  "What should you check before authorising?",
                  "అనుమతి ఇచ్చే ముందు ఏం చూడాలి?",
                ),
              )}
            </p>
            {[
              p("Recipient name and address", "గ్రహీత పేరు, చిరునామా"),
              p("Amount", "మొత్తం"),
              p(
                "Whether I intended this payment",
                "ఈ చెల్లింపు నేను చేయాలనుకున్నదేనా",
              ),
            ].map((x, i) => (
              <label key={i} className="check-row">
                <input
                  type="checkbox"
                  checked={checked.includes(i)}
                  onChange={() =>
                    setChecked(
                      checked.includes(i)
                        ? checked.filter((v) => v !== i)
                        : [...checked, i],
                    )
                  }
                />
                {t(x)}
              </label>
            ))}
            <button
              className="button primary"
              onClick={() => setAnswer(checked.length === 3)}
            >
              {t(p("Check my choices", "నా ఎంపికలు చూడండి"))}
            </button>
            {answer !== null && (
              <div className="feedback" role="status">
                {t(
                  answer
                    ? p(
                        "Yes — check all three. This screen never makes a payment or asks for a PIN.",
                        "అవును — ఈ మూడూ చూడాలి. ఈ తెర చెల్లింపు చేయదు, PIN అడగదు.",
                      )
                    : p(
                        "Check all three: recipient, amount and your intention. No PIN is needed in this exercise.",
                        "ఈ మూడూ చూడండి: గ్రహీత, మొత్తం, చెల్లించాలనే మీ ఉద్దేశం. ఈ అభ్యాసంలో PIN అవసరం లేదు.",
                      ),
                )}
              </div>
            )}
          </div>
          <div className="warning-box">
            <h3>{t(p("A suspicious message", "అనుమానాస్పద సందేశం"))}</h3>
            <blockquote>
              {t(
                p(
                  "“Enter your UPI PIN to receive a ₹500 reward.”",
                  "“₹500 బహుమతి అందుకోవడానికి మీ UPI PIN నమోదు చేయండి.”",
                ),
              )}
            </blockquote>
            <p>
              {t(
                p(
                  "Pause. Receiving money does not require your UPI PIN. Verify independently and do not follow the request.",
                  "ఆగండి. డబ్బు అందుకోవడానికి UPI PIN అవసరం లేదు. స్వతంత్రంగా నిర్ధారించుకుని ఈ అభ్యర్థన పాటించకండి.",
                ),
              )}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
const checklist = [
  p(
    "Are they asking for an OTP, PIN, password or other confidential information?",
    "OTP, PIN, పాస్‌వర్డ్ లేదా ఇతర రహస్య సమాచారం అడుగుతున్నారా?",
  ),
  p(
    "Are they pressuring you to act immediately?",
    "వెంటనే చర్య తీసుకోవాలని ఒత్తిడి చేస్తున్నారా?",
  ),
  p(
    "Are they asking you to install an unfamiliar app or share your screen?",
    "తెలియని యాప్ పెట్టమని లేదా తెర చూపమని అడుగుతున్నారా?",
  ),
  p(
    "Are they asking for money to receive a reward or job?",
    "బహుమతి లేదా ఉద్యోగం పొందడానికి డబ్బు అడుగుతున్నారా?",
  ),
  p(
    "Are you unable to verify the request independently?",
    "అభ్యర్థనను స్వతంత్రంగా నిర్ధారించుకోలేకపోతున్నారా?",
  ),
];
function Scams() {
  const { t } = useApp();
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(false);
  const yes = Object.entries(answers)
    .filter(([, v]) => v === "yes")
    .map(([k]) => Number(k));
  return (
    <div className="container page">
      <PageTitle
        eyebrow="signature"
        title={p(
          "Someone called or messaged me. What should I check?",
          "ఎవరో కాల్ చేశారు లేదా సందేశం పంపారు. ఏం పరిశీలించాలి?",
        )}
        desc={p(
          "Use this simple checklist before you click, share or pay. Do not enter the actual message or any private details.",
          "క్లిక్ చేయడానికి, వివరాలు ఇవ్వడానికి, చెల్లించడానికి ముందు ఈ ప్రశ్నలు చూడండి. అసలు సందేశం లేదా వ్యక్తిగత వివరాలు ఇక్కడ ఇవ్వకండి.",
        )}
      />
      <div className="checklist-layout">
        <form
          className="checklist"
          onSubmit={(e) => {
            e.preventDefault();
            setResult(true);
          }}
        >
          {checklist.map((q, i) => (
            <fieldset key={i}>
              <legend>
                <span>{i + 1}.</span> {t(q)}
              </legend>
              <div className="yes-no">
                {[
                  ["yes", p("Yes", "అవును")],
                  ["no", p("No", "కాదు")],
                  ["unsure", p("Not sure", "తెలియదు")],
                ].map(([val, label]) => (
                  <label
                    className={answers[i] === val ? "selected" : ""}
                    key={val}
                  >
                    <input
                      required
                      type="radio"
                      name={"check" + i}
                      value={val}
                      checked={answers[i] === val}
                      onChange={() => {
                        setAnswers({ ...answers, [i]: val });
                        setResult(false);
                      }}
                    />
                    {t(label)}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <button className="button primary" type="submit">
            {t(p("Show my next steps", "నా తదుపరి చర్యలు చూపండి"))}
            <Icon name="ArrowRight" />
          </button>
        </form>
        <aside className="checklist-note">
          <Icon name="ShieldQuestion" size={38} />
          <h2>
            {t(
              p(
                "A pause is a useful first step.",
                "ఆగి ఆలోచించడం మంచి మొదటి అడుగు.",
              ),
            )}
          </h2>
          <p>
            {t(
              p(
                "This rule-based educational checklist cannot verify a caller, inspect your device, guarantee safety or conclusively classify a message.",
                "నియమాలపై ఆధారపడిన ఈ అవగాహన ప్రశ్నలు కాలర్‌ను నిర్ధారించలేవు, పరికరాన్ని పరిశీలించలేవు, భద్రతకు హామీ ఇవ్వలేవు, సందేశం నిజమో మోసమో ఖచ్చితంగా తేల్చలేవు.",
              ),
            )}
          </p>
          <Link to="/help" className="arrow-link">
            {t("help")}
            <Icon name="ArrowRight" />
          </Link>
        </aside>
      </div>
      {result && (
        <div className="question-card" role="status">
          <h2>
            {t(
              yes.length
                ? p(
                    "There are reasons to pause and verify.",
                    "ఆగి నిర్ధారించుకోవాల్సిన కారణాలున్నాయి.",
                  )
                : p(
                    "Keep checking through a trusted channel.",
                    "నమ్మకమైన మార్గంలో పరిశీలించండి.",
                  ),
            )}
          </h2>
          <p>
            {t(
              yes.length
                ? p(
                    "Do not share confidential information, grant access or pay under pressure. Verify using a separate official contact.",
                    "ఒత్తిడిలో రహస్య వివరాలు ఇవ్వకండి, యాక్సెస్ ఇవ్వకండి, చెల్లించకండి. వేరే అధికారిక సంప్రదింపుతో నిర్ధారించండి.",
                  )
                : p(
                    "No selected warning sign is a guarantee of safety. If anything is uncertain, stop and verify independently.",
                    "హెచ్చరికలు ఎంచుకోకపోయినా భద్రతకు హామీ కాదు. సందేహముంటే ఆగి స్వతంత్రంగా నిర్ధారించుకోండి.",
                  ),
            )}
          </p>
          {Object.values(answers).includes("unsure") && (
            <p>
              {t(
                p(
                  "You marked at least one answer “Not sure”. Take time to verify before acting.",
                  "కనీసం ఒక ప్రశ్నకు “తెలియదు” ఎంచుకున్నారు. చర్య తీసుకునే ముందు నిర్ధారించడానికి సమయం తీసుకోండి.",
                ),
              )}
            </p>
          )}
          {yes.map((i) => (
            <p key={i}>
              <Icon name="TriangleAlert" size={16} /> {t(checklist[i])}
            </p>
          ))}
          <p>{t("caution")}</p>
          <Action to="/help">{t("help")}</Action>
        </div>
      )}
      <section className="section">
        <h2>
          {t(
            p(
              "Learn with a fictional situation",
              "కల్పిత సందర్భంతో నేర్చుకోండి",
            ),
          )}
        </h2>
        <div className="simple-grid">
          {scenarios.map((s) => (
            <Link
              className="simple-card"
              to={"/practice?scenario=" + s.id}
              key={s.id}
            >
              <span className="topic-pill">{t(s.topic)}</span>
              <h3>{t(s.title)}</h3>
              <span className="arrow-link">
                {t("tryScenario")}
                <Icon name="ArrowRight" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
function Practice() {
  const { t } = useApp();
  const loc = useLocation();
  const [active, setActive] = useState(
    new URLSearchParams(loc.search).get("scenario") || scenarios[0].id,
  );
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const id = new URLSearchParams(loc.search).get("scenario");
    if (id && scenarios.some((s) => s.id === id)) setActive(id);
  }, [loc.search]);
  const s = scenarios.find((s) => s.id === active) || scenarios[0];
  return (
    <div className="container page">
      <PageTitle eyebrow="signature" title="scenarioTitle" desc="scenarioSub" />
      <Filters
        values={["all", "calls", "messages", "payments"]}
        selected={filter}
        onChange={setFilter}
      />
      <div className="practice-layout">
        <nav
          className="scenario-list"
          aria-label={t(
            p("Choose a practice scenario", "అభ్యాస సందర్భం ఎంచుకోండి"),
          )}
        >
          {scenarios
            .filter((s) => filter === "all" || s.topic === filter)
            .map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                aria-pressed={active === s.id}
                className={active === s.id ? "selected" : ""}
              >
                <Icon
                  name={s.topic === "calls" ? "Phone" : "MessageCircle"}
                  size={20}
                />
                <span>{t(s.title)}</span>
                <Icon name="ChevronRight" size={16} />
              </button>
            ))}
        </nav>
        <ScenarioCard scenario={s} />
      </div>
      <section className="section" id="quiz">
        <Quiz />
      </section>
    </div>
  );
}
function Quiz() {
  const { t, quiz, setQuiz } = useApp();
  if (!quiz)
    return (
      <div className="quiz-intro">
        <span className="quiz-icon">
          <Icon name="BadgeCheck" size={42} />
        </span>
        <div>
          <div className="eyebrow">
            {t(p("A QUICK KNOWLEDGE CHECK", "నేర్చుకున్నది పరీక్షించుకోండి"))}
          </div>
          <h2>{t("quiz")}</h2>
          <p>{t("quizSub")}</p>
          <button
            className="button primary"
            onClick={() => setQuiz(makeAttempt())}
          >
            {t("startQuiz")}
            <Icon name="ArrowRight" />
          </button>
        </div>
      </div>
    );
  const { index, items, answers, finished } = quiz;
  const score = answers.filter((a) => a.correct).length;
  if (finished) {
    const topics = [
      ...new Set(
        answers
          .filter((a) => !a.correct)
          .map((a) => quizBank.find((q) => q.id === a.id)?.topic),
      ),
    ];
    return (
      <div className="question-card quiz-card">
        <div className="eyebrow">{t("result")}</div>
        <h2 className="score">
          {score}
          <span>/ 10</span>
        </h2>
        <h3>{t("revision")}</h3>
        {topics.length ? (
          <div className="filters">
            {topics.map((topic) => (
              <Link
                className="button secondary"
                key={topic}
                to={
                  topic === "payments"
                    ? "/upi"
                    : topic === "calls" || topic === "messages"
                      ? "/scams"
                      : "/learn"
                }
              >
                {t(topic)}
                <Icon name="ArrowUpRight" size={16} />
              </Link>
            ))}
          </div>
        ) : (
          <p>{t("allCorrect")}</p>
        )}
        <div className="lesson-actions">
          <button
            className="button primary"
            onClick={() => setQuiz(makeAttempt())}
          >
            {t("retryQuiz")}
          </button>
          <Action to="/summary" secondary>
            {t("summary")}
          </Action>
        </div>
      </div>
    );
  }
  const item = items[index];
  const q = quizBank.find((q) => q.id === item.id);
  const answer = answers[index];
  return (
    <div className="question-card quiz-card">
      <div className="section-heading">
        <span className="eyebrow">
          {t("question")} {index + 1} / 10
        </span>
        <span className="topic-pill">{t(q.topic)}</span>
      </div>
      <progress value={index + 1} max="10" aria-label={t("question")} />
      <h2>{t(q.q)}</h2>
      <p>{t("quizExplain")}</p>
      <div className="options">
        {item.order.map((oi, i) => (
          <button
            key={oi}
            disabled={!!answer}
            aria-pressed={answer?.selected === oi}
            className={answer?.selected === oi ? "chosen" : ""}
            onClick={() =>
              setQuiz({
                ...quiz,
                answers: [
                  ...answers,
                  { id: q.id, selected: oi, correct: oi === q.correct },
                ],
              })
            }
          >
            <span className="option-letter">{String.fromCharCode(65 + i)}</span>
            {t(q.options[oi])}
          </button>
        ))}
      </div>
      {answer && (
        <div className="feedback" role="status">
          <strong>{t(answer.correct ? "correct" : "incorrect")}</strong>
          <p>{t(q.explain)}</p>
          <button
            className="button primary"
            onClick={() =>
              setQuiz({
                ...quiz,
                index: index === 9 ? index : index + 1,
                finished: index === 9,
              })
            }
          >
            {t(index === 9 ? p("See my results", "నా ఫలితాలు చూడండి") : "next")}
            <Icon name="ArrowRight" />
          </button>
        </div>
      )}
    </div>
  );
}
function Videos() {
  const { t, online } = useApp();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("all");
  const [language, setLanguage] = useState("all");
  const [playing, setPlaying] = useState(null);
  const list = videos.filter(
    (v) =>
      (topic === "all" || topic === v.topic) &&
      (language === "all" || v.language === language) &&
      matches(v, query),
  );
  return (
    <div className="container page">
      <PageTitle
        eyebrow={p("WATCH & LEARN", "చూసి నేర్చుకోండి")}
        title="videos"
        desc={p(
          "Resources listed by official educational sources. External videos need an internet connection.",
          "అధికారిక అవగాహన మూలాలు పేర్కొన్న వనరులు. బయటి వీడియోలకు ఇంటర్నెట్ అవసరం.",
        )}
      />
      <div className="search-field">
        <Icon name="Search" />
        <input
          aria-label={t(p("Search videos", "వీడియోలు వెతకండి"))}
          placeholder={t(
            p(
              "Search videos by title or topic",
              "పేరు లేదా అంశం ప్రకారం వెతకండి",
            ),
          )}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="video-filters">
        <Filters
          values={["all", "basics", "payments", "calls", "messages", "privacy"]}
          selected={topic}
          onChange={setTopic}
        />
        <label>
          {t(p("Video language", "వీడియో భాష"))}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="all">{t("all")}</option>
            <option value="te">తెలుగు</option>
            <option value="en">English</option>
          </select>
        </label>
      </div>
      <p className="device-note">
        <Icon name="Info" size={18} />
        {t(
          p(
            "Spoken language and duration have not been independently verified for these videos, so they are not guessed. Verified Telugu-specific videos have not yet been added.",
            "ఈ వీడియోల భాష, నిడివిని స్వతంత్రంగా నిర్ధారించలేదు కాబట్టి ఊహించి చూపడం లేదు. నిర్ధారించిన తెలుగు వీడియోలను ఇంకా చేర్చలేదు.",
          ),
        )}
      </p>
      <div className="simple-grid">
        {list.map((v) => (
          <article key={v.id} className="video-card">
            <div className="video-visual">
              {playing === v.id && online ? (
                <iframe
                  src={"https://www.youtube-nocookie.com/embed/" + v.id}
                  title={t(v.title)}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <button
                  disabled={!online}
                  aria-label={
                    t(p("Load external video", "బయటి వీడియో లోడ్ చేయండి")) +
                    ": " +
                    t(v.title)
                  }
                  onClick={() => setPlaying(v.id)}
                >
                  <Icon name="CirclePlay" size={52} />
                  <span>
                    {t(
                      p(
                        "Load video from YouTube",
                        "YouTube నుంచి వీడియో లోడ్ చేయండి",
                      ),
                    )}
                  </span>
                </button>
              )}
            </div>
            <div className="video-body">
              <span className="topic-pill">{t(v.topic)}</span>
              <h2>{t(v.title)}</h2>
              <p>{t(v.desc)}</p>
              <small>
                {v.organisation} ·{" "}
                {t(p("Language unverified", "భాష నిర్ధారించలేదు"))}
              </small>
              <a
                className="arrow-link"
                href={v.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t(p("Official source page", "అధికారిక మూల పేజీ"))}
                <Icon name="ExternalLink" size={16} />
              </a>
              <a
                className="arrow-link"
                href={"https://www.youtube.com/watch?v=" + v.id}
                target="_blank"
                rel="noreferrer"
              >
                {t(p("Open on YouTube", "YouTubeలో తెరవండి"))}
                <Icon name="ExternalLink" size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
      {!list.length && (
        <Empty>
          {t(
            p(
              "No verified videos match these filters yet. Try all topics and languages, or use the offline learning guides.",
              "ఈ ఎంపికలకు సరిపోయే నిర్ధారించిన వీడియోలు ఇంకా లేవు. అన్ని అంశాలు, భాషలు ఎంచుకోండి లేదా ఆఫ్‌లైన్ పాఠాలు వాడండి.",
            ),
          )}
        </Empty>
      )}
      <p className="muted">
        {t(
          p(
            "Nothing loads from YouTube until you choose to play. Playing contacts YouTube, which has its own privacy policy. Playback may be restricted by the publisher.",
            "మీరు ప్లే ఎంచుకునే వరకు YouTube నుంచి ఏదీ లోడ్ కాదు. ప్లే చేస్తే సొంత గోప్యత విధానం ఉన్న YouTubeకు కనెక్ట్ అవుతుంది. ప్రచురణకర్త ప్లేను పరిమితం చేసి ఉండవచ్చు.",
          ),
        )}
      </p>
      <Source
        url="https://www.mygov.in/staysafeonline"
        organisation="MyGov / MeitY"
      />
    </div>
  );
}
function Services() {
  const { t } = useApp();
  return (
    <div className="container page">
      <PageTitle
        eyebrow={p(
          "START WITH AN OFFICIAL SOURCE",
          "అధికారిక మూలంతో ప్రారంభించండి",
        )}
        title="services"
        desc={p(
          "A small directory to help you find the right public service. External websites require internet.",
          "సరైన ప్రజా సేవను కనుగొనడానికి చిన్న డైరెక్టరీ. బయటి వెబ్‌సైట్లకు ఇంటర్నెట్ అవసరం.",
        )}
      />
      <div className="warning-box">
        <Icon name="Info" />
        <p>
          {t(
            p(
              "Enter confidential information only on the verified official service. This educational website never collects it and is not affiliated with these organisations.",
              "నిర్ధారించిన అధికారిక సేవలోనే రహస్య వివరాలు ఇవ్వండి. ఈ అవగాహన వెబ్‌సైట్ వాటిని సేకరించదు. ఈ సంస్థలతో అనుబంధం లేదు.",
            ),
          )}
        </p>
      </div>
      <div className="simple-grid service-grid">
        {services.map((r) => (
          <article className="simple-card" key={r.url}>
            <Icon name="Landmark" size={29} />
            <h2>{t(r.name)}</h2>
            <p>{t(r.desc)}</p>
            <small>{r.organisation}</small>
            <a
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="arrow-link"
            >
              {new URL(r.url).hostname}
              <Icon name="ExternalLink" size={17} />
              <span className="sr-only">{t("external")}</span>
            </a>
            <small>{t("reviewed")}</small>
          </article>
        ))}
      </div>
    </div>
  );
}
function Help() {
  const { t } = useApp();
  return (
    <div className="container page">
      <PageTitle eyebrow="help" title="helpTitle" desc="helpSub" />
      <div className="urgent-help">
        <div className="urgent-icon">
          <Icon name="PhoneCall" size={38} />
        </div>
        <div>
          <h2>{t("urgent")}</h2>
          <p>{t("urgentDesc")}</p>
          <div className="lesson-actions">
            <a className="button primary" href="tel:1930">
              <Icon name="Phone" />
              {t("call")}
            </a>
            <a
              className="button secondary"
              href="https://www.cybercrime.gov.in/"
              target="_blank"
              rel="noreferrer"
            >
              {t("report")}
              <Icon name="ExternalLink" size={17} />
            </a>
          </div>
          <Source
            url="https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1814120&lang=2&reg=48"
            organisation="Ministry of Home Affairs / PIB"
          />
        </div>
      </div>
      <div className="help-accordions">
        {helpSituations.map(([title, body], i) => (
          <details key={i} open={i === 0}>
            <summary>
              <span>
                <Icon
                  name={
                    [
                      "MessageCircle",
                      "KeyRound",
                      "CreditCard",
                      "UserRound",
                      "BookOpen",
                    ][i]
                  }
                />
                {t(title)}
              </span>
              <Icon name="ChevronDown" />
            </summary>
            <p>{t(body)}</p>
          </details>
        ))}
      </div>
      <div className="warning-box">
        <h3>
          <Icon name="NotebookPen" />
          {t(p("Keep useful records", "ఉపయోగకర రికార్డులు ఉంచుకోండి"))}
        </h3>
        <p>
          {t(
            p(
              "Preserve relevant messages, account or profile links, transaction references, dates and screenshots. Share evidence only through trusted official reporting channels, never on this website.",
              "సంబంధిత సందేశాలు, ఖాతా లేదా ప్రొఫైల్ లింకులు, లావాదేవీ వివరాలు, తేదీలు, స్క్రీన్‌షాట్‌లు ఉంచుకోండి. ఆధారాలు నమ్మకమైన అధికారిక ఫిర్యాదు మార్గాల్లోనే ఇవ్వండి. ఈ వెబ్‌సైట్‌లో ఇవ్వకండి.",
            ),
          )}
        </p>
      </div>
      <p className="muted">{t("noGuarantee")}</p>
      <Source
        url="https://support.google.com/pay/india/answer/9851787/protecting-against-fraud-or-unauthorised-activity?hl=en-IN"
        organisation="Google Pay Help"
      />
      <Source
        url="https://www.cybercrime.gov.in/webform/Crime_AuthoLogin.aspx"
        organisation="National Cybercrime Reporting Portal"
      />
    </div>
  );
}
function Summary() {
  const { t, completed, quiz } = useApp();
  return (
    <div className="container page narrow summary-page">
      <PageTitle eyebrow="brand" title="summaryTitle" desc="informal" />
      <h2>{t("completed")}</h2>
      {completed.length ? (
        <ul>
          {guides
            .filter((g) => completed.includes(g.id))
            .map((g) => (
              <li key={g.id}>{t(g.title)}</li>
            ))}
        </ul>
      ) : (
        <p>{t("noneComplete")}</p>
      )}
      <h2>{t("quizLast")}</h2>
      <p>
        {quiz?.finished
          ? quiz.answers.filter((a) => a.correct).length + " / 10"
          : t("noQuiz")}
      </p>
      <p>{t("privacyNote")}</p>
      <button
        className="button primary no-print"
        onClick={() => window.print()}
      >
        <Icon name="Printer" />
        {t("summary")}
      </button>
      <p>{t("education")}</p>
    </div>
  );
}
function About() {
  const { t } = useApp();
  return (
    <div className="container page narrow">
      <PageTitle
        eyebrow={p(
          "LEARNING WITH OUR COMMUNITY",
          "మన సమాజంతో కలిసి నేర్చుకుందాం",
        )}
        title="about"
        desc={p(
          "A student-created educational resource for Venkatapuram.",
          "వెంకటాపురం కోసం విద్యార్థులు రూపొందించిన అవగాహన వనరు.",
        )}
      />
      <div className="about-project">
        <Icon name="Sprout" size={38} />
        <h2>
          {t(
            p(
              "Our Village – On the Digital Path to Empowerment and Safety on Cybercrimes",
              "మన గ్రామం – డిజిటల్ సాధికారత, సైబర్ నేరాల నుంచి భద్రత దిశగా",
            ),
          )}
        </h2>
        <p>
          {t(
            p(
              "Our team conducted household surveys, digital literacy guidance, safe UPI demonstrations and awareness-video sessions. Earlier activities used existing public websites and videos. This new website supports that work; its impact has not yet been measured.",
              "మా బృందం ఇంటింటి సర్వేలు, డిజిటల్ అక్షరాస్యత మార్గదర్శనం, సురక్షిత UPI ప్రదర్శనలు, అవగాహన వీడియో కార్యక్రమాలు నిర్వహించింది. గత కార్యక్రమాల్లో అందుబాటులో ఉన్న ప్రజా వెబ్‌సైట్లు, వీడియోలు వాడాం. ఈ కొత్త వెబ్‌సైట్ ఆ పనికి తోడ్పడుతుంది; దీని ప్రభావాన్ని ఇంకా కొలవలేదు.",
            ),
          )}
        </p>
      </div>
      <dl className="project-details">
        {[
          [
            p("College", "కళాశాల"),
            p(
              "Lakireddy Bali Reddy College of Engineering",
              "లకిరెడ్డి బాలిరెడ్డి ఇంజనీరింగ్ కళాశాల",
            ),
          ],
          [
            p("Department", "విభాగం"),
            p(
              "Computer Science and Engineering",
              "కంప్యూటర్ సైన్స్ అండ్ ఇంజనీరింగ్",
            ),
          ],
          [p("Academic year", "విద్యా సంవత్సరం"), p("2026–2027", "2026–2027")],
          [
            p("Village", "గ్రామం"),
            p(
              "Venkatapuram village, G. Konduru Mandal, NTR district, Andhra Pradesh",
              "వెంకటాపురం గ్రామం, జి. కొండూరు మండలం, ఎన్టీఆర్ జిల్లా, ఆంధ్ర ప్రదేశ్",
            ),
          ],
          [
            p("Mentor", "మార్గదర్శకులు"),
            p(
              "Mrs. M. Gayathri, Sr. Assistant Professor",
              "శ్రీమతి ఎం. గాయత్రి, సీనియర్ అసిస్టెంట్ ప్రొఫెసర్",
            ),
          ],
        ].map(([k, v], i) => (
          <div key={i}>
            <dt>{t(k)}</dt>
            <dd>{t(v)}</dd>
          </div>
        ))}
      </dl>
      <h2>{t(p("Our student team", "మా విద్యార్థి బృందం"))}</h2>
      <ul className="team-list">
        {[
          ["MEDIBOYANA SRI SATYA GANESH", "24761A05G2"],
          ["MEGAVATH NAGA VYSHNAVI", "24761A05G3"],
          ["MENDEM RISHITHA", "24761A05G4"],
          ["MIRIYALA ADEEP", "24761A05G5"],
          ["MIRIYALA HARSHADU SRI KRISHNA", "24761A05G6"],
        ].map(([name, id]) => (
          <li key={id}>
            <Icon name="UserRound" />
            <span>
              {name}
              <small>{id}</small>
            </span>
          </li>
        ))}
      </ul>
      {gallery.length > 0 && (
        <section>
          <h2>{t(p("Project gallery", "ప్రాజెక్ట్ చిత్రాలు"))}</h2>
          <div className="gallery">
            {gallery.map((photo) => (
              <figure key={photo.src}>
                <img src={photo.src} alt={t(photo.alt)} loading="lazy" />
                <figcaption>{t(photo.caption)}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <div className="warning-box">
        <h3>{t("privacy")}</h3>
        <p>{t("privacyNote")}</p>
        <p>
          {t(
            p(
              "Only language, text size, completed guides, bookmarks and quiz progress are stored locally. Reset progress in the footer to remove learning records. Search and checklist responses are not saved. External services follow their own privacy policies.",
              "భాష, అక్షరాల పరిమాణం, పూర్తయిన పాఠాలు, భద్రపరిచినవి, క్విజ్ పురోగతి మాత్రమే పరికరంలో నిల్వ ఉంటాయి. పాఠాల రికార్డులు తొలగించడానికి పేజీ చివర పురోగతి తొలగింపు వాడండి. వెతికిన పదాలు, చెక్‌లిస్ట్ సమాధానాలు నిల్వ చేయం. బయట సేవలకు వాటి సొంత గోప్యత విధానాలు ఉంటాయి.",
            ),
          )}
        </p>
      </div>
      <p>{t("education")}</p>
    </div>
  );
}
function NotFound() {
  const { t } = useApp();
  return (
    <div className="container page empty">
      <Icon name="Signpost" size={56} />
      <h1>{t("notFound")}</h1>
      <Action to="/">{t("home")}</Action>
    </div>
  );
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    if (this.state.error) {
      const lang = load("language", "en") === "te" ? "te" : "en";
      return (
        <div style={{ padding: 40, fontFamily: "sans-serif" }}>
          <h1>{ui.error[lang]}</h1>
          <button onClick={() => location.reload()}>{ui.reload[lang]}</button>
        </div>
      );
    }
    return this.props.children;
  }
}
createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
);
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("/sw.js").catch(() => {
      window.dispatchEvent(new Event("mana-offline-unavailable"));
    }),
  );
}
