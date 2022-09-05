export const BasicButton = (props) => {
  const onClickAleart = () => {
    alert("クリックされました");
  };
  const { children, backgroundColor } = props;

  return <button style={{backgroundColor}} onClick={onClickAleart}>{children}</button>;
};
