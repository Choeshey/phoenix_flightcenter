import "./background.css"
import paviation from "../../assets/paviation.mp4"
import paviation1 from "../../assets/paviation1.jpg"
import paviation2 from "../../assets/paviation2.jpg"
import paviation3 from "../../assets/paviation3.jpg"
import paviation4 from "../../assets/paviation4.jpg"
import paviation5 from "../../assets/paviation5.jpg"

const Background = ({playStatus, heroCount}) => {
    if (playStatus) {
        return (
            <video className="background" autoPlay loop muted width="100%" height="100%">
                <source src={paviation} type="video/mp4"/>
            </video>
        )
    } else if (heroCount===0)
    {
        return <img src={paviation1} className="background" alt="background"/>
    } else if (heroCount===1)
    {
        return <img src={paviation2} className="background" alt="background"/>
    } else if (heroCount===2)
    {
        return <img src={paviation3} className="background" alt="background"/>
    } else if (heroCount===3)
    {
        return <img src={paviation4} className="background" alt="background"/>
    } else if (heroCount===4)
    {
        return <img src={paviation5} className="background" alt="background"/>
    }
}
export default Background
