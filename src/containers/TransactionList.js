import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Row, Col, Card } from 'antd'
import { useSelector } from 'react-redux'

const TransactionListContainer = styled.div`
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

const TransactionInfo = styled.div`
  width: 100%;
  padding: 0 6px;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.0125em;
  line-height: 24px;
  color: #343a40;
`

const TransactionInfoContent = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
`

const TransactionInfoTitleWrapper = styled.div`
  display: flex;
`

const TransactionInfoTitle = styled.h2`
  margin-bottom: 20px;
`

const TransactionList = () => {
  const { accounts, account } = useSelector(state => state.retail)
  const { account_id, transactions } = account || {}
  const currAccount = (accounts && accounts.find(account => account.id === account_id)) || {}
  const { account_name: currAccountName, account_number: currAccountNo } = currAccount
  const history = useHistory()
  const handleOnClick = ({ transactionId }) => {
    history.push({
      pathname: `/transactions/${transactionId}`,
      state: {
        transactionId
      }
    })
  }

  return (
    <TransactionListContainer>
      <StyRowWrapper>
        <Row>
          <Col>
            <TransactionInfoTitleWrapper>
              <TransactionInfoTitle>
                Transactions of {currAccountName} - {currAccountNo}
              </TransactionInfoTitle>
            </TransactionInfoTitleWrapper>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 12, md: 24, lg: 32 }}>
          {transactions && transactions.length > 0 ? (
            transactions.map(transaction => (
              <StyColWrapper
                className="gutter-row"
                span={12}
                key={transaction.id}
                onClick={() =>
                  handleOnClick({
                    transactionId: transaction.id
                  })
                }
              >
                <Card bordered={true} hoverable style={{ fontWeight: 600 }}>
                  <TransactionInfo>
                    <TransactionInfoContent>Transaction {transaction.id}</TransactionInfoContent>
                  </TransactionInfo>
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
    </TransactionListContainer>
  )
}
export default TransactionList

TransactionList.propTypes = {}
