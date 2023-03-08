import { useState } from 'react';
import type { FC } from 'react';

import TranslationForm from './components/TranslationForm';
import TranslationInput from './components/TranslationInput';
import styles from './index.less';

const Translate: FC = () => {
  const [page, setPage] = useState(1);
  const [inputObj, setInputObj] = useState();

  return (
    <div className={styles.content}>
      <TranslationInput
        onSubmit={(v) => {
          setInputObj(v);
          setPage(2);
        }}
        show={page === 1}
      />

      {page === 2 ? (
        <TranslationForm
          onBack={() => {
            setPage(1);
          }}
          inputObj={inputObj}
        />
      ) : null}
    </div>
  );
};

export default Translate;
