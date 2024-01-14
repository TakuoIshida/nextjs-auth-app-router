'use client';

import { Blockquote, Code, Link } from '@radix-ui/themes';
import { Avatar } from 'components/ui/avatar';
import { Callout, calloutLevel } from 'components/ui/callout';
import { CheckBox } from 'components/ui/check-box';
import { Dialog } from 'components/ui/dialog';
import { HoverCard } from 'components/ui/hover-card';
import SelectItems from 'components/ui/select-items';
import TextArea from 'components/ui/text-area';
import { useState } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const selectItems = ['apple', 'banana', 'orange'];
  const [selectedItem, setSelectedItem] = useState<string>(selectItems[0]);

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
      <Avatar
        src={
          'https://pbs.twimg.com/profile_images/1418950840018002944/1H6d1jXw_400x400.jpg'
        }
        fallback={'A'}
      />
      <Callout text={'hello'} level={calloutLevel.info} />
      <Callout text={'warning'} level={calloutLevel.warning} />

      <CheckBox checked={checked} onChange={() => setChecked(!checked)} />
      <button onClick={() => setOpen(true)}>open dialog</button>
      <Dialog
        title={'title'}
        description={'description'}
        open={open}
        onClose={() => {
          console.log('Close');
          setOpen(false);
        }}
        onChangeLabel={'保存'}
        onChange={() => {
          console.log('保存!!');
          setOpen(false);
        }}
      >
        <>
          <div>hello</div>
        </>
      </Dialog>
      <HoverCard
        src={
          'https://pbs.twimg.com/profile_images/1418950840018002944/1H6d1jXw_400x400.jpg'
        }
        fallback={'A'}
      />
      <TextArea />
      <p>selectedItem: {selectedItem}</p>
      <SelectItems
        items={selectItems}
        onChange={(v) => setSelectedItem(v)}
        defaultValue="apple"
      />
    </div>
  );
};

export default Example;
