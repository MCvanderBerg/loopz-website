import CategoriesIcon from "../components/CategoriesIcon";
import {Router} from "../types/Types";
import {useNavigate} from "react-router-dom";
import '../components/Categories.css'
import sport from "../assets/Sports.webp";
import comedy from "../assets/Comedy.webp";
import participateSport from "../assets/ParticipateInSport.webp"
import social from "../assets/Social.webp"
import GoBackButton from "../components/goBackButton";
import CategoriesLabel from "../components/categoriesLabel";



const Row = ({ row }) => (
    <div style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-evenly",
    }}>
        <CategoriesIcon onClick={row[0]?.onClick} image={row[0]?.img} text={row[0]?.text}/>
        <CategoriesIcon onClick={row[1]?.onClick} image={row[1]?.img} text={row[1]?.text}/>
    </div>
)
const CategoriesScreen = () => {
    const navigate = useNavigate()


    const onClick = () => {
        navigate(Router.Category)
    }

    const Categories = [
        {
            onClick: onClick,
            img: sport,
            text: "Sport"
        },
        {
            onClick: onClick,
            img: comedy,
            text: "Comedy"
        },
        {
            onClick: onClick,
            img: social,
            text: "Social"
        },
        {
            onClick: onClick,
            img: participateSport,
            text: "Participate in  Sport"
        },

    ]


    let row = []
    let result = []

    return (
        <div>
            <div className="Categories">
                <GoBackButton/>
                {Categories.map((category, index) => {
                    const pushToRow = () => {
                        if (row.length === 2) {
                            result.push(<Row row={row}/>);
                            row = []
                        }
                        row.push(category)
                    }
                    pushToRow()

                    if (Categories.length - 1 === index) {
                        if (row.length === 2) {
                            result.push(<Row row={row}/>);
                        }
                        return result
                    }
                })}
                <CategoriesLabel text="Sport"/>
            </div>
        </div>
    )
}

export default CategoriesScreen;
