/**
 * 스토리북 테스트용 Providers
 * (제작중)
 */

import { Provider } from 'react-redux';
import { store } from '../app/redux/store';

interface ProvidersProps {
  children: React.ReactNode
}
function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
export default Providers;
