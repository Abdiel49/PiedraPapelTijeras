
export interface ParagraphPros {
  value: string;
}
const Paragraph = (props: ParagraphPros) => {
  return <p>{props.value}</p>;
};

export default Paragraph;
