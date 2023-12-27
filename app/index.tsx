import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
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
} from "tamagui";
import PagerView from "react-native-pager-view";

import { MyStack } from "../components/MyStack";
import AffirmationFetch from "../components/AffirmationFetch";

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
        width: "100%",
        height: "100%",
      }}
      >
        <YStack key="1">
          <Text>
            <AffirmationFetch/>
            </Text>
        </YStack>
        <YStack key="2">
          <Text>
            <AffirmationFetch/>
            </Text>
        </YStack>
        <YStack key="3">
          <Text>
            <AffirmationFetch/>
          </Text>
        </YStack>
      </PagerView>
      <YStack space="$2.5">
        <Button onPress={() => router.push("/users/testuser")}>
          Go to user page
        </Button>
        <Button onPress={() => router.push("/tabs")}>Go to tabs page</Button>
      </YStack>

      
    </MyStack>
  );
}
