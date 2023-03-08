import { JSONEditor, Mode } from 'vanilla-jsoneditor';
import { useEffect, useRef } from 'react';
import styles from './index.less';

import type { ContentErrors, TextContent } from 'vanilla-jsoneditor';

export type JSONEditorProps = {
  onChange?: (v: TextContent['text'], e: ContentErrors | null) => void;
  value?: any;
};

export default function (props: JSONEditorProps) {
  const refContainer = useRef<any>(null);
  const refEditor = useRef<any>(null);
  const { onChange, value } = props;

  useEffect(() => {
    // create editor
    refEditor.current = new JSONEditor({
      target: refContainer.current,
      props: {
        mode: Mode.text,
        mainMenuBar: false,
        onChange: (updatedContent, previousContent, { contentErrors }) => {
          if (onChange) {
            onChange(updatedContent.text, contentErrors);
          }
        },
      },
    });

    return () => {
      // destroy editor
      if (refEditor?.current) {
        refEditor.current.destroy();
        refEditor.current = null;
      }
    };
  }, []);

  // update props
  useEffect(() => {
    if (refEditor && refEditor?.current && value) {
      refEditor.current.updateProps({
        content: {
          text: value,
        },
      });
    }
  }, [value]);

  return <div className={styles.content} ref={refContainer} />;
}
