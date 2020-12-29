import React from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'

interface Props {
    data: LaunchMissionInfoQuery
}

const MissionInfo: React.FC<Props> = ({ data }) => {
    console.log(data);
    return (
        <div>
         {JSON.stringify({data})}

        </div>
    )
}

export default MissionInfo;