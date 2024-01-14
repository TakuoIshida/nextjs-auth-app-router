'use client';

import { Blockquote, Code, Link, Text } from '@radix-ui/themes';
import { useToast } from 'components/providers/toast-provider';
import { Avatar } from 'components/ui/avatar';
import { Button } from 'components/ui/button';
import { Callout, calloutLevel } from 'components/ui/callout';
import { CheckBox } from 'components/ui/check-box';
import { Dialog } from 'components/ui/dialog/dialog';
import { HoverCard } from 'components/ui/hover-card';
import { SearchTextField } from 'components/ui/search-text-field';
import { SelectItems } from 'components/ui/select-items';
import { Tabs } from 'components/ui/tabs';
import { TextArea } from 'components/ui/text-area';
import { Tooltip } from 'components/ui/tooltip';
import { useState } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const selectItems = ['apple', 'banana', 'orange'];
  const [selectedItem, setSelectedItem] = useState<string>(selectItems[0]);

  const { isToastOpen, handleToastOpen } = useToast();

  return (
    <>
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
      <div>
        <button onClick={() => setOpen(true)}>open dialog</button>
      </div>
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
      <Tooltip content="hogehoge">
        <Text>tooltip</Text>
      </Tooltip>
      <Tabs
        selectedLabel={'apple'}
        labels={['apple', 'banana', 'orange']}
        onChange={(v) => console.log(v)}
      />
      <Button
        text={'open toast'}
        onClick={() => {
          console.log('open toast');
          handleToastOpen('message', 'descriptionsss');
        }}
      />
      <SearchTextField
        placeholder={'search'}
        onChange={(e) => console.log(e)}
      />
    </>
  );
};

export default Example;
