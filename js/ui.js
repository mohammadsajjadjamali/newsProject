class UI {
    constructor() {
        this.result = document.querySelector('#result')
    }
    // show any message in HTML
    printMessage(message, className) {
        // create div tag
        const div = document.createElement('div')
        // append text message to the div tag
        div.appendChild(document.createTextNode(message))
        // append class Name to the tag
        div.className = className
        // show the message into the html
        document.querySelector('#message').appendChild(div)

        // remove message after 3second
        setTimeout(() => {
            this.removeMessage()
        }, 3000);
    }

    // remove message after showing into the html
    removeMessage() {
        const alert = document.querySelector('.alert')

        if (alert) {
            alert.remove()
        }
    }

    // showing result into the html
    showNews(news) {
        news.forEach(newsInfo => {
            console.log(newsInfo)
            this.result.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <img src="${newsInfo.urlToImage}" class="card-img-top" alt="...">
                            <h2 class="card-title text-center">${newsInfo.title.slice(0,20)}</h2>
                            <p class="card-text lead textto-info">news information:</p>
                            <h4 class="card-title text-center">${newsInfo.description.slice(0,50)}</h4>
                            <span class="badge badge-primary">source: ${newsInfo.source.name}</span>
                            <span class="badge badge-primary mt-2"">Date & time: ${newsInfo.publishedAt}</span>
                            <br>
                            <a href="${newsInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Complete News</a>
                        </div>
                    </div>
                </div>
            `
        });
    }
}