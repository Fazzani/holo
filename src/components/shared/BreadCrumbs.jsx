import React from "react";

export default props => (
    <div className="container-fluid">
        <ul className="breadcrumb">
            {/* <pre>{JSON.stringify(props.breadcrumbs.slice(1))}</pre> */}

            {props.breadcrumbs.length === 1 && (
                <h2 className="h5 no-margin-bottom">
                    {props.breadcrumbs[0].pageName}
                </h2>
            )}
            {props.breadcrumbs.length > 1 &&
                props.breadcrumbs.map(
                    (item, index) =>
                        index === 0 ? (
                            <li
                                className="breadcrumb-item"
                                key={props.breadcrumbs[0].pageName}
                            >
                                <a href="/">{props.breadcrumbs[0].pageName}</a>
                            </li>
                        ) : (
                            <li
                                className="breadcrumb-item active"
                                key={item.pageName}
                            >
                                {item.pageName}
                            </li>
                        )
                )}
        </ul>
    </div>
);
