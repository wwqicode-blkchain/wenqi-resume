const copy = {
  en: {
    skip: "Skip to content", navExperience: "Experience", navProjects: "Projects", navAbout: "About", print: "Print resume",
    eyebrow: "Wenqi Wang · Backend Engineer / Agent Infrastructure", heroLine1: "Making complex systems reliable,", heroLine2: "and AI products useful.",
    heroSummary: "I’m a backend engineer with a computer-science background from two 985 universities and years of Go and blockchain experience. I now work across blockchain infrastructure, developer platforms, and agent services—and enjoy taking useful products from idea to launch.",
    viewExperience: "Explore experience", githubProfile: "GitHub profile", contactLabel: "CONTACT", orbitCaption: "From state machines to product experience, every layer has a clear boundary.",
    factEducation: "B.S. & M.S. · both 985 universities", latencyMetric: "20s → hundreds of ms", factLatency: "High-concurrency chart query", factFrameworks: "Independent chart frameworks",
    experienceKicker: "01 / Experience", experienceTitle: "From core systems to agent platforms.", experienceIntro: "Solving cost, state, and reliability problems in production—and bringing distributed-systems engineering into AI products.",
    currentRole: "2024.08 — PRESENT", company: "Sahara Labs", role: "Blockchain Engineer · Agent / Developer Platform Backend", rolePeriod: "2024.08 — Present", present: "Present",
    roleSummary: "Working across blockchain nodes and storage infrastructure, a developer data platform, and agent API / MCP services. Scope includes usage metering, streaming requests, state recovery, and API performance.",
    achievement1Title: "Designed metering for requests with uncertain model costs", achievement1: "Built a reserve → commit → refund settlement flow and derived model output caps from reserved credits, keeping quota checks, actual usage, and billing aligned.",
    achievement2Title: "Connected market data to the agent tool ecosystem", achievement2: "Packaged crypto market data as five read-only MCP tools; implemented API key lifecycle, quotas, usage settlement, and audit at the gateway.",
    achievement3Title: "Improved streaming request lifecycle and recovery", achievement3: "Covered request timeouts, cross-instance cancellation, client disconnects, and idempotent settlement to reduce resource and billing drift during long or partially failed requests.",
    achievement4Title: "Cut high-concurrency chart queries from 20+ seconds to hundreds of milliseconds", achievement4: "Reworked API key verification from serial bcrypt checks (O(n)) to O(1), with prewarming and caching for high-concurrency market-data queries.",
    achievement5Title: "Worked deep in blockchain nodes and state storage", achievement5: "Contributed to Cosmos SDK / CometBFT node and IAVL / MemIAVL storage paths, investigating snapshots, WAL catch-up, recovery, and startup behavior.",
    mantleRole: "Layer 2 / Layer 3 Protocol Engineer", mantle1: "Contributed to a general-purpose Rollup module integrating AnyTrust DA, EigenDA, NearDA, Celestia, and EIP-4844; adapted AnyTrust DA.", mantle2: "Integrated Cosmos SDK with Rollup and contributed to Layer 2 gas sponsorship, off-chain transaction construction, and EstimateGas optimization.",
    quchainCompany: "Hangzhou Qulian Technology · Platform Infrastructure", quchainRole: "Blockchain R&D Engineer", quchain1: "Worked on transaction deduplication and ordering, block synchronization between nodes, and reconstruction of archived chain data.", quchain2: "Contributed to in-house KV storage: key-value separation, removing redundant WAL writes, expired-value GC, and cold / hot storage design.",
    stackLabel: "TECH STACK", projectsKicker: "02 / Selected projects", projectsTitle: "Turning real problems into products.", projectsIntro: "From product framing and system design to launch and operations, I practice delivering the whole experience to users.",
    webProduct: "AI product · Web", crossPlatform: "Cross-platform AI assistant", chartDescription: "An AI chart-study tool that lets independent technical-analysis frameworks read the same candlestick chart, showing evidence, disagreement, and limits without issuing trading advice.",
    mondoDescription: "Helps travelers understand mobile interfaces in unfamiliar languages: translates visible text, explains buttons and options, and suggests a next step for the task at hand.", visitProject: "Visit project",
    aboutKicker: "03 / Background & direction", aboutTitle: "Systems thinking is my starting point for agents.", aboutIntro: "I’m applying backend and distributed-systems experience to agent engineering that is reliable, observable, and controlled.",
    educationLabel: "Education", educationTitle: "Computer Science · two 985 universities", masterSchool: "Beijing Institute of Technology", masterDegree: "M.S. · 2019–2022", bachelorSchool: "China Agricultural University", bachelorDegree: "B.S. · 2015–2019", educationDetail: "Master’s research: blockchain and cross-chain systems. Undergraduate research: CNN model pruning.", educationAwards: "Four scholarships and four university-level awards",
    learningLabel: "Ongoing study", learningTitle: "Agent Runtime & Infra", learningDetail: "Systematically studying Pi, agent loops, tool calling, sessions and compaction, context and memory, permission boundaries, durable execution, and multi-agent orchestration; documenting source-code reading and experiments.",
    skillsKicker: "04 / Capabilities", skillsTitle: "Connecting the layers.", skillBackend: "Backend & data", skillAgent: "Agents & AI platforms", skillInfra: "Blockchain & infrastructure", skillProduct: "Product delivery",
    footerMessage: "Always glad to talk about agent infrastructure, developer platforms, and backend systems.", footerNote: "Personal resume · Updated over time", backTop: "Back to top ↑"
  }
};

const toggle = document.querySelector("#language-toggle");
const printButton = document.querySelector("#print-page");
const year = document.querySelector("#year");
let language = "zh";

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  toggle.textContent = next === "zh" ? "EN" : "中文";
  toggle.setAttribute("aria-label", next === "zh" ? "Switch to English" : "切换到中文");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!element.dataset.zhText) element.dataset.zhText = element.textContent;
    const value = copy.en[element.dataset.i18n];
    element.textContent = next === "en" ? value || element.dataset.zhText : element.dataset.zhText;
  });
}

toggle.addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));
printButton.addEventListener("click", () => window.print());
year.textContent = new Date().getFullYear();
