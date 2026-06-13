import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Commodity } from '../../data/commodities';

interface CommodityCardProps {
  commodity: Commodity;
  index?: number;
}

export default function CommodityCard({ commodity, index = 0 }: CommodityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-white border border-border-light hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
        <img
          src={commodity.image}
          alt={`${commodity.name} - ${commodity.localName}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-3 left-3 z-20">
          <span className="inline-block px-2 py-1 bg-brand-primary text-white text-xs font-medium rounded">
            {commodity.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-barlow font-bold text-lg text-text-primary">
          {commodity.name}
        </h3>
        <p className="text-text-muted text-sm mb-3">({commodity.localName})</p>

        <p className="text-text-secondary text-sm line-clamp-2 mb-4">
          {commodity.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {commodity.keyMarkets.slice(0, 3).map((market) => (
              <span key={market} className="text-xs text-text-muted bg-bg-warm px-2 py-0.5 rounded">
                {market.split(' ')[0]}
              </span>
            ))}
          </div>
          <Link
            to={`/connect?commodity=${commodity.id}`}
            className="text-brand-primary text-sm font-medium hover:underline"
          >
            Enquire →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
