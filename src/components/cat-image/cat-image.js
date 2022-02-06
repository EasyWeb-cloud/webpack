import Cat from './cat.jpg'
import './cat-image.scss'

class CatImage {
    render(){
        const image = document.createElement('img')
        const body = document.querySelector('body')

        image.src = Cat
        image.alt = 'Kittyyy'
        image.classList = 'cat-image'

        body.appendChild(image)
    }
}

export default CatImage