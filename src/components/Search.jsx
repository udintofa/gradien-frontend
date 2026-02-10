import { useState } from 'react';

export default function Search (props) {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [isSearching, setIsSearching] = useState(true);

    function onChangeSearchKeyword () {
        props.onSearchChange(searchKeyword)
        setIsSearching(searchKeyword.trim() !== '')
    }

    function onKeyDownSearchKeyword (event) {
        if (event.key === 'Enter') {
            onChangeSearchKeyword()
        }
    }

    return (
        <>
            <div>
                Cari artikel: <input 
                type="text"
                placeholder="Masukkan kata kunci..." 
                onChange={e => setSearchKeyword(e.target.value)}
                onKeyDown={ onKeyDownSearchKeyword }
                />
                <button onClick={ onChangeSearchKeyword }>Cari</button>
            </div>
            {isSearching ? <small>Ditemukan {props.articleCount} artikel dengan kata kunci {searchKeyword}</small> : <small>Total artikel: {props.articleCount}</small>}
        </>
    )
}