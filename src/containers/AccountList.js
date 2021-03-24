import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row, Col, Card } from 'antd'
import { getAccountsAction, getTransactionByIdAction } from 'actions/accounts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const AccountListContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding: 0px 16px;
  margin: 0px auto;
`

const StyRowWrapper = styled(Row)`
  padding-top: 16px;
  height: 100%;
  flex: 1 1 0%;
`

const StyColWrapper = styled(Col)`
  margin-bottom: 16px;
  && .ant-card-head {
    font-weight: 600;
  }
`

const AccountInfo = styled.div`
  width: 100%;
  padding: 0 6px;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.0125em;
  line-height: 24px;
  color: #343a40;
`

const AccountInfoContent = styled.div`
  margin-bottom: 10px;
`

const InfoLabel = styled.span`
  font-weight: 600;
`

const renderAccountInfoContent = ({ label, content }) => (
  <AccountInfoContent>
    <InfoLabel>{label}:</InfoLabel> {content}
  </AccountInfoContent>
)

const AccountList = props => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { accounts } = useSelector(state => state.retail)
  useEffect(() => {
    dispatch(getAccountsAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const handleOnClick = ({ accountId }) => {
    dispatch(getTransactionByIdAction(accountId)).then(isSuccess => isSuccess && history.push(`/transactions`))
  }

  return (
    <AccountListContainer>
      <StyRowWrapper>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {accounts && accounts.length > 0 ? (
            accounts.map(account => (
              <StyColWrapper
                className="gutter-row"
                span={12}
                key={account.id}
                onClick={() =>
                  handleOnClick({
                    accountId: account.id
                  })
                }
              >
                <Card
                  title={account.account_name}
                  bordered={true}
                  hoverable
                  extra={<FontAwesomeIcon icon={faEye} />}
                  style={{ fontWeight: 600 }}
                >
                  <AccountInfo>
                    {account.account_number &&
                      renderAccountInfoContent({ label: 'Account Number', content: account.account_number })}
                    {account.account_type &&
                      renderAccountInfoContent({ label: 'Account Type', content: account.account_type })}
                    {account.balance && renderAccountInfoContent({ label: 'Balance', content: account.balance })}
                    {account.currency && renderAccountInfoContent({ label: 'Currency', content: account.currency })}
                    {account.is_active &&
                      renderAccountInfoContent({
                        label: 'Account Status',
                        content: account.is_active ? 'Active' : 'Inactive'
                      })}
                  </AccountInfo>
                </Card>
              </StyColWrapper>
            ))
          ) : (
            <Col>
              <p>No accounts</p>
            </Col>
          )}
        </Row>
      </StyRowWrapper>
    </AccountListContainer>
  )
}
export default AccountList

AccountList.propTypes = {}

renderAccountInfoContent.propTypes = {
  label: PropTypes.string,
  content: PropTypes.string
}
