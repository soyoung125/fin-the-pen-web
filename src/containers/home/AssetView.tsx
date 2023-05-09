import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../app/redux/slices/commonSlice';
import EasyAuthentication from '../sign/EasyAuthentication';
import AssetPreview from './HomeContainer/view/AssetPreview';

function AssetView() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      <EasyAuthentication />
      {isAuthenticated && <AssetPreview />}
    </>
  );
}
export default AssetView;
