
import React from 'react'
import styled from 'styled-components'
import Flex from 'mdx-deck/dist/Flex'
import Box from 'mdx-deck/dist/Box'

const Root = styled.div([], {
  width: '100vw',
  height: '100vh',
})

const Split = ({ children }) => {
  const [title, a, ...rest] = React.Children.toArray(children.props.children)

  return (
    <Root>
      {title}
      <Flex
        css={{
          alignItems: 'center',
        }}>
        <Box width={1 / 2}>
          {a}
        </Box>
        <Box width={1 / 2}>
          {rest}
        </Box>
      </Flex>
    </Root>
  )
}

export default Split
