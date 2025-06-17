import React, { useState, useEffect } from 'react';
import { Upload, Brain, Play, Pause, RotateCcw, Image, BarChart, Settings } from 'lucide-react';
import { Stock } from '../types/Stock';

interface ModelTrainingProps {
  selectedStock: Stock | null;
  isTraining: boolean;
  setIsTraining: (training: boolean) => void;
  trainingProgress: number;
  setTrainingProgress: (progress: number) => void;
}

const ModelTraining: React.FC<ModelTrainingProps> = ({
  selectedStock,
  isTraining,
  setIsTraining,
  trainingProgress,
  setTrainingProgress
}) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('lstm');
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [trainingMetrics, setTrainingMetrics] = useState({
    accuracy: 0,
    loss: 0,
    epoch: 0,
    validationAccuracy: 0
  });

  const algorithms = [
    {
      id: 'lstm',
      name: 'LSTM Neural Network',
      description: 'Long Short-Term Memory networks for time series prediction',
      accuracy: '87.3%',
      trainTime: '45-60 min'
    },
    {
      id: 'random_forest',
      name: 'Random Forest',
      description: 'Ensemble learning method for robust predictions',
      accuracy: '82.1%',
      trainTime: '15-25 min'
    },
    {
      id: 'svm',
      name: 'Support Vector Machine',
      description: 'Advanced pattern recognition for market analysis',
      accuracy: '79.8%',
      trainTime: '20-35 min'
    },
    {
      id: 'transformer',
      name: 'Transformer Network',
      description: 'State-of-the-art attention-based model',
      accuracy: '91.2%',
      trainTime: '90-120 min'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isTraining && trainingProgress < 100) {
      interval = setInterval(() => {
        setTrainingProgress(prev => {
          const newProgress = Math.min(prev + Math.random() * 2, 100);
          
          // Update metrics as training progresses
          setTrainingMetrics({
            accuracy: Math.min(85 + (newProgress / 100) * 10, 95),
            loss: Math.max(0.8 - (newProgress / 100) * 0.7, 0.1),
            epoch: Math.floor(newProgress / 2),
            validationAccuracy: Math.min(80 + (newProgress / 100) * 12, 92)
          });
          
          if (newProgress >= 100) {
            setIsTraining(false);
          }
          
          return newProgress;
        });
      }, 200);
    }

    return () => clearInterval(interval);
  }, [isTraining, trainingProgress, setIsTraining, setTrainingProgress]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedImages(prev => [...prev, ...files].slice(0, 20)); // Max 20 images
  };

  const startTraining = () => {
    if (!selectedStock) return;
    setIsTraining(true);
    setTrainingProgress(0);
  };

  const pauseTraining = () => {
    setIsTraining(false);
  };

  const resetTraining = () => {
    setIsTraining(false);
    setTrainingProgress(0);
    setTrainingMetrics({
      accuracy: 0,
      loss: 0,
      epoch: 0,
      validationAccuracy: 0
    });
  };

  if (!selectedStock) {
    return (
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
        <Brain className="w-16 h-16 text-slate-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Select a Stock for Training</h3>
        <p className="text-slate-400">Choose a stock to begin training AI models with your data.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Training Header */}
      <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">AI Model Training</h2>
            <p className="text-slate-400">Train predictive models for {selectedStock.symbol}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={resetTraining}
              disabled={isTraining}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors disabled:opacity-50"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={isTraining ? pauseTraining : startTraining}
              disabled={!selectedStock || uploadedImages.length === 0}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                isTraining 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white disabled:bg-slate-600 disabled:cursor-not-allowed'
              }`}
            >
              {isTraining ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isTraining ? 'Pause' : 'Start'} Training</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Algorithm Selection */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Algorithm Selection
          </h3>
          <div className="space-y-3">
            {algorithms.map((algo) => (
              <div
                key={algo.id}
                onClick={() => !isTraining && setSelectedAlgorithm(algo.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedAlgorithm === algo.id
                    ? 'bg-blue-600/20 border-blue-500/50'
                    : 'bg-slate-700/30 border-slate-600/50 hover:bg-slate-700/50'
                } ${isTraining ? 'cursor-not-allowed opacity-50' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{algo.name}</h4>
                  <div className="text-right">
                    <p className="text-sm text-green-400">{algo.accuracy}</p>
                    <p className="text-xs text-slate-400">{algo.trainTime}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm">{algo.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Upload */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Image className="w-5 h-5 mr-2" />
            Training Data ({uploadedImages.length}/20)
          </h3>
          
          <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center mb-4">
            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-white font-medium mb-1">Upload Chart Images</p>
            <p className="text-slate-400 text-sm mb-4">Drop files or click to browse</p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              disabled={isTraining}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className={`inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer ${
                isTraining ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Upload className="w-4 h-4 mr-2" />
              Choose Files
            </label>
          </div>

          {uploadedImages.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {uploadedImages.slice(0, 8).map((file, index) => (
                <div key={index} className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
                  <Image className="w-6 h-6 text-slate-400" />
                </div>
              ))}
              {uploadedImages.length > 8 && (
                <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400 text-sm">+{uploadedImages.length - 8}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Training Progress */}
      {(trainingProgress > 0 || isTraining) && (
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart className="w-5 h-5 mr-2" />
            Training Progress
          </h3>
          
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400">Overall Progress</span>
              <span className="text-white font-semibold">{trainingProgress.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${trainingProgress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-slate-400 text-sm">Accuracy</p>
              <p className="text-2xl font-bold text-green-400">{trainingMetrics.accuracy.toFixed(1)}%</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 text-sm">Loss</p>
              <p className="text-2xl font-bold text-orange-400">{trainingMetrics.loss.toFixed(3)}</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 text-sm">Epoch</p>
              <p className="text-2xl font-bold text-blue-400">{trainingMetrics.epoch}</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 text-sm">Val. Accuracy</p>
              <p className="text-2xl font-bold text-purple-400">{trainingMetrics.validationAccuracy.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelTraining;