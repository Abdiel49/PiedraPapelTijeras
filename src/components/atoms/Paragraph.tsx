import '@styles/paragraph.style.css';
import { ParagraphPros } from '@types';

const Paragraph = (props: ParagraphPros) => {
  const style = `paragraph ${!!props.title && "paragraph_title"} ${!!props.subTitle && 'paragraph_sub_title'} ${!!props.center && 'paragraph_center'} ${!!props.body && 'paragraph_body'} ${props.bold && 'paragraph_bold'} ${props.className}`;

  return <p className={style}>{props.value}</p>;
};

export default Paragraph;
