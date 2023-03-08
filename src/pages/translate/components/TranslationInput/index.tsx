import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Button } from 'antd';
import { useIntl } from '@umijs/max';

import JSONEditor from '@/components/JSONEditor';
import styles from './index.less';

type Props = {
  onSubmit: (v: any) => void;
  show: boolean;
};

const TranslationInput: FC<Props> = (props) => {
  const { onSubmit, show } = props;

  const [{ value, error }, setJSON] = useState<any>({
    value: '',
    error: null,
  });
  const { formatMessage } = useIntl();

  const onClick = () => {
    onSubmit(JSON.parse(value));
  };

  return (
    <div className={styles.content} style={{ height: show ? '100%' : '0' }}>
      <div className={styles.title}>
        {formatMessage({ id: 'Paste the translation json' })}
      </div>
      <div className={styles.jsoninput}>
        <JSONEditor
          onChange={(value, error) => {
            setJSON({ value, error });
          }}
        />
      </div>
      <div>
        <Button onClick={onClick} disabled={!value || error} type="primary">
          {formatMessage({ id: 'Submit to translate' })}
        </Button>
      </div>
    </div>
  );
};

export default TranslationInput;
