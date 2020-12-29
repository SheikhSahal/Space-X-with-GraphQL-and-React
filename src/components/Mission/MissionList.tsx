import React from 'react';
import { MissionsInfoQuery } from './../../generated/graphql'

interface Props {
    data: MissionsInfoQuery
}

const MissionList: React.FC<Props> = ({ data }) => {
    return (
        <div>

            <div className="col-md-4">

                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            {/* <ul>
                {data.launches?.map((launchobj, ind) => {
                    return (<li key={ind}>
                        {launchobj?.mission_name}
                    </li>)
                })}
            </ul> */}


        </div>
    )
}

export default MissionList;