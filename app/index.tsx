import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";


import React from "react";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  Sheet,
  YGroup,
  YStack,
  Text,
  View,
  Stack
} from "tamagui";
import PagerView from "react-native-pager-view";

import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  return (
    <MyStack>
      <YStack
        space="$4"
        maxWidth={600}
      >
        <H1 textAlign="center">Welcome to Daily Affirmations!</H1>
        <Paragraph textAlign="center">
        <Sheet></Sheet>
        </Paragraph>
        <PagerView initialPage={0} orientation={"vertical"}>
        <Stack style={{ backgroundColor: 'red' }}>
          <H1>Page 1</H1>
        </Stack>
        <Stack style={{ backgroundColor: 'yellow' }}>
         <H1>Page 2</H1>
        </Stack>
      
       </PagerView>
      </YStack>
      <PagerView initialPage={0} orientation={"vertical"} 
      style={{
        flex: 1,
      }}
      >
        <YStack key="1">
          <Text >Page 1.</Text>
        </YStack>
        <YStack key="2">
          <Text >Page 2.</Text>
        </YStack>
        <YStack key="3">
          <Text >Page 3.</Text>
        </YStack>
      </PagerView>
      <YStack space="$2.5">
        <Button onPress={() => router.push("/users/testuser")}>
          Go to user page
        </Button>
        <Button onPress={() => router.push("/tabs")}>Go to tabs page</Button>
      </YStack>

      <YStack space="$5">
        <YGroup
          bordered
          separator={<Separator />}
          theme="green"
        >
          <YGroup.Item>
            <Link
              asChild
              href="https://twitter.com/natebirdman"
              target="_blank"
            >
              <ListItem
                hoverTheme
                title="Nate"
                pressTheme
                icon={Twitter}
              />
            </Link>
          </YGroup.Item>
          <YGroup.Item>
            <Link
              asChild
              href="https://github.com/tamagui/tamagui"
              target="_blank"
            >
              <ListItem
                hoverTheme
                pressTheme
                title="Tamagui"
                icon={Github}
              />
            </Link>
          </YGroup.Item>
          <YGroup.Item>
            <Link
              asChild
              href="https://github.com/ivopr/tamagui-expo"
              target="_blank"
            >
              <ListItem
                hoverTheme
                pressTheme
                title="This Template"
                icon={Github}
              />
            </Link>
          </YGroup.Item>
        </YGroup>
      </YStack>
    </MyStack>
  );
}
