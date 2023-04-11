interface Path {
  readonly home: string;
  readonly signIn: string;
  readonly signUp: string;
  readonly mypage: string;
  readonly notification: string;
  readonly assetManagement: string;
  readonly settings: string;
  readonly test: string;
  readonly analysis: string;
  readonly analysisDetail: string;
  readonly savingsGoal: string;
  readonly regularDepositWithdrawal: string;
  readonly DetailSetting: string;
  readonly DetailInfomation: string;
  readonly assetsByCategory: string;
  readonly scheduleManagement: string;
}

const PATH: Readonly<Path> = Object.freeze({
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  mypage: '/mypage',
  notification: '/notification',
  assetManagement: '/asset-management',
  settings: '/settings',
  test: '/test',

  analysis: '/analysis',
  analysisDetail: '/analysis/detail',

  // 자산관리의 세부 설정 페이지 (경로명 수정할 계획)
  savingsGoal: '/management/savings-goal',
  regularDepositWithdrawal: '/management/regular-deposit-withdrawal',
  DetailSetting: '/management/regular-deposit-withdrawal-detail-setting',
  DetailInfomation: '/management/regular-deposit-withdrawal-detail-info',
  assetsByCategory: '/management/assets-by-category',
  scheduleManagement: '/management/schedule-management',
});

export default PATH;
