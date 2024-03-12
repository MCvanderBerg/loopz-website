import CategoriesIcon from "./CategoriesIcon";

const Row = ({ row }) => (
    <div style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-evenly",
    }}>
        {row.map(item => item)}
        {/*<CategoriesIcon onClick={row[0]?.onClick} image={row[0]?.img} text={row[0]?.text}/>*/}
    </div>
)
const RenderIcons = (Data) => {
    let row = []
    let result = []

    const processedData = Data.map((item, index) => {
            const pushToRow = () => {
                if (row.length === 2) {
                    result.push(<Row row={row}/>);
                    row = []
                }
               return  row.push(item)
            }
            pushToRow()

            if (Data.length - 1 === index) {
                if (row.length === 2) {
                    result.push(<Row row={row}/>);
                }
                return result
            }
        })}


    return(
        <>
        </>
    )
}

export default RenderIcons;