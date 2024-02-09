// CO2Tag.tsx
import React from 'react';
import { Co2TagContainer, Co2TagItem, Co2TagTextStyle } from './styles';
import { CustomTooltip } from '../CustomToolTip';

export type CO2TagProps = {
  positive: boolean;
  wording?: string;
  tooltip?: boolean;
  modalText?: string;
};

const CO2Tag: React.FC<CO2TagProps> = ({ positive, wording, tooltip, modalText }) => {
  return (
    <Co2TagContainer>
      <Co2TagItem positive={positive}>
        <Co2TagTextStyle>{wording}</Co2TagTextStyle>
        {tooltip && <CustomTooltip content={modalText} />}
      </Co2TagItem>
    </Co2TagContainer>
  );
};

export default CO2Tag;
