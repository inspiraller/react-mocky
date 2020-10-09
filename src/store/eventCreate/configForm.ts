import { TValidate } from 'src/Components/Common/Validate/Validate';
import text from 'src/Main/text';

export interface IConfigForm {
  isSubmitting: boolean;
  inputs: {
    [key: string]: {
      type?: string;
      validate?: TValidate;
      required?: boolean;
      options?: Array<{ name: string; value: string }>;
      radios?: string[];
      adjacent?: string;
      maxLength?: number;
    };
  };
}

const configForm: IConfigForm = {
  isSubmitting: false,
  inputs: {
    title: {
      required: true
    },
    description: {
      type: 'textarea',
      required: true,
      maxLength: 140
    },
    category: {
      type: 'select',
      options: [
        { name: text('rock'), value: '0' },
        { name: text('indie'), value: '1' },
        { name: text('accoustic'), value: '2' }
      ]
    },
    payment: {
      type: 'radio',
      radios: [text('Free event'), text('Paid event')]
    },
    reward: {
      adjacent: text('reward points for attendance')
    }
  }
};

export default configForm;
