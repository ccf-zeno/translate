import { defineConfig } from '@umijs/max';

export default defineConfig({
  npmClient: 'pnpm',
  locale: {
    default: 'en-US',
    baseSeparator: '-',
    antd: true,
    baseNavigator: false,
  },
  title: 'Translate Portal',
});
