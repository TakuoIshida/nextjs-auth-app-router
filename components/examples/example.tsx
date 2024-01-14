import { Avatar } from '@/components/ui/avatar';

import { Callout } from '@/components/ui/callout';
import { Blockquote, Code, Link } from '@radix-ui/themes';
import { calloutLevel } from '../ui/callout';

const Example = () => {
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
    </div>
  );
};

export default Example;
