import React from "react";

const Panel = (props) => {
    return (
        <div className="panel">
            <button
                className="uk-button uk-button-primary uk-margin-small-right"
                uk-toggle="target: #modal-open"
                type="button"
            >
                Открыть
            </button>

            <button
                className="uk-button uk-button-primary uk-margin-small-right"
                type="button"
                onClick={() => props.save()}
            >
                Опубликовать
            </button>

            <button
                className="uk-button uk-button-primary uk-margin-small-right"
                type="button"
                onClick={() => props.meta()}
                // uk-toggle="target: #modal-open"
            >
                Редактировать МЕТА
            </button>

            <button
                className="uk-button uk-button-default"
                uk-toggle="target: #modal-backup"
                type="button"
            >
                Востановить
            </button>
        </div>
    )
}

export default Panel;