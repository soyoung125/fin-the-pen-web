interface Path {
  readonly home: string;
  readonly signIn: string;
  readonly signUp: string;
  readonly myPage: string;
  readonly notification: string;
  readonly fetchPaymentHistory: string;
  readonly searchSchedule: string;
  readonly assetManagement: string;
  readonly settings: string;
  readonly test: string;
  readonly analysis: string;
  readonly analysisDetail: string;
  readonly savingsGoal: string;
  readonly savingDetailSetting: string;
  readonly regularDepositWithdrawal: string;
  readonly DetailSetting: string;
  readonly DetailInformation: string;
  readonly assetsByCategory: string;
  readonly scheduleManagement: string;
  readonly myData: string;
}

const PATH: Readonly<Path> = Object.freeze({
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  myPage: '/myPage',
  notification: '/notification',
  fetchPaymentHistory: '/fetch-payment-history',
  searchSchedule: '/search=schedule',
  assetManagement: '/asset-management',
  settings: '/settings',
  test: '/test',

  analysis: '/analysis',
  analysisDetail: '/analysis/detail',

  // 자산관리의 세부 설정 페이지 (경로명 수정할 계획)
  savingsGoal: '/management/savings-goal',
  savingDetailSetting: '/saving-detail-setting',
  regularDepositWithdrawal: '/management/regular-deposit-withdrawal',
  DetailSetting: '/management/regular-deposit-withdrawal-detail-setting',
  DetailInformation: '/management/regular-deposit-withdrawal-detail-info',
  assetsByCategory: '/management/assets-by-category',
  scheduleManagement: '/management/schedule-management',

  // setting pages
  myData: '/settings/my-data',
});

export default PATH;
