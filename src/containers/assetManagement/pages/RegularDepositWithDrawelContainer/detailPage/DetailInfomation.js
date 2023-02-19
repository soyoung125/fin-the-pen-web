import { useLocation } from 'react-router-dom';

function DetailInfomation() {
  const { state } = useLocation();
  const { data } = state;
  console.log(data);
  return (
    <>
      상세 페이지임
    </>
  );
}

export default DetailInfomation;
