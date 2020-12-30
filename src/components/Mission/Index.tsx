import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql'
// import MissionList from './MissionList'
import { MissionsInfoQuery } from './../../generated/graphql'

export interface OwnProps {
    handleIdChange: (newId?: number) => void;
  }

// const MissionContainer:React.FC<OwnProps> = ({handleIdChange}) => {
const MissionContainer = ({}) => {
    const {data, error, loading} = useMissionsInfoQuery();
    if(loading)
        return <h2>Loading...</h2>
    if(error || !data)    
        return <h2>Error</h2>;

    console.log(data);
    return (
        <div>
            <h4>Mission Header</h4>
            <ul>
                {data.launches?.map((launchobj, ind) => {
                    return (<li key={ind}>
                        {launchobj?.mission_name}
                    </li>)
                })}
            </ul>


        </div>
    )
}

export default MissionContainer;