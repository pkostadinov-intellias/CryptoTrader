export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  price: number;
  marketCap: number;
  marketCapRank: number;
  priceChange24h: number;
  priceChangePercentage24h: number;
  balance?: number;
}

export interface CryptoChartData {
  date: string;
  price: number;
}
