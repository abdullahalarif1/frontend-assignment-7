import { useGetClothesQuery } from "@/redux/features/winter-clothes/clothesApi";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const PieChart2 = () => {
  const { data, isLoading } = useGetClothesQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  

  // Render pie chart
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="price"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />

        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const item = payload[0].payload; // Assuming only one payload is shown
              return (
                <div className="custom-tooltip">
                  <p className="text-secondary">{`${item.title}: ${item.category}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChart2;
