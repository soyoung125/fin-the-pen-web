import { Box } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

function AnalysisGraph({ data, total }) {
  return (
    <Box sx={{ width: '100vw', height: '100vw' }}>
      <ResponsivePie
        data={data}
        margin={{
          top: 10, right: 60, bottom: 10, left: 60,
        }}
        sortByValue
        colors={{ scheme: 'nivo' }}
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              '0',
            ],
          ],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabel={(e) => { const percent = (parseInt(e.value, 10) / total) * 100; console.log(parseInt(e.value, 10) / total); return `${e.id} (${percent.toFixed(1)}%)`; }}
        arcLabelsSkipAngle={7}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              '2',
            ],
          ],
        }}
        legends={[]}
      />
    </Box>
  );
}

export default AnalysisGraph;
