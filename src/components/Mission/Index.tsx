import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql'
import MissionList from './MissionList'

const MissionContainer = () => {
    const {data, error, loading} = useMissionsInfoQuery();
    if(loading)
        return <h2>Loading...</h2>
    if(error || !data)    
        return <h2>Error</h2>;

    console.log(data);
    return (
        <MissionList data={data} />
    )
}

export default MissionContainer;