export const CreateOption = ({optionName, onClick}) => (
  <div className="CreateOptionContainer" onClick={onClick}>
    <p>{optionName}</p>
  </div>
);
