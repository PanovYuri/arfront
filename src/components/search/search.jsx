import React from 'react'

const Search = ({value, onChange}) => {

    return (
        <div class="field">
            <p class="control has-icons-left">
                <input value={value} onChange={onChange} class="input is-rounded" type="text" placeholder="Поиск" />
                <span class="icon is-small is-left">
                    <span class="material-icons">
                        search
                    </span>
                </span>
            </p>
        </div>
    )
}

export default Search