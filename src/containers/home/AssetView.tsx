import { selectIsAuthenticated } from '../../app/redux/slices/commonSlice';
import EasyAuthentication from '../sign/EasyAuthentication';
import AssetPreview from './HomeContainer/view/AssetPreview';
import { useAppSelector } from '../../app/redux/hooks';

function AssetView() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <>
      <EasyAuthentication />
      {isAuthenticated && <AssetPreview />}
    </>
  );
}
export default AssetView;
