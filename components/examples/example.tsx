'use client';

import { Blockquote, Code, Link } from '@radix-ui/themes';
import { Callout, calloutLevel } from 'components/ui/callout';
import { CheckBox } from 'components/ui/check-box';
import { useState } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Blockquote>
        Perfect typography is certainly the most elusive of all arts. Sculpture
      </Blockquote>

      <Blockquote weight="bold" size="2" color="green" highContrast>
        Perfect typography is certainly the most elusive of all arts. Sculpture
      </Blockquote>
      <Code>console.log()</Code>
      {/* window.localtion.hrefと同等 */}
      <Link href="/">to top</Link>
      {/* <Avatar
        src={
          'https://pbs.twimg.com/profile_images/1418950840018002944/1H6d1jXw_400x400.jpg'
        }
        fallback={'A'}
      /> */}
      <Callout text={'hello'} level={calloutLevel.info} />
      <Callout text={'warning'} level={calloutLevel.warning} />

      <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  );
};

export default Example;
