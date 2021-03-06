import React from 'react';
import LabelInput from 'src/Components/Common/LabelInputHoc/LabelInput';
import { IConfigFieldset } from 'src/types';

export const configFieldset: IConfigFieldset = {
  fruit: {
    required: true
  }
};

const formid = 'x';
export const LabelInputReqSubmitTouched = () => (
  <LabelInput
    {...{ formid, inputKey: 'fruit', inputProps: configFieldset.fruit, submitTouched: true }}
  />
);
