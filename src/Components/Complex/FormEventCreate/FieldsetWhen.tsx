import React, { FC } from 'react';
import text from 'src/Main/text';

import { IConfigFieldset } from 'src/types';
import { IInitial as IInitialEventCreate } from 'src/store/eventCreate/_initialState';

import { TacEdit } from 'src/store/eventCreate/actions';

import FieldsetStyle from 'src/Components/Common/Fieldset/FieldsetStyle';
import LegendStyle from 'src/Components/Common/Legend/LegendStyle';
import RowInputTypes from 'src/Components/Common/RowInputTypes/RowInputTypes';

const Fieldset = FieldsetStyle();
const Legend = LegendStyle();

export const configFieldset: IConfigFieldset = {
  date: {
    type: 'date',
    label: 'starts on',
    required: true,
    adjacent: {
      time: {
        type: 'time',
        label: 'at',
        inline: true,
        required: true
      }
      // ampm: {
      //   type: 'radio',
      //   isLabel: false,
      //   inline: true,
      //   radios: [
      //     { name: text('am'), value: 'am' },
      //     { name: text('pm'), value: 'pm' }
      //   ],
      //   valueType: 'string',
      //   required: true
      // }
    }
  },
  duration: {
    type: 'number',
    valueType: 'number',
    adjacent: 'hour'
  }
};

export interface IField {
  formid: string;
  acEdit: TacEdit;
  eventCreate: IInitialEventCreate;
  submitTouched: boolean;
}

const FieldsetWhen: FC<IField> = props => (
  <Fieldset>
    <Legend>{text('When')}</Legend>
    <RowInputTypes {...{ ...props, configFieldset }} />
  </Fieldset>
);

export default FieldsetWhen;
