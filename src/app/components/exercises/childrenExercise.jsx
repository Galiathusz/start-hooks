import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = ({ num }) => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentList>
                <Component num = {num}/>
                <Component num = {num}/>
                <Component num = {num}/>
            </ComponentList>
        </CollapseWrapper>
    );
};

const ComponentList = ({ children }) => {
    children = React.Children.toArray(children);
    console.log(children);
    return React.Children.map(children, (child) => {
            const config = {
                ...child.props,
                num: Number(child.key[1]) + 1
            };
            return React.cloneElement(child, config);
        });
};

const Component = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};

ComponentList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    num: PropTypes.number
};

Component.propTypes = {
    num: PropTypes.number
};

ChildrenExercise.propTypes = {
    num: PropTypes.number
};

export default ChildrenExercise;
