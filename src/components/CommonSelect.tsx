interface CommonSelectProps {
  options: { name: string; id: number }[];
}
const CommonSelect = ({ options }: CommonSelectProps) => {
  return (
    <select>
      <option>Select a value</option>
      {options.map(({ name, id }) => {
        return <option key={id}>{name}</option>;
      })}
    </select>
  );
};

export default CommonSelect;
