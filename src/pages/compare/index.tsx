import { Button } from 'antd';
import { useState } from 'react';
import { useIntl } from '@umijs/max';

import JSONEditor from '@/components/JSONEditor';
import type { JSONEditorProps } from '@/components/JSONEditor';
import styles from './index.less';

interface CardProps extends JSONEditorProps {
  title: any;
}
const Card = ({ title, onChange, value }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.editorBox}>
        <JSONEditor value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default function Compare() {
  const [oldFile, setOldFile] = useState<string>('');
  const [newFile, setNewFile] = useState<string>('');
  const [differentFile, setDifferentFile] = useState<string>('');
  const [error1, setError1] = useState<any>();
  const [error2, setError2] = useState<any>();

  const { formatMessage } = useIntl();

  const onSubmit = () => {
    const oldObj = JSON.parse(oldFile);
    const newObj = JSON.parse(newFile);
    const obj: any = {};

    Object.keys(newObj).forEach((key) => {
      if (!oldObj[key]) {
        obj[key] = newObj[key];
      }
    });

    setDifferentFile(JSON.stringify(obj));
  };

  return (
    <div className={styles.content}>
      <Card
        title={formatMessage({ id: 'old json' })}
        onChange={(v, error) => {
          setOldFile(v);
          setError1(error);
        }}
      />
      <Card
        title={formatMessage({ id: 'new json' })}
        onChange={(v, error) => {
          setNewFile(v);
          setError2(error);
        }}
      />

      <Button
        onClick={onSubmit}
        disabled={error1 || error2 || !oldFile || !newFile}
        type="primary"
      >
        {formatMessage({ id: 'compare' })}
      </Button>

      <Card
        title={formatMessage({ id: 'different json' })}
        value={differentFile}
        onChange={(v) => {
          setDifferentFile(v);
        }}
      />
    </div>
  );
}
