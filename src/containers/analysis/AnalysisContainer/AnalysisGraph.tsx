import { ResponsivePie } from '@nivo/pie';
import { AnalysisData } from '../../../types/common';

interface AnalysisGraphProps {
  data: AnalysisData[];
  total: number;
}

function AnalysisGraph({ data, total }: AnalysisGraphProps) {
  return (
    <ResponsivePie
      data={data}
      margin={{
        top: 10, right: 50, bottom: 50, left: 50
      }}
      sortByValue
      colors={data.map((d) => d.color)}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabel={(e) => { const percent = (e.value / total) * 100; return `${percent.toFixed(1)}%`; }}
      arcLabelsSkipAngle={45}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            3,
          ],
        ],
      }}
      arcLabelsRadiusOffset={1.15}
      legends={[]}
    />
  );
}

export default AnalysisGraph;
