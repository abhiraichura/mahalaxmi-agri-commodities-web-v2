import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, SortAsc } from 'lucide-react';

interface CommodityPrice {
  name: string;
  category: string;
  unit: string;
  spotPrice: number;
  weekChange: number;
  monthChange: number;
  origin: string;
  exportGrade: string;
  notes: string;
}

interface PriceData {
  lastUpdated: string;
  commodities: CommodityPrice[];
}

export default function CommodityTrackerComponent() {
  const [data, setData] = useState<PriceData | null>(null);
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'weekChange'>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    fetch('/data/commodityData.json')
      .then(r => r.json())
      .then(setData);
  }, []);

  if (!data) return <div className="py-12 text-center text-text-muted">Loading price data...</div>;

  const categories = ['All', ...Array.from(new Set(data.commodities.map(c => c.category)))];

  const filtered = filter === 'All' 
    ? data.commodities 
    : data.commodities.filter(c => c.category === filter);

  const sorted = [...filtered].sort((a, b) => {
    let valA: string | number, valB: string | number;
    switch (sortBy) {
      case 'price': valA = a.spotPrice; valB = b.spotPrice; break;
      case 'weekChange': valA = a.weekChange; valB = b.weekChange; break;
      default: valA = a.name; valB = b.name;
    }
    if (typeof valA === 'string') {
      return sortDir === 'asc' ? valA.localeCompare(valB as string) : (valB as string).localeCompare(valA);
    }
    return sortDir === 'asc' ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
  });

  const toggleSort = (field: typeof sortBy) => {
    if (sortBy === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortBy(field); setSortDir('asc'); }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              filter === cat ? 'bg-brand-primary text-white' : 'bg-bg-warm text-text-secondary hover:bg-brand-primary-light'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-lg border border-border-light">
        <table className="w-full text-sm">
          <thead className="bg-bg-warm">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-text-primary cursor-pointer hover:text-brand-primary" onClick={() => toggleSort('name')}>
                <span className="flex items-center gap-1">Commodity {sortBy === 'name' && <SortAsc size={14} />}</span>
              </th>
              <th className="text-left px-4 py-3 font-semibold text-text-primary">Category</th>
              <th className="text-right px-4 py-3 font-semibold text-text-primary cursor-pointer hover:text-brand-primary" onClick={() => toggleSort('price')}>
                <span className="flex items-center justify-end gap-1">Spot Price {sortBy === 'price' && <SortAsc size={14} />}</span>
              </th>
              <th className="text-right px-4 py-3 font-semibold text-text-primary cursor-pointer hover:text-brand-primary" onClick={() => toggleSort('weekChange')}>
                <span className="flex items-center justify-end gap-1">Week {sortBy === 'weekChange' && <SortAsc size={14} />}</span>
              </th>
              <th className="text-right px-4 py-3 font-semibold text-text-primary">Month</th>
              <th className="text-left px-4 py-3 font-semibold text-text-primary">Origin</th>
              <th className="text-left px-4 py-3 font-semibold text-text-primary">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light">
            {sorted.map(item => (
              <tr key={item.name} className="hover:bg-bg-warm/50 transition-colors">
                <td className="px-4 py-3 font-medium text-text-primary">{item.name}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 bg-brand-primary-light text-brand-primary text-xs rounded-full">{item.category}</span>
                </td>
                <td className="px-4 py-3 text-right font-barlow-condensed font-bold text-lg">₹{item.spotPrice.toLocaleString()}</td>
                <td className="px-4 py-3 text-right">
                  <span className={`inline-flex items-center gap-1 ${item.weekChange >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {item.weekChange >= 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    ₹{Math.abs(item.weekChange)}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`inline-flex items-center gap-1 ${item.monthChange >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {item.monthChange >= 0 ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    ₹{Math.abs(item.monthChange)}
                  </span>
                </td>
                <td className="px-4 py-3 text-text-secondary text-xs">{item.origin}</td>
                <td className="px-4 py-3 text-text-muted text-xs max-w-xs truncate" title={item.notes}>{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-text-muted mt-4">
        Last updated: {data.lastUpdated} — Updated manually by our team twice weekly
      </p>
    </div>
  );
}
