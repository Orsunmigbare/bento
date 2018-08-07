import React from "react"
import styled from "styled-components"
import { color, spacing } from "@staccx/theme"
import { Input, Button, Box } from "@staccx/base"

const Chat = ({ children }) => (
  <Box variant="chat">
    <ChatWrapper>{children}</ChatWrapper>
    <ChatInput>
      <Input variant="chat" placeholder="Beskjed" id="chatinput" />
      <Emojis>
        <Button variant="emoji">👍</Button>
        <Button variant="emoji">🤞</Button>
        <Button variant="emoji">😊</Button>
      </Emojis>
      <Button variant="chat">Send</Button>
    </ChatInput>
  </Box>
)

const ChatWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${spacing.medium} ${spacing.small} 104px;

  @media only screen and (min-width: 750px) {
    max-height: 370px;
  }
`

const ChatInput = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${spacing.large};
  border-top: 1px solid ${color.bg};
`

const Emojis = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: ${spacing.large};
  transform: translateY(-200%);
`

export default Chat
