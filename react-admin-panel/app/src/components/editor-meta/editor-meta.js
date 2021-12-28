import React from "react";

export default class EditorMeta extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {modal, target} = this.props;
        return (
            <div id={target} uk-modal={modal.toString()}>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">Редактировать</h2>
                </div>
            </div>
        )
    }
}