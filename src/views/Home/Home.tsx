/* eslint-disable react/jsx-curly-newline */
import React from 'react'
import Content from '@nexys/components/Content/Content'
import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Button, Checkbox, Col, Row, Select, Switch } from 'antd'
import { Form, Formik } from 'formik'
import Paragraph from '@nexys/components/Typography/Paragraph'
import FInput from '@nexys/fields/FInput/FInput'
import useCountries from 'data/useCountries'
import Lists from '@nexys/helpers/Lists'
import FSelect from '@nexys/fields/FSelect/FSelect'
import FDatePicker from '@nexys/fields/FDatePicker/FDatePicker'
import FCheckbox from '@nexys/fields/FCheckbox/FCheckbox'
import schema from 'views/Home/schema'

const styleContent = {
  paddingBottom: 50,
}

export interface ExampleDir {
  directory: string
  totalFiles: number
}

// interface HomeProps {}
const { Option } = Select

function Home() {
  const { data } = useCountries()

  const flagsOpt = Lists.transform(data, 'flag', 'numericCode')
  const countryOpt = Lists.transform(data, 'name', 'alpha3Code')
  const checkBoxOpt = [
    {
      label: 'Mrs',
      value: 'Mrs',
    },
    {
      label: 'Ms',
      value: 'Ms',
    },
    {
      label: 'Mdm',
      value: 'Mdm',
    },
    {
      label: 'Mr',
      value: 'Mr',
    },
    {
      label: 'Dr',
      value: 'Dr',
    },
  ]

  return (
    <div>
      <div
        style={{
          backgroundColor: '#FFCB01',
          textAlign: 'center',
          padding: '10px 0',
        }}
      >
        <Text bold>
          You dont have an account yet, please create a new account
        </Text>
      </div>
      <Content
        id={'whatWillLearn'}
        styleContainer={{
          // backgroundColor: '#f3f3f3',
          marginTop: 60,
        }}
        style={{
          ...styleContent,
        }}
      >
        <Title>Create an Account</Title>
        <Formik
          initialValues={{
            area: 0,
            sms: false,
            emailing: false,
            mailing: false,
          }}
          onSubmit={() => console.log('bisa')}
          validationSchema={schema}
        >
          {({ setFieldValue, values, handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Row gutter={[24, 16]}>
                  <Col xs={24}>
                    <Checkbox.Group
                      style={{ width: '100%' }}
                      onChange={(e) => {
                        setFieldValue('title', e)
                      }}
                    >
                      <Row>
                        <Col xs={24}>
                          <Paragraph>Title</Paragraph>
                        </Col>
                        {checkBoxOpt.map(({ label, value }) => (
                          <Col>
                            <Checkbox value={value}>{label}</Checkbox>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>
                  </Col>
                  <Col xs={24} md={12}>
                    <FInput name="last_name" title="Last Name" required />
                  </Col>
                  <Col xs={24} md={12}>
                    <FInput name="first_name" title="First Name" required />
                  </Col>
                  <Col xs={24}>
                    <Paragraph>Mobile phone number</Paragraph>
                    <div>
                      <Select
                        style={{ width: 60 }}
                        onChange={(e) => {
                          const data = flagsOpt.find((item) => item.value === e)
                          setFieldValue('area', data.original.callingCodes[0])
                        }}
                      >
                        {flagsOpt.map(({ label, value, original }) => (
                          <Option value={value}>
                            <img
                              src={label}
                              alt={value}
                              style={{ width: 25 }}
                              title={original.name}
                            />
                          </Option>
                        ))}
                      </Select>
                      <FInput
                        addonBefore={`+${values.area}`}
                        name="phone"
                        style={{ width: 400, marginLeft: 30 }}
                      />
                    </div>
                  </Col>
                  <Col xs={24}>
                    <Title style={{ marginBottom: 0 }}>Address</Title>
                  </Col>
                  <Col xs={24} md={12}>
                    <FSelect
                      title="Country/Location"
                      name="country"
                      options={countryOpt}
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <FSelect
                      title="Country/Location"
                      name="country"
                      options={countryOpt}
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={24}>
                    <Title style={{ marginBottom: 0 }}>Contacts</Title>
                  </Col>
                  <Col xs={24} md={12}>
                    <FInput title="Email Addres" name="email" />
                  </Col>
                  <Col xs={24} md={12}>
                    <FDatePicker
                      name="birth"
                      title="Date of birth"
                      format="DD MMM YYYY"
                      style={{ width: '100%' }}
                    />
                  </Col>

                  <Col xs={24}>
                    <Title style={{ marginBottom: 0 }}>
                      Standart Privacy Note
                    </Title>
                  </Col>
                  <Col xs={24}>
                    <Paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Excepturi dolor deserunt harum aperiam possimus odit
                      eveniet animi vero reprehenderit, cumque quisquam eaque
                      ullam. Quia deleniti asperiores totam. Sapiente,
                      voluptatibus assumenda?
                    </Paragraph>
                  </Col>
                  <Col xs={24}>
                    <Row justify="space-between" align="middle">
                      <Col>
                        <Text>{`SMS & Mobile Call`}</Text>
                        <Switch
                          style={{ marginLeft: 10 }}
                          onChange={() => setFieldValue('sms', !values.sms)}
                        />
                      </Col>
                      <Col>
                        <Text>{`Emailing`}</Text>
                        <Switch
                          style={{ marginLeft: 10 }}
                          onChange={() =>
                            setFieldValue('emailing', !values.emailing)
                          }
                        />
                      </Col>
                      <Col>
                        <Text>{`Mailing`}</Text>
                        <Switch
                          style={{ marginLeft: 10 }}
                          onChange={() =>
                            setFieldValue('mailing', !values.mailing)
                          }
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <FCheckbox name="submit" />
                    <Text>
                      i have read and understood the above terms and conditions
                      and hereby agree that i will be bounded by these
                      conditions and policies once i have submitted this
                      application form
                    </Text>
                  </Col>
                  <Col xs={24}>
                    <Row justify="end">
                      <Col
                        xs={{
                          span: 24,
                        }}
                        md={{
                          span: 5,
                          order: 24,
                        }}
                      >
                        <Button
                          block
                          type="primary"
                          style={{
                            backgroundColor: '#FFCB01',
                            color: '#000',
                            borderColor: '#FFCB01',
                          }}
                          htmlType="submit"
                        >
                          CREATE CUSTOMER
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            )
          }}
        </Formik>
      </Content>
    </div>
  )
}

export default Home
