import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Activity, DollarSign, Volume, Users, Globe, Building2 } from 'lucide-react';
import { Stock, StockData } from '../types/Stock';

interface DashboardProps {
  selectedStock: Stock | null;
}

const Dashboard: React.FC<DashboardProps> = ({ selectedStock }) => {
  const stockData: StockData[] = useMemo(() => {
    const basePrice = selectedStock?.price || 150;
    const data: StockData[] = [];
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      const volatility = 0.02 + Math.random() * 0.03;
      const trend = Math.sin(i * 0.1) * 0.01;
      const randomFactor = (Math.random() - 0.5) * volatility;
      
      const price = basePrice * (1 + trend + randomFactor);
      const open = price * (1 + (Math.random() - 0.5) * 0.01);
      const high = Math.max(open, price) * (1 + Math.random() * 0.02);
      const low = Math.min(open, price) * (1 - Math.random() * 0.02);
      
      data.push({
        date: date.toISOString().split('T')[0],
        open: Number(open.toFixed(2)),
        high: Number(high.toFixed(2)),
        low: Number(low.toFixed(2)),
        close: Number(price.toFixed(2)),
        volume: Math.floor(Math.random() * 50000000) + 10000000,
      });
    }
    
    return data;
  }, [selectedStock]);

  const technicalIndicators = useMemo(() => {
    if (!selectedStock) return null;
    
    // Simulate technical indicators
    const rsi = 45 + Math.random() * 30; // RSI between 45-75
    const macd = (Math.random() - 0.5) * 2; // MACD between -1 and 1
    const bollinger = {
      upper: selectedStock.price * 1.05,
      lower: selectedStock.price * 0.95,
      middle: selectedStock.price
    };
    
    return { rsi, macd, bollinger };
  }, [selectedStock]);

  if (!selectedStock) {
    return (
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
        <Activity className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Select a Stock</h3>
        <p className="text-slate-400">Choose a stock from the selector to view detailed analytics and charts.</p>
      </div>
    );
  }

  const statsCards = [
    {
      title: 'Current Price',
      value: `$${selectedStock.price.toFixed(2)}`,
      change: selectedStock.changePercent,
      icon: DollarSign,
      color: selectedStock.change >= 0 ? 'text-green-400' : 'text-red-400'
    },
    {
      title: 'Market Cap',
      value: selectedStock.marketCap,
      change: null,
      icon: Building2,
      color: 'text-blue-400'
    },
    {
      title: 'Volume',
      value: `${(selectedStock.volume / 1000000).toFixed(1)}M`,
      change: null,
      icon: Volume,
      color: 'text-purple-400'
    },
    {
      title: 'Sector',
      value: selectedStock.sector,
      change: null,
      icon: Users,
      color: 'text-orange-400'
    }
  ];

  const technicalCards = technicalIndicators ? [
    {
      title: 'RSI (14)',
      value: technicalIndicators.rsi.toFixed(1),
      status: technicalIndicators.rsi > 70 ? 'Overbought' : technicalIndicators.rsi < 30 ? 'Oversold' : 'Neutral',
      color: technicalIndicators.rsi > 70 ? 'text-red-400' : technicalIndicators.rsi < 30 ? 'text-green-400' : 'text-yellow-400'
    },
    {
      title: 'MACD',
      value: technicalIndicators.macd.toFixed(3),
      status: technicalIndicators.macd > 0 ? 'Bullish' : 'Bearish',
      color: technicalIndicators.macd > 0 ? 'text-green-400' : 'text-red-400'
    },
    {
      title: 'Bollinger Upper',
      value: `$${technicalIndicators.bollinger.upper.toFixed(2)}`,
      status: 'Resistance',
      color: 'text-blue-400'
    },
    {
      title: 'Bollinger Lower',
      value: `$${technicalIndicators.bollinger.lower.toFixed(2)}`,
      status: 'Support',
      color: 'text-green-400'
    }
  ] : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl font-bold text-white">{selectedStock.name}</h2>
              <span className="bg-slate-600/50 text-slate-300 px-2 py-1 rounded text-sm">
                {selectedStock.symbol}
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                NASDAQ
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {selectedStock.sector}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-white">${selectedStock.price.toFixed(2)}</p>
            <div className={`flex items-center justify-end ${
              selectedStock.change >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {selectedStock.change >= 0 ? (
                <TrendingUp className="w-5 h-5 mr-1" />
              ) : (
                <TrendingDown className="w-5 h-5 mr-1" />
              )}
              <span className="font-semibold">
                {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change.toFixed(2)} 
                ({selectedStock.changePercent >= 0 ? '+' : ''}{selectedStock.changePercent.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400 text-sm">{stat.title}</p>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-xl font-bold text-white">{stat.value}</p>
            {stat.change !== null && (
              <p className={`text-sm ${stat.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {stat.change >= 0 ? '+' : ''}{stat.change.toFixed(2)}%
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Technical Indicators */}
      {technicalCards.length > 0 && (
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Technical Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalCards.map((indicator, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4">
                <p className="text-slate-400 text-sm mb-1">{indicator.title}</p>
                <p className="text-xl font-bold text-white mb-1">{indicator.value}</p>
                <p className={`text-sm ${indicator.color}`}>{indicator.status}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Chart */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Price Movement (30 Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stockData}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="date" 
                  stroke="#9ca3af"
                  fontSize={12}
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="close"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPrice)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Volume Chart */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Trading Volume</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="date" 
                  stroke="#9ca3af"
                  fontSize={12}
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar
                  dataKey="volume"
                  fill="#10b981"
                  opacity={0.8}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* OHLC Chart */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">OHLC Analysis</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="date" 
                stroke="#9ca3af"
                fontSize={12}
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
              />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Line
                type="monotone"
                dataKey="high"
                stroke="#ef4444"
                strokeWidth={1}
                dot={false}
                name="High"
              />
              <Line
                type="monotone"
                dataKey="low"
                stroke="#10b981"
                strokeWidth={1}
                dot={false}
                name="Low"
              />
              <Line
                type="monotone"
                dataKey="open"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={false}
                name="Open"
              />
              <Line
                type="monotone"
                dataKey="close"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                name="Close"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;