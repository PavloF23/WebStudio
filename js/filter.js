function app() {
    const buttons = document.querySelectorAll('.btn')
    const elements = document.querySelectorAll('.element__item') 

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const currentCategory = btn.dataset.filter
            filter(currentCategory, elements)
            
        })
    })
}

app()