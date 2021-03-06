import { TLitVal } from 'src/types';

export { TLitVal };

export interface IInitial {
  [key: string]: TLitVal;
}

const initialState: IInitial = {
  title: '',
  description: '',
  category_id: -1,
  paid_event: 'paid event',
  event_fee: undefined,
  reward: 0,
  coordinator_id: undefined,
  coordinator_email: undefined,
  date: undefined,
  at: undefined,
  ampm: 'am',
  duration: undefined
};

export default initialState;
