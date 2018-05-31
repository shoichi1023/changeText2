import { StackNavigator } from 'react-navigation';
import Input from './Input';
import Result from './Result';

export const rootCom = 'Input';

const pageNation = StackNavigator({
  Input: {
    screen:Input,
  },
  Result: {
    screen:Result,
  },
});

export default pageNation;