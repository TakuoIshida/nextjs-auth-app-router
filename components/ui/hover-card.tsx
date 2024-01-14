import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  HoverCard as RadixHoverCard,
  Text,
} from '@radix-ui/themes';

type HoverCardProps = {
  fallback: string;
  src?: string;
};

export const HoverCard = ({ src, fallback }: HoverCardProps) => {
  return (
    <Text>
      Follow{' '}
      <RadixHoverCard.Root>
        <RadixHoverCard.Trigger>
          <Link href="https://twitter.com/radix_ui" target="_blank">
            hoverすると表示される
          </Link>
        </RadixHoverCard.Trigger>
        <RadixHoverCard.Content>
          <Flex gap="4">
            <Avatar size="3" fallback={fallback} radius="full" src={src} />
            <Box>
              <Heading size="3" as="h3">
                Radix
              </Heading>
              <Text as="div" size="2" color="gray">
                @radix_ui
              </Text>

              <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                React components, icons, and colors for building high-quality,
                accessible UI.
              </Text>
            </Box>
          </Flex>
        </RadixHoverCard.Content>
      </RadixHoverCard.Root>{' '}
      for updates.
    </Text>
  );
};
