import React, { useState, useMemo } from 'react';
import { Search, TrendingUp, TrendingDown, Filter, X, BarChart3 } from 'lucide-react';
import { Stock } from '../types/Stock';
import { stockDatabase, filterStocks, getUniqueValues } from '../data/stockData';

interface StockSelectorProps {
  selectedStock: Stock | null;
  onStockSelect: (stock: Stock) => void;
}

const StockSelector: React.FC<StockSelectorProps> = ({ selectedStock, onStockSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExchange, setSelectedExchange] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'symbol' | 'price' | 'change' | 'volume'>('symbol');

  const exchanges = getUniqueValues.exchanges();
  const sectors = getUniqueValues.sectors();

  const filteredAndSortedStocks = useMemo(() => {
    let filtered = stockDatabase.filter(stock => 
      (stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
       stock.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedExchange === '' || stock.exchange === selectedExchange) &&
      (selectedSector === '' || stock.sector === selectedSector)
    );

    // Sort stocks
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return b.price - a.price;
        case 'change':
          return b.changePercent - a.changePercent;
        case 'volume':
          return b.volume - a.volume;
        default:
          return a.symbol.localeCompare(b.symbol);
      }
    });

    return filtered;
  }, [searchTerm, selectedExchange, selectedSector, sortBy]);

  const clearFilters = () => {
    setSelectedExchange('');
    setSelectedSector('');
    setSearchTerm('');
  };

  const topGainers = filterStocks.topGainers().slice(0, 5);
  const topLosers = filterStocks.topLosers().slice(0, 5);
  const mostActive = filterStocks.mostActive().slice(0, 5);

  return (
    <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Stock Selection</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg transition-colors ${
              showFilters ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Filter className="w-4 h-4" />
          </button>
          <span className="text-sm text-slate-400">{filteredAndSortedStocks.length} stocks</span>
        </div>
      </div>
      
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search stocks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="mb-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-white">Filters</h4>
            <button
              onClick={clearFilters}
              className="text-xs text-slate-400 hover:text-white flex items-center"
            >
              <X className="w-3 h-3 mr-1" />
              Clear
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Exchange</label>
              <select
                value={selectedExchange}
                onChange={(e) => setSelectedExchange(e.target.value)}
                className="w-full p-2 bg-slate-600/50 border border-slate-500/50 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Exchanges</option>
                {exchanges.map(exchange => (
                  <option key={exchange} value={exchange}>{exchange}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-xs text-slate-400 mb-1">Sector</label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full p-2 bg-slate-600/50 border border-slate-500/50 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Sectors</option>
                {sectors.map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-xs text-slate-400 mb-1">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-2 bg-slate-600/50 border border-slate-500/50 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="symbol">Symbol (A-Z)</option>
                <option value="price">Price (High to Low)</option>
                <option value="change">Change % (High to Low)</option>
                <option value="volume">Volume (High to Low)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mb-4 grid grid-cols-3 gap-2">
        <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-2 text-center">
          <p className="text-xs text-green-400">Top Gainer</p>
          <p className="text-sm font-semibold text-white">{topGainers[0]?.symbol}</p>
          <p className="text-xs text-green-400">+{topGainers[0]?.changePercent.toFixed(1)}%</p>
        </div>
        <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-2 text-center">
          <p className="text-xs text-red-400">Top Loser</p>
          <p className="text-sm font-semibold text-white">{topLosers[0]?.symbol}</p>
          <p className="text-xs text-red-400">{topLosers[0]?.changePercent.toFixed(1)}%</p>
        </div>
        <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-2 text-center">
          <p className="text-xs text-blue-400">Most Active</p>
          <p className="text-sm font-semibold text-white">{mostActive[0]?.symbol}</p>
          <p className="text-xs text-blue-400">{(mostActive[0]?.volume / 1000000).toFixed(0)}M</p>
        </div>
      </div>

      {/* Stock List */}
      <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
        {filteredAndSortedStocks.map((stock) => (
          <div
            key={stock.symbol}
            onClick={() => onStockSelect({
              symbol: stock.symbol,
              name: stock.name,
              price: stock.price,
              change: stock.change,
              changePercent: stock.changePercent,
              volume: stock.volume,
              marketCap: stock.marketCap,
              sector: stock.sector
            })}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedStock?.symbol === stock.symbol
                ? 'bg-blue-600/20 border border-blue-500/50'
                : 'bg-slate-700/30 hover:bg-slate-700/50 border border-transparent'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-white text-sm">{stock.symbol}</h4>
                  <span className="text-xs text-slate-400 bg-slate-600/50 px-1.5 py-0.5 rounded">
                    {stock.exchange}
                  </span>
                </div>
                <p className="text-slate-400 text-xs truncate">{stock.name}</p>
                <p className="text-slate-500 text-xs">{stock.sector}</p>
              </div>
              <div className="text-right ml-2">
                <p className="font-semibold text-white text-sm">${stock.price.toFixed(2)}</p>
                <div className={`flex items-center justify-end text-xs ${
                  stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stock.change >= 0 ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                </div>
                <p className="text-slate-500 text-xs">{stock.marketCap}</p>
              </div>
            </div>
          </div>
        ))}
        
        {filteredAndSortedStocks.length === 0 && (
          <div className="text-center py-8">
            <BarChart3 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-400">No stocks found</p>
            <p className="text-slate-500 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockSelector;