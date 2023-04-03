import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { MUIColor } from '../../types/common';

interface ConsumptionAlert {
  readonly message: string;
  readonly color: MUIColor;
  readonly icon: JSX.Element;
}

interface ControllingAlert {
  readonly setting: string;
  readonly modify: string;
  readonly reset: string;
  readonly delete: string;
}

// 소비 주의 5단계 알림
const CONSUMPTION_ALERTS: ReadonlyArray<ConsumptionAlert> = [
  {
    message: '경고! 자산이 거의 남지 않았습니다.',
    color: 'error',
    icon: <SentimentVeryDissatisfiedIcon fontSize="inherit" />,
  },
  {
    message: '주의! 자산을 조금 더 아껴보세요.',
    color: 'warning',
    icon: <SentimentDissatisfiedIcon fontSize="inherit" />,
  },
  {
    message: '보통! 아직까지는 괜찮습니다.',
    color: 'info', // 추후 색상 변경 예정
    icon: <SentimentSatisfiedIcon fontSize="inherit" />,
  },
  {
    message: '양호! 자산을 위한 소비계획이 알맞습니다.',
    color: 'success',
    icon: <SentimentSatisfiedAltIcon fontSize="inherit" />,
  },
  {
    message: '우수! 똑똑한 소비 생활을 실천중입니다.',
    color: 'secondary',
    icon: <SentimentVerySatisfiedIcon fontSize="inherit" />,
  },
];

// 설정/수정/초기화/삭제 알림
const CONTROLLING_ALERT: ControllingAlert = {
  setting: '현재 정보로 설정하시겠습니까?',
  modify: '정보를 수정하시겠습니까?',
  reset: '모든 정보를 초기화하시겠습니까?',
  delete: '정보를 삭제하시겠습니까?',
};

export { CONSUMPTION_ALERTS, CONTROLLING_ALERT };
