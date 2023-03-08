import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Outlet, history, useIntl, SelectLang } from '@umijs/max';
import { TranslationOutlined } from '@ant-design/icons';
import styles from './index.less';

const { Header, Content } = Layout;
export default () => {
  const { formatMessage } = useIntl();
  const [key, setKey] = useState(history.location.pathname);

  return (
    <Layout style={{ height: '100%' }}>
      <Header>
        <div className={styles.header}>
          <Menu
            mode="horizontal"
            theme="dark"
            items={[
              {
                label: formatMessage({ id: 'compare' }),
                key: '/compare',
              },
              {
                label: formatMessage({ id: 'translate' }),
                key: '/translate',
              },
            ]}
            onClick={({ key }) => {
              history.push(`${key}`);
              setKey(key);
            }}
            selectedKeys={[key]}
          />

          <SelectLang
            icon={
              <div className={styles.setLanguage}>
                <TranslationOutlined />
                {formatMessage({ id: 'language' })}
              </div>
            }
          />
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
