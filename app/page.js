import BarChart from "@/components/BarChart";

export default function Home() {
  return (
    <div className="py-5">
      <h1 className="text-center text-3xl">Child-Raising Costs and Birth Rates by Country</h1>
      <BarChart />
    </div>
  );
}
