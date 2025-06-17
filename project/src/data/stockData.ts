export interface StockInfo {
  symbol: string;
  name: string;
  exchange: string;
  sector: string;
  industry: string;
  marketCap: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
}

// Major US Stocks Database
export const stockDatabase: StockInfo[] = [
  // Technology - FAANG & Major Tech
  { symbol: 'AAPL', name: 'Apple Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Consumer Electronics', marketCap: '2.8T', price: 178.85, change: 2.45, changePercent: 1.39, volume: 52143000 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', exchange: 'NASDAQ', sector: 'Technology', industry: 'Software', marketCap: '2.5T', price: 338.50, change: -1.25, changePercent: -0.37, volume: 28945000 },
  { symbol: 'GOOGL', name: 'Alphabet Inc. Class A', exchange: 'NASDAQ', sector: 'Technology', industry: 'Internet Services', marketCap: '1.7T', price: 138.25, change: 3.15, changePercent: 2.33, volume: 31827000 },
  { symbol: 'GOOG', name: 'Alphabet Inc. Class C', exchange: 'NASDAQ', sector: 'Technology', industry: 'Internet Services', marketCap: '1.7T', price: 139.42, change: 3.28, changePercent: 2.41, volume: 25634000 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', exchange: 'NASDAQ', sector: 'Consumer Discretionary', industry: 'E-commerce', marketCap: '1.5T', price: 142.75, change: -0.85, changePercent: -0.59, volume: 45219000 },
  { symbol: 'META', name: 'Meta Platforms Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Social Media', marketCap: '792B', price: 312.89, change: -4.23, changePercent: -1.33, volume: 19873000 },
  { symbol: 'TSLA', name: 'Tesla Inc.', exchange: 'NASDAQ', sector: 'Consumer Discretionary', industry: 'Electric Vehicles', marketCap: '789B', price: 248.42, change: 12.38, changePercent: 5.24, volume: 78543000 },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', exchange: 'NASDAQ', sector: 'Technology', industry: 'Semiconductors', marketCap: '1.1T', price: 452.67, change: 8.92, changePercent: 2.01, volume: 35672000 },
  { symbol: 'NFLX', name: 'Netflix Inc.', exchange: 'NASDAQ', sector: 'Communication Services', industry: 'Streaming', marketCap: '195B', price: 445.23, change: 7.89, changePercent: 1.80, volume: 4521000 },
  
  // Technology - Other Major Players
  { symbol: 'ORCL', name: 'Oracle Corporation', exchange: 'NYSE', sector: 'Technology', industry: 'Software', marketCap: '312B', price: 112.45, change: 1.23, changePercent: 1.11, volume: 8934000 },
  { symbol: 'CRM', name: 'Salesforce Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'Cloud Software', marketCap: '245B', price: 248.67, change: -2.34, changePercent: -0.93, volume: 3456000 },
  { symbol: 'ADBE', name: 'Adobe Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Software', marketCap: '234B', price: 512.34, change: 5.67, changePercent: 1.12, volume: 2134000 },
  { symbol: 'INTC', name: 'Intel Corporation', exchange: 'NASDAQ', sector: 'Technology', industry: 'Semiconductors', marketCap: '198B', price: 47.23, change: -0.45, changePercent: -0.94, volume: 45678000 },
  { symbol: 'AMD', name: 'Advanced Micro Devices', exchange: 'NASDAQ', sector: 'Technology', industry: 'Semiconductors', marketCap: '187B', price: 115.67, change: 3.45, changePercent: 3.07, volume: 23456000 },
  { symbol: 'CSCO', name: 'Cisco Systems Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Networking', marketCap: '201B', price: 49.78, change: 0.67, changePercent: 1.37, volume: 12345000 },
  { symbol: 'IBM', name: 'International Business Machines', exchange: 'NYSE', sector: 'Technology', industry: 'IT Services', marketCap: '156B', price: 171.23, change: 2.34, changePercent: 1.39, volume: 3456000 },
  { symbol: 'QCOM', name: 'QUALCOMM Incorporated', exchange: 'NASDAQ', sector: 'Technology', industry: 'Semiconductors', marketCap: '189B', price: 168.45, change: 4.23, changePercent: 2.57, volume: 8765000 },
  
  // Financial Services
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', exchange: 'NYSE', sector: 'Financial Services', industry: 'Banking', marketCap: '457B', price: 156.74, change: 1.85, changePercent: 1.19, volume: 12456000 },
  { symbol: 'BAC', name: 'Bank of America Corp.', exchange: 'NYSE', sector: 'Financial Services', industry: 'Banking', marketCap: '298B', price: 36.78, change: 0.45, changePercent: 1.24, volume: 34567000 },
  { symbol: 'WFC', name: 'Wells Fargo & Company', exchange: 'NYSE', sector: 'Financial Services', industry: 'Banking', marketCap: '187B', price: 47.89, change: -0.23, changePercent: -0.48, volume: 23456000 },
  { symbol: 'GS', name: 'Goldman Sachs Group Inc.', exchange: 'NYSE', sector: 'Financial Services', industry: 'Investment Banking', marketCap: '134B', price: 389.45, change: 5.67, changePercent: 1.48, volume: 1234000 },
  { symbol: 'MS', name: 'Morgan Stanley', exchange: 'NYSE', sector: 'Financial Services', industry: 'Investment Banking', marketCap: '156B', price: 89.34, change: 1.23, changePercent: 1.40, volume: 8765000 },
  { symbol: 'C', name: 'Citigroup Inc.', exchange: 'NYSE', sector: 'Financial Services', industry: 'Banking', marketCap: '98B', price: 48.67, change: -0.34, changePercent: -0.69, volume: 15678000 },
  { symbol: 'AXP', name: 'American Express Company', exchange: 'NYSE', sector: 'Financial Services', industry: 'Credit Services', marketCap: '145B', price: 189.23, change: 2.45, changePercent: 1.31, volume: 2345000 },
  { symbol: 'BRK.A', name: 'Berkshire Hathaway Inc. Class A', exchange: 'NYSE', sector: 'Financial Services', industry: 'Conglomerate', marketCap: '789B', price: 523450.00, change: 1250.00, changePercent: 0.24, volume: 12 },
  { symbol: 'BRK.B', name: 'Berkshire Hathaway Inc. Class B', exchange: 'NYSE', sector: 'Financial Services', industry: 'Conglomerate', marketCap: '789B', price: 348.90, change: 0.83, changePercent: 0.24, volume: 3456000 },
  
  // Healthcare & Pharmaceuticals
  { symbol: 'JNJ', name: 'Johnson & Johnson', exchange: 'NYSE', sector: 'Healthcare', industry: 'Pharmaceuticals', marketCap: '445B', price: 171.23, change: 1.45, changePercent: 0.85, volume: 6789000 },
  { symbol: 'PFE', name: 'Pfizer Inc.', exchange: 'NYSE', sector: 'Healthcare', industry: 'Pharmaceuticals', marketCap: '198B', price: 35.67, change: -0.23, changePercent: -0.64, volume: 23456000 },
  { symbol: 'UNH', name: 'UnitedHealth Group Inc.', exchange: 'NYSE', sector: 'Healthcare', industry: 'Health Insurance', marketCap: '512B', price: 542.34, change: 8.90, changePercent: 1.67, volume: 2345000 },
  { symbol: 'ABBV', name: 'AbbVie Inc.', exchange: 'NYSE', sector: 'Healthcare', industry: 'Pharmaceuticals', marketCap: '287B', price: 162.45, change: 2.34, changePercent: 1.46, volume: 5678000 },
  { symbol: 'TMO', name: 'Thermo Fisher Scientific Inc.', exchange: 'NYSE', sector: 'Healthcare', industry: 'Life Sciences', marketCap: '234B', price: 589.67, change: 12.34, changePercent: 2.14, volume: 1234000 },
  { symbol: 'ABT', name: 'Abbott Laboratories', exchange: 'NYSE', sector: 'Healthcare', industry: 'Medical Devices', marketCap: '189B', price: 107.89, change: 1.67, changePercent: 1.57, volume: 4567000 },
  { symbol: 'LLY', name: 'Eli Lilly and Company', exchange: 'NYSE', sector: 'Healthcare', industry: 'Pharmaceuticals', marketCap: '678B', price: 712.45, change: 15.67, changePercent: 2.25, volume: 2345000 },
  
  // Consumer Goods & Retail
  { symbol: 'WMT', name: 'Walmart Inc.', exchange: 'NYSE', sector: 'Consumer Staples', industry: 'Retail', marketCap: '456B', price: 167.89, change: 2.34, changePercent: 1.41, volume: 8765000 },
  { symbol: 'PG', name: 'Procter & Gamble Company', exchange: 'NYSE', sector: 'Consumer Staples', industry: 'Consumer Products', marketCap: '367B', price: 154.23, change: 1.23, changePercent: 0.80, volume: 5678000 },
  { symbol: 'KO', name: 'Coca-Cola Company', exchange: 'NYSE', sector: 'Consumer Staples', industry: 'Beverages', marketCap: '267B', price: 61.45, change: 0.45, changePercent: 0.74, volume: 12345000 },
  { symbol: 'PEP', name: 'PepsiCo Inc.', exchange: 'NASDAQ', sector: 'Consumer Staples', industry: 'Beverages', marketCap: '234B', price: 169.78, change: 1.89, changePercent: 1.13, volume: 3456000 },
  { symbol: 'COST', name: 'Costco Wholesale Corporation', exchange: 'NASDAQ', sector: 'Consumer Staples', industry: 'Retail', marketCap: '345B', price: 778.90, change: 12.45, changePercent: 1.62, volume: 1234000 },
  { symbol: 'HD', name: 'Home Depot Inc.', exchange: 'NYSE', sector: 'Consumer Discretionary', industry: 'Home Improvement', marketCap: '345B', price: 324.56, change: 4.67, changePercent: 1.46, volume: 3456000 },
  { symbol: 'MCD', name: 'McDonald\'s Corporation', exchange: 'NYSE', sector: 'Consumer Discretionary', industry: 'Restaurants', marketCap: '198B', price: 267.89, change: 2.34, changePercent: 0.88, volume: 2345000 },
  { symbol: 'NKE', name: 'Nike Inc.', exchange: 'NYSE', sector: 'Consumer Discretionary', industry: 'Apparel', marketCap: '156B', price: 98.76, change: -1.23, changePercent: -1.23, volume: 6789000 },
  
  // Energy & Utilities
  { symbol: 'XOM', name: 'Exxon Mobil Corporation', exchange: 'NYSE', sector: 'Energy', industry: 'Oil & Gas', marketCap: '456B', price: 108.45, change: 2.34, changePercent: 2.20, volume: 15678000 },
  { symbol: 'CVX', name: 'Chevron Corporation', exchange: 'NYSE', sector: 'Energy', industry: 'Oil & Gas', marketCap: '298B', price: 156.78, change: 3.45, changePercent: 2.25, volume: 8765000 },
  { symbol: 'COP', name: 'ConocoPhillips', exchange: 'NYSE', sector: 'Energy', industry: 'Oil & Gas', marketCap: '134B', price: 107.89, change: 1.67, changePercent: 1.57, volume: 6789000 },
  { symbol: 'NEE', name: 'NextEra Energy Inc.', exchange: 'NYSE', sector: 'Utilities', industry: 'Electric Utilities', marketCap: '156B', price: 78.90, change: 0.89, changePercent: 1.14, volume: 4567000 },
  
  // Industrial & Manufacturing
  { symbol: 'BA', name: 'Boeing Company', exchange: 'NYSE', sector: 'Industrials', industry: 'Aerospace', marketCap: '123B', price: 198.45, change: -2.34, changePercent: -1.17, volume: 8765000 },
  { symbol: 'CAT', name: 'Caterpillar Inc.', exchange: 'NYSE', sector: 'Industrials', industry: 'Machinery', marketCap: '145B', price: 267.89, change: 3.45, changePercent: 1.31, volume: 3456000 },
  { symbol: 'GE', name: 'General Electric Company', exchange: 'NYSE', sector: 'Industrials', industry: 'Conglomerate', marketCap: '134B', price: 123.45, change: 2.34, changePercent: 1.93, volume: 12345000 },
  { symbol: 'MMM', name: '3M Company', exchange: 'NYSE', sector: 'Industrials', industry: 'Conglomerate', marketCap: '67B', price: 118.90, change: 1.23, changePercent: 1.05, volume: 2345000 },
  
  // Telecommunications & Media
  { symbol: 'VZ', name: 'Verizon Communications Inc.', exchange: 'NYSE', sector: 'Communication Services', industry: 'Telecommunications', marketCap: '167B', price: 40.23, change: 0.34, changePercent: 0.85, volume: 15678000 },
  { symbol: 'T', name: 'AT&T Inc.', exchange: 'NYSE', sector: 'Communication Services', industry: 'Telecommunications', marketCap: '134B', price: 18.45, change: -0.12, changePercent: -0.65, volume: 34567000 },
  { symbol: 'DIS', name: 'Walt Disney Company', exchange: 'NYSE', sector: 'Communication Services', industry: 'Entertainment', marketCap: '189B', price: 103.67, change: 2.45, changePercent: 2.42, volume: 8765000 },
  { symbol: 'CMCSA', name: 'Comcast Corporation', exchange: 'NASDAQ', sector: 'Communication Services', industry: 'Media', marketCap: '156B', price: 36.78, change: 0.67, changePercent: 1.86, volume: 12345000 },
  
  // Real Estate & REITs
  { symbol: 'AMT', name: 'American Tower Corporation', exchange: 'NYSE', sector: 'Real Estate', industry: 'REITs', marketCap: '98B', price: 215.67, change: 3.45, changePercent: 1.63, volume: 1234000 },
  { symbol: 'PLD', name: 'Prologis Inc.', exchange: 'NYSE', sector: 'Real Estate', industry: 'REITs', marketCap: '89B', price: 119.45, change: 1.89, changePercent: 1.61, volume: 2345000 },
  
  // Emerging Tech & Growth Stocks
  { symbol: 'SHOP', name: 'Shopify Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'E-commerce Software', marketCap: '78B', price: 62.34, change: 2.45, changePercent: 4.09, volume: 5678000 },
  { symbol: 'SQ', name: 'Block Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'Financial Technology', marketCap: '45B', price: 78.90, change: 1.67, changePercent: 2.16, volume: 8765000 },
  { symbol: 'PYPL', name: 'PayPal Holdings Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Financial Technology', marketCap: '67B', price: 58.45, change: -0.89, changePercent: -1.50, volume: 12345000 },
  { symbol: 'UBER', name: 'Uber Technologies Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'Ride Sharing', marketCap: '89B', price: 43.67, change: 1.23, changePercent: 2.90, volume: 15678000 },
  { symbol: 'LYFT', name: 'Lyft Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Ride Sharing', marketCap: '12B', price: 11.45, change: 0.34, changePercent: 3.06, volume: 6789000 },
  { symbol: 'SNAP', name: 'Snap Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'Social Media', marketCap: '23B', price: 14.67, change: -0.23, changePercent: -1.54, volume: 23456000 },
  { symbol: 'TWTR', name: 'Twitter Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'Social Media', marketCap: '34B', price: 44.28, change: 1.89, changePercent: 4.46, volume: 34567000 },
  { symbol: 'SPOT', name: 'Spotify Technology S.A.', exchange: 'NYSE', sector: 'Communication Services', industry: 'Audio Streaming', marketCap: '45B', price: 234.56, change: 8.90, changePercent: 3.95, volume: 1234000 },
  { symbol: 'ZM', name: 'Zoom Video Communications', exchange: 'NASDAQ', sector: 'Technology', industry: 'Video Conferencing', marketCap: '23B', price: 78.90, change: 2.34, changePercent: 3.06, volume: 3456000 },
  { symbol: 'DOCU', name: 'DocuSign Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Software', marketCap: '12B', price: 61.23, change: 1.45, changePercent: 2.42, volume: 2345000 },
  
  // Biotech & Healthcare Innovation
  { symbol: 'GILD', name: 'Gilead Sciences Inc.', exchange: 'NASDAQ', sector: 'Healthcare', industry: 'Biotechnology', marketCap: '89B', price: 71.23, change: 1.67, changePercent: 2.40, volume: 6789000 },
  { symbol: 'BIIB', name: 'Biogen Inc.', exchange: 'NASDAQ', sector: 'Healthcare', industry: 'Biotechnology', marketCap: '34B', price: 231.45, change: 5.67, changePercent: 2.51, volume: 1234000 },
  { symbol: 'REGN', name: 'Regeneron Pharmaceuticals', exchange: 'NASDAQ', sector: 'Healthcare', industry: 'Biotechnology', marketCap: '78B', price: 712.34, change: 12.45, changePercent: 1.78, volume: 567000 },
  { symbol: 'VRTX', name: 'Vertex Pharmaceuticals Inc.', exchange: 'NASDAQ', sector: 'Healthcare', industry: 'Biotechnology', marketCap: '89B', price: 345.67, change: 8.90, changePercent: 2.64, volume: 1234000 },
  
  // Semiconductor & Hardware
  { symbol: 'TSM', name: 'Taiwan Semiconductor Mfg.', exchange: 'NYSE', sector: 'Technology', industry: 'Semiconductors', marketCap: '456B', price: 89.45, change: 2.34, changePercent: 2.69, volume: 23456000 },
  { symbol: 'ASML', name: 'ASML Holding N.V.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Semiconductor Equipment', marketCap: '234B', price: 567.89, change: 12.34, changePercent: 2.22, volume: 1234000 },
  { symbol: 'AVGO', name: 'Broadcom Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Semiconductors', marketCap: '345B', price: 823.45, change: 15.67, changePercent: 1.94, volume: 2345000 },
  { symbol: 'TXN', name: 'Texas Instruments Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Semiconductors', marketCap: '156B', price: 169.78, change: 2.34, changePercent: 1.40, volume: 3456000 },
  { symbol: 'MU', name: 'Micron Technology Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Memory Chips', marketCap: '89B', price: 78.90, change: 1.67, changePercent: 2.16, volume: 12345000 },
  
  // Electric Vehicle & Clean Energy
  { symbol: 'NIO', name: 'NIO Inc.', exchange: 'NYSE', sector: 'Consumer Discretionary', industry: 'Electric Vehicles', marketCap: '23B', price: 14.56, change: 0.89, changePercent: 6.51, volume: 45678000 },
  { symbol: 'XPEV', name: 'XPeng Inc.', exchange: 'NYSE', sector: 'Consumer Discretionary', industry: 'Electric Vehicles', marketCap: '12B', price: 11.23, change: 0.45, changePercent: 4.17, volume: 23456000 },
  { symbol: 'LI', name: 'Li Auto Inc.', exchange: 'NASDAQ', sector: 'Consumer Discretionary', industry: 'Electric Vehicles', marketCap: '34B', price: 32.45, change: 1.67, changePercent: 5.42, volume: 15678000 },
  { symbol: 'RIVN', name: 'Rivian Automotive Inc.', exchange: 'NASDAQ', sector: 'Consumer Discretionary', industry: 'Electric Vehicles', marketCap: '45B', price: 48.90, change: 2.34, changePercent: 5.02, volume: 34567000 },
  { symbol: 'LCID', name: 'Lucid Group Inc.', exchange: 'NASDAQ', sector: 'Consumer Discretionary', industry: 'Electric Vehicles', marketCap: '12B', price: 7.89, change: 0.23, changePercent: 3.00, volume: 23456000 },
  
  // Cryptocurrency & Blockchain
  { symbol: 'COIN', name: 'Coinbase Global Inc.', exchange: 'NASDAQ', sector: 'Financial Services', industry: 'Cryptocurrency Exchange', marketCap: '23B', price: 89.45, change: 4.56, changePercent: 5.37, volume: 8765000 },
  { symbol: 'MSTR', name: 'MicroStrategy Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Business Intelligence', marketCap: '12B', price: 678.90, change: 23.45, changePercent: 3.58, volume: 1234000 },
  
  // Gaming & Entertainment
  { symbol: 'ATVI', name: 'Activision Blizzard Inc.', exchange: 'NASDAQ', sector: 'Communication Services', industry: 'Video Games', marketCap: '67B', price: 86.45, change: 1.23, changePercent: 1.44, volume: 5678000 },
  { symbol: 'EA', name: 'Electronic Arts Inc.', exchange: 'NASDAQ', sector: 'Communication Services', industry: 'Video Games', marketCap: '34B', price: 123.45, change: 2.34, changePercent: 1.93, volume: 2345000 },
  { symbol: 'TTWO', name: 'Take-Two Interactive Software', exchange: 'NASDAQ', sector: 'Communication Services', industry: 'Video Games', marketCap: '23B', price: 134.56, change: 3.45, changePercent: 2.63, volume: 1234000 },
  { symbol: 'RBLX', name: 'Roblox Corporation', exchange: 'NYSE', sector: 'Communication Services', industry: 'Gaming Platform', marketCap: '12B', price: 19.78, change: 0.89, changePercent: 4.71, volume: 15678000 },
  
  // Cloud & Enterprise Software
  { symbol: 'NOW', name: 'ServiceNow Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'Cloud Software', marketCap: '123B', price: 612.34, change: 15.67, changePercent: 2.63, volume: 1234000 },
  { symbol: 'SNOW', name: 'Snowflake Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'Cloud Data', marketCap: '67B', price: 201.45, change: 8.90, changePercent: 4.62, volume: 3456000 },
  { symbol: 'PLTR', name: 'Palantir Technologies Inc.', exchange: 'NYSE', sector: 'Technology', industry: 'Data Analytics', marketCap: '34B', price: 16.78, change: 0.67, changePercent: 4.16, volume: 23456000 },
  { symbol: 'CRWD', name: 'CrowdStrike Holdings Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Cybersecurity', marketCap: '45B', price: 189.45, change: 6.78, changePercent: 3.71, volume: 2345000 },
  { symbol: 'ZS', name: 'Zscaler Inc.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Cybersecurity', marketCap: '23B', price: 167.89, change: 5.67, changePercent: 3.50, volume: 1234000 },
  
  // E-commerce & Retail Tech
  { symbol: 'BABA', name: 'Alibaba Group Holding Ltd.', exchange: 'NYSE', sector: 'Consumer Discretionary', industry: 'E-commerce', marketCap: '234B', price: 89.45, change: 2.34, changePercent: 2.69, volume: 23456000 },
  { symbol: 'JD', name: 'JD.com Inc.', exchange: 'NASDAQ', sector: 'Consumer Discretionary', industry: 'E-commerce', marketCap: '45B', price: 28.90, change: 1.23, changePercent: 4.45, volume: 8765000 },
  { symbol: 'PDD', name: 'PDD Holdings Inc.', exchange: 'NASDAQ', sector: 'Consumer Discretionary', industry: 'E-commerce', marketCap: '123B', price: 98.76, change: 4.56, changePercent: 4.84, volume: 12345000 },
  { symbol: 'MELI', name: 'MercadoLibre Inc.', exchange: 'NASDAQ', sector: 'Consumer Discretionary', industry: 'E-commerce', marketCap: '67B', price: 1345.67, change: 45.89, changePercent: 3.53, volume: 567000 },
  
  // International ADRs
  { symbol: 'ASML', name: 'ASML Holding N.V.', exchange: 'NASDAQ', sector: 'Technology', industry: 'Semiconductor Equipment', marketCap: '234B', price: 567.89, change: 12.34, changePercent: 2.22, volume: 1234000 },
  { symbol: 'SAP', name: 'SAP SE', exchange: 'NYSE', sector: 'Technology', industry: 'Enterprise Software', marketCap: '156B', price: 128.45, change: 2.34, changePercent: 1.86, volume: 2345000 },
  { symbol: 'TM', name: 'Toyota Motor Corporation', exchange: 'NYSE', sector: 'Consumer Discretionary', industry: 'Automotive', marketCap: '234B', price: 167.89, change: 3.45, changePercent: 2.10, volume: 3456000 },
  { symbol: 'SONY', name: 'Sony Group Corporation', exchange: 'NYSE', sector: 'Consumer Discretionary', industry: 'Electronics', marketCap: '89B', price: 78.90, change: 1.67, changePercent: 2.16, volume: 4567000 },
  { symbol: 'NVS', name: 'Novartis AG', exchange: 'NYSE', sector: 'Healthcare', industry: 'Pharmaceuticals', marketCap: '198B', price: 89.45, change: 1.23, changePercent: 1.39, volume: 2345000 },
];

// Generate random price movements for simulation
export const generateRandomPriceMovement = (basePrice: number): { price: number; change: number; changePercent: number } => {
  const volatility = 0.02 + Math.random() * 0.03;
  const randomFactor = (Math.random() - 0.5) * volatility;
  const newPrice = basePrice * (1 + randomFactor);
  const change = newPrice - basePrice;
  const changePercent = (change / basePrice) * 100;
  
  return {
    price: Number(newPrice.toFixed(2)),
    change: Number(change.toFixed(2)),
    changePercent: Number(changePercent.toFixed(2))
  };
};

// Filter stocks by various criteria
export const filterStocks = {
  byExchange: (exchange: string) => stockDatabase.filter(stock => stock.exchange === exchange),
  bySector: (sector: string) => stockDatabase.filter(stock => stock.sector === sector),
  byMarketCap: (minCap: string) => {
    const capValue = parseFloat(minCap.replace(/[TB]/g, ''));
    const multiplier = minCap.includes('T') ? 1000 : 1;
    return stockDatabase.filter(stock => {
      const stockCapValue = parseFloat(stock.marketCap.replace(/[TB]/g, ''));
      const stockMultiplier = stock.marketCap.includes('T') ? 1000 : 1;
      return (stockCapValue * stockMultiplier) >= (capValue * multiplier);
    });
  },
  topGainers: () => stockDatabase.filter(stock => stock.changePercent > 2).sort((a, b) => b.changePercent - a.changePercent),
  topLosers: () => stockDatabase.filter(stock => stock.changePercent < -1).sort((a, b) => a.changePercent - b.changePercent),
  mostActive: () => [...stockDatabase].sort((a, b) => b.volume - a.volume),
};

// Get unique values for filters
export const getUniqueValues = {
  exchanges: () => [...new Set(stockDatabase.map(stock => stock.exchange))],
  sectors: () => [...new Set(stockDatabase.map(stock => stock.sector))],
  industries: () => [...new Set(stockDatabase.map(stock => stock.industry))],
};