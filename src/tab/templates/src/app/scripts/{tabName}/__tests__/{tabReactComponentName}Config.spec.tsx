import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { <%=tabReactComponentName%>Config } from "../<%=tabReactComponentName%>Config";

describe("<%=tabReactComponentName%>Config Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<<%=tabReactComponentName%>Config />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<<%=tabReactComponentName%>Config />);
        const divResult = component.containsMatchingElement(<div>Configure your tab</div>);

        expect(divResult).toBeTruthy();
    });
});
