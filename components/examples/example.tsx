'use client';

import {
  Blockquote,
  Code,
  Flex,
  Link,
  Text,
  TextField,
} from '@radix-ui/themes';
import { useToast } from 'components/providers/toast-provider';
import { Avatar } from 'components/ui/avatar';
import { Button } from 'components/ui/button';
import { Callout, calloutLevel } from 'components/ui/callout';
import { CheckBox } from 'components/ui/check-box';
import { Dialog } from 'components/ui/dialog/dialog';
import { SearchTextField } from 'components/ui/search-text-field';
import { SelectItems } from 'components/ui/select-items';
import { Tabs } from 'components/ui/tabs';
import { TextArea } from 'components/ui/text-area';
import { Tooltip } from 'components/ui/tooltip';
import { useRouter, useSearchParams } from 'next/navigation';
import { createRef, useEffect, useMemo, useState } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const selectItems = ['apple', 'banana', 'orange'];
  const tabMenus = useMemo(() => ['user', 'account', 'role'], []);

  const [selectedItem, setSelectedItem] = useState<string>(selectItems[0]);
  const router = useRouter();
  const params = useSearchParams();
  const [tab, setTab] = useState<string>(tabMenus[0]);
  useEffect(() => {
    setTab(params.get('tab') ?? tabMenus[0]);
  }, [params, tabMenus]);

  const { handleToastOpen } = useToast();

  const buttonRef = createRef<HTMLButtonElement>();

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

      <Dialog
        title={'ユーザー新規作成'}
        description={'名前とメールアドレスを入力してください'}
        onClose={() => {
          console.log('Close');
          setOpen(false);
        }}
        onChangeLabel={'保存'}
        onChange={() => {
          console.log('保存!!');
          setOpen(false);
        }}
        triggerRef={buttonRef}
      >
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Input
              defaultValue="Freja Johnsen"
              placeholder="Enter your full name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Input
              defaultValue="freja@example.com"
              placeholder="Enter your email"
            />
          </label>
        </Flex>
      </Dialog>
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
      <Tabs
        selectedLabel={tab}
        labels={tabMenus}
        onChange={(tab) => {
          router.push(`/example?tab=${tab}`);
        }}
      />
      <Button
        text={`to example / ${tabMenus[0]}`}
        onClick={() => router.push(`/example?tab=${tabMenus[0]}`)}
      />
      <Button
        text={`to example  / ${tabMenus[1]}`}
        onClick={() => router.push(`/example?tab=${tabMenus[1]}`)}
      />
      <Button
        text={`to example  / ${tabMenus[2]}`}
        onClick={() => router.push(`/example?tab=${tabMenus[2]}`)}
      />
    </>
  );
};

export default Example;
