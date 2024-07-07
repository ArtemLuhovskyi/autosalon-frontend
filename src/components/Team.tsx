import { forwardRef } from 'react';
import {dataTeam, ITeam} from '../team';
import TeamItem from './TeamItem';

const Team = forwardRef<HTMLDivElement>((props, ref) => {

    return (
        <div ref={ref} className="team line" id="team">
        <div className="container">
            <h2 className="h2-auto-team">Наша команда</h2>
            <div className="team__inner">
                {dataTeam.map((item: ITeam) => (
                    <TeamItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    </div>
    )
})

export default Team