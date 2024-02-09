import styled from '@emotion/styled'

export const DivTooltip = styled.div`
  position: relative;
`

export const TooltipIconStyle = styled.span<{
  dark?: boolean
  hover?: boolean
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ dark }) => (dark ? '12px' : '15px')};
  height: ${({ dark }) => (dark ? '12px' : '15px')};
  font-size: ${({ dark }) => (dark ? '10px' : '12px')};
  color: ${({ dark }) => (dark ? '#fff' : '#152a4c')};
  background-color: ${({ dark }) => (dark ? '#495A74' : 'none')};
  border: ${({ dark }) => (dark ? 'none' : '1px solid #152a4c')};
  border-radius: 50%;
  cursor: ${({ hover }) => (hover ? 'default' : 'pointer')};
  margin-left: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
`

export const TooltipNoIconStyle = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const TooltipContentStyle = styled.div`
  font-size: 10px;
  width: 300px;
  box-shadow: 0px 0px 5px #142a4c80;
  border-radius: 10px;
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  padding: 10px;
  top: 10px;
  right: 0;
  color: #707e89;
  text-align: left;
  background-color: white;
  z-index: 200;
  border: 1px solid #707e89;
  max-width: 250px;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: transparent;
`
