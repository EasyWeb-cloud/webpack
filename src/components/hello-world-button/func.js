import './func.scss'

class HelloWorldButton {
    buttonCssClass = 'hello-world-button'
    textCssClass = 'hello-world-text'

    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add(this.buttonCssClass)
        const body = document.querySelector('body')
        button.onclick = function(){
            const p = document.createElement('p')
            p.innerHTML = 'Clicked!!'
            p.classList.add(this.textCssClass)
            body.appendChild(p)
        }.bind(this)
        body.appendChild(button)
    }
}

export default HelloWorldButton