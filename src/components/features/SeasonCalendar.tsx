import { useState } from 'react';
import { motion } from 'framer-motion';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const commodities = [
  { name: 'Cumin', season: [1,2,3,4] },
  { name: 'Coriander', season: [10,11,0,1,2] },
  { name: 'Turmeric', season: [0,1,2,3,4,5,6,7,8,9,10,11] },
  { name: 'Fenugreek', season: [9,10,11,0,1,2] },
  { name: 'Chilli', season: [2,3,4,5] },
  { name: 'Toor Dal', season: [10,11,0,1] },
  { name: 'Chana', season: [2,3,4,5] },
  { name: 'Mung', season: [2,3,4] },
  { name: 'Sesame', season: [8,9,10] },
  { name: 'Groundnut', season: [9,10,11,0] },
  { name: 'Castor', season: [11,0,1,2] },
  { name: 'Mustard', season: [2,3,4] },
  { name: 'Fennel', season: [2,3,4,5] },
  { name: 'Nigella', season: [2,3,4] },
  { name: 'Cotton', season: [9,10,11,0,1,2] },
];

const getCellStatus = (commodityIndex: number, monthIndex: number) => {
  const commodity = commodities[commodityIndex];
  if (commodity.season.includes(monthIndex)) return 'peak';
  const prev = (monthIndex - 1 + 12) % 12;
  const next = (monthIndex + 1) % 12;
  if (commodity.season.includes(prev) || commodity.season.includes(next)) return 'shoulder';
  return 'off';
};

export default function SeasonCalendar() {
  const [hoveredCell, setHoveredCell] = useState<{commodity: string; month: string; status: string} | null>(null);

  return (
    <div className="overflow-x-auto pb-4">
      <div className="min-w-[800px]">
        <div className="grid grid-cols-[140px_repeat(12,1fr)] gap-1 mb-2">
          <div className="text-xs font-medium text-text-muted uppercase tracking-wider">Commodity</div>
          {months.map(m => (
            <div key={m} className="text-center text-xs font-medium text-text-muted">{m}</div>
          ))}
        </div>

        <div className="space-y-1">
          {commodities.map((commodity) => (
            <div key={commodity.name} className="grid grid-cols-[140px_repeat(12,1fr)] gap-1">
              <div className="text-sm font-medium text-text-primary flex items-center">{commodity.name}</div>
              {months.map((month, mi) => {
                const status = getCellStatus(commodities.indexOf(commodity), mi);
                const colors = {
                  peak: 'bg-emerald-500',
                  shoulder: 'bg-amber-400',
                  off: 'bg-gray-200',
                };
                return (
                  <div
                    key={month}
                    className={`h-8 rounded-sm ${colors[status]} cursor-pointer transition-all hover:scale-110 hover:shadow-md relative`}
                    onMouseEnter={() => setHoveredCell({
                      commodity: commodity.name,
                      month,
                      status: status === 'peak' ? 'Peak Season' : status === 'shoulder' ? 'Shoulder Season' : 'Off Season'
                    })}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex gap-6 mt-6 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-emerald-500 rounded-sm" />
            <span className="text-xs text-text-secondary">Peak Season</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-amber-400 rounded-sm" />
            <span className="text-xs text-text-secondary">Shoulder Season</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-200 rounded-sm" />
            <span className="text-xs text-text-secondary">Off Season</span>
          </div>
        </div>

        {hoveredCell && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 bg-text-primary text-white rounded-md text-center text-sm"
          >
            <span className="font-semibold">{hoveredCell.commodity}</span> — {hoveredCell.month}: {hoveredCell.status}
          </motion.div>
        )}
      </div>
    </div>
  );
}
