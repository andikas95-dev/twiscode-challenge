import React from 'react'
import { Col } from 'antd'
import BaseHeader, {
  BaseHeaderProps,
} from '@nexys/components/BaseHeader/BaseHeader'

function Header(props: BaseHeaderProps) {
  return (
    <BaseHeader {...props}>
      <Col>
        <img
          src="https://i.ibb.co/dKbhXMD/logo.png"
          alt="Logo"
          style={{ width: 150 }}
        />
      </Col>
    </BaseHeader>
  )
}

export default Header
