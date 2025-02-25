import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { CryptoChartData } from "../../types/crypto";

interface CryptoChartProps {
  chartData: CryptoChartData[];
}

const CryptoChart = ({ chartData }: CryptoChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="date" tick={{ fill: "#ccc" }} />
        <YAxis tick={{ fill: "#ccc" }} />
        <Tooltip
          contentStyle={{ background: "#222", border: "none", color: "#fff" }}
        />
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#22c55e"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;
