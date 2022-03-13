
export class newsLoader{
    constructor(options){
        //Filters
        this.setFilter(options.filters);
        //Topics
        this.setTopics(options.topics);
        //Location
        this.setLocation(options.lang_country);
    }
    setTopics(t){
        this.topics=t;
    }
    setLocation(l){
        this.location= l;
    }
    setFilter(f){
        this.filters = f.split(",");
        console.log("🚀 ~ file: newsLoader.js ~ line 20 ~ newsLoader ~ setFilter ~ this.filters", this.filters)
    }
    
    generateGoogleFeedURL(topic){
        console.log("Try to fetch : "+topic);
        let feedUrl = "https://news.google.com";
        if(topic == "topstories"|| topic == "foryou"){
            feedUrl+="/"+topic;
        }else{
            feedUrl += "/headlines/section/topic/"+topic;
        }
        feedUrl += this.location;
        return feedUrl;
    }
    // async await
    async parse(url,topic_){
        var filters =this.filters;
        var json = await fetch(url, { method: 'GET', credentials: 'include' })
        //var json = await fetch('https://src-ntp.vercel.app/news.html')
        .then((res) => {
            return res.text();
        })
        .then((html) => {
            let parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const articles = doc.querySelectorAll('article');
            let result = {
                topic: topic_,
                items : []
            };
            const urlChecklist = []
            articles.forEach(function(node) {
                var item = parser.parseFromString(node.innerHTML, 'text/html');
                const link = (item.querySelector('a[href^="./article"]')).href.replace('./', 'https://news.google.com/') || false
                link && urlChecklist.push(link)
                
                var image =item.querySelector('figure');
                const mainArticle = {
                "title": (item.querySelector('h4'))?item.querySelector('h4').innerText:((item.querySelector('h5'))?item.querySelector('h5').innerText:false),
                "link": link,
                "image":(image)?image.querySelector('img').src: false,
                "source": (item.querySelector('div.wsLqz > a'))?item.querySelector('div.wsLqz > a').innerText: false,
                "source_image": (item.querySelector('div.wsLqz > img'))?item.querySelector('div.wsLqz > img').src : false,
                "time": (item.querySelector('time'))?item.querySelector('time').innerText :false,
                "datetime":(item.querySelector('time'))?item.querySelector('time').getAttribute('datetime'):false,
                "related": []
                }
                
                if(mainArticle.title && mainArticle.source){
                     var filter_result = false;
                    if(filters){
                        (filters).forEach(element => {
                        if((mainArticle.title).includes(element))
                            filter_result=true;

                        });
                    }
                    if(!filter_result)
                    (result.items).push(mainArticle);
                }
            })

            return result;
        }).catch((error) => {
            console.log("🚀 ~ file: newsLoader.js ~ line 80 ~ newsLoader ~ .then ~ error", error)
            return {
                topic: topic_,
                items : undefined
            };
        });
        console.log(json)
        return json;
    }
  
    async get(){
        var fetches = [];
        (this.topics).forEach(t => {
            fetches.push(this.parse(this.generateGoogleFeedURL(t),t))
        });
        let results = await Promise.all(fetches);
        return results;
    }
}

