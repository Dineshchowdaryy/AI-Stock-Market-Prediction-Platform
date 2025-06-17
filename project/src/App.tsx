import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import StockSelector from './components/StockSelector';
import ModelTraining from './components/ModelTraining';
import PredictionResults from './components/PredictionResults';
import { Stock } from './types/Stock';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'training' | 'predictions'>('dashboard');
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stock Selector - Always visible */}
          <div className="lg:col-span-1">
            <StockSelector 
              selectedStock={selectedStock} 
              onStockSelect={setSelectedStock} 
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <Dashboard selectedStock={selectedStock} />
            )}
            
            {activeTab === 'training' && (
              <ModelTraining 
                selectedStock={selectedStock}
                isTraining={isTraining}
                setIsTraining={setIsTraining}
                trainingProgress={trainingProgress}
                setTrainingProgress={setTrainingProgress}
              />
            )}
            
            {activeTab === 'predictions' && (
              <PredictionResults 
                selectedStock={selectedStock}
                trainingProgress={trainingProgress}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;