let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
    // REPLACE <button> WITH CUSTOM <input>
    let replacementEl = document.createElement("input");
    replacementEl.classList.add('form-input');
    replacementEl.attributes.type = 'text';
    replacementEl.attributes.id = 'search-input';
    replacementEl.attributes.placeholder = 'Search';

    let searchingBtn = document.createElement("button");
    searchingBtn.classList = "btn btn-primary input-group-btn";
    
    let iconNode = document.createElement('i');
    iconNode.classList = "icon icon-search";
    searchingBtn.appendChild(iconNode);
    
    searchParent = searchBtn.parentNode;
    searchParent.classList.add('input-group');

    searchParent.appendChild(searchingBtn);

    // MOVE IT, THEN REMOVE IT
    searchParent.insertBefore(replacementEl, searchBtn);
    searchBtn.parentNode.removeChild(searchBtn);
})