import React from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql'
import MissionInfo from './MissionInfo'

interface OwnPorps{
    id:number;
}

const MissionInfoContainer = ({id}: OwnPorps) => {

    const { data, loading, error } = useLaunchMissionInfoQuery({
        variables: {
            id: String(id)
        },
    });

    if (loading)
        return <h2>Loading...</h2>
    if (error || !data)
        return <h2>Error</h2>;

    console.log(data);


    return (
        <div>
            <h4>Mission Details</h4>
            <MissionInfo data={data} /> 
        </div>
    )
}

export default MissionInfoContainer;