import React, { useEffect, useState } from 'react';
import { apiFetch } from '../lib/api.js';
import { Search, Globe2, Building2, ArrowUpRight, RefreshCw, Target, Database, ShieldCheck } from 'lucide-react';

export default function ProspectingCenter() {
  const [form, setForm] = useState({ industry: 'B2B software', location: '', keywords: '', ideal_customer: '', limit: 10 });
  const [prospects, setProspects] = useState([]);
  const [runs, setRuns] = useState([]);
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [contacts, setContacts] = useState({});
  const [enriching, setEnriching] = useState('');
  async function load() {
    const [p, r, s] = await Promise.all([apiFetch('/prospecting/prospects'), apiFetch('/prospecting/runs'), apiFetch('/prospecting/status')]);
    setProspects(p.prospects || []); setRuns(r.runs || []); setStatus(s.providers);
  }
  useEffect(() => { load().catch(e => setError(e.message)); }, []);
  async function discover(e) {
    e.preventDefault(); setBusy(true); setError(''); setNotice('');
    try {
      const result = await apiFetch('/prospecting/discover', { method: 'POST', body: { ...form, limit: Number(form.limit) } });
      setNotice(`Discovery completed using ${result.provider}: ${result.prospects.length} sourced company records saved.`);
      await load();
    } catch (e) { setError(e.message); } finally { setBusy(false); }
  }
  async function enrich(id) {
    setEnriching(id); setError(''); setNotice('');
    try { const result = await apiFetch(`/contacts/prospect/${id}/enrich`, { method: 'POST', body: {} }); setContacts(old => ({...old, [id]: result.contacts || []})); setNotice(`Contact enrichment returned ${result.count} records.`); }
    catch(e) { setError(e.message); } finally { setEnriching(''); }
  }
  async function convert(id) {
    setError(''); setNotice('');
    try { const result = await apiFetch(`/prospecting/prospects/${id}/convert`, { method: 'POST', body: {} }); setNotice(`Added to sales pipeline (${result.lead.id}).`); await load(); }
    catch (e) { setError(e.message); }
  }
  const field = 'mt-1 w-full rounded-xl border border-white/10 bg-[#0b192a] px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-400';
  return <main className="mx-auto max-w-7xl px-5 py-8 text-white">
    <div className="flex flex-wrap items-end justify-between gap-4"><div><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-cyan-300"><Target size={15}/> Market intelligence</div><h1 className="mt-2 text-3xl font-semibold">Prospect Discovery</h1><p className="mt-2 max-w-2xl text-sm text-slate-400">Find real companies from configured web-search sources. Every result retains its source URL; people and contact details are never fabricated.</p></div><button onClick={() => load().catch(e=>setError(e.message))} className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm"><RefreshCw size={15}/> Refresh</button></div>
    <div className="mt-6 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="text-xs text-slate-400">Saved prospects</div><div className="mt-2 text-2xl font-semibold">{prospects.length}</div></div><div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="text-xs text-slate-400">Discovery runs</div><div className="mt-2 text-2xl font-semibold">{runs.length}</div></div><div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="text-xs text-slate-400">Search providers</div><div className="mt-2 text-sm font-semibold">{status ? [status.tavily && 'Tavily', status.serper && 'Serper'].filter(Boolean).join(' + ') || 'Not configured' : 'Checking…'}</div></div></div>
    <form onSubmit={discover} className="mt-6 rounded-2xl border border-white/10 bg-white/[.03] p-5"><div className="mb-4 flex items-center gap-2 font-semibold"><Search size={17} className="text-cyan-300"/> New market discovery</div><div className="grid gap-4 md:grid-cols-2"><label className="text-xs text-slate-400">Industry *<input required className={field} value={form.industry} onChange={e=>setForm({...form,industry:e.target.value})}/></label><label className="text-xs text-slate-400">Geography<input className={field} placeholder="e.g. Kenya, East Africa" value={form.location} onChange={e=>setForm({...form,location:e.target.value})}/></label><label className="text-xs text-slate-400">Keywords<input className={field} placeholder="e.g. fintech, logistics, ERP" value={form.keywords} onChange={e=>setForm({...form,keywords:e.target.value})}/></label><label className="text-xs text-slate-400">Ideal customer description<input className={field} placeholder="e.g. 50–500 employees, growing B2B firms" value={form.ideal_customer} onChange={e=>setForm({...form,ideal_customer:e.target.value})}/></label><label className="text-xs text-slate-400">Maximum results<select className={field} value={form.limit} onChange={e=>setForm({...form,limit:e.target.value})}>{[5,10,15,20,25].map(n=><option key={n} value={n}>{n}</option>)}</select></label></div><button disabled={busy} className="mt-5 flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 disabled:opacity-50"><Search size={16}/>{busy?'Searching real sources…':'Discover companies'}</button><div className="mt-3 flex items-center gap-2 text-xs text-slate-500"><ShieldCheck size={14}/> No AI-generated companies, names, emails or phone numbers. Search provider credentials stay on the backend.</div></form>
    {error&&<div className="mt-4 rounded-xl border border-rose-400/20 bg-rose-400/10 p-3 text-sm text-rose-200">{error}</div>}{notice&&<div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-200">{notice}</div>}
    <div className="mt-8 flex items-center justify-between"><h2 className="text-xl font-semibold">Discovered companies</h2><span className="text-xs text-slate-500">Sorted by fit score</span></div>
    <div className="mt-4 space-y-3">{prospects.map(p=><article key={p.id} className="rounded-2xl border border-white/10 bg-white/[.025] p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><Building2 size={16} className="text-cyan-300"/><h3 className="font-semibold">{p.company_name}</h3></div><a href={p.website} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs text-cyan-300 hover:underline">{p.domain}<ArrowUpRight size={12}/></a><p className="mt-3 text-sm leading-6 text-slate-300">{p.description || 'No source snippet provided.'}</p><div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-500"><span>Source: {p.source_provider}</span><a href={p.source_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-cyan-300">Open source <ArrowUpRight size={11}/></a><span>Contact: {p.contact_name || 'Not identified'}</span></div></div><div className="flex min-w-[115px] flex-col items-end gap-2"><div className="rounded-lg bg-cyan-400/10 px-3 py-2 text-center"><div className="text-xl font-bold text-cyan-300">{p.fit_score}</div><div className="text-[10px] uppercase text-slate-500">Fit score</div></div><button disabled={enriching===p.id} onClick={()=>enrich(p.id)} className="rounded-lg border border-violet-300/30 px-3 py-2 text-xs text-violet-200 disabled:opacity-50">{enriching===p.id?'Enriching…':'Find business contacts'}</button>{p.status==='converted'?<span className="text-xs text-emerald-300">In sales pipeline</span>:<button onClick={()=>convert(p.id)} className="rounded-lg border border-white/10 px-3 py-2 text-xs hover:border-cyan-300/50">Add to pipeline</button>}</div></div>{contacts[p.id]?.length>0&&<div className="mt-4 border-t border-white/10 pt-3"><div className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-200">Enriched business contacts</div><div className="grid gap-2 md:grid-cols-2">{contacts[p.id].map(c=><div key={c.id} className="rounded-lg bg-black/20 p-3 text-xs"><div className="font-medium text-white">{c.full_name||'Name not provided'}{c.title?` · ${c.title}`:''}</div><div className="mt-1 text-cyan-200">{c.email}</div><div className="mt-1 text-slate-500">Confidence: {c.confidence??'—'} · Verification: {c.verification}</div></div>)}</div></div>}</article>)}{!prospects.length&&<div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-sm text-slate-500"><Database className="mx-auto mb-3"/>No prospects yet. Configure a web search provider and run your first discovery.</div>}</div>
  </main>;
}
