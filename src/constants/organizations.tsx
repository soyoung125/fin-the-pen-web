import 기업 from '@assets/banks/기업.svg';
import 국민 from '@assets/banks/국민.svg';
import 농협 from '@assets/banks/농협.svg';
import 우리 from '@assets/banks/우리.svg';
import SC from '@assets/banks/sc.svg';
import city from '@assets/banks/씨티.svg';
import 대구 from '@assets/banks/대구.svg';
import 전북 from '@assets/banks/전북.svg';
import 경남 from '@assets/banks/경남.svg';
import 새마을 from '@assets/banks/새마을.svg';
import 우체국 from '@assets/banks/우체국.svg';
import 하나 from '@assets/banks/하나.svg';
import 신한 from '@assets/banks/신한.svg';
import Kbank from '@assets/banks/kBank.svg';
import 현대 from '@assets/banks/현대.svg'
import 롯데 from '@assets/banks/롯데.svg'
import BC from '@assets/banks/BC.svg'
import 삼성 from '@assets/banks/삼성.svg'
import { OrganizationInterface } from '@type/common';

export const BANK_ORGANIZATION: OrganizationInterface[] = [
    { name: '기업은행', value: '0003', icon: 기업, limit: 5 },
    { name: '국민은행', value: '0004', icon: 국민, limit: 5 },
    { name: '농협은행', value: '0011', icon: 농협, limit: 5 },
    { name: '우리은행', value: '0020', icon: 우리, limit: 3 },
    { name: 'SC은행', value: '0023', icon: SC, limit: "-" },
    { name: '씨티은행', value: '0027', icon: city, limit: 5 },
    { name: '대구은행', value: '0031', icon: 대구, limit: 3 },
    { name: '전북은행', value: '0037', icon: 전북, limit: 5 },
    { name: '경남은행', value: '0039', icon: 경남, limit: 3 },
    { name: '새마을금고', value: '0045', icon: 새마을, limit: 5 },
    { name: '우체국', value: '0071', icon: 우체국, limit: "-" },
    { name: 'KEB하나은행', value: '0081', icon: 하나, limit: 5 },
    { name: '신한은행', value: '0088', icon: 신한, limit: 5 },
    { name: 'K뱅크', value: '0089', icon: Kbank, limit: "-" },
];

export const CARD_ORGANIZATION: OrganizationInterface[] = [
    { name: 'KB카드', value: '0301', icon: 국민, limit: "-" },
    { name: '우리카드', value: '0309', icon: 우리, limit: 5 },
    { name: '현대카드', value: '0302', icon: 현대, limit: "-" },
    { name: '롯데카드', value: '0311', icon: 롯데, limit: 5 },
    { name: '삼성카드', value: '0303', icon: 삼성, limit: 5 },
    { name: '하나카드', value: '0313', icon: 하나, limit: "-" },
    { name: 'NH카드', value: '0304', icon: 농협, limit: 5 },
    { name: '전북카드', value: '0315', icon: 전북, limit: 5 },
    { name: 'BC카드', value: '0305', icon: BC, limit: "-" },
    { name: '신한카드', value: '0306', icon: 신한, limit: 5 },
    { name: '씨티카드', value: '0307', icon: city, limit: "-" },
];
