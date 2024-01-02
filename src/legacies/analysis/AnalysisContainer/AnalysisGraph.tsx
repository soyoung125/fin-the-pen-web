import { ResponsivePie } from "@nivo/pie";
import { AnalysisData } from "@app/types/common.ts";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "../../../app/redux/slices/settingSlice";

interface AnalysisGraphProps {
  data: AnalysisData[];
  total: number;
  widthRatio: number;
}

function AnalysisGraph({ data, total, widthRatio }: AnalysisGraphProps) {
  const isDarkmode = useSelector(selectIsDarkMode);
  return (
    <ResponsivePie
      data={data}
      margin={{
        top: 10,
        right: widthRatio,
        bottom: widthRatio,
        left: widthRatio,
      }}
      sortByValue
      colors={data.map((d) => d.color)}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabel={(e) => {
        const percent = (e.value / total) * 100;
        return `${percent.toFixed(1)}%`;
      }}
      arcLabelsSkipAngle={45}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [[isDarkmode ? "brighter" : "darker", 3]],
      }}
      arcLabelsRadiusOffset={1.2}
      legends={[]}
    />
  );
}

export default AnalysisGraph;
