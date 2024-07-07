import {dataTeam, ITeam} from '../team';


export default function TeamItem(props: ITeam) {
    const {id, img, title, decription} = props;
    return (
            <div className="team__item">
                <img className="team__photo" src={img} alt=""/>
                <div className="team__name">{title}</div>
                <div className="team__prof">{decription}</div>
            </div>
    )
}