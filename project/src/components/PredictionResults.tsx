import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Target, Zap } from 'lucide-react';
import { Stock, PredictionResult } from '../types/Stock';

interface PredictionResultsProps {
  selectedStock: Stock | null;
  trainingProgress: number;
}

const PredictionResults: React.FC<PredictionResultsProps> = ({ selectedStock, trainingProgress }) => {
  const predictions: PredictionResult[] = useMemo(() => {
    if (!selectedStock) return [];
    
    const results: PredictionResult[] = [];
    let basePrice = selectedStock.price;
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      
      // Simulate prediction with some trend and volatility
      const trendFactor = 1 + (Math.sin(i * 0.1) * 0.02);
      const volatilityFactor = 1 + (Math.random() - 0.5) * 0.05;
      const predictedPrice = basePrice * trendFactor * volatilityFactor;
      
      const confidence = Math.max(50, 95 - (i * 1.5) + (Math.random() * 10));
      
      let trend: 'bullish' | 'bearish' | 'neutral';
      if (predictedPrice > basePrice * 1.02) trend = 'bullish';
      else if (predictedPrice < basePrice * 0.98) trend = 'bearish';
      else trend = 'neutral';
      
      results.push({
        date: date.toISOString().split('T')[0],
        predictedPrice: Number(predictedPrice.toFixed(2)),
        confidence: Number(confidence.toFixed(1)),
        trend
      });
      
      basePrice = predictedPrice;
    }
    
    return results;
  }, [selectedStock]);

  const confidenceDistribution = useMemo(() => {
    const ranges = [
      { range: '90-100%', count: 0, color: '#10b981' },
      { range: '80-90%', count: 0, color: '#3b82f6' },
      { range: '70-80%', count: 0, color: '#f59e0b' },
      { range: '60-70%', count: 0, color: '#ef4444' },
      { range: '<60%', count: 0, color: '#6b7280' }
    ];
    
    predictions.forEach(pred => {
      if (pred.confidence >= 90) ranges[0].count++;
      else if (pred.confidence >= 80) ranges[1].count++;
      else if (pred.confidence >= 70) ranges[2].count++;
      else if (pred.confidence >= 60) ranges[3].count++;
      else ranges[4].count++;
    });
    
    return ranges;
  }, [predictions]);

  if (!selectedStock) {
    return (
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
        <Target className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">No Stock Selected</h3>
        <p className="text-slate-400">Select a stock to view AI-generated predictions.</p>
      </div>
    );
  }

  if (trainingProgress < 100) {
    return (
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
        <AlertTriangle className="w-16 h-16 text-orange-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Model Training Required</h3>
        <p className="text-slate-400">Complete model training to generate predictions for {selectedStock.symbol}.</p>
        <div className="mt-4">
          <div className="w-64 bg-slate-700 rounded-full h-2 mx-auto">
            <div 
              className="bg-orange-400 h-2 rounded-full transition-all"
              style={{ width: `${trainingProgress}%` }}
            />
          </div>
          <p className="text-sm text-slate-400 mt-2">{trainingProgress.toFixed(1)}% Complete</p>
        </div>
      </div>
    );
  }

  const averageConfidence = predictions.reduce((acc, pred) => acc + pred.confidence, 0) / predictions.length;
  const bullishCount = predictions.filter(p => p.trend === 'bullish').length;
  const bearishCount = predictions.filter(p => p.trend === 'bearish').length;
  const neutralCount = predictions.filter(p => p.trend === 'neutral').length;

  const priceChange = predictions[predictions.length - 1]?.predictedPrice - selectedStock.price;
  const priceChangePercent = (priceChange / selectedStock.price) * 100;

  return (
    <div className="space-y-6">
      {/* Prediction Header */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">AI Predictions for {selectedStock.symbol}</h2>
            <p className="text-slate-400">30-day forecast based on trained models</p>
          </div>
          <div className="flex items-center space-x-2 bg-green-600/20 border border-green-500/50 rounded-lg px-3 py-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Model Ready</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-400 text-sm">30-Day Target</p>
            <Target className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-2xl font-bold text-white">
            ${predictions[predictions.length - 1]?.predictedPrice.toFixed(2)}
          </p>
          <p className={`text-sm ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {priceChange >= 0 ? '+' : ''}{priceChangePercent.toFixed(2)}%
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-400 text-sm">Avg. Confidence</p>
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <p className="text-2xl font-bold text-white">{averageConfidence.toFixed(1)}%</p>
          <p className="text-sm text-yellow-400">High Confidence</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-400 text-sm">Bullish Days</p>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-2xl font-bold text-white">{bullishCount}</p>
          <p className="text-sm text-green-400">{((bullishCount / predictions.length) * 100).toFixed(0)}% of forecast</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-slate-400 text-sm">Bearish Days</p>
            <TrendingDown className="w-5 h-5 text-red-400" />
          </div>
          <p className="text-2xl font-bold text-white">{bearishCount}</p>
          <p className="text-sm text-red-400">{((bearishCount / predictions.length) * 100).toFixed(0)}% of forecast</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Price Prediction Chart */}
        <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Price Forecast</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={predictions}>
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
                  dataKey="predictedPrice"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Confidence Distribution */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Confidence Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={confidenceDistribution} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" stroke="#9ca3af" fontSize={12} />
                <YAxis dataKey="range" type="category" stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Prediction Table */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Detailed Predictions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left text-slate-400 py-3">Date</th>
                <th className="text-left text-slate-400 py-3">Predicted Price</th>
                <th className="text-left text-slate-400 py-3">Change</th>
                <th className="text-left text-slate-400 py-3">Confidence</th>
                <th className="text-left text-slate-400 py-3">Trend</th>
              </tr>
            </thead>
            <tbody>
              {predictions.slice(0, 10).map((prediction, index) => {
                const prevPrice = index === 0 ? selectedStock.price : predictions[index - 1].predictedPrice;
                const change = prediction.predictedPrice - prevPrice;
                const changePercent = (change / prevPrice) * 100;
                
                return (
                  <tr key={prediction.date} className="border-b border-slate-700/50">
                    <td className="py-3 text-white">
                      {new Date(prediction.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 text-white font-semibold">
                      ${prediction.predictedPrice.toFixed(2)}
                    </td>
                    <td className={`py-3 ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {change >= 0 ? '+' : ''}{changePercent.toFixed(2)}%
                    </td>
                    <td className="py-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-slate-700 rounded-full h-1.5">
                          <div 
                            className="bg-blue-400 h-1.5 rounded-full"
                            style={{ width: `${prediction.confidence}%` }}
                          />
                        </div>
                        <span className="text-slate-300">{prediction.confidence.toFixed(0)}%</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className={`flex items-center space-x-1 ${
                        prediction.trend === 'bullish' ? 'text-green-400' :
                        prediction.trend === 'bearish' ? 'text-red-400' : 'text-slate-400'
                      }`}>
                        {prediction.trend === 'bullish' ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : prediction.trend === 'bearish' ? (
                          <TrendingDown className="w-4 h-4" />
                        ) : (
                          <div className="w-4 h-0.5 bg-slate-400 rounded" />
                        )}
                        <span className="capitalize text-sm">{prediction.trend}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PredictionResults;