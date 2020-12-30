import React from 'react';
import { MissionsInfoQuery } from './../../generated/graphql'

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
    data: MissionsInfoQuery
}

const MissionList: React.FC<Props> = ({ data,handleIdChange }) => {
    return (
        <div>
            {/* <ul>
                {data.launches?.map((launchobj, ind) => {
                    return (<li key={ind} onClick={() => handleIdChange(launchobj?.mission_id)}>
                        {launchobj?.mission_name}
                    </li>)
                })}
            </ul> */}


        </div>
    )
}

export default MissionList;