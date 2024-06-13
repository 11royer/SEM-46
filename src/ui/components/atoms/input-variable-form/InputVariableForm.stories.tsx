import type { StoryObj, Meta } from '@storybook/react';
import InputVariableForm from './InputVariableForm';

export default {
  title: 'ui/components/atoms/InputVariableForm',
  component: InputVariableForm,
} as Meta;

const Template: StoryObj<IProps> = (args) => <InputVariableForm {...args} />;

export const NameInput: StoryObj<IProps> = Template.bind({});
NameInput.args = {
  label: 'Name',
  type: 'text',
  value: '',
  onChange: () => {},
};

export const EmailInput: StoryObj<IProps> = Template.bind({});
EmailInput.args = {
  label: 'Email',
  type: 'email',
  value: '',
  onChange: () => {},
};

export const PasswordInput: StoryObj<IProps> = Template.bind({});
PasswordInput.args = {
  label: 'Password',
  type: 'password',
  value: '',
  onChange: () => {},
};
