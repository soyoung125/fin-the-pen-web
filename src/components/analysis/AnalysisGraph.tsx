import { ResponsivePie } from '@nivo/pie';
import { AnalysisData } from '../../types/common';

interface AnalysisGraphProps {
  data: AnalysisData[];
  total: number;
}

function AnalysisGraph({ data, total }: AnalysisGraphProps) {
  return (
    <ResponsivePie
      data={data}
      margin={{
        top: 0, right: 0, bottom: 0, left: 0,
      }}
      sortByValue
      colors={data.map((d) => d.color)}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabel={(e) => { const percent = (e.value / total) * 100; return `${e.id} (${percent.toFixed(1)}%)`; }}
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
      legends={[]}
    />
  );
}

export default AnalysisGraph;
