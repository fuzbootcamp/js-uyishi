let nmain = document.querySelector('.n-main')

const nav = [
    {
        id:1,
        link:'LOGO'
    },
    {
        id:2,
        link:'HTML',
    }, 
    {
        id:3,
        link:'CSS',
    },
    {
        id:4,
        link:'JS',
    },
    {
        id:5,
        link:'HOME',
    }
]

const htmlga = nav.map((el) => {
    let p = document.createElement('p')
    p.innerHTML = el.link
    nmain.appendChild(p)

    nmain.style.display = 'flex'
    nmain.style.gap = '50px'
    nmain.style.justifyContent = 'center'
    nmain.style.backgroundColor = 'aqua'
    p.style.fontSize = '20px'
    p.style.fontWeight = '700'
    p.style.color = '#fff'
})