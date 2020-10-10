import { TValidate } from 'src/Components/Common/Validate/Validate';
import text from 'src/Main/text';

export interface IConfigFieldsetItemProps {
  label?: string | boolean;
  type?: string;
  validate?: TValidate;
  required?: boolean;
  options?: Array<{ name: string; value: string | number | boolean }>;
  radios?: Array<{ name: string; value: string | number | boolean }>;
  adjacent?: IConfigFieldset | string;
  maxLength?: number;
  valueType?: string;
  expands?: string; // aria-expands
}

export interface IConfigFieldset {
  [key: string]: IConfigFieldsetItemProps;
}

const configFieldset: IConfigFieldset = {
  title: {
    required: true
  },
  description: {
    type: 'textarea',
    required: true,
    maxLength: 140
  },
  category_id: {
    label: 'category',
    type: 'select',
    options: [
      { name: text('rock'), value: 0 },
      { name: text('indie'), value: 1 },
      { name: text('accoustic'), value: 2 }
    ],
    valueType: 'number'
  },
  paid_event: {
    label: 'payment',
    type: 'radio',
    radios: [
      { name: text('Free event'), value: false },
      { name: text('Paid event'), value: true }
    ],
    valueType: 'boolean',
    expands: 'event_fee',
    adjacent: {
      event_fee: {
        label: false,
        required: true,
        valueType: 'number'
      }
    }
  },
  reward: {
    type: 'number',
    adjacent: text('reward points for attendance'),
    valueType: 'number'
  }
};

export default configFieldset;