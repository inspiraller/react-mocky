import React, { FC, useState } from 'react';

import { TLitVal } from 'src/types';
import { IRowInputType } from 'src/Components/Common/RowInputType/RowInputType';

import text from 'src/Main/text';
import hacEdit from 'src/util/hacEdit';

import RowTypes from 'src/Components/Common/RowInputTypes/RowInputTypes';
import WrapInlineStyle from 'src/Components/Common/Wrap/WrapInlineStyle';
import RadioStyle from 'src/Components/Common/Radio/RadioStyle';
import RadioLabelStyle from 'src/Components/Common/Radio/RadioLabelStyle';
import { SpanLabelStyle } from 'src/Components/Common/Label/LabelStyle';

type TInputChange = React.ChangeEvent<HTMLInputElement>;

const SpanLabel = SpanLabelStyle();
const Radio = RadioStyle();
const RadioLabel = RadioLabelStyle();
const WrapInline = WrapInlineStyle();

const LabelRadio: FC<IRowInputType> = ({
  formid,
  inputKey,
  inputProps,
  acEdit,
  defaultValue,
  eventCreate,
  isAdjacentItem,
  submitTouched
}) => {
  const { valueType, radios, adjacent, isLabel } = inputProps;

  const label = inputProps.label || inputKey;
  const [input, setInput] = useState(defaultValue);

  const value = acEdit ? defaultValue : input;

  const onChange = (evt: TInputChange) => {
    hacEdit({ setInput, acEdit, inputKey, value: evt.target.value, valueType });
  };

  return (
    <>
      {isLabel === undefined || isLabel ? (
        <SpanLabel data-value={value} data-is-adjacentitem={isAdjacentItem}>
          {label}
        </SpanLabel>
      ) : null}
      {radios &&
        radios.map((item: { name: string; value: TLitVal }) => {
          const id = `${formid}-${inputKey}-${item.value}`;
          return (
            <WrapInline key={id}>
              <RadioLabel htmlFor={id}>
                <Radio
                  id={id}
                  type="radio"
                  onChange={onChange}
                  name={inputKey}
                  aria-label={text(inputKey)}
                  checked={String(item.value) === String(value)}
                  value={String(item.value)}
                />
                <span>{text(item.name)}</span>
              </RadioLabel>
            </WrapInline>
          );
        })}
      {typeof adjacent === 'object' ? (
        <RowTypes
          {...{
            formid,
            configFieldset: adjacent,
            acEdit,
            eventCreate,
            isAdjacentItem: true,
            submitTouched
          }}
        />
      ) : null}
    </>
  );
};

export default LabelRadio;
