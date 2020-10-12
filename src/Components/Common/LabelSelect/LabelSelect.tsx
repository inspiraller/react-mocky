import React, { FC, useState } from 'react';

import text from 'src/Main/text';
import hacEdit from 'src/util/hacEdit';

import { TLitVal } from 'src/store/eventCreate/_initialState';

import LabelStyle from 'src/Components/Common/Label/LabelStyle';
import SelectStyle from 'src/Components/Common/Select/SelectStyle';
import OptionStyle from 'src/Components/Common/Select/OptionStyle';

import { validateAll, SpanError, Success } from 'src/Components/Common/Validate/Validate';

import { IRowInputType } from 'src/Components/Common/RowInputType/RowInputType';

type TInputChange = React.ChangeEvent<HTMLSelectElement>;

const Select = SelectStyle();
const Option = OptionStyle();
const Label = LabelStyle();

const LabelSelect: FC<IRowInputType> = ({ formid, inputKey, inputProps, acEdit, defaultValue }) => {
  const { validate, required, options, valueType, inline, isLabel } = inputProps;

  const label = inputProps.label || inputKey;

  const [input, setInput] = useState(defaultValue);
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');

  const value = acEdit ? defaultValue : input;

  const updateErrors = (val: string) => {
    setTouched(true);
    setError(validateAll({ validate, required, label, value: val }));
  };

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
    updateErrors(evt.target.value);
  };
  const id = `${formid}-${inputKey}`;
  return (
    <>
      {isLabel === undefined || !isLabel ? (
        <Label data-aria-required={required} htmlFor={id}>
          {text(label)}
        </Label>
      ) : null}
      <Select
        id={id}
        onChange={onChange}
        name={inputKey}
        placeholder={text(label)}
        aria-required={required ? 'true' : 'false'}
        aria-invalid={error ? 'true' : 'false'}
        data-touched={touched && value !== '' ? 'true' : 'false'}
        aria-label={text(inputKey)}
        value={String(value)}
      >
        <Option value="-1">{text('Please select...')}</Option>

        {options &&
          options.map((item: { name: string; value: TLitVal }) => (
            <Option key={`Option-${label}-${item.name}`} value={String(item.value)}>
              {text(item.name)}
            </Option>
          ))}
      </Select>

      <SpanError {...{ error }} />
      <Success is={value !== '-1' && !!value && !error && touched} />
    </>
  );
};

export default LabelSelect;