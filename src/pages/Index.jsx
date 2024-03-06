import React, { useState } from "react";
import { Box, VStack, HStack, Text, Avatar, Input, Button, Divider, Heading, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch, FaPaperPlane } from "react-icons/fa";

const contacts = [
  { id: 1, name: "John Doe", lastMessage: "Hey there!", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Jane Smith", lastMessage: "How are you?", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzA5NzMzNTg5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Mike Johnson", lastMessage: "Let's meet up!", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const ChatItem = ({ name, lastMessage, avatar, onClick }) => (
  <HStack p={3} borderBottom="1px solid" borderColor="gray.200" _hover={{ bg: "gray.100", cursor: "pointer" }} onClick={onClick}>
    <Avatar src={avatar} />
    <VStack alignItems="flex-start" spacing={0}>
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray.500">
        {lastMessage}
      </Text>
    </VStack>
  </HStack>
);

const ChatWindow = ({ contact }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // TODO: Implement sending message logic
    setMessage("");
  };

  return (
    <VStack h="100%" spacing={4} p={4}>
      <Flex w="100%">
        <Avatar src={contact.avatar} />
        <Heading ml={4} size="lg">
          {contact.name}
        </Heading>
      </Flex>
      <Divider />
      <Spacer />
      <HStack w="100%">
        <Input placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSend}>
          <FaPaperPlane />
        </Button>
      </HStack>
    </VStack>
  );
};

const Index = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <HStack h="100vh" spacing={0}>
      <Box w="30%" borderRight="1px solid" borderColor="gray.200">
        <VStack spacing={4} p={4}>
          <Heading size="xl">Chats</Heading>
          <HStack w="100%">
            <Input placeholder="Search..." />
            <Button>
              <FaSearch />
            </Button>
          </HStack>
          <VStack w="100%" spacing={0}>
            {contacts.map((contact) => (
              <ChatItem key={contact.id} {...contact} onClick={() => setSelectedContact(contact)} />
            ))}
          </VStack>
        </VStack>
      </Box>
      <Box w="70%">
        {selectedContact ? (
          <ChatWindow contact={selectedContact} />
        ) : (
          <VStack h="100%" justify="center">
            <Heading size="lg">Select a chat to start messaging</Heading>
          </VStack>
        )}
      </Box>
    </HStack>
  );
};

export default Index;
