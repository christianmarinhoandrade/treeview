import "module-alias/register"

import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();

configure({ adapter: new Adapter() });

export { shallow, mount, render };
export default Enzyme;