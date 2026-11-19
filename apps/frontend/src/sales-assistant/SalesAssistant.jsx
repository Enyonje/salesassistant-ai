import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, Bot, Building2, CalendarClock, Check, CircleDollarSign,
  ClipboardList, Clock3, Command, LayoutDashboard, Loader2, MessageSquareText,
  Plus, RefreshCw, Search, Settings2, Sparkles, Target, Trash2, TrendingUp,
  Upload, Users, WandSparkles, X, Zap, Globe, MapPin, Send, Mail, Phone, ShieldCheck,
} from "lucide-react";
import { apiFetch } from "../lib/api";

const STAGES = [
  { value: "new", label: "New", color: "bg-slate-500/15 text-slate-300" },
  { value: "qualified", label: "Qualified", color: "bg-cyan-500/15 text-cyan-300" },
  { value: "contacted", label: "Contacted", color: "bg-blue-500/15 text-blue-300" },
  { value: "proposal", label: "Proposal", color: "bg-violet-500/15 text-violet-300" },
  { value: "won", label: "Won", color: "bg-emerald-500/15 text-emerald-300" },
  { value: "lost", label: "Lost", color: "bg-rose-500/15 text-rose-300" },
];

const emptyLead = {
  full_name: "", company: "", website: "", email: "", phone: "", source: "manual",
  stage: "new", estimated_value: "", notes: "", next_follow_up_at: "",
};


function countWords(value) {
  return String(value || "").trim().split(/\\s+/).filter(Boolean).length;
}

function limitWords(value, maxWords) {
  const words = String(value || "").trim().split(/\\s+/).filter(Boolean);
  return words.length > maxWords ? words.slice(0, maxWords).join(" ") : value;
}

const emptyProfile = {
  business_name: "", website: "", product_description: "",
  target_customer: "", value_proposition: "", tone: "professional",
};

function request(endpoint, options = {}) {
  const token = localStorage.getItem("salesAssistantAccessToken");
  return apiFetch(endpoint, {
    ...options,
    headers: {
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

function money(value) {
  return new Intl.NumberFormat(undefined, {
    style: "currency", currency: "USD", maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function dateLabel(value) {
  if (!value) return "Not scheduled";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not scheduled";
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function StageBadge({ stage }) {
  const item = STAGES.find((entry) => entry.value === stage) || STAGES[0];
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize ${item.color}`}>{item.label}</span>;
}

function MetricCard({ icon: Icon, label, value, detail, accent = "cyan" }) {
  const accents = {
    cyan: "bg-cyan-400/10 text-cyan-300",
    violet: "bg-violet-400/10 text-violet-300",
    emerald: "bg-emerald-400/10 text-emerald-300",
    amber: "bg-amber-400/10 text-amber-300",
  };
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5 shadow-[0_12px_40px_rgba(0,0,0,.12)]">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">{label}</span>
        <span className={`grid h-9 w-9 place-items-center rounded-xl ${accents[accent]}`}><Icon size={17} /></span>
      </div>
      <div className="mt-4 text-3xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-2 text-xs text-slate-500">{detail}</div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required = false, maxWords, ...props }) {
  const words = countWords(value);
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}{required ? " *" : ""}</span>
      <input
        type={type}
        value={value ?? ""}
        onChange={(event) => onChange(maxWords ? limitWords(event.target.value, maxWords) : event.target.value)}
        placeholder={placeholder}
        required={required}
        {...props}
        className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
      />
      {maxWords && <span className="mt-1 block text-right text-[11px] text-slate-500">{words} / {maxWords} words</span>}
    </label>
  );
}
function TextAreaField({ label, value, onChange, placeholder, rows = 3, maxWords }) {
  const words = countWords(value);
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}</span>
      <textarea
        rows={rows}
        value={value ?? ""}
        onChange={(event) => onChange(maxWords ? limitWords(event.target.value, maxWords) : event.target.value)}
        placeholder={placeholder}
        className="w-full resize-y rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
      />
      {maxWords && (
        <span className={`mt-1 block text-right text-[11px] ${words >= maxWords ? "text-amber-300" : "text-slate-500"}`}>
          {words} / {maxWords} words · {Math.max(0, maxWords - words)} remaining
        </span>
      )}
    </label>
  );
}
function Modal({ title, onClose, children, wide = false }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className={`my-auto w-full ${wide ? "max-w-2xl" : "max-w-lg"} rounded-2xl border border-white/10 bg-[#0d1728] shadow-2xl`}>
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
          <h2 className="font-semibold text-white">{title}</h2>
          <button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white" aria-label="Close"><X size={18} /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') { cell += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") { row.push(cell.trim()); cell = ""; }
    else if (char === "\n") { row.push(cell.trim()); rows.push(row); row = []; cell = ""; }
    else if (char !== "\r") cell += char;
  }
  if (quoted) throw new Error("The CSV contains an unclosed quoted field.");
  if (cell.length || row.length) { row.push(cell.trim()); rows.push(row); }
  const nonEmpty = rows.filter((item) => item.some((value) => value !== ""));
  if (nonEmpty.length < 2) throw new Error("The CSV needs a header row and at least one lead.");
  const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const aliases = {
    fullname: "full_name", name: "full_name", contactname: "full_name", prospect: "full_name",
    company: "company", companyname: "company", organization: "company", organisation: "company",
    website: "website", companywebsite: "website", domain: "website", url: "website",
    email: "email", emailaddress: "email", phone: "phone", phonenumber: "phone", mobile: "phone",
    source: "source", leadsource: "source", stage: "stage", status: "stage",
    estimatedvalue: "estimated_value", dealvalue: "estimated_value", value: "estimated_value",
    notes: "notes", comments: "notes", followup: "next_follow_up_at", nextfollowup: "next_follow_up_at",
  };
  const headers = nonEmpty[0].map((value) => aliases[normalize(value)] || "");
  if (!headers.includes("full_name")) throw new Error("A Full Name column is required. Use the sample CSV template.");
  return nonEmpty.slice(1).map((values, index) => {
    const record = {};
    headers.forEach((header, column) => { if (header) record[header] = values[column] || ""; });
    if (!record.full_name) throw new Error(`Row ${index + 2}: full name is required.`);
    const numericValue = record.estimated_value === "" ? null : Number(record.estimated_value);
    if (numericValue !== null && (!Number.isFinite(numericValue) || numericValue < 0)) throw new Error(`Row ${index + 2}: deal value must be a non-negative number.`);
    const stage = (record.stage || "new").toLowerCase();
    if (!["new", "qualified", "contacted", "proposal", "won", "lost"].includes(stage)) throw new Error(`Row ${index + 2}: unsupported pipeline stage.`);
    let followUp = null;
    if (record.next_follow_up_at) {
      const date = new Date(record.next_follow_up_at);
      if (Number.isNaN(date.getTime())) throw new Error(`Row ${index + 2}: invalid follow-up date.`);
      followUp = date.toISOString();
    }
    return {
      full_name: record.full_name, company: record.company || null, website: record.website || null, email: record.email || null,
      phone: record.phone || null, source: record.source || "csv_import", stage,
      estimated_value: numericValue, notes: record.notes || null, next_follow_up_at: followUp,
    };
  });
}

export default function SalesAssistant() {
  const [tab, setTab] = useState("overview");
  const [metrics, setMetrics] = useState(null);
  const [leads, setLeads] = useState([]);
  const [activities, setActivities] = useState([]);
  const [profile, setProfile] = useState(emptyProfile);
  const [followUps, setFollowUps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState("all");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadForm, setLeadForm] = useState(emptyLead);
  const [draftLead, setDraftLead] = useState(null);
  const [draftChannel, setDraftChannel] = useState("email");
  const [draftObjective, setDraftObjective] = useState("Introduce our solution and ask whether they would be open to a short discovery call.");
  const [draftContext, setDraftContext] = useState("");
  const [draftMessage, setDraftMessage] = useState("");
  const [draftLoading, setDraftLoading] = useState(false);
  const [draftProvider, setDraftProvider] = useState("");
  const [importing, setImporting] = useState(false);
  const [researchingLeadId, setResearchingLeadId] = useState(null);
  const [discoveryCriteria, setDiscoveryCriteria] = useState({ industry: "", location: "", keywords: "", ideal_customer: "", limit: 15 });
  const [discoveryResults, setDiscoveryResults] = useState([]);
  const [selectedDiscoveries, setSelectedDiscoveries] = useState([]);
  const [discoveryLoading, setDiscoveryLoading] = useState(false);
  const [discoveryImporting, setDiscoveryImporting] = useState(false);
  const [discoveryConfigured, setDiscoveryConfigured] = useState(null);
  const [outreachLeadId, setOutreachLeadId] = useState("");
  const [outreachChannel, setOutreachChannel] = useState("email");
  const [outreachSubject, setOutreachSubject] = useState("A quick introduction");
  const [outreachMessage, setOutreachMessage] = useState("");
  const [outreachConsentSource, setOutreachConsentSource] = useState("");
  const [outreachConsent, setOutreachConsent] = useState(false);
  const [outreachSending, setOutreachSending] = useState(false);
  const [outreachHistory, setOutreachHistory] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [campaignName, setCampaignName] = useState("New customer introduction");
  const [campaignChannel, setCampaignChannel] = useState("email");
  const [campaignSteps, setCampaignSteps] = useState([
    { delay_hours: 0, subject: "A quick introduction", message: "Hello,\n\nI wanted to introduce our solution and see whether it may be relevant to your team. Would you be open to a short conversation?\n\nIf you would prefer not to receive further messages, just let me know." },
    { delay_hours: 72, subject: "Following up", message: "Hello,\n\nI am following up on my earlier note. If this is not relevant right now, no problem. Please let me know if you would prefer no further messages." },
  ]);
  const [campaignSaving, setCampaignSaving] = useState(false);
  const [campaignEnrollments, setCampaignEnrollments] = useState({});
  const [campaignAnalytics, setCampaignAnalytics] = useState(null);
  const importInputRef = useRef(null);

  const loadAll = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    setError("");
    try {
      const [summaryResult, leadsResult, profileResult, followResult] = await Promise.all([
        request("/sales-assistant/summary"),
        request("/sales-assistant/leads"),
        request("/sales-assistant/profile"),
        request("/sales-assistant/follow-ups"),
      ]);
      setMetrics(summaryResult.metrics);
      setActivities(summaryResult.recent_activity || []);
      setLeads(leadsResult.leads || []);
      setProfile({ ...emptyProfile, ...(profileResult.profile || {}) });
      setFollowUps(followResult.follow_ups || []);
    } catch (err) {
      setError(err.message || "Unable to load Sales Assistant data. Please sign in again or retry.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  const filteredLeads = useMemo(() => {
    const term = search.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesStage = stageFilter === "all" || lead.stage === stageFilter;
      const matchesTerm = !term || [lead.full_name, lead.company, lead.email].some((v) => String(v || "").toLowerCase().includes(term));
      return matchesStage && matchesTerm;
    });
  }, [leads, search, stageFilter]);

  const saveLead = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      const payload = {
        ...leadForm,
        estimated_value: leadForm.estimated_value === "" ? null : Number(leadForm.estimated_value),
        next_follow_up_at: leadForm.next_follow_up_at ? new Date(leadForm.next_follow_up_at).toISOString() : null,
      };
      await request("/sales-assistant/leads", { method: "POST", body: payload });
      setLeadForm(emptyLead);
      setShowLeadForm(false);
      setNotice("Lead added successfully.");
      await loadAll();
    } catch (err) {
      setError(err.message || "Could not save lead.");
    } finally {
      setSaving(false);
    }
  };

  const importCsv = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".csv")) { setError("Please choose a .csv file."); return; }
    if (file.size > 1024 * 1024) { setError("CSV files must be 1 MB or smaller."); return; }
    setImporting(true);
    setError("");
    setNotice("");
    try {
      const rows = parseCsv(await file.text());
      if (rows.length > 500) throw new Error("Import up to 500 leads at a time.");
      const result = await request("/sales-assistant/leads/import", { method: "POST", body: { rows } });
      setNotice(`Imported ${result.imported} leads. Skipped ${result.duplicates_skipped} duplicate email address(es).`);
      await loadAll();
      setTab("leads");
    } catch (err) {
      setError(err.message || "Could not import this CSV file.");
    } finally {
      setImporting(false);
    }
  };

  const updateStage = async (lead, stage) => {
    try {
      await request(`/sales-assistant/leads/${lead.id}`, { method: "PATCH", body: { stage } });
      setNotice(`${lead.full_name} moved to ${stage}.`);
      await loadAll();
    } catch (err) { setError(err.message || "Could not update lead."); }
  };

  const deleteLead = async (lead) => {
    if (!window.confirm(`Delete ${lead.full_name}? This cannot be undone.`)) return;
    try {
      await request(`/sales-assistant/leads/${lead.id}`, { method: "DELETE" });
      setNotice("Lead deleted.");
      await loadAll();
    } catch (err) { setError(err.message || "Could not delete lead."); }
  };

  const saveProfile = async (event) => {
    event.preventDefault();

    const limits = {
      business_name: 30,
      product_description: 500,
      target_customer: 300,
      value_proposition: 200,
    };

    for (const [field, maximum] of Object.entries(limits)) {
      if (countWords(profile[field]) > maximum) {
        setError(`${field.replace(/_/g, " ")} cannot exceed ${maximum} words.`);
        return;
      }
    }

    setSaving(true);
    setError("");
    try {
      const result = await request("/sales-assistant/profile", { method: "PUT", body: profile });
      setProfile({ ...emptyProfile, ...(result.profile || {}) });
      setNotice("Business profile saved. Your AI sales drafts can now use this information.");
    } catch (err) { setError(err.message || "Could not save business profile."); }
    finally { setSaving(false); }
  };

  const generateDraft = async (event) => {
    event.preventDefault();
    setDraftLoading(true);
    setError("");
    setDraftMessage("");
    try {
      const result = await request("/sales-assistant/draft", {
        method: "POST",
        body: { lead_id: draftLead?.id || null, channel: draftChannel, objective: draftObjective, context: draftContext },
      });
      setDraftMessage(result.message || "");
      setDraftProvider(result.provider || "built-in-template");
    } catch (err) { setError(err.message || "Could not generate a sales message."); }
    finally { setDraftLoading(false); }
  };

  const enrichLead = async (lead) => {
    let website = lead.website || "";
    if (!website) {
      website = window.prompt(`Enter the public company website for ${lead.company || lead.full_name}:`, "https://");
      if (!website) return;
    }
    website = website.trim();
    if (website && !/^https:\/\//i.test(website)) website = `https://${website}`;
    setResearchingLeadId(lead.id);
    setError("");
    setNotice("");
    try {
      const result = await request(`/sales-assistant/leads/${lead.id}/enrich`, {
        method: "POST", body: { website },
      });
      setNotice(`Research brief updated for ${lead.company || lead.full_name}. Source: ${result.research?.source_url || website}`);
      await loadAll();
      setTab("research");
    } catch (err) {
      setError(err.message || "Could not research this company website.");
    } finally {
      setResearchingLeadId(null);
    }
  };

  const [autoGenerating, setAutoGenerating] = useState(false);

  const runAutoLeadDiscovery = async () => {
    if (discoveryCriteria.industry.trim().length < 2) {
      setError("Enter an industry or market before running autonomous discovery.");
      return;
    }
    setAutoGenerating(true);
    setError("");
    setNotice("");
    try {
      const result = await request("/sales-assistant/autonomous/generate-leads", {
        method: "POST",
        body: {
          industry: discoveryCriteria.industry,
          location: discoveryCriteria.location,
          keywords: [discoveryCriteria.keywords, discoveryCriteria.ideal_customer]
            .filter(Boolean)
            .join(", "),
          limit: discoveryCriteria.limit,
        },
      });
      setNotice(
        `Autonomous discovery generated and researched ${result.generated_count ?? 0} leads into your pipeline.`
      );
      await loadAll(true);
      setTab("leads");
    } catch (err) {
      setError(err.message || "Autonomous lead generation failed.");
    } finally {
      setAutoGenerating(false);
    }
  };

  const runDiscovery = async (event) => {
    event.preventDefault();
    setDiscoveryLoading(true);
    setError("");
    setNotice("");
    setDiscoveryResults([]);
    setSelectedDiscoveries([]);
    try {
      const result = await request("/sales-assistant/discover", { method: "POST", body: discoveryCriteria });
      setDiscoveryResults(result.results || []);
      setNotice(result.notice || `Found ${result.result_count || 0} company results. Review them before importing.`);
    } catch (err) {
      setError(err.message || "Could not discover prospects.");
    } finally { setDiscoveryLoading(false); }
  };

  const [runningCycle, setRunningCycle] = useState(false);

  const triggerAutonomousCycle = async () => {
    setRunningCycle(true);
    setError("");
    setNotice("");
    try {
      const result = await request("/sales-assistant/autonomous/run", {
        method: "POST",
      });
      const report = result.report || {};
      setNotice(
        `Autonomous cycle complete: ${report.leads_scored ?? 0} leads scored, ` +
        `${report.leads_qualified ?? 0} qualified, ${report.stalled_deals_flagged ?? 0} stalled deals flagged.`
      );
      await loadAll(true);
    } catch (err) {
      setError(err.message || "Failed to execute autonomous sales cycle.");
    } finally {
      setRunningCycle(false);
    }
  };

  const importDiscoveries = async () => {
    const selected = discoveryResults.filter((candidate) => selectedDiscoveries.includes(candidate.id));
    if (!selected.length) return;
    setDiscoveryImporting(true);
    setError("");
    try {
      const result = await request("/sales-assistant/discover/import", {
        method: "POST",
        body: { candidates: selected.map(({ company_name, website, source_url, title, snippet, qualification_score }) => ({ company_name, website, source_url, title, snippet, qualification_score })) },
      });
      setNotice(`Added ${result.added} companies to your pipeline. Skipped ${result.duplicates_skipped} duplicates.`);
      setDiscoveryResults((current) => current.filter((candidate) => !selectedDiscoveries.includes(candidate.id)));
      setSelectedDiscoveries([]);
      await loadAll();
      setTab("leads");
    } catch (err) {
      setError(err.message || "Could not add discovered companies.");
    } finally { setDiscoveryImporting(false); }
  };

  const loadOutreach = async () => {
    try {
      const result = await request("/sales-assistant/outreach");
      setOutreachHistory(result.messages || []);
    } catch (err) { setError(err.message || "Could not load outreach history."); }
  };

  useEffect(() => { if (tab === "outreach") loadOutreach(); }, [tab]);

  const loadCampaigns = async () => {
    try {
      const [result, analytics] = await Promise.all([request("/sales-assistant/campaigns"), request("/sales-assistant/analytics/campaigns")]);
      setCampaigns(result.campaigns || []); setCampaignAnalytics(analytics);
    } catch (err) { setError(err.message || "Could not load campaigns."); }
  };
  useEffect(() => { if (tab === "campaigns") loadCampaigns(); }, [tab]);
  const createCampaign = async (event) => {
    event.preventDefault(); setCampaignSaving(true); setError(""); setNotice("");
    try {
      const result = await request("/sales-assistant/campaigns", { method: "POST", body: { name: campaignName, channel: campaignChannel, steps: campaignSteps } });
      setNotice(`Campaign “${result.campaign.name}” created. Enroll only leads with recorded ${campaignChannel} permission.`);
      await loadCampaigns();
    } catch (err) { setError(err.message || "Could not create campaign."); }
    finally { setCampaignSaving(false); }
  };
  const enrollCampaign = async (campaign) => {
    if (!window.confirm(`Enroll all eligible leads with active ${campaign.channel} consent in “${campaign.name}”?`)) return;
    try { const result = await request(`/sales-assistant/campaigns/${campaign.id}/enroll`, { method: "POST", body: {} }); setNotice(`Enrolled ${result.enrolled} leads; skipped ${result.duplicates_skipped} duplicates.`); await loadCampaigns(); }
    catch (err) { setError(err.message || "Could not enroll leads."); }
  };
  const runCampaign = async (campaign) => {
    if (!window.confirm(`Process up to 20 due messages for “${campaign.name}” now? This can send real messages.`)) return;
    try { const result = await request(`/sales-assistant/campaigns/${campaign.id}/run-due`, { method: "POST", body: {} }); setNotice(`Campaign run: ${result.sent} sent, ${result.failed} failed, ${result.stopped} stopped.`); await Promise.all([loadCampaigns(), loadOutreach(), loadAll()]); }
    catch (err) { setError(err.message || "Could not process campaign queue."); }
  };
  const viewCampaignEnrollments = async (campaign) => {
    try { const result = await request(`/sales-assistant/campaigns/${campaign.id}/enrollments`); setCampaignEnrollments((current) => ({ ...current, [campaign.id]: result.enrollments || [] })); }
    catch (err) { setError(err.message || "Could not load campaign recipients."); }
  };
  const markCampaignReply = async (campaign, enrollment) => {
    try { await request(`/sales-assistant/campaigns/${campaign.id}/enrollments/${enrollment.id}/replied`, { method: "PATCH", body: {} }); await viewCampaignEnrollments(campaign); await loadCampaigns(); setNotice(`Sequence stopped for ${enrollment.lead?.full_name || "the prospect"} after recording a reply.`); }
    catch (err) { setError(err.message || "Could not record the reply."); }
  };
  const toggleCampaign = async (campaign) => {
    try { await request(`/sales-assistant/campaigns/${campaign.id}/status`, { method: "PATCH", body: { status: campaign.status === "paused" ? "active" : "paused" } }); await loadCampaigns(); }
    catch (err) { setError(err.message || "Could not update campaign."); }
  };

  const recordOutreachConsent = async () => {
    const lead = leads.find((item) => item.id === outreachLeadId);
    if (!lead) { setError("Select a lead first."); return; }
    if (!outreachConsentSource.trim()) { setError("Record where and when the contact gave permission."); return; }
    try {
      await request(`/sales-assistant/leads/${lead.id}/consent`, {
        method: "PATCH", body: { channel: outreachChannel, consent: outreachConsent, consent_source: outreachConsentSource.trim() },
      });
      setNotice(`${outreachChannel} consent ${outreachConsent ? "recorded" : "revoked"} for ${lead.full_name}.`);
      await loadAll();
    } catch (err) { setError(err.message || "Could not update consent."); }
  };

  const sendOutreach = async (event) => {
    event.preventDefault();
    if (!outreachLeadId) { setError("Choose a lead before sending."); return; }
    if (!window.confirm(`Send this ${outreachChannel} message now?`)) return;
    setOutreachSending(true); setError(""); setNotice("");
    try {
      await request("/sales-assistant/outreach/send", {
        method: "POST", body: {
          lead_id: outreachLeadId, channel: outreachChannel, subject: outreachSubject, message: outreachMessage,
        }
      });
      setNotice(`${outreachChannel === "email" ? "Email" : "WhatsApp message"} accepted by the delivery provider.`);
      setOutreachMessage("");
      await Promise.all([loadOutreach(), loadAll()]);
    } catch (err) { setError(err.message || "Message could not be sent."); await loadOutreach(); }
    finally { setOutreachSending(false); }
  };

  const nav = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "leads", label: "Leads", icon: Users },
    { id: "research", label: "Company research", icon: Globe },
    { id: "discover", label: "Find prospects", icon: MapPin },
    { id: "followups", label: "Follow-ups", icon: CalendarClock },
    { id: "outreach", label: "Outreach", icon: Send },
    { id: "campaigns", label: "Campaigns", icon: Target },
    { id: "assistant", label: "AI copilot", icon: WandSparkles },
    { id: "profile", label: "Business profile", icon: Settings2 },
  ];

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="mx-auto max-w-[1440px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <header className="mb-7 flex flex-col gap-5 border-b border-white/[0.07] pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-400/10"><Command size={15} /></span>
              Nexus Core / Revenue tools
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={triggerAutonomousCycle}
                disabled={runningCycle || loading}
                className="inline-flex items-center gap-2 rounded-xl border border-violet-300/25 bg-violet-500/15 px-4 py-2.5 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/25 disabled:opacity-50"
              >
                {runningCycle ? <Loader2 size={16} className="animate-spin" /> : <Zap size={16} />}
                {runningCycle ? "Running Agent…" : "Run Autonomous Cycle"}
              </button>

              <button
                onClick={() => loadAll()}
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3.5 py-2.5 text-sm text-slate-300 hover:bg-white/5 disabled:opacity-50"
              >
                <RefreshCw size={15} className={loading ? "animate-spin" : ""} /> Refresh
              </button>

              <button
                onClick={() => { setDraftLead(null); setTab("assistant"); }}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/15"
              >
                <Sparkles size={16} /> Draft with AI
              </button>

              <button
                onClick={() => setShowLeadForm(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
              >
                <Plus size={16} /> Add lead
              </button>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Sales Assistant</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">A practical AI workspace to organize prospects, prioritize opportunities and create better sales conversations.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={loadAll} disabled={loading} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3.5 py-2.5 text-sm text-slate-300 hover:bg-white/5 disabled:opacity-50"><RefreshCw size={15} className={loading ? "animate-spin" : ""} /> Refresh</button>
            <button onClick={() => { setDraftLead(null); setTab("assistant"); }} className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/15"><Sparkles size={16} /> Draft with AI</button>
            <button onClick={() => setShowLeadForm(true)} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300"><Plus size={16} /> Add lead</button>
          </div>
        </header>

        <nav className="mb-6 flex gap-1 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0b1626] p-1.5">
          {nav.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setTab(id)} className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-medium transition ${tab === id ? "bg-cyan-400 text-slate-950 shadow" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
              <Icon size={15} />{label}
            </button>
          ))}
        </nav>

        {error && <div role="alert" className="mb-5 flex items-start justify-between gap-3 rounded-xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200"><span>{error}</span><button onClick={() => setError("")}><X size={16} /></button></div>}
        {notice && <div role="status" className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"><span className="flex items-center gap-2"><Check size={16} />{notice}</span><button onClick={() => setNotice("")}><X size={16} /></button></div>}

        {loading ? (
          <div className="flex min-h-[360px] items-center justify-center text-sm text-slate-400"><Loader2 className="mr-2 animate-spin" size={18} /> Loading your sales workspace…</div>
        ) : (
          <>
            {tab === "overview" && (
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <MetricCard icon={Users} label="Total leads" value={metrics?.total_leads ?? 0} detail="Prospects in your workspace" />
                  <MetricCard icon={Target} label="Open opportunities" value={metrics?.open_leads ?? 0} detail="Not yet won or lost" accent="violet" />
                  <MetricCard icon={CircleDollarSign} label="Won revenue" value={money(metrics?.won_revenue)} detail="Value recorded on won leads" accent="emerald" />
                  <MetricCard icon={TrendingUp} label="Lead conversion" value={`${metrics?.conversion_rate ?? 0}%`} detail={`${metrics?.won_leads ?? 0} deals marked won`} accent="amber" />
                </div>
                <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
                  <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728]">
                    <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                      <div><h2 className="font-semibold text-white">Recent leads</h2><p className="mt-1 text-xs text-slate-500">Your latest sales opportunities</p></div>
                      <button onClick={() => setTab("leads")} className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-cyan-200">View all <ArrowRight size={14} /></button>
                    </div>
                    {leads.length ? <div className="divide-y divide-white/[0.05]">
                      {leads.slice(0, 5).map((lead) => <div key={lead.id} className="flex items-center justify-between gap-3 px-5 py-4">
                        <div className="min-w-0"><p className="truncate text-sm font-medium text-white">{lead.full_name}</p><p className="mt-1 truncate text-xs text-slate-500">{lead.company || lead.email || "No company details"}</p></div>
                        <div className="flex shrink-0 items-center gap-3"><span className="hidden text-xs text-slate-500 sm:block">Score {lead.score}</span><StageBadge stage={lead.stage} /></div>
                      </div>)}
                    </div> : <EmptyState icon={Users} title="Your pipeline starts here" text="Add your first prospect to start tracking opportunities." action="Add a lead" onAction={() => setShowLeadForm(true)} />}
                  </section>
                  <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728]">
                    <div className="border-b border-white/[0.07] px-5 py-4"><h2 className="font-semibold text-white">Follow-up priorities</h2><p className="mt-1 text-xs text-slate-500">Prospects with scheduled next steps</p></div>
                    {followUps.length ? <div className="divide-y divide-white/[0.05]">
                      {followUps.slice(0, 5).map((lead) => <div key={lead.id} className="flex items-center gap-3 px-5 py-4">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-amber-300"><Clock3 size={16} /></span>
                        <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium text-white">{lead.full_name}</p><p className="mt-1 text-xs text-slate-500">{dateLabel(lead.next_follow_up_at)}</p></div>
                        <button onClick={() => { setDraftLead(lead); setTab("assistant"); }} className="text-xs font-semibold text-cyan-300 hover:text-cyan-200">Prepare</button>
                      </div>)}
                    </div> : <EmptyState icon={CalendarClock} title="No follow-ups scheduled" text="Set a next action date on a lead so opportunities don't go cold." />}
                  </section>
                </div>
                <section className="rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-cyan-400/[0.08] to-violet-400/[0.05] p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200"><Bot size={22} /></span><div><h2 className="font-semibold text-white">Give your AI copilot better context</h2><p className="mt-1 max-w-2xl text-sm text-slate-400">Add your product, ideal customer and value proposition to generate more relevant sales messages.</p></div></div>
                    <button onClick={() => setTab("profile")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/15">Set up business profile <ArrowRight size={15} /></button>
                  </div>
                </section>
                <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728]">
                  <div className="border-b border-white/[0.07] px-5 py-4"><h2 className="font-semibold text-white">Recent activity</h2><p className="mt-1 text-xs text-slate-500">A record of actions in your sales workspace</p></div>
                  {activities.length ? <div className="divide-y divide-white/[0.05]">{activities.map((item) => <div key={item.id} className="flex items-start gap-3 px-5 py-3.5"><span className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-slate-400"><ClipboardList size={15} /></span><div className="min-w-0 flex-1"><p className="text-sm text-slate-200">{item.summary}</p><p className="mt-1 text-xs text-slate-500">{new Date(item.created_at).toLocaleString()}</p></div></div>)}</div> : <p className="px-5 py-8 text-center text-sm text-slate-500">Activity will appear here as you work with leads.</p>}
                </section>
              </div>
            )}

            {tab === "leads" && (
              <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1728]">
                <div className="flex flex-col gap-3 border-b border-white/[0.07] p-5 lg:flex-row lg:items-center lg:justify-between">
                  <div><h2 className="font-semibold text-white">Lead pipeline</h2><p className="mt-1 text-xs text-slate-500">{leads.length} total prospects · Import up to 500 leads from CSV · Select a stage to update an opportunity</p></div>
                  <div className="flex flex-wrap gap-2">
                    <label className="relative"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search leads…" className="w-52 rounded-xl border border-white/10 bg-[#081222] py-2.5 pl-9 pr-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/60" /></label>
                    <select value={stageFilter} onChange={(e) => setStageFilter(e.target.value)} className="rounded-xl border border-white/10 bg-[#081222] px-3 py-2.5 text-sm text-slate-300 outline-none"><option value="all">All stages</option>{STAGES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}</select>
                    <input ref={importInputRef} type="file" accept=".csv,text/csv" className="hidden" onChange={importCsv} />
                    <button onClick={() => importInputRef.current?.click()} disabled={importing} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3.5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/5 disabled:opacity-50">{importing ? <Loader2 size={15} className="animate-spin" /> : <Upload size={15} />}{importing ? "Importing…" : "Import CSV"}</button>
                    <button onClick={() => setShowLeadForm(true)} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-3.5 py-2.5 text-sm font-semibold text-slate-950"><Plus size={15} /> Add lead</button>
                  </div>
                </div>
                {filteredLeads.length ? <div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left">
                  <thead className="bg-white/[0.025] text-[11px] uppercase tracking-wider text-slate-500"><tr><th className="px-5 py-3 font-semibold">Prospect</th><th className="px-4 py-3 font-semibold">Stage</th><th className="px-4 py-3 font-semibold">Lead score</th><th className="px-4 py-3 font-semibold">Est. value</th><th className="px-4 py-3 font-semibold">Next follow-up</th><th className="px-4 py-3 font-semibold">Actions</th></tr></thead>
                  <tbody className="divide-y divide-white/[0.05]">{filteredLeads.map((lead) => <tr key={lead.id} className="hover:bg-white/[0.02]">
                    <td className="px-5 py-4"><p className="font-medium text-white">{lead.full_name}</p><p className="mt-1 text-xs text-slate-500">{[lead.company, lead.email, lead.website].filter(Boolean).join(" · ") || "No contact details"}</p></td>
                    <td className="px-4 py-4"><select value={lead.stage} onChange={(e) => updateStage(lead, e.target.value)} className="rounded-lg border border-white/10 bg-[#081222] px-2.5 py-1.5 text-xs text-slate-200 outline-none">{STAGES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}</select></td>
                    <td className="px-4 py-4"><div className="flex items-center gap-2"><div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-400" style={{ width: `${Math.max(0, Math.min(100, lead.score || 0))}%` }} /></div><span className="text-xs tabular-nums text-slate-400">{lead.score || 0}</span></div></td>
                    <td className="px-4 py-4 text-sm text-slate-300">{lead.estimated_value ? money(lead.estimated_value) : "—"}</td>
                    <td className="px-4 py-4 text-xs text-slate-400">{dateLabel(lead.next_follow_up_at)}</td>
                    <td className="px-4 py-4"><div className="flex items-center gap-1"><button title="Research company website" onClick={() => enrichLead(lead)} disabled={researchingLeadId === lead.id} className="rounded-lg p-2 text-violet-300 hover:bg-violet-300/10 disabled:opacity-50">{researchingLeadId === lead.id ? <Loader2 size={16} className="animate-spin" /> : <Globe size={16} />}</button><button title="Draft a message" onClick={() => { setDraftLead(lead); setTab("assistant"); }} className="rounded-lg p-2 text-cyan-300 hover:bg-cyan-300/10"><MessageSquareText size={16} /></button><button title="Delete lead" onClick={() => deleteLead(lead)} className="rounded-lg p-2 text-slate-500 hover:bg-rose-400/10 hover:text-rose-300"><Trash2 size={16} /></button></div></td>
                  </tr>)}</tbody>
                </table></div> : <EmptyState icon={Search} title={leads.length ? "No matching leads" : "No leads yet"} text={leads.length ? "Try another search term or stage filter." : "Add a prospect to create your first sales opportunity."} action={leads.length ? undefined : "Add your first lead"} onAction={() => setShowLeadForm(true)} />}
              </section>
            )}

            {tab === "research" && (
              <section className="space-y-4">
                <div className="rounded-2xl border border-violet-300/15 bg-gradient-to-r from-violet-400/[0.08] to-cyan-400/[0.04] p-5 sm:p-6">
                  <div className="flex items-start gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-200"><Globe size={21} /></span><div><h2 className="font-semibold text-white">Company research & lead enrichment</h2><p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">Research a prospect's public company website to create a source-linked brief. Nexus extracts public page information and, when AI is configured, summarizes only what the page supports. It does not discover private contact details or send outreach.</p></div></div>
                </div>
                {leads.filter((lead) => lead.website || lead.research_summary).length ? (
                  <div className="grid gap-4 lg:grid-cols-2">
                    {leads.filter((lead) => lead.website || lead.research_summary).map((lead) => (
                      <article key={lead.id} className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5">
                        <div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-semibold text-white">{lead.company || lead.full_name}</h3><p className="mt-1 text-xs text-slate-500">Contact: {lead.full_name}</p></div><StageBadge stage={lead.stage} /></div>
                        {lead.website && <a href={lead.website} target="_blank" rel="noreferrer" className="mt-3 inline-flex max-w-full items-center gap-2 truncate text-xs text-cyan-300 hover:text-cyan-200"><Globe size={13} />{lead.website}</a>}
                        {lead.research_summary ? <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#081222] p-4"><p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-violet-200">Research brief</p><p className="whitespace-pre-wrap text-xs leading-5 text-slate-300">{lead.research_summary}</p><p className="mt-3 text-[10px] text-slate-500">Last researched {lead.researched_at ? new Date(lead.researched_at).toLocaleString() : "—"}</p></div> : <p className="mt-4 text-xs text-slate-500">Website added. Run research to create a brief.</p>}
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-2"><span className="text-[10px] text-slate-500">{lead.research_source_url ? "Source saved" : "Not researched yet"}</span><button onClick={() => enrichLead(lead)} disabled={researchingLeadId === lead.id} className="inline-flex items-center gap-2 rounded-lg border border-violet-300/20 px-3 py-2 text-xs font-semibold text-violet-200 hover:bg-violet-300/10 disabled:opacity-50">{researchingLeadId === lead.id ? <Loader2 size={14} className="animate-spin" /> : <Globe size={14} />}{lead.research_summary ? "Refresh research" : "Research website"}</button></div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <EmptyState icon={Globe} title="No company websites to research" text="Add a website to a lead manually or include a Website column in your next CSV import. Then return here to build a research brief." action="View leads" onAction={() => setTab("leads")} />
                )}
              </section>
            )}

            {tab === "discover" && (
              <div className="space-y-5">
                <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5 sm:p-6">
                  <div className="mb-5 flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-200"><MapPin size={21} /></span>
                    <div><h2 className="font-semibold text-white">Discover potential customers</h2><p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">Search public web results for companies by industry, location and keywords. Results are preliminary prospects—not verified buyers or named decision-makers. Review the source before adding any company to your pipeline.</p></div>
                  </div>
                  <form onSubmit={runDiscovery} className="grid gap-4 md:grid-cols-2">
                    <Field label="Industry or market" value={discoveryCriteria.industry} onChange={(value) => setDiscoveryCriteria((current) => ({ ...current, industry: value }))} placeholder="e.g. private hospitals, logistics, accounting firms" required />
                    <Field label="Location" value={discoveryCriteria.location} onChange={(value) => setDiscoveryCriteria((current) => ({ ...current, location: value }))} placeholder="e.g. Nairobi, Kenya" />
                    <Field label="Keywords" value={discoveryCriteria.keywords} onChange={(value) => setDiscoveryCriteria((current) => ({ ...current, keywords: value }))} placeholder="e.g. customer support, SaaS, 24/7 operations" />
                    <Field label="Ideal customer clues" value={discoveryCriteria.ideal_customer} onChange={(value) => setDiscoveryCriteria((current) => ({ ...current, ideal_customer: value }))} placeholder="e.g. multi-branch businesses with support teams" />
                    <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Maximum results</span><select value={discoveryCriteria.limit} onChange={(event) => setDiscoveryCriteria((current) => ({ ...current, limit: Number(event.target.value) }))} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none"><option value={5}>5 companies</option><option value={10}>10 companies</option><option value={15}>15 companies</option><option value={20}>20 companies</option></select></label>
                    <div className="flex items-end"><button type="submit" disabled={discoveryLoading || discoveryCriteria.industry.trim().length < 2} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 disabled:opacity-50">{discoveryLoading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}{discoveryLoading ? "Searching public sources…" : "Find companies"}</button></div>
                  </form>
                  <p className="mt-4 text-[11px] leading-5 text-slate-500">Search is powered by the configured Brave Search API. Your API key stays on the server. The fit score is a keyword-based starting point and must not be treated as a verified qualification.</p>
                </section>
                {discoveryResults.length > 0 && (
                  <section className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1728]">
                    <div className="flex flex-col gap-3 border-b border-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-semibold text-white">Discovery results</h2><p className="mt-1 text-xs text-slate-500">{discoveryResults.length} company websites returned · select the companies you want to add</p></div><button onClick={importDiscoveries} disabled={!selectedDiscoveries.length || discoveryImporting} className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-3.5 py-2.5 text-xs font-semibold text-slate-950 disabled:opacity-40">{discoveryImporting ? <Loader2 size={14} className="animate-spin" /> : <Plus size={14} />}Add selected ({selectedDiscoveries.length})</button></div>
                    <div className="divide-y divide-white/[0.05]">{discoveryResults.map((candidate) => {
                      const checked = selectedDiscoveries.includes(candidate.id);
                      return <article key={candidate.id} className="flex gap-3 px-5 py-4 hover:bg-white/[0.02]">
                        <input aria-label={`Select ${candidate.company_name}`} type="checkbox" checked={checked} onChange={(event) => setSelectedDiscoveries((current) => event.target.checked ? [...current, candidate.id] : current.filter((id) => id !== candidate.id))} className="mt-1 h-4 w-4 shrink-0 accent-cyan-400" />
                        <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="font-medium text-white">{candidate.company_name}</h3><span className="rounded-full bg-violet-400/10 px-2 py-0.5 text-[10px] font-semibold text-violet-200">Preliminary fit {candidate.qualification_score}/100</span></div><a href={candidate.website} target="_blank" rel="noreferrer" className="mt-1 inline-flex max-w-full items-center gap-1 truncate text-xs text-cyan-300 hover:text-cyan-200"><Globe size={12} />{candidate.website}</a>{candidate.snippet && <p className="mt-2 text-xs leading-5 text-slate-400">{candidate.snippet}</p>}<p className="mt-2 text-[10px] text-slate-500">{candidate.qualification_reason}</p><a href={candidate.source_url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[10px] text-slate-500 underline decoration-slate-700 underline-offset-2 hover:text-slate-300">Open original search result</a></div>
                      </article>;
                    })}</div>
                  </section>
                )}
                {!discoveryResults.length && !discoveryLoading && <div className="rounded-2xl border border-dashed border-white/10 px-5 py-10 text-center"><Search size={25} className="mx-auto text-slate-600" /><h3 className="mt-3 font-medium text-white">Ready to find new prospects?</h3><p className="mt-1 text-sm text-slate-500">Enter an industry and optional location to search public company results.</p></div>}
              </div>
            )}

            {tab === "followups" && (
              <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728]">
                <div className="border-b border-white/[0.07] px-5 py-4"><h2 className="font-semibold text-white">Follow-up queue</h2><p className="mt-1 text-xs text-slate-500">Scheduled next steps for open opportunities</p></div>
                {followUps.length ? <div className="divide-y divide-white/[0.05]">{followUps.map((lead) => {
                  const overdue = new Date(lead.next_follow_up_at) < new Date();
                  return <div key={lead.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${overdue ? "bg-rose-400/10 text-rose-300" : "bg-amber-400/10 text-amber-300"}`}><CalendarClock size={17} /></span>
                    <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><p className="font-medium text-white">{lead.full_name}</p><StageBadge stage={lead.stage} />{overdue && <span className="rounded-full bg-rose-400/10 px-2 py-1 text-[10px] font-semibold text-rose-300">Overdue</span>}</div><p className="mt-1 text-xs text-slate-500">{lead.company || "No company"} · Due {dateLabel(lead.next_follow_up_at)}</p></div>
                    <button onClick={() => { setDraftLead(lead); setTab("assistant"); }} className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-300/20 px-3 py-2 text-xs font-semibold text-cyan-200 hover:bg-cyan-300/10"><Sparkles size={14} /> Prepare follow-up</button>
                  </div>;
                })}</div> : <EmptyState icon={CalendarClock} title="Your follow-up queue is clear" text="Schedule a next follow-up date when creating or updating a lead." action="View leads" onAction={() => setTab("leads")} />}
              </section>
            )}

            {tab === "outreach" && (
              <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.8fr)]">
                <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/10 text-cyan-200"><Send size={19} /></span><div><h2 className="font-semibold text-white">Consent-aware outreach</h2><p className="text-xs text-slate-400">Prepare and send a one-to-one message only after recording permission. WhatsApp free-form text may be restricted to an active 24-hour customer-service window; approved templates may be required outside it.</p></div></div>
                  <form onSubmit={sendOutreach} className="space-y-4">
                    <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Lead</span><select value={outreachLeadId} onChange={(e) => setOutreachLeadId(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white"><option value="">Choose a lead</option>{leads.map((lead) => <option key={lead.id} value={lead.id}>{lead.full_name}{lead.company ? ` · ${lead.company}` : ""}</option>)}</select></label>
                    <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Channel</span><select value={outreachChannel} onChange={(e) => setOutreachChannel(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white"><option value="email">Email</option><option value="whatsapp">WhatsApp</option></select></label>
                    {outreachChannel === "email" && <Field label="Subject" value={outreachSubject} onChange={setOutreachSubject} placeholder="A quick introduction" />}
                    <TextAreaField label="Message" value={outreachMessage} onChange={setOutreachMessage} placeholder="Write a relevant, respectful message. Include your identity and a simple way to opt out where applicable." rows={8} />
                    <div className="rounded-xl border border-amber-300/15 bg-amber-300/[0.06] p-4"><div className="flex items-center gap-2 text-sm font-semibold text-amber-200"><ShieldCheck size={16} /> Contact permission</div>
                      {(() => { const lead = leads.find((item) => item.id === outreachLeadId); const granted = outreachChannel === "email" ? lead?.email_consent : lead?.whatsapp_consent; return <p className="mt-1 text-xs text-slate-400">Current {outreachChannel} consent: <strong className={granted && !(outreachChannel === "email" ? lead?.email_opted_out_at : lead?.whatsapp_opted_out_at) ? "text-emerald-300" : "text-rose-300"}>{granted && !(outreachChannel === "email" ? lead?.email_opted_out_at : lead?.whatsapp_opted_out_at) ? "Recorded" : "Not recorded"}</strong></p>; })()}
                      <div className="mt-3 grid gap-3 sm:grid-cols-2"><label className="block"><span className="mb-1.5 block text-xs text-slate-400">Consent status</span><select value={outreachConsent ? "yes" : "no"} onChange={(e) => setOutreachConsent(e.target.value === "yes")} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3 py-2 text-sm text-white"><option value="yes">Permission granted</option><option value="no">Permission withdrawn</option></select></label><Field label="Consent source / evidence" value={outreachConsentSource} onChange={setOutreachConsentSource} placeholder="e.g. website form, date and reference" /></div>
                      <button type="button" onClick={recordOutreachConsent} className="mt-3 rounded-lg border border-amber-200/20 px-3 py-2 text-xs font-semibold text-amber-100 hover:bg-amber-200/10">Save consent record</button>
                    </div>
                    <button disabled={outreachSending || !outreachMessage.trim()} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-50">{outreachSending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Confirm and send</button>
                  </form>
                </section>
                <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5 sm:p-6"><div className="mb-4 flex items-center justify-between"><div><h2 className="font-semibold text-white">Recent outreach</h2><p className="mt-1 text-xs text-slate-400">Provider acceptance and delivery attempts.</p></div><button onClick={loadOutreach} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 hover:bg-white/5">Refresh</button></div>
                  {outreachHistory.length ? <div className="space-y-3">{outreachHistory.map((item) => <div key={item.id} className="rounded-xl border border-white/[0.07] bg-[#081222] p-3"><div className="flex items-center justify-between gap-2"><span className="text-xs font-semibold uppercase text-cyan-200">{item.channel}</span><span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${item.status === "sent" ? "bg-emerald-400/10 text-emerald-300" : item.status === "failed" ? "bg-rose-400/10 text-rose-300" : "bg-amber-400/10 text-amber-300"}`}>{item.status}</span></div><p className="mt-2 break-all text-xs text-slate-400">{item.destination}</p><p className="mt-2 line-clamp-3 whitespace-pre-wrap text-sm text-slate-200">{item.body}</p>{item.error_message && <p className="mt-2 text-xs text-rose-300">{item.error_message}</p>}<p className="mt-2 text-[10px] text-slate-500">{dateLabel(item.created_at)}</p></div>)}</div> : <EmptyState icon={MessageSquareText} title="No outreach yet" text="Messages sent through configured providers will appear here." />}
                </section>
              </div>
            )}

            {tab === "campaigns" && (
              <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,.9fr)]">
                <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5 sm:p-6">
                  <div className="mb-5"><h2 className="text-lg font-semibold text-white">Build a consent-aware sequence</h2><p className="mt-1 text-sm text-slate-400">Create up to five timed messages. Provider webhooks update delivery and reply analytics; due queues still require an explicit run.</p></div>
                  <form onSubmit={createCampaign} className="space-y-4">
                    <Field label="Campaign name" value={campaignName} onChange={setCampaignName} required placeholder="New customer introduction" />
                    <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Channel</span><select value={campaignChannel} onChange={(e) => setCampaignChannel(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white"><option value="email">Email</option><option value="whatsapp">WhatsApp</option></select></label>
                    {campaignSteps.map((step, index) => <div key={index} className="rounded-xl border border-white/10 bg-[#081222] p-4"><div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold text-white">Step {index + 1}</h3>{index > 0 && <button type="button" onClick={() => setCampaignSteps((items) => items.filter((_, i) => i !== index))} className="text-xs text-rose-300">Remove</button>}</div><Field label="Hours after campaign start" type="number" min="0" max="720" value={step.delay_hours} onChange={(value) => setCampaignSteps((items) => items.map((item, i) => i === index ? { ...item, delay_hours: Number(value) } : item))} />{campaignChannel === "email" && <Field label="Email subject" value={step.subject} onChange={(value) => setCampaignSteps((items) => items.map((item, i) => i === index ? { ...item, subject: value } : item))} placeholder="A quick introduction" />}<TextAreaField label="Message" value={step.message} onChange={(value) => setCampaignSteps((items) => items.map((item, i) => i === index ? { ...item, message: value } : item))} rows={5} placeholder="Write a relevant, respectful message. Include an opt-out path." /></div>)}
                    <button type="button" disabled={campaignSteps.length >= 5} onClick={() => setCampaignSteps((items) => [...items, { delay_hours: (items[items.length - 1]?.delay_hours || 0) + 72, subject: "Following up", message: "Hello,\n\nI am following up on my earlier message. Please let me know if you would prefer no further messages." }])} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 disabled:opacity-40">+ Add sequence step</button>
                    <div className="rounded-xl border border-amber-300/15 bg-amber-300/[0.06] p-3 text-xs text-amber-100">Only leads with recorded, active channel-specific consent can be enrolled. Revoke consent to stop future steps. Record a reply to stop a sequence. Review local marketing and messaging rules before sending.</div>
                    <button disabled={campaignSaving || !campaignName.trim() || campaignSteps.some((step) => !step.message.trim())} className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-50">{campaignSaving ? "Creating…" : "Create campaign"}</button>
                  </form>
                </section>
                {campaignAnalytics?.metrics && <section className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">{[["Messages", campaignAnalytics.metrics.messages], ["Delivered", `${campaignAnalytics.metrics.delivery_rate}%`], ["Read", `${campaignAnalytics.metrics.read_rate}%`], ["Reply rate", `${campaignAnalytics.metrics.reply_rate}%`]].map(([label, value]) => <div key={label} className="rounded-xl border border-white/10 bg-[#0d1728] p-4"><p className="text-xs text-slate-400">{label}</p><p className="mt-2 text-2xl font-semibold text-white">{value}</p></div>)}</section>}
                <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5 sm:p-6"><div className="mb-4 flex items-center justify-between"><div><h2 className="font-semibold text-white">Your campaigns</h2><p className="mt-1 text-xs text-slate-400">Enroll eligible leads, pause, or process due messages.</p></div><button onClick={loadCampaigns} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300">Refresh</button></div>
                  {campaigns.length ? <div className="space-y-3">{campaigns.map((campaign) => <div key={campaign.id} className="rounded-xl border border-white/10 bg-[#081222] p-4"><div className="flex items-start justify-between gap-2"><div><h3 className="font-semibold text-white">{campaign.name}</h3><p className="mt-1 text-xs text-slate-400">{campaign.channel.toUpperCase()} · {(campaign.steps || []).length} steps · {Object.values(campaign.enrollment_counts || {}).reduce((a, b) => a + b, 0)} enrolled</p></div><span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase text-cyan-200">{campaign.status}</span></div><div className="mt-3 flex flex-wrap gap-2"><button onClick={() => enrollCampaign(campaign)} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-200">Enroll eligible leads</button><button onClick={() => runCampaign(campaign)} disabled={campaign.status !== "active"} className="rounded-lg bg-cyan-400/15 px-3 py-2 text-xs font-semibold text-cyan-200 disabled:opacity-40">Process due messages</button><button onClick={() => toggleCampaign(campaign)} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300">{campaign.status === "paused" ? "Resume" : "Pause"}</button><button onClick={() => viewCampaignEnrollments(campaign)} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300">Recipients</button></div>{campaignEnrollments[campaign.id] && <div className="mt-3 space-y-2 border-t border-white/10 pt-3">{campaignEnrollments[campaign.id].length ? campaignEnrollments[campaign.id].map((enrollment) => <div key={enrollment.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white/[0.03] p-2"><div><p className="text-xs font-medium text-white">{enrollment.lead?.full_name || "Lead unavailable"}</p><p className="text-[10px] text-slate-500">{enrollment.status}{enrollment.next_send_at ? ` · Next ${dateLabel(enrollment.next_send_at)}` : ""}{enrollment.stopped_reason ? ` · ${enrollment.stopped_reason}` : ""}</p></div>{enrollment.status === "active" && <button onClick={() => markCampaignReply(campaign, enrollment)} className="rounded-md border border-emerald-300/20 px-2 py-1 text-[10px] text-emerald-200">Record reply / stop</button>}</div>) : <p className="text-xs text-slate-500">No enrolled leads yet.</p>}</div>}</div>)}</div> : <EmptyState icon={Target} title="No campaigns yet" text="Create your first sequence to organize consent-based follow-up." />}
                </section>
              </div>
            )}

            {tab === "assistant" && (
              <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
                <section className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5 sm:p-6">
                  <div className="mb-6 flex items-start gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-400/10 text-violet-200"><Bot size={22} /></span><div><h2 className="text-lg font-semibold text-white">AI sales message studio</h2><p className="mt-1 text-sm text-slate-400">Generate a personalized first touch, follow-up or response using your business context.</p></div></div>
                  <form onSubmit={generateDraft} className="space-y-4">
                    <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Prospect</span><select value={draftLead?.id || ""} onChange={(e) => setDraftLead(leads.find((l) => l.id === e.target.value) || null)} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"><option value="">General message (no selected lead)</option>{leads.map((lead) => <option key={lead.id} value={lead.id}>{lead.full_name}{lead.company ? ` · ${lead.company}` : ""}</option>)}</select></label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Channel</span><select value={draftChannel} onChange={(e) => setDraftChannel(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"><option value="email">Email</option><option value="whatsapp">WhatsApp</option><option value="linkedin">LinkedIn</option><option value="call">Call opening</option></select></label>
                      <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Objective</span><select value={draftObjective} onChange={(e) => setDraftObjective(e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"><option>Introduce our solution and ask whether they would be open to a short discovery call.</option><option>Follow up after a previous conversation and agree on the next step.</option><option>Respond to a prospect who asked for more information.</option><option>Address a pricing concern and explain the value proposition.</option><option>Re-engage a prospect who has gone quiet.</option><option>Invite the prospect to book a product demonstration.</option></select></label>
                    </div>
                    <TextAreaField label="Additional context (optional)" value={draftContext} onChange={setDraftContext} placeholder="Mention a recent conversation, prospect need, relevant case study or specific offer. Do not include confidential information." rows={4} />
                    <button disabled={draftLoading} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60">{draftLoading ? <Loader2 size={16} className="animate-spin" /> : <WandSparkles size={16} />}{draftLoading ? "Generating…" : "Generate sales message"}</button>
                  </form>
                  {draftMessage && <div className="mt-6 rounded-xl border border-cyan-300/20 bg-[#081222] p-4">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><div className="flex items-center gap-2 text-sm font-semibold text-white"><Sparkles size={15} className="text-cyan-300" /> Generated message</div><span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-slate-400">{draftProvider === "openai" ? "AI generated" : "Template fallback"}</span></div>
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-6 text-slate-300">{draftMessage}</pre>
                    <div className="mt-4 flex flex-wrap gap-2"><button onClick={() => navigator.clipboard?.writeText(draftMessage)} className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-white/5">Copy message</button><button onClick={() => setDraftMessage("")} className="rounded-lg px-3 py-2 text-xs text-slate-500 hover:text-white">Clear</button></div>
                  </div>}
                </section>
                <aside className="space-y-4">
                  <div className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5"><div className="mb-3 flex items-center gap-2 text-cyan-200"><Zap size={17} /><h3 className="text-sm font-semibold text-white">Copilot guidance</h3></div><ul className="space-y-3 text-xs leading-5 text-slate-400"><li>• Keep the opening relevant to the prospect's role or business.</li><li>• Lead with a customer problem, not a list of features.</li><li>• Use one clear, low-friction call to action.</li><li>• Verify every claim before sending the message.</li></ul></div>
                  <div className="rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5"><div className="mb-2 flex items-center gap-2 text-violet-200"><Building2 size={17} /><h3 className="text-sm font-semibold text-white">Business context</h3></div><p className="text-xs leading-5 text-slate-400">{profile.business_name ? `${profile.business_name} · ${profile.product_description || "Add a product description for better drafts."}` : "Your business profile is not configured yet."}</p><button onClick={() => setTab("profile")} className="mt-3 text-xs font-semibold text-cyan-300 hover:text-cyan-200">Edit business profile <ArrowRight size={13} className="inline" /></button></div>
                </aside>
              </div>
            )}

            {tab === "profile" && (
              <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.07] bg-[#0d1728] p-5 sm:p-7">
                <div className="mb-6"><div className="mb-2 flex items-center gap-2 text-cyan-200"><Building2 size={18} /><span className="text-xs font-semibold uppercase tracking-wider">AI knowledge base</span></div><h2 className="text-xl font-semibold text-white">Business profile</h2><p className="mt-1 text-sm text-slate-400">Give your sales copilot accurate context about what you sell and who you serve. These details are used to personalize generated messages.</p></div>
                <form onSubmit={saveProfile} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2"><Field label="Business name" required value={profile.business_name} onChange={(v) => setProfile((p) => ({ ...p, business_name: v }))} placeholder="e.g. Acme Technologies" maxWords={30} /><Field label="Website" value={profile.website} onChange={(v) => setProfile((p) => ({ ...p, website: v }))} placeholder="https://example.com" /></div>
                  <TextAreaField label="What do you sell?" value={profile.product_description} onChange={(v) => setProfile((p) => ({ ...p, product_description: v }))} placeholder="Describe your product or service, the problem it solves and its key capabilities." rows={4} maxWords={500} />
                  <TextAreaField label="Who is your ideal customer?" value={profile.target_customer} onChange={(v) => setProfile((p) => ({ ...p, target_customer: v }))} placeholder="Describe the industries, company sizes, roles or customer types you serve." maxWords={300} />
                  <TextAreaField label="Your value proposition" value={profile.value_proposition} onChange={(v) => setProfile((p) => ({ ...p, value_proposition: v }))} placeholder="Why should customers choose you? Include verified differentiators." maxWords={200} />
                  <label className="block max-w-xs"><span className="mb-1.5 block text-xs font-medium text-slate-400">Writing tone</span><select value={profile.tone} onChange={(e) => setProfile((p) => ({ ...p, tone: e.target.value }))} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none focus:border-cyan-400/60"><option value="professional">Professional</option><option value="friendly">Friendly</option><option value="confident">Confident</option><option value="consultative">Consultative</option></select></label>
                  <div className="border-t border-white/[0.07] pt-5"><button disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300 disabled:opacity-60">{saving ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />} Save business profile</button></div>
                </form>
              </div>
            )}
          </>
        )}
      </div>

      {showLeadForm && <Modal title="Add a new lead" onClose={() => setShowLeadForm(false)} wide>
        <form onSubmit={saveLead} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" required value={leadForm.full_name} onChange={(v) => setLeadForm((p) => ({ ...p, full_name: v }))} placeholder="Jane Smith" />
            <Field label="Company" value={leadForm.company} onChange={(v) => setLeadForm((p) => ({ ...p, company: v }))} placeholder="Company name" />
            <Field label="Company website" value={leadForm.website} onChange={(v) => setLeadForm((p) => ({ ...p, website: v }))} placeholder="https://company.com" />
            <Field label="Email" type="email" value={leadForm.email} onChange={(v) => setLeadForm((p) => ({ ...p, email: v }))} placeholder="jane@company.com" />
            <Field label="Phone" value={leadForm.phone} onChange={(v) => setLeadForm((p) => ({ ...p, phone: v }))} placeholder="+254…" />
            <Field label="Estimated deal value (USD)" type="number" min="0" step="0.01" value={leadForm.estimated_value} onChange={(v) => setLeadForm((p) => ({ ...p, estimated_value: v }))} placeholder="0.00" />
            <Field label="Next follow-up" type="datetime-local" value={leadForm.next_follow_up_at} onChange={(v) => setLeadForm((p) => ({ ...p, next_follow_up_at: v }))} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Lead source</span><select value={leadForm.source} onChange={(e) => setLeadForm((p) => ({ ...p, source: e.target.value }))} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none"><option value="manual">Manual entry</option><option value="website">Website</option><option value="referral">Referral</option><option value="social">Social media</option><option value="campaign">Campaign</option><option value="event">Event</option></select></label>
            <label className="block"><span className="mb-1.5 block text-xs font-medium text-slate-400">Pipeline stage</span><select value={leadForm.stage} onChange={(e) => setLeadForm((p) => ({ ...p, stage: e.target.value }))} className="w-full rounded-xl border border-white/10 bg-[#081222] px-3.5 py-2.5 text-sm text-white outline-none">{STAGES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}</select></label>
          </div>
          <TextAreaField label="Notes and customer needs" value={leadForm.notes} onChange={(v) => setLeadForm((p) => ({ ...p, notes: v }))} placeholder="What problem are they trying to solve? What have they asked for?" rows={3} />
          <div className="flex justify-end gap-2 border-t border-white/[0.07] pt-4"><button type="button" onClick={() => setShowLeadForm(false)} className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5">Cancel</button><button disabled={saving} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 disabled:opacity-60">{saving ? <Loader2 size={15} className="animate-spin" /> : <Plus size={15} />} Save lead</button></div>
        </form>
      </Modal>}
    </div>
  );
}

function EmptyState({ icon: Icon, title, text, action, onAction }) {
  return <div className="flex flex-col items-center px-6 py-12 text-center"><span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-slate-400"><Icon size={19} /></span><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-1 max-w-sm text-xs leading-5 text-slate-500">{text}</p>{action && <button onClick={onAction} className="mt-4 rounded-lg border border-cyan-300/20 px-3.5 py-2 text-xs font-semibold text-cyan-200 hover:bg-cyan-300/10">{action}</button>}</div>;
}
