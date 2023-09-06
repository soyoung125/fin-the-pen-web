import { Box } from '@mui/material';
import ClickableListItem from '../../../../components/settings/ClickableListItem';

function Version() {
  return (
    <Box onClick={() => window.open('https://github.com/soyoung125/fin-the-pen-web/deployments/activity_log?environment=github-pages')}>
      <ClickableListItem
        title="버전 정보"
        subTitle=""
      />
    </Box>
  );
}
export default Version;
