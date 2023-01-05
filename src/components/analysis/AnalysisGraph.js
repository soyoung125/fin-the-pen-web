import { Box } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

function AnalysisGraph({ data }) {
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
