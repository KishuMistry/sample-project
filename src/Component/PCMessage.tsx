interface Props {
  text: string;
}
function PCMessage(props: Props) {
  return <h1>{props.text}</h1>;
}
export default PCMessage;
