const percentObserver = new IntersectionObserver(entries => {
    console.log(entries)

    Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 1){
            if(entry.target.classList.contains('hide')){
                entry.target.classList.remove('hide')
                entry.target.setAttribute('style', `width: ${Number(entry.target.ariaValueNow)}%; transition: width 1s ease-in-out;`)
            }
        }
    })
})

Array.from(document.querySelectorAll('.percentual')).forEach(element => {
    percentObserver.observe(element)
})

const observer = new IntersectionObserver(entries => {
   // console.log(entries)

    Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 0.5){
            entry.target.classList.add('init-hidden-off')
        }
    })
},{
    threshold: [0, 0.5, 1]
})


Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})
