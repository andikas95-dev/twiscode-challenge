import React from 'react'
import Content, { ContentProps } from '@nexys/components/Content/Content'
import Paragraph from '@nexys/components/Typography/Paragraph'

function Footer(props: ContentProps) {
  return (
    <Content
      id={'contributors'}
      component={(props) => <footer {...props} />}
      style={{
        padding: 16,
        color: 'white',
        textAlign: 'center',
      }}
      styleContainer={
        {
          // backgroundColor: 'black',
        }
      }
      {...props}
    >
      <Paragraph strong>v1.0.7</Paragraph>
    </Content>
  )
}

export default Footer
