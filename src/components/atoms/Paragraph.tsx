import '@styles/paragraph.style.css';

export interface ParagraphPros {
  value: string | number;
  title?: boolean;
  subTitle?: boolean;
  body?: boolean;
  className?: string;
  bold?: boolean
  center?: boolean;
}

const Paragraph = (props: ParagraphPros) => {
  const style = `paragraph ${!!props.title && "paragraph_title"} ${!!props.subTitle && 'paragraph_sub_title'} ${!!props.center && 'paragraph_center'} ${!!props.body && 'paragraph_body'}`;

  return <p className={style}>{props.value}</p>;
};

export default Paragraph;
