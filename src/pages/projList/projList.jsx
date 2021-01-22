import React, { Component } from 'react'
import CardList from '../../components/cardlist'
import Search from '../../components/search'
import classNames from 'classnames'

const TagList = ({selectTag, tagList, onChangeTag}) => {
    return (
        <div className="tags" id="filter-tags">
            {tagList.map((tag) => <span onClick={() => onChangeTag(tag)} className={classNames("tag", tag === selectTag ? "is-info is-light" : "")}>{tag}</span>)}
        </div>
    )
}

class ProjList extends Component {

    state = {
        term: '',
        selectTag: 'all',
        tagList: [
            'all',
            'video',
            '3D'
        ],
        items: [
            {
                "title": "Test",
                "type": "video",
            },
            {
                "title": "New York",
                "description": "New movie",
                "type": "3D"
            },
            {
                "title": "Happy New Year",
                "description": "Show effect",
                "type": "video"
            },
            {
                "title": "Patty in house with pool",
                "description": "Boooooom",
                "type": "3D"
            },
            {
                "title": "Alkashka",
                "description": "",
                "type": "3D"
            }
        ]
    }

    setTerm = (e) => {
        const term = e.target.value;
        this.setState({ term })
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    filterByTag(items, tag) {
        if (tag === "all") {
            return items;
        }

        return items.filter((item) => {
            return item.type === tag
        })
    }

    onChangeTag = (selectTag) => {
        this.setState({ selectTag })
    }

    render() {

        const { term, items, selectTag, tagList } = this.state; 
        const visibleItems = this.search(items, term);
        const filtringItems = this.filterByTag(visibleItems, selectTag);

        return (
            <div className="container is-max-desktop" id="list_projects">
                <div className="is-flex is-justify-content-space-between is-align-content-center">
                    <h3 className="title is-3">
                        Projects
                    </h3>
                    <a href="/add" className="button is-info is-light">
                        <span class="icon">
                            <span className="material-icons">
                                add
                            </span>
                        </span>
                        <span>New</span>
                    </a>
                </div>
                <Search value={term} onChange={this.setTerm} />
                <TagList selectTag={selectTag} tagList={tagList} onChangeTag={this.onChangeTag}/>
                <CardList items={filtringItems} />
            </div>
        )
    }
}

export default ProjList