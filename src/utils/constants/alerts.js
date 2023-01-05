const ALERTS = Object.freeze([
  {
    message: '경고! 자산이 거의 남지 않았습니다.',
    color: 'error',
  },
  {
    message: '주의! 자산을 조금 더 아껴보세요.',
    color: 'warning',
  },
  {
    message: '보통! 아직까지는 괜찮습니다.',
    color: 'warning', // 추후 색상 변경 예정
  },
  {
    message: '양호! 자산을 위한 소비계획이 알맞습니다.',
    color: 'success',
  },
  {
    message: '우수! 똑똑한 소비 생활을 실천중입니다..',
    color: 'secondary',
  },
]);

export default ALERTS;
