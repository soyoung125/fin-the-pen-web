import { Box } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

function AnalysisGraph() {
  const data = [
    {
      id: 'rust',
      label: 'rust',
      value: 600,
      color: 'hsl(275, 70%, 50%)',
    },
    {
      id: 'haskell',
      label: 'haskell',
      value: 106,
      color: 'hsl(358, 70%, 50%)',
    },
    {
      id: 'c',
      label: 'c',
      value: 50,
      color: 'hsl(52, 70%, 50%)',
    },
    {
      id: 'go',
      label: 'go',
      value: 13,
      color: 'hsl(19, 70%, 50%)',
    },
    {
      id: 'hack',
      label: 'hack',
      value: 18,
      color: 'hsl(300, 70%, 50%)',
    },
  ];

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
