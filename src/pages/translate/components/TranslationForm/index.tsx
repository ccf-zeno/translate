import type { FC } from 'react';
import { useIntl } from '@umijs/max';
import { Form, Input, Button, message } from 'antd';
import copy from 'copy-to-clipboard';

import styles from './index.less';

const TranslationForm: FC<{ inputObj: any; onBack: () => void }> = ({
  inputObj,
  onBack,
}) => {
  const [form] = Form.useForm();
  const { formatMessage } = useIntl();

  const onSubmit = async () => {
    const values = await form.validateFields();
    copy(JSON.stringify(values));
    message.success(
      formatMessage({ id: 'Translate success!! Copied to clipboard' }),
      10,
    );
  };

  return (
    <div className={styles.content}>
      <div className={styles.back} onClick={onBack}>
        {formatMessage({ id: 'Back' })}
      </div>

      <div className={styles.title}>
        {formatMessage({
          id: 'Please translate all content and click Submit.',
        })}
        <br />
        {formatMessage({
          id: 'After the submission, the json will copy to the clipboard and finally sent it to the frontend',
        })}
      </div>
      <Form layout="vertical" form={form}>
        {Object.keys(inputObj).map((key) => {
          return (
            <Form.Item name={key} key={key} label={key} required>
              <Input
                placeholder={formatMessage({ id: 'type the translation' })}
              />
            </Form.Item>
          );
        })}
        <Button onClick={onSubmit} type="primary">
          {formatMessage({ id: 'Submit' })}
        </Button>
      </Form>
    </div>
  );
};

export default TranslationForm;
