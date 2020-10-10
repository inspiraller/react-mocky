import { withElem } from 'src/Main/Styles/withStyle';
import { TStyles } from 'src/Main/Styles/Theme';

const styles: TStyles = ({ theme: { pad20 } }) => `
  clear: both; /* fix legend */
  display: inline-block;
  margin: 0 0 0 ${pad20};
`;

export default () => withElem('span', styles);
